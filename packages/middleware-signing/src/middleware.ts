import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  AuthScheme,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { AwsAuthResolvedConfig } from "./configurations";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";

/**
 * @internal
 */
export const awsAuthMiddleware =
  <Input extends object, Output extends object>(
    options: AwsAuthResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
    async function (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);

      // TODO(identityandauth): call authScheme resolver
      const authScheme: AuthScheme | undefined = context.endpointV2?.properties?.authSchemes?.[0];

      const multiRegionOverride: string | undefined =
        authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;

      const signer = await options.signer(authScheme);

      const output = await next({
        ...args,
        request: await signer.sign(args.request, {
          signingDate: getSkewCorrectedDate(options.systemClockOffset),
          signingRegion: multiRegionOverride || context["signing_region"],
          signingService: context["signing_service"],
        }),
      }).catch((error) => {
        const serverTime: string | undefined = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
          options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
        }
        throw error;
      });

      const dateHeader = getDateHeader(output.response);
      if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
      }

      return output;
    };

/**
 * @internal
 */
const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

/**
 * @internal
 */
export const awsAuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

/**
 * @internal
 */
export const getAwsAuthPlugin = (options: AwsAuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  },
});

/**
 * @internal
 */
export const getSigV4AuthPlugin = getAwsAuthPlugin;

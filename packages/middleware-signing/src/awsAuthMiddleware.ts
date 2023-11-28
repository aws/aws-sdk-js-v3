import { AwsCredentialIdentity } from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import {
  AuthScheme,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@smithy/types";

import { AwsAuthResolvedConfig } from "./awsAuthConfiguration";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";

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

      let signedRequest: IHttpRequest;
      const signingOptions = {
        signingDate: getSkewCorrectedDate(options.systemClockOffset),
        signingRegion: multiRegionOverride || context["signing_region"],
        signingService: context["signing_service"],
      };

      if (context.s3ExpressIdentity) {
        // the signer is expected to be SignatureV4MultiRegion for S3.
        const sigV4MultiRegion = signer as typeof signer & {
          signWithCredentials(
            req: IHttpRequest,
            identity: AwsCredentialIdentity,
            opts?: Partial<typeof signingOptions>
          ): Promise<IHttpRequest>;
        };

        signedRequest = await sigV4MultiRegion.signWithCredentials(
          args.request,
          context.s3ExpressIdentity,
          signingOptions
        );

        if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
          throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
        }
      } else {
        signedRequest = await signer.sign(args.request, signingOptions);
      }

      const output = await next({
        ...args,
        request: signedRequest,
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

const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

export const awsAuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const getAwsAuthPlugin = (options: AwsAuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  },
});

export const getSigV4AuthPlugin = getAwsAuthPlugin;

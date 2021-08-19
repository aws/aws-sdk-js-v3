import { HttpRequest } from "@aws-sdk/protocol-http";
import {
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

export const awsAuthMiddleware =
  <Input extends object, Output extends object>(
    options: AwsAuthResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
    async function (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);
      const signer = await options.signer();
      const output = await next({
        ...args,
        request: await signer.sign(args.request, {
          signingDate: getSkewCorrectedDate(options.systemClockOffset),
          signingRegion: context["signing_region"],
          signingService: context["signing_service"],
        }),
      }).catch((error) => {
        if (error.ServerTime) {
          options.systemClockOffset = getUpdatedSystemClockOffset(error.ServerTime, options.systemClockOffset);
        }
        throw error;
      });

      const { headers } = output.response as any;
      const dateHeader = headers && (headers.date || headers.Date);
      if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
      }

      return output;
    };

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

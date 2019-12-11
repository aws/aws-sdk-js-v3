import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeRequestMiddleware,
  FinalizeHandlerOutput,
  Pluggable,
  RelativeLocation,
  FinalizeRequestHandlerOptions
} from "@aws-sdk/types";
import { AwsAuthResolvedConfig } from "./configurations";
import { HttpRequest } from "@aws-sdk/protocol-http";

const isClockSkewed = (newServerTime: number, systemClockOffset: number) =>
  Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >=
  300000;

const getSkewCorrectedDate = (systemClockOffset: number) =>
  new Date(Date.now() + systemClockOffset);

export function awsAuthMiddleware<Input extends object, Output extends object>(
  options: AwsAuthResolvedConfig
): FinalizeRequestMiddleware<Input, Output> {
  return (
    next: FinalizeHandler<Input, Output>
  ): FinalizeHandler<Input, Output> =>
    async function(
      args: FinalizeHandlerArguments<Input>
    ): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);
      const signer =
        typeof options.signer === "function"
          ? await options.signer()
          : options.signer;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, {
          signingDate: new Date(Date.now() + options.systemClockOffset)
        })
      });

      const { headers } = output.response as any;
      const dateHeader = headers && (headers.date || headers.Date);
      if (dateHeader) {
        const serverTime = Date.parse(dateHeader);
        if (isClockSkewed(serverTime, options.systemClockOffset)) {
          options.systemClockOffset = serverTime - Date.now();
        }
      }

      return output;
    };
}

export const awsAuthMiddlewareOptions: FinalizeRequestHandlerOptions &
  RelativeLocation<any, any> = {
  name: "awsAuthMiddleware",
  step: "finalizeRequest",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware"
};

export const getAwsAuthPlugin = (
  options: AwsAuthResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.addRelativeTo(
      awsAuthMiddleware(options),
      awsAuthMiddlewareOptions
    );
  }
});

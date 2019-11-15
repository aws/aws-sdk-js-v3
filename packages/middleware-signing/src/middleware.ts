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
      return next({
        ...args,
        request: await options.signer.sign(args.request)
      });
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

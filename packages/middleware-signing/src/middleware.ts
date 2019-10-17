import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeRequestMiddleware,
  FinalizeHandlerOutput
} from "@aws-sdk/types";
import { AwsAuthConfig } from "./configurations";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function signingMiddleware<Input extends object, Output extends object>(
  options: AwsAuthConfig.Resolved
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

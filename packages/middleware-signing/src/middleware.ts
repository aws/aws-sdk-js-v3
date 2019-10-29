import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeRequestMiddleware,
  FinalizeHandlerOutput,
  Pluggable
} from "@aws-sdk/types";
import { AwsAuthConfigResolved } from "./configurations";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function signingMiddleware<Input extends object, Output extends object>(
  options: AwsAuthConfigResolved
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

export const getAwsAuthPlugin = (
  options: AwsAuthConfigResolved
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(signingMiddleware(options), {
      step: "finalizeRequest",
      tags: { SIGNATURE: true }
    });
  }
});

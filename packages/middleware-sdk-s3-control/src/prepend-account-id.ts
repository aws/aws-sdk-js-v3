import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function prependAccountIdMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let { request } = args;
    const { input } = args;
    if (HttpRequest.isInstance(request) && input.AccountId) {
      const newHostname = input.AccountId + "." + request.hostname;
      request.hostname = newHostname;
      delete request.headers["x-amz-account-id"];
    }
    return next({
      ...args,
      request
    });
  };
}

export const prependAccountIdMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["PREPEND_ACCOUNT_ID_MIDDLEWARE"],
  name: "prependAccountIdMiddleware"
};

export const getPrependAccountIdPlugin = (
  unused: any
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      prependAccountIdMiddleware(),
      prependAccountIdMiddlewareOptions
    );
  }
});

import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

export function prependAccountIdMiddleware(): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    const { input } = args;
    const accountId = input.AccountId;
    if (typeof accountId !== "string") {
      throw new Error("ValidationError: AccountId must be a string.");
    }
    if (accountId.length < 1 || accountId.length > 63) {
      throw new Error("ValidationError: AccountId length should be between 1 to 63 characters, inclusive.");
    }
    //validate pattern
    const hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
    if (!hostPattern.test(accountId)) {
      throw new Error("ValidationError: AccountId should be hostname compatible. AccountId: " + accountId);
    }
    if (HttpRequest.isInstance(request) && input.AccountId) {
      const newHostname = input.AccountId + "." + request.hostname;
      request.hostname = newHostname;
      delete request.headers["x-amz-account-id"];
    }
    return next({
      ...args,
      request,
    });
  };
}

export const prependAccountIdMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["PREPEND_ACCOUNT_ID_MIDDLEWARE"],
  name: "prependAccountIdMiddleware",
  relation: "before",
  toMiddleware: "hostHeaderMiddleware",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPrependAccountIdPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(prependAccountIdMiddleware(), prependAccountIdMiddlewareOptions);
  },
});

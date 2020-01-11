import {
  HttpResponse,
  InitializeHandler,
  InitializeMiddleware,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";

export function validateAccountIdMiddleware(): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const accountId = args.input.AccountId;
    if (typeof accountId !== "string") {
      throw new Error("ValidationError: AccountId must be a string.");
    }
    if (accountId.length < 1 || accountId.length > 63) {
      throw new Error(
        "ValidationError: AccountId length should be between 1 to 63 characters, inclusive."
      );
    }
    //validate pattern
    const hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
    if (!hostPattern.test(accountId)) {
      throw new Error(
        "ValidationError: AccountId should be hostname compatible. AccountId: " +
          accountId
      );
    }
    return next({
      ...args
    });
  };
}

export const validateAccountIdMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_ACCOUNT_ID_MIDDLEWARE"],
  name: "validateAccountIdMiddleware"
};

export const getValidateAccountIdPlugin = (): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      validateAccountIdMiddleware(),
      validateAccountIdMiddlewareOptions
    );
  }
});

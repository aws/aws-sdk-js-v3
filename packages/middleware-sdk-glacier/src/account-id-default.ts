import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
} from "@smithy/types";

export function accountIdDefaultMiddleware(): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const { input } = args;
      if (input.accountId === undefined) {
        input.accountId = "-";
      }
      return next({ ...args, input });
    };
}

export const accountIdDefaultMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["ACCOUNT_ID_DEFAULT"],
  name: "accountIdDefaultMiddleware",
  override: true,
};

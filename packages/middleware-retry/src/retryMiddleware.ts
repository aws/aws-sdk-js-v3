import {
  AbsoluteLocation,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

import { RetryResolvedConfig } from "./configurations";

export const retryMiddleware = (options: RetryResolvedConfig) => <Output extends MetadataBearer = MetadataBearer>(
  next: FinalizeHandler<any, Output>
): FinalizeHandler<any, Output> => async (
  args: FinalizeHandlerArguments<any>
): Promise<FinalizeHandlerOutput<Output>> => options.retryStrategy.retry(next, args);

export const retryMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
};

export const getRetryPlugin = (options: RetryResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  },
});

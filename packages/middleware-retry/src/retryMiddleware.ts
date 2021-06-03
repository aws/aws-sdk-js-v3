import {
  AbsoluteLocation,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

import { RetryResolvedConfig } from "./configurations";

export const retryMiddleware =
  (options: RetryResolvedConfig) =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output>,
    context: HandlerExecutionContext
  ): FinalizeHandler<any, Output> =>
  async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
    const retryStrategy = await options.retryStrategy();
    if (retryStrategy?.mode) context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  };

export const retryMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true,
};

export const getRetryPlugin = (options: RetryResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  },
});

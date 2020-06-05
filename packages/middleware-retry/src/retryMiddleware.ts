import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  FinalizeHandlerOutput,
  Pluggable,
  FinalizeRequestHandlerOptions,
  AbsoluteLocation
} from "@aws-sdk/types";
import { RetryResolvedConfig } from "./configurations";

export function retryMiddleware(options: RetryResolvedConfig) {
  return <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output>
  ): FinalizeHandler<any, Output> => async (
    args: FinalizeHandlerArguments<any>
  ): Promise<FinalizeHandlerOutput<Output>> => {
    return options.retryStrategy.retry(next, args);
  };
}

export const retryMiddlewareOptions: FinalizeRequestHandlerOptions &
  AbsoluteLocation = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high"
};

export const getRetryPlugin = (
  options: RetryResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    if (options.maxAttempts > 1) {
      clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    }
  }
});

import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  FinalizeHandlerOutput,
  Pluggable
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

export const getRetryPlugin = (
  options: RetryResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    if (options.maxRetries > 0) {
      clientStack.add(retryMiddleware(options), {
        step: "finalizeRequest",
        tags: { RETRY: true }
      });
    }
  }
});

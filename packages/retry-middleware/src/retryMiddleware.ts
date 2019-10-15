import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  FinalizeHandlerOutput,
  Injectable
} from "@aws-sdk/types";
import { RetryConfig } from "./configurations";

export function retryMiddleware(options: RetryConfig.Resolved) {
  return <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output>
  ): FinalizeHandler<any, Output> => async (
    args: FinalizeHandlerArguments<any>
  ): Promise<FinalizeHandlerOutput<Output>> => {
    return options.retryStrategy.retry(next, args);
  };
}

export const retryPlugin = (
  options: RetryConfig.Resolved
): Injectable<any, any> => ({
  injectedMiddleware: [
    {
      middleware: retryMiddleware(options),
      step: "finalizeRequest",
      tags: { RETRY: true }
    }
  ]
});

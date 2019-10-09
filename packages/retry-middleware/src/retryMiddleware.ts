import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  FinalizeHandlerOutput,
  InjectableMiddleware
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

export function retryPlugin<
  Input extends object,
  Output extends MetadataBearer
>(options: RetryConfig.Resolved): InjectableMiddleware<Input, Output> {
  return {
    middleware: retryMiddleware(options),
    step: "finalizeRequest",
    tags: { RETRY: true }
  };
}

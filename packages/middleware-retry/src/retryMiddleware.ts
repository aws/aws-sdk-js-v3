import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  FinalizeHandlerOutput
} from "@aws-sdk/types";
import { Retry } from "./configurations";

export function retryMiddleware(options: Retry.Resolved) {
  return <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output>
  ): FinalizeHandler<any, Output> => async (
    args: FinalizeHandlerArguments<any>
  ): Promise<FinalizeHandlerOutput<Output>> => {
    return options.retryStrategy.retry(next, args);
  };
}

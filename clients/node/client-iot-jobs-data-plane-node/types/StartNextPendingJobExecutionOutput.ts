import { _UnmarshalledJobExecution } from "./_JobExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartNextPendingJobExecutionOutput shape
 */
export interface StartNextPendingJobExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A JobExecution object.</p>
   */
  execution?: _UnmarshalledJobExecution;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

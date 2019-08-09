import { _UnmarshalledJobExecutionSummary } from "./_JobExecutionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPendingJobExecutionsOutput shape
 */
export interface GetPendingJobExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of JobExecutionSummary objects with status IN_PROGRESS.</p>
   */
  inProgressJobs?: Array<_UnmarshalledJobExecutionSummary>;

  /**
   * <p>A list of JobExecutionSummary objects with status QUEUED.</p>
   */
  queuedJobs?: Array<_UnmarshalledJobExecutionSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

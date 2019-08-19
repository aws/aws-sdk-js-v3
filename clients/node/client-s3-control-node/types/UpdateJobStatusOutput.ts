import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobStatusOutput shape
 */
export interface UpdateJobStatusOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID for the job whose status was updated.</p>
   */
  JobId?: string;

  /**
   * <p>The current status for the specified job.</p>
   */
  Status?:
    | "Active"
    | "Cancelled"
    | "Cancelling"
    | "Complete"
    | "Completing"
    | "Failed"
    | "Failing"
    | "New"
    | "Paused"
    | "Pausing"
    | "Preparing"
    | "Ready"
    | "Suspended"
    | string;

  /**
   * <p>The reason that the specified job's status was updated.</p>
   */
  StatusUpdateReason?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

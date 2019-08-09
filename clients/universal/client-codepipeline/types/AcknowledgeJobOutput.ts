import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of an AcknowledgeJob action.</p>
 */
export interface AcknowledgeJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Whether the job worker has received the specified job.</p>
   */
  status?:
    | "Created"
    | "Queued"
    | "Dispatched"
    | "InProgress"
    | "TimedOut"
    | "Succeeded"
    | "Failed"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

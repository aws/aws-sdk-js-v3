import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of an AcknowledgeThirdPartyJob action.</p>
 */
export interface AcknowledgeThirdPartyJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status information for the third party job, if any.</p>
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

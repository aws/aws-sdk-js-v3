import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateScheduledAuditOutput shape
 */
export interface CreateScheduledAuditOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

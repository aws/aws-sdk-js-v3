import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for Publish action.</p>
 */
export interface PublishOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique identifier assigned to the published message.</p> <p>Length Constraint: Maximum 100 characters</p>
   */
  MessageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

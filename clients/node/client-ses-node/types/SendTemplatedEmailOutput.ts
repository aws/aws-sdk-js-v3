import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendTemplatedEmailOutput shape
 */
export interface SendTemplatedEmailOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique message identifier returned from the <code>SendTemplatedEmail</code> action. </p>
   */
  MessageId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

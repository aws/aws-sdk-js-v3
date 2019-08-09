import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartOutboundVoiceContactOutput shape
 */
export interface StartOutboundVoiceContactOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier of this contact within your Amazon Connect instance.</p>
   */
  ContactId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

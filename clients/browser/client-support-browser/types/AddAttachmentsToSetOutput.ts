import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.</p>
 */
export interface AddAttachmentsToSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the attachment set. If an <code>attachmentSetId</code> was not specified, a new attachment set is created, and the ID of the set is returned in the response. If an <code>attachmentSetId</code> was specified, the attachments are added to the specified set, if it exists.</p>
   */
  attachmentSetId?: string;

  /**
   * <p>The time and date when the attachment set expires.</p>
   */
  expiryTime?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

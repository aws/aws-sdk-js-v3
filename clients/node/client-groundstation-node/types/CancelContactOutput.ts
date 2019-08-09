import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CancelContactOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

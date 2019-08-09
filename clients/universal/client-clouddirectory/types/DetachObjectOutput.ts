import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetachObjectOutput shape
 */
export interface DetachObjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ObjectIdentifier</code> that was detached from the object.</p>
   */
  DetachedObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

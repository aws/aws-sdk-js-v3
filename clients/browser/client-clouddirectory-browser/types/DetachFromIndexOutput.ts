import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetachFromIndexOutput shape
 */
export interface DetachFromIndexOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

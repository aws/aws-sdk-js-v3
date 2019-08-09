import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachToIndexOutput shape
 */
export interface AttachToIndexOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

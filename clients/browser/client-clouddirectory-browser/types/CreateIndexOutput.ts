import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIndexOutput shape
 */
export interface CreateIndexOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

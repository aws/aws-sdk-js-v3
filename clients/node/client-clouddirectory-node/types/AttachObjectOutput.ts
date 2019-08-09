import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachObjectOutput shape
 */
export interface AttachObjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attached <code>ObjectIdentifier</code>, which is the child <code>ObjectIdentifier</code>.</p>
   */
  AttachedObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

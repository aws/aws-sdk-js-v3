import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateObjectAttributesOutput shape
 */
export interface UpdateObjectAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ObjectIdentifier</code> of the updated object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

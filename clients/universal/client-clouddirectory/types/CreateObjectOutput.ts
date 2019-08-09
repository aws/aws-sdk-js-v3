import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateObjectOutput shape
 */
export interface CreateObjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier that is associated with the object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

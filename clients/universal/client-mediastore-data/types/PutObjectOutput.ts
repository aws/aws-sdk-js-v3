import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutObjectOutput shape
 */
export interface PutObjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The SHA256 digest of the object that is persisted.</p>
   */
  ContentSHA256?: string;

  /**
   * <p>Unique identifier of the object in the container.</p>
   */
  ETag?: string;

  /**
   * <p>The storage class where the object was persisted. The class should be “Temporal”.</p>
   */
  StorageClass?: "TEMPORAL" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

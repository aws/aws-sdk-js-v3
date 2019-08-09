import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CompleteMultipartUploadOutput shape
 */
export interface CompleteMultipartUploadOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  Location?: string;

  /**
   * <p/>
   */
  Bucket?: string;

  /**
   * <p/>
   */
  Key?: string;

  /**
   * <p>If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * <p>The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).</p>
   */
  ServerSideEncryption?: "AES256" | "aws:kms" | string;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCertificateAuthorityAuditReportOutput shape
 */
export interface DescribeCertificateAuthorityAuditReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies whether report creation is in progress, has succeeded, or has failed.</p>
   */
  AuditReportStatus?: "CREATING" | "SUCCESS" | "FAILED" | string;

  /**
   * <p>Name of the S3 bucket that contains the report.</p>
   */
  S3BucketName?: string;

  /**
   * <p>S3 <b>key</b> that uniquely identifies the report file in your S3 bucket.</p>
   */
  S3Key?: string;

  /**
   * <p>The date and time at which the report was created.</p>
   */
  CreatedAt?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

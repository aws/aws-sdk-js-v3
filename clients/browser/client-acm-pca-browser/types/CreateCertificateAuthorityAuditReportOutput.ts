import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCertificateAuthorityAuditReportOutput shape
 */
export interface CreateCertificateAuthorityAuditReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An alphanumeric string that contains a report identifier.</p>
   */
  AuditReportId?: string;

  /**
   * <p>The <b>key</b> that uniquely identifies the report file in your S3 bucket.</p>
   */
  S3Key?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

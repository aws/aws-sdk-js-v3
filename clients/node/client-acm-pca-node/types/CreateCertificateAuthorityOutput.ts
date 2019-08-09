import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCertificateAuthorityOutput shape
 */
export interface CreateCertificateAuthorityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

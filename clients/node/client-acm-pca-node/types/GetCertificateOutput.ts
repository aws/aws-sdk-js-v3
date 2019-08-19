import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCertificateOutput shape
 */
export interface GetCertificateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The base64 PEM-encoded certificate specified by the <code>CertificateArn</code> parameter.</p>
   */
  Certificate?: string;

  /**
   * <p>The base64 PEM-encoded certificate chain that chains up to the on-premises root CA certificate that you used to sign your private CA certificate. </p>
   */
  CertificateChain?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

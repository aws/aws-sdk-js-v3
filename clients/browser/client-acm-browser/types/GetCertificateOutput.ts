import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCertificateOutput shape
 */
export interface GetCertificateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>String that contains the ACM certificate represented by the ARN specified at input.</p>
   */
  Certificate?: string;

  /**
   * <p>The certificate chain that contains the root certificate issued by the certificate authority (CA).</p>
   */
  CertificateChain?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

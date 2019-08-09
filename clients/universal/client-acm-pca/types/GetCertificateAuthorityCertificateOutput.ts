import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCertificateAuthorityCertificateOutput shape
 */
export interface GetCertificateAuthorityCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Base64-encoded certificate authority (CA) certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>Base64-encoded certificate chain that includes any intermediate certificates and chains up to root on-premises certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. If this is a root CA, the value will be null.</p>
   */
  CertificateChain?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportCertificateOutput shape
 */
export interface ExportCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The base64 PEM-encoded certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting.</p>
   */
  CertificateChain?: string;

  /**
   * <p>The encrypted private key associated with the public key in the certificate. The key is output in PKCS #8 format and is base64 PEM-encoded. </p>
   */
  PrivateKey?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

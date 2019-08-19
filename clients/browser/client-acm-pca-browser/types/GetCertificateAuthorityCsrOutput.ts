import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCertificateAuthorityCsrOutput shape
 */
export interface GetCertificateAuthorityCsrOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.</p>
   */
  Csr?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

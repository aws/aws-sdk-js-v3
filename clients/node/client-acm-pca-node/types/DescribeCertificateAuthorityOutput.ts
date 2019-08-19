import { _UnmarshalledCertificateAuthority } from "./_CertificateAuthority";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCertificateAuthorityOutput shape
 */
export interface DescribeCertificateAuthorityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <a>CertificateAuthority</a> structure that contains information about your private CA.</p>
   */
  CertificateAuthority?: _UnmarshalledCertificateAuthority;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

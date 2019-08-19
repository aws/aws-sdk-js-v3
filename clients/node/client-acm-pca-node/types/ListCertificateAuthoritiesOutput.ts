import { _UnmarshalledCertificateAuthority } from "./_CertificateAuthority";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCertificateAuthoritiesOutput shape
 */
export interface ListCertificateAuthoritiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about each certificate authority you have created.</p>
   */
  CertificateAuthorities?: Array<_UnmarshalledCertificateAuthority>;

  /**
   * <p>When the list is truncated, this value is present and should be used for the <code>NextToken</code> parameter in a subsequent pagination request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

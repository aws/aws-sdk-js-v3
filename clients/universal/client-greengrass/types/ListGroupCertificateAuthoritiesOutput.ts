import { _UnmarshalledGroupCertificateAuthorityProperties } from "./_GroupCertificateAuthorityProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupCertificateAuthoritiesOutput shape
 */
export interface ListGroupCertificateAuthoritiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A list of certificate authorities associated with the group.
   */
  GroupCertificateAuthorities?: Array<
    _UnmarshalledGroupCertificateAuthorityProperties
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

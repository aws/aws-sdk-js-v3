import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGroupCertificateAuthorityOutput shape
 */
export interface GetGroupCertificateAuthorityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the certificate authority for the group.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * The ID of the certificate authority for the group.
   */
  GroupCertificateAuthorityId?: string;

  /**
   * The PEM encoded certificate for the group.
   */
  PemEncodedCertificate?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

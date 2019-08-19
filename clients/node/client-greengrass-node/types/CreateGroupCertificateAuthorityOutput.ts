import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGroupCertificateAuthorityOutput shape
 */
export interface CreateGroupCertificateAuthorityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the group certificate authority.
   */
  GroupCertificateAuthorityArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

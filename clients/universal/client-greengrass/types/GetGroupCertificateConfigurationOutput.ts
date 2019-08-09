import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGroupCertificateConfigurationOutput shape
 */
export interface GetGroupCertificateConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The amount of time remaining before the certificate authority expires, in milliseconds.
   */
  CertificateAuthorityExpiryInMilliseconds?: string;

  /**
   * The amount of time remaining before the certificate expires, in milliseconds.
   */
  CertificateExpiryInMilliseconds?: string;

  /**
   * The ID of the group certificate configuration.
   */
  GroupId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

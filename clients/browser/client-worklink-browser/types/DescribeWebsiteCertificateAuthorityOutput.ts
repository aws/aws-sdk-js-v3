import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWebsiteCertificateAuthorityOutput shape
 */
export interface DescribeWebsiteCertificateAuthorityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The root certificate of the certificate authority.</p>
   */
  Certificate?: string;

  /**
   * <p>The time that the certificate authority was added.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The certificate name to display.</p>
   */
  DisplayName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

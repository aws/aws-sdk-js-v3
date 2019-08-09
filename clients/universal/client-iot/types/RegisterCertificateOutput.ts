import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate identifier.</p>
   */
  certificateId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

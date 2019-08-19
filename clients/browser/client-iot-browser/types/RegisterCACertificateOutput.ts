import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

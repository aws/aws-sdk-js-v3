import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RequestCertificateOutput shape
 */
export interface RequestCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>String that contains the ARN of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>
   */
  CertificateArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

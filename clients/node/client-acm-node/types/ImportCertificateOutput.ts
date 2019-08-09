import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportCertificateOutput shape
 */
export interface ImportCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
   */
  CertificateArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

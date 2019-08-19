import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserPoolDomainOutput shape
 */
export interface CreateUserPoolDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon CloudFront endpoint that you use as the target of the alias that you set up with your Domain Name Service (DNS) provider.</p>
   */
  CloudFrontDomain?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The UpdateUserPoolDomain response output.</p>
 */
export interface UpdateUserPoolDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon CloudFront endpoint that Amazon Cognito set up when you added the custom domain to your user pool.</p>
   */
  CloudFrontDomain?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

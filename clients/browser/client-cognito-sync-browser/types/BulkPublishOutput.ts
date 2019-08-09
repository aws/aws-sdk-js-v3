import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * The output for the BulkPublish operation.
 */
export interface BulkPublishOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

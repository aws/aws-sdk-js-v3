import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnableImportFindingsForProductOutput shape
 */
export interface EnableImportFindingsForProductOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

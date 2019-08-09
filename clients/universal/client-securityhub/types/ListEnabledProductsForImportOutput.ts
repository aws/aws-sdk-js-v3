import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEnabledProductsForImportOutput shape
 */
export interface ListEnabledProductsForImportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: Array<string>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

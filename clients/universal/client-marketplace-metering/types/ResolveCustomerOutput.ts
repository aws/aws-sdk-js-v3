import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.</p>
 */
export interface ResolveCustomerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The CustomerIdentifier is used to identify an individual customer in your application. Calls to BatchMeterUsage require CustomerIdentifiers for each UsageRecord.</p>
   */
  CustomerIdentifier?: string;

  /**
   * <p>The product code is returned to confirm that the buyer is registering for your product. Subsequent BatchMeterUsage calls should be made using this product code.</p>
   */
  ProductCode?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

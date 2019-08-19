import { _UnmarshalledProvisionedProductAttribute } from "./_ProvisionedProductAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchProvisionedProductsOutput shape
 */
export interface SearchProvisionedProductsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the provisioned products.</p>
   */
  ProvisionedProducts?: Array<_UnmarshalledProvisionedProductAttribute>;

  /**
   * <p>The number of provisioned products found.</p>
   */
  TotalResultsCount?: number;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

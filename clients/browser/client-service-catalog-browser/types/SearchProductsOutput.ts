import { _UnmarshalledProductViewSummary } from "./_ProductViewSummary";
import { _UnmarshalledProductViewAggregationValue } from "./_ProductViewAggregationValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchProductsOutput shape
 */
export interface SearchProductsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the product views.</p>
   */
  ProductViewSummaries?: Array<_UnmarshalledProductViewSummary>;

  /**
   * <p>The product view aggregations.</p>
   */
  ProductViewAggregations?: {
    [key: string]: Array<_UnmarshalledProductViewAggregationValue>;
  };

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

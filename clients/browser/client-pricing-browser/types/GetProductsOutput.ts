import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetProductsOutput shape
 */
export interface GetProductsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The format version of the response. For example, aws_v1.</p>
   */
  FormatVersion?: string;

  /**
   * <p>The list of products that match your filters. The list contains both the product metadata and the price information.</p>
   */
  PriceList?: Array<string>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

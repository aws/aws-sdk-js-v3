import { _UnmarshalledReservedElasticsearchInstanceOffering } from "./_ReservedElasticsearchInstanceOffering";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved Elasticsearch instance offerings</p>
   */
  ReservedElasticsearchInstanceOfferings?: Array<
    _UnmarshalledReservedElasticsearchInstanceOffering
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

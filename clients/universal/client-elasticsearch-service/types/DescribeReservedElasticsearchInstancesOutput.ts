import { _UnmarshalledReservedElasticsearchInstance } from "./_ReservedElasticsearchInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved Elasticsearch instances.</p>
   */
  ReservedElasticsearchInstances?: Array<
    _UnmarshalledReservedElasticsearchInstance
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

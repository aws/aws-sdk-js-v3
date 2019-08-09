import { _UnmarshalledElasticGpus } from "./_ElasticGpus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeElasticGpusOutput shape
 */
export interface DescribeElasticGpusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Elastic Graphics accelerators.</p>
   */
  ElasticGpuSet?: Array<_UnmarshalledElasticGpus>;

  /**
   * <p>The total number of items to return. If the total number of items available is more than the value specified in max-items then a Next-Token will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

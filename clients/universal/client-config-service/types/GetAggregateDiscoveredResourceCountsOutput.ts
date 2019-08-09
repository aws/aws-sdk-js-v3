import { _UnmarshalledGroupedResourceCount } from "./_GroupedResourceCount";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAggregateDiscoveredResourceCountsOutput shape
 */
export interface GetAggregateDiscoveredResourceCountsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The total number of resources that are present in an aggregator with the filters that you provide.</p>
   */
  TotalDiscoveredResources: number;

  /**
   * <p>The key passed into the request object. If <code>GroupByKey</code> is not provided, the result will be empty.</p>
   */
  GroupByKey?: string;

  /**
   * <p>Returns a list of GroupedResourceCount objects.</p>
   */
  GroupedResourceCounts?: Array<_UnmarshalledGroupedResourceCount>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

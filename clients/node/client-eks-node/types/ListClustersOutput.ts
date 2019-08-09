import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListClustersOutput shape
 */
export interface ListClustersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all of the clusters for your account in the specified Region.</p>
   */
  clusters?: Array<string>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListClusters</code> request. When the results of a <code>ListClusters</code> request exceed <code>maxResults</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

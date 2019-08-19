import { _UnmarshalledRepository } from "./_Repository";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRepositoriesOutput shape
 */
export interface DescribeRepositoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of repository objects corresponding to valid repositories.</p>
   */
  repositories?: Array<_UnmarshalledRepository>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeRepositories</code> request. When the results of a <code>DescribeRepositories</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

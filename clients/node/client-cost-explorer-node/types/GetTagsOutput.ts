import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTagsOutput shape
 */
export interface GetTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The tags that match your request.</p>
   */
  Tags: Array<string>;

  /**
   * <p>The number of query results that AWS returns at a time.</p>
   */
  ReturnSize: number;

  /**
   * <p>The total number of query results.</p>
   */
  TotalSize: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

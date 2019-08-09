import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of QueryObjects.</p>
 */
export interface QueryObjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifiers that match the query selectors.</p>
   */
  ids?: Array<string>;

  /**
   * <p>The starting point for the next page of results. To view the next page of results, call <code>QueryObjects</code> again with this marker value. If the value is null, there are no more results.</p>
   */
  marker?: string;

  /**
   * <p>Indicates whether there are more results that can be obtained by a subsequent call.</p>
   */
  hasMoreResults?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

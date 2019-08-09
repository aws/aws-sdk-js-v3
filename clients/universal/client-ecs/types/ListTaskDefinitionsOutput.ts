import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTaskDefinitionsOutput shape
 */
export interface ListTaskDefinitionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of task definition Amazon Resource Name (ARN) entries for the <code>ListTaskDefinitions</code> request.</p>
   */
  taskDefinitionArns?: Array<string>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListTaskDefinitions</code> request. When the results of a <code>ListTaskDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

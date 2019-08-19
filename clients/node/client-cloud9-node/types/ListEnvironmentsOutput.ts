import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEnvironmentsOutput shape
 */
export interface ListEnvironmentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of environment identifiers.</p>
   */
  environmentIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

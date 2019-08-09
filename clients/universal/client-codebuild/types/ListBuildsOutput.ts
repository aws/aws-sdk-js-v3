import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBuildsOutput shape
 */
export interface ListBuildsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of build IDs, with each build ID representing a single build.</p>
   */
  ids?: Array<string>;

  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

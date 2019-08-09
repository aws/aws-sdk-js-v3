import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAliasesOutput shape
 */
export interface ListAliasesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The entity's paginated aliases.</p>
   */
  Aliases?: Array<string>;

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

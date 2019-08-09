import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListGitHubAccountTokenNames operation.</p>
 */
export interface ListGitHubAccountTokenNamesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of names of connections to GitHub accounts.</p>
   */
  tokenNameList?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent ListGitHubAccountTokenNames call to return the next set of names in the list. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

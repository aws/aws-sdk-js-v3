import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetActiveNamesOutput shape
 */
export interface GetActiveNamesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of active names returned by the get active names request.</p>
   */
  activeNames?: Array<string>;

  /**
   * <p>A token used for advancing to the next page of results from your get active names request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

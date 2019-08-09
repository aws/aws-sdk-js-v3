import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOperationsOutput shape
 */
export interface GetOperationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the results of your get operations request.</p>
   */
  operations?: Array<_UnmarshalledOperation>;

  /**
   * <p>A token used for advancing to the next page of results from your get operations request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

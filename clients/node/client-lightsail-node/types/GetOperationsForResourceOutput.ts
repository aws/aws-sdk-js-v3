import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOperationsForResourceOutput shape
 */
export interface GetOperationsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the results of your get operations for resource request.</p>
   */
  operations?: Array<_UnmarshalledOperation>;

  /**
   * <p>(Deprecated) Returns the number of pages of results that remain.</p> <note> <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the API. It is now deprecated, and the API returns the <code>next page token</code> parameter instead.</p> </note>
   */
  nextPageCount?: string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

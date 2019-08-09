import { _UnmarshalledFragment } from "./_Fragment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFragmentsOutput shape
 */
export interface ListFragmentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of archived <a>Fragment</a> objects from the stream that meet the selector criteria. Results are in no specific order, even across pages.</p>
   */
  Fragments?: Array<_UnmarshalledFragment>;

  /**
   * <p>If the returned list is truncated, the operation returns this token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

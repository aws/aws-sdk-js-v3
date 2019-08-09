import { _UnmarshalledTagDescription } from "./_TagDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTagsOutput shape
 */
export interface DescribeTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Array<_UnmarshalledTagDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

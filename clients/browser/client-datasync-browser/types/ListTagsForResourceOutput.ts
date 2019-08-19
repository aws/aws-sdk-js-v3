import { _UnmarshalledTagListEntry } from "./_TagListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListTagsForResourceResponse</p>
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Array of resource tags.</p>
   */
  Tags?: Array<_UnmarshalledTagListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list of resource tags.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledResourceTagSet } from "./_ResourceTagSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type containing tags for the specified resources.</p>
 */
export interface ListTagsForResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>ResourceTagSet</code>s containing tags associated with the specified resources.</p>
   */
  ResourceTagSets: Array<_UnmarshalledResourceTagSet>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

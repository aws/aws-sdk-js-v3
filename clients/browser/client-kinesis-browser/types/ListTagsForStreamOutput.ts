import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <code>ListTagsForStream</code>.</p>
 */
export interface ListTagsForStreamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of tags associated with <code>StreamName</code>, starting with the first tag after <code>ExclusiveStartTagKey</code> and up to the specified <code>Limit</code>. </p>
   */
  Tags: Array<_UnmarshalledTag>;

  /**
   * <p>If set to <code>true</code>, more tags are available. To request additional tags, set <code>ExclusiveStartTagKey</code> to the key of the last tag returned.</p>
   */
  HasMoreTags: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

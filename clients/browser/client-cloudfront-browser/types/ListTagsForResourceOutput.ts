import { _UnmarshalledTags } from "./_Tags";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The returned result of the corresponding request.</p>
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: _UnmarshalledTags;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledTagsModel } from "./_TagsModel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, or segment.</p>
   */
  TagsModel: _UnmarshalledTagsModel;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

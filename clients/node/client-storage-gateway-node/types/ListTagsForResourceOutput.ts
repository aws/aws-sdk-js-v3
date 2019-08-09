import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListTagsForResourceOutput</p>
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>he Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  ResourceARN?: string;

  /**
   * <p>An opaque string that indicates the position at which to stop returning the list of tags.</p>
   */
  Marker?: string;

  /**
   * <p>An array that contains the tags for the specified resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

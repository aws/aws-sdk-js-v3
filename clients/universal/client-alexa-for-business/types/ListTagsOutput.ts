import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsOutput shape
 */
export interface ListTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The tags requested for the specified resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

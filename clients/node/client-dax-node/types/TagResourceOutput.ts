import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TagResourceOutput shape
 */
export interface TagResourceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of tags that are associated with the DAX resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledComment } from "./_Comment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateCommentOutput shape
 */
export interface UpdateCommentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the updated comment.</p>
   */
  comment?: _UnmarshalledComment;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

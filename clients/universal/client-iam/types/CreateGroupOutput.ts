import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateGroup</a> request. </p>
 */
export interface CreateGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the new group.</p>
   */
  Group: _UnmarshalledGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

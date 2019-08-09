import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGroupOutput shape
 */
export interface UpdateGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The group that was updated. Contains the name of the group that was updated, the ARN of the group that was updated, and the updated filter expression assigned to the group.</p>
   */
  Group?: _UnmarshalledGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

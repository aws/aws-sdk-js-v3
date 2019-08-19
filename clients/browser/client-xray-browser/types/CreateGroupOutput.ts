import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGroupOutput shape
 */
export interface CreateGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The group that was created. Contains the name of the group that was created, the ARN of the group that was generated based on the group name, and the filter expression that was assigned to the group.</p>
   */
  Group?: _UnmarshalledGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

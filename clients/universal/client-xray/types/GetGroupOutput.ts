import { _UnmarshalledGroup } from "./_Group";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGroupOutput shape
 */
export interface GetGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The group that was requested. Contains the name of the group, the ARN of the group, and the filter expression that assigned to the group.</p>
   */
  Group?: _UnmarshalledGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

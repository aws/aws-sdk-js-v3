import { _UnmarshalledAssignment } from "./_Assignment";
import { _UnmarshalledHIT } from "./_HIT";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAssignmentOutput shape
 */
export interface GetAssignmentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The assignment. The response includes one Assignment element. </p>
   */
  Assignment?: _UnmarshalledAssignment;

  /**
   * <p> The HIT associated with this assignment. The response includes one HIT element.</p>
   */
  HIT?: _UnmarshalledHIT;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

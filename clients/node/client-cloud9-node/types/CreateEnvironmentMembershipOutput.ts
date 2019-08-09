import { _UnmarshalledEnvironmentMember } from "./_EnvironmentMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEnvironmentMembershipOutput shape
 */
export interface CreateEnvironmentMembershipOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the environment member that was added.</p>
   */
  membership?: _UnmarshalledEnvironmentMember;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

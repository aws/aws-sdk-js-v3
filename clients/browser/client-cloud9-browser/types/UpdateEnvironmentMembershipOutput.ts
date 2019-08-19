import { _UnmarshalledEnvironmentMember } from "./_EnvironmentMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateEnvironmentMembershipOutput shape
 */
export interface UpdateEnvironmentMembershipOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the environment member whose settings were changed.</p>
   */
  membership?: _UnmarshalledEnvironmentMember;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

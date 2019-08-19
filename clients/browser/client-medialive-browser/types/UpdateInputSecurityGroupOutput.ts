import { _UnmarshalledInputSecurityGroup } from "./_InputSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * An Input Security Group
   */
  SecurityGroup?: _UnmarshalledInputSecurityGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

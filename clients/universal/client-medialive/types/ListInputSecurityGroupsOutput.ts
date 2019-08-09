import { _UnmarshalledInputSecurityGroup } from "./_InputSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * List of input security groups
   */
  InputSecurityGroups?: Array<_UnmarshalledInputSecurityGroup>;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledEnvironmentMember } from "./_EnvironmentMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEnvironmentMembershipsOutput shape
 */
export interface DescribeEnvironmentMembershipsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the environment members for the environment.</p>
   */
  memberships?: Array<_UnmarshalledEnvironmentMember>;

  /**
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

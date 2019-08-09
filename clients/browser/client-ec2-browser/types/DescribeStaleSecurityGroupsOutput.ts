import { _UnmarshalledStaleSecurityGroup } from "./_StaleSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStaleSecurityGroupsOutput shape
 */
export interface DescribeStaleSecurityGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the stale security groups.</p>
   */
  StaleSecurityGroupSet?: Array<_UnmarshalledStaleSecurityGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

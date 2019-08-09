import { _UnmarshalledDBSecurityGroup } from "./_DBSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RevokeDBSecurityGroupIngressOutput shape
 */
export interface RevokeDBSecurityGroupIngressOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
   */
  DBSecurityGroup?: _UnmarshalledDBSecurityGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

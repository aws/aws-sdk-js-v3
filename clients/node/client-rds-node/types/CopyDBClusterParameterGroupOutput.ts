import { _UnmarshalledDBClusterParameterGroup } from "./_DBClusterParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyDBClusterParameterGroupOutput shape
 */
export interface CopyDBClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p>
   */
  DBClusterParameterGroup?: _UnmarshalledDBClusterParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

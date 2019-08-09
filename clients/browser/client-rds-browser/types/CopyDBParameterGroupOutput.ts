import { _UnmarshalledDBParameterGroup } from "./_DBParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyDBParameterGroupOutput shape
 */
export interface CopyDBParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
   */
  DBParameterGroup?: _UnmarshalledDBParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

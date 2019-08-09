import { _UnmarshalledDBClusterParameterGroup } from "./_DBClusterParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDBClusterParameterGroupOutput shape
 */
export interface CreateDBClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
   */
  DBClusterParameterGroup?: _UnmarshalledDBClusterParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

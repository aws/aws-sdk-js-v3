import { _UnmarshalledDBClusterParameterGroup } from "./_DBClusterParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDBClusterParameterGroupOutput shape
 */
export interface CreateDBClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about a DB cluster parameter group. </p>
   */
  DBClusterParameterGroup?: _UnmarshalledDBClusterParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

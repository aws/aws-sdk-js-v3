import { _UnmarshalledClusterParameterGroup } from "./_ClusterParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClusterParameterGroupOutput shape
 */
export interface CreateClusterParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a parameter group.</p>
   */
  ClusterParameterGroup?: _UnmarshalledClusterParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

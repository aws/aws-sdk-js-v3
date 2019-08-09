import { _UnmarshalledClusterSubnetGroup } from "./_ClusterSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClusterSubnetGroupOutput shape
 */
export interface CreateClusterSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: _UnmarshalledClusterSubnetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

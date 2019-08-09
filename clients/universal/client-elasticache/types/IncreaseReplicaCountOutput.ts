import { _UnmarshalledReplicationGroup } from "./_ReplicationGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * IncreaseReplicaCountOutput shape
 */
export interface IncreaseReplicaCountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: _UnmarshalledReplicationGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledReplicationSubnetGroup } from "./_ReplicationSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifyReplicationSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The modified replication subnet group.</p>
   */
  ReplicationSubnetGroup?: _UnmarshalledReplicationSubnetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledReplicationTask } from "./_ReplicationTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface StartReplicationTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The replication task started.</p>
   */
  ReplicationTask?: _UnmarshalledReplicationTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

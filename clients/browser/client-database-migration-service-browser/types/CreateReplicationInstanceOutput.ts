import { _UnmarshalledReplicationInstance } from "./_ReplicationInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateReplicationInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The replication instance that was created.</p>
   */
  ReplicationInstance?: _UnmarshalledReplicationInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

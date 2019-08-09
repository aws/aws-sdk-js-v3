import { _UnmarshalledReplicationJob } from "./_ReplicationJob";
import { _UnmarshalledReplicationRun } from "./_ReplicationRun";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetReplicationRunsOutput shape
 */
export interface GetReplicationRunsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the replication job.</p>
   */
  replicationJob?: _UnmarshalledReplicationJob;

  /**
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: Array<_UnmarshalledReplicationRun>;

  /**
   * <p>The token required to retrieve the next set of results. This value is null when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

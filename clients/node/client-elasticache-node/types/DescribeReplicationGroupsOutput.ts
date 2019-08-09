import { _UnmarshalledReplicationGroup } from "./_ReplicationGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeReplicationGroups</code> operation.</p>
 */
export interface DescribeReplicationGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of replication groups. Each item in the list contains detailed information about one replication group.</p>
   */
  ReplicationGroups?: Array<_UnmarshalledReplicationGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

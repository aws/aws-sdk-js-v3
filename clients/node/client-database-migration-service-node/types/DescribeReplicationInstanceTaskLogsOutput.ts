import { _UnmarshalledReplicationInstanceTaskLog } from "./_ReplicationInstanceTaskLog";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeReplicationInstanceTaskLogsOutput shape
 */
export interface DescribeReplicationInstanceTaskLogsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes). </p>
   */
  ReplicationInstanceTaskLogs?: Array<_UnmarshalledReplicationInstanceTaskLog>;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

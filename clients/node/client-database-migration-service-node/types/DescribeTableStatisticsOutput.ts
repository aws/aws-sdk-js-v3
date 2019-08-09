import { _UnmarshalledTableStatistics } from "./_TableStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeTableStatisticsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The table statistics.</p>
   */
  TableStatistics?: Array<_UnmarshalledTableStatistics>;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

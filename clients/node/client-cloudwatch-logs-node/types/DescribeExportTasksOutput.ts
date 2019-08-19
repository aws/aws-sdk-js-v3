import { _UnmarshalledExportTask } from "./_ExportTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExportTasksOutput shape
 */
export interface DescribeExportTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The export tasks.</p>
   */
  exportTasks?: Array<_UnmarshalledExportTask>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledImportTask } from "./_ImportTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImportTasksOutput shape
 */
export interface DescribeImportTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A returned array of import tasks that match any applied filters, up to the specified number of maximum results.</p>
   */
  tasks?: Array<_UnmarshalledImportTask>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledExportInfo } from "./_ExportInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExportTasksOutput shape
 */
export interface DescribeExportTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains one or more sets of export request details. When the status of a request is <code>SUCCEEDED</code>, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.</p>
   */
  exportsInfo?: Array<_UnmarshalledExportInfo>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeExportTasks</code> request. When the results of a <code>DescribeExportTasks</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

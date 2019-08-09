import { _UnmarshalledImportImageTask } from "./_ImportImageTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImportImageTasksOutput shape
 */
export interface DescribeImportImageTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the previous 7 days.</p>
   */
  ImportImageTasks?: Array<_UnmarshalledImportImageTask>;

  /**
   * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledJobQueueDetail } from "./_JobQueueDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobQueuesOutput shape
 */
export interface DescribeJobQueuesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of job queues. </p>
   */
  jobQueues?: Array<_UnmarshalledJobQueueDetail>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeJobQueues</code> request. When the results of a <code>DescribeJobQueues</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

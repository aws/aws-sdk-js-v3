import { _UnmarshalledComputeEnvironmentDetail } from "./_ComputeEnvironmentDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeComputeEnvironmentsOutput shape
 */
export interface DescribeComputeEnvironmentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of compute environments.</p>
   */
  computeEnvironments?: Array<_UnmarshalledComputeEnvironmentDetail>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>DescribeComputeEnvironments</code> request. When the results of a <code>DescribeJobDefinitions</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

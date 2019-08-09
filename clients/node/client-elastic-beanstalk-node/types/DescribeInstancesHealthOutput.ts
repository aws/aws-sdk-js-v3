import { _UnmarshalledSingleInstanceHealth } from "./_SingleInstanceHealth";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.</p>
 */
export interface DescribeInstancesHealthOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed health information about each instance.</p> <p>The output differs slightly between Linux and Windows environments. There is a difference in the members that are supported under the <code>&lt;CPUUtilization&gt;</code> type.</p>
   */
  InstanceHealthList?: Array<_UnmarshalledSingleInstanceHealth>;

  /**
   * <p>The date and time that the health information was retrieved.</p>
   */
  RefreshedAt?: Date;

  /**
   * <p>Pagination token for the next page of results, if available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

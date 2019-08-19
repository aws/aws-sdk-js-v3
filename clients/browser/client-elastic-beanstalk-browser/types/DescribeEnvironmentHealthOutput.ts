import { _UnmarshalledApplicationMetrics } from "./_ApplicationMetrics";
import { _UnmarshalledInstanceHealthSummary } from "./_InstanceHealthSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Health details for an AWS Elastic Beanstalk environment.</p>
 */
export interface DescribeEnvironmentHealthOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The environment's name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health status</a> of the environment. For example, <code>Ok</code>.</p>
   */
  HealthStatus?: string;

  /**
   * <p>The environment's operational status. <code>Ready</code>, <code>Launching</code>, <code>Updating</code>, <code>Terminating</code>, or <code>Terminated</code>.</p>
   */
  Status?: "Green" | "Yellow" | "Red" | "Grey" | string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health color</a> of the environment.</p>
   */
  Color?: string;

  /**
   * <p>Descriptions of the data that contributed to the environment's current health status.</p>
   */
  Causes?: Array<string>;

  /**
   * <p>Application request metrics for the environment.</p>
   */
  ApplicationMetrics?: _UnmarshalledApplicationMetrics;

  /**
   * <p>Summary health information for the instances in the environment.</p>
   */
  InstancesHealth?: _UnmarshalledInstanceHealthSummary;

  /**
   * <p>The date and time that the health information was retrieved.</p>
   */
  RefreshedAt?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

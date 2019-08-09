import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Parameters for a call to <code>DescribeInstancesHealth</code>.</p>
 */
export interface DescribeInstancesHealthInput {
  /**
   * <p>Specify the AWS Elastic Beanstalk environment by name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>Specify the AWS Elastic Beanstalk environment by ID.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Specifies the response elements you wish to receive. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns a list of instances.</p>
   */
  AttributeNames?:
    | Array<
        | "HealthStatus"
        | "Color"
        | "Causes"
        | "ApplicationMetrics"
        | "RefreshedAt"
        | "LaunchedAt"
        | "System"
        | "Deployment"
        | "AvailabilityZone"
        | "InstanceType"
        | "All"
        | string
      >
    | Iterable<
        | "HealthStatus"
        | "Color"
        | "Causes"
        | "ApplicationMetrics"
        | "RefreshedAt"
        | "LaunchedAt"
        | "System"
        | "Deployment"
        | "AvailabilityZone"
        | "InstanceType"
        | "All"
        | string
      >;

  /**
   * <p>Specify the pagination token returned by a previous call.</p>
   */
  NextToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

import {
  _ApplicationMetrics,
  _UnmarshalledApplicationMetrics
} from "./_ApplicationMetrics";
import { _SystemStatus, _UnmarshalledSystemStatus } from "./_SystemStatus";
import { _Deployment, _UnmarshalledDeployment } from "./_Deployment";

/**
 * <p>Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.</p>
 */
export interface _SingleInstanceHealth {
  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Returns the health status of the specified instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.</p>
   */
  HealthStatus?: string;

  /**
   * <p>Represents the color indicator that gives you information about the health of the EC2 instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.</p>
   */
  Color?: string;

  /**
   * <p>Represents the causes, which provide more information about the current health status.</p>
   */
  Causes?: Array<string> | Iterable<string>;

  /**
   * <p>The time at which the EC2 instance was launched.</p>
   */
  LaunchedAt?: Date | string | number;

  /**
   * <p>Request metrics from your application.</p>
   */
  ApplicationMetrics?: _ApplicationMetrics;

  /**
   * <p>Operating system metrics from the instance.</p>
   */
  System?: _SystemStatus;

  /**
   * <p>Information about the most recent deployment to an instance.</p>
   */
  Deployment?: _Deployment;

  /**
   * <p>The availability zone in which the instance runs.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance's type.</p>
   */
  InstanceType?: string;
}

export interface _UnmarshalledSingleInstanceHealth
  extends _SingleInstanceHealth {
  /**
   * <p>Represents the causes, which provide more information about the current health status.</p>
   */
  Causes?: Array<string>;

  /**
   * <p>The time at which the EC2 instance was launched.</p>
   */
  LaunchedAt?: Date;

  /**
   * <p>Request metrics from your application.</p>
   */
  ApplicationMetrics?: _UnmarshalledApplicationMetrics;

  /**
   * <p>Operating system metrics from the instance.</p>
   */
  System?: _UnmarshalledSystemStatus;

  /**
   * <p>Information about the most recent deployment to an instance.</p>
   */
  Deployment?: _UnmarshalledDeployment;
}

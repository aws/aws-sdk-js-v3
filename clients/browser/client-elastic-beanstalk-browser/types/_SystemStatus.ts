import {
  _CPUUtilization,
  _UnmarshalledCPUUtilization
} from "./_CPUUtilization";

/**
 * <p>CPU utilization and load average metrics for an Amazon EC2 instance.</p>
 */
export interface _SystemStatus {
  /**
   * <p>CPU utilization metrics for the instance.</p>
   */
  CPUUtilization?: _CPUUtilization;

  /**
   * <p>Load average in the last 1-minute, 5-minute, and 15-minute periods. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-metrics.html#health-enhanced-metrics-os">Operating System Metrics</a>.</p>
   */
  LoadAverage?: Array<number> | Iterable<number>;
}

export interface _UnmarshalledSystemStatus extends _SystemStatus {
  /**
   * <p>CPU utilization metrics for the instance.</p>
   */
  CPUUtilization?: _UnmarshalledCPUUtilization;

  /**
   * <p>Load average in the last 1-minute, 5-minute, and 15-minute periods. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-metrics.html#health-enhanced-metrics-os">Operating System Metrics</a>.</p>
   */
  LoadAverage?: Array<number>;
}

import {
  _NetworkInterface,
  _UnmarshalledNetworkInterface
} from "./_NetworkInterface";

/**
 * <p>An object representing the details of a container that is part of a job attempt.</p>
 */
export interface _AttemptContainerDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the job attempt. Each container attempt receives a task ARN when they reach the <code>STARTING</code> status.</p>
   */
  taskArn?: string;

  /**
   * <p>The exit code for the job attempt. A non-zero exit code is considered a failure.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>
   */
  reason?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the <code>RUNNING</code> status.</p>
   */
  logStreamName?: string;

  /**
   * <p>The network interfaces associated with the job attempt.</p>
   */
  networkInterfaces?: Array<_NetworkInterface> | Iterable<_NetworkInterface>;
}

export interface _UnmarshalledAttemptContainerDetail
  extends _AttemptContainerDetail {
  /**
   * <p>The network interfaces associated with the job attempt.</p>
   */
  networkInterfaces?: Array<_UnmarshalledNetworkInterface>;
}

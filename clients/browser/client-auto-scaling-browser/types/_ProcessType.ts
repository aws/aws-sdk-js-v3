/**
 * <p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface _ProcessType {
  /**
   * <p>One of the following processes:</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> </ul>
   */
  ProcessName: string;
}

export type _UnmarshalledProcessType = _ProcessType;

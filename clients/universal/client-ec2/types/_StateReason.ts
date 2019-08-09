/**
 * <p>Describes a state change.</p>
 */
export interface _StateReason {
  /**
   * <p>The reason code for the state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the state change.</p> <ul> <li> <p> <code>Server.InsufficientInstanceCapacity</code>: There was insufficient capacity available to satisfy the launch request.</p> </li> <li> <p> <code>Server.InternalError</code>: An internal error caused the instance to terminate during launch.</p> </li> <li> <p> <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled retirement.</p> </li> <li> <p> <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the number of Spot requests with a maximum price equal to or higher than the Spot price exceeded available capacity or because of an increase in the Spot price.</p> </li> <li> <p> <code>Server.SpotInstanceTermination</code>: The instance was terminated because the number of Spot requests with a maximum price equal to or higher than the Spot price exceeded available capacity or because of an increase in the Spot price.</p> </li> <li> <p> <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down using the <code>shutdown -h</code> command from the instance.</p> </li> <li> <p> <code>Client.InstanceTerminated</code>: The instance was terminated or rebooted during AMI creation.</p> </li> <li> <p> <code>Client.InternalError</code>: A client error caused the instance to terminate during launch.</p> </li> <li> <p> <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not found.</p> </li> <li> <p> <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the instance.</p> </li> <li> <p> <code>Client.UserInitiatedShutdown</code>: The instance was shut down using the Amazon EC2 API.</p> </li> <li> <p> <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS volumes or total storage was exceeded. Decrease usage or request an increase in your account limits.</p> </li> </ul>
   */
  Message?: string;
}

export type _UnmarshalledStateReason = _StateReason;

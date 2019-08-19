import {
  _LifecycleEvent,
  _UnmarshalledLifecycleEvent
} from "./_LifecycleEvent";

/**
 * <p>Information about an instance in a deployment.</p>
 */
export interface _InstanceSummary {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p>The instance ID.</p>
   */
  instanceId?: string;

  /**
   * <p>The deployment status for this instance:</p> <ul> <li> <p>Pending: The deployment is pending for this instance.</p> </li> <li> <p>In Progress: The deployment is in progress for this instance.</p> </li> <li> <p>Succeeded: The deployment has succeeded for this instance.</p> </li> <li> <p>Failed: The deployment has failed for this instance.</p> </li> <li> <p>Skipped: The deployment has been skipped for this instance.</p> </li> <li> <p>Unknown: The deployment status is unknown for this instance.</p> </li> </ul>
   */
  status?:
    | "Pending"
    | "InProgress"
    | "Succeeded"
    | "Failed"
    | "Skipped"
    | "Unknown"
    | "Ready"
    | string;

  /**
   * <p>A timestamp that indicaties when the instance information was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>A list of lifecycle events for this instance.</p>
   */
  lifecycleEvents?: Array<_LifecycleEvent> | Iterable<_LifecycleEvent>;

  /**
   * <p>Information about which environment an instance belongs to in a blue/green deployment.</p> <ul> <li> <p>BLUE: The instance is part of the original environment.</p> </li> <li> <p>GREEN: The instance is part of the replacement environment.</p> </li> </ul>
   */
  instanceType?: "Blue" | "Green" | string;
}

export interface _UnmarshalledInstanceSummary extends _InstanceSummary {
  /**
   * <p>A timestamp that indicaties when the instance information was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A list of lifecycle events for this instance.</p>
   */
  lifecycleEvents?: Array<_UnmarshalledLifecycleEvent>;
}

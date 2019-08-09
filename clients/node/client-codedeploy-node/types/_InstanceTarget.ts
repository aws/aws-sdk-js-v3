import {
  _LifecycleEvent,
  _UnmarshalledLifecycleEvent
} from "./_LifecycleEvent";

/**
 * <p> A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. </p>
 */
export interface _InstanceTarget {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p> The unique ID of a deployment target that has a type of <code>instanceTarget</code>. </p>
   */
  targetId?: string;

  /**
   * <p> The ARN of the target. </p>
   */
  targetArn?: string;

  /**
   * <p> The status an EC2/On-premises deployment's target instance. </p>
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
   * <p> The date and time when the target instance was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p> The lifecycle events of the deployment to this target instance. </p>
   */
  lifecycleEvents?: Array<_LifecycleEvent> | Iterable<_LifecycleEvent>;

  /**
   * <p> A label that identifies whether the instance is an original target (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   */
  instanceLabel?: "Blue" | "Green" | string;
}

export interface _UnmarshalledInstanceTarget extends _InstanceTarget {
  /**
   * <p> The date and time when the target instance was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The lifecycle events of the deployment to this target instance. </p>
   */
  lifecycleEvents?: Array<_UnmarshalledLifecycleEvent>;
}

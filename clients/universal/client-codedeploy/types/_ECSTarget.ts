import {
  _LifecycleEvent,
  _UnmarshalledLifecycleEvent
} from "./_LifecycleEvent";
import { _ECSTaskSet, _UnmarshalledECSTaskSet } from "./_ECSTaskSet";

/**
 * <p> Information about the target of an Amazon ECS deployment. </p>
 */
export interface _ECSTarget {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p> The unique ID of a deployment target that has a type of <code>ecsTarget</code>. </p>
   */
  targetId?: string;

  /**
   * <p> The ARN of the target. </p>
   */
  targetArn?: string;

  /**
   * <p> The date and time when the target Amazon ECS application was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p> The lifecycle events of the deployment to this target Amazon ECS application. </p>
   */
  lifecycleEvents?: Array<_LifecycleEvent> | Iterable<_LifecycleEvent>;

  /**
   * <p> The status an Amazon ECS deployment's target ECS application. </p>
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
   * <p> The <code>ECSTaskSet</code> objects associated with the ECS target. </p>
   */
  taskSetsInfo?: Array<_ECSTaskSet> | Iterable<_ECSTaskSet>;
}

export interface _UnmarshalledECSTarget extends _ECSTarget {
  /**
   * <p> The date and time when the target Amazon ECS application was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The lifecycle events of the deployment to this target Amazon ECS application. </p>
   */
  lifecycleEvents?: Array<_UnmarshalledLifecycleEvent>;

  /**
   * <p> The <code>ECSTaskSet</code> objects associated with the ECS target. </p>
   */
  taskSetsInfo?: Array<_UnmarshalledECSTaskSet>;
}

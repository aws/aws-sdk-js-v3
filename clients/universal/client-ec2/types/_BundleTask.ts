import {
  _BundleTaskError,
  _UnmarshalledBundleTaskError
} from "./_BundleTaskError";
import { _Storage, _UnmarshalledStorage } from "./_Storage";

/**
 * <p>Describes a bundle task.</p>
 */
export interface _BundleTask {
  /**
   * <p>The ID of the bundle task.</p>
   */
  BundleId?: string;

  /**
   * <p>If the task fails, a description of the error.</p>
   */
  BundleTaskError?: _BundleTaskError;

  /**
   * <p>The ID of the instance associated with this bundle task.</p>
   */
  InstanceId?: string;

  /**
   * <p>The level of task completion, as a percent (for example, 20%).</p>
   */
  Progress?: string;

  /**
   * <p>The time this task started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The state of the task.</p>
   */
  State?:
    | "pending"
    | "waiting-for-shutdown"
    | "bundling"
    | "storing"
    | "cancelling"
    | "complete"
    | "failed"
    | string;

  /**
   * <p>The Amazon S3 storage locations.</p>
   */
  Storage?: _Storage;

  /**
   * <p>The time of the most recent update for the task.</p>
   */
  UpdateTime?: Date | string | number;
}

export interface _UnmarshalledBundleTask extends _BundleTask {
  /**
   * <p>If the task fails, a description of the error.</p>
   */
  BundleTaskError?: _UnmarshalledBundleTaskError;

  /**
   * <p>The time this task started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The Amazon S3 storage locations.</p>
   */
  Storage?: _UnmarshalledStorage;

  /**
   * <p>The time of the most recent update for the task.</p>
   */
  UpdateTime?: Date;
}

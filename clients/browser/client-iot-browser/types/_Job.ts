import {
  _PresignedUrlConfig,
  _UnmarshalledPresignedUrlConfig
} from "./_PresignedUrlConfig";
import {
  _JobExecutionsRolloutConfig,
  _UnmarshalledJobExecutionsRolloutConfig
} from "./_JobExecutionsRolloutConfig";
import { _AbortConfig, _UnmarshalledAbortConfig } from "./_AbortConfig";
import {
  _JobProcessDetails,
  _UnmarshalledJobProcessDetails
} from "./_JobProcessDetails";
import { _TimeoutConfig, _UnmarshalledTimeoutConfig } from "./_TimeoutConfig";

/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface _Job {
  /**
   * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a device when the thing representing the device is added to a target group, even after the job was completed by all things originally in the group. </p>
   */
  targetSelection?: "CONTINUOUS" | "SNAPSHOT" | string;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>, <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   */
  status?:
    | "IN_PROGRESS"
    | "CANCELED"
    | "COMPLETED"
    | "DELETION_IN_PROGRESS"
    | string;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   */
  reasonCode?: string;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   */
  comment?: string;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: Array<string> | Iterable<string>;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: _PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: _JobExecutionsRolloutConfig;

  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: _AbortConfig;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date | string | number;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: _JobProcessDetails;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: _TimeoutConfig;
}

export interface _UnmarshalledJob extends _Job {
  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: Array<string>;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: _UnmarshalledPresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: _UnmarshalledJobExecutionsRolloutConfig;

  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: _UnmarshalledAbortConfig;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: _UnmarshalledJobProcessDetails;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: _UnmarshalledTimeoutConfig;
}

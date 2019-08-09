/**
 * <p>The job summary.</p>
 */
export interface _JobSummary {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The ID of the thing group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p>
   */
  targetSelection?: "CONTINUOUS" | "SNAPSHOT" | string;

  /**
   * <p>The job summary status.</p>
   */
  status?:
    | "IN_PROGRESS"
    | "CANCELED"
    | "COMPLETED"
    | "DELETION_IN_PROGRESS"
    | string;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date | string | number;
}

export interface _UnmarshalledJobSummary extends _JobSummary {
  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date;
}

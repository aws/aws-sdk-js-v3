// smithy-typescript generated code
import { JobStatus, RequestedJobStatus } from "./enums";
import type { StorageLensGroup } from "./models_0";

/**
 * @public
 */
export interface UpdateJobPriorityRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID for the job whose priority you want to update.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The priority you want to assign to this job.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobPriorityResult {
  /**
   * <p>The ID for the job whose priority Amazon S3 updated.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The new priority assigned to the specified job.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobStatusRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the job whose status you want to update.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The status that you want to move the specified job to.</p>
   * @public
   */
  RequestedJobStatus: RequestedJobStatus | undefined;

  /**
   * <p>A description of the reason why you want to change the specified job's status. This
   *          field can be any string up to the maximum length.</p>
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobStatusResult {
  /**
   * <p>The ID for the job whose status was updated.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status for the specified job.</p>
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * <p>The reason that the specified job's status was updated.</p>
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStorageLensGroupRequest {
  /**
   * <p>
   * The name of the Storage Lens group that you want to update.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * The Amazon Web Services account ID of the Storage Lens group owner.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The JSON file that contains the Storage Lens group configuration.
   * </p>
   * @public
   */
  StorageLensGroup: StorageLensGroup | undefined;
}

// smithy-typescript generated code
import type { JobStatus, RequestedJobStatus } from "./enums";
import type { StorageLensGroup } from "./models_0";

/**
 * @public
 */
export interface UpdateAccessGrantsLocationRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the registered location that you are updating. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * If you are passing the `default` location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the `Subprefix` field.
   *
   * @public
   */
  AccessGrantsLocationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.
   *
   * @public
   */
  IAMRoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessGrantsLocationResult {
  /**
   * The date and time when you registered the location.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registered location that you are updating.
   *
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * The S3 URI path of the location that you are updating. You cannot update the scope of the registered location. The location scope can be the default S3 location `s3://`, the S3 path to a bucket `s3://<bucket>`, or the S3 path to a bucket and prefix `s3://<bucket>/<prefix>`.
   *
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role of the registered location. S3 Access Grants assumes this role to manage access to the registered location.
   *
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobPriorityRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID for the job whose priority you want to update.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The priority you want to assign to this job.
   *
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobPriorityResult {
  /**
   * The ID for the job whose priority Amazon S3 updated.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The new priority assigned to the specified job.
   *
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobStatusRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the job whose status you want to update.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The status that you want to move the specified job to.
   *
   * @public
   */
  RequestedJobStatus: RequestedJobStatus | undefined;

  /**
   * A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.
   *
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateJobStatusResult {
  /**
   * The ID for the job whose status was updated.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The current status for the specified job.
   *
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * The reason that the specified job's status was updated.
   *
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStorageLensGroupRequest {
  /**
   * The name of the Storage Lens group that you want to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the Storage Lens group owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The JSON file that contains the Storage Lens group configuration.
   *
   * @public
   */
  StorageLensGroup: StorageLensGroup | undefined;
}

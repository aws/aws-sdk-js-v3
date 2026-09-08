// smithy-typescript generated code
import type { JobStatus, RequestedJobStatus } from "./enums";
import type { StorageLensGroup } from "./models_0";

/**
 * @public
 */
export interface UpdateAccessGrantsLocationRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the registered location that you are updating. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   *          <p>The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   *          <p>If you are passing the <code>default</code> location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the <code>Subprefix</code> field. </p>
   * @public
   */
  AccessGrantsLocationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessGrantsLocationResult {
  /**
   * <p>The date and time when you registered the location. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registered location that you are updating. </p>
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * <p>The S3 URI path of the location that you are updating. You cannot update the scope of the registered location. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket <code>s3://<bucket></code>, or the S3 path to a bucket and prefix <code>s3://<bucket>/<prefix></code>. </p>
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn?: string | undefined;
}

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

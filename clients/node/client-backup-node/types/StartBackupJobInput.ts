import { _Lifecycle } from "./_Lifecycle";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartBackupJobInput shape
 */
export interface StartBackupJobInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.</p>
   */
  ResourceArn: string;

  /**
   * <p>Specifies the IAM role ARN used to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string;

  /**
   * <p>A customer chosen string that can be used to distinguish between calls to <code>StartBackupJob</code>. Idempotency tokens time out after one hour. Therefore, if you call <code>StartBackupJob</code> multiple times with the same idempotency token within one hour, AWS Backup recognizes that you are requesting only one backup job and initiates only one. If you change the idempotency token for each call, AWS Backup recognizes that you are requesting to start multiple backups.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The amount of time in minutes before beginning a backup.</p>
   */
  StartWindowMinutes?: number;

  /**
   * <p>The amount of time AWS Backup attempts a backup before canceling the job and returning an error.</p>
   */
  CompleteWindowMinutes?: number;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup will transition and expire backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _Lifecycle;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.</p>
   */
  RecoveryPointTags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

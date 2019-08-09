import { _UnmarshalledLifecycle } from "./_Lifecycle";
import { _UnmarshalledCalculatedLifecycle } from "./_CalculatedLifecycle";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateRecoveryPointLifecycleOutput shape
 */
export interface UpdateRecoveryPointLifecycleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An ARN that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn?: string;

  /**
   * <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   */
  Lifecycle?: _UnmarshalledLifecycle;

  /**
   * <p>A <code>CalculatedLifecycle</code> object containing <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps.</p>
   */
  CalculatedLifecycle?: _UnmarshalledCalculatedLifecycle;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

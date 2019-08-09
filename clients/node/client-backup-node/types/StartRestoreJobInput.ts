import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartRestoreJobInput shape
 */
export interface StartRestoreJobInput {
  /**
   * <p>An ARN that uniquely identifies a recovery point; for example, <code>arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45</code>.</p>
   */
  RecoveryPointArn: string;

  /**
   * <p>A set of metadata key-value pairs. Lists the metadata that the recovery point was created with.</p>
   */
  Metadata: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target recovery point; for example, <code>arn:aws:iam::123456789012:role/S3Access</code>.</p>
   */
  IamRoleArn: string;

  /**
   * <p>A customer chosen string that can be used to distinguish between calls to <code>StartRestoreJob</code>. Idempotency tokens time out after one hour. Therefore, if you call <code>StartRestoreJob</code> multiple times with the same idempotency token within one hour, AWS Backup recognizes that you are requesting only one restore job and initiates only one. If you change the idempotency token for each call, AWS Backup recognizes that you are requesting to start multiple restores. </p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Starts a job to restore a recovery point for one of the following resources:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>SGW</code> for AWS Storage Gateway</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>DDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> </ul>
   */
  ResourceType?: string;

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

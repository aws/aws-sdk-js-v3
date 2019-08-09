import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateReplicationJobInput shape
 */
export interface UpdateReplicationJobInput {
  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId: string;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date | string | number;

  /**
   * <p>The license type to be used for the AMI created by a successful replication run.</p>
   */
  licenseType?: "AWS" | "BYOL" | string;

  /**
   * <p>The name of the IAM role to be used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>The maximum number of SMS-created AMIs to retain. The oldest will be deleted once the maximum number is reached and a new AMI is created.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>When true, the replication job produces encrypted AMIs . See also <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p/> <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following: </p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to KMS key ID</p> </li> <li> <p>ARN referring to KMS key alias</p> </li> </ul> <p> If encrypted is <i>true</i> but a KMS key id is not specified, the customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

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

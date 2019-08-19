import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyDBClusterSnapshotInput shape
 */
export interface CopyDBClusterSnapshotInput {
  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>You can't copy from one AWS Region to another.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>Specify a valid DB snapshot identifier.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>
   */
  SourceDBClusterSnapshotIdentifier: string;

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>
   */
  TargetDBClusterSnapshotIdentifier: string;

  /**
   * <p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter, Amazon Neptune encrypts the target DB cluster snapshot using the specified KMS encryption key.</p> <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p> <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>.</p> <p> KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The tags to assign to the new DB cluster snapshot copy.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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

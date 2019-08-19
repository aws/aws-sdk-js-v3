import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetGroupInput shape
 */
export interface CreateDatasetGroupInput {
  /**
   * <p>The name for the new dataset group.</p>
   */
  name: string;

  /**
   * <p>The ARN of the IAM role that has permissions to access the KMS key. Supplying an IAM role is only valid when also specifying a KMS key.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a KMS key used to encrypt the datasets.</p>
   */
  kmsKeyArn?: string;

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

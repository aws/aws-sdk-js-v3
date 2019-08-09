import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartActivityStreamInput shape
 */
export interface StartActivityStreamInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster, for example <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   */
  ResourceArn: string;

  /**
   * <p>Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. </p>
   */
  Mode: "sync" | "async" | string;

  /**
   * <p>The AWS KMS key identifier for encrypting messages in the database activity stream. The key identifier can be either a key ID, a key ARN, or a key alias.</p>
   */
  KmsKeyId: string;

  /**
   * <p>Specifies whether or not the database activity stream is to start as soon as possible, regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

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

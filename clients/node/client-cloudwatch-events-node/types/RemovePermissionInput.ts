import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemovePermissionInput shape
 */
export interface RemovePermissionInput {
  /**
   * <p>The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.</p>
   */
  StatementId: string;

  /**
   * <p>The name of the event bus to revoke permissions for. If you omit this, the default event bus is used.</p>
   */
  EventBusName?: string;

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

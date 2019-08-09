import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRoleAliasInput shape
 */
export interface CreateRoleAliasInput {
  /**
   * <p>The role alias that points to a role ARN. This allows you to change the role without having to update the device.</p>
   */
  roleAlias: string;

  /**
   * <p>The role ARN.</p>
   */
  roleArn: string;

  /**
   * <p>How long (in seconds) the credentials will be valid.</p>
   */
  credentialDurationSeconds?: number;

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

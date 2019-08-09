import { _MemberDefinition } from "./_MemberDefinition";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateWorkteamInput shape
 */
export interface UpdateWorkteamInput {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contain the updated work team members.</p>
   */
  MemberDefinitions?: Array<_MemberDefinition> | Iterable<_MemberDefinition>;

  /**
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: _NotificationConfiguration;

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

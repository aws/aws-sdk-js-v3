import { _ServerGroupLaunchConfiguration } from "./_ServerGroupLaunchConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAppLaunchConfigurationInput shape
 */
export interface PutAppLaunchConfigurationInput {
  /**
   * <p>ID of the application associated with the launch configuration.</p>
   */
  appId?: string;

  /**
   * <p>Name of service role in the customer's account that Amazon CloudFormation uses to launch the application.</p>
   */
  roleName?: string;

  /**
   * <p>Launch configurations for server groups in the application.</p>
   */
  serverGroupLaunchConfigurations?:
    | Array<_ServerGroupLaunchConfiguration>
    | Iterable<_ServerGroupLaunchConfiguration>;

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

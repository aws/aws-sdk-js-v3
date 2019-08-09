import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of validation messages for a specified configuration template.</p>
 */
export interface ValidateConfigurationSettingsInput {
  /**
   * <p>The name of the application that the configuration template or environment belongs to.</p>
   */
  ApplicationName: string;

  /**
   * <p>The name of the configuration template to validate the settings against.</p> <p>Condition: You cannot specify both this and an environment name.</p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment to validate the settings against.</p> <p>Condition: You cannot specify both this and a configuration template name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>A list of the options and desired values to evaluate.</p>
   */
  OptionSettings:
    | Array<_ConfigurationOptionSetting>
    | Iterable<_ConfigurationOptionSetting>;

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

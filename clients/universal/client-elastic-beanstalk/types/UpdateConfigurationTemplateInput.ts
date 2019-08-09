import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import { _OptionSpecification } from "./_OptionSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result message containing the options for the specified solution stack.</p>
 */
export interface UpdateConfigurationTemplateInput {
  /**
   * <p>The name of the application associated with the configuration template to update.</p> <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string;

  /**
   * <p>The name of the configuration template to update.</p> <p> If no configuration template is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName: string;

  /**
   * <p>A new description for the configuration.</p>
   */
  Description?: string;

  /**
   * <p>A list of configuration option settings to update with the new specified option value.</p>
   */
  OptionSettings?:
    | Array<_ConfigurationOptionSetting>
    | Iterable<_ConfigurationOptionSetting>;

  /**
   * <p>A list of configuration options to remove from the configuration set.</p> <p> Constraint: You can remove only <code>UserDefined</code> configuration options. </p>
   */
  OptionsToRemove?:
    | Array<_OptionSpecification>
    | Iterable<_OptionSpecification>;

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

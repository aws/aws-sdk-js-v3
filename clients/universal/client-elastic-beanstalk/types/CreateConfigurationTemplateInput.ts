import { _SourceConfiguration } from "./_SourceConfiguration";
import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to create a configuration template.</p>
 */
export interface CreateConfigurationTemplateInput {
  /**
   * <p>The name of the application to associate with this configuration template. If no application is found with this name, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string;

  /**
   * <p>The name of the configuration template.</p> <p>Constraint: This name must be unique per application.</p> <p>Default: If a configuration template already exists with this name, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName: string;

  /**
   * <p>The name of the solution stack used by this configuration. The solution stack specifies the operating system, architecture, and application server for a configuration template. It determines the set of configuration options as well as the possible and default values.</p> <p> Use <a>ListAvailableSolutionStacks</a> to obtain a list of available solution stacks. </p> <p> A solution stack name or a source configuration parameter must be specified, otherwise AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>If a solution stack name is not specified and the source configuration parameter is specified, AWS Elastic Beanstalk uses the same solution stack as the source configuration template.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the custom platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.</p> <p> Values specified in the <code>OptionSettings</code> parameter of this call overrides any values obtained from the <code>SourceConfiguration</code>. </p> <p> If no configuration template is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Constraint: If both the solution stack name parameter and the source configuration parameters are specified, the solution stack of the source configuration template must match the specified solution stack name or else AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
   */
  SourceConfiguration?: _SourceConfiguration;

  /**
   * <p>The ID of the environment used with this configuration template.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Describes this configuration.</p>
   */
  Description?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk sets the specified configuration option to the requested value. The new value overrides the value obtained from the solution stack or the source configuration template.</p>
   */
  OptionSettings?:
    | Array<_ConfigurationOptionSetting>
    | Iterable<_ConfigurationOptionSetting>;

  /**
   * <p>Specifies the tags applied to the configuration template.</p>
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

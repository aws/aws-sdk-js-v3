import { _EnvironmentTier } from "./_EnvironmentTier";
import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import { _OptionSpecification } from "./_OptionSpecification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to update an environment.</p>
 */
export interface UpdateEnvironmentInput {
  /**
   * <p>The name of the application with which the environment is associated.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The ID of the environment to update.</p> <p>If no environment with this ID exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name or environment ID parameters. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.</p>
   */
  GroupName?: string;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.</p>
   */
  Description?: string;

  /**
   * <p>This specifies the tier to use to update the environment.</p> <p>Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns <code>InvalidParameterValue</code> error. </p>
   */
  Tier?: _EnvironmentTier;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an <code>InvalidParameterValue</code> error. </p>
   */
  VersionLabel?: string;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName?: string;

  /**
   * <p>This specifies the platform version that the environment will run after the environment is updated.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform, if used.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.</p>
   */
  OptionSettings?:
    | Array<_ConfigurationOptionSetting>
    | Iterable<_ConfigurationOptionSetting>;

  /**
   * <p>A list of custom user-defined configuration options to remove from the configuration set for this environment.</p>
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

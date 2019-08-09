import { _EnvironmentTier } from "./_EnvironmentTier";
import { _Tag } from "./_Tag";
import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import { _OptionSpecification } from "./_OptionSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The name of the application that contains the version to be deployed.</p> <p> If no application is found with this name, <code>CreateEnvironment</code> returns an <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string;

  /**
   * <p>A unique name for the deployment environment. Used in the application URL.</p> <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It cannot start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>Default: If the CNAME parameter is not specified, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.</p>
   */
  GroupName?: string;

  /**
   * <p>Describes this environment.</p>
   */
  Description?: string;

  /**
   * <p>If specified, the environment attempts to use this value as the prefix for the CNAME. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.</p>
   */
  CNAMEPrefix?: string;

  /**
   * <p>This specifies the tier to use for creating this environment.</p>
   */
  Tier?: _EnvironmentTier;

  /**
   * <p>Specifies the tags applied to resources in the environment.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The name of the application version to deploy.</p> <p> If the specified application has no associated application versions, AWS Elastic Beanstalk <code>UpdateEnvironment</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Default: If not specified, AWS Elastic Beanstalk attempts to launch the sample application in the container.</p>
   */
  VersionLabel?: string;

  /**
   * <p> The name of the configuration template to use in deployment. If no configuration template is found with this name, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName?: string;

  /**
   * <p>This is an alternative to specifying a template name. If specified, AWS Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack.</p> <p>For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Elastic Beanstalk Supported Platforms</a>.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.</p>
   */
  OptionSettings?:
    | Array<_ConfigurationOptionSetting>
    | Iterable<_ConfigurationOptionSetting>;

  /**
   * <p>A list of custom user-defined configuration options to remove from the configuration set for this new environment.</p>
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

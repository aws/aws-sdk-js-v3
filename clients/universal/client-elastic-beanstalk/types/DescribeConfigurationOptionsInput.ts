import { _OptionSpecification } from "./_OptionSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message containing a list of application version descriptions.</p>
 */
export interface DescribeConfigurationOptionsInput {
  /**
   * <p>The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the configuration template whose configuration options you want to describe.</p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment whose configuration options you want to describe.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the solution stack whose configuration options you want to describe.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the custom platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, restricts the descriptions to only the specified options.</p>
   */
  Options?: Array<_OptionSpecification> | Iterable<_OptionSpecification>;

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

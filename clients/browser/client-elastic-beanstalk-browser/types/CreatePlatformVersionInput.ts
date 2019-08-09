import { _S3Location } from "./_S3Location";
import { _ConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to create a new platform version.</p>
 */
export interface CreatePlatformVersionInput {
  /**
   * <p>The name of your custom platform.</p>
   */
  PlatformName: string;

  /**
   * <p>The number, such as 1.0.2, for the new platform version.</p>
   */
  PlatformVersion: string;

  /**
   * <p>The location of the platform definition archive in Amazon S3.</p>
   */
  PlatformDefinitionBundle: _S3Location;

  /**
   * <p>The name of the builder environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The configuration option settings to apply to the builder environment.</p>
   */
  OptionSettings?:
    | Array<_ConfigurationOptionSetting>
    | Iterable<_ConfigurationOptionSetting>;

  /**
   * <p>Specifies the tags applied to the new platform version.</p> <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.</p>
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

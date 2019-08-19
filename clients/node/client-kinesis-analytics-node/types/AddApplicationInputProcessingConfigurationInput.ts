import { _InputProcessingConfiguration } from "./_InputProcessingConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationInputProcessingConfigurationInput shape
 */
export interface AddApplicationInputProcessingConfigurationInput {
  /**
   * <p>Name of the application to which you want to add the input processing configuration.</p>
   */
  ApplicationName: string;

  /**
   * <p>Version of the application to which you want to add the input processing configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>The ID of the input configuration to add the input processing configuration to. You can get a list of the input IDs for an application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  InputId: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to add to the application.</p>
   */
  InputProcessingConfiguration: _InputProcessingConfiguration;

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

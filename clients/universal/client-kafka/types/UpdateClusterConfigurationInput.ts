import { _ConfigurationInfo } from "./_ConfigurationInfo";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateClusterConfigurationInput shape
 */
export interface UpdateClusterConfigurationInput {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   *
   */
  ClusterArn: string;

  /**
   *
   *             <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   *
   */
  ConfigurationInfo: _ConfigurationInfo;

  /**
   *
   *             <p>The version of the cluster that needs to be updated.</p>
   *
   */
  CurrentVersion: string;

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

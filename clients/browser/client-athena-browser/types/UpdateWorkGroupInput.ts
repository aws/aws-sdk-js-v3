import { _WorkGroupConfigurationUpdates } from "./_WorkGroupConfigurationUpdates";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateWorkGroupInput shape
 */
export interface UpdateWorkGroupInput {
  /**
   * <p>The specified workgroup that will be updated.</p>
   */
  WorkGroup: string;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup configuration that will be updated for the given workgroup.</p>
   */
  ConfigurationUpdates?: _WorkGroupConfigurationUpdates;

  /**
   * <p>The workgroup state that will be updated for the given workgroup.</p>
   */
  State?: "ENABLED" | "DISABLED" | string;

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

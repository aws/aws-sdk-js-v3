import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * NotifyApplicationStateInput shape
 */
export interface NotifyApplicationStateInput {
  /**
   * <p>The configurationId in ADS that uniquely identifies the grouped application.</p>
   */
  ApplicationId: string;

  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   */
  Status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | string;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

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

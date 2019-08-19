import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationDependenciesInput shape
 */
export interface ListApplicationDependenciesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string;

  /**
   * <p>The total number of items to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>A token to specify where to start paginating.</p>
   */
  NextToken?: string;

  /**
   * <p>The semantic version of the application to get.</p>
   */
  SemanticVersion?: string;

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

import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to list completed and failed managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionHistoryInput {
  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The pagination token returned by a previous request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for a single request.</p>
   */
  MaxItems?: number;

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

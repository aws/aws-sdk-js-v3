import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExclusionsInput shape
 */
export interface DescribeExclusionsInput {
  /**
   * <p>The list of ARNs that specify the exclusions that you want to describe.</p>
   */
  exclusionArns: Array<string> | Iterable<string>;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and recommendation.</p>
   */
  locale?: "EN_US" | string;

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

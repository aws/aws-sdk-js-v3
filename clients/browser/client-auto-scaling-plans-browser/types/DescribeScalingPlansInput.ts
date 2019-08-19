import { _ApplicationSource } from "./_ApplicationSource";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalingPlansInput shape
 */
export interface DescribeScalingPlansInput {
  /**
   * <p>The names of the scaling plans (up to 10). If you specify application sources, you cannot specify scaling plan names.</p>
   */
  ScalingPlanNames?: Array<string> | Iterable<string>;

  /**
   * <p>The version number of the scaling plan. If you specify a scaling plan version, you must also specify a scaling plan name.</p>
   */
  ScalingPlanVersion?: number;

  /**
   * <p>The sources for the applications (up to 10). If you specify scaling plan names, you cannot specify application sources.</p>
   */
  ApplicationSources?: Array<_ApplicationSource> | Iterable<_ApplicationSource>;

  /**
   * <p>The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

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

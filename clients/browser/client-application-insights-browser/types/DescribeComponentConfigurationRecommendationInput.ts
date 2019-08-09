import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeComponentConfigurationRecommendationInput shape
 */
export interface DescribeComponentConfigurationRecommendationInput {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string;

  /**
   * <p>The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB_TIER</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.</p>
   */
  Tier: string;

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

import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateComponentConfigurationInput shape
 */
export interface UpdateComponentConfigurationInput {
  /**
   * <p>The name of the resource group.</p>
   */
  ResourceGroupName: string;

  /**
   * <p>The name of the component.</p>
   */
  ComponentName: string;

  /**
   * <p>Indicates whether the application component is monitored.</p>
   */
  Monitor?: boolean;

  /**
   * <p>The tier of the application component. Supported tiers include <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB_TIER</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code>.</p>
   */
  Tier?: string;

  /**
   * <p>The configuration settings of the component. The value is the escaped JSON of the configuration. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>. You can send a request to <code>DescribeComponentConfigurationRecommendation</code> to see the recommended configuration for a component.</p>
   */
  ComponentConfiguration?: string;

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

import { _ResourceKey } from "./_ResourceKey";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRemediationExecutionStatusInput shape
 */
export interface DescribeRemediationExecutionStatusInput {
  /**
   * <p>A list of AWS Config rule names.</p>
   */
  ConfigRuleName: string;

  /**
   * <p>A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. </p>
   */
  ResourceKeys?: Array<_ResourceKey> | Iterable<_ResourceKey>;

  /**
   * <p>The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, AWS Config uses the default. </p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
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

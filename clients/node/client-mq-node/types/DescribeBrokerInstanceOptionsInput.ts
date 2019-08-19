import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBrokerInstanceOptionsInput shape
 */
export interface DescribeBrokerInstanceOptionsInput {
  /**
   * Filter response by engine type.
   */
  EngineType?: string;

  /**
   * Filter response by host instance type.
   */
  HostInstanceType?: string;

  /**
   * The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
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

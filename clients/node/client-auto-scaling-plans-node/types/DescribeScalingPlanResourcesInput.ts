import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScalingPlanResourcesInput shape
 */
export interface DescribeScalingPlanResourcesInput {
  /**
   * <p>The name of the scaling plan.</p>
   */
  ScalingPlanName: string;

  /**
   * <p>The version number of the scaling plan.</p>
   */
  ScalingPlanVersion: number;

  /**
   * <p>The maximum number of scalable resources to return. The value must be between 1 and 50. The default value is 50.</p>
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

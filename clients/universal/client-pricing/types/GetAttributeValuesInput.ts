import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAttributeValuesInput shape
 */
export interface GetAttributeValuesInput {
  /**
   * <p>The service code for the service whose attributes you want to retrieve. For example, if you want the retrieve an EC2 attribute, use <code>AmazonEC2</code>.</p>
   */
  ServiceCode: string;

  /**
   * <p>The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.</p>
   */
  AttributeName: string;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in response.</p>
   */
  MaxResults?: number;

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

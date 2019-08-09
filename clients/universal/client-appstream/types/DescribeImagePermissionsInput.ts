import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImagePermissionsInput shape
 */
export interface DescribeImagePermissionsInput {
  /**
   * <p>The name of the private image for which to describe permissions. The image must be one that you own. </p>
   */
  Name: string;

  /**
   * <p>The maximum size of each page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The 12-digit identifier of one or more AWS accounts with which the image is shared.</p>
   */
  SharedAwsAccountIds?: Array<string> | Iterable<string>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
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

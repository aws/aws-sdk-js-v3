import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImagesInput shape
 */
export interface DescribeImagesInput {
  /**
   * <p>The names of the public or private images to describe.</p>
   */
  Names?: Array<string> | Iterable<string>;

  /**
   * <p>The ARNs of the public, private, and shared images to describe.</p>
   */
  Arns?: Array<string> | Iterable<string>;

  /**
   * <p>The type of image (public, private, or shared) to describe. </p>
   */
  Type?: "PUBLIC" | "PRIVATE" | "SHARED" | string;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of each page of results.</p>
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

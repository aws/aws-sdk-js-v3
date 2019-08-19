import { _ImageIdentifier } from "./_ImageIdentifier";
import { _DescribeImagesFilter } from "./_DescribeImagesFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeImagesInput shape
 */
export interface DescribeImagesInput {
  /**
   * <p>The AWS account ID associated with the registry that contains the repository in which to describe images. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The repository that contains the images to describe.</p>
   */
  repositoryName: string;

  /**
   * <p>The list of image IDs for the requested repository.</p>
   */
  imageIds?: Array<_ImageIdentifier> | Iterable<_ImageIdentifier>;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeImages</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return. This option cannot be used when you specify images with <code>imageIds</code>.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of repository results returned by <code>DescribeImages</code> in paginated output. When this parameter is used, <code>DescribeImages</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeImages</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>DescribeImages</code> returns up to 100 results and a <code>nextToken</code> value, if applicable. This option cannot be used when you specify images with <code>imageIds</code>.</p>
   */
  maxResults?: number;

  /**
   * <p>The filter key and value with which to filter your <code>DescribeImages</code> results.</p>
   */
  filter?: _DescribeImagesFilter;

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

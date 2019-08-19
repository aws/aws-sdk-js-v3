import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDiscoveredResourceCountsInput shape
 */
export interface GetDiscoveredResourceCountsInput {
  /**
   * <p>The comma-separated list that specifies the resource types that you want AWS Config to return (for example, <code>"AWS::EC2::Instance"</code>, <code>"AWS::IAM::User"</code>).</p> <p>If a value for <code>resourceTypes</code> is not specified, AWS Config returns all resource types that AWS Config is recording in the region for your account.</p> <note> <p>If the configuration recorder is turned off, AWS Config returns an empty list of <a>ResourceCount</a> objects. If the configuration recorder is not recording a specific resource type (for example, S3 buckets), that resource type is not returned in the list of <a>ResourceCount</a> objects.</p> </note>
   */
  resourceTypes?: Array<string> | Iterable<string>;

  /**
   * <p>The maximum number of <a>ResourceCount</a> objects returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>
   */
  limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  nextToken?: string;

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

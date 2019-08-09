import { _InstanceInformationFilter } from "./_InstanceInformationFilter";
import { _InstanceInformationStringFilter } from "./_InstanceInformationStringFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInstanceInformationInput shape
 */
export interface DescribeInstanceInformationInput {
  /**
   * <p>This is a legacy method. We recommend that you don't use this method. Instead, use the <a>InstanceInformationFilter</a> action. The <code>InstanceInformationFilter</code> action enables you to return instance information by using tags that are specified as a key-value mapping. </p> <p>If you do use this method, then you can't use the <code>InstanceInformationFilter</code> action. Using this method and the <code>InstanceInformationFilter</code> action causes an exception error. </p>
   */
  InstanceInformationFilterList?:
    | Array<_InstanceInformationFilter>
    | Iterable<_InstanceInformationFilter>;

  /**
   * <p>One or more filters. Use a filter to return a more specific list of instances. You can filter on Amazon EC2 tag. Specify tags by using a key-value mapping.</p>
   */
  Filters?:
    | Array<_InstanceInformationStringFilter>
    | Iterable<_InstanceInformationStringFilter>;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
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

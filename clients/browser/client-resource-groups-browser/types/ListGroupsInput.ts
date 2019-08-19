import { _GroupFilter } from "./_GroupFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupsInput shape
 */
export interface ListGroupsInput {
  /**
   * <p>Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter groups by resource type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p> </li> </ul>
   */
  Filters?: Array<_GroupFilter> | Iterable<_GroupFilter>;

  /**
   * <p>The maximum number of resource group results that are returned by ListGroups in paginated output. By default, this number is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The NextToken value that is returned in a paginated <code>ListGroups</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.</p>
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

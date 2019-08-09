import { _Filter } from "./_Filter";
import { _OrderByElement } from "./_OrderByElement";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConfigurationsInput shape
 */
export interface ListConfigurationsInput {
  /**
   * <p>A valid configuration identified by Application Discovery Service. </p>
   */
  configurationType:
    | "SERVER"
    | "PROCESS"
    | "CONNECTION"
    | "APPLICATION"
    | string;

  /**
   * <p>You can filter the request using various logical operators and a <i>key</i>-<i>value</i> format. For example: </p> <p> <code>{"key": "serverType", "value": "webServer"}</code> </p> <p>For a complete list of filter options and guidance about using them with this action, see <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/discovery-api-queries.html#ListConfigurations">Querying Discovered Configuration Items</a>. </p>
   */
  filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The total number of items to return. The maximum value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if a previous call to ListConfigurations returned 100 items, but you set <code>ListConfigurationsRequest$maxResults</code> to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.</p>
   */
  nextToken?: string;

  /**
   * <p>Certain filter criteria return output that can be sorted in ascending or descending order. For a list of output characteristics for each filter, see <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/discovery-api-queries.html#ListConfigurations">Using the ListConfigurations Action</a>.</p>
   */
  orderBy?: Array<_OrderByElement> | Iterable<_OrderByElement>;

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

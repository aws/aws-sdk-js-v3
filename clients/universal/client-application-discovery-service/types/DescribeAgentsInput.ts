import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAgentsInput shape
 */
export interface DescribeAgentsInput {
  /**
   * <p>The agent or the Connector IDs for which you want information. If you specify no IDs, the system returns information about all agents/Connectors associated with your AWS user account.</p>
   */
  agentIds?: Array<string> | Iterable<string>;

  /**
   * <p>You can filter the request using various logical operators and a <i>key</i>-<i>value</i> format. For example: </p> <p> <code>{"key": "collectionStatus", "value": "STARTED"}</code> </p>
   */
  filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The total number of agents/Connectors to return in a single page of output. The maximum value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100 IDs for <code>DescribeAgentsRequest$agentIds</code> but set <code>DescribeAgentsRequest$maxResults</code> to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.</p>
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

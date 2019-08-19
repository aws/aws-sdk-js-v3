import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationAggregatorSourcesStatusInput shape
 */
export interface DescribeConfigurationAggregatorSourcesStatusInput {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string;

  /**
   * <p>Filters the status type.</p> <ul> <li> <p>Valid value FAILED indicates errors while moving data.</p> </li> <li> <p>Valid value SUCCEEDED indicates the data was successfully moved.</p> </li> <li> <p>Valid value OUTDATED indicates the data is not the most recent.</p> </li> </ul>
   */
  UpdateStatus?:
    | Array<"FAILED" | "SUCCEEDED" | "OUTDATED" | string>
    | Iterable<"FAILED" | "SUCCEEDED" | "OUTDATED" | string>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of AggregatorSourceStatus returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

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

import { _ConfigRuleComplianceSummaryFilters } from "./_ConfigRuleComplianceSummaryFilters";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAggregateConfigRuleComplianceSummaryInput shape
 */
export interface GetAggregateConfigRuleComplianceSummaryInput {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string;

  /**
   * <p>Filters the results based on the ConfigRuleComplianceSummaryFilters object.</p>
   */
  Filters?: _ConfigRuleComplianceSummaryFilters;

  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   */
  GroupByKey?: "ACCOUNT_ID" | "AWS_REGION" | string;

  /**
   * <p>The maximum number of evaluation results returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
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

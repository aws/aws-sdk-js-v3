import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAggregateComplianceDetailsByConfigRuleInput shape
 */
export interface GetAggregateComplianceDetailsByConfigRuleInput {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string;

  /**
   * <p>The name of the AWS Config rule for which you want compliance information.</p>
   */
  ConfigRuleName: string;

  /**
   * <p>The 12-digit account ID of the source account.</p>
   */
  AccountId: string;

  /**
   * <p>The source region from where the data is aggregated.</p>
   */
  AwsRegion: string;

  /**
   * <p>The resource compliance status.</p> <note> <p>For the <code>GetAggregateComplianceDetailsByConfigRuleRequest</code> data type, AWS Config supports only the <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. AWS Config does not support the <code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code> values.</p> </note>
   */
  ComplianceType?:
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | "NOT_APPLICABLE"
    | "INSUFFICIENT_DATA"
    | string;

  /**
   * <p>The maximum number of evaluation results returned on each page. The default is 50. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>
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

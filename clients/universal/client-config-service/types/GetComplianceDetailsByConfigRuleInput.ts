import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetComplianceDetailsByConfigRuleInput {
  /**
   * <p>The name of the AWS Config rule for which you want compliance information.</p>
   */
  ConfigRuleName: string;

  /**
   * <p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code>.</p>
   */
  ComplianceTypes?:
    | Array<
        | "COMPLIANT"
        | "NON_COMPLIANT"
        | "NOT_APPLICABLE"
        | "INSUFFICIENT_DATA"
        | string
      >
    | Iterable<
        | "COMPLIANT"
        | "NON_COMPLIANT"
        | "NOT_APPLICABLE"
        | "INSUFFICIENT_DATA"
        | string
      >;

  /**
   * <p>The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.</p>
   */
  Limit?: number;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.</p>
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

import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRequestedServiceQuotaChangeHistoryInput shape
 */
export interface ListRequestedServiceQuotaChangeHistoryInput {
  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the status value of the quota increase request.</p>
   */
  Status?:
    | "PENDING"
    | "CASE_OPENED"
    | "APPROVED"
    | "DENIED"
    | "CASE_CLOSED"
    | string;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code> response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the <code>NextToken</code> element is present and has a value (isn't null). Include that value as the <code>NextToken</code> request parameter in the call to the operation to get the next part of the results. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

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

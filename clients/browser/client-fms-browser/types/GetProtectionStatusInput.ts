import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetProtectionStatusInput shape
 */
export interface GetProtectionStatusInput {
  /**
   * <p>The ID of the policy for which you want to get the attack information.</p>
   */
  PolicyId: string;

  /**
   * <p>The AWS account that is in scope of the policy that you want to get the details for.</p>
   */
  MemberAccountId?: string;

  /**
   * <p>The start of the time period to query for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a number type because the default used by AWS Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is allowed.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end of the time period to query for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a number type because the default used by AWS Firewall Manager is Unix time in seconds. However, any valid <code>timestamp</code> format is allowed.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>If you specify a value for <code>MaxResults</code> and you have more objects than the number that you specify for <code>MaxResults</code>, AWS Firewall Manager returns a <code>NextToken</code> value in the response that allows you to list another group of objects. For the second and subsequent <code>GetProtectionStatus</code> requests, specify the value of <code>NextToken</code> from the previous response to get information about another batch of objects.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of objects that you want AWS Firewall Manager to return for this request. If you have more objects than the number that you specify for <code>MaxResults</code>, the response includes a <code>NextToken</code> value that you can use to get another batch of objects.</p>
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

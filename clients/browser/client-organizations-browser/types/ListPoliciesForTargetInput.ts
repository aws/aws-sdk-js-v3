import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPoliciesForTargetInput shape
 */
export interface ListPoliciesForTargetInput {
  /**
   * <p>The unique identifier (ID) of the root, organizational unit, or account whose policies you want to list.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Account: a string that consists of exactly 12 digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>
   */
  TargetId: string;

  /**
   * <p>The type of policy that you want to include in the returned list.</p>
   */
  Filter: "SERVICE_CONTROL_POLICY" | string;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) Use this to limit the number of results you want included per page in the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that Organizations might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p>
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

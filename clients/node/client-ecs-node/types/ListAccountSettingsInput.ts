import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAccountSettingsInput shape
 */
export interface ListAccountSettingsInput {
  /**
   * <p>The resource name you want to list the account settings for.</p>
   */
  name?:
    | "serviceLongArnFormat"
    | "taskLongArnFormat"
    | "containerInstanceLongArnFormat"
    | "awsvpcTrunking"
    | "containerInsights"
    | string;

  /**
   * <p>The value of the account settings with which to filter results. You must also specify an account setting name to use this parameter.</p>
   */
  value?: string;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If this field is omitted, the account settings are listed only for the authenticated user.</p>
   */
  principalArn?: string;

  /**
   * <p>Specifies whether to return the effective settings. If <code>true</code>, the account settings for the root user or the default setting for the <code>principalArn</code> are returned. If <code>false</code>, the account settings for the <code>principalArn</code> are returned if they are set. Otherwise, no account settings are returned.</p>
   */
  effectiveSettings?: boolean;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListAccountSettings</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of account setting results returned by <code>ListAccountSettings</code> in paginated output. When this parameter is used, <code>ListAccountSettings</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListAccountSettings</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 10. If this parameter is not used, then <code>ListAccountSettings</code> returns up to 10 results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

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

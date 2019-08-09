import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSkillsInput shape
 */
export interface ListSkillsInput {
  /**
   * <p>The ARN of the skill group for which to list enabled skills. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>Whether the skill is enabled under the user's account, or if it requires linking to be used.</p>
   */
  EnablementType?: "ENABLED" | "PENDING" | string;

  /**
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: "PUBLIC" | "PRIVATE" | "ALL" | string;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. Required.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. Required.</p>
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

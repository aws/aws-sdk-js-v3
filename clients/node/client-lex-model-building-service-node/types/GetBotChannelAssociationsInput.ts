import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBotChannelAssociationsInput shape
 */
export interface GetBotChannelAssociationsInput {
  /**
   * <p>The name of the Amazon Lex bot in the association.</p>
   */
  botName: string;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.</p>
   */
  botAlias: string;

  /**
   * <p>A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of associations to return in the response. The default is 50. </p>
   */
  maxResults?: number;

  /**
   * <p>Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the <code>nameContains</code> parameter.</p>
   */
  nameContains?: string;

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

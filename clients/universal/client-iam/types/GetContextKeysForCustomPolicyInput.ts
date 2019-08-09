import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContextKeysForCustomPolicyInput shape
 */
export interface GetContextKeysForCustomPolicyInput {
  /**
   * <p>A list of policies for which you want the list of context keys referenced in those policies. Each document is specified as a string containing the complete, valid JSON text of an IAM policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF)</p> </li> <li> <p>The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</p> </li> </ul>
   */
  PolicyInputList: Array<string> | Iterable<string>;

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

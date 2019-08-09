import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * MoveAccountInput shape
 */
export interface MoveAccountInput {
  /**
   * <p>The unique identifier (ID) of the account that you want to move.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>
   */
  AccountId: string;

  /**
   * <p>The unique identifier (ID) of the root or organizational unit that you want to move the account from.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>
   */
  SourceParentId: string;

  /**
   * <p>The unique identifier (ID) of the root or organizational unit that you want to move the account to.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the following:</p> <ul> <li> <p>Root: a string that begins with "r-" followed by from 4 to 32 lower-case letters or digits.</p> </li> <li> <p>Organizational unit (OU): a string that begins with "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that the OU is in) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.</p> </li> </ul>
   */
  DestinationParentId: string;

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

import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServiceActionInput shape
 */
export interface UpdateServiceActionInput {
  /**
   * <p>The self-service action identifier.</p>
   */
  Id: string;

  /**
   * <p>The self-service action name.</p>
   */
  Name?: string;

  /**
   * <p>A map that defines the self-service action.</p>
   */
  Definition?:
    | {
        [key in
          | "Name"
          | "Version"
          | "AssumeRole"
          | "Parameters"
          | string]: string
      }
    | Iterable<
        ["Name" | "Version" | "AssumeRole" | "Parameters" | string, string]
      >;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

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

import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSessionInput shape
 */
export interface StartSessionInput {
  /**
   * <p>The instance to connect to for the session.</p>
   */
  Target: string;

  /**
   * <p>The name of the SSM document to define the parameters and plugin settings for the session. For example, <code>SSM-SessionManagerRunShell</code>. If no document name is provided, a shell to the instance is launched by default.</p>
   */
  DocumentName?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Parameters?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

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

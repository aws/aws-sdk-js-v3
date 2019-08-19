import { _ObjectReference } from "./_ObjectReference";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachToIndexInput shape
 */
export interface AttachToIndexInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where the object and index exist.</p>
   */
  DirectoryArn: string;

  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: _ObjectReference;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: _ObjectReference;

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

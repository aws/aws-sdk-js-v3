import { _LifecyclePolicy } from "./_LifecyclePolicy";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutLifecycleConfigurationInput shape
 */
export interface PutLifecycleConfigurationInput {
  /**
   * <p>The ID of the file system for which you are creating the <code>LifecycleConfiguration</code> object (String).</p>
   */
  FileSystemId: string;

  /**
   * <p>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object tells lifecycle management when to transition files from the Standard storage class to the Infrequent Access storage class.</p>
   */
  LifecyclePolicies: Array<_LifecyclePolicy> | Iterable<_LifecyclePolicy>;

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

import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInstanceProfileInput shape
 */
export interface CreateInstanceProfileInput {
  /**
   * <p>The name of your instance profile.</p>
   */
  name: string;

  /**
   * <p>The description of your instance profile.</p>
   */
  description?: string;

  /**
   * <p>When set to <code>true</code>, Device Farm will remove app packages after a test run. The default value is <code>false</code> for private devices.</p>
   */
  packageCleanup?: boolean;

  /**
   * <p>An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>
   */
  excludeAppPackagesFromCleanup?: Array<string> | Iterable<string>;

  /**
   * <p>When set to <code>true</code>, Device Farm will reboot the instance after a test run. The default value is <code>true</code>.</p>
   */
  rebootAfterUse?: boolean;

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

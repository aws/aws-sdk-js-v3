import { _DiskImage } from "./_DiskImage";
import { _ImportInstanceLaunchSpecification } from "./_ImportInstanceLaunchSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportInstanceInput shape
 */
export interface ImportInstanceInput {
  /**
   * <p>A description for the instance being imported.</p>
   */
  Description?: string;

  /**
   * <p>The disk image.</p>
   */
  DiskImages?: Array<_DiskImage> | Iterable<_DiskImage>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The launch specification.</p>
   */
  LaunchSpecification?: _ImportInstanceLaunchSpecification;

  /**
   * <p>The instance operating system.</p>
   */
  Platform: "Windows" | string;

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

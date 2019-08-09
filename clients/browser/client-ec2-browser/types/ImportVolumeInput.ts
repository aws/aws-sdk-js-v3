import { _DiskImageDetail } from "./_DiskImageDetail";
import { _VolumeDetail } from "./_VolumeDetail";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportVolumeInput shape
 */
export interface ImportVolumeInput {
  /**
   * <p>The Availability Zone for the resulting EBS volume.</p>
   */
  AvailabilityZone: string;

  /**
   * <p>A description of the volume.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The disk image.</p>
   */
  Image: _DiskImageDetail;

  /**
   * <p>The volume size.</p>
   */
  Volume: _VolumeDetail;

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

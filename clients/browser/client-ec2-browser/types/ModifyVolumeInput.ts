import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyVolumeInput shape
 */
export interface ModifyVolumeInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId: string;

  /**
   * <p>The target size of the volume, in GiB. The target volume size must be greater than or equal to than the existing size of the volume. For information about available EBS volume sizes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a>.</p> <p>Default: If no size is specified, the existing size is retained.</p>
   */
  Size?: number;

  /**
   * <p>The target EBS volume type of the volume.</p> <p>Default: If no type is specified, the existing type is retained.</p>
   */
  VolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;

  /**
   * <p>The target IOPS rate of the volume.</p> <p>This is only valid for Provisioned IOPS SSD (<code>io1</code>) volumes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html#EBSVolumeTypes_piops">Provisioned IOPS SSD (io1) Volumes</a>.</p> <p>Default: If no IOPS value is specified, the existing value is retained.</p>
   */
  Iops?: number;

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

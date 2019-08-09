import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPatchBaselineForPatchGroupInput shape
 */
export interface GetPatchBaselineForPatchGroupInput {
  /**
   * <p>The name of the patch group whose patch baseline should be retrieved.</p>
   */
  PatchGroup: string;

  /**
   * <p>Returns he operating system rule specified for patch groups using the patch baseline.</p>
   */
  OperatingSystem?:
    | "WINDOWS"
    | "AMAZON_LINUX"
    | "AMAZON_LINUX_2"
    | "UBUNTU"
    | "REDHAT_ENTERPRISE_LINUX"
    | "SUSE"
    | "CENTOS"
    | string;

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

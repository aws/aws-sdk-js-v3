import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure used to request generation of custom SDK and tool packages required to integrate mobile web or app clients with backed AWS resources. </p>
 */
export interface ExportBundleInput {
  /**
   * <p> Unique bundle identifier. </p>
   */
  bundleId: string;

  /**
   * <p> Unique project identifier. </p>
   */
  projectId?: string;

  /**
   * <p> Developer desktop or target application platform. </p>
   */
  platform?:
    | "OSX"
    | "WINDOWS"
    | "LINUX"
    | "OBJC"
    | "SWIFT"
    | "ANDROID"
    | "JAVASCRIPT"
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

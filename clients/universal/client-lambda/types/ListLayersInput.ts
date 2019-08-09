import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLayersInput shape
 */
export interface ListLayersInput {
  /**
   * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
   */
  CompatibleRuntime?:
    | "nodejs"
    | "nodejs4.3"
    | "nodejs6.10"
    | "nodejs8.10"
    | "nodejs10.x"
    | "java8"
    | "python2.7"
    | "python3.6"
    | "python3.7"
    | "dotnetcore1.0"
    | "dotnetcore2.0"
    | "dotnetcore2.1"
    | "nodejs4.3-edge"
    | "go1.x"
    | "ruby2.5"
    | "provided"
    | string;

  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of layers to return.</p>
   */
  MaxItems?: number;

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

import { _LayerVersionContentInput } from "./_LayerVersionContentInput";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PublishLayerVersionInput shape
 */
export interface PublishLayerVersionInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The function layer archive.</p>
   */
  Content: _LayerVersionContentInput;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p>
   */
  CompatibleRuntimes?:
    | Array<
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
        | string
      >
    | Iterable<
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
        | string
      >;

  /**
   * <p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>
   */
  LicenseInfo?: string;

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

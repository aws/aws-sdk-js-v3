import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to the list artifacts operation.</p>
 */
export interface ListArtifactsInput {
  /**
   * <p>The Run, Job, Suite, or Test ARN.</p>
   */
  arn: string;

  /**
   * <p>The artifacts' type.</p> <p>Allowed values include:</p> <ul> <li> <p>FILE: The artifacts are files.</p> </li> <li> <p>LOG: The artifacts are logs.</p> </li> <li> <p>SCREENSHOT: The artifacts are screenshots.</p> </li> </ul>
   */
  type: "SCREENSHOT" | "FILE" | "LOG" | string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

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

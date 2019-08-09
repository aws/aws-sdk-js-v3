import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUploadInput shape
 */
export interface UpdateUploadInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the uploaded test spec.</p>
   */
  arn: string;

  /**
   * <p>The upload's test spec file name. The name should not contain the '/' character. The test spec file name must end with the <code>.yaml</code> or <code>.yml</code> file extension.</p>
   */
  name?: string;

  /**
   * <p>The upload's content type (for example, "application/x-yaml").</p>
   */
  contentType?: string;

  /**
   * <p>Set to true if the YAML file has changed and needs to be updated; otherwise, set to false.</p>
   */
  editContent?: boolean;

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

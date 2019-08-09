import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateApplicationVersionInput shape
 */
export interface CreateApplicationVersionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationId: string;

  /**
   * <p>The semantic version of the new version.</p>
   */
  SemanticVersion: string;

  /**
   * <p>A link to the S3 object that contains the ZIP archive of the source code for this version of your application.</p><p>Maximum size 50 MB</p>
   */
  SourceCodeArchiveUrl?: string;

  /**
   * <p>A link to a public repository for the source code of your application, for example the URL of a specific GitHub commit.</p>
   */
  SourceCodeUrl?: string;

  /**
   * <p>The raw packaged AWS SAM template of your application.</p>
   */
  TemplateBody?: string;

  /**
   * <p>A link to the packaged AWS SAM template of your application.</p>
   */
  TemplateUrl?: string;

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

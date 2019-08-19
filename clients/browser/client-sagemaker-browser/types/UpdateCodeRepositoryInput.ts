import { _GitConfigForUpdate } from "./_GitConfigForUpdate";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateCodeRepositoryInput shape
 */
export interface UpdateCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the repository. The secret must have a staging label of <code>AWSCURRENT</code> and must be in the following format:</p> <p> <code>{"username": <i>UserName</i>, "password": <i>Password</i>}</code> </p>
   */
  GitConfig?: _GitConfigForUpdate;

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

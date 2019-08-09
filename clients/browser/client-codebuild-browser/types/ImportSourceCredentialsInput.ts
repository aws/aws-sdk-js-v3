import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportSourceCredentialsInput shape
 */
export interface ImportSourceCredentialsInput {
  /**
   * <p> The Bitbucket username when the <code>authType</code> is BASIC_AUTH. This parameter is not valid for other types of source providers or connections. </p>
   */
  username?: string;

  /**
   * <p> For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password. </p>
   */
  token: string;

  /**
   * <p> The source provider used for this project. </p>
   */
  serverType: "GITHUB" | "BITBUCKET" | "GITHUB_ENTERPRISE" | string;

  /**
   * <p> The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the AWS CodeBuild console. </p>
   */
  authType: "OAUTH" | "BASIC_AUTH" | "PERSONAL_ACCESS_TOKEN" | string;

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

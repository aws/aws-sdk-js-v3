import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure for a branch create request. </p>
 */
export interface CreateBranchInput {
  /**
   * <p> Unique Id for an Amplify App. </p>
   */
  appId: string;

  /**
   * <p> Name for the branch. </p>
   */
  branchName: string;

  /**
   * <p> Description for the branch. </p>
   */
  description?: string;

  /**
   * <p> Stage for the branch. </p>
   */
  stage?: "PRODUCTION" | "BETA" | "DEVELOPMENT" | "EXPERIMENTAL" | string;

  /**
   * <p> Framework for the branch. </p>
   */
  framework?: string;

  /**
   * <p> Enables notifications for the branch. </p>
   */
  enableNotification?: boolean;

  /**
   * <p> Enables auto building for the branch. </p>
   */
  enableAutoBuild?: boolean;

  /**
   * <p> Environment Variables for the branch. </p>
   */
  environmentVariables?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> Basic Authorization credentials for the branch. </p>
   */
  basicAuthCredentials?: string;

  /**
   * <p> Enables Basic Auth for the branch. </p>
   */
  enableBasicAuth?: boolean;

  /**
   * <p> Tag for the branch. </p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> BuildSpec for the branch. </p>
   */
  buildSpec?: string;

  /**
   * <p> The content TTL for the website in seconds. </p>
   */
  ttl?: string;

  /**
   * <p> Display name for a branch, will use as the default domain prefix. </p>
   */
  displayName?: string;

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

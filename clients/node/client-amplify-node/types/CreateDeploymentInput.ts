import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure for create a new deployment. </p>
 */
export interface CreateDeploymentInput {
  /**
   * <p> Unique Id for an Amplify App. </p>
   */
  appId: string;

  /**
   * <p> Name for the branch, for the Job. </p>
   */
  branchName: string;

  /**
   * <p> Optional file map that contains file name as the key and file content md5 hash as the value. If this argument is provided, the service will generate different upload url per file. Otherwise, the service will only generate a single upload url for the zipped files. </p>
   */
  fileMap?: { [key: string]: string } | Iterable<[string, string]>;

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

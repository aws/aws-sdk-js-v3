import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request structure for Start job request. </p>
 */
export interface StartJobInput {
  /**
   * <p> Unique Id for an Amplify App. </p>
   */
  appId: string;

  /**
   * <p> Name for the branch, for the Job. </p>
   */
  branchName: string;

  /**
   * <p> Unique Id for an existing job. Required for "RETRY" JobType. </p>
   */
  jobId?: string;

  /**
   * <p> Type for the Job. Available JobTypes are: \n "RELEASE": Start a new job with the latest change from the specified branch. Only available for apps that have connected to a repository. "RETRY": Retry an existing job. JobId is required for this type of job. </p>
   */
  jobType: "RELEASE" | "RETRY" | "MANUAL" | "WEB_HOOK" | string;

  /**
   * <p> Descriptive reason for starting this job. </p>
   */
  jobReason?: string;

  /**
   * <p> Commit Id from 3rd party repository provider for the Job. </p>
   */
  commitId?: string;

  /**
   * <p> Commit message from 3rd party repository provider for the Job. </p>
   */
  commitMessage?: string;

  /**
   * <p> Commit date / time for the Job. </p>
   */
  commitTime?: Date | string | number;

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

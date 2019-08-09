/**
 * <p> Structure for the summary of a Job. </p>
 */
export interface _JobSummary {
  /**
   * <p> Arn for the Job. </p>
   */
  jobArn: string;

  /**
   * <p> Unique Id for the Job. </p>
   */
  jobId: string;

  /**
   * <p> Commit Id from 3rd party repository provider for the Job. </p>
   */
  commitId: string;

  /**
   * <p> Commit message from 3rd party repository provider for the Job. </p>
   */
  commitMessage: string;

  /**
   * <p> Commit date / time for the Job. </p>
   */
  commitTime: Date | string | number;

  /**
   * <p> Start date / time for the Job. </p>
   */
  startTime: Date | string | number;

  /**
   * <p> Status for the Job. </p>
   */
  status:
    | "PENDING"
    | "PROVISIONING"
    | "RUNNING"
    | "FAILED"
    | "SUCCEED"
    | "CANCELLING"
    | "CANCELLED"
    | string;

  /**
   * <p> End date / time for the Job. </p>
   */
  endTime?: Date | string | number;

  /**
   * <p> Type for the Job. \n "RELEASE": Manually released from source by using StartJob API. "RETRY": Manually retried by using StartJob API. "WEB_HOOK": Automatically triggered by WebHooks. </p>
   */
  jobType: "RELEASE" | "RETRY" | "MANUAL" | "WEB_HOOK" | string;
}

export interface _UnmarshalledJobSummary extends _JobSummary {
  /**
   * <p> Commit date / time for the Job. </p>
   */
  commitTime: Date;

  /**
   * <p> Start date / time for the Job. </p>
   */
  startTime: Date;

  /**
   * <p> End date / time for the Job. </p>
   */
  endTime?: Date;
}

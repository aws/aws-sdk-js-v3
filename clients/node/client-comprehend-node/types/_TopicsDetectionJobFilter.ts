/**
 * <p>Provides information for filtering topic detection jobs. For more information, see .</p>
 */
export interface _TopicsDetectionJobFilter {
  /**
   * <p/>
   */
  JobName?: string;

  /**
   * <p>Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.</p>
   */
  JobStatus?:
    | "SUBMITTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "STOP_REQUESTED"
    | "STOPPED"
    | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeBefore?: Date | string | number;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeAfter?: Date | string | number;
}

export interface _UnmarshalledTopicsDetectionJobFilter
  extends _TopicsDetectionJobFilter {
  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Only returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;
}

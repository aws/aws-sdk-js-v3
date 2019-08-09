/**
 * <p>Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.</p>
 */
export interface _DocumentClassificationJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list based on job status. Returns only jobs with the specified status.</p>
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
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date | string | number;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date | string | number;
}

export interface _UnmarshalledDocumentClassificationJobFilter
  extends _DocumentClassificationJobFilter {
  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

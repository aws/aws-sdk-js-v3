import { _JobData, _UnmarshalledJobData } from "./_JobData";

/**
 * <p>Represents information about the details of a job.</p>
 */
export interface _JobDetails {
  /**
   * <p>The unique system-generated ID of the job.</p>
   */
  id?: string;

  /**
   * <p>Represents additional information about a job required for a job worker to complete the job. </p>
   */
  data?: _JobData;

  /**
   * <p>The AWS account ID associated with the job.</p>
   */
  accountId?: string;
}

export interface _UnmarshalledJobDetails extends _JobDetails {
  /**
   * <p>Represents additional information about a job required for a job worker to complete the job. </p>
   */
  data?: _UnmarshalledJobData;
}

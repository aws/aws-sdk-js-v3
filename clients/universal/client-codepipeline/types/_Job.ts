import { _JobData, _UnmarshalledJobData } from "./_JobData";

/**
 * <p>Represents information about a job.</p>
 */
export interface _Job {
  /**
   * <p>The unique system-generated ID of the job.</p>
   */
  id?: string;

  /**
   * <p>Additional data about a job.</p>
   */
  data?: _JobData;

  /**
   * <p>A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an <a>AcknowledgeJob</a> request.</p>
   */
  nonce?: string;

  /**
   * <p>The ID of the AWS account to use when performing the job.</p>
   */
  accountId?: string;
}

export interface _UnmarshalledJob extends _Job {
  /**
   * <p>Additional data about a job.</p>
   */
  data?: _UnmarshalledJobData;
}

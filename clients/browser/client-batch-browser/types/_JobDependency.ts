/**
 * <p>An object representing an AWS Batch job dependency.</p>
 */
export interface _JobDependency {
  /**
   * <p>The job ID of the AWS Batch job associated with this dependency.</p>
   */
  jobId?: string;

  /**
   * <p>The type of the job dependency.</p>
   */
  type?: "N_TO_N" | "SEQUENTIAL" | string;
}

export type _UnmarshalledJobDependency = _JobDependency;

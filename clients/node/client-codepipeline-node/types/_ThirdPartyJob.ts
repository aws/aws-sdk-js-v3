/**
 * <p>A response to a <code>PollForThirdPartyJobs </code>request returned by AWS CodePipeline when there is a job to be worked upon by a partner action.</p>
 */
export interface _ThirdPartyJob {
  /**
   * <p>The <code>clientToken</code> portion of the <code>clientId</code> and <code>clientToken</code> pair used to verify that the calling entity is allowed access to the job and its details.</p>
   */
  clientId?: string;

  /**
   * <p>The identifier used to identify the job in AWS CodePipeline.</p>
   */
  jobId?: string;
}

export type _UnmarshalledThirdPartyJob = _ThirdPartyJob;

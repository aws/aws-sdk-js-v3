import {
  _ThirdPartyJobData,
  _UnmarshalledThirdPartyJobData
} from "./_ThirdPartyJobData";

/**
 * <p>The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.</p>
 */
export interface _ThirdPartyJobDetails {
  /**
   * <p>The identifier used to identify the job details in AWS CodePipeline.</p>
   */
  id?: string;

  /**
   * <p>The data to be returned by the third party job worker.</p>
   */
  data?: _ThirdPartyJobData;

  /**
   * <p>A system-generated random number that AWS CodePipeline uses to ensure that the job is being worked on by only one job worker. Use this number in an <a>AcknowledgeThirdPartyJob</a> request.</p>
   */
  nonce?: string;
}

export interface _UnmarshalledThirdPartyJobDetails
  extends _ThirdPartyJobDetails {
  /**
   * <p>The data to be returned by the third party job worker.</p>
   */
  data?: _UnmarshalledThirdPartyJobData;
}

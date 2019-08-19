import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Job or cluster creation failed. One ore more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 */
export interface InvalidInputCombinationException
  extends __ServiceException__<_InvalidInputCombinationExceptionDetails> {
  name: "InvalidInputCombinationException";
}

export interface _InvalidInputCombinationExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}

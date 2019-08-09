import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This traffic policy version can't be created because you've reached the limit of 1000 on the number of versions that you can create for the current traffic policy.</p> <p>To create more traffic policy versions, you can use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a> to get the traffic policy document for a specified traffic policy version, and then use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a> to create a new traffic policy using the traffic policy document.</p>
 */
export interface TooManyTrafficPolicyVersionsForCurrentPolicy
  extends __ServiceException__<
    _TooManyTrafficPolicyVersionsForCurrentPolicyDetails
  > {
  name: "TooManyTrafficPolicyVersionsForCurrentPolicy";
}

export interface _TooManyTrafficPolicyVersionsForCurrentPolicyDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have encountered a service limit on the specified resource.</p>
 */
export interface ResourceLimitExceededException
  extends __ServiceException__<_ResourceLimitExceededExceptionDetails> {
  name: "ResourceLimitExceededException";
}

export interface _ResourceLimitExceededExceptionDetails {
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * _String shape
   */
  message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * _String shape
   */
  message?: string;
}

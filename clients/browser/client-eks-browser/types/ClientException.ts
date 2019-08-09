import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>These errors are usually caused by a client action. Actions can include using an action or resource on behalf of a user that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.</p>
 */
export interface ClientException
  extends __ServiceException__<_ClientExceptionDetails> {
  name: "ClientException";
}

export interface _ClientExceptionDetails {
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * _String shape
   */
  message?: string;
}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 */
export interface ServerException
  extends __ServiceException__<_ServerExceptionDetails> {
  name: "ServerException";
}

export interface _ServerExceptionDetails {
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * _String shape
   */
  message?: string;
}

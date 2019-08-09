import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * _String shape
   */
  message?: string;
}

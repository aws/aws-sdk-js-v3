import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are Region-specific.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * _String shape
   */
  message?: string;
}

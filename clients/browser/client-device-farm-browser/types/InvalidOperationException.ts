import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was an error with the update request, or you do not have sufficient permissions to update this VPC endpoint configuration.</p>
 */
export interface InvalidOperationException
  extends __ServiceException__<_InvalidOperationExceptionDetails> {
  name: "InvalidOperationException";
}

export interface _InvalidOperationExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}

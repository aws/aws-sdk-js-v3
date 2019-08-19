import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 */
export interface OperationNotPermittedFault
  extends __ServiceException__<_OperationNotPermittedFaultDetails> {
  name: "OperationNotPermittedFault";
}

export interface _OperationNotPermittedFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}

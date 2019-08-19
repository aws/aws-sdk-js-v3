import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You specified the <code>Safe</code> option for the DeregisterTargetFromMaintenanceWindow operation, but the target is still referenced in a task.</p>
 */
export interface TargetInUseException
  extends __ServiceException__<_TargetInUseExceptionDetails> {
  name: "TargetInUseException";
}

export interface _TargetInUseExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}

/**
 * <p>Describes a pending database maintenance action.</p>
 */
export interface _PendingMaintenanceAction {
  /**
   * <p>The type of pending database maintenance action.</p>
   */
  action?: string;

  /**
   * <p>Additional detail about the pending database maintenance action.</p>
   */
  description?: string;

  /**
   * <p>The effective date of the pending database maintenance action.</p>
   */
  currentApplyDate?: Date | string | number;
}

export interface _UnmarshalledPendingMaintenanceAction
  extends _PendingMaintenanceAction {
  /**
   * <p>The effective date of the pending database maintenance action.</p>
   */
  currentApplyDate?: Date;
}

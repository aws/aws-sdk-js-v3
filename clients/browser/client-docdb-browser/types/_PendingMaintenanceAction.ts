/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface _PendingMaintenanceAction {
  /**
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date | string | number;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date | string | number;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The effective date when the pending maintenance action is applied to the resource.</p>
   */
  CurrentApplyDate?: Date | string | number;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;
}

export interface _UnmarshalledPendingMaintenanceAction
  extends _PendingMaintenanceAction {
  /**
   * <p>The date of the maintenance window when the action is applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>The effective date when the pending maintenance action is applied to the resource.</p>
   */
  CurrentApplyDate?: Date;
}

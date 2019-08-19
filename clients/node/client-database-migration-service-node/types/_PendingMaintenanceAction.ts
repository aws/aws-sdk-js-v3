/**
 * <p/>
 */
export interface _PendingMaintenanceAction {
  /**
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action will be applied. The maintenance action will be applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date | string | number;

  /**
   * <p>The date when the maintenance action will be automatically applied. The maintenance action will be applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date | string | number;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The effective date when the pending maintenance action will be applied to the resource. This date takes into account opt-in requests received from the <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>, and the <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received and nothing has been specified as <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
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
   * <p>The date of the maintenance window when the action will be applied. The maintenance action will be applied to the resource during its first maintenance window after this date. If this date is specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The date when the maintenance action will be automatically applied. The maintenance action will be applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>The effective date when the pending maintenance action will be applied to the resource. This date takes into account opt-in requests received from the <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>, and the <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received and nothing has been specified as <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;
}

/**
 * <p>Information about a deployment rollback.</p>
 */
export interface _RollbackInfo {
  /**
   * <p>The ID of the deployment rollback.</p>
   */
  rollbackDeploymentId?: string;

  /**
   * <p>The deployment ID of the deployment that was underway and triggered a rollback deployment because it failed or was stopped.</p>
   */
  rollbackTriggeringDeploymentId?: string;

  /**
   * <p>Information that describes the status of a deployment rollback (for example, whether the deployment can't be rolled back, is in progress, failed, or succeeded). </p>
   */
  rollbackMessage?: string;
}

export type _UnmarshalledRollbackInfo = _RollbackInfo;

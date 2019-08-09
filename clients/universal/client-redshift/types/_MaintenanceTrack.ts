import { _UpdateTarget, _UnmarshalledUpdateTarget } from "./_UpdateTarget";

/**
 * <p>Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release. </p>
 */
export interface _MaintenanceTrack {
  /**
   * <p>The name of the maintenance track. Possible values are <code>current</code> and <code>trailing</code>.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The version number for the cluster release.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance track. </p>
   */
  UpdateTargets?: Array<_UpdateTarget> | Iterable<_UpdateTarget>;
}

export interface _UnmarshalledMaintenanceTrack extends _MaintenanceTrack {
  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance track. </p>
   */
  UpdateTargets?: Array<_UnmarshalledUpdateTarget>;
}

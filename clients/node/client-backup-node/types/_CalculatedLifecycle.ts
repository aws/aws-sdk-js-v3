/**
 * <p>Contains <code>DeleteAt</code> and <code>MoveToColdStorageAt</code> timestamps, which are used to specify a lifecycle for a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
 */
export interface _CalculatedLifecycle {
  /**
   * <p>A timestamp that specifies when to transition a recovery point to cold storage.</p>
   */
  MoveToColdStorageAt?: Date | string | number;

  /**
   * <p>A timestamp that specifies when to delete a recovery point.</p>
   */
  DeleteAt?: Date | string | number;
}

export interface _UnmarshalledCalculatedLifecycle extends _CalculatedLifecycle {
  /**
   * <p>A timestamp that specifies when to transition a recovery point to cold storage.</p>
   */
  MoveToColdStorageAt?: Date;

  /**
   * <p>A timestamp that specifies when to delete a recovery point.</p>
   */
  DeleteAt?: Date;
}

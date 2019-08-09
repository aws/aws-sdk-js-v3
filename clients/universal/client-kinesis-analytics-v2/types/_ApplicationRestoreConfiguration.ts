/**
 * <p>Specifies the method and snapshot to use when restarting an application using previously saved application state.</p>
 */
export interface _ApplicationRestoreConfiguration {
  /**
   * <p>Specifies how the application should be restored.</p>
   */
  ApplicationRestoreType:
    | "SKIP_RESTORE_FROM_SNAPSHOT"
    | "RESTORE_FROM_LATEST_SNAPSHOT"
    | "RESTORE_FROM_CUSTOM_SNAPSHOT"
    | string;

  /**
   * <p>The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the <code>ApplicationRestoreType</code>.</p>
   */
  SnapshotName?: string;
}

export type _UnmarshalledApplicationRestoreConfiguration = _ApplicationRestoreConfiguration;

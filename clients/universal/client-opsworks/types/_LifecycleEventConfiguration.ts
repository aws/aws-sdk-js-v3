import {
  _ShutdownEventConfiguration,
  _UnmarshalledShutdownEventConfiguration
} from "./_ShutdownEventConfiguration";

/**
 * <p>Specifies the lifecycle event configuration</p>
 */
export interface _LifecycleEventConfiguration {
  /**
   * <p>A <code>ShutdownEventConfiguration</code> object that specifies the Shutdown event configuration.</p>
   */
  Shutdown?: _ShutdownEventConfiguration;
}

export interface _UnmarshalledLifecycleEventConfiguration
  extends _LifecycleEventConfiguration {
  /**
   * <p>A <code>ShutdownEventConfiguration</code> object that specifies the Shutdown event configuration.</p>
   */
  Shutdown?: _UnmarshalledShutdownEventConfiguration;
}

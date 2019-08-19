import { _LogSetup, _UnmarshalledLogSetup } from "./_LogSetup";

/**
 * <p>An object representing the logging configuration for resources in your cluster.</p>
 */
export interface _Logging {
  /**
   * <p>The cluster control plane logging configuration for your cluster.</p>
   */
  clusterLogging?: Array<_LogSetup> | Iterable<_LogSetup>;
}

export interface _UnmarshalledLogging extends _Logging {
  /**
   * <p>The cluster control plane logging configuration for your cluster.</p>
   */
  clusterLogging?: Array<_UnmarshalledLogSetup>;
}

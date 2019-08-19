import { _AccessLog, _UnmarshalledAccessLog } from "./_AccessLog";

/**
 * <p>An object representing the logging information for a virtual node.</p>
 */
export interface _Logging {
  /**
   * <p>The access log configuration for a virtual node.</p>
   */
  accessLog?: _AccessLog;
}

export interface _UnmarshalledLogging extends _Logging {
  /**
   * <p>The access log configuration for a virtual node.</p>
   */
  accessLog?: _UnmarshalledAccessLog;
}

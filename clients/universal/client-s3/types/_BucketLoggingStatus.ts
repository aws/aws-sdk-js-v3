import {
  _LoggingEnabled,
  _UnmarshalledLoggingEnabled
} from "./_LoggingEnabled";

/**
 * <p/>
 */
export interface _BucketLoggingStatus {
  /**
   * <p/>
   */
  LoggingEnabled?: _LoggingEnabled;
}

export interface _UnmarshalledBucketLoggingStatus extends _BucketLoggingStatus {
  /**
   * <p/>
   */
  LoggingEnabled?: _UnmarshalledLoggingEnabled;
}

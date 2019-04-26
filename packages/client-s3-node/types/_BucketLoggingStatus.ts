import {_LoggingEnabled, _UnmarshalledLoggingEnabled} from './_LoggingEnabled';

/**
 * _BucketLoggingStatus shape
 */
export interface _BucketLoggingStatus {
    /**
     * <p>Container for logging information. Presence of this element indicates that logging is enabled. Parameters TargetBucket and TargetPrefix are required in this case.</p>
     */
    LoggingEnabled?: _LoggingEnabled;
}

export interface _UnmarshalledBucketLoggingStatus extends _BucketLoggingStatus {
    /**
     * <p>Container for logging information. Presence of this element indicates that logging is enabled. Parameters TargetBucket and TargetPrefix are required in this case.</p>
     */
    LoggingEnabled?: _UnmarshalledLoggingEnabled;
}
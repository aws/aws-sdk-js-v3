import { _TargetGrant, _UnmarshalledTargetGrant } from "./_TargetGrant";

/**
 * <p>Container for logging information. Presence of this element indicates that logging is enabled. Parameters TargetBucket and TargetPrefix are required in this case.</p>
 */
export interface _LoggingEnabled {
  /**
   * <p>Specifies the bucket where you want Amazon S3 to store server access logs. You can have your logs delivered to any bucket that you own, including the same bucket that is being logged. You can also configure multiple buckets to deliver their logs to the same target bucket. In this case you should choose a different TargetPrefix for each source bucket so that the delivered log files can be distinguished by key.</p>
   */
  TargetBucket: string;

  /**
   * _TargetGrants shape
   */
  TargetGrants?: Array<_TargetGrant> | Iterable<_TargetGrant>;

  /**
   * <p>This element lets you specify a prefix for the keys that the log files will be stored under.</p>
   */
  TargetPrefix: string;
}

export interface _UnmarshalledLoggingEnabled extends _LoggingEnabled {
  /**
   * _TargetGrants shape
   */
  TargetGrants?: Array<_UnmarshalledTargetGrant>;
}

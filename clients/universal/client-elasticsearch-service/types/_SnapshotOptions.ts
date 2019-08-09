/**
 * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
 */
export interface _SnapshotOptions {
  /**
   * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
   */
  AutomatedSnapshotStartHour?: number;
}

export type _UnmarshalledSnapshotOptions = _SnapshotOptions;

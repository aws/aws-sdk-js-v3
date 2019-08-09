import {
  _SnapshotOptions,
  _UnmarshalledSnapshotOptions
} from "./_SnapshotOptions";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>Status of a daily automated snapshot.</p>
 */
export interface _SnapshotOptionsStatus {
  /**
   * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
   */
  Options: _SnapshotOptions;

  /**
   * <p>Specifies the status of a daily automated snapshot.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledSnapshotOptionsStatus
  extends _SnapshotOptionsStatus {
  /**
   * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
   */
  Options: _UnmarshalledSnapshotOptions;

  /**
   * <p>Specifies the status of a daily automated snapshot.</p>
   */
  Status: _UnmarshalledOptionStatus;
}

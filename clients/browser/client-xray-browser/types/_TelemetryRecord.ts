import {
  _BackendConnectionErrors,
  _UnmarshalledBackendConnectionErrors
} from "./_BackendConnectionErrors";

/**
 * <p/>
 */
export interface _TelemetryRecord {
  /**
   * <p/>
   */
  Timestamp: Date | string | number;

  /**
   * <p/>
   */
  SegmentsReceivedCount?: number;

  /**
   * <p/>
   */
  SegmentsSentCount?: number;

  /**
   * <p/>
   */
  SegmentsSpilloverCount?: number;

  /**
   * <p/>
   */
  SegmentsRejectedCount?: number;

  /**
   * <p/>
   */
  BackendConnectionErrors?: _BackendConnectionErrors;
}

export interface _UnmarshalledTelemetryRecord extends _TelemetryRecord {
  /**
   * <p/>
   */
  Timestamp: Date;

  /**
   * <p/>
   */
  BackendConnectionErrors?: _UnmarshalledBackendConnectionErrors;
}

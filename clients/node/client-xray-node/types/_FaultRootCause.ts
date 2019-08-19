import {
  _FaultRootCauseService,
  _UnmarshalledFaultRootCauseService
} from "./_FaultRootCauseService";

/**
 * <p>The root cause information for a trace summary fault.</p>
 */
export interface _FaultRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and it contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: Array<_FaultRootCauseService> | Iterable<_FaultRootCauseService>;
}

export interface _UnmarshalledFaultRootCause extends _FaultRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and it contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: Array<_UnmarshalledFaultRootCauseService>;
}

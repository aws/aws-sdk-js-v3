import {
  _ErrorRootCauseService,
  _UnmarshalledErrorRootCauseService
} from "./_ErrorRootCauseService";

/**
 * <p>The root cause of a trace summary error.</p>
 */
export interface _ErrorRootCause {
  /**
   * <p>A list of services corresponding to an error. A service identifies a segment and it contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: Array<_ErrorRootCauseService> | Iterable<_ErrorRootCauseService>;
}

export interface _UnmarshalledErrorRootCause extends _ErrorRootCause {
  /**
   * <p>A list of services corresponding to an error. A service identifies a segment and it contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: Array<_UnmarshalledErrorRootCauseService>;
}

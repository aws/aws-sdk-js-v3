import {
  _ResponseTimeRootCauseService,
  _UnmarshalledResponseTimeRootCauseService
} from "./_ResponseTimeRootCauseService";

/**
 * <p>The root cause information for a response time warning.</p>
 */
export interface _ResponseTimeRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and inferred flag.</p>
   */
  Services?:
    | Array<_ResponseTimeRootCauseService>
    | Iterable<_ResponseTimeRootCauseService>;
}

export interface _UnmarshalledResponseTimeRootCause
  extends _ResponseTimeRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: Array<_UnmarshalledResponseTimeRootCauseService>;
}

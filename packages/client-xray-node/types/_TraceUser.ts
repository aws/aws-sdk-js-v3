import { _ServiceId, _UnmarshalledServiceId } from "./_ServiceId";

/**
 * <p>Information about a user recorded in segment documents.</p>
 */
export interface _TraceUser {
  /**
   * <p>The user's name.</p>
   */
  UserName?: string;

  /**
   * <p>Services that the user's request hit.</p>
   */
  ServiceIds?: Array<_ServiceId> | Iterable<_ServiceId>;
}

export interface _UnmarshalledTraceUser extends _TraceUser {
  /**
   * <p>Services that the user's request hit.</p>
   */
  ServiceIds?: Array<_UnmarshalledServiceId>;
}

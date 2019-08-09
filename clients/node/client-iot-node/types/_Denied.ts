import { _ImplicitDeny, _UnmarshalledImplicitDeny } from "./_ImplicitDeny";
import { _ExplicitDeny, _UnmarshalledExplicitDeny } from "./_ExplicitDeny";

/**
 * <p>Contains information that denied the authorization.</p>
 */
export interface _Denied {
  /**
   * <p>Information that implicitly denies the authorization. When a policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.</p>
   */
  implicitDeny?: _ImplicitDeny;

  /**
   * <p>Information that explicitly denies the authorization. </p>
   */
  explicitDeny?: _ExplicitDeny;
}

export interface _UnmarshalledDenied extends _Denied {
  /**
   * <p>Information that implicitly denies the authorization. When a policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.</p>
   */
  implicitDeny?: _UnmarshalledImplicitDeny;

  /**
   * <p>Information that explicitly denies the authorization. </p>
   */
  explicitDeny?: _UnmarshalledExplicitDeny;
}

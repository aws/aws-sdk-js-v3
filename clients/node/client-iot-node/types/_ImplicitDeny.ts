import { _Policy, _UnmarshalledPolicy } from "./_Policy";

/**
 * <p>Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.</p>
 */
export interface _ImplicitDeny {
  /**
   * <p>Policies that don't contain a matching allow or deny statement for the specified action on the specified resource. </p>
   */
  policies?: Array<_Policy> | Iterable<_Policy>;
}

export interface _UnmarshalledImplicitDeny extends _ImplicitDeny {
  /**
   * <p>Policies that don't contain a matching allow or deny statement for the specified action on the specified resource. </p>
   */
  policies?: Array<_UnmarshalledPolicy>;
}

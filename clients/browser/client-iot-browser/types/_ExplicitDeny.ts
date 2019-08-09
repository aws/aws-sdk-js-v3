import { _Policy, _UnmarshalledPolicy } from "./_Policy";

/**
 * <p>Information that explicitly denies authorization.</p>
 */
export interface _ExplicitDeny {
  /**
   * <p>The policies that denied the authorization.</p>
   */
  policies?: Array<_Policy> | Iterable<_Policy>;
}

export interface _UnmarshalledExplicitDeny extends _ExplicitDeny {
  /**
   * <p>The policies that denied the authorization.</p>
   */
  policies?: Array<_UnmarshalledPolicy>;
}

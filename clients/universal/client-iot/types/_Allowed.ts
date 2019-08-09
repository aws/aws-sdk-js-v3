import { _Policy, _UnmarshalledPolicy } from "./_Policy";

/**
 * <p>Contains information that allowed the authorization.</p>
 */
export interface _Allowed {
  /**
   * <p>A list of policies that allowed the authentication.</p>
   */
  policies?: Array<_Policy> | Iterable<_Policy>;
}

export interface _UnmarshalledAllowed extends _Allowed {
  /**
   * <p>A list of policies that allowed the authentication.</p>
   */
  policies?: Array<_UnmarshalledPolicy>;
}

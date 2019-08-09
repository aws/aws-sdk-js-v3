import { _AuthInfo, _UnmarshalledAuthInfo } from "./_AuthInfo";
import { _Allowed, _UnmarshalledAllowed } from "./_Allowed";
import { _Denied, _UnmarshalledDenied } from "./_Denied";

/**
 * <p>The authorizer result.</p>
 */
export interface _AuthResult {
  /**
   * <p>Authorization information.</p>
   */
  authInfo?: _AuthInfo;

  /**
   * <p>The policies and statements that allowed the specified action.</p>
   */
  allowed?: _Allowed;

  /**
   * <p>The policies and statements that denied the specified action.</p>
   */
  denied?: _Denied;

  /**
   * <p>The final authorization decision of this scenario. Multiple statements are taken into account when determining the authorization decision. An explicit deny statement can override multiple allow statements.</p>
   */
  authDecision?: "ALLOWED" | "EXPLICIT_DENY" | "IMPLICIT_DENY" | string;

  /**
   * <p>Contains any missing context values found while evaluating policy.</p>
   */
  missingContextValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAuthResult extends _AuthResult {
  /**
   * <p>Authorization information.</p>
   */
  authInfo?: _UnmarshalledAuthInfo;

  /**
   * <p>The policies and statements that allowed the specified action.</p>
   */
  allowed?: _UnmarshalledAllowed;

  /**
   * <p>The policies and statements that denied the specified action.</p>
   */
  denied?: _UnmarshalledDenied;

  /**
   * <p>Contains any missing context values found while evaluating policy.</p>
   */
  missingContextValues?: Array<string>;
}

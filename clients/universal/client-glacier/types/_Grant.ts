import { _Grantee, _UnmarshalledGrantee } from "./_Grantee";

/**
 * <p>Contains information about a grant.</p>
 */
export interface _Grant {
  /**
   * <p>The grantee.</p>
   */
  Grantee?: _Grantee;

  /**
   * <p>Specifies the permission given to the grantee. </p>
   */
  Permission?:
    | "FULL_CONTROL"
    | "WRITE"
    | "WRITE_ACP"
    | "READ"
    | "READ_ACP"
    | string;
}

export interface _UnmarshalledGrant extends _Grant {
  /**
   * <p>The grantee.</p>
   */
  Grantee?: _UnmarshalledGrantee;
}

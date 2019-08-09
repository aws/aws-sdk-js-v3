import { _Grantee, _UnmarshalledGrantee } from "./_Grantee";

/**
 * <p/>
 */
export interface _TargetGrant {
  /**
   * <p/>
   */
  Grantee?: _Grantee;

  /**
   * <p>Logging permissions assigned to the Grantee for the bucket.</p>
   */
  Permission?: "FULL_CONTROL" | "READ" | "WRITE" | string;
}

export interface _UnmarshalledTargetGrant extends _TargetGrant {
  /**
   * <p/>
   */
  Grantee?: _UnmarshalledGrantee;
}

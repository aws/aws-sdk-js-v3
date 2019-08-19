import { _Grant, _UnmarshalledGrant } from "./_Grant";
import { _Owner, _UnmarshalledOwner } from "./_Owner";

/**
 * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
 */
export interface _AccessControlPolicy {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Array<_Grant> | Iterable<_Grant>;

  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: _Owner;
}

export interface _UnmarshalledAccessControlPolicy extends _AccessControlPolicy {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Array<_UnmarshalledGrant>;

  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: _UnmarshalledOwner;
}

import { _Grant, _UnmarshalledGrant } from "./_Grant";
import { _Owner, _UnmarshalledOwner } from "./_Owner";

/**
 * _AccessControlPolicy shape
 */
export interface _AccessControlPolicy {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Array<_Grant> | Iterable<_Grant>;

  /**
   * _Owner shape
   */
  Owner?: _Owner;
}

export interface _UnmarshalledAccessControlPolicy extends _AccessControlPolicy {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Array<_UnmarshalledGrant>;

  /**
   * _Owner shape
   */
  Owner?: _UnmarshalledOwner;
}

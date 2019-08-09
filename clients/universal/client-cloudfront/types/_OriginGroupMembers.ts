import {
  _OriginGroupMember,
  _UnmarshalledOriginGroupMember
} from "./_OriginGroupMember";

/**
 * <p>A complex data type for the origins included in an origin group.</p>
 */
export interface _OriginGroupMembers {
  /**
   * <p>The number of origins in an origin group.</p>
   */
  Quantity: number;

  /**
   * <p>Items (origins) in an origin group.</p>
   */
  Items: Array<_OriginGroupMember> | Iterable<_OriginGroupMember>;
}

export interface _UnmarshalledOriginGroupMembers extends _OriginGroupMembers {
  /**
   * <p>Items (origins) in an origin group.</p>
   */
  Items: Array<_UnmarshalledOriginGroupMember>;
}

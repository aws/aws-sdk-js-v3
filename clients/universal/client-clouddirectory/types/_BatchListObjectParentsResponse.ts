import {
  _ObjectIdentifierAndLinkNameTuple,
  _UnmarshalledObjectIdentifierAndLinkNameTuple
} from "./_ObjectIdentifierAndLinkNameTuple";

/**
 * _BatchListObjectParentsResponse shape
 */
export interface _BatchListObjectParentsResponse {
  /**
   * _ObjectIdentifierAndLinkNameList shape
   */
  ParentLinks?:
    | Array<_ObjectIdentifierAndLinkNameTuple>
    | Iterable<_ObjectIdentifierAndLinkNameTuple>;

  /**
   * _NextToken shape
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListObjectParentsResponse
  extends _BatchListObjectParentsResponse {
  /**
   * _ObjectIdentifierAndLinkNameList shape
   */
  ParentLinks?: Array<_UnmarshalledObjectIdentifierAndLinkNameTuple>;
}

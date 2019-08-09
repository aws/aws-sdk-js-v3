/**
 * <p>An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is <code>APPROVED</code>. The member and all associated resources are deleted from the network.</p>
 */
export interface _RemoveAction {
  /**
   * <p>The unique identifier of the member to remove.</p>
   */
  MemberId: string;
}

export type _UnmarshalledRemoveAction = _RemoveAction;

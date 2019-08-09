import {
  _NodeGroupMemberUpdateStatus,
  _UnmarshalledNodeGroupMemberUpdateStatus
} from "./_NodeGroupMemberUpdateStatus";

/**
 * <p>The status of the service update on the node group </p>
 */
export interface _NodeGroupUpdateStatus {
  /**
   * <p>The ID of the node group</p>
   */
  NodeGroupId?: string;

  /**
   * <p>The status of the service update on the node group member</p>
   */
  NodeGroupMemberUpdateStatus?:
    | Array<_NodeGroupMemberUpdateStatus>
    | Iterable<_NodeGroupMemberUpdateStatus>;
}

export interface _UnmarshalledNodeGroupUpdateStatus
  extends _NodeGroupUpdateStatus {
  /**
   * <p>The status of the service update on the node group member</p>
   */
  NodeGroupMemberUpdateStatus?: Array<_UnmarshalledNodeGroupMemberUpdateStatus>;
}

import { _Server, _UnmarshalledServer } from "./_Server";

/**
 * <p>A logical grouping of servers.</p>
 */
export interface _ServerGroup {
  /**
   * <p>Identifier of a server group.</p>
   */
  serverGroupId?: string;

  /**
   * <p>Name of a server group.</p>
   */
  name?: string;

  /**
   * <p>List of servers belonging to a server group.</p>
   */
  serverList?: Array<_Server> | Iterable<_Server>;
}

export interface _UnmarshalledServerGroup extends _ServerGroup {
  /**
   * <p>List of servers belonging to a server group.</p>
   */
  serverList?: Array<_UnmarshalledServer>;
}

import { _Table, _UnmarshalledTable } from "./_Table";

/**
 * <p>Specifies a version of a table.</p>
 */
export interface _TableVersion {
  /**
   * <p>The table in question</p>
   */
  Table?: _Table;

  /**
   * <p>The ID value that identifies this table version. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;
}

export interface _UnmarshalledTableVersion extends _TableVersion {
  /**
   * <p>The table in question</p>
   */
  Table?: _UnmarshalledTable;
}

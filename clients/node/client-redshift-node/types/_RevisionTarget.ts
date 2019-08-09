/**
 * <p>Describes a <code>RevisionTarget</code>.</p>
 */
export interface _RevisionTarget {
  /**
   * <p>A unique string that identifies the version to update the cluster to. You can use this value in <a>ModifyClusterDbRevision</a>.</p>
   */
  DatabaseRevision?: string;

  /**
   * <p>A string that describes the changes and features that will be applied to the cluster when it is updated to the corresponding <a>ClusterDbRevision</a>.</p>
   */
  Description?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date | string | number;
}

export interface _UnmarshalledRevisionTarget extends _RevisionTarget {
  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;
}

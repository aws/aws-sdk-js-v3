import {
  _RevisionTarget,
  _UnmarshalledRevisionTarget
} from "./_RevisionTarget";

/**
 * <p>Describes a <code>ClusterDbRevision</code>.</p>
 */
export interface _ClusterDbRevision {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A string representing the current cluster version.</p>
   */
  CurrentDatabaseRevision?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date | string | number;

  /**
   * <p>A list of <code>RevisionTarget</code> objects, where each object describes the database revision that a cluster can be updated to.</p>
   */
  RevisionTargets?: Array<_RevisionTarget> | Iterable<_RevisionTarget>;
}

export interface _UnmarshalledClusterDbRevision extends _ClusterDbRevision {
  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;

  /**
   * <p>A list of <code>RevisionTarget</code> objects, where each object describes the database revision that a cluster can be updated to.</p>
   */
  RevisionTargets?: Array<_UnmarshalledRevisionTarget>;
}

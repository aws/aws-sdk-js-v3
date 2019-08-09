/**
 * <p>An object that contains the ID and revision number of a workflow or system that is part of a deployment.</p>
 */
export interface _DependencyRevision {
  /**
   * <p>The ID of the workflow or system.</p>
   */
  id?: string;

  /**
   * <p>The revision number of the workflow or system.</p>
   */
  revisionNumber?: number;
}

export type _UnmarshalledDependencyRevision = _DependencyRevision;

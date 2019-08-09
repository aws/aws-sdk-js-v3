/**
 * <p>Represents information about a current revision.</p>
 */
export interface _CurrentRevision {
  /**
   * <p>The revision ID of the current version of an artifact.</p>
   */
  revision: string;

  /**
   * <p>The change identifier for the current revision.</p>
   */
  changeIdentifier: string;

  /**
   * <p>The date and time when the most recent revision of the artifact was created, in timestamp format.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The summary of the most recent revision of the artifact.</p>
   */
  revisionSummary?: string;
}

export interface _UnmarshalledCurrentRevision extends _CurrentRevision {
  /**
   * <p>The date and time when the most recent revision of the artifact was created, in timestamp format.</p>
   */
  created?: Date;
}

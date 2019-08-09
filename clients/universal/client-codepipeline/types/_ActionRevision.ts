/**
 * <p>Represents information about the version (or revision) of an action.</p>
 */
export interface _ActionRevision {
  /**
   * <p>The system-generated unique ID that identifies the revision number of the action.</p>
   */
  revisionId: string;

  /**
   * <p>The unique identifier of the change that set the state to this revision, for example a deployment ID or timestamp.</p>
   */
  revisionChangeId: string;

  /**
   * <p>The date and time when the most recent version of the action was created, in timestamp format.</p>
   */
  created: Date | string | number;
}

export interface _UnmarshalledActionRevision extends _ActionRevision {
  /**
   * <p>The date and time when the most recent version of the action was created, in timestamp format.</p>
   */
  created: Date;
}

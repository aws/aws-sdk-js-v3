/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface _Note {
  /**
   * <p>The text of a note.</p>
   */
  Text: string;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string;

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  UpdatedAt: string;
}

export type _UnmarshalledNote = _Note;

/**
 * <p>The updated note.</p>
 */
export interface _NoteUpdate {
  /**
   * <p>The updated note text.</p>
   */
  Text: string;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string;
}

export type _UnmarshalledNoteUpdate = _NoteUpdate;

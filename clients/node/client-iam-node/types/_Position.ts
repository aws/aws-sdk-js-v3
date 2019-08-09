/**
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
 */
export interface _Position {
  /**
   * <p>The line containing the specified position in the document.</p>
   */
  Line?: number;

  /**
   * <p>The column in the line containing the specified position in the document.</p>
   */
  Column?: number;
}

export type _UnmarshalledPosition = _Position;

/**
 * <p>A column in a <code>Table</code>.</p>
 */
export interface _Column {
  /**
   * <p>The name of the <code>Column</code>.</p>
   */
  Name: string;

  /**
   * <p>The datatype of data in the <code>Column</code>.</p>
   */
  Type?: string;

  /**
   * <p>Free-form text comment.</p>
   */
  Comment?: string;
}

export type _UnmarshalledColumn = _Column;

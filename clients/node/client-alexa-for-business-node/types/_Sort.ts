/**
 * <p>An object representing a sort criteria. </p>
 */
export interface _Sort {
  /**
   * <p>The sort key of a sort object.</p>
   */
  Key: string;

  /**
   * <p>The sort value of a sort object.</p>
   */
  Value: "ASC" | "DESC" | string;
}

export type _UnmarshalledSort = _Sort;

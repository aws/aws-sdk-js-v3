/**
 * <p>A field and direction for ordered output.</p>
 */
export interface _OrderByElement {
  /**
   * <p>The field on which to order.</p>
   */
  fieldName: string;

  /**
   * <p>Ordering direction.</p>
   */
  sortOrder?: "ASC" | "DESC" | string;
}

export type _UnmarshalledOrderByElement = _OrderByElement;

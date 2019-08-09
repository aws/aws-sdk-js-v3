/**
 * <p>Information about an on-premises instance tag filter.</p>
 */
export interface _TagFilter {
  /**
   * <p>The on-premises instance tag filter key.</p>
   */
  Key?: string;

  /**
   * <p>The on-premises instance tag filter value.</p>
   */
  Value?: string;

  /**
   * <p>The on-premises instance tag filter type:</p> <ul> <li> <p>KEY_ONLY: Key only.</p> </li> <li> <p>VALUE_ONLY: Value only.</p> </li> <li> <p>KEY_AND_VALUE: Key and value.</p> </li> </ul>
   */
  Type?: "KEY_ONLY" | "VALUE_ONLY" | "KEY_AND_VALUE" | string;
}

export type _UnmarshalledTagFilter = _TagFilter;

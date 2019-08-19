/**
 * <p>Information about an EC2 tag filter.</p>
 */
export interface _EC2TagFilter {
  /**
   * <p>The tag filter key.</p>
   */
  Key?: string;

  /**
   * <p>The tag filter value.</p>
   */
  Value?: string;

  /**
   * <p>The tag filter type:</p> <ul> <li> <p>KEY_ONLY: Key only.</p> </li> <li> <p>VALUE_ONLY: Value only.</p> </li> <li> <p>KEY_AND_VALUE: Key and value.</p> </li> </ul>
   */
  Type?: "KEY_ONLY" | "VALUE_ONLY" | "KEY_AND_VALUE" | string;
}

export type _UnmarshalledEC2TagFilter = _EC2TagFilter;

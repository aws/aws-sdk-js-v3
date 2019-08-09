/**
 * <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>
 */
export interface _EnumerationValue {
  /**
   * <p>The value of the slot type.</p>
   */
  value: string;

  /**
   * <p>Additional values related to the slot type value.</p>
   */
  synonyms?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEnumerationValue extends _EnumerationValue {
  /**
   * <p>Additional values related to the slot type value.</p>
   */
  synonyms?: Array<string>;
}

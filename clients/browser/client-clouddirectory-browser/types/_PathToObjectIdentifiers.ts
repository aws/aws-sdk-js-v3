/**
 * <p>Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.</p>
 */
export interface _PathToObjectIdentifiers {
  /**
   * <p>The path that is used to identify the object starting from directory root.</p>
   */
  Path?: string;

  /**
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the request.</p>
   */
  ObjectIdentifiers?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPathToObjectIdentifiers
  extends _PathToObjectIdentifiers {
  /**
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the request.</p>
   */
  ObjectIdentifiers?: Array<string>;
}

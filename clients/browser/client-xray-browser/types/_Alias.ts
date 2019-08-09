/**
 * <p>An alias for an edge.</p>
 */
export interface _Alias {
  /**
   * <p>The canonical name of the alias.</p>
   */
  Name?: string;

  /**
   * <p>A list of names for the alias, including the canonical name.</p>
   */
  Names?: Array<string> | Iterable<string>;

  /**
   * <p>The type of the alias.</p>
   */
  Type?: string;
}

export interface _UnmarshalledAlias extends _Alias {
  /**
   * <p>A list of names for the alias, including the canonical name.</p>
   */
  Names?: Array<string>;
}

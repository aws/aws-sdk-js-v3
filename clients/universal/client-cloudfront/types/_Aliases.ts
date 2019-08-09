/**
 * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. </p>
 */
export interface _Aliases {
  /**
   * <p>The number of CNAME aliases, if any, that you want to associate with this distribution.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains the CNAME aliases, if any, that you want to associate with this distribution.</p>
   */
  Items?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAliases extends _Aliases {
  /**
   * <p>A complex type that contains the CNAME aliases, if any, that you want to associate with this distribution.</p>
   */
  Items?: Array<string>;
}

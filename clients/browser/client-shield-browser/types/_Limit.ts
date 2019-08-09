/**
 * <p>Specifies how many protections of a given type you can create.</p>
 */
export interface _Limit {
  /**
   * <p>The type of protection.</p>
   */
  Type?: string;

  /**
   * <p>The maximum number of protections that can be created for the specified <code>Type</code>.</p>
   */
  Max?: number;
}

export type _UnmarshalledLimit = _Limit;

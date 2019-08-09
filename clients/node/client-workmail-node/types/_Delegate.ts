/**
 * <p>The name of the attribute, which is one of the values defined in the UserAttribute enumeration.</p>
 */
export interface _Delegate {
  /**
   * <p>The identifier for the user or group associated as the resource's delegate.</p>
   */
  Id: string;

  /**
   * <p>The type of the delegate: user or group.</p>
   */
  Type: "GROUP" | "USER" | string;
}

export type _UnmarshalledDelegate = _Delegate;

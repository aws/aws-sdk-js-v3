/**
 * <p>An object that defines the value of the key and its type in the OperationalData map.</p>
 */
export interface _OpsItemDataValue {
  /**
   * <p>The value of the OperationalData key.</p>
   */
  Value?: string;

  /**
   * <p>The type of key-value pair. Valid types include <code>SearchableString</code> and <code>String</code>.</p>
   */
  Type?: "SearchableString" | "String" | string;
}

export type _UnmarshalledOpsItemDataValue = _OpsItemDataValue;

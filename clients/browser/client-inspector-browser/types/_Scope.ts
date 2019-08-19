/**
 * <p>This data type contains key-value pairs that identify various Amazon resources.</p>
 */
export interface _Scope {
  /**
   * <p>The type of the scope.</p>
   */
  key?: "INSTANCE_ID" | "RULES_PACKAGE_ARN" | string;

  /**
   * <p>The resource identifier for the specified scope type.</p>
   */
  value?: string;
}

export type _UnmarshalledScope = _Scope;

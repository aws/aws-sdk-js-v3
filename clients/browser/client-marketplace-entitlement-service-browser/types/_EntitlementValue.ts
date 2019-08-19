/**
 * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.</p>
 */
export interface _EntitlementValue {
  /**
   * <p>The IntegerValue field will be populated with an integer value when the entitlement is an integer type. Otherwise, the field will not be set.</p>
   */
  IntegerValue?: number;

  /**
   * <p>The DoubleValue field will be populated with a double value when the entitlement is a double type. Otherwise, the field will not be set.</p>
   */
  DoubleValue?: number;

  /**
   * <p>The BooleanValue field will be populated with a boolean value when the entitlement is a boolean type. Otherwise, the field will not be set.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>The StringValue field will be populated with a string value when the entitlement is a string type. Otherwise, the field will not be set.</p>
   */
  StringValue?: string;
}

export type _UnmarshalledEntitlementValue = _EntitlementValue;

/**
 * <p>The user pool add-ons type.</p>
 */
export interface _UserPoolAddOnsType {
  /**
   * <p>The advanced security mode.</p>
   */
  AdvancedSecurityMode: "OFF" | "AUDIT" | "ENFORCED" | string;
}

export type _UnmarshalledUserPoolAddOnsType = _UserPoolAddOnsType;

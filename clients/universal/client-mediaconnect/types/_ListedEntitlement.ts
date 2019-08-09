/**
 * An entitlement that has been granted to you from other AWS accounts.
 */
export interface _ListedEntitlement {
  /**
   * The ARN of the entitlement.
   */
  EntitlementArn: string;

  /**
   * The name of the entitlement.
   */
  EntitlementName: string;
}

export type _UnmarshalledListedEntitlement = _ListedEntitlement;

/**
 * <p>Details about the security service that is being used to protect the resources.</p>
 */
export interface _SecurityServicePolicyData {
  /**
   * <p>The service that the policy is using to protect the resources. This specifies the type of policy that is created, either a WAF policy or Shield Advanced policy.</p>
   */
  Type: "WAF" | "SHIELD_ADVANCED" | string;

  /**
   * <p>Details about the service. This contains <code>WAF</code> data in JSON format, as shown in the following example:</p> <p> <code>ManagedServiceData": "{\"type\": \"WAF\", \"ruleGroups\": [{\"id\": \"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}</code> </p> <p>If this is a Shield Advanced policy, this string will be empty.</p>
   */
  ManagedServiceData?: string;
}

export type _UnmarshalledSecurityServicePolicyData = _SecurityServicePolicyData;

/**
 * <p>Summary information about a plan.</p>
 */
export interface _ProvisionedProductPlanSummary {
  /**
   * <p>The name of the plan.</p>
   */
  PlanName?: string;

  /**
   * <p>The plan identifier.</p>
   */
  PlanId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProvisionProductId?: string;

  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  ProvisionProductName?: string;

  /**
   * <p>The plan type.</p>
   */
  PlanType?: "CLOUDFORMATION" | string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;
}

export type _UnmarshalledProvisionedProductPlanSummary = _ProvisionedProductPlanSummary;

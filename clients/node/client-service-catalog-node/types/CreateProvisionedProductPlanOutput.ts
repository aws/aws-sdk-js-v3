import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProvisionedProductPlanOutput shape
 */
export interface CreateProvisionedProductPlanOutput
  extends __aws_sdk_types.MetadataBearer {
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
  ProvisionedProductName?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

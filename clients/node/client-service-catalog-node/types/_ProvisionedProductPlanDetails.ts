import {
  _UpdateProvisioningParameter,
  _UnmarshalledUpdateProvisioningParameter
} from "./_UpdateProvisioningParameter";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about a plan.</p>
 */
export interface _ProvisionedProductPlanDetails {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   */
  PathId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

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

  /**
   * <p>The status.</p>
   */
  Status?:
    | "CREATE_IN_PROGRESS"
    | "CREATE_SUCCESS"
    | "CREATE_FAILED"
    | "EXECUTE_IN_PROGRESS"
    | "EXECUTE_SUCCESS"
    | "EXECUTE_FAILED"
    | string;

  /**
   * <p>The time when the plan was last updated.</p>
   */
  UpdatedTime?: Date | string | number;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.</p>
   */
  NotificationArns?: Array<string> | Iterable<string>;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the product.</p>
   */
  ProvisioningParameters?:
    | Array<_UpdateProvisioningParameter>
    | Iterable<_UpdateProvisioningParameter>;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;
}

export interface _UnmarshalledProvisionedProductPlanDetails
  extends _ProvisionedProductPlanDetails {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time when the plan was last updated.</p>
   */
  UpdatedTime?: Date;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.</p>
   */
  NotificationArns?: Array<string>;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the product.</p>
   */
  ProvisioningParameters?: Array<_UnmarshalledUpdateProvisioningParameter>;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}

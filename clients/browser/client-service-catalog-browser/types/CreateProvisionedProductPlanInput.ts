import { _UpdateProvisioningParameter } from "./_UpdateProvisioningParameter";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProvisionedProductPlanInput shape
 */
export interface CreateProvisionedProductPlanInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The name of the plan.</p>
   */
  PlanName: string;

  /**
   * <p>The plan type.</p>
   */
  PlanType: "CLOUDFORMATION" | string;

  /**
   * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.</p>
   */
  NotificationArns?: Array<string> | Iterable<string>;

  /**
   * <p>The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
   */
  PathId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId: string;

  /**
   * <p>A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.</p>
   */
  ProvisionedProductName: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId: string;

  /**
   * <p>Parameters specified by the administrator that are required for provisioning the product.</p>
   */
  ProvisioningParameters?:
    | Array<_UpdateProvisioningParameter>
    | Iterable<_UpdateProvisioningParameter>;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>
   */
  IdempotencyToken: string;

  /**
   * <p>One or more tags.</p> <p>If the plan is for an existing provisioned product, the product must have a <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

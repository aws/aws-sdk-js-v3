/**
 * <p>Information about a provisioned product.</p>
 */
export interface _ProvisionedProductDetail {
  /**
   * <p>The user-friendly name of the provisioned product.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the provisioned product.</p>
   */
  Arn?: string;

  /**
   * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
   */
  Type?: string;

  /**
   * <p>The identifier of the provisioned product.</p>
   */
  Id?: string;

  /**
   * <p>The current status of the provisioned product.</p> <ul> <li> <p> <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p> </li> <li> <p> <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> <li> <p> <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p> </li> <li> <p> <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p> </li> <li> <p> <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p> </li> </ul>
   */
  Status?:
    | "AVAILABLE"
    | "UNDER_CHANGE"
    | "TAINTED"
    | "ERROR"
    | "PLAN_IN_PROGRESS"
    | string;

  /**
   * <p>The current status message of the provisioned product.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The record identifier of the last request performed on this provisioned product.</p>
   */
  LastRecordId?: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId?: string;
}

export interface _UnmarshalledProvisionedProductDetail
  extends _ProvisionedProductDetail {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;
}

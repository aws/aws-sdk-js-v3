import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about a provisioned product.</p>
 */
export interface _ProvisionedProductAttribute {
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
   * <p>One or more tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.</p>
   */
  PhysicalId?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM user.</p>
   */
  UserArn?: string;

  /**
   * <p>The ARN of the IAM user in the session. This ARN might contain a session ID.</p>
   */
  UserArnSession?: string;
}

export interface _UnmarshalledProvisionedProductAttribute
  extends _ProvisionedProductAttribute {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}

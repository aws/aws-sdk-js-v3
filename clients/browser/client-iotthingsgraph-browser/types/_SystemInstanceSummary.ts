/**
 * <p>An object that contains summary information about a system instance.</p>
 */
export interface _SystemInstanceSummary {
  /**
   * <p>The ID of the system instance.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the system instance.</p>
   */
  arn?: string;

  /**
   * <p>The status of the system instance.</p>
   */
  status?:
    | "NOT_DEPLOYED"
    | "BOOTSTRAP"
    | "DEPLOY_IN_PROGRESS"
    | "DEPLOYED_IN_TARGET"
    | "UNDEPLOY_IN_PROGRESS"
    | "FAILED"
    | "PENDING_DELETE"
    | "DELETED_IN_TARGET"
    | string;

  /**
   * <p>The target of the system instance.</p>
   */
  target?: "GREENGRASS" | "CLOUD" | string;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupName?: string;

  /**
   * <p>The date when the system instance was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p> The date and time when the system instance was last updated.</p>
   */
  updatedAt?: Date | string | number;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The version of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupVersionId?: string;
}

export interface _UnmarshalledSystemInstanceSummary
  extends _SystemInstanceSummary {
  /**
   * <p>The date when the system instance was created.</p>
   */
  createdAt?: Date;

  /**
   * <p> The date and time when the system instance was last updated.</p>
   */
  updatedAt?: Date;
}

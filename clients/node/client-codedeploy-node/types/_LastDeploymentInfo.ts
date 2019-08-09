/**
 * <p>Information about the most recent attempted or successful deployment to a deployment group.</p>
 */
export interface _LastDeploymentInfo {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p>The status of the most recent deployment.</p>
   */
  status?:
    | "Created"
    | "Queued"
    | "InProgress"
    | "Succeeded"
    | "Failed"
    | "Stopped"
    | "Ready"
    | string;

  /**
   * <p>A timestamp that indicates when the most recent deployment to the deployment group was complete.</p>
   */
  endTime?: Date | string | number;

  /**
   * <p>A timestamp that indicates when the most recent deployment to the deployment group started.</p>
   */
  createTime?: Date | string | number;
}

export interface _UnmarshalledLastDeploymentInfo extends _LastDeploymentInfo {
  /**
   * <p>A timestamp that indicates when the most recent deployment to the deployment group was complete.</p>
   */
  endTime?: Date;

  /**
   * <p>A timestamp that indicates when the most recent deployment to the deployment group started.</p>
   */
  createTime?: Date;
}

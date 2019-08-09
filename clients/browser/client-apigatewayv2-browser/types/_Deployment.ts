/**
 * <p>An immutable representation of an API that can be called by users. A
 *  Deployment must be associated with a Stage for it to be
 *  callable over the internet.</p>
 */
export interface _Deployment {
  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date | string | number;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or
   *  SUCCEEDED.</p>
   */
  DeploymentStatus?: "PENDING" | "FAILED" | "DEPLOYED" | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;
}

export interface _UnmarshalledDeployment extends _Deployment {
  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;
}

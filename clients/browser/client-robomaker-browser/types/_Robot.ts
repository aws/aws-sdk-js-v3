/**
 * <p>Information about a robot.</p>
 */
export interface _Robot {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The status of the robot.</p>
   */
  status?:
    | "Available"
    | "Registered"
    | "PendingNewDeployment"
    | "Deploying"
    | "Failed"
    | "InSync"
    | "NoResponse"
    | string;

  /**
   * <p>The Greengrass group associated with the robot.</p>
   */
  greenGrassGroupId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The architecture of the robot.</p>
   */
  architecture?: "X86_64" | "ARM64" | "ARMHF" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date | string | number;
}

export interface _UnmarshalledRobot extends _Robot {
  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;
}

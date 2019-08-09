/**
 * <p>Information about a fleet.</p>
 */
export interface _Fleet {
  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The status of the last fleet deployment.</p>
   */
  lastDeploymentStatus?:
    | "Pending"
    | "Preparing"
    | "InProgress"
    | "Failed"
    | "Succeeded"
    | "Canceled"
    | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date | string | number;
}

export interface _UnmarshalledFleet extends _Fleet {
  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;
}

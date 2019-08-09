/**
 * <p>Describes the instance status.</p>
 */
export interface _InstanceStatusDetails {
  /**
   * <p>The time when a status check failed. For an instance that was launched and impaired, this is the time when the instance was launched.</p>
   */
  ImpairedSince?: Date | string | number;

  /**
   * <p>The type of instance status.</p>
   */
  Name?: "reachability" | string;

  /**
   * <p>The status.</p>
   */
  Status?: "passed" | "failed" | "insufficient-data" | "initializing" | string;
}

export interface _UnmarshalledInstanceStatusDetails
  extends _InstanceStatusDetails {
  /**
   * <p>The time when a status check failed. For an instance that was launched and impaired, this is the time when the instance was launched.</p>
   */
  ImpairedSince?: Date;
}

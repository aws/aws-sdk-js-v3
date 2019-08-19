/**
 * <p>Describes a running instance in a Spot Fleet.</p>
 */
export interface _ActiveInstance {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The health status of the instance. If the status of either the instance status check or the system status check is <code>impaired</code>, the health status of the instance is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
   */
  InstanceHealth?: "healthy" | "unhealthy" | string;
}

export type _UnmarshalledActiveInstance = _ActiveInstance;

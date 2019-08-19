/**
 * <p> Utilization metrics of the instance. </p>
 */
export interface _EC2ResourceUtilization {
  /**
   * <p> Maximum observed or expected CPU utilization of the instance.</p>
   */
  MaxCpuUtilizationPercentage?: string;

  /**
   * <p> Maximum observed or expected memory utilization of the instance.</p>
   */
  MaxMemoryUtilizationPercentage?: string;

  /**
   * <p> Maximum observed or expected storage utilization of the instance (does not measure EBS storage).</p>
   */
  MaxStorageUtilizationPercentage?: string;
}

export type _UnmarshalledEC2ResourceUtilization = _EC2ResourceUtilization;

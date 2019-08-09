import {
  _EC2ResourceUtilization,
  _UnmarshalledEC2ResourceUtilization
} from "./_EC2ResourceUtilization";

/**
 * <p>Resource utilization of current resource. </p>
 */
export interface _ResourceUtilization {
  /**
   * <p>Utilization of current Amazon EC2 Instance </p>
   */
  EC2ResourceUtilization?: _EC2ResourceUtilization;
}

export interface _UnmarshalledResourceUtilization extends _ResourceUtilization {
  /**
   * <p>Utilization of current Amazon EC2 Instance </p>
   */
  EC2ResourceUtilization?: _UnmarshalledEC2ResourceUtilization;
}

/**
 * <p>Describes the status of a moving Elastic IP address.</p>
 */
export interface _MovingAddressStatus {
  /**
   * <p>The status of the Elastic IP address that's being moved to the EC2-VPC platform, or restored to the EC2-Classic platform.</p>
   */
  MoveStatus?: "movingToVpc" | "restoringToClassic" | string;

  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;
}

export type _UnmarshalledMovingAddressStatus = _MovingAddressStatus;

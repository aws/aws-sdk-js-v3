/**
 * <p>Details about the Amazon EC2 instances that AWS recommends that you purchase.</p>
 */
export interface _EC2InstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of instance that AWS recommends.</p>
   */
  InstanceType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>The Availability Zone of the recommended reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * <p>Whether the recommended reservation is dedicated or shared.</p>
   */
  Tenancy?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export type _UnmarshalledEC2InstanceDetails = _EC2InstanceDetails;

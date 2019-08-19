/**
 * <p>Contains information about the domain controllers for a specified directory.</p>
 */
export interface _DomainController {
  /**
   * <p>Identifier of the directory where the domain controller resides.</p>
   */
  DirectoryId?: string;

  /**
   * <p>Identifies a specific domain controller in the directory.</p>
   */
  DomainControllerId?: string;

  /**
   * <p>The IP address of the domain controller.</p>
   */
  DnsIpAddr?: string;

  /**
   * <p>The identifier of the VPC that contains the domain controller.</p>
   */
  VpcId?: string;

  /**
   * <p>Identifier of the subnet in the VPC that contains the domain controller.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone where the domain controller is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The status of the domain controller.</p>
   */
  Status?:
    | "Creating"
    | "Active"
    | "Impaired"
    | "Restoring"
    | "Deleting"
    | "Deleted"
    | "Failed"
    | string;

  /**
   * <p>A description of the domain controller state.</p>
   */
  StatusReason?: string;

  /**
   * <p>Specifies when the domain controller was created.</p>
   */
  LaunchTime?: Date | string | number;

  /**
   * <p>The date and time that the status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledDomainController extends _DomainController {
  /**
   * <p>Specifies when the domain controller was created.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The date and time that the status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date;
}

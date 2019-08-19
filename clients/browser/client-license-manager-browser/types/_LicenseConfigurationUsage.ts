/**
 * <p>Contains details of the usage of each resource from the license pool.</p>
 */
export interface _LicenseConfigurationUsage {
  /**
   * <p>ARN of the resource associated with a license configuration.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Type of resource associated with athe license configuration.</p>
   */
  ResourceType?: "EC2_INSTANCE" | "EC2_HOST" | "EC2_AMI" | string;

  /**
   * <p>Status of a resource associated with the license configuration.</p>
   */
  ResourceStatus?: string;

  /**
   * <p>ID of the account that owns a resource that is associated with the license configuration.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Time when the license configuration was initially associated with a resource.</p>
   */
  AssociationTime?: Date | string | number;

  /**
   * <p>Number of licenses consumed out of the total provisioned in the license configuration.</p>
   */
  ConsumedLicenses?: number;
}

export interface _UnmarshalledLicenseConfigurationUsage
  extends _LicenseConfigurationUsage {
  /**
   * <p>Time when the license configuration was initially associated with a resource.</p>
   */
  AssociationTime?: Date;
}

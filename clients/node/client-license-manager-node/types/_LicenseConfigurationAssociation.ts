/**
 * <p>Describes a server resource that is associated with a license configuration.</p>
 */
export interface _LicenseConfigurationAssociation {
  /**
   * <p>ARN of the resource associated with the license configuration.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Type of server resource.</p>
   */
  ResourceType?: "EC2_INSTANCE" | "EC2_HOST" | "EC2_AMI" | string;

  /**
   * <p>ID of the AWS account that owns the resource consuming licenses.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Time when the license configuration was associated with the resource.</p>
   */
  AssociationTime?: Date | string | number;
}

export interface _UnmarshalledLicenseConfigurationAssociation
  extends _LicenseConfigurationAssociation {
  /**
   * <p>Time when the license configuration was associated with the resource.</p>
   */
  AssociationTime?: Date;
}

/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface _ProvisioningArtifactDetail {
  /**
   * <p>The identifier of the provisioning artifact.</p>
   */
  Id?: string;

  /**
   * <p>The name of the provisioning artifact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the provisioning artifact.</p>
   */
  Description?: string;

  /**
   * <p>The type of provisioning artifact.</p> <ul> <li> <p> <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p> </li> <li> <p> <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p> </li> <li> <p> <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p> </li> </ul>
   */
  Type?:
    | "CLOUD_FORMATION_TEMPLATE"
    | "MARKETPLACE_AMI"
    | "MARKETPLACE_CAR"
    | string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>Indicates whether the product version is active.</p>
   */
  Active?: boolean;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   */
  Guidance?: "DEFAULT" | "DEPRECATED" | string;
}

export interface _UnmarshalledProvisioningArtifactDetail
  extends _ProvisioningArtifactDetail {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;
}

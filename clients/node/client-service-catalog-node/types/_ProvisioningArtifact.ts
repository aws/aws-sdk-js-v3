/**
 * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
 */
export interface _ProvisioningArtifact {
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
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
   */
  Guidance?: "DEFAULT" | "DEPRECATED" | string;
}

export interface _UnmarshalledProvisioningArtifact
  extends _ProvisioningArtifact {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;
}

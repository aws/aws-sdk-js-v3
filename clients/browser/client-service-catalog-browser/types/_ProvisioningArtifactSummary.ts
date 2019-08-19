/**
 * <p>Summary information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface _ProvisioningArtifactSummary {
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
   * <p>The metadata for the provisioning artifact. This is used with AWS Marketplace products.</p>
   */
  ProvisioningArtifactMetadata?:
    | { [key: string]: string }
    | Iterable<[string, string]>;
}

export interface _UnmarshalledProvisioningArtifactSummary
  extends _ProvisioningArtifactSummary {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The metadata for the provisioning artifact. This is used with AWS Marketplace products.</p>
   */
  ProvisioningArtifactMetadata?: { [key: string]: string };
}

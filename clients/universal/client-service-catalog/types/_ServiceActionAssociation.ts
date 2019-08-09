/**
 * <p>A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
 */
export interface _ServiceActionAssociation {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId: string;
}

export type _UnmarshalledServiceActionAssociation = _ServiceActionAssociation;

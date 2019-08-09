/**
 * <p>An object containing information about the error, along with identifying information about the self-service action and its associations.</p>
 */
export interface _FailedServiceActionAssociation {
  /**
   * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
   */
  ServiceActionId?: string;

  /**
   * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
   */
  ProductId?: string;

  /**
   * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
   */
  ProvisioningArtifactId?: string;

  /**
   * <p>The error code. Valid values are listed below.</p>
   */
  ErrorCode?:
    | "DUPLICATE_RESOURCE"
    | "INTERNAL_FAILURE"
    | "LIMIT_EXCEEDED"
    | "RESOURCE_NOT_FOUND"
    | "THROTTLING"
    | string;

  /**
   * <p>A text description of the error.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledFailedServiceActionAssociation = _FailedServiceActionAssociation;

// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CertificateAssociationStatusCode = {
  /**
   * The certificate is associated and available to the proxy.
   */
  ACTIVE: "active",
  /**
   * The certificate could not be associated with the proxy. To retry, call
   * AssociateCertificate again.
   */
  ASSOCIATE_FAILED: "associate-failed",
  /**
   * The certificate is being associated with the proxy.
   */
  ASSOCIATE_IN_PROGRESS: "associate-in-progress",
  /**
   * The certificate is not associated with the proxy.
   */
  DISASSOCIATED: "disassociated",
  /**
   * The certificate is being removed from the proxy.
   */
  DISASSOCIATE_IN_PROGRESS: "disassociate-in-progress",
} as const;
/**
 * @public
 */
export type CertificateAssociationStatusCode =
  (typeof CertificateAssociationStatusCode)[keyof typeof CertificateAssociationStatusCode];

/**
 * @public
 * @enum
 */
export const ProxyIpv4Addressability = {
  /**
   * The proxy is IPv4-addressable for internal clients only.
   */
  INTERNAL: "internal",
  /**
   * The proxy is IPv4-addressable for both internet-facing and internal clients.
   */
  INTERNET_FACING: "internet-facing",
  /**
   * The proxy is not IPv4-addressable.
   */
  OFF: "off",
} as const;
/**
 * @public
 */
export type ProxyIpv4Addressability = (typeof ProxyIpv4Addressability)[keyof typeof ProxyIpv4Addressability];

/**
 * @public
 * @enum
 */
export const ProxyIpv6Addressability = {
  /**
   * The proxy is IPv6-addressable for internal clients only.
   */
  INTERNAL: "internal",
  /**
   * The proxy is IPv6-addressable for both internet-facing and internal clients.
   */
  INTERNET_FACING: "internet-facing",
  /**
   * The proxy is not IPv6-addressable.
   */
  OFF: "off",
} as const;
/**
 * @public
 */
export type ProxyIpv6Addressability = (typeof ProxyIpv6Addressability)[keyof typeof ProxyIpv6Addressability];

/**
 * @public
 * @enum
 */
export const ProxyType = {
  ENVOY: "envoy",
} as const;
/**
 * @public
 */
export type ProxyType = (typeof ProxyType)[keyof typeof ProxyType];

/**
 * @public
 * @enum
 */
export const ProxyStatusCode = {
  /**
   * The proxy may be impaired and requires action.
   */
  ACTION_REQUIRED: "action-required",
  /**
   * The proxy is active.
   */
  ACTIVE: "active",
  /**
   * The proxy is cancelling a version update and reverting to its previous version.
   */
  CANCEL_UPDATE_IN_PROGRESS: "cancel-update-in-progress",
  /**
   * The proxy failed to create.
   */
  CREATE_FAILED: "create-failed",
  /**
   * The proxy is being created.
   */
  CREATE_IN_PROGRESS: "create-in-progress",
  /**
   * The proxy has been deleted.
   */
  DELETED: "deleted",
  /**
   * The proxy is being deleted.
   */
  DELETE_IN_PROGRESS: "delete-in-progress",
  /**
   * The proxy is updating its version.
   */
  UPDATE_IN_PROGRESS: "update-in-progress",
} as const;
/**
 * @public
 */
export type ProxyStatusCode = (typeof ProxyStatusCode)[keyof typeof ProxyStatusCode];

/**
 * @public
 * @enum
 */
export const ProxyUpdatePropagationStatus = {
  /**
   * The update was cancelled before it was applied to all proxy nodes.
   */
  CANCELLED: "cancelled",
  /**
   * The configuration was applied to all proxy nodes.
   */
  COMPLETE: "complete",
  /**
   * The update failed to apply.
   */
  FAILED: "failed",
  /**
   * The configuration is being applied to the proxy nodes.
   */
  IN_PROGRESS: "in-progress",
  /**
   * A newer update replaced this update before it was applied to all proxy
   * nodes.
   */
  SKIPPED: "skipped",
} as const;
/**
 * @public
 */
export type ProxyUpdatePropagationStatus =
  (typeof ProxyUpdatePropagationStatus)[keyof typeof ProxyUpdatePropagationStatus];

/**
 * @public
 * @enum
 */
export const ProxyUpdateValidationStatus = {
  /**
   * Proxy nodes failed to apply the configuration.
   */
  INVALID: "invalid",
  /**
   * No proxy node has applied or rejected the configuration.
   */
  NOT_VALIDATED: "not-validated",
  /**
   * The configuration was successfully applied to at least one proxy node.
   */
  VALID: "valid",
} as const;
/**
 * @public
 */
export type ProxyUpdateValidationStatus =
  (typeof ProxyUpdateValidationStatus)[keyof typeof ProxyUpdateValidationStatus];

/**
 * @public
 * @enum
 */
export const ProxyUpdateType = {
  /**
   * An update to the proxy's configuration.
   */
  UPDATE_PROXY_CONFIGURATION: "update-proxy-configuration",
} as const;
/**
 * @public
 */
export type ProxyUpdateType = (typeof ProxyUpdateType)[keyof typeof ProxyUpdateType];

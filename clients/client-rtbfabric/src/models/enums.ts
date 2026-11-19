// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResponderErrorMaskingAction = {
  NO_BID: "NO_BID",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type ResponderErrorMaskingAction =
  (typeof ResponderErrorMaskingAction)[keyof typeof ResponderErrorMaskingAction];

/**
 * @public
 * @enum
 */
export const ResponderErrorMaskingLoggingType = {
  METRIC: "METRIC",
  NONE: "NONE",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type ResponderErrorMaskingLoggingType =
  (typeof ResponderErrorMaskingLoggingType)[keyof typeof ResponderErrorMaskingLoggingType];

/**
 * @public
 * @enum
 */
export const ConnectivityType = {
  DEFAULT: "DEFAULT",
  EXTERNAL_INBOUND: "EXTERNAL_INBOUND",
  PUBLIC_EGRESS: "PUBLIC_EGRESS",
  PUBLIC_INGRESS: "PUBLIC_INGRESS",
} as const;
/**
 * @public
 */
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType];

/**
 * @public
 * @enum
 */
export const LinkDirection = {
  REQUEST: "REQUEST",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type LinkDirection = (typeof LinkDirection)[keyof typeof LinkDirection];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  /**
   * <p>A security group no longer exists.</p>
   */
  EC2_SECURITY_GROUP_NOT_FOUND: "EC2_SECURITY_GROUP_NOT_FOUND",
  /**
   * <p>A subnet has no free IP addresses.</p>
   */
  EC2_SUBNET_IP_EXHAUSTION: "EC2_SUBNET_IP_EXHAUSTION",
  /**
   * <p>A subnet no longer exists.</p>
   */
  EC2_SUBNET_NOT_FOUND: "EC2_SUBNET_NOT_FOUND",
  /**
   * <p>RTB Fabric was denied when it assumed an IAM role in your account.</p>
   */
  IAM_ASSUME_ROLE_ACCESS_DENIED: "IAM_ASSUME_ROLE_ACCESS_DENIED",
  /**
   * <p>An internal error in RTB Fabric.</p>
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * <p>The VPC no longer exists.</p>
   */
  VPC_NOT_FOUND: "VPC_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const FilterType = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * @public
 * @enum
 */
export const LinkStatus = {
  ACCEPTED: "ACCEPTED",
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  FAILED: "FAILED",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_REQUEST: "PENDING_REQUEST",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
  REJECTED: "REJECTED",
  REQUESTED: "REQUESTED",
} as const;
/**
 * @public
 */
export type LinkStatus = (typeof LinkStatus)[keyof typeof LinkStatus];

/**
 * @public
 * @enum
 */
export const CertificateAssociationStatus = {
  ASSOCIATED: "ASSOCIATED",
  DISASSOCIATED: "DISASSOCIATED",
  FAILED: "FAILED",
  PENDING_ASSOCIATION: "PENDING_ASSOCIATION",
  PENDING_DISASSOCIATION: "PENDING_DISASSOCIATION",
} as const;
/**
 * @public
 */
export type CertificateAssociationStatus =
  (typeof CertificateAssociationStatus)[keyof typeof CertificateAssociationStatus];

/**
 * @public
 * @enum
 */
export const Protocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  /**
   * <p>The access is current, and you can attach the module's versions.</p>
   */
  ACTIVE: "ACTIVE",
  /**
   * <p>The subscription or share ended. The module is still listed, but its versions can't be attached.</p>
   */
  EXPIRED: "EXPIRED",
} as const;
/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  /**
   * <p>The module is an AWS built-in, available to everyone.</p>
   */
  AWS_BUILT_IN: "AWS_BUILT_IN",
  /**
   * <p>The access is through an AWS Marketplace subscription.</p>
   */
  MARKETPLACE: "MARKETPLACE",
  /**
   * <p>The module is your own, or a vendor shares it with you privately.</p>
   */
  PRIVATE: "PRIVATE",
} as const;
/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * @public
 * @enum
 */
export const ModuleVersionStatus = {
  /**
   * <p>Attachable.</p>
   */
  ACTIVE: "ACTIVE",
  /**
   * <p>Terminal. Re-publish as a new version.</p>
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * <p>Being validated.</p>
   */
  CREATING: "CREATING",
  /**
   * <p>Terminal. Can't be attached.</p>
   */
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type ModuleVersionStatus = (typeof ModuleVersionStatus)[keyof typeof ModuleVersionStatus];

/**
 * @public
 * @enum
 */
export const ClientRoutingPolicy = {
  ANY_AVAILABILITY_ZONE: "ANY_AVAILABILITY_ZONE",
  AVAILABILITY_ZONE_AFFINITY: "AVAILABILITY_ZONE_AFFINITY",
} as const;
/**
 * @public
 */
export type ClientRoutingPolicy = (typeof ClientRoutingPolicy)[keyof typeof ClientRoutingPolicy];

/**
 * @public
 * @enum
 */
export const ConfigurableAction = {
  /**
   * <p>Requires ENRICH_REQUEST_EXT.</p>
   */
  ENRICH_REQUEST_EXT: "ENRICH_REQUEST_EXT",
  /**
   * <p>Requires ENRICH_REQUEST_HEADERS.</p>
   */
  ENRICH_REQUEST_HEADERS: "ENRICH_REQUEST_HEADERS",
  /**
   * <p>Requires FILTER.</p>
   */
  FILTER: "FILTER",
  /**
   * <p>Requires READ_REQUEST_BODY or READ_REQUEST_HEADERS.</p>
   */
  OBSERVE: "OBSERVE",
} as const;
/**
 * @public
 */
export type ConfigurableAction = (typeof ConfigurableAction)[keyof typeof ConfigurableAction];

/**
 * @public
 * @enum
 */
export const RuleStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  FAILED: "FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

/**
 * @public
 * @enum
 */
export const RequesterGatewayStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  ERROR: "ERROR",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type RequesterGatewayStatus = (typeof RequesterGatewayStatus)[keyof typeof RequesterGatewayStatus];

/**
 * @public
 * @enum
 */
export const GatewayType = {
  EXTERNAL: "EXTERNAL",
  INTERNAL: "INTERNAL",
} as const;
/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * @enum
 */
export const ResponderGatewayStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  ERROR: "ERROR",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type ResponderGatewayStatus = (typeof ResponderGatewayStatus)[keyof typeof ResponderGatewayStatus];

/**
 * @public
 * @enum
 */
export const FailureMode = {
  /**
   * <p>Short-circuit with a no-bid.</p>
   */
  CLOSED: "CLOSED",
  /**
   * <p>Continue the flow. The default.</p>
   */
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type FailureMode = (typeof FailureMode)[keyof typeof FailureMode];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const UpdateType = {
  GATEWAY_CONFIG_UPDATE: "GATEWAY_CONFIG_UPDATE",
  LINK_CONFIG_UPDATE: "LINK_CONFIG_UPDATE",
  LINK_FLOW_UPDATE: "LINK_FLOW_UPDATE",
  ROUTING_RULE_UPDATE: "ROUTING_RULE_UPDATE",
} as const;
/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * @public
 * @enum
 */
export const ModulePermission = {
  /**
   * <p>Write data into the bid request's ext object.</p>
   */
  ENRICH_REQUEST_EXT: "ENRICH_REQUEST_EXT",
  /**
   * <p>Add headers to the bid request.</p>
   */
  ENRICH_REQUEST_HEADERS: "ENRICH_REQUEST_HEADERS",
  /**
   * <p>Drop the bid request and return a no-bid.</p>
   */
  FILTER: "FILTER",
  /**
   * <p>Change the bid request body.</p>
   */
  MUTATE_REQUEST_BODY: "MUTATE_REQUEST_BODY",
  /**
   * <p>Read the bid request body.</p>
   */
  READ_REQUEST_BODY: "READ_REQUEST_BODY",
  /**
   * <p>Read the bid request headers.</p>
   */
  READ_REQUEST_HEADERS: "READ_REQUEST_HEADERS",
} as const;
/**
 * @public
 */
export type ModulePermission = (typeof ModulePermission)[keyof typeof ModulePermission];

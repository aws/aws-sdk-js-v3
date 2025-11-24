// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ServiceNetworkLogType = {
  /**
   * Indicates logs for Lattice resource configurations.
   */
  RESOURCE: "RESOURCE",
  /**
   * Indicates logs for Lattice services.
   */
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type ServiceNetworkLogType = (typeof ServiceNetworkLogType)[keyof typeof ServiceNetworkLogType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AuthPolicyState = {
  Active: "Active",
  Inactive: "Inactive",
} as const;
/**
 * @public
 */
export type AuthPolicyState = (typeof AuthPolicyState)[keyof typeof AuthPolicyState];

/**
 * @public
 * @enum
 */
export const AuthType = {
  AWS_IAM: "AWS_IAM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const ListenerProtocol = {
  /**
   * Indicates HTTP protocol
   */
  HTTP: "HTTP",
  /**
   * Indicates HTTPS protocol
   */
  HTTPS: "HTTPS",
  /**
   * Indicates TLS_PASSTHROUGH protocol
   */
  TLS_PASSTHROUGH: "TLS_PASSTHROUGH",
} as const;
/**
 * @public
 */
export type ListenerProtocol = (typeof ListenerProtocol)[keyof typeof ListenerProtocol];

/**
 * @public
 * @enum
 */
export const ProtocolType = {
  /**
   * Resource Configuration protocol type TCP
   */
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

/**
 * @public
 * @enum
 */
export const ResourceConfigurationIpAddressType = {
  /**
   * Dualstack ip address type for dns type resource configs
   */
  DUALSTACK: "DUALSTACK",
  /**
   * Ipv4 ip address type for dns type resource configs
   */
  IPV4: "IPV4",
  /**
   * IPv6 ip address type for dns type resource configs
   */
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type ResourceConfigurationIpAddressType =
  (typeof ResourceConfigurationIpAddressType)[keyof typeof ResourceConfigurationIpAddressType];

/**
 * @public
 * @enum
 */
export const ResourceConfigurationType = {
  /**
   * Resource Configuration of type ARN
   */
  ARN: "ARN",
  /**
   * Resource Configuration of type CHILD
   */
  CHILD: "CHILD",
  /**
   * Resource Configuration of type GROUP
   */
  GROUP: "GROUP",
  /**
   * Resource Configuration of type SINGLE
   */
  SINGLE: "SINGLE",
} as const;
/**
 * @public
 */
export type ResourceConfigurationType = (typeof ResourceConfigurationType)[keyof typeof ResourceConfigurationType];

/**
 * @public
 * @enum
 */
export const ResourceConfigurationStatus = {
  /**
   * Resource Configuration is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource Configuration creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Resource Configuration creation in progress.
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * Resource Configuration deletion failed.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Resource Configuration deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * Resource Configuration update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Resource Configuration update in progress.
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ResourceConfigurationStatus =
  (typeof ResourceConfigurationStatus)[keyof typeof ResourceConfigurationStatus];

/**
 * @public
 * @enum
 */
export const ResourceGatewayIpAddressType = {
  /**
   * Dualstack ip address type for resource gateway
   */
  DUALSTACK: "DUALSTACK",
  /**
   * Ipv4 ip address type for resource gateway
   */
  IPV4: "IPV4",
  /**
   * IPv6 ip address type for resource gateway
   */
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type ResourceGatewayIpAddressType =
  (typeof ResourceGatewayIpAddressType)[keyof typeof ResourceGatewayIpAddressType];

/**
 * @public
 * @enum
 */
export const ResourceGatewayStatus = {
  /**
   * Resource Gateway is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Resource Gateway creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Resource Gateway creation in progress.
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * Resource Gateway deletion failed.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Resource Gateway deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * Reosurce Gateway update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Resource Gateway update in progress.
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ResourceGatewayStatus = (typeof ResourceGatewayStatus)[keyof typeof ResourceGatewayStatus];

/**
 * @public
 * @enum
 */
export const ServiceStatus = {
  /**
   * Service is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Service creation failed
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * Service creation in progress.
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * Service deletion failed.
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * Service deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

/**
 * @public
 * @enum
 */
export const ServiceNetworkResourceAssociationStatus = {
  /**
   * ServiceNetwork and Service association is active
   */
  ACTIVE: "ACTIVE",
  /**
   * ServiceNetwork and Service association creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * ServiceNetwork and Service association creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * ServiceNetwork and Service association deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * ServiceNetwork and Service association deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * ServiceNetwork and Service association is partial
   */
  PARTIAL: "PARTIAL",
} as const;
/**
 * @public
 */
export type ServiceNetworkResourceAssociationStatus =
  (typeof ServiceNetworkResourceAssociationStatus)[keyof typeof ServiceNetworkResourceAssociationStatus];

/**
 * @public
 * @enum
 */
export const ServiceNetworkServiceAssociationStatus = {
  /**
   * ServiceNetwork and Service association is active
   */
  ACTIVE: "ACTIVE",
  /**
   * ServiceNetwork and Service association creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * ServiceNetwork and Service association creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * ServiceNetwork and Service association deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * ServiceNetwork and Service association deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ServiceNetworkServiceAssociationStatus =
  (typeof ServiceNetworkServiceAssociationStatus)[keyof typeof ServiceNetworkServiceAssociationStatus];

/**
 * @public
 * @enum
 */
export const PrivateDnsPreference = {
  ALL_DOMAINS: "ALL_DOMAINS",
  SPECIFIED_DOMAINS_ONLY: "SPECIFIED_DOMAINS_ONLY",
  VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS: "VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS",
  VERIFIED_DOMAINS_ONLY: "VERIFIED_DOMAINS_ONLY",
} as const;
/**
 * @public
 */
export type PrivateDnsPreference = (typeof PrivateDnsPreference)[keyof typeof PrivateDnsPreference];

/**
 * @public
 * @enum
 */
export const ServiceNetworkVpcAssociationStatus = {
  /**
   * ServiceNetwork and Vpc association is active
   */
  ACTIVE: "ACTIVE",
  /**
   * ServiceNetwork and Vpc association creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * ServiceNetwork and Vpc association creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * ServiceNetwork and Vpc association deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * ServiceNetwork and Vpc association deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  /**
   * ServiceNetwork and Vpc association update failed
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * ServiceNetwork and Vpc association update in progress
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ServiceNetworkVpcAssociationStatus =
  (typeof ServiceNetworkVpcAssociationStatus)[keyof typeof ServiceNetworkVpcAssociationStatus];

/**
 * @public
 * @enum
 */
export const TargetGroupProtocol = {
  /**
   * Indicates HTTP protocol
   */
  HTTP: "HTTP",
  /**
   * Indicates HTTPS protocol
   */
  HTTPS: "HTTPS",
  /**
   * Indicates TCP protocol
   */
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type TargetGroupProtocol = (typeof TargetGroupProtocol)[keyof typeof TargetGroupProtocol];

/**
 * @public
 * @enum
 */
export const HealthCheckProtocolVersion = {
  /**
   * Indicates use of HTTP/1.1 to send requests to target
   */
  HTTP1: "HTTP1",
  /**
   * Indicates use of HTTP/2 to send requests to target
   */
  HTTP2: "HTTP2",
} as const;
/**
 * @public
 */
export type HealthCheckProtocolVersion = (typeof HealthCheckProtocolVersion)[keyof typeof HealthCheckProtocolVersion];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  /**
   * Indicates IPv4 address type
   */
  IPV4: "IPV4",
  /**
   * Indicates IPv6 address type
   */
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const LambdaEventStructureVersion = {
  /**
   * This is the default lambda event structure version
   */
  V1: "V1",
  /**
   * Indicates use of lambda event structure version 2
   */
  V2: "V2",
} as const;
/**
 * @public
 */
export type LambdaEventStructureVersion =
  (typeof LambdaEventStructureVersion)[keyof typeof LambdaEventStructureVersion];

/**
 * @public
 * @enum
 */
export const TargetGroupProtocolVersion = {
  /**
   * Indicates use of gRPC to send requests to target
   */
  GRPC: "GRPC",
  /**
   * Indicates use of HTTP/1.1 to send requests to target
   */
  HTTP1: "HTTP1",
  /**
   * Indicates use of HTTP/2 to send requests to target
   */
  HTTP2: "HTTP2",
} as const;
/**
 * @public
 */
export type TargetGroupProtocolVersion = (typeof TargetGroupProtocolVersion)[keyof typeof TargetGroupProtocolVersion];

/**
 * @public
 * @enum
 */
export const TargetGroupType = {
  /**
   * Indicates target in this target group is an ALB
   */
  ALB: "ALB",
  /**
   * Indicates targets in this target group are EC2 instances
   */
  INSTANCE: "INSTANCE",
  /**
   * Indicates targets in this target group are IP
   */
  IP: "IP",
  /**
   * Indicates targets in this target group are Lambda
   */
  LAMBDA: "LAMBDA",
} as const;
/**
 * @public
 */
export type TargetGroupType = (typeof TargetGroupType)[keyof typeof TargetGroupType];

/**
 * @public
 * @enum
 */
export const TargetGroupStatus = {
  /**
   * TargetGroup is active
   */
  ACTIVE: "ACTIVE",
  /**
   * TargetGroup creation failed.
   */
  CREATE_FAILED: "CREATE_FAILED",
  /**
   * TargetGroup creation in progress
   */
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  /**
   * TargetGroup deletion failed
   */
  DELETE_FAILED: "DELETE_FAILED",
  /**
   * TargetGroup deletion in progress
   */
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TargetGroupStatus = (typeof TargetGroupStatus)[keyof typeof TargetGroupStatus];

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  PENDING: "PENDING",
  VERIFICATION_TIMED_OUT: "VERIFICATION_TIMED_OUT",
  VERIFIED: "VERIFIED",
} as const;
/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  /**
   * The target is deregistering and connection draining is in process.
   */
  DRAINING: "DRAINING",
  /**
   * The target is healthy.
   */
  HEALTHY: "HEALTHY",
  /**
   * The initial health check is in progress.
   */
  INITIAL: "INITIAL",
  /**
   * Health checks are disabled.
   */
  UNAVAILABLE: "UNAVAILABLE",
  /**
   * The target failed the health check.
   */
  UNHEALTHY: "UNHEALTHY",
  /**
   * The target group is not used in a listener rule.
   */
  UNUSED: "UNUSED",
} as const;
/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

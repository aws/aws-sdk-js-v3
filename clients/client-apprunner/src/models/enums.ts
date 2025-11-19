// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CertificateValidationRecordStatus = {
  FAILED: "FAILED",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type CertificateValidationRecordStatus =
  (typeof CertificateValidationRecordStatus)[keyof typeof CertificateValidationRecordStatus];

/**
 * @public
 * @enum
 */
export const CustomDomainAssociationStatus = {
  ACTIVE: "ACTIVE",
  BINDING_CERTIFICATE: "BINDING_CERTIFICATE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  PENDING_CERTIFICATE_DNS_VALIDATION: "PENDING_CERTIFICATE_DNS_VALIDATION",
} as const;
/**
 * @public
 */
export type CustomDomainAssociationStatus =
  (typeof CustomDomainAssociationStatus)[keyof typeof CustomDomainAssociationStatus];

/**
 * @public
 * @enum
 */
export const AutoScalingConfigurationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AutoScalingConfigurationStatus =
  (typeof AutoScalingConfigurationStatus)[keyof typeof AutoScalingConfigurationStatus];

/**
 * @public
 * @enum
 */
export const ProviderType = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
} as const;
/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  PENDING_HANDSHAKE: "PENDING_HANDSHAKE",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const TracingVendor = {
  AWSXRAY: "AWSXRAY",
} as const;
/**
 * @public
 */
export type TracingVendor = (typeof TracingVendor)[keyof typeof TracingVendor];

/**
 * @public
 * @enum
 */
export const ObservabilityConfigurationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ObservabilityConfigurationStatus =
  (typeof ObservabilityConfigurationStatus)[keyof typeof ObservabilityConfigurationStatus];

/**
 * @public
 * @enum
 */
export const HealthCheckProtocol = {
  HTTP: "HTTP",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type HealthCheckProtocol = (typeof HealthCheckProtocol)[keyof typeof HealthCheckProtocol];

/**
 * @public
 * @enum
 */
export const EgressType = {
  DEFAULT: "DEFAULT",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type EgressType = (typeof EgressType)[keyof typeof EgressType];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const Runtime = {
  CORRETTO_11: "CORRETTO_11",
  CORRETTO_8: "CORRETTO_8",
  DOTNET_6: "DOTNET_6",
  GO_1: "GO_1",
  NODEJS_12: "NODEJS_12",
  NODEJS_14: "NODEJS_14",
  NODEJS_16: "NODEJS_16",
  NODEJS_18: "NODEJS_18",
  NODEJS_22: "NODEJS_22",
  PHP_81: "PHP_81",
  PYTHON_3: "PYTHON_3",
  PYTHON_311: "PYTHON_311",
  RUBY_31: "RUBY_31",
} as const;
/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];

/**
 * @public
 * @enum
 */
export const ConfigurationSource = {
  API: "API",
  REPOSITORY: "REPOSITORY",
} as const;
/**
 * @public
 */
export type ConfigurationSource = (typeof ConfigurationSource)[keyof typeof ConfigurationSource];

/**
 * @public
 * @enum
 */
export const SourceCodeVersionType = {
  BRANCH: "BRANCH",
} as const;
/**
 * @public
 */
export type SourceCodeVersionType = (typeof SourceCodeVersionType)[keyof typeof SourceCodeVersionType];

/**
 * @public
 * @enum
 */
export const ImageRepositoryType = {
  ECR: "ECR",
  ECR_PUBLIC: "ECR_PUBLIC",
} as const;
/**
 * @public
 */
export type ImageRepositoryType = (typeof ImageRepositoryType)[keyof typeof ImageRepositoryType];

/**
 * @public
 * @enum
 */
export const ServiceStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  OPERATION_IN_PROGRESS: "OPERATION_IN_PROGRESS",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

/**
 * @public
 * @enum
 */
export const VpcConnectorStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type VpcConnectorStatus = (typeof VpcConnectorStatus)[keyof typeof VpcConnectorStatus];

/**
 * @public
 * @enum
 */
export const VpcIngressConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATE: "FAILED_UPDATE",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type VpcIngressConnectionStatus = (typeof VpcIngressConnectionStatus)[keyof typeof VpcIngressConnectionStatus];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  ROLLBACK_SUCCEEDED: "ROLLBACK_SUCCEEDED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const OperationType = {
  CREATE_SERVICE: "CREATE_SERVICE",
  DELETE_SERVICE: "DELETE_SERVICE",
  PAUSE_SERVICE: "PAUSE_SERVICE",
  RESUME_SERVICE: "RESUME_SERVICE",
  START_DEPLOYMENT: "START_DEPLOYMENT",
  UPDATE_SERVICE: "UPDATE_SERVICE",
} as const;
/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

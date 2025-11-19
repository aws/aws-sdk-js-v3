// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EnforceMessageSigningType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EnforceMessageSigningType = (typeof EnforceMessageSigningType)[keyof typeof EnforceMessageSigningType];

/**
 * @public
 * @enum
 */
export const PreserveFilenameType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PreserveFilenameType = (typeof PreserveFilenameType)[keyof typeof PreserveFilenameType];

/**
 * @public
 * @enum
 */
export const AgreementStatusType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AgreementStatusType = (typeof AgreementStatusType)[keyof typeof AgreementStatusType];

/**
 * @public
 * @enum
 */
export const CompressionEnum = {
  DISABLED: "DISABLED",
  ZLIB: "ZLIB",
} as const;
/**
 * @public
 */
export type CompressionEnum = (typeof CompressionEnum)[keyof typeof CompressionEnum];

/**
 * @public
 * @enum
 */
export const EncryptionAlg = {
  AES128_CBC: "AES128_CBC",
  AES192_CBC: "AES192_CBC",
  AES256_CBC: "AES256_CBC",
  DES_EDE3_CBC: "DES_EDE3_CBC",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type EncryptionAlg = (typeof EncryptionAlg)[keyof typeof EncryptionAlg];

/**
 * @public
 * @enum
 */
export const MdnResponse = {
  NONE: "NONE",
  SYNC: "SYNC",
} as const;
/**
 * @public
 */
export type MdnResponse = (typeof MdnResponse)[keyof typeof MdnResponse];

/**
 * @public
 * @enum
 */
export const MdnSigningAlg = {
  DEFAULT: "DEFAULT",
  NONE: "NONE",
  SHA1: "SHA1",
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;
/**
 * @public
 */
export type MdnSigningAlg = (typeof MdnSigningAlg)[keyof typeof MdnSigningAlg];

/**
 * @public
 * @enum
 */
export const PreserveContentType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PreserveContentType = (typeof PreserveContentType)[keyof typeof PreserveContentType];

/**
 * @public
 * @enum
 */
export const SigningAlg = {
  NONE: "NONE",
  SHA1: "SHA1",
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;
/**
 * @public
 */
export type SigningAlg = (typeof SigningAlg)[keyof typeof SigningAlg];

/**
 * @public
 * @enum
 */
export const As2Transport = {
  HTTP: "HTTP",
} as const;
/**
 * @public
 */
export type As2Transport = (typeof As2Transport)[keyof typeof As2Transport];

/**
 * @public
 * @enum
 */
export const CertificateStatusType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ROTATION: "PENDING_ROTATION",
} as const;
/**
 * @public
 */
export type CertificateStatusType = (typeof CertificateStatusType)[keyof typeof CertificateStatusType];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  CERTIFICATE: "CERTIFICATE",
  CERTIFICATE_WITH_PRIVATE_KEY: "CERTIFICATE_WITH_PRIVATE_KEY",
} as const;
/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * @enum
 */
export const CertificateUsageType = {
  ENCRYPTION: "ENCRYPTION",
  SIGNING: "SIGNING",
  TLS: "TLS",
} as const;
/**
 * @public
 */
export type CertificateUsageType = (typeof CertificateUsageType)[keyof typeof CertificateUsageType];

/**
 * @public
 * @enum
 */
export const ConnectorEgressType = {
  SERVICE_MANAGED: "SERVICE_MANAGED",
  VPC_LATTICE: "VPC_LATTICE",
} as const;
/**
 * @public
 */
export type ConnectorEgressType = (typeof ConnectorEgressType)[keyof typeof ConnectorEgressType];

/**
 * @public
 * @enum
 */
export const TransferTableStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;
/**
 * @public
 */
export type TransferTableStatus = (typeof TransferTableStatus)[keyof typeof TransferTableStatus];

/**
 * @public
 * @enum
 */
export const ConnectorStatus = {
  ACTIVE: "ACTIVE",
  ERRORED: "ERRORED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * @public
 * @enum
 */
export const OverwriteExisting = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type OverwriteExisting = (typeof OverwriteExisting)[keyof typeof OverwriteExisting];

/**
 * @public
 * @enum
 */
export const MapType = {
  DIRECTORY: "DIRECTORY",
  FILE: "FILE",
} as const;
/**
 * @public
 */
export type MapType = (typeof MapType)[keyof typeof MapType];

/**
 * @public
 * @enum
 */
export const HomeDirectoryType = {
  LOGICAL: "LOGICAL",
  PATH: "PATH",
} as const;
/**
 * @public
 */
export type HomeDirectoryType = (typeof HomeDirectoryType)[keyof typeof HomeDirectoryType];

/**
 * @public
 * @enum
 */
export const ProfileType = {
  LOCAL: "LOCAL",
  PARTNER: "PARTNER",
} as const;
/**
 * @public
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

/**
 * @public
 * @enum
 */
export const Domain = {
  EFS: "EFS",
  S3: "S3",
} as const;
/**
 * @public
 */
export type Domain = (typeof Domain)[keyof typeof Domain];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
  VPC_ENDPOINT: "VPC_ENDPOINT",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const SftpAuthenticationMethods = {
  PASSWORD: "PASSWORD",
  PUBLIC_KEY: "PUBLIC_KEY",
  PUBLIC_KEY_AND_PASSWORD: "PUBLIC_KEY_AND_PASSWORD",
  PUBLIC_KEY_OR_PASSWORD: "PUBLIC_KEY_OR_PASSWORD",
} as const;
/**
 * @public
 */
export type SftpAuthenticationMethods = (typeof SftpAuthenticationMethods)[keyof typeof SftpAuthenticationMethods];

/**
 * @public
 * @enum
 */
export const IdentityProviderType = {
  API_GATEWAY: "API_GATEWAY",
  AWS_DIRECTORY_SERVICE: "AWS_DIRECTORY_SERVICE",
  AWS_LAMBDA: "AWS_LAMBDA",
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;
/**
 * @public
 */
export type IdentityProviderType = (typeof IdentityProviderType)[keyof typeof IdentityProviderType];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUALSTACK: "DUALSTACK",
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
export const SetStatOption = {
  DEFAULT: "DEFAULT",
  ENABLE_NO_OP: "ENABLE_NO_OP",
} as const;
/**
 * @public
 */
export type SetStatOption = (typeof SetStatOption)[keyof typeof SetStatOption];

/**
 * @public
 * @enum
 */
export const TlsSessionResumptionMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENFORCED: "ENFORCED",
} as const;
/**
 * @public
 */
export type TlsSessionResumptionMode = (typeof TlsSessionResumptionMode)[keyof typeof TlsSessionResumptionMode];

/**
 * @public
 * @enum
 */
export const Protocol = {
  AS2: "AS2",
  FTP: "FTP",
  FTPS: "FTPS",
  SFTP: "SFTP",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const DirectoryListingOptimization = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DirectoryListingOptimization =
  (typeof DirectoryListingOptimization)[keyof typeof DirectoryListingOptimization];

/**
 * @public
 * @enum
 */
export const WebAppEndpointPolicy = {
  FIPS: "FIPS",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type WebAppEndpointPolicy = (typeof WebAppEndpointPolicy)[keyof typeof WebAppEndpointPolicy];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  PGP: "PGP",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const WorkflowStepType = {
  COPY: "COPY",
  CUSTOM: "CUSTOM",
  DECRYPT: "DECRYPT",
  DELETE: "DELETE",
  TAG: "TAG",
} as const;
/**
 * @public
 */
export type WorkflowStepType = (typeof WorkflowStepType)[keyof typeof WorkflowStepType];

/**
 * @public
 * @enum
 */
export const CustomStepStatus = {
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type CustomStepStatus = (typeof CustomStepStatus)[keyof typeof CustomStepStatus];

/**
 * @public
 * @enum
 */
export const ExecutionErrorType = {
  ALREADY_EXISTS: "ALREADY_EXISTS",
  BAD_REQUEST: "BAD_REQUEST",
  CUSTOM_STEP_FAILED: "CUSTOM_STEP_FAILED",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
  PERMISSION_DENIED: "PERMISSION_DENIED",
  THROTTLED: "THROTTLED",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type ExecutionErrorType = (typeof ExecutionErrorType)[keyof typeof ExecutionErrorType];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  EXCEPTION: "EXCEPTION",
  HANDLING_EXCEPTION: "HANDLING_EXCEPTION",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const SecurityPolicyProtocol = {
  FTPS: "FTPS",
  SFTP: "SFTP",
} as const;
/**
 * @public
 */
export type SecurityPolicyProtocol = (typeof SecurityPolicyProtocol)[keyof typeof SecurityPolicyProtocol];

/**
 * @public
 * @enum
 */
export const SecurityPolicyResourceType = {
  CONNECTOR: "CONNECTOR",
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type SecurityPolicyResourceType = (typeof SecurityPolicyResourceType)[keyof typeof SecurityPolicyResourceType];

/**
 * @public
 * @enum
 */
export const State = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

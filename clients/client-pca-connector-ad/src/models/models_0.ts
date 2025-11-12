// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PcaConnectorAdServiceException as __BaseException } from "./PcaConnectorAdServiceException";

/**
 * @public
 * @enum
 */
export const AccessRight = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type AccessRight = (typeof AccessRight)[keyof typeof AccessRight];

/**
 * <p> Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a
 *          template.</p>
 * @public
 */
export interface AccessRights {
  /**
   * <p>Allow or deny an Active Directory group from enrolling certificates issued against a
   *          template.</p>
   * @public
   */
  Enroll?: AccessRight | undefined;

  /**
   * <p>Allow or deny an Active Directory group from autoenrolling certificates issued against a template.
   *          The Active Directory group must be allowed to enroll to allow autoenrollment</p>
   * @public
   */
  AutoEnroll?: AccessRight | undefined;
}

/**
 * <p> An access control entry allows or denies Active Directory groups based on their security
 *          identifiers (SIDs) from enrolling and/or autoenrolling with the template.</p>
 * @public
 */
export interface AccessControlEntry {
  /**
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   * @public
   */
  GroupDisplayName?: string | undefined;

  /**
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   * @public
   */
  GroupSecurityIdentifier?: string | undefined;

  /**
   * <p>Permissions to allow or deny an Active Directory group to enroll or autoenroll certificates issued
   *          against a template.</p>
   * @public
   */
  AccessRights?: AccessRights | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The date and time that the Access Control Entry was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the Access Control Entry was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Summary of group access control entries that allow or deny Active Directory groups based on their
 *          security identifiers (SIDs) from enrolling and/or autofenrolling with the template.</p>
 * @public
 */
export interface AccessControlEntrySummary {
  /**
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   * @public
   */
  GroupDisplayName?: string | undefined;

  /**
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   * @public
   */
  GroupSecurityIdentifier?: string | undefined;

  /**
   * <p>Allow or deny an Active Directory group from enrolling and autoenrolling certificates issued against
   *          a template.</p>
   * @public
   */
  AccessRights?: AccessRights | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>. </p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The date and time that the Access Control Entry was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the Access Control Entry was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ApplicationPolicyType = {
  ALL_APPLICATION_POLICIES: "ALL_APPLICATION_POLICIES",
  ANY_PURPOSE: "ANY_PURPOSE",
  ATTESTATION_IDENTITY_KEY_CERTIFICATE: "ATTESTATION_IDENTITY_KEY_CERTIFICATE",
  CERTIFICATE_REQUEST_AGENT: "CERTIFICATE_REQUEST_AGENT",
  CLIENT_AUTHENTICATION: "CLIENT_AUTHENTICATION",
  CODE_SIGNING: "CODE_SIGNING",
  CTL_USAGE: "CTL_USAGE",
  DIGITAL_RIGHTS: "DIGITAL_RIGHTS",
  DIRECTORY_SERVICE_EMAIL_REPLICATION: "DIRECTORY_SERVICE_EMAIL_REPLICATION",
  DISALLOWED_LIST: "DISALLOWED_LIST",
  DNS_SERVER_TRUST: "DNS_SERVER_TRUST",
  DOCUMENT_ENCRYPTION: "DOCUMENT_ENCRYPTION",
  DOCUMENT_SIGNING: "DOCUMENT_SIGNING",
  DYNAMIC_CODE_GENERATOR: "DYNAMIC_CODE_GENERATOR",
  EARLY_LAUNCH_ANTIMALWARE_DRIVER: "EARLY_LAUNCH_ANTIMALWARE_DRIVER",
  EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION: "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION",
  ENCLAVE: "ENCLAVE",
  ENCRYPTING_FILE_SYSTEM: "ENCRYPTING_FILE_SYSTEM",
  ENDORSEMENT_KEY_CERTIFICATE: "ENDORSEMENT_KEY_CERTIFICATE",
  FILE_RECOVERY: "FILE_RECOVERY",
  HAL_EXTENSION: "HAL_EXTENSION",
  IP_SECURITY_END_SYSTEM: "IP_SECURITY_END_SYSTEM",
  IP_SECURITY_IKE_INTERMEDIATE: "IP_SECURITY_IKE_INTERMEDIATE",
  IP_SECURITY_TUNNEL_TERMINATION: "IP_SECURITY_TUNNEL_TERMINATION",
  IP_SECURITY_USER: "IP_SECURITY_USER",
  ISOLATED_USER_MODE: "ISOLATED_USER_MODE",
  KDC_AUTHENTICATION: "KDC_AUTHENTICATION",
  KERNEL_MODE_CODE_SIGNING: "KERNEL_MODE_CODE_SIGNING",
  KEY_PACK_LICENSES: "KEY_PACK_LICENSES",
  KEY_RECOVERY: "KEY_RECOVERY",
  KEY_RECOVERY_AGENT: "KEY_RECOVERY_AGENT",
  LICENSE_SERVER_VERIFICATION: "LICENSE_SERVER_VERIFICATION",
  LIFETIME_SIGNING: "LIFETIME_SIGNING",
  MICROSOFT_PUBLISHER: "MICROSOFT_PUBLISHER",
  MICROSOFT_TIME_STAMPING: "MICROSOFT_TIME_STAMPING",
  MICROSOFT_TRUST_LIST_SIGNING: "MICROSOFT_TRUST_LIST_SIGNING",
  OCSP_SIGNING: "OCSP_SIGNING",
  OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION: "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION",
  PLATFORM_CERTIFICATE: "PLATFORM_CERTIFICATE",
  PREVIEW_BUILD_SIGNING: "PREVIEW_BUILD_SIGNING",
  PRIVATE_KEY_ARCHIVAL: "PRIVATE_KEY_ARCHIVAL",
  PROTECTED_PROCESS_LIGHT_VERIFICATION: "PROTECTED_PROCESS_LIGHT_VERIFICATION",
  PROTECTED_PROCESS_VERIFICATION: "PROTECTED_PROCESS_VERIFICATION",
  QUALIFIED_SUBORDINATION: "QUALIFIED_SUBORDINATION",
  REVOKED_LIST_SIGNER: "REVOKED_LIST_SIGNER",
  ROOT_LIST_SIGNER: "ROOT_LIST_SIGNER",
  ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION: "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION",
  ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION: "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION",
  ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL: "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL",
  SECURE_EMAIL: "SECURE_EMAIL",
  SERVER_AUTHENTICATION: "SERVER_AUTHENTICATION",
  SMART_CARD_LOGIN: "SMART_CARD_LOGIN",
  SPC_ENCRYPTED_DIGEST_RETRY_COUNT: "SPC_ENCRYPTED_DIGEST_RETRY_COUNT",
  SPC_RELAXED_PE_MARKER_CHECK: "SPC_RELAXED_PE_MARKER_CHECK",
  TIME_STAMPING: "TIME_STAMPING",
  WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION: "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION",
  WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION: "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION",
  WINDOWS_HARDWARE_DRIVER_VERIFICATION: "WINDOWS_HARDWARE_DRIVER_VERIFICATION",
  WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION: "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION",
  WINDOWS_KITS_COMPONENT: "WINDOWS_KITS_COMPONENT",
  WINDOWS_RT_VERIFICATION: "WINDOWS_RT_VERIFICATION",
  WINDOWS_SOFTWARE_EXTENSION_VERIFICATION: "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION",
  WINDOWS_STORE: "WINDOWS_STORE",
  WINDOWS_SYSTEM_COMPONENT_VERIFICATION: "WINDOWS_SYSTEM_COMPONENT_VERIFICATION",
  WINDOWS_TCB_COMPONENT: "WINDOWS_TCB_COMPONENT",
  WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT: "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT",
  WINDOWS_UPDATE: "WINDOWS_UPDATE",
} as const;

/**
 * @public
 */
export type ApplicationPolicyType = (typeof ApplicationPolicyType)[keyof typeof ApplicationPolicyType];

/**
 * <p>Application policies describe what the certificate can be used for.</p>
 * @public
 */
export type ApplicationPolicy =
  | ApplicationPolicy.PolicyObjectIdentifierMember
  | ApplicationPolicy.PolicyTypeMember
  | ApplicationPolicy.$UnknownMember;

/**
 * @public
 */
export namespace ApplicationPolicy {
  /**
   * <p>The type of application policy</p>
   * @public
   */
  export interface PolicyTypeMember {
    PolicyType: ApplicationPolicyType;
    PolicyObjectIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The object identifier (OID) of an application policy.</p>
   * @public
   */
  export interface PolicyObjectIdentifierMember {
    PolicyType?: never;
    PolicyObjectIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PolicyType?: never;
    PolicyObjectIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PolicyType: (value: ApplicationPolicyType) => T;
    PolicyObjectIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Application policies describe what the certificate can be used for.</p>
 * @public
 */
export interface ApplicationPolicies {
  /**
   * <p>Marks the application policy extension as critical.</p>
   * @public
   */
  Critical?: boolean | undefined;

  /**
   * <p>Application policies describe what the certificate can be used for.</p>
   * @public
   */
  Policies: ApplicationPolicy[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidityPeriodType = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
  YEARS: "YEARS",
} as const;

/**
 * @public
 */
export type ValidityPeriodType = (typeof ValidityPeriodType)[keyof typeof ValidityPeriodType];

/**
 * <p>Information describing the end of the validity period of the certificate. This parameter
 *          sets the “Not After” date for the certificate. Certificate validity is the period of time
 *          during which a certificate is valid. Validity can be expressed as an explicit date and time
 *          when the certificate expires, or as a span of time after issuance, stated in hours, days,
 *          months, or years. For more information, see Validity in RFC 5280. This value is unaffected
 *          when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the
 *          future, the certificate will expire 20 days from issuance time regardless of the
 *          ValidityNotBefore value. </p>
 * @public
 */
export interface ValidityPeriod {
  /**
   * <p>The unit of time. You can select hours, days, weeks, months, and years.</p>
   * @public
   */
  PeriodType: ValidityPeriodType | undefined;

  /**
   * <p>The numeric value for the validity period.</p>
   * @public
   */
  Period: number | undefined;
}

/**
 * <p>Information describing the end of the validity period of the certificate. This parameter
 *          sets the “Not After” date for the certificate. Certificate validity is the period of time
 *          during which a certificate is valid. Validity can be expressed as an explicit date and time
 *          when the certificate expires, or as a span of time after issuance, stated in days, months,
 *          or years. For more information, see Validity in RFC 5280. This value is unaffected when
 *          ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the
 *          future, the certificate will expire 20 days from issuance time regardless of the
 *          ValidityNotBefore value.</p>
 * @public
 */
export interface CertificateValidity {
  /**
   * <p>Information describing the end of the validity period of the certificate. This parameter
   *          sets the “Not After” date for the certificate. Certificate validity is the period of time
   *          during which a certificate is valid. Validity can be expressed as an explicit date and time
   *          when the certificate expires, or as a span of time after issuance, stated in days, months,
   *          or years. For more information, see Validity in RFC 5280. This value is unaffected when
   *          ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the
   *          future, the certificate will expire 20 days from issuance time regardless of the
   *          ValidityNotBefore value.</p>
   * @public
   */
  ValidityPeriod: ValidityPeriod | undefined;

  /**
   * <p>Renewal period is the period of time before certificate expiration when a new
   *          certificate will be requested.</p>
   * @public
   */
  RenewalPeriod: ValidityPeriod | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientCompatibilityV2 = {
  WINDOWS_SERVER_2003: "WINDOWS_SERVER_2003",
  WINDOWS_SERVER_2008: "WINDOWS_SERVER_2008",
  WINDOWS_SERVER_2008_R2: "WINDOWS_SERVER_2008_R2",
  WINDOWS_SERVER_2012: "WINDOWS_SERVER_2012",
  WINDOWS_SERVER_2012_R2: "WINDOWS_SERVER_2012_R2",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
} as const;

/**
 * @public
 */
export type ClientCompatibilityV2 = (typeof ClientCompatibilityV2)[keyof typeof ClientCompatibilityV2];

/**
 * @public
 * @enum
 */
export const ClientCompatibilityV3 = {
  WINDOWS_SERVER_2008: "WINDOWS_SERVER_2008",
  WINDOWS_SERVER_2008_R2: "WINDOWS_SERVER_2008_R2",
  WINDOWS_SERVER_2012: "WINDOWS_SERVER_2012",
  WINDOWS_SERVER_2012_R2: "WINDOWS_SERVER_2012_R2",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
} as const;

/**
 * @public
 */
export type ClientCompatibilityV3 = (typeof ClientCompatibilityV3)[keyof typeof ClientCompatibilityV3];

/**
 * @public
 * @enum
 */
export const ClientCompatibilityV4 = {
  WINDOWS_SERVER_2012: "WINDOWS_SERVER_2012",
  WINDOWS_SERVER_2012_R2: "WINDOWS_SERVER_2012_R2",
  WINDOWS_SERVER_2016: "WINDOWS_SERVER_2016",
} as const;

/**
 * @public
 */
export type ClientCompatibilityV4 = (typeof ClientCompatibilityV4)[keyof typeof ClientCompatibilityV4];

/**
 * <p>This request cannot be completed for one of the following reasons because the requested
 *          resource was being concurrently modified by another request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type, which can be one of <code>Connector</code>, <code>Template</code>, <code>TemplateGroupAccessControlEntry</code>, <code>ServicePrincipalName</code>, or <code>DirectoryRegistration</code>.</p>
   * @public
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * @enum
 */
export const ConnectorStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * @public
 * @enum
 */
export const ConnectorStatusReason = {
  CA_CERTIFICATE_REGISTRATION_FAILED: "CA_CERTIFICATE_REGISTRATION_FAILED",
  DIRECTORY_ACCESS_DENIED: "DIRECTORY_ACCESS_DENIED",
  INSUFFICIENT_FREE_ADDRESSES: "INSUFFICIENT_FREE_ADDRESSES",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  INVALID_SUBNET_IP_PROTOCOL: "INVALID_SUBNET_IP_PROTOCOL",
  PRIVATECA_ACCESS_DENIED: "PRIVATECA_ACCESS_DENIED",
  PRIVATECA_RESOURCE_NOT_FOUND: "PRIVATECA_RESOURCE_NOT_FOUND",
  SECURITY_GROUP_NOT_IN_VPC: "SECURITY_GROUP_NOT_IN_VPC",
  VPC_ACCESS_DENIED: "VPC_ACCESS_DENIED",
  VPC_ENDPOINT_LIMIT_EXCEEDED: "VPC_ENDPOINT_LIMIT_EXCEEDED",
  VPC_RESOURCE_NOT_FOUND: "VPC_RESOURCE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type ConnectorStatusReason = (typeof ConnectorStatusReason)[keyof typeof ConnectorStatusReason];

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
 * <p>Information about your VPC and security groups used with the connector.</p>
 * @public
 */
export interface VpcInformation {
  /**
   * <p>The VPC IP address type.</p>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The security groups used with the connector. You can use a maximum of 4 security groups
   *          with a connector.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * <p>Amazon Web Services Private CA Connector for Active Directory is a service that links your Active Directory with Amazon Web Services Private CA. The connector brokers the
 *          exchange of certificates from Amazon Web Services Private CA to domain-joined users and machines managed with
 *          Active Directory.</p>
 * @public
 */
export interface Connector {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate authority being used. </p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>Certificate enrollment endpoint for Active Directory domain-joined objects reach out to when
   *          requesting certificates.</p>
   * @public
   */
  CertificateEnrollmentPolicyServerEndpoint?: string | undefined;

  /**
   * <p>The identifier of the Active Directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Information of the VPC and security group(s) used with the connector.</p>
   * @public
   */
  VpcInformation?: VpcInformation | undefined;

  /**
   * <p>Status of the connector. Status can be creating, active, deleting, or failed.</p>
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * <p>Additional information about the connector status if the status is failed.</p>
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * <p>The date and time that the connector was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the connector was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Summary description of the Amazon Web Services Private CA AD connectors belonging to an Amazon Web Services
 *          account.</p>
 * @public
 */
export interface ConnectorSummary {
  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate authority being used.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>Certificate enrollment endpoint for Active Directory domain-joined objects to request
   *          certificates.</p>
   * @public
   */
  CertificateEnrollmentPolicyServerEndpoint?: string | undefined;

  /**
   * <p>The identifier of the Active Directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Information of the VPC and security group(s) used with the connector.</p>
   * @public
   */
  VpcInformation?: VpcInformation | undefined;

  /**
   * <p>Status of the connector. Status can be creating, active, deleting, or failed.</p>
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * <p>Additional information about the connector status if the status is failed.</p>
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * <p>The date and time that the connector was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the connector was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * <p>The identifier of the Active Directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the certificate authority being used.</p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>Information about your VPC and security groups used with the connector.</p>
   * @public
   */
  VpcInformation: VpcInformation | undefined;

  /**
   * <p>Idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Metadata assigned to a connector consisting of a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * <p>If successful, the Amazon Resource Name (ARN) of the connector for Active Directory.</p>
   * @public
   */
  ConnectorArn?: string | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type, which can be one of <code>Connector</code>, <code>Template</code>, <code>TemplateGroupAccessControlEntry</code>, <code>ServicePrincipalName</code>, or <code>DirectoryRegistration</code>.</p>
   * @public
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the Amazon Web Services resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type, which can be one of <code>Connector</code>, <code>Template</code>, <code>TemplateGroupAccessControlEntry</code>, <code>ServicePrincipalName</code>, or <code>DirectoryRegistration</code>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Identifies the originating service.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>The code associated with the service quota.</p>
   * @public
   */
  QuotaCode: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message: string | undefined;
  /**
   * <p>Identifies the originating service.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p>The code associated with the quota.</p>
   * @public
   */
  QuotaCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  INVALID_CA_SUBJECT: "INVALID_CA_SUBJECT",
  INVALID_PERMISSION: "INVALID_PERMISSION",
  INVALID_STATE: "INVALID_STATE",
  MISMATCHED_CONNECTOR: "MISMATCHED_CONNECTOR",
  MISMATCHED_VPC: "MISMATCHED_VPC",
  NO_CLIENT_TOKEN: "NO_CLIENT_TOKEN",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason for the validation error. This won't be return for every
   *          validation exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * <p>A structure that contains information about your connector.</p>
   * @public
   */
  Connector?: Connector | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>Summary information about each connector you have created.</p>
   * @public
   */
  Connectors?: ConnectorSummary[] | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the NextToken parameter from the
   *          response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryRegistrationRequest {
  /**
   * <p> The identifier of the Active Directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>Idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Metadata assigned to a directory registration consisting of a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryRegistrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateServicePrincipalNameRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * <p>Idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Template configurations for v2 template schema.</p>
 * @public
 */
export interface EnrollmentFlagsV2 {
  /**
   * <p>Include symmetric algorithms allowed by the subject.</p>
   * @public
   */
  IncludeSymmetricAlgorithms?: boolean | undefined;

  /**
   * <p>Require user interaction when the subject is enrolled and the private key associated
   *          with the certificate is used.</p>
   * @public
   */
  UserInteractionRequired?: boolean | undefined;

  /**
   * <p>Delete expired or revoked certificates instead of archiving them.</p>
   * @public
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean | undefined;

  /**
   * <p>This flag instructs the CA to not include the security extension
   *          szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections
   *          2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows
   *          Kerberos elevation-of-privilege vulnerability.</p>
   * @public
   */
  NoSecurityExtension?: boolean | undefined;

  /**
   * <p>Allow renewal using the same key.</p>
   * @public
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | undefined;
}

/**
 * <p>The key usage flags represent the purpose (e.g., encipherment, signature) of the key
 *          contained in the certificate.</p>
 * @public
 */
export interface KeyUsageFlags {
  /**
   * <p>The digitalSignature is asserted when the subject public key is used for verifying
   *          digital signatures.</p>
   * @public
   */
  DigitalSignature?: boolean | undefined;

  /**
   * <p>NonRepudiation is asserted when the subject public key is used to verify digital
   *          signatures.</p>
   * @public
   */
  NonRepudiation?: boolean | undefined;

  /**
   * <p>KeyEncipherment is asserted when the subject public key is used for enciphering private
   *          or secret keys, i.e., for key transport.</p>
   * @public
   */
  KeyEncipherment?: boolean | undefined;

  /**
   * <p>DataEncipherment is asserted when the subject public key is used for directly
   *          enciphering raw user data without the use of an intermediate symmetric cipher.</p>
   * @public
   */
  DataEncipherment?: boolean | undefined;

  /**
   * <p>KeyAgreement is asserted when the subject public key is used for key agreement.</p>
   * @public
   */
  KeyAgreement?: boolean | undefined;
}

/**
 * <p>The key usage extension defines the purpose (e.g., encipherment, signature) of the key
 *          contained in the certificate.</p>
 * @public
 */
export interface KeyUsage {
  /**
   * <p>Sets the key usage extension to critical.</p>
   * @public
   */
  Critical?: boolean | undefined;

  /**
   * <p>The key usage flags represent the purpose (e.g., encipherment, signature) of the key
   *          contained in the certificate.</p>
   * @public
   */
  UsageFlags: KeyUsageFlags | undefined;
}

/**
 * <p>Certificate extensions for v2 template schema</p>
 * @public
 */
export interface ExtensionsV2 {
  /**
   * <p>The key usage extension defines the purpose (e.g., encipherment, signature, certificate
   *          signing) of the key contained in the certificate.</p>
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * <p>Application policies specify what the certificate is used for and its purpose. </p>
   * @public
   */
  ApplicationPolicies?: ApplicationPolicies | undefined;
}

/**
 * <p>General flags for v2 template schema that defines if the template is for a machine or a
 *          user and if the template can be issued using autoenrollment.</p>
 * @public
 */
export interface GeneralFlagsV2 {
  /**
   * <p>Allows certificate issuance using autoenrollment. Set to TRUE to allow
   *          autoenrollment.</p>
   * @public
   */
  AutoEnrollment?: boolean | undefined;

  /**
   * <p>Defines if the template is for machines or users. Set to TRUE if the template is for
   *          machines. Set to FALSE if the template is for users.</p>
   * @public
   */
  MachineType?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const KeySpec = {
  KEY_EXCHANGE: "KEY_EXCHANGE",
  SIGNATURE: "SIGNATURE",
} as const;

/**
 * @public
 */
export type KeySpec = (typeof KeySpec)[keyof typeof KeySpec];

/**
 * <p>Defines the attributes of the private key.</p>
 * @public
 */
export interface PrivateKeyAttributesV2 {
  /**
   * <p>Set the minimum key length of the private key.</p>
   * @public
   */
  MinimalKeyLength: number | undefined;

  /**
   * <p>Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE"
   *          value.</p>
   * @public
   */
  KeySpec: KeySpec | undefined;

  /**
   * <p>Defines the cryptographic providers used to generate the private key.</p>
   * @public
   */
  CryptoProviders?: string[] | undefined;
}

/**
 * <p>Private key flags for v2 templates specify the client compatibility, if the private key
 *          can be exported, and if user input is required when using a private key.</p>
 * @public
 */
export interface PrivateKeyFlagsV2 {
  /**
   * <p>Allows the private key to be exported.</p>
   * @public
   */
  ExportableKey?: boolean | undefined;

  /**
   * <p>Require user input when using the private key for enrollment.</p>
   * @public
   */
  StrongKeyProtectionRequired?: boolean | undefined;

  /**
   * <p>Defines the minimum client compatibility.</p>
   * @public
   */
  ClientVersion: ClientCompatibilityV2 | undefined;
}

/**
 * <p>Information to include in the subject name and alternate subject name of the
 *          certificate. The subject name can be common name, directory path, DNS as common name, or
 *          left blank. You can optionally include email to the subject name for user templates. If you
 *          leave the subject name blank then you must set a subject alternate name. The subject
 *          alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email,
 *          service principal name (SPN), and user principal name (UPN). You can leave the SAN blank.
 *          If you leave the SAN blank, then you must set a subject name.</p>
 * @public
 */
export interface SubjectNameFlagsV2 {
  /**
   * <p>Include the domain DNS in the subject alternate name.</p>
   * @public
   */
  SanRequireDomainDns?: boolean | undefined;

  /**
   * <p>Include the service principal name (SPN) in the subject alternate name.</p>
   * @public
   */
  SanRequireSpn?: boolean | undefined;

  /**
   * <p>Include the globally unique identifier (GUID) in the subject alternate name.</p>
   * @public
   */
  SanRequireDirectoryGuid?: boolean | undefined;

  /**
   * <p>Include the user principal name (UPN) in the subject alternate name.</p>
   * @public
   */
  SanRequireUpn?: boolean | undefined;

  /**
   * <p>Include the subject's email in the subject alternate name.</p>
   * @public
   */
  SanRequireEmail?: boolean | undefined;

  /**
   * <p>Include the DNS in the subject alternate name.</p>
   * @public
   */
  SanRequireDns?: boolean | undefined;

  /**
   * <p>Include the DNS as common name in the subject name.</p>
   * @public
   */
  RequireDnsAsCn?: boolean | undefined;

  /**
   * <p>Include the subject's email in the subject name.</p>
   * @public
   */
  RequireEmail?: boolean | undefined;

  /**
   * <p>Include the common name in the subject name.</p>
   * @public
   */
  RequireCommonName?: boolean | undefined;

  /**
   * <p>Include the directory path in the subject name.</p>
   * @public
   */
  RequireDirectoryPath?: boolean | undefined;
}

/**
 * <p>v2 template schema that uses Legacy Cryptographic Providers.</p>
 * @public
 */
export interface TemplateV2 {
  /**
   * <p>Certificate validity describes the validity and renewal periods of a certificate.</p>
   * @public
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * <p>List of templates in Active Directory that are superseded by this template.</p>
   * @public
   */
  SupersededTemplates?: string[] | undefined;

  /**
   * <p>Private key attributes allow you to specify the minimal key length, key spec, and
   *          cryptographic providers for the private key of a certificate for v2 templates. V2 templates
   *          allow you to use Legacy Cryptographic Service Providers.</p>
   * @public
   */
  PrivateKeyAttributes: PrivateKeyAttributesV2 | undefined;

  /**
   * <p>Private key flags for v2 templates specify the client compatibility, if the private key
   *          can be exported, and if user input is required when using a private key. </p>
   * @public
   */
  PrivateKeyFlags: PrivateKeyFlagsV2 | undefined;

  /**
   * <p>Enrollment flags describe the enrollment settings for certificates such as using the
   *          existing private key and deleting expired or revoked certificates.</p>
   * @public
   */
  EnrollmentFlags: EnrollmentFlagsV2 | undefined;

  /**
   * <p>Subject name flags describe the subject name and subject alternate name that is included
   *          in a certificate.</p>
   * @public
   */
  SubjectNameFlags: SubjectNameFlagsV2 | undefined;

  /**
   * <p>General flags describe whether the template is used for computers or users and if the
   *          template can be used with autoenrollment.</p>
   * @public
   */
  GeneralFlags: GeneralFlagsV2 | undefined;

  /**
   * <p>Extensions describe the key usage extensions and application policies for a
   *          template.</p>
   * @public
   */
  Extensions: ExtensionsV2 | undefined;
}

/**
 * <p>Template configurations for v3 template schema.</p>
 * @public
 */
export interface EnrollmentFlagsV3 {
  /**
   * <p>Include symmetric algorithms allowed by the subject.</p>
   * @public
   */
  IncludeSymmetricAlgorithms?: boolean | undefined;

  /**
   * <p>Require user interaction when the subject is enrolled and the private key associated
   *          with the certificate is used.</p>
   * @public
   */
  UserInteractionRequired?: boolean | undefined;

  /**
   * <p>Delete expired or revoked certificates instead of archiving them.</p>
   * @public
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean | undefined;

  /**
   * <p>This flag instructs the CA to not include the security extension
   *          szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections
   *          2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows
   *          Kerberos elevation-of-privilege vulnerability.</p>
   * @public
   */
  NoSecurityExtension?: boolean | undefined;

  /**
   * <p>Allow renewal using the same key.</p>
   * @public
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | undefined;
}

/**
 * <p>Certificate extensions for v3 template schema</p>
 * @public
 */
export interface ExtensionsV3 {
  /**
   * <p>The key usage extension defines the purpose (e.g., encipherment, signature, certificate
   *          signing) of the key contained in the certificate.</p>
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * <p>Application policies specify what the certificate is used for and its purpose.</p>
   * @public
   */
  ApplicationPolicies?: ApplicationPolicies | undefined;
}

/**
 * <p>General flags for v3 template schema that defines if the template is for a machine or a
 *          user and if the template can be issued using autoenrollment.</p>
 * @public
 */
export interface GeneralFlagsV3 {
  /**
   * <p>Allows certificate issuance using autoenrollment. Set to TRUE to allow
   *          autoenrollment.</p>
   * @public
   */
  AutoEnrollment?: boolean | undefined;

  /**
   * <p>Defines if the template is for machines or users. Set to TRUE if the template is for
   *          machines. Set to FALSE if the template is for users</p>
   * @public
   */
  MachineType?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const HashAlgorithm = {
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;

/**
 * @public
 */
export type HashAlgorithm = (typeof HashAlgorithm)[keyof typeof HashAlgorithm];

/**
 * @public
 * @enum
 */
export const PrivateKeyAlgorithm = {
  ECDH_P256: "ECDH_P256",
  ECDH_P384: "ECDH_P384",
  ECDH_P521: "ECDH_P521",
  RSA: "RSA",
} as const;

/**
 * @public
 */
export type PrivateKeyAlgorithm = (typeof PrivateKeyAlgorithm)[keyof typeof PrivateKeyAlgorithm];

/**
 * <p>Specifies key usage.</p>
 * @public
 */
export interface KeyUsagePropertyFlags {
  /**
   * <p>Allows key for encryption and decryption.</p>
   * @public
   */
  Decrypt?: boolean | undefined;

  /**
   * <p>Allows key exchange without encryption.</p>
   * @public
   */
  KeyAgreement?: boolean | undefined;

  /**
   * <p>Allow key use for digital signature.</p>
   * @public
   */
  Sign?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyUsagePropertyType = {
  ALL: "ALL",
} as const;

/**
 * @public
 */
export type KeyUsagePropertyType = (typeof KeyUsagePropertyType)[keyof typeof KeyUsagePropertyType];

/**
 * <p>The key usage property defines the purpose of the private key contained in the
 *          certificate. You can specify specific purposes using property flags or all by using
 *          property type ALL.</p>
 * @public
 */
export type KeyUsageProperty =
  | KeyUsageProperty.PropertyFlagsMember
  | KeyUsageProperty.PropertyTypeMember
  | KeyUsageProperty.$UnknownMember;

/**
 * @public
 */
export namespace KeyUsageProperty {
  /**
   * <p>You can specify all key usages using property type ALL. You can use property type or
   *          property flags but not both. </p>
   * @public
   */
  export interface PropertyTypeMember {
    PropertyType: KeyUsagePropertyType;
    PropertyFlags?: never;
    $unknown?: never;
  }

  /**
   * <p>You can specify key usage for encryption, key agreement, and signature. You can use
   *          property flags or property type but not both. </p>
   * @public
   */
  export interface PropertyFlagsMember {
    PropertyType?: never;
    PropertyFlags: KeyUsagePropertyFlags;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PropertyType?: never;
    PropertyFlags?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PropertyType: (value: KeyUsagePropertyType) => T;
    PropertyFlags: (value: KeyUsagePropertyFlags) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Defines the attributes of the private key.</p>
 * @public
 */
export interface PrivateKeyAttributesV3 {
  /**
   * <p>Set the minimum key length of the private key.</p>
   * @public
   */
  MinimalKeyLength: number | undefined;

  /**
   * <p>Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE"
   *          value.</p>
   * @public
   */
  KeySpec: KeySpec | undefined;

  /**
   * <p>Defines the cryptographic providers used to generate the private key.</p>
   * @public
   */
  CryptoProviders?: string[] | undefined;

  /**
   * <p>The key usage property defines the purpose of the private key contained in the
   *          certificate. You can specify specific purposes using property flags or all by using
   *          property type ALL.</p>
   * @public
   */
  KeyUsageProperty: KeyUsageProperty | undefined;

  /**
   * <p>Defines the algorithm used to generate the private key.</p>
   * @public
   */
  Algorithm: PrivateKeyAlgorithm | undefined;
}

/**
 * <p>Private key flags for v3 templates specify the client compatibility, if the private key
 *          can be exported, if user input is required when using a private key, and if an alternate
 *          signature algorithm should be used.</p>
 * @public
 */
export interface PrivateKeyFlagsV3 {
  /**
   * <p>Allows the private key to be exported.</p>
   * @public
   */
  ExportableKey?: boolean | undefined;

  /**
   * <p>Requirer user input when using the private key for enrollment.</p>
   * @public
   */
  StrongKeyProtectionRequired?: boolean | undefined;

  /**
   * <p>Reguires the PKCS #1 v2.1 signature format for certificates. You should verify that your
   *          CA, objects, and applications can accept this signature format.</p>
   * @public
   */
  RequireAlternateSignatureAlgorithm?: boolean | undefined;

  /**
   * <p>Defines the minimum client compatibility.</p>
   * @public
   */
  ClientVersion: ClientCompatibilityV3 | undefined;
}

/**
 * <p>Information to include in the subject name and alternate subject name of the
 *          certificate. The subject name can be common name, directory path, DNS as common name, or
 *          left blank. You can optionally include email to the subject name for user templates. If you
 *          leave the subject name blank then you must set a subject alternate name. The subject
 *          alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email,
 *          service principal name (SPN), and user principal name (UPN). You can leave the SAN blank.
 *          If you leave the SAN blank, then you must set a subject name.</p>
 * @public
 */
export interface SubjectNameFlagsV3 {
  /**
   * <p>Include the domain DNS in the subject alternate name.</p>
   * @public
   */
  SanRequireDomainDns?: boolean | undefined;

  /**
   * <p>Include the service principal name (SPN) in the subject alternate name.</p>
   * @public
   */
  SanRequireSpn?: boolean | undefined;

  /**
   * <p>Include the globally unique identifier (GUID) in the subject alternate name.</p>
   * @public
   */
  SanRequireDirectoryGuid?: boolean | undefined;

  /**
   * <p>Include the user principal name (UPN) in the subject alternate name.</p>
   * @public
   */
  SanRequireUpn?: boolean | undefined;

  /**
   * <p>Include the subject's email in the subject alternate name.</p>
   * @public
   */
  SanRequireEmail?: boolean | undefined;

  /**
   * <p>Include the DNS in the subject alternate name.</p>
   * @public
   */
  SanRequireDns?: boolean | undefined;

  /**
   * <p>Include the DNS as common name in the subject name.</p>
   * @public
   */
  RequireDnsAsCn?: boolean | undefined;

  /**
   * <p>Include the subject's email in the subject name.</p>
   * @public
   */
  RequireEmail?: boolean | undefined;

  /**
   * <p>Include the common name in the subject name. </p>
   * @public
   */
  RequireCommonName?: boolean | undefined;

  /**
   * <p>Include the directory path in the subject name.</p>
   * @public
   */
  RequireDirectoryPath?: boolean | undefined;
}

/**
 * <p>v3 template schema that uses Key Storage Providers.</p>
 * @public
 */
export interface TemplateV3 {
  /**
   * <p>Certificate validity describes the validity and renewal periods of a certificate.</p>
   * @public
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * <p>List of templates in Active Directory that are superseded by this template.</p>
   * @public
   */
  SupersededTemplates?: string[] | undefined;

  /**
   * <p>Private key attributes allow you to specify the algorithm, minimal key length, key spec,
   *          key usage, and cryptographic providers for the private key of a certificate for v3
   *          templates. V3 templates allow you to use Key Storage Providers.</p>
   * @public
   */
  PrivateKeyAttributes: PrivateKeyAttributesV3 | undefined;

  /**
   * <p>Private key flags for v3 templates specify the client compatibility, if the private key
   *          can be exported, if user input is required when using a private key, and if an alternate
   *          signature algorithm should be used.</p>
   * @public
   */
  PrivateKeyFlags: PrivateKeyFlagsV3 | undefined;

  /**
   * <p>Enrollment flags describe the enrollment settings for certificates such as using the
   *          existing private key and deleting expired or revoked certificates.</p>
   * @public
   */
  EnrollmentFlags: EnrollmentFlagsV3 | undefined;

  /**
   * <p>Subject name flags describe the subject name and subject alternate name that is included
   *          in a certificate.</p>
   * @public
   */
  SubjectNameFlags: SubjectNameFlagsV3 | undefined;

  /**
   * <p>General flags describe whether the template is used for computers or users and if the
   *          template can be used with autoenrollment.</p>
   * @public
   */
  GeneralFlags: GeneralFlagsV3 | undefined;

  /**
   * <p>Specifies the hash algorithm used to hash the private key.</p>
   * @public
   */
  HashAlgorithm: HashAlgorithm | undefined;

  /**
   * <p>Extensions describe the key usage extensions and application policies for a
   *          template.</p>
   * @public
   */
  Extensions: ExtensionsV3 | undefined;
}

/**
 * <p>Template configurations for v4 template schema.</p>
 * @public
 */
export interface EnrollmentFlagsV4 {
  /**
   * <p>Include symmetric algorithms allowed by the subject.</p>
   * @public
   */
  IncludeSymmetricAlgorithms?: boolean | undefined;

  /**
   * <p>Require user interaction when the subject is enrolled and the private key associated
   *          with the certificate is used.</p>
   * @public
   */
  UserInteractionRequired?: boolean | undefined;

  /**
   * <p>Delete expired or revoked certificates instead of archiving them.</p>
   * @public
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean | undefined;

  /**
   * <p>This flag instructs the CA to not include the security extension
   *          szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections
   *          2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows
   *          Kerberos elevation-of-privilege vulnerability.</p>
   * @public
   */
  NoSecurityExtension?: boolean | undefined;

  /**
   * <p>Allow renewal using the same key.</p>
   * @public
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | undefined;
}

/**
 * <p>Certificate extensions for v4 template schema</p>
 * @public
 */
export interface ExtensionsV4 {
  /**
   * <p>The key usage extension defines the purpose (e.g., encipherment, signature) of the key
   *          contained in the certificate.</p>
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * <p>Application policies specify what the certificate is used for and its purpose.</p>
   * @public
   */
  ApplicationPolicies?: ApplicationPolicies | undefined;
}

/**
 * <p>General flags for v4 template schema that defines if the template is for a machine or a
 *          user and if the template can be issued using autoenrollment.</p>
 * @public
 */
export interface GeneralFlagsV4 {
  /**
   * <p>Allows certificate issuance using autoenrollment. Set to TRUE to allow
   *          autoenrollment.</p>
   * @public
   */
  AutoEnrollment?: boolean | undefined;

  /**
   * <p>Defines if the template is for machines or users. Set to TRUE if the template is for
   *          machines. Set to FALSE if the template is for users</p>
   * @public
   */
  MachineType?: boolean | undefined;
}

/**
 * <p>Defines the attributes of the private key.</p>
 * @public
 */
export interface PrivateKeyAttributesV4 {
  /**
   * <p>Set the minimum key length of the private key.</p>
   * @public
   */
  MinimalKeyLength: number | undefined;

  /**
   * <p>Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE"
   *          value.</p>
   * @public
   */
  KeySpec: KeySpec | undefined;

  /**
   * <p>Defines the cryptographic providers used to generate the private key.</p>
   * @public
   */
  CryptoProviders?: string[] | undefined;

  /**
   * <p>The key usage property defines the purpose of the private key contained in the
   *          certificate. You can specify specific purposes using property flags or all by using
   *          property type ALL.</p>
   * @public
   */
  KeyUsageProperty?: KeyUsageProperty | undefined;

  /**
   * <p>Defines the algorithm used to generate the private key.</p>
   * @public
   */
  Algorithm?: PrivateKeyAlgorithm | undefined;
}

/**
 * <p>Private key flags for v4 templates specify the client compatibility, if the private key
 *          can be exported, if user input is required when using a private key, if an alternate
 *          signature algorithm should be used, and if certificates are renewed using the same private
 *          key.</p>
 * @public
 */
export interface PrivateKeyFlagsV4 {
  /**
   * <p>Allows the private key to be exported.</p>
   * @public
   */
  ExportableKey?: boolean | undefined;

  /**
   * <p>Require user input when using the private key for enrollment.</p>
   * @public
   */
  StrongKeyProtectionRequired?: boolean | undefined;

  /**
   * <p>Requires the PKCS #1 v2.1 signature format for certificates. You should verify that your
   *          CA, objects, and applications can accept this signature format.</p>
   * @public
   */
  RequireAlternateSignatureAlgorithm?: boolean | undefined;

  /**
   * <p>Renew certificate using the same private key.</p>
   * @public
   */
  RequireSameKeyRenewal?: boolean | undefined;

  /**
   * <p>Specifies the cryptographic service provider category used to generate private keys. Set
   *          to TRUE to use Legacy Cryptographic Service Providers and FALSE to use Key Storage
   *          Providers.</p>
   * @public
   */
  UseLegacyProvider?: boolean | undefined;

  /**
   * <p>Defines the minimum client compatibility.</p>
   * @public
   */
  ClientVersion: ClientCompatibilityV4 | undefined;
}

/**
 * <p>Information to include in the subject name and alternate subject name of the
 *          certificate. The subject name can be common name, directory path, DNS as common name, or
 *          left blank. You can optionally include email to the subject name for user templates. If you
 *          leave the subject name blank then you must set a subject alternate name. The subject
 *          alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email,
 *          service principal name (SPN), and user principal name (UPN). You can leave the SAN blank.
 *          If you leave the SAN blank, then you must set a subject name.</p>
 * @public
 */
export interface SubjectNameFlagsV4 {
  /**
   * <p>Include the domain DNS in the subject alternate name.</p>
   * @public
   */
  SanRequireDomainDns?: boolean | undefined;

  /**
   * <p>Include the service principal name (SPN) in the subject alternate name.</p>
   * @public
   */
  SanRequireSpn?: boolean | undefined;

  /**
   * <p>Include the globally unique identifier (GUID) in the subject alternate name.</p>
   * @public
   */
  SanRequireDirectoryGuid?: boolean | undefined;

  /**
   * <p>Include the user principal name (UPN) in the subject alternate name.</p>
   * @public
   */
  SanRequireUpn?: boolean | undefined;

  /**
   * <p>Include the subject's email in the subject alternate name.</p>
   * @public
   */
  SanRequireEmail?: boolean | undefined;

  /**
   * <p>Include the DNS in the subject alternate name.</p>
   * @public
   */
  SanRequireDns?: boolean | undefined;

  /**
   * <p>Include the DNS as common name in the subject name.</p>
   * @public
   */
  RequireDnsAsCn?: boolean | undefined;

  /**
   * <p>Include the subject's email in the subject name.</p>
   * @public
   */
  RequireEmail?: boolean | undefined;

  /**
   * <p>Include the common name in the subject name.</p>
   * @public
   */
  RequireCommonName?: boolean | undefined;

  /**
   * <p>Include the directory path in the subject name.</p>
   * @public
   */
  RequireDirectoryPath?: boolean | undefined;
}

/**
 * <p>v4 template schema that can use either Legacy Cryptographic Providers or Key Storage
 *          Providers.</p>
 * @public
 */
export interface TemplateV4 {
  /**
   * <p>Certificate validity describes the validity and renewal periods of a certificate.</p>
   * @public
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * <p>List of templates in Active Directory that are superseded by this template.</p>
   * @public
   */
  SupersededTemplates?: string[] | undefined;

  /**
   * <p>Private key attributes allow you to specify the minimal key length, key spec, key usage,
   *          and cryptographic providers for the private key of a certificate for v4 templates. V4
   *          templates allow you to use either Key Storage Providers or Legacy Cryptographic Service
   *          Providers. You specify the cryptography provider category in private key flags.</p>
   * @public
   */
  PrivateKeyAttributes: PrivateKeyAttributesV4 | undefined;

  /**
   * <p>Private key flags for v4 templates specify the client compatibility, if the private key
   *          can be exported, if user input is required when using a private key, if an alternate
   *          signature algorithm should be used, and if certificates are renewed using the same private
   *          key.</p>
   * @public
   */
  PrivateKeyFlags: PrivateKeyFlagsV4 | undefined;

  /**
   * <p>Enrollment flags describe the enrollment settings for certificates using the existing
   *          private key and deleting expired or revoked certificates.</p>
   * @public
   */
  EnrollmentFlags: EnrollmentFlagsV4 | undefined;

  /**
   * <p>Subject name flags describe the subject name and subject alternate name that is included
   *          in a certificate.</p>
   * @public
   */
  SubjectNameFlags: SubjectNameFlagsV4 | undefined;

  /**
   * <p>General flags describe whether the template is used for computers or users and if the
   *          template can be used with autoenrollment.</p>
   * @public
   */
  GeneralFlags: GeneralFlagsV4 | undefined;

  /**
   * <p>Specifies the hash algorithm used to hash the private key. Hash algorithm can only be
   *          specified when using Key Storage Providers.</p>
   * @public
   */
  HashAlgorithm?: HashAlgorithm | undefined;

  /**
   * <p>Extensions describe the key usage extensions and application policies for a
   *          template.</p>
   * @public
   */
  Extensions: ExtensionsV4 | undefined;
}

/**
 * <p>Template configuration to define the information included in certificates. Define
 *          certificate validity and renewal periods, certificate request handling and enrollment
 *          options, key usage extensions, application policies, and cryptography settings.</p>
 * @public
 */
export type TemplateDefinition =
  | TemplateDefinition.TemplateV2Member
  | TemplateDefinition.TemplateV3Member
  | TemplateDefinition.TemplateV4Member
  | TemplateDefinition.$UnknownMember;

/**
 * @public
 */
export namespace TemplateDefinition {
  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  export interface TemplateV2Member {
    TemplateV2: TemplateV2;
    TemplateV3?: never;
    TemplateV4?: never;
    $unknown?: never;
  }

  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  export interface TemplateV3Member {
    TemplateV2?: never;
    TemplateV3: TemplateV3;
    TemplateV4?: never;
    $unknown?: never;
  }

  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  export interface TemplateV4Member {
    TemplateV2?: never;
    TemplateV3?: never;
    TemplateV4: TemplateV4;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TemplateV2?: never;
    TemplateV3?: never;
    TemplateV4?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TemplateV2: (value: TemplateV2) => T;
    TemplateV3: (value: TemplateV3) => T;
    TemplateV4: (value: TemplateV4) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * <p>Name of the template. The template name must be unique.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  Definition: TemplateDefinition | undefined;

  /**
   * <p>Idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Metadata assigned to a template consisting of a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * <p>If successful, the Amazon Resource Name (ARN) of the template.</p>
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateGroupAccessControlEntryRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   * @public
   */
  GroupSecurityIdentifier: string | undefined;

  /**
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   * @public
   */
  GroupDisplayName: string | undefined;

  /**
   * <p> Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a
   *          template.</p>
   * @public
   */
  AccessRights: AccessRights | undefined;

  /**
   * <p>Idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectoryRegistrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServicePrincipalNameRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateGroupAccessControlEntryRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   * @public
   */
  GroupSecurityIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DirectoryRegistrationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type DirectoryRegistrationStatus =
  (typeof DirectoryRegistrationStatus)[keyof typeof DirectoryRegistrationStatus];

/**
 * @public
 * @enum
 */
export const DirectoryRegistrationStatusReason = {
  DIRECTORY_ACCESS_DENIED: "DIRECTORY_ACCESS_DENIED",
  DIRECTORY_NOT_ACTIVE: "DIRECTORY_NOT_ACTIVE",
  DIRECTORY_NOT_REACHABLE: "DIRECTORY_NOT_REACHABLE",
  DIRECTORY_RESOURCE_NOT_FOUND: "DIRECTORY_RESOURCE_NOT_FOUND",
  DIRECTORY_TYPE_NOT_SUPPORTED: "DIRECTORY_TYPE_NOT_SUPPORTED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;

/**
 * @public
 */
export type DirectoryRegistrationStatusReason =
  (typeof DirectoryRegistrationStatusReason)[keyof typeof DirectoryRegistrationStatusReason];

/**
 * <p>The directory registration represents the authorization of the connector service with a
 *          directory.</p>
 * @public
 */
export interface DirectoryRegistration {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called
   *          CreateDirectoryRegistration. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the Active Directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Status of the directory registration.</p>
   * @public
   */
  Status?: DirectoryRegistrationStatus | undefined;

  /**
   * <p>Additional information about the directory registration status if the status is
   *          failed.</p>
   * @public
   */
  StatusReason?: DirectoryRegistrationStatusReason | undefined;

  /**
   * <p>The date and time that the directory registration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the directory registration was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>The directory registration represents the authorization of the connector service with
 *          the Active Directory.</p>
 * @public
 */
export interface DirectoryRegistrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the Active Directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Status of the directory registration.</p>
   * @public
   */
  Status?: DirectoryRegistrationStatus | undefined;

  /**
   * <p>Additional information about the directory registration status if the status is
   *          failed.</p>
   * @public
   */
  StatusReason?: DirectoryRegistrationStatusReason | undefined;

  /**
   * <p>The date and time that the directory registration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the directory registration was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRegistrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRegistrationResponse {
  /**
   * <p>The directory registration represents the authorization of the connector service with a
   *          directory.</p>
   * @public
   */
  DirectoryRegistration?: DirectoryRegistration | undefined;
}

/**
 * @public
 */
export interface ListDirectoryRegistrationsRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDirectoryRegistrationsResponse {
  /**
   * <p>Summary information about each directory registration you have created.</p>
   * @public
   */
  DirectoryRegistrations?: DirectoryRegistrationSummary[] | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServicePrincipalNameRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServicePrincipalNameStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ServicePrincipalNameStatus = (typeof ServicePrincipalNameStatus)[keyof typeof ServicePrincipalNameStatus];

/**
 * @public
 * @enum
 */
export const ServicePrincipalNameStatusReason = {
  DIRECTORY_ACCESS_DENIED: "DIRECTORY_ACCESS_DENIED",
  DIRECTORY_NOT_REACHABLE: "DIRECTORY_NOT_REACHABLE",
  DIRECTORY_RESOURCE_NOT_FOUND: "DIRECTORY_RESOURCE_NOT_FOUND",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  SPN_EXISTS_ON_DIFFERENT_AD_OBJECT: "SPN_EXISTS_ON_DIFFERENT_AD_OBJECT",
  SPN_LIMIT_EXCEEDED: "SPN_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type ServicePrincipalNameStatusReason =
  (typeof ServicePrincipalNameStatusReason)[keyof typeof ServicePrincipalNameStatusReason];

/**
 * <p>The service principal name that the connector uses to authenticate with Active Directory.</p>
 * @public
 */
export interface ServicePrincipalName {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector.html</a>.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The status of a service principal name.</p>
   * @public
   */
  Status?: ServicePrincipalNameStatus | undefined;

  /**
   * <p>Additional information for the status of a service principal name if the status is
   *          failed.</p>
   * @public
   */
  StatusReason?: ServicePrincipalNameStatusReason | undefined;

  /**
   * <p>The date and time that the service principal name was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the service principal name was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetServicePrincipalNameResponse {
  /**
   * <p>The service principal name that the connector uses to authenticate with Active Directory.</p>
   * @public
   */
  ServicePrincipalName?: ServicePrincipalName | undefined;
}

/**
 * @public
 */
export interface GetTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * <p>The revision version of the template. Template updates will increment the minor
 *          revision. Re-enrolling all certificate holders will increment the major revision.</p>
 * @public
 */
export interface TemplateRevision {
  /**
   * <p>The revision version of the template. Re-enrolling all certificate holders will
   *          increment the major revision.</p>
   * @public
   */
  MajorRevision: number | undefined;

  /**
   * <p>The revision version of the template. Re-enrolling all certificate holders will
   *          increment the major revision.</p>
   * @public
   */
  MinorRevision: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type TemplateStatus = (typeof TemplateStatus)[keyof typeof TemplateStatus];

/**
 * <p>An Active Directory compatible certificate template. Connectors issue certificates against these
 *          templates based on the requestor's Active Directory group membership. </p>
 * @public
 */
export interface Template {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  Definition?: TemplateDefinition | undefined;

  /**
   * <p>Name of the templates. Template names must be unique.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Object identifier of a template.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * <p>The template schema version. Template schema versions can be v2, v3, or v4. The template
   *          configuration options change based on the template schema version.</p>
   * @public
   */
  PolicySchema?: number | undefined;

  /**
   * <p>Status of the template. Status can be creating, active, deleting, or failed.</p>
   * @public
   */
  Status?: TemplateStatus | undefined;

  /**
   * <p>The version of the template. Template updates will increment the minor revision.
   *          Re-enrolling all certificate holders will increment the major revision.</p>
   * @public
   */
  Revision?: TemplateRevision | undefined;

  /**
   * <p>The date and time that the template was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the template was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * <p>A certificate template that the connector uses to issue certificates from a private
   *          CA.</p>
   * @public
   */
  Template?: Template | undefined;
}

/**
 * @public
 */
export interface GetTemplateGroupAccessControlEntryRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   * @public
   */
  GroupSecurityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateGroupAccessControlEntryResponse {
  /**
   * <p>An access control entry allows or denies an Active Directory group from enrolling and/or
   *          autoenrolling with a template.</p>
   * @public
   */
  AccessControlEntry?: AccessControlEntry | undefined;
}

/**
 * @public
 */
export interface ListServicePrincipalNamesRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * <p>The service principal name that the connector uses to authenticate with Active Directory.</p>
 * @public
 */
export interface ServicePrincipalNameSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   * @public
   */
  DirectoryRegistrationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The status of a service principal name.</p>
   * @public
   */
  Status?: ServicePrincipalNameStatus | undefined;

  /**
   * <p>Additional information for the status of a service principal name if the status is
   *          failed.</p>
   * @public
   */
  StatusReason?: ServicePrincipalNameStatusReason | undefined;

  /**
   * <p>The date and time that the service principal name was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Time when the service principal name was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServicePrincipalNamesResponse {
  /**
   * <p>The service principal name, if any, that the connector uses to authenticate with
   *          Active Directory.</p>
   * @public
   */
  ServicePrincipalNames?: ServicePrincipalNameSummary[] | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you created the resource. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags, if any, that are associated with your resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTemplateGroupAccessControlEntriesRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateGroupAccessControlEntriesResponse {
  /**
   * <p>An access control entry grants or denies permission to an Active Directory group to enroll
   *          certificates for a template.</p>
   * @public
   */
  AccessControlEntries?: AccessControlEntrySummary[] | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * <p>An Active Directory compatible certificate template. Connectors issue certificates against these
 *          templates based on the requestor's Active Directory group membership.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  Definition?: TemplateDefinition | undefined;

  /**
   * <p>Name of the template. The template name must be unique.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Object identifier of a template.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * <p>The template schema version. Template schema versions can be v2, v3, or v4. The template
   *          configuration options change based on the template schema version.</p>
   * @public
   */
  PolicySchema?: number | undefined;

  /**
   * <p>Status of the template. Status can be creating, active, deleting, or failed.</p>
   * @public
   */
  Status?: TemplateStatus | undefined;

  /**
   * <p>The revision version of the template. Template updates will increment the minor
   *          revision. Re-enrolling all certificate holders will increment the major revision.</p>
   * @public
   */
  Revision?: TemplateRevision | undefined;

  /**
   * <p>The date and time that the template was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time that the template was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * <p>Custom configuration templates used when issuing a certificate. </p>
   * @public
   */
  Templates?: TemplateSummary[] | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you created the resource. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Metadata assigned to a directory registration consisting of a key-value pair.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateGroupAccessControlEntryRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   * @public
   */
  GroupSecurityIdentifier: string | undefined;

  /**
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   * @public
   */
  GroupDisplayName?: string | undefined;

  /**
   * <p>Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a
   *          template.</p>
   * @public
   */
  AccessRights?: AccessRights | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   * @public
   */
  Definition?: TemplateDefinition | undefined;

  /**
   * <p>This setting allows the major version of a template to be increased automatically. All
   *          members of Active Directory groups that are allowed to enroll with a template will receive a new
   *          certificate issued using that template.</p>
   * @public
   */
  ReenrollAllCertificateHolders?: boolean | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you created the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies a list of tag keys that you want to remove from the specified
   *          resources.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

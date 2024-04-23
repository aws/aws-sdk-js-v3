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
 * @public
 * <p> Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a
 *          template.</p>
 */
export interface AccessRights {
  /**
   * @public
   * <p>Allow or deny an Active Directory group from enrolling certificates issued against a
   *          template.</p>
   */
  Enroll?: AccessRight;

  /**
   * @public
   * <p>Allow or deny an Active Directory group from autoenrolling certificates issued against a template.
   *          The Active Directory group must be allowed to enroll to allow autoenrollment</p>
   */
  AutoEnroll?: AccessRight;
}

/**
 * @public
 * <p> An access control entry allows or denies Active Directory groups based on their security
 *          identifiers (SIDs) from enrolling and/or autoenrolling with the template.</p>
 */
export interface AccessControlEntry {
  /**
   * @public
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   */
  GroupDisplayName?: string;

  /**
   * @public
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   */
  GroupSecurityIdentifier?: string;

  /**
   * @public
   * <p>Permissions to allow or deny an Active Directory group to enroll or autoenroll certificates issued
   *          against a template.</p>
   */
  AccessRights?: AccessRights;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn?: string;

  /**
   * @public
   * <p>The date and time that the Access Control Entry was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the Access Control Entry was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>Summary of group access control entries that allow or deny Active Directory groups based on their
 *          security identifiers (SIDs) from enrolling and/or autofenrolling with the template.</p>
 */
export interface AccessControlEntrySummary {
  /**
   * @public
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   */
  GroupDisplayName?: string;

  /**
   * @public
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   */
  GroupSecurityIdentifier?: string;

  /**
   * @public
   * <p>Allow or deny an Active Directory group from enrolling and autoenrolling certificates issued against
   *          a template.</p>
   */
  AccessRights?: AccessRights;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>. </p>
   */
  TemplateArn?: string;

  /**
   * @public
   * <p>The date and time that the Access Control Entry was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the Access Control Entry was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>You can receive this error if you attempt to create a resource share when you don't have
 *          the required permissions. This can be caused by insufficient permissions in policies
 *          attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *          because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *          that affects your Amazon Web Services account. </p>
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
 * @public
 * <p>Application policies describe what the certificate can be used for.</p>
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
   * @public
   * <p>The type of application policy</p>
   */
  export interface PolicyTypeMember {
    PolicyType: ApplicationPolicyType;
    PolicyObjectIdentifier?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The object identifier (OID) of an application policy.</p>
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

  export interface Visitor<T> {
    PolicyType: (value: ApplicationPolicyType) => T;
    PolicyObjectIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ApplicationPolicy, visitor: Visitor<T>): T => {
    if (value.PolicyType !== undefined) return visitor.PolicyType(value.PolicyType);
    if (value.PolicyObjectIdentifier !== undefined) return visitor.PolicyObjectIdentifier(value.PolicyObjectIdentifier);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Application policies describe what the certificate can be used for.</p>
 */
export interface ApplicationPolicies {
  /**
   * @public
   * <p>Marks the application policy extension as critical.</p>
   */
  Critical?: boolean;

  /**
   * @public
   * <p>Application policies describe what the certificate can be used for.</p>
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
 * @public
 * <p>Information describing the end of the validity period of the certificate. This parameter
 *          sets the “Not After” date for the certificate. Certificate validity is the period of time
 *          during which a certificate is valid. Validity can be expressed as an explicit date and time
 *          when the certificate expires, or as a span of time after issuance, stated in hours, days,
 *          months, or years. For more information, see Validity in RFC 5280. This value is unaffected
 *          when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the
 *          future, the certificate will expire 20 days from issuance time regardless of the
 *          ValidityNotBefore value. </p>
 */
export interface ValidityPeriod {
  /**
   * @public
   * <p>The unit of time. You can select hours, days, weeks, months, and years.</p>
   */
  PeriodType: ValidityPeriodType | undefined;

  /**
   * @public
   * <p>The numeric value for the validity period.</p>
   */
  Period: number | undefined;
}

/**
 * @public
 * <p>Information describing the end of the validity period of the certificate. This parameter
 *          sets the “Not After” date for the certificate. Certificate validity is the period of time
 *          during which a certificate is valid. Validity can be expressed as an explicit date and time
 *          when the certificate expires, or as a span of time after issuance, stated in days, months,
 *          or years. For more information, see Validity in RFC 5280. This value is unaffected when
 *          ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the
 *          future, the certificate will expire 20 days from issuance time regardless of the
 *          ValidityNotBefore value.</p>
 */
export interface CertificateValidity {
  /**
   * @public
   * <p>Information describing the end of the validity period of the certificate. This parameter
   *          sets the “Not After” date for the certificate. Certificate validity is the period of time
   *          during which a certificate is valid. Validity can be expressed as an explicit date and time
   *          when the certificate expires, or as a span of time after issuance, stated in days, months,
   *          or years. For more information, see Validity in RFC 5280. This value is unaffected when
   *          ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the
   *          future, the certificate will expire 20 days from issuance time regardless of the
   *          ValidityNotBefore value.</p>
   */
  ValidityPeriod: ValidityPeriod | undefined;

  /**
   * @public
   * <p>Renewal period is the period of time before certificate expiration when a new
   *          certificate will be requested.</p>
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
 * @public
 * <p>This request cannot be completed for one of the following reasons because the requested
 *          resource was being concurrently modified by another request.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The identifier of the Amazon Web Services resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The resource type, which can be one of <code>Connector</code>, <code>Template</code>, <code>TemplateGroupAccessControlEntry</code>, <code>ServicePrincipalName</code>, or <code>DirectoryRegistration</code>.</p>
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
  DIRECTORY_ACCESS_DENIED: "DIRECTORY_ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
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
 * <p>Information about your VPC and security groups used with the connector.</p>
 */
export interface VpcInformation {
  /**
   * @public
   * <p>The security groups used with the connector. You can use a maximum of 4 security groups
   *          with a connector.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 * <p>Amazon Web Services Private CA Connector for Active Directory is a service that links your Active Directory with Amazon Web Services Private CA. The connector brokers the
 *          exchange of certificates from Amazon Web Services Private CA to domain-joined users and machines managed with
 *          Active Directory.</p>
 */
export interface Connector {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate authority being used. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * @public
   * <p>Certificate enrollment endpoint for Active Directory domain-joined objects reach out to when
   *          requesting certificates.</p>
   */
  CertificateEnrollmentPolicyServerEndpoint?: string;

  /**
   * @public
   * <p>The identifier of the Active Directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Information of the VPC and security group(s) used with the connector.</p>
   */
  VpcInformation?: VpcInformation;

  /**
   * @public
   * <p>Status of the connector. Status can be creating, active, deleting, or failed.</p>
   */
  Status?: ConnectorStatus;

  /**
   * @public
   * <p>Additional information about the connector status if the status is failed.</p>
   */
  StatusReason?: ConnectorStatusReason;

  /**
   * @public
   * <p>The date and time that the connector was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the connector was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>Summary description of the Amazon Web Services Private CA AD connectors belonging to an Amazon Web Services
 *          account.</p>
 */
export interface ConnectorSummary {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate authority being used.</p>
   */
  CertificateAuthorityArn?: string;

  /**
   * @public
   * <p>Certificate enrollment endpoint for Active Directory domain-joined objects to request
   *          certificates.</p>
   */
  CertificateEnrollmentPolicyServerEndpoint?: string;

  /**
   * @public
   * <p>The identifier of the Active Directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Information of the VPC and security group(s) used with the connector.</p>
   */
  VpcInformation?: VpcInformation;

  /**
   * @public
   * <p>Status of the connector. Status can be creating, active, deleting, or failed.</p>
   */
  Status?: ConnectorStatus;

  /**
   * @public
   * <p>Additional information about the connector status if the status is failed.</p>
   */
  StatusReason?: ConnectorStatusReason;

  /**
   * @public
   * <p>The date and time that the connector was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the connector was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * @public
   * <p>The identifier of the Active Directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the certificate authority being used.</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * @public
   * <p>Security group IDs that describe the inbound and outbound rules.</p>
   */
  VpcInformation: VpcInformation | undefined;

  /**
   * @public
   * <p>Idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Metadata assigned to a connector consisting of a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * @public
   * <p>If successful, the Amazon Resource Name (ARN) of the connector for Active Directory.</p>
   */
  ConnectorArn?: string;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception or failure with
 *          an internal server. </p>
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
 * @public
 * <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The identifier of the Amazon Web Services resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The resource type, which can be one of <code>Connector</code>, <code>Template</code>, <code>TemplateGroupAccessControlEntry</code>, <code>ServicePrincipalName</code>, or <code>DirectoryRegistration</code>.</p>
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
 * @public
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The identifier of the Amazon Web Services resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The resource type, which can be one of <code>Connector</code>, <code>Template</code>, <code>TemplateGroupAccessControlEntry</code>, <code>ServicePrincipalName</code>, or <code>DirectoryRegistration</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Identifies the originating service.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>The code associated with the service quota.</p>
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
 * @public
 * <p>The limit on the number of requests per second was exceeded. </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message: string | undefined;
  /**
   * @public
   * <p>Identifies the originating service.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>The code associated with the quota.</p>
   */
  QuotaCode?: string;
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
 * @public
 * <p>An input validation error occurred. For example, invalid characters in a template name,
 *          or if a pagination token is invalid. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The reason for the validation error. This won't be return for every
   *          validation exception.</p>
   */
  Reason?: ValidationExceptionReason;
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
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * @public
   * <p>A structure that contains information about your connector.</p>
   */
  Connector?: Connector;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * @public
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * @public
   * <p>Summary information about each connector you have created.</p>
   */
  Connectors?: ConnectorSummary[];

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the NextToken parameter from the
   *          response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface CreateDirectoryRegistrationRequest {
  /**
   * @public
   * <p> The identifier of the Active Directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>Idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Metadata assigned to a directory registration consisting of a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDirectoryRegistrationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn?: string;
}

/**
 * @public
 */
export interface CreateServicePrincipalNameRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn: string | undefined;

  /**
   * @public
   * <p>Idempotency token.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>Template configurations for v2 template schema.</p>
 */
export interface EnrollmentFlagsV2 {
  /**
   * @public
   * <p>Include symmetric algorithms allowed by the subject.</p>
   */
  IncludeSymmetricAlgorithms?: boolean;

  /**
   * @public
   * <p>Require user interaction when the subject is enrolled and the private key associated
   *          with the certificate is used.</p>
   */
  UserInteractionRequired?: boolean;

  /**
   * @public
   * <p>Delete expired or revoked certificates instead of archiving them.</p>
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean;

  /**
   * @public
   * <p>This flag instructs the CA to not include the security extension
   *          szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections
   *          2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows
   *          Kerberos elevation-of-privilege vulnerability.</p>
   */
  NoSecurityExtension?: boolean;

  /**
   * @public
   * <p>Allow renewal using the same key.</p>
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}

/**
 * @public
 * <p>The key usage flags represent the purpose (e.g., encipherment, signature) of the key
 *          contained in the certificate.</p>
 */
export interface KeyUsageFlags {
  /**
   * @public
   * <p>The digitalSignature is asserted when the subject public key is used for verifying
   *          digital signatures.</p>
   */
  DigitalSignature?: boolean;

  /**
   * @public
   * <p>NonRepudiation is asserted when the subject public key is used to verify digital
   *          signatures.</p>
   */
  NonRepudiation?: boolean;

  /**
   * @public
   * <p>KeyEncipherment is asserted when the subject public key is used for enciphering private
   *          or secret keys, i.e., for key transport.</p>
   */
  KeyEncipherment?: boolean;

  /**
   * @public
   * <p>DataEncipherment is asserted when the subject public key is used for directly
   *          enciphering raw user data without the use of an intermediate symmetric cipher.</p>
   */
  DataEncipherment?: boolean;

  /**
   * @public
   * <p>KeyAgreement is asserted when the subject public key is used for key agreement.</p>
   */
  KeyAgreement?: boolean;
}

/**
 * @public
 * <p>The key usage extension defines the purpose (e.g., encipherment, signature) of the key
 *          contained in the certificate.</p>
 */
export interface KeyUsage {
  /**
   * @public
   * <p>Sets the key usage extension to critical.</p>
   */
  Critical?: boolean;

  /**
   * @public
   * <p>The key usage flags represent the purpose (e.g., encipherment, signature) of the key
   *          contained in the certificate.</p>
   */
  UsageFlags: KeyUsageFlags | undefined;
}

/**
 * @public
 * <p>Certificate extensions for v2 template schema</p>
 */
export interface ExtensionsV2 {
  /**
   * @public
   * <p>The key usage extension defines the purpose (e.g., encipherment, signature, certificate
   *          signing) of the key contained in the certificate.</p>
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * @public
   * <p>Application policies specify what the certificate is used for and its purpose. </p>
   */
  ApplicationPolicies?: ApplicationPolicies;
}

/**
 * @public
 * <p>General flags for v2 template schema that defines if the template is for a machine or a
 *          user and if the template can be issued using autoenrollment.</p>
 */
export interface GeneralFlagsV2 {
  /**
   * @public
   * <p>Allows certificate issuance using autoenrollment. Set to TRUE to allow
   *          autoenrollment.</p>
   */
  AutoEnrollment?: boolean;

  /**
   * @public
   * <p>Defines if the template is for machines or users. Set to TRUE if the template is for
   *          machines. Set to FALSE if the template is for users.</p>
   */
  MachineType?: boolean;
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
 * @public
 * <p>Defines the attributes of the private key.</p>
 */
export interface PrivateKeyAttributesV2 {
  /**
   * @public
   * <p>Set the minimum key length of the private key.</p>
   */
  MinimalKeyLength: number | undefined;

  /**
   * @public
   * <p>Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE"
   *          value.</p>
   */
  KeySpec: KeySpec | undefined;

  /**
   * @public
   * <p>Defines the cryptographic providers used to generate the private key.</p>
   */
  CryptoProviders?: string[];
}

/**
 * @public
 * <p>Private key flags for v2 templates specify the client compatibility, if the private key
 *          can be exported, and if user input is required when using a private key.</p>
 */
export interface PrivateKeyFlagsV2 {
  /**
   * @public
   * <p>Allows the private key to be exported.</p>
   */
  ExportableKey?: boolean;

  /**
   * @public
   * <p>Require user input when using the private key for enrollment.</p>
   */
  StrongKeyProtectionRequired?: boolean;

  /**
   * @public
   * <p>Defines the minimum client compatibility.</p>
   */
  ClientVersion: ClientCompatibilityV2 | undefined;
}

/**
 * @public
 * <p>Information to include in the subject name and alternate subject name of the
 *          certificate. The subject name can be common name, directory path, DNS as common name, or
 *          left blank. You can optionally include email to the subject name for user templates. If you
 *          leave the subject name blank then you must set a subject alternate name. The subject
 *          alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email,
 *          service principal name (SPN), and user principal name (UPN). You can leave the SAN blank.
 *          If you leave the SAN blank, then you must set a subject name.</p>
 */
export interface SubjectNameFlagsV2 {
  /**
   * @public
   * <p>Include the domain DNS in the subject alternate name.</p>
   */
  SanRequireDomainDns?: boolean;

  /**
   * @public
   * <p>Include the service principal name (SPN) in the subject alternate name.</p>
   */
  SanRequireSpn?: boolean;

  /**
   * @public
   * <p>Include the globally unique identifier (GUID) in the subject alternate name.</p>
   */
  SanRequireDirectoryGuid?: boolean;

  /**
   * @public
   * <p>Include the user principal name (UPN) in the subject alternate name.</p>
   */
  SanRequireUpn?: boolean;

  /**
   * @public
   * <p>Include the subject's email in the subject alternate name.</p>
   */
  SanRequireEmail?: boolean;

  /**
   * @public
   * <p>Include the DNS in the subject alternate name.</p>
   */
  SanRequireDns?: boolean;

  /**
   * @public
   * <p>Include the DNS as common name in the subject name.</p>
   */
  RequireDnsAsCn?: boolean;

  /**
   * @public
   * <p>Include the subject's email in the subject name.</p>
   */
  RequireEmail?: boolean;

  /**
   * @public
   * <p>Include the common name in the subject name.</p>
   */
  RequireCommonName?: boolean;

  /**
   * @public
   * <p>Include the directory path in the subject name.</p>
   */
  RequireDirectoryPath?: boolean;
}

/**
 * @public
 * <p>v2 template schema that uses Legacy Cryptographic Providers.</p>
 */
export interface TemplateV2 {
  /**
   * @public
   * <p>Certificate validity describes the validity and renewal periods of a certificate.</p>
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * @public
   * <p>List of templates in Active Directory that are superseded by this template.</p>
   */
  SupersededTemplates?: string[];

  /**
   * @public
   * <p>Private key attributes allow you to specify the minimal key length, key spec, and
   *          cryptographic providers for the private key of a certificate for v2 templates. V2 templates
   *          allow you to use Legacy Cryptographic Service Providers.</p>
   */
  PrivateKeyAttributes: PrivateKeyAttributesV2 | undefined;

  /**
   * @public
   * <p>Private key flags for v2 templates specify the client compatibility, if the private key
   *          can be exported, and if user input is required when using a private key. </p>
   */
  PrivateKeyFlags: PrivateKeyFlagsV2 | undefined;

  /**
   * @public
   * <p>Enrollment flags describe the enrollment settings for certificates such as using the
   *          existing private key and deleting expired or revoked certificates.</p>
   */
  EnrollmentFlags: EnrollmentFlagsV2 | undefined;

  /**
   * @public
   * <p>Subject name flags describe the subject name and subject alternate name that is included
   *          in a certificate.</p>
   */
  SubjectNameFlags: SubjectNameFlagsV2 | undefined;

  /**
   * @public
   * <p>General flags describe whether the template is used for computers or users and if the
   *          template can be used with autoenrollment.</p>
   */
  GeneralFlags: GeneralFlagsV2 | undefined;

  /**
   * @public
   * <p>Extensions describe the key usage extensions and application policies for a
   *          template.</p>
   */
  Extensions: ExtensionsV2 | undefined;
}

/**
 * @public
 * <p>Template configurations for v3 template schema.</p>
 */
export interface EnrollmentFlagsV3 {
  /**
   * @public
   * <p>Include symmetric algorithms allowed by the subject.</p>
   */
  IncludeSymmetricAlgorithms?: boolean;

  /**
   * @public
   * <p>Require user interaction when the subject is enrolled and the private key associated
   *          with the certificate is used.</p>
   */
  UserInteractionRequired?: boolean;

  /**
   * @public
   * <p>Delete expired or revoked certificates instead of archiving them.</p>
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean;

  /**
   * @public
   * <p>This flag instructs the CA to not include the security extension
   *          szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections
   *          2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows
   *          Kerberos elevation-of-privilege vulnerability.</p>
   */
  NoSecurityExtension?: boolean;

  /**
   * @public
   * <p>Allow renewal using the same key.</p>
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}

/**
 * @public
 * <p>Certificate extensions for v3 template schema</p>
 */
export interface ExtensionsV3 {
  /**
   * @public
   * <p>The key usage extension defines the purpose (e.g., encipherment, signature, certificate
   *          signing) of the key contained in the certificate.</p>
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * @public
   * <p>Application policies specify what the certificate is used for and its purpose.</p>
   */
  ApplicationPolicies?: ApplicationPolicies;
}

/**
 * @public
 * <p>General flags for v3 template schema that defines if the template is for a machine or a
 *          user and if the template can be issued using autoenrollment.</p>
 */
export interface GeneralFlagsV3 {
  /**
   * @public
   * <p>Allows certificate issuance using autoenrollment. Set to TRUE to allow
   *          autoenrollment.</p>
   */
  AutoEnrollment?: boolean;

  /**
   * @public
   * <p>Defines if the template is for machines or users. Set to TRUE if the template is for
   *          machines. Set to FALSE if the template is for users</p>
   */
  MachineType?: boolean;
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
 * @public
 * <p>Specifies key usage.</p>
 */
export interface KeyUsagePropertyFlags {
  /**
   * @public
   * <p>Allows key for encryption and decryption.</p>
   */
  Decrypt?: boolean;

  /**
   * @public
   * <p>Allows key exchange without encryption.</p>
   */
  KeyAgreement?: boolean;

  /**
   * @public
   * <p>Allow key use for digital signature.</p>
   */
  Sign?: boolean;
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
 * @public
 * <p>The key usage property defines the purpose of the private key contained in the
 *          certificate. You can specify specific purposes using property flags or all by using
 *          property type ALL.</p>
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
   * @public
   * <p>You can specify all key usages using property type ALL. You can use property type or
   *          property flags but not both. </p>
   */
  export interface PropertyTypeMember {
    PropertyType: KeyUsagePropertyType;
    PropertyFlags?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>You can specify key usage for encryption, key agreement, and signature. You can use
   *          property flags or property type but not both. </p>
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

  export interface Visitor<T> {
    PropertyType: (value: KeyUsagePropertyType) => T;
    PropertyFlags: (value: KeyUsagePropertyFlags) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: KeyUsageProperty, visitor: Visitor<T>): T => {
    if (value.PropertyType !== undefined) return visitor.PropertyType(value.PropertyType);
    if (value.PropertyFlags !== undefined) return visitor.PropertyFlags(value.PropertyFlags);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Defines the attributes of the private key.</p>
 */
export interface PrivateKeyAttributesV3 {
  /**
   * @public
   * <p>Set the minimum key length of the private key.</p>
   */
  MinimalKeyLength: number | undefined;

  /**
   * @public
   * <p>Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE"
   *          value.</p>
   */
  KeySpec: KeySpec | undefined;

  /**
   * @public
   * <p>Defines the cryptographic providers used to generate the private key.</p>
   */
  CryptoProviders?: string[];

  /**
   * @public
   * <p>The key usage property defines the purpose of the private key contained in the
   *          certificate. You can specify specific purposes using property flags or all by using
   *          property type ALL.</p>
   */
  KeyUsageProperty: KeyUsageProperty | undefined;

  /**
   * @public
   * <p>Defines the algorithm used to generate the private key.</p>
   */
  Algorithm: PrivateKeyAlgorithm | undefined;
}

/**
 * @public
 * <p>Private key flags for v3 templates specify the client compatibility, if the private key
 *          can be exported, if user input is required when using a private key, and if an alternate
 *          signature algorithm should be used.</p>
 */
export interface PrivateKeyFlagsV3 {
  /**
   * @public
   * <p>Allows the private key to be exported.</p>
   */
  ExportableKey?: boolean;

  /**
   * @public
   * <p>Requirer user input when using the private key for enrollment.</p>
   */
  StrongKeyProtectionRequired?: boolean;

  /**
   * @public
   * <p>Reguires the PKCS #1 v2.1 signature format for certificates. You should verify that your
   *          CA, objects, and applications can accept this signature format.</p>
   */
  RequireAlternateSignatureAlgorithm?: boolean;

  /**
   * @public
   * <p>Defines the minimum client compatibility.</p>
   */
  ClientVersion: ClientCompatibilityV3 | undefined;
}

/**
 * @public
 * <p>Information to include in the subject name and alternate subject name of the
 *          certificate. The subject name can be common name, directory path, DNS as common name, or
 *          left blank. You can optionally include email to the subject name for user templates. If you
 *          leave the subject name blank then you must set a subject alternate name. The subject
 *          alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email,
 *          service principal name (SPN), and user principal name (UPN). You can leave the SAN blank.
 *          If you leave the SAN blank, then you must set a subject name.</p>
 */
export interface SubjectNameFlagsV3 {
  /**
   * @public
   * <p>Include the domain DNS in the subject alternate name.</p>
   */
  SanRequireDomainDns?: boolean;

  /**
   * @public
   * <p>Include the service principal name (SPN) in the subject alternate name.</p>
   */
  SanRequireSpn?: boolean;

  /**
   * @public
   * <p>Include the globally unique identifier (GUID) in the subject alternate name.</p>
   */
  SanRequireDirectoryGuid?: boolean;

  /**
   * @public
   * <p>Include the user principal name (UPN) in the subject alternate name.</p>
   */
  SanRequireUpn?: boolean;

  /**
   * @public
   * <p>Include the subject's email in the subject alternate name.</p>
   */
  SanRequireEmail?: boolean;

  /**
   * @public
   * <p>Include the DNS in the subject alternate name.</p>
   */
  SanRequireDns?: boolean;

  /**
   * @public
   * <p>Include the DNS as common name in the subject name.</p>
   */
  RequireDnsAsCn?: boolean;

  /**
   * @public
   * <p>Include the subject's email in the subject name.</p>
   */
  RequireEmail?: boolean;

  /**
   * @public
   * <p>Include the common name in the subject name. </p>
   */
  RequireCommonName?: boolean;

  /**
   * @public
   * <p>Include the directory path in the subject name.</p>
   */
  RequireDirectoryPath?: boolean;
}

/**
 * @public
 * <p>v3 template schema that uses Key Storage Providers.</p>
 */
export interface TemplateV3 {
  /**
   * @public
   * <p>Certificate validity describes the validity and renewal periods of a certificate.</p>
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * @public
   * <p>List of templates in Active Directory that are superseded by this template.</p>
   */
  SupersededTemplates?: string[];

  /**
   * @public
   * <p>Private key attributes allow you to specify the algorithm, minimal key length, key spec,
   *          key usage, and cryptographic providers for the private key of a certificate for v3
   *          templates. V3 templates allow you to use Key Storage Providers.</p>
   */
  PrivateKeyAttributes: PrivateKeyAttributesV3 | undefined;

  /**
   * @public
   * <p>Private key flags for v3 templates specify the client compatibility, if the private key
   *          can be exported, if user input is required when using a private key, and if an alternate
   *          signature algorithm should be used.</p>
   */
  PrivateKeyFlags: PrivateKeyFlagsV3 | undefined;

  /**
   * @public
   * <p>Enrollment flags describe the enrollment settings for certificates such as using the
   *          existing private key and deleting expired or revoked certificates.</p>
   */
  EnrollmentFlags: EnrollmentFlagsV3 | undefined;

  /**
   * @public
   * <p>Subject name flags describe the subject name and subject alternate name that is included
   *          in a certificate.</p>
   */
  SubjectNameFlags: SubjectNameFlagsV3 | undefined;

  /**
   * @public
   * <p>General flags describe whether the template is used for computers or users and if the
   *          template can be used with autoenrollment.</p>
   */
  GeneralFlags: GeneralFlagsV3 | undefined;

  /**
   * @public
   * <p>Specifies the hash algorithm used to hash the private key.</p>
   */
  HashAlgorithm: HashAlgorithm | undefined;

  /**
   * @public
   * <p>Extensions describe the key usage extensions and application policies for a
   *          template.</p>
   */
  Extensions: ExtensionsV3 | undefined;
}

/**
 * @public
 * <p>Template configurations for v4 template schema.</p>
 */
export interface EnrollmentFlagsV4 {
  /**
   * @public
   * <p>Include symmetric algorithms allowed by the subject.</p>
   */
  IncludeSymmetricAlgorithms?: boolean;

  /**
   * @public
   * <p>Require user interaction when the subject is enrolled and the private key associated
   *          with the certificate is used.</p>
   */
  UserInteractionRequired?: boolean;

  /**
   * @public
   * <p>Delete expired or revoked certificates instead of archiving them.</p>
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean;

  /**
   * @public
   * <p>This flag instructs the CA to not include the security extension
   *          szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections
   *          2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows
   *          Kerberos elevation-of-privilege vulnerability.</p>
   */
  NoSecurityExtension?: boolean;

  /**
   * @public
   * <p>Allow renewal using the same key.</p>
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}

/**
 * @public
 * <p>Certificate extensions for v4 template schema</p>
 */
export interface ExtensionsV4 {
  /**
   * @public
   * <p>The key usage extension defines the purpose (e.g., encipherment, signature) of the key
   *          contained in the certificate.</p>
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * @public
   * <p>Application policies specify what the certificate is used for and its purpose.</p>
   */
  ApplicationPolicies?: ApplicationPolicies;
}

/**
 * @public
 * <p>General flags for v4 template schema that defines if the template is for a machine or a
 *          user and if the template can be issued using autoenrollment.</p>
 */
export interface GeneralFlagsV4 {
  /**
   * @public
   * <p>Allows certificate issuance using autoenrollment. Set to TRUE to allow
   *          autoenrollment.</p>
   */
  AutoEnrollment?: boolean;

  /**
   * @public
   * <p>Defines if the template is for machines or users. Set to TRUE if the template is for
   *          machines. Set to FALSE if the template is for users</p>
   */
  MachineType?: boolean;
}

/**
 * @public
 * <p>Defines the attributes of the private key.</p>
 */
export interface PrivateKeyAttributesV4 {
  /**
   * @public
   * <p>Set the minimum key length of the private key.</p>
   */
  MinimalKeyLength: number | undefined;

  /**
   * @public
   * <p>Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE"
   *          value.</p>
   */
  KeySpec: KeySpec | undefined;

  /**
   * @public
   * <p>Defines the cryptographic providers used to generate the private key.</p>
   */
  CryptoProviders?: string[];

  /**
   * @public
   * <p>The key usage property defines the purpose of the private key contained in the
   *          certificate. You can specify specific purposes using property flags or all by using
   *          property type ALL.</p>
   */
  KeyUsageProperty?: KeyUsageProperty;

  /**
   * @public
   * <p>Defines the algorithm used to generate the private key.</p>
   */
  Algorithm?: PrivateKeyAlgorithm;
}

/**
 * @public
 * <p>Private key flags for v4 templates specify the client compatibility, if the private key
 *          can be exported, if user input is required when using a private key, if an alternate
 *          signature algorithm should be used, and if certificates are renewed using the same private
 *          key.</p>
 */
export interface PrivateKeyFlagsV4 {
  /**
   * @public
   * <p>Allows the private key to be exported.</p>
   */
  ExportableKey?: boolean;

  /**
   * @public
   * <p>Require user input when using the private key for enrollment.</p>
   */
  StrongKeyProtectionRequired?: boolean;

  /**
   * @public
   * <p>Requires the PKCS #1 v2.1 signature format for certificates. You should verify that your
   *          CA, objects, and applications can accept this signature format.</p>
   */
  RequireAlternateSignatureAlgorithm?: boolean;

  /**
   * @public
   * <p>Renew certificate using the same private key.</p>
   */
  RequireSameKeyRenewal?: boolean;

  /**
   * @public
   * <p>Specifies the cryptographic service provider category used to generate private keys. Set
   *          to TRUE to use Legacy Cryptographic Service Providers and FALSE to use Key Storage
   *          Providers.</p>
   */
  UseLegacyProvider?: boolean;

  /**
   * @public
   * <p>Defines the minimum client compatibility.</p>
   */
  ClientVersion: ClientCompatibilityV4 | undefined;
}

/**
 * @public
 * <p>Information to include in the subject name and alternate subject name of the
 *          certificate. The subject name can be common name, directory path, DNS as common name, or
 *          left blank. You can optionally include email to the subject name for user templates. If you
 *          leave the subject name blank then you must set a subject alternate name. The subject
 *          alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email,
 *          service principal name (SPN), and user principal name (UPN). You can leave the SAN blank.
 *          If you leave the SAN blank, then you must set a subject name.</p>
 */
export interface SubjectNameFlagsV4 {
  /**
   * @public
   * <p>Include the domain DNS in the subject alternate name.</p>
   */
  SanRequireDomainDns?: boolean;

  /**
   * @public
   * <p>Include the service principal name (SPN) in the subject alternate name.</p>
   */
  SanRequireSpn?: boolean;

  /**
   * @public
   * <p>Include the globally unique identifier (GUID) in the subject alternate name.</p>
   */
  SanRequireDirectoryGuid?: boolean;

  /**
   * @public
   * <p>Include the user principal name (UPN) in the subject alternate name.</p>
   */
  SanRequireUpn?: boolean;

  /**
   * @public
   * <p>Include the subject's email in the subject alternate name.</p>
   */
  SanRequireEmail?: boolean;

  /**
   * @public
   * <p>Include the DNS in the subject alternate name.</p>
   */
  SanRequireDns?: boolean;

  /**
   * @public
   * <p>Include the DNS as common name in the subject name.</p>
   */
  RequireDnsAsCn?: boolean;

  /**
   * @public
   * <p>Include the subject's email in the subject name.</p>
   */
  RequireEmail?: boolean;

  /**
   * @public
   * <p>Include the common name in the subject name.</p>
   */
  RequireCommonName?: boolean;

  /**
   * @public
   * <p>Include the directory path in the subject name.</p>
   */
  RequireDirectoryPath?: boolean;
}

/**
 * @public
 * <p>v4 template schema that can use either Legacy Cryptographic Providers or Key Storage
 *          Providers.</p>
 */
export interface TemplateV4 {
  /**
   * @public
   * <p>Certificate validity describes the validity and renewal periods of a certificate.</p>
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * @public
   * <p>List of templates in Active Directory that are superseded by this template.</p>
   */
  SupersededTemplates?: string[];

  /**
   * @public
   * <p>Private key attributes allow you to specify the minimal key length, key spec, key usage,
   *          and cryptographic providers for the private key of a certificate for v4 templates. V4
   *          templates allow you to use either Key Storage Providers or Legacy Cryptographic Service
   *          Providers. You specify the cryptography provider category in private key flags.</p>
   */
  PrivateKeyAttributes: PrivateKeyAttributesV4 | undefined;

  /**
   * @public
   * <p>Private key flags for v4 templates specify the client compatibility, if the private key
   *          can be exported, if user input is required when using a private key, if an alternate
   *          signature algorithm should be used, and if certificates are renewed using the same private
   *          key.</p>
   */
  PrivateKeyFlags: PrivateKeyFlagsV4 | undefined;

  /**
   * @public
   * <p>Enrollment flags describe the enrollment settings for certificates using the existing
   *          private key and deleting expired or revoked certificates.</p>
   */
  EnrollmentFlags: EnrollmentFlagsV4 | undefined;

  /**
   * @public
   * <p>Subject name flags describe the subject name and subject alternate name that is included
   *          in a certificate.</p>
   */
  SubjectNameFlags: SubjectNameFlagsV4 | undefined;

  /**
   * @public
   * <p>General flags describe whether the template is used for computers or users and if the
   *          template can be used with autoenrollment.</p>
   */
  GeneralFlags: GeneralFlagsV4 | undefined;

  /**
   * @public
   * <p>Specifies the hash algorithm used to hash the private key. Hash algorithm can only be
   *          specified when using Key Storage Providers.</p>
   */
  HashAlgorithm?: HashAlgorithm;

  /**
   * @public
   * <p>Extensions describe the key usage extensions and application policies for a
   *          template.</p>
   */
  Extensions: ExtensionsV4 | undefined;
}

/**
 * @public
 * <p>Template configuration to define the information included in certificates. Define
 *          certificate validity and renewal periods, certificate request handling and enrollment
 *          options, key usage extensions, application policies, and cryptography settings.</p>
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
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   */
  export interface TemplateV2Member {
    TemplateV2: TemplateV2;
    TemplateV3?: never;
    TemplateV4?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   */
  export interface TemplateV3Member {
    TemplateV2?: never;
    TemplateV3: TemplateV3;
    TemplateV4?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
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

  export interface Visitor<T> {
    TemplateV2: (value: TemplateV2) => T;
    TemplateV3: (value: TemplateV3) => T;
    TemplateV4: (value: TemplateV4) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TemplateDefinition, visitor: Visitor<T>): T => {
    if (value.TemplateV2 !== undefined) return visitor.TemplateV2(value.TemplateV2);
    if (value.TemplateV3 !== undefined) return visitor.TemplateV3(value.TemplateV3);
    if (value.TemplateV4 !== undefined) return visitor.TemplateV4(value.TemplateV4);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn: string | undefined;

  /**
   * @public
   * <p>Name of the template. The template name must be unique.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   */
  Definition: TemplateDefinition | undefined;

  /**
   * @public
   * <p>Idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Metadata assigned to a template consisting of a key-value pair.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * @public
   * <p>If successful, the Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;
}

/**
 * @public
 */
export interface CreateTemplateGroupAccessControlEntryRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;

  /**
   * @public
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   */
  GroupSecurityIdentifier: string | undefined;

  /**
   * @public
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   */
  GroupDisplayName: string | undefined;

  /**
   * @public
   * <p> Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a
   *          template.</p>
   */
  AccessRights: AccessRights | undefined;

  /**
   * @public
   * <p>Idempotency token.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface DeleteDirectoryRegistrationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServicePrincipalNameRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateGroupAccessControlEntryRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;

  /**
   * @public
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
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
 * @public
 * <p>The directory registration represents the authorization of the connector service with a
 *          directory.</p>
 */
export interface DirectoryRegistration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called
   *          CreateDirectoryRegistration. </p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier of the Active Directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Status of the directory registration.</p>
   */
  Status?: DirectoryRegistrationStatus;

  /**
   * @public
   * <p>Additional information about the directory registration status if the status is
   *          failed.</p>
   */
  StatusReason?: DirectoryRegistrationStatusReason;

  /**
   * @public
   * <p>The date and time that the directory registration was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the directory registration was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>The directory registration represents the authorization of the connector service with
 *          the Active Directory.</p>
 */
export interface DirectoryRegistrationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier of the Active Directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Status of the directory registration.</p>
   */
  Status?: DirectoryRegistrationStatus;

  /**
   * @public
   * <p>Additional information about the directory registration status if the status is
   *          failed.</p>
   */
  StatusReason?: DirectoryRegistrationStatusReason;

  /**
   * @public
   * <p>The date and time that the directory registration was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the directory registration was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetDirectoryRegistrationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRegistrationResponse {
  /**
   * @public
   * <p>The directory registration represents the authorization of the connector service with a
   *          directory.</p>
   */
  DirectoryRegistration?: DirectoryRegistration;
}

/**
 * @public
 */
export interface ListDirectoryRegistrationsRequest {
  /**
   * @public
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDirectoryRegistrationsResponse {
  /**
   * @public
   * <p>Summary information about each directory registration you have created.</p>
   */
  DirectoryRegistrations?: DirectoryRegistrationSummary[];

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetServicePrincipalNameRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
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
} as const;

/**
 * @public
 */
export type ServicePrincipalNameStatusReason =
  (typeof ServicePrincipalNameStatusReason)[keyof typeof ServicePrincipalNameStatusReason];

/**
 * @public
 * <p>The service principal name that the connector uses to authenticate with Active Directory.</p>
 */
export interface ServicePrincipalName {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector.html</a>.</p>
   */
  ConnectorArn?: string;

  /**
   * @public
   * <p>The status of a service principal name.</p>
   */
  Status?: ServicePrincipalNameStatus;

  /**
   * @public
   * <p>Additional information for the status of a service principal name if the status is
   *          failed.</p>
   */
  StatusReason?: ServicePrincipalNameStatusReason;

  /**
   * @public
   * <p>The date and time that the service principal name was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the service principal name was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetServicePrincipalNameResponse {
  /**
   * @public
   * <p>The service principal name that the connector uses to authenticate with Active Directory.</p>
   */
  ServicePrincipalName?: ServicePrincipalName;
}

/**
 * @public
 */
export interface GetTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 * <p>The revision version of the template. Template updates will increment the minor
 *          revision. Re-enrolling all certificate holders will increment the major revision.</p>
 */
export interface TemplateRevision {
  /**
   * @public
   * <p>The revision version of the template. Re-enrolling all certificate holders will
   *          increment the major revision.</p>
   */
  MajorRevision: number | undefined;

  /**
   * @public
   * <p>The revision version of the template. Re-enrolling all certificate holders will
   *          increment the major revision.</p>
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
 * @public
 * <p>An Active Directory compatible certificate template. Connectors issue certificates against these
 *          templates based on the requestor's Active Directory group membership. </p>
 */
export interface Template {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn?: string;

  /**
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   */
  Definition?: TemplateDefinition;

  /**
   * @public
   * <p>Name of the templates. Template names must be unique.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Object identifier of a template.</p>
   */
  ObjectIdentifier?: string;

  /**
   * @public
   * <p>The template schema version. Template schema versions can be v2, v3, or v4. The template
   *          configuration options change based on the template schema version.</p>
   */
  PolicySchema?: number;

  /**
   * @public
   * <p>Status of the template. Status can be creating, active, deleting, or failed.</p>
   */
  Status?: TemplateStatus;

  /**
   * @public
   * <p>The version of the template. Template updates will increment the minor revision.
   *          Re-enrolling all certificate holders will increment the major revision.</p>
   */
  Revision?: TemplateRevision;

  /**
   * @public
   * <p>The date and time that the template was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the template was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * @public
   * <p>A certificate template that the connector uses to issue certificates from a private
   *          CA.</p>
   */
  Template?: Template;
}

/**
 * @public
 */
export interface GetTemplateGroupAccessControlEntryRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;

  /**
   * @public
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   */
  GroupSecurityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateGroupAccessControlEntryResponse {
  /**
   * @public
   * <p>An access control entry allows or denies an Active Directory group from enrolling and/or
   *          autoenrolling with a template.</p>
   */
  AccessControlEntry?: AccessControlEntry;
}

/**
 * @public
 */
export interface ListServicePrincipalNamesRequest {
  /**
   * @public
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 * <p>The service principal name that the connector uses to authenticate with Active Directory.</p>
 */
export interface ServicePrincipalNameSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html">CreateDirectoryRegistration</a>.</p>
   */
  DirectoryRegistrationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn?: string;

  /**
   * @public
   * <p>The status of a service principal name.</p>
   */
  Status?: ServicePrincipalNameStatus;

  /**
   * @public
   * <p>Additional information for the status of a service principal name if the status is
   *          failed.</p>
   */
  StatusReason?: ServicePrincipalNameStatusReason;

  /**
   * @public
   * <p>The date and time that the service principal name was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Time when the service principal name was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListServicePrincipalNamesResponse {
  /**
   * @public
   * <p>The service principal name, if any, that the connector uses to authenticate with
   *          Active Directory.</p>
   */
  ServicePrincipalNames?: ServicePrincipalNameSummary[];

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you created the resource. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags, if any, that are associated with your resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTemplateGroupAccessControlEntriesRequest {
  /**
   * @public
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateGroupAccessControlEntriesResponse {
  /**
   * @public
   * <p>An access control entry grants or denies permission to an Active Directory group to enroll
   *          certificates for a template.</p>
   */
  AccessControlEntries?: AccessControlEntrySummary[];

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * @public
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *          return in the response on each page. If additional items exist beyond the number you
   *          specify, the <code>NextToken</code> element is sent in the response. Use this
   *             <code>NextToken</code> value in a subsequent request to retrieve additional
   *          items.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 * <p>An Active Directory compatible certificate template. Connectors issue certificates against these
 *          templates based on the requestor's Active Directory group membership.</p>
 */
export interface TemplateSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html">CreateConnector</a>.</p>
   */
  ConnectorArn?: string;

  /**
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   */
  Definition?: TemplateDefinition;

  /**
   * @public
   * <p>Name of the template. The template name must be unique.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Object identifier of a template.</p>
   */
  ObjectIdentifier?: string;

  /**
   * @public
   * <p>The template schema version. Template schema versions can be v2, v3, or v4. The template
   *          configuration options change based on the template schema version.</p>
   */
  PolicySchema?: number;

  /**
   * @public
   * <p>Status of the template. Status can be creating, active, deleting, or failed.</p>
   */
  Status?: TemplateStatus;

  /**
   * @public
   * <p>The revision version of the template. Template updates will increment the minor
   *          revision. Re-enrolling all certificate holders will increment the major revision.</p>
   */
  Revision?: TemplateRevision;

  /**
   * @public
   * <p>The date and time that the template was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time that the template was updated.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * @public
   * <p>Custom configuration templates used when issuing a certificate. </p>
   */
  Templates?: TemplateSummary[];

  /**
   * @public
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   *          response with truncated results. Set it to the value of the <code>NextToken</code>
   *          parameter from the response you just received.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you created the resource. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Metadata assigned to a directory registration consisting of a key-value pair.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateGroupAccessControlEntryRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;

  /**
   * @public
   * <p>Security identifier (SID) of the group object from Active Directory. The SID starts with
   *          "S-".</p>
   */
  GroupSecurityIdentifier: string | undefined;

  /**
   * @public
   * <p>Name of the Active Directory group. This name does not need to match the group name in Active Directory.</p>
   */
  GroupDisplayName?: string;

  /**
   * @public
   * <p>Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a
   *          template.</p>
   */
  AccessRights?: AccessRights;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html">CreateTemplate</a>.</p>
   */
  TemplateArn: string | undefined;

  /**
   * @public
   * <p>Template configuration to define the information included in certificates. Define
   *          certificate validity and renewal periods, certificate request handling and enrollment
   *          options, key usage extensions, application policies, and cryptography settings.</p>
   */
  Definition?: TemplateDefinition;

  /**
   * @public
   * <p>This setting allows the major version of a template to be increased automatically. All
   *          members of Active Directory groups that are allowed to enroll with a template will receive a new
   *          certificate issued using that template.</p>
   */
  ReenrollAllCertificateHolders?: boolean;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that was returned when you created the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Specifies a list of tag keys that you want to remove from the specified
   *          resources.</p>
   */
  TagKeys: string[] | undefined;
}

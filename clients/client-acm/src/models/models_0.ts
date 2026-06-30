// smithy-typescript generated code
import type {
  AcmeAccountStatus,
  AcmeAuthorizationBehavior,
  AcmeContact,
  AcmeDomainValidationFailureReason,
  AcmeDomainValidationStatus,
  AcmeEndpointStatus,
  CertificateExport,
  CertificateKeyPairOrigin,
  CertificateManagedBy,
  CertificateStatus,
  CertificateTransparencyLoggingPreference,
  CertificateType,
  ComparisonOperator,
  DomainScopeOption,
  DomainStatus,
  ExtendedKeyUsageName,
  FailureReason,
  KeyAlgorithm,
  KeyUsageName,
  PrevalidationType,
  PublicKeyAlgorithm,
  RecordType,
  RenewalEligibility,
  RenewalStatus,
  RevocationReason,
  SearchCertificatesSortBy,
  SearchCertificatesSortOrder,
  SortBy,
  SortOrder,
  TimeType,
  ValidationMethod,
} from "./enums";

/**
 * <p>Contains ACM-specific metadata about a certificate.</p>
 * @public
 */
export interface AcmCertificateMetadata {
  /**
   * <p>The time at which the certificate was requested.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Indicates whether the certificate has been exported.</p>
   * @public
   */
  Exported?: boolean | undefined;

  /**
   * <p>The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * <p>Indicates whether the certificate is currently in use by an Amazon Web Services service.</p>
   * @public
   */
  InUse?: boolean | undefined;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.</p>
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * <p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * <p>The renewal status of the certificate.</p>
   * @public
   */
  RenewalStatus?: RenewalStatus | undefined;

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>Indicates whether the certificate can be exported.</p>
   * @public
   */
  ExportOption?: CertificateExport | undefined;

  /**
   * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;

  /**
   * <p>Specifies the domain validation method.</p>
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;

  /**
   * <p>The origin of the certificate's key pair.</p>
   * @public
   */
  CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;

  /**
   * <p>The ARN of the ACME endpoint used to issue the certificate.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The ACME account identifier associated with the certificate.</p>
   * @public
   */
  AcmeAccountId?: string | undefined;
}

/**
 * <p>Filters certificates by ACM metadata.</p>
 * @public
 */
export type AcmCertificateMetadataFilter =
  | AcmCertificateMetadataFilter.AcmeAccountIdMember
  | AcmCertificateMetadataFilter.AcmeEndpointArnMember
  | AcmCertificateMetadataFilter.CertificateKeyPairOriginMember
  | AcmCertificateMetadataFilter.ExportOptionMember
  | AcmCertificateMetadataFilter.ExportedMember
  | AcmCertificateMetadataFilter.InUseMember
  | AcmCertificateMetadataFilter.ManagedByMember
  | AcmCertificateMetadataFilter.RenewalStatusMember
  | AcmCertificateMetadataFilter.StatusMember
  | AcmCertificateMetadataFilter.TypeMember
  | AcmCertificateMetadataFilter.ValidationMethodMember
  | AcmCertificateMetadataFilter.$UnknownMember;

/**
 * @public
 */
export namespace AcmCertificateMetadataFilter {
  /**
   * <p>Filter by certificate status.</p>
   * @public
   */
  export interface StatusMember {
    Status: CertificateStatus;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by certificate renewal status.</p>
   * @public
   */
  export interface RenewalStatusMember {
    Status?: never;
    RenewalStatus: RenewalStatus;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by certificate type.</p>
   * @public
   */
  export interface TypeMember {
    Status?: never;
    RenewalStatus?: never;
    Type: CertificateType;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by whether the certificate is in use.</p>
   * @public
   */
  export interface InUseMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse: boolean;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by whether the certificate has been exported.</p>
   * @public
   */
  export interface ExportedMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported: boolean;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by certificate export option.</p>
   * @public
   */
  export interface ExportOptionMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption: CertificateExport;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by the entity that manages the certificate.</p>
   * @public
   */
  export interface ManagedByMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy: CertificateManagedBy;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by validation method.</p>
   * @public
   */
  export interface ValidationMethodMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod: ValidationMethod;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by certificate key pair origin.</p>
   * @public
   */
  export interface CertificateKeyPairOriginMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin: CertificateKeyPairOrigin;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by ACME endpoint ARN.</p>
   * @public
   */
  export interface AcmeEndpointArnMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn: string;
    AcmeAccountId?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by ACME account identifier.</p>
   * @public
   */
  export interface AcmeAccountIdMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Status?: never;
    RenewalStatus?: never;
    Type?: never;
    InUse?: never;
    Exported?: never;
    ExportOption?: never;
    ManagedBy?: never;
    ValidationMethod?: never;
    CertificateKeyPairOrigin?: never;
    AcmeEndpointArn?: never;
    AcmeAccountId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Status: (value: CertificateStatus) => T;
    RenewalStatus: (value: RenewalStatus) => T;
    Type: (value: CertificateType) => T;
    InUse: (value: boolean) => T;
    Exported: (value: boolean) => T;
    ExportOption: (value: CertificateExport) => T;
    ManagedBy: (value: CertificateManagedBy) => T;
    ValidationMethod: (value: ValidationMethod) => T;
    CertificateKeyPairOrigin: (value: CertificateKeyPairOrigin) => T;
    AcmeEndpointArn: (value: string) => T;
    AcmeAccountId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains detailed information about an ACME account.</p>
 * @public
 */
export interface AcmeAccount {
  /**
   * <p>The URL of the ACME account.</p>
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * <p>The thumbprint of the public key associated with the ACME account.</p>
   * @public
   */
  PublicKeyThumbprint?: string | undefined;

  /**
   * <p>The status of the ACME account.</p>
   * @public
   */
  Status?: AcmeAccountStatus | undefined;

  /**
   * <p>The time at which the ACME account was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the external account binding associated with this ACME account.</p>
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * <p>The contact information for the ACME account.</p>
   * @public
   */
  Contacts?: string[] | undefined;
}

/**
 * <p>Contains summary information about an ACME account.</p>
 * @public
 */
export interface AcmeAccountSummary {
  /**
   * <p>The URL of the ACME account.</p>
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * <p>The thumbprint of the public key associated with the ACME account.</p>
   * @public
   */
  PublicKeyThumbprint?: string | undefined;

  /**
   * <p>The status of the ACME account.</p>
   * @public
   */
  Status?: AcmeAccountStatus | undefined;

  /**
   * <p>The time at which the ACME account was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the external account binding associated with this ACME account.</p>
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * <p>The contact information for the ACME account.</p>
   * @public
   */
  Contacts?: string[] | undefined;
}

/**
 * <p>Contains details about a failure.</p>
 * @public
 */
export interface FailureDetails {
  /**
   * <p>The reason for the failure.</p>
   * @public
   */
  Reason?: AcmeDomainValidationFailureReason | undefined;

  /**
   * <p>A message describing the failure.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Specifies the scope of domain validation.</p>
 * @public
 */
export interface DomainScope {
  /**
   * <p>Whether validation applies to the exact domain.</p>
   * @public
   */
  ExactDomain?: DomainScopeOption | undefined;

  /**
   * <p>Whether validation applies to subdomains.</p>
   * @public
   */
  Subdomains?: DomainScopeOption | undefined;

  /**
   * <p>Whether validation applies to wildcard domains.</p>
   * @public
   */
  Wildcards?: DomainScopeOption | undefined;
}

/**
 * <p>Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. </p>
 * @public
 */
export interface ResourceRecord {
  /**
   * <p>The name of the DNS record to create in your domain. This is supplied by ACM.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of DNS record. Currently this can be <code>CNAME</code>.</p>
   * @public
   */
  Type: RecordType | undefined;

  /**
   * <p>The value of the CNAME record to add to your DNS database. This is supplied by ACM.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>DNS prevalidation details including the resource record for validation.</p>
 * @public
 */
export interface DnsPrevalidationDetails {
  /**
   * <p>The scope of domains covered by this prevalidation.</p>
   * @public
   */
  DomainScope?: DomainScope | undefined;

  /**
   * <p>The Route 53 hosted zone ID for DNS validation.</p>
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * <p>The DNS resource record to create for domain validation.</p>
   * @public
   */
  ResourceRecord?: ResourceRecord | undefined;
}

/**
 * <p>Contains details about the prevalidation configuration.</p>
 * @public
 */
export type PrevalidationDetails =
  | PrevalidationDetails.DnsPrevalidationMember
  | PrevalidationDetails.$UnknownMember;

/**
 * @public
 */
export namespace PrevalidationDetails {
  /**
   * <p>DNS-based prevalidation details.</p>
   * @public
   */
  export interface DnsPrevalidationMember {
    DnsPrevalidation: DnsPrevalidationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DnsPrevalidation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DnsPrevalidation: (value: DnsPrevalidationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains detailed information about an ACME domain validation.</p>
 * @public
 */
export interface AcmeDomainValidation {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME domain validation.</p>
   * @public
   */
  AcmeDomainValidationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The domain name being validated.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The type of prevalidation used.</p>
   * @public
   */
  PrevalidationType?: PrevalidationType | undefined;

  /**
   * <p>Details about the prevalidation configuration.</p>
   * @public
   */
  PrevalidationDetails?: PrevalidationDetails | undefined;

  /**
   * <p>The status of the domain validation.</p>
   * @public
   */
  Status?: AcmeDomainValidationStatus | undefined;

  /**
   * <p>Details about the failure, if the validation failed.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>The time at which the domain validation was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the domain validation was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Contains summary information about an ACME domain validation.</p>
 * @public
 */
export interface AcmeDomainValidationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME domain validation.</p>
   * @public
   */
  AcmeDomainValidationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The domain name being validated.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The type of prevalidation used.</p>
   * @public
   */
  PrevalidationType?: PrevalidationType | undefined;

  /**
   * <p>Details about the prevalidation configuration.</p>
   * @public
   */
  PrevalidationDetails?: PrevalidationDetails | undefined;

  /**
   * <p>The status of the domain validation.</p>
   * @public
   */
  Status?: AcmeDomainValidationStatus | undefined;

  /**
   * <p>Details about the failure, if the validation failed.</p>
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * <p>The time at which the domain validation was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the domain validation was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Configuration for a public certificate authority.</p>
 * @public
 */
export interface PublicCertificateAuthority {
  /**
   * <p>The key algorithms allowed for certificates issued by this certificate authority.</p>
   * @public
   */
  AllowedKeyAlgorithms?: PublicKeyAlgorithm[] | undefined;
}

/**
 * <p>Defines the certificate authority to use for an ACME endpoint.</p>
 * @public
 */
export type CertificateAuthority =
  | CertificateAuthority.PublicCertificateAuthorityMember
  | CertificateAuthority.$UnknownMember;

/**
 * @public
 */
export namespace CertificateAuthority {
  /**
   * <p>Configuration for using a public certificate authority.</p>
   * @public
   */
  export interface PublicCertificateAuthorityMember {
    PublicCertificateAuthority: PublicCertificateAuthority;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PublicCertificateAuthority?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PublicCertificateAuthority: (value: PublicCertificateAuthority) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A key-value pair that identifies or specifies metadata about an ACM resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains detailed information about an ACME endpoint.</p>
 * @public
 */
export interface AcmeEndpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The URL of the ACME endpoint.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The status of the ACME endpoint.</p>
   * @public
   */
  Status?: AcmeEndpointStatus | undefined;

  /**
   * <p>The reason the ACME endpoint failed, if applicable.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The authorization behavior of the ACME endpoint.</p>
   * @public
   */
  AuthorizationBehavior?: AcmeAuthorizationBehavior | undefined;

  /**
   * <p>Whether ACME clients must provide contact information during account registration.</p>
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * <p>The certificate authority configuration for the ACME endpoint.</p>
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;

  /**
   * <p>Tags applied to certificates issued through this ACME endpoint.</p>
   * @public
   */
  CertificateTags?: Tag[] | undefined;

  /**
   * <p>The time at which the ACME endpoint was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the ACME endpoint was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Contains summary information about an ACME endpoint.</p>
 * @public
 */
export interface AcmeEndpointSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The URL of the ACME endpoint.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The status of the ACME endpoint.</p>
   * @public
   */
  Status?: AcmeEndpointStatus | undefined;

  /**
   * <p>The reason the ACME endpoint failed, if applicable.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The authorization behavior of the ACME endpoint.</p>
   * @public
   */
  AuthorizationBehavior?: AcmeAuthorizationBehavior | undefined;

  /**
   * <p>Whether ACME clients must provide contact information during account registration.</p>
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * <p>The certificate authority configuration for the ACME endpoint.</p>
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;

  /**
   * <p>Tags applied to certificates issued through this ACME endpoint.</p>
   * @public
   */
  CertificateTags?: Tag[] | undefined;

  /**
   * <p>The time at which the ACME endpoint was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the ACME endpoint was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Contains detailed information about an ACME external account binding.</p>
 * @public
 */
export interface AcmeExternalAccountBinding {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME external account binding.</p>
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the external account binding.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The time at which the external account binding expires.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was revoked.</p>
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was last used.</p>
   * @public
   */
  LastUsedAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Contains summary information about an ACME external account binding.</p>
 * @public
 */
export interface AcmeExternalAccountBindingSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME external account binding.</p>
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the external account binding.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The time at which the external account binding expires.</p>
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was revoked.</p>
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was last used.</p>
   * @public
   */
  LastUsedAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the external account binding was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface AddTagsToCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag. The tag value is optional.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A description of why a request was throttled.</p>
 * @public
 */
export interface ThrottlingReason {
  /**
   * <p>A description of why a request was throttled.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The resource that causes the request to be throttled.</p>
   * @public
   */
  resource?: string | undefined;
}

/**
 * <p>Contains information for HTTP-based domain validation of certificates requested through Amazon CloudFront and issued by ACM. This field exists only when the certificate type is <code>AMAZON_ISSUED</code> and the validation method is <code>HTTP</code>.</p>
 * @public
 */
export interface HttpRedirect {
  /**
   * <p>The URL including the domain to be validated. The certificate authority sends <code>GET</code> requests here during validation.</p>
   * @public
   */
  RedirectFrom?: string | undefined;

  /**
   * <p>The URL hosting the validation token. <code>RedirectFrom</code> must return this content or redirect here.</p>
   * @public
   */
  RedirectTo?: string | undefined;
}

/**
 * <p>Contains information about the validation of each domain name in the certificate.</p>
 * @public
 */
export interface DomainValidation {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate. For example, <code>www.example.com</code> or <code>example.com</code>. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A list of email addresses that ACM used to send domain validation emails.</p>
   * @public
   */
  ValidationEmails?: string[] | undefined;

  /**
   * <p>The domain name that ACM used to send domain validation emails.</p>
   * @public
   */
  ValidationDomain?: string | undefined;

  /**
   * <p>The validation status of the domain name. This can be one of the following values:</p> <ul> <li> <p> <code>PENDING_VALIDATION</code> </p> </li> <li> <p> <code/>SUCCESS</p> </li> <li> <p> <code/>FAILED</p> </li> </ul>
   * @public
   */
  ValidationStatus?: DomainStatus | undefined;

  /**
   * <p>Contains the CNAME record that you add to your DNS database for domain validation. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p> <note> <p>The CNAME information that you need does not include the name of your domain. If you include your domain name in the DNS database CNAME record, validation fails. For example, if the name is <code>_a79865eb4cd1a6ab990a45779b4e0b96.yourdomain.com</code>, only <code>_a79865eb4cd1a6ab990a45779b4e0b96</code> must be used.</p> </note>
   * @public
   */
  ResourceRecord?: ResourceRecord | undefined;

  /**
   * <p>Contains information for HTTP-based domain validation of certificates requested through Amazon CloudFront and issued by ACM. This field exists only when the certificate type is <code>AMAZON_ISSUED</code> and the validation method is <code>HTTP</code>.</p>
   * @public
   */
  HttpRedirect?: HttpRedirect | undefined;

  /**
   * <p>Specifies the domain validation method.</p>
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;
}

/**
 * <p>The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. </p>
 * @public
 */
export interface ExtendedKeyUsage {
  /**
   * <p>The name of an Extended Key Usage value.</p>
   * @public
   */
  Name?: ExtendedKeyUsageName | undefined;

  /**
   * <p>An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280. </p> <ul> <li> <p> <code>1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.3 (CODE_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.8 (TIME_STAMPING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)</code> </p> </li> <li> <p> <code>1.3.6.1.5.5.7.3.7 (IPSEC_USER)</code> </p> </li> </ul>
   * @public
   */
  OID?: string | undefined;
}

/**
 * <p>The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.</p>
 * @public
 */
export interface KeyUsage {
  /**
   * <p>A string value that contains a Key Usage extension name.</p>
   * @public
   */
  Name?: KeyUsageName | undefined;
}

/**
 * <p>Structure that contains options for your certificate. You can use this structure to specify whether to export your certificate.</p> <p>Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log. For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.</p> <p>You can export public ACM certificates to use with Amazon Web Services services as well as outside Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html">Certificate Manager exportable public certificate</a>.</p>
 * @public
 */
export interface CertificateOptions {
  /**
   * <p>This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.</p>
   *
   * @deprecated (since 12th June 2026) Certificate transparency logging opt-out is no longer available.
   * @public
   */
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference | undefined;

  /**
   * <p>You can opt in to allow the export of your certificates by specifying <code>ENABLED</code>. You cannot update the value of <code>Export</code> after the the certificate is created.</p>
   * @public
   */
  Export?: CertificateExport | undefined;
}

/**
 * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
 * @public
 */
export interface RenewalSummary {
  /**
   * <p>The status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> of the certificate.</p>
   * @public
   */
  RenewalStatus: RenewalStatus | undefined;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it pertains to ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a>. This is different from the initial validation that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  DomainValidationOptions: DomainValidation[] | undefined;

  /**
   * <p>The reason that a renewal request was unsuccessful.</p>
   * @public
   */
  RenewalStatusReason?: FailureReason | undefined;

  /**
   * <p>The time at which the renewal summary was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * <p>Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. </p>
 * @public
 */
export interface CertificateDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The fully qualified domain name for the certificate, such as www.example.com or example.com.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p>
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  DomainValidationOptions?: DomainValidation[] | undefined;

  /**
   * <p>The serial number of the certificate.</p>
   * @public
   */
  Serial?: string | undefined;

  /**
   * <p>The name of the entity that is associated with the public key contained in the certificate.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>The name of the certificate authority that issued and signed the certificate.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The time at which the certificate was requested.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * <p>The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * <p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * <p>The reason the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   * @public
   */
  RevocationReason?: RevocationReason | undefined;

  /**
   * <p>The time before which the certificate is not valid.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The time after which the certificate is not valid.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   * @public
   */
  SignatureAlgorithm?: string | undefined;

  /**
   * <p>A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can be used by multiple Amazon Web Services resources. </p>
   * @public
   */
  InUseBy?: string[] | undefined;

  /**
   * <p>The reason the certificate request failed. This value exists only when the certificate status is <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed">Certificate Request Failed</a> in the <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  FailureReason?: FailureReason | undefined;

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  RenewalSummary?: RenewalSummary | undefined;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   * @public
   */
  KeyUsages?: KeyUsage[] | undefined;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsage[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the certificate. This has the following format: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.</p>
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * <p>Contains the certificate options. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.</p>
   * @public
   */
  Options?: CertificateOptions | undefined;

  /**
   * <p>The origin of the certificate's key pair.</p>
   * @public
   */
  CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;

  /**
   * <p>The ARN of the ACME endpoint used to issue the certificate.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * <p>The ACME account identifier associated with the certificate.</p>
   * @public
   */
  AcmeAccountId?: string | undefined;
}

/**
 * <p>Specifies a time range for filtering certificates.</p>
 * @public
 */
export interface TimestampRange {
  /**
   * <p>The start of the time range. This value is inclusive.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>The end of the time range. This value is inclusive.</p>
   * @public
   */
  End?: Date | undefined;
}

/**
 * <p>Filters certificates by common name.</p>
 * @public
 */
export interface CommonNameFilter {
  /**
   * <p>The value to match against.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The comparison operator to use.</p>
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;
}

/**
 * <p>Filters certificates by subject attributes.</p>
 * @public
 */
export type SubjectFilter =
  | SubjectFilter.CommonNameMember
  | SubjectFilter.$UnknownMember;

/**
 * @public
 */
export namespace SubjectFilter {
  /**
   * <p>Filter by common name in the subject.</p>
   * @public
   */
  export interface CommonNameMember {
    CommonName: CommonNameFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CommonName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CommonName: (value: CommonNameFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Filters certificates by DNS name.</p>
 * @public
 */
export interface DnsNameFilter {
  /**
   * <p>The DNS name value to match against.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The comparison operator to use.</p>
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;
}

/**
 * <p>Filters certificates by subject alternative name attributes.</p>
 * @public
 */
export type SubjectAlternativeNameFilter =
  | SubjectAlternativeNameFilter.DnsNameMember
  | SubjectAlternativeNameFilter.$UnknownMember;

/**
 * @public
 */
export namespace SubjectAlternativeNameFilter {
  /**
   * <p>Filter by DNS name in subject alternative names.</p>
   * @public
   */
  export interface DnsNameMember {
    DnsName: DnsNameFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DnsName?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DnsName: (value: DnsNameFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Filters certificates by X.509 attributes.</p>
 * @public
 */
export type X509AttributeFilter =
  | X509AttributeFilter.ExtendedKeyUsageMember
  | X509AttributeFilter.KeyAlgorithmMember
  | X509AttributeFilter.KeyUsageMember
  | X509AttributeFilter.NotAfterMember
  | X509AttributeFilter.NotBeforeMember
  | X509AttributeFilter.SerialNumberMember
  | X509AttributeFilter.SubjectMember
  | X509AttributeFilter.SubjectAlternativeNameMember
  | X509AttributeFilter.$UnknownMember;

/**
 * @public
 */
export namespace X509AttributeFilter {
  /**
   * <p>Filter by certificate subject.</p>
   * @public
   */
  export interface SubjectMember {
    Subject: SubjectFilter;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by subject alternative names.</p>
   * @public
   */
  export interface SubjectAlternativeNameMember {
    Subject?: never;
    SubjectAlternativeName: SubjectAlternativeNameFilter;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by extended key usage.</p>
   * @public
   */
  export interface ExtendedKeyUsageMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage: ExtendedKeyUsageName;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by key usage.</p>
   * @public
   */
  export interface KeyUsageMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage: KeyUsageName;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by key algorithm.</p>
   * @public
   */
  export interface KeyAlgorithmMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm: KeyAlgorithm;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by serial number.</p>
   * @public
   */
  export interface SerialNumberMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber: string;
    NotAfter?: never;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by certificate expiration date. The start date is inclusive.</p>
   * @public
   */
  export interface NotAfterMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter: TimestampRange;
    NotBefore?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by certificate validity start date. The start date is inclusive.</p>
   * @public
   */
  export interface NotBeforeMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore: TimestampRange;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Subject?: never;
    SubjectAlternativeName?: never;
    ExtendedKeyUsage?: never;
    KeyUsage?: never;
    KeyAlgorithm?: never;
    SerialNumber?: never;
    NotAfter?: never;
    NotBefore?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Subject: (value: SubjectFilter) => T;
    SubjectAlternativeName: (value: SubjectAlternativeNameFilter) => T;
    ExtendedKeyUsage: (value: ExtendedKeyUsageName) => T;
    KeyUsage: (value: KeyUsageName) => T;
    KeyAlgorithm: (value: KeyAlgorithm) => T;
    SerialNumber: (value: string) => T;
    NotAfter: (value: TimestampRange) => T;
    NotBefore: (value: TimestampRange) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Defines a filter for searching certificates by ARN, X.509 attributes, or ACM metadata.</p>
 * @public
 */
export type CertificateFilter =
  | CertificateFilter.AcmCertificateMetadataFilterMember
  | CertificateFilter.CertificateArnMember
  | CertificateFilter.X509AttributeFilterMember
  | CertificateFilter.$UnknownMember;

/**
 * @public
 */
export namespace CertificateFilter {
  /**
   * <p>Filter by certificate ARN.</p>
   * @public
   */
  export interface CertificateArnMember {
    CertificateArn: string;
    X509AttributeFilter?: never;
    AcmCertificateMetadataFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by X.509 certificate attributes.</p>
   * @public
   */
  export interface X509AttributeFilterMember {
    CertificateArn?: never;
    X509AttributeFilter: X509AttributeFilter;
    AcmCertificateMetadataFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter by ACM certificate metadata.</p>
   * @public
   */
  export interface AcmCertificateMetadataFilterMember {
    CertificateArn?: never;
    X509AttributeFilter?: never;
    AcmCertificateMetadataFilter: AcmCertificateMetadataFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CertificateArn?: never;
    X509AttributeFilter?: never;
    AcmCertificateMetadataFilter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CertificateArn: (value: string) => T;
    X509AttributeFilter: (value: X509AttributeFilter) => T;
    AcmCertificateMetadataFilter: (value: AcmCertificateMetadataFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>DNS prevalidation options for domain validation.</p>
 * @public
 */
export interface DnsPrevalidationOptions {
  /**
   * <p>The scope of domains covered by this prevalidation.</p>
   * @public
   */
  DomainScope?: DomainScope | undefined;

  /**
   * <p>The Route 53 hosted zone ID for DNS validation.</p>
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * <p>Specifies prevalidation options for domain validation.</p>
 * @public
 */
export type PrevalidationOptions =
  | PrevalidationOptions.DnsPrevalidationMember
  | PrevalidationOptions.$UnknownMember;

/**
 * @public
 */
export namespace PrevalidationOptions {
  /**
   * <p>DNS-based prevalidation options.</p>
   * @public
   */
  export interface DnsPrevalidationMember {
    DnsPrevalidation: DnsPrevalidationOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DnsPrevalidation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DnsPrevalidation: (value: DnsPrevalidationOptions) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAcmeDomainValidationRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * <p>The domain name to validate.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The prevalidation options for the domain.</p>
   * @public
   */
  PrevalidationOptions: PrevalidationOptions | undefined;

  /**
   * <p>One or more tags to associate with the domain validation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcmeDomainValidationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created domain validation.</p>
   * @public
   */
  AcmeDomainValidationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAcmeEndpointRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The authorization behavior for the ACME endpoint.</p>
   * @public
   */
  AuthorizationBehavior: AcmeAuthorizationBehavior | undefined;

  /**
   * <p>Specifies whether ACME clients must provide contact information during account registration.</p>
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * <p>The type of certificate authority to use for issuing certificates through this ACME endpoint.</p>
   * @public
   */
  CertificateAuthority: CertificateAuthority | undefined;

  /**
   * <p>One or more tags to associate with the ACME endpoint.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Tags to apply to certificates issued through this ACME endpoint.</p>
   * @public
   */
  CertificateTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcmeEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn?: string | undefined;
}

/**
 * <p>Specifies an expiration configuration.</p>
 * @public
 */
export interface Expiration {
  /**
   * <p>The numeric value of the expiration.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The time unit for the expiration value.</p>
   * @public
   */
  Type: TimeType | undefined;
}

/**
 * @public
 */
export interface CreateAcmeExternalAccountBindingRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the external account binding.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The expiration configuration for the external account binding.</p>
   * @public
   */
  Expiration?: Expiration | undefined;

  /**
   * <p>One or more tags to associate with the external account binding.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcmeExternalAccountBindingResponse {
  /**
   * <p>The created external account binding.</p>
   * @public
   */
  ExternalAccountBinding?: AcmeExternalAccountBinding | undefined;
}

/**
 * @public
 */
export interface DeleteAcmeDomainValidationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME domain validation to delete.</p>
   * @public
   */
  AcmeDomainValidationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAcmeEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint to delete.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAcmeExternalAccountBindingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME external account binding to delete.</p>
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate to be deleted. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeAccountRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * <p>The URL of the ACME account.</p>
   * @public
   */
  AccountUrl: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeAccountResponse {
  /**
   * <p>The ACME account details.</p>
   * @public
   */
  AcmeAccount?: AcmeAccount | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeDomainValidationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME domain validation.</p>
   * @public
   */
  AcmeDomainValidationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeDomainValidationResponse {
  /**
   * <p>The ACME domain validation details.</p>
   * @public
   */
  AcmeDomainValidation?: AcmeDomainValidation | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeEndpointResponse {
  /**
   * <p>The ACME endpoint details.</p>
   * @public
   */
  AcmeEndpoint?: AcmeEndpoint | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeExternalAccountBindingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME external account binding.</p>
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeExternalAccountBindingResponse {
  /**
   * <p>The external account binding details.</p>
   * @public
   */
  ExternalAccountBinding?: AcmeExternalAccountBinding | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * <p>Metadata about an ACM certificate.</p>
   * @public
   */
  Certificate?: CertificateDetail | undefined;
}

/**
 * @public
 */
export interface ExportCertificateRequest {
  /**
   * <p>An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012</code> </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Passphrase to associate with the encrypted exported private key. </p> <note> <p>When creating your passphrase, you can use any ASCII character except #, $, or %.</p> </note> <p>If you want to later decrypt the private key, you must have the passphrase. You can use the following OpenSSL command to decrypt a private key. After entering the command, you are prompted for the passphrase.</p> <p> <code>openssl rsa -in encrypted_key.pem -out decrypted_key.pem</code> </p>
   * @public
   */
  Passphrase: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ExportCertificateResponse {
  /**
   * <p>The base64 PEM-encoded certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting.</p>
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * <p>The encrypted private key associated with the public key in the certificate. The key is output in PKCS #8 format and is base64 PEM-encoded. </p>
   * @public
   */
  PrivateKey?: string | undefined;
}

/**
 * <p>Object containing expiration events options associated with an Amazon Web Services account.</p>
 * @public
 */
export interface ExpiryEventsConfiguration {
  /**
   * <p>Specifies the number of days prior to certificate expiration when ACM starts generating <code>EventBridge</code> events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.</p>
   * @public
   */
  DaysBeforeExpiry?: number | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationResponse {
  /**
   * <p>Expiration events configuration options associated with the Amazon Web Services account.</p>
   * @public
   */
  ExpiryEvents?: ExpiryEventsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetAcmeExternalAccountBindingCredentialsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME external account binding.</p>
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface GetAcmeExternalAccountBindingCredentialsResponse {
  /**
   * <p>The key identifier for the external account binding credentials.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The MAC key for the external account binding credentials.</p>
   * @public
   */
  MacKey?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateRequest {
  /**
   * <p>String that contains a certificate ARN in the following format:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateResponse {
  /**
   * <p>The ACM-issued certificate corresponding to the ARN specified as input.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>Certificates forming the requested certificate's chain of trust. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. </p>
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an imported certificate to replace. To import a new certificate, omit this field. </p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The certificate to import.</p>
   * @public
   */
  Certificate: Uint8Array | undefined;

  /**
   * <p>The private key that matches the public key in the certificate.</p>
   * @public
   */
  PrivateKey: Uint8Array | undefined;

  /**
   * <p>The PEM encoded certificate chain.</p>
   * @public
   */
  CertificateChain?: Uint8Array | undefined;

  /**
   * <p>One or more resource tags to associate with the imported certificate. </p> <p>Note: You cannot apply tags when reimporting a certificate.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the imported certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeAccountsRequest {
  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeAccountsResponse {
  /**
   * <p>The list of ACME accounts.</p>
   * @public
   */
  AcmeAccounts?: AcmeAccountSummary[] | undefined;

  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeDomainValidationsRequest {
  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeDomainValidationsResponse {
  /**
   * <p>The list of domain validations.</p>
   * @public
   */
  AcmeDomainValidations?: AcmeDomainValidationSummary[] | undefined;

  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeEndpointsRequest {
  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAcmeEndpointsResponse {
  /**
   * <p>The list of ACME endpoints.</p>
   * @public
   */
  AcmeEndpoints?: AcmeEndpointSummary[] | undefined;

  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeExternalAccountBindingsRequest {
  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeExternalAccountBindingsResponse {
  /**
   * <p>The list of external account bindings.</p>
   * @public
   */
  ExternalAccountBindings?: AcmeExternalAccountBindingSummary[] | undefined;

  /**
   * <p>A token for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list. </p>
 * @public
 */
export interface Filters {
  /**
   * <p>Specify one or more <a>ExtendedKeyUsage</a> extension values.</p>
   * @public
   */
  extendedKeyUsage?: ExtendedKeyUsageName[] | undefined;

  /**
   * <p>Specify one or more <a>KeyUsage</a> extension values.</p>
   * @public
   */
  keyUsage?: KeyUsageName[] | undefined;

  /**
   * <p>Specify one or more algorithms that can be used to generate key pairs.</p> <p>Default filtering returns only <code>RSA_1024</code> and <code>RSA_2048</code> certificates that have at least one domain. To return other certificate types, provide the desired type signatures in a comma-separated list. For example, <code>"keyTypes": ["RSA_2048","RSA_4096"]</code> returns both <code>RSA_2048</code> and <code>RSA_4096</code> certificates.</p>
   * @public
   */
  keyTypes?: KeyAlgorithm[] | undefined;

  /**
   * <p>Specify <code>ENABLED</code> or <code>DISABLED</code> to identify certificates that can be exported.</p>
   * @public
   */
  exportOption?: CertificateExport | undefined;

  /**
   * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
   * @public
   */
  managedBy?: CertificateManagedBy | undefined;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * <p>Filter the certificate list by status value.</p>
   * @public
   */
  CertificateStatuses?: CertificateStatus[] | undefined;

  /**
   * <p>Filter the certificate list by certificate key pair origin. Specify one or more <code>CertificateKeyPairOrigin</code> values. Default filtering returns only certificates with key pair origin of <code>AWS_MANAGED</code> and <code>CUSTOMER_PROVIDED</code>.</p>
   * @public
   */
  CertificateKeyPairOrigins?: CertificateKeyPairOrigin[] | undefined;

  /**
   * <p>Filter the certificate list. For more information, see the <a>Filters</a> structure.</p>
   * @public
   */
  Includes?: Filters | undefined;

  /**
   * <p>Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Specifies the field to sort results by. If you specify <code>SortBy</code>, you must also specify <code>SortOrder</code>.</p>
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * <p>Specifies the order of sorted results. If you specify <code>SortOrder</code>, you must also specify <code>SortBy</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>This structure is returned in the response object of <a>ListCertificates</a> action. </p>
 * @public
 */
export interface CertificateSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the certificate. This is of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p> <p>When called by <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html">ListCertificates</a>, this parameter will only return the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a>.</p>
   * @public
   */
  SubjectAlternativeNameSummaries?: string[] | undefined;

  /**
   * <p>When called by <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html">ListCertificates</a>, indicates whether the full list of subject alternative names has been included in the response. If false, the response includes all of the subject alternative names included in the certificate. If true, the response only includes the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a>.</p>
   * @public
   */
  HasAdditionalSubjectAlternativeNames?: boolean | undefined;

  /**
   * <p>The status of the certificate.</p> <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and try again. If validation succeeds, the certificate enters status ISSUED. </p>
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   * @public
   */
  KeyUsages?: KeyUsageName[] | undefined;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsageName[] | undefined;

  /**
   * <p>Indicates if export is enabled for the certificate.</p>
   * @public
   */
  ExportOption?: CertificateExport | undefined;

  /**
   * <p>Indicates whether the certificate is currently in use by any Amazon Web Services resources.</p>
   * @public
   */
  InUse?: boolean | undefined;

  /**
   * <p>Indicates whether the certificate has been exported.</p>
   * @public
   */
  Exported?: boolean | undefined;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.</p>
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * <p>The time before which the certificate is not valid.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The time after which the certificate is not valid.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The time at which the certificate was requested.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * <p>The date and time when the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;

  /**
   * <p>The origin of the certificate's key pair.</p>
   * @public
   */
  CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * <p>When the list is truncated, this value is present and contains the value to use for the <code>NextToken</code> parameter in a subsequent pagination request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of ACM certificates.</p>
   * @public
   */
  CertificateSummaryList?: CertificateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate for which you want to list the tags. This must have the following form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForCertificateResponse {
  /**
   * <p>The key-value pairs that define the applied tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the ACM resource for which to list tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAccountConfigurationRequest {
  /**
   * <p>Specifies expiration events associated with an account.</p>
   * @public
   */
  ExpiryEvents?: ExpiryEventsConfiguration | undefined;

  /**
   * <p>Customer-chosen string used to distinguish between calls to <code>PutAccountConfiguration</code>. Idempotency tokens time out after one hour. If you call <code>PutAccountConfiguration</code> multiple times with the same unexpired idempotency token, ACM treats it as the same request and returns the original result. If you change the idempotency token for each call, ACM treats each call as a new request.</p>
   * @public
   */
  IdempotencyToken: string | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM Certificate with one or more tags that you want to remove. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag to remove.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface RenewCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate to be renewed. This must be of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * <p>Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.</p>
 * @public
 */
export interface DomainValidationOption {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate request.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the <code>DomainName</code> value or a superdomain of the <code>DomainName</code> value. For example, if you request a certificate for <code>testing.example.com</code>, you can specify <code>example.com</code> for this value. In that case, ACM sends domain validation emails to the following five addresses:</p> <ul> <li> <p>admin@example.com</p> </li> <li> <p>administrator@example.com</p> </li> <li> <p>hostmaster@example.com</p> </li> <li> <p>postmaster@example.com</p> </li> <li> <p>webmaster@example.com</p> </li> </ul>
   * @public
   */
  ValidationDomain: string | undefined;
}

/**
 * @public
 */
export interface RequestCertificateRequest {
  /**
   * <p>Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. </p> <p>In compliance with <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>, the length of the domain name (technically, the Common Name) that you provide cannot exceed 64 octets (characters), including periods. To add a longer domain name, specify it in the Subject Alternative Name field, which supports names up to 253 octets in length. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">validate with DNS</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">validate with email</a>. We recommend that you use DNS validation. </p>
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;

  /**
   * <p>Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the <code>DomainName</code> field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial quota is 10 domain names. If you need more than 10 names, you must request a quota increase. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Quotas</a>.</p> <p> The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples: </p> <ul> <li> <p> <code>(63 octets).(63 octets).(63 octets).(61 octets)</code> is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.</p> </li> <li> <p> <code>(64 octets).(63 octets).(63 octets).(61 octets)</code> is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.</p> </li> <li> <p> <code>(63 octets).(63 octets).(63 octets).(62 octets)</code> is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.</p> </li> </ul>
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * <p>Customer chosen string that can be used to distinguish between calls to <code>RequestCertificate</code>. Idempotency tokens time out after one hour. Therefore, if you call <code>RequestCertificate</code> multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The domain name that you want ACM to use to send you emails so that you can validate domain ownership.</p>
   * @public
   */
  DomainValidationOptions?: DomainValidationOption[] | undefined;

  /**
   * <p>You can use this parameter to specify whether to export your certificate.</p> <p>Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.</p> <p>You can export public ACM certificates to use with Amazon Web Services services as well as outside the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html">Certificate Manager exportable public certificate</a>.</p>
   * @public
   */
  Options?: CertificateOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html">Amazon Web Services Private Certificate Authority</a> user guide. The ARN must have the following form: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>One or more resource tags to associate with the certificate.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by all network clients. Some Amazon Web Services services may require RSA keys, or only support ECDSA keys of a particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken. Check the requirements for the Amazon Web Services service where you plan to deploy your certificate. For more information about selecting an algorithm, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate-characteristics.html#algorithms-term">Key algorithms</a>.</p> <note> <p>Algorithms supported for an ACM certificate request include: </p> <ul> <li> <p> <code>RSA_2048</code> </p> </li> <li> <p> <code>EC_prime256v1</code> </p> </li> <li> <p> <code>EC_secp384r1</code> </p> </li> </ul> <p>Other listed algorithms are for imported certificates only. </p> </note> <note> <p>When you request a private PKI certificate signed by a CA from Amazon Web Services Private CA, the specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.</p> </note> <p>Default: RSA_2048</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * <p>Identifies the Amazon Web Services service that manages the certificate issued by ACM.</p>
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;
}

/**
 * @public
 */
export interface RequestCertificateResponse {
  /**
   * <p>String that contains the ARN of the issued certificate. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ResendValidationEmailRequest {
  /**
   * <p>String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the <a>RequestCertificate</a> action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form: </p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the certificate that needs to be validated.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the <code>Domain</code> value or a superdomain of the <code>Domain</code> value. For example, if you requested a certificate for <code>site.subdomain.example.com</code> and specify a <b>ValidationDomain</b> of <code>subdomain.example.com</code>, ACM sends email to the the following five addresses:</p> <ul> <li> <p>admin@subdomain.example.com</p> </li> <li> <p>administrator@subdomain.example.com</p> </li> <li> <p>hostmaster@subdomain.example.com</p> </li> <li> <p>postmaster@subdomain.example.com</p> </li> <li> <p>webmaster@subdomain.example.com</p> </li> </ul>
   * @public
   */
  ValidationDomain: string | undefined;
}

/**
 * @public
 */
export interface RevokeAcmeAccountRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * <p>The URL of the ACME account to revoke.</p>
   * @public
   */
  AccountUrl: string | undefined;
}

/**
 * @public
 */
export interface RevokeAcmeExternalAccountBindingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME external account binding to revoke.</p>
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the public or private certificate that will be revoked. The ARN must have the following form: </p> <p> <code>arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012</code> </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Specifies why you revoked the certificate.</p>
   * @public
   */
  RevocationReason: RevocationReason | undefined;
}

/**
 * @public
 */
export interface RevokeCertificateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the public or private certificate that was revoked.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Contains metadata about a certificate. Currently supports ACM certificate metadata.</p>
 * @public
 */
export type CertificateMetadata =
  | CertificateMetadata.AcmCertificateMetadataMember
  | CertificateMetadata.$UnknownMember;

/**
 * @public
 */
export namespace CertificateMetadata {
  /**
   * <p>Metadata for an ACM certificate.</p>
   * @public
   */
  export interface AcmCertificateMetadataMember {
    AcmCertificateMetadata: AcmCertificateMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AcmCertificateMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AcmCertificateMetadata: (value: AcmCertificateMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Defines the X.500 relative distinguished name (RDN).</p>
 * @public
 */
export interface CustomAttribute {
  /**
   * <p>Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * <p>Specifies the attribute value of relative distinguished name (RDN).</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains X.500 distinguished name information.</p>
 * @public
 */
export interface DistinguishedName {
  /**
   * <p>The common name (CN) attribute.</p>
   * @public
   */
  CommonName?: string | undefined;

  /**
   * <p>The domain component attributes.</p>
   * @public
   */
  DomainComponents?: string[] | undefined;

  /**
   * <p>The country (C) attribute.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>A list of custom attributes in the distinguished name. Each custom attribute contains an object identifier (OID) and its corresponding value.</p>
   * @public
   */
  CustomAttributes?: CustomAttribute[] | undefined;

  /**
   * <p>The distinguished name qualifier attribute.</p>
   * @public
   */
  DistinguishedNameQualifier?: string | undefined;

  /**
   * <p>The generation qualifier attribute.</p>
   * @public
   */
  GenerationQualifier?: string | undefined;

  /**
   * <p>The given name attribute.</p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>The initials attribute.</p>
   * @public
   */
  Initials?: string | undefined;

  /**
   * <p>The locality (L) attribute.</p>
   * @public
   */
  Locality?: string | undefined;

  /**
   * <p>The organization (O) attribute.</p>
   * @public
   */
  Organization?: string | undefined;

  /**
   * <p>The organizational unit (OU) attribute.</p>
   * @public
   */
  OrganizationalUnit?: string | undefined;

  /**
   * <p>The pseudonym attribute.</p>
   * @public
   */
  Pseudonym?: string | undefined;

  /**
   * <p>The serial number attribute.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The state or province (ST) attribute.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The surname attribute.</p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p>The title attribute.</p>
   * @public
   */
  Title?: string | undefined;
}

/**
 * <p>Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p>
 * @public
 */
export interface OtherName {
  /**
   * <p>Specifies an OID.</p>
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * <p>Specifies an OID value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided.</p>
 * @public
 */
export type GeneralName =
  | GeneralName.DirectoryNameMember
  | GeneralName.DnsNameMember
  | GeneralName.IpAddressMember
  | GeneralName.OtherNameMember
  | GeneralName.RegisteredIdMember
  | GeneralName.Rfc822NameMember
  | GeneralName.UniformResourceIdentifierMember
  | GeneralName.$UnknownMember;

/**
 * @public
 */
export namespace GeneralName {
  /**
   * <p>Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject</code> must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
   * @public
   */
  export interface DirectoryNameMember {
    DirectoryName: DistinguishedName;
    DnsName?: never;
    IpAddress?: never;
    OtherName?: never;
    RegisteredId?: never;
    Rfc822Name?: never;
    UniformResourceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents <code>GeneralName</code> as a DNS name.</p>
   * @public
   */
  export interface DnsNameMember {
    DirectoryName?: never;
    DnsName: string;
    IpAddress?: never;
    OtherName?: never;
    RegisteredId?: never;
    Rfc822Name?: never;
    UniformResourceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents <code>GeneralName</code> as an IPv4 or IPv6 address.</p>
   * @public
   */
  export interface IpAddressMember {
    DirectoryName?: never;
    DnsName?: never;
    IpAddress: string;
    OtherName?: never;
    RegisteredId?: never;
    Rfc822Name?: never;
    UniformResourceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents <code>GeneralName</code> using an <code>OtherName</code> object.</p>
   * @public
   */
  export interface OtherNameMember {
    DirectoryName?: never;
    DnsName?: never;
    IpAddress?: never;
    OtherName: OtherName;
    RegisteredId?: never;
    Rfc822Name?: never;
    UniformResourceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents <code>GeneralName</code> as an object identifier (OID).</p>
   * @public
   */
  export interface RegisteredIdMember {
    DirectoryName?: never;
    DnsName?: never;
    IpAddress?: never;
    OtherName?: never;
    RegisteredId: string;
    Rfc822Name?: never;
    UniformResourceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents <code>GeneralName</code> as an <a href="https://datatracker.ietf.org/doc/html/rfc822">RFC 822</a> email address.</p>
   * @public
   */
  export interface Rfc822NameMember {
    DirectoryName?: never;
    DnsName?: never;
    IpAddress?: never;
    OtherName?: never;
    RegisteredId?: never;
    Rfc822Name: string;
    UniformResourceIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents <code>GeneralName</code> as a URI.</p>
   * @public
   */
  export interface UniformResourceIdentifierMember {
    DirectoryName?: never;
    DnsName?: never;
    IpAddress?: never;
    OtherName?: never;
    RegisteredId?: never;
    Rfc822Name?: never;
    UniformResourceIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DirectoryName?: never;
    DnsName?: never;
    IpAddress?: never;
    OtherName?: never;
    RegisteredId?: never;
    Rfc822Name?: never;
    UniformResourceIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DirectoryName: (value: DistinguishedName) => T;
    DnsName: (value: string) => T;
    IpAddress: (value: string) => T;
    OtherName: (value: OtherName) => T;
    RegisteredId: (value: string) => T;
    Rfc822Name: (value: string) => T;
    UniformResourceIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains X.509 certificate attributes extracted from the certificate.</p>
 * @public
 */
export interface X509Attributes {
  /**
   * <p>The distinguished name of the certificate issuer.</p>
   * @public
   */
  Issuer?: DistinguishedName | undefined;

  /**
   * <p>The distinguished name of the certificate subject.</p>
   * @public
   */
  Subject?: DistinguishedName | undefined;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p>
   * @public
   */
  SubjectAlternativeNames?: GeneralName[] | undefined;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsageName[] | undefined;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   * @public
   */
  KeyUsages?: KeyUsageName[] | undefined;

  /**
   * <p>The serial number assigned by the certificate authority.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The time after which the certificate is not valid.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The time before which the certificate is not valid.</p>
   * @public
   */
  NotBefore?: Date | undefined;
}

/**
 * <p>Contains information about a certificate returned by the <a>SearchCertificates</a> action. This structure includes the certificate ARN, X.509 attributes, and ACM metadata.</p>
 * @public
 */
export interface CertificateSearchResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>X.509 certificate attributes such as subject, issuer, and validity period.</p>
   * @public
   */
  X509Attributes?: X509Attributes | undefined;

  /**
   * <p>ACM-specific metadata about the certificate.</p>
   * @public
   */
  CertificateMetadata?: CertificateMetadata | undefined;
}

/**
 * @public
 */
export interface SearchCertificatesResponse {
  /**
   * <p>A list of certificate search results containing certificate ARNs, X.509 attributes, and ACM metadata.</p>
   * @public
   */
  Results?: CertificateSearchResult[] | undefined;

  /**
   * <p>When the list is truncated, this value is present and contains the value to use for the <code>NextToken</code> parameter in a subsequent pagination request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the ACM resource to which the tag is to be applied.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag to apply.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the ACM resource from which the tag is to be removed.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key of each tag to remove.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAcmeDomainValidationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME domain validation to update.</p>
   * @public
   */
  AcmeDomainValidationArn: string | undefined;

  /**
   * <p>The updated prevalidation options.</p>
   * @public
   */
  PrevalidationOptions?: PrevalidationOptions | undefined;
}

/**
 * @public
 */
export interface UpdateAcmeEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACME endpoint to update.</p>
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * <p>The updated authorization behavior.</p>
   * @public
   */
  AuthorizationBehavior?: AcmeAuthorizationBehavior | undefined;

  /**
   * <p>The updated contact requirement.</p>
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * <p>The updated certificate authority configuration.</p>
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateOptionsRequest {
  /**
   * <p>ARN of the requested certificate to update. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:<i>account</i>:certificate/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Use to update the options for your certificate. Currently, you can specify whether to export your certificate. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency Logging</a>.</p>
   * @public
   */
  Options: CertificateOptions | undefined;
}

/**
 * <p>A filter statement used to search for certificates. Can contain AND, OR, NOT logical operators or a single filter.</p>
 * @public
 */
export type CertificateFilterStatement =
  | CertificateFilterStatement.AndMember
  | CertificateFilterStatement.FilterMember
  | CertificateFilterStatement.NotMember
  | CertificateFilterStatement.OrMember
  | CertificateFilterStatement.$UnknownMember;

/**
 * @public
 */
export namespace CertificateFilterStatement {
  /**
   * <p>A list of filter statements that must all be true.</p>
   * @public
   */
  export interface AndMember {
    And: CertificateFilterStatement[];
    Or?: never;
    Not?: never;
    Filter?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of filter statements where at least one must be true.</p>
   * @public
   */
  export interface OrMember {
    And?: never;
    Or: CertificateFilterStatement[];
    Not?: never;
    Filter?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter statement that must not be true.</p>
   * @public
   */
  export interface NotMember {
    And?: never;
    Or?: never;
    Not: CertificateFilterStatement;
    Filter?: never;
    $unknown?: never;
  }

  /**
   * <p>A single certificate filter.</p>
   * @public
   */
  export interface FilterMember {
    And?: never;
    Or?: never;
    Not?: never;
    Filter: CertificateFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    And?: never;
    Or?: never;
    Not?: never;
    Filter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    And: (value: CertificateFilterStatement[]) => T;
    Or: (value: CertificateFilterStatement[]) => T;
    Not: (value: CertificateFilterStatement) => T;
    Filter: (value: CertificateFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SearchCertificatesRequest {
  /**
   * <p>A filter statement that defines the search criteria. You can combine multiple filters using AND, OR, and NOT logical operators to create complex queries.</p>
   * @public
   */
  FilterStatement?: CertificateFilterStatement | undefined;

  /**
   * <p>The maximum number of results to return in the response. Default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the field to sort results by. Valid values are CREATED_AT, NOT_AFTER, STATUS, RENEWAL_STATUS, EXPORTED, IN_USE, NOT_BEFORE, KEY_ALGORITHM, TYPE, CERTIFICATE_ARN, COMMON_NAME, REVOKED_AT, RENEWAL_ELIGIBILITY, ISSUED_AT, MANAGED_BY, EXPORT_OPTION, VALIDATION_METHOD, and IMPORTED_AT.</p>
   * @public
   */
  SortBy?: SearchCertificatesSortBy | undefined;

  /**
   * <p>Specifies the order of sorted results. Valid values are ASCENDING or DESCENDING.</p>
   * @public
   */
  SortOrder?: SearchCertificatesSortOrder | undefined;
}

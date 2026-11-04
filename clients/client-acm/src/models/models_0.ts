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
  UpdateStatus,
  UpdateType,
  ValidationMethod,
} from "./enums";

/**
 * Contains ACM-specific metadata about a certificate.
 *
 * @public
 */
export interface AcmCertificateMetadata {
  /**
   * The time at which the certificate was requested.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Indicates whether the certificate has been exported.
   *
   * @public
   */
  Exported?: boolean | undefined;

  /**
   * The date and time when the certificate was imported. This value exists only when the certificate type is `IMPORTED`.
   *
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * Indicates whether the certificate is currently in use by an Amazon Web Services service.
   *
   * @public
   */
  InUse?: boolean | undefined;

  /**
   * The time at which the certificate was issued. This value exists only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command.
   *
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * The time at which the certificate was revoked. This value exists only when the certificate status is `REVOKED`.
   *
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * The status of the certificate.
   *
   * A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic [Certificate request fails](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html). ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with [DNS validation](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html) or [Email validation](https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html), and try again. If validation succeeds, the certificate enters status ISSUED.
   *
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * The renewal status of the certificate.
   *
   * @public
   */
  RenewalStatus?: RenewalStatus | undefined;

  /**
   * The source of the certificate. For certificates provided by ACM, this value is `AMAZON_ISSUED`. For certificates that you imported with ImportCertificate, this value is `IMPORTED`. ACM does not provide [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see [Importing Certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * Indicates whether the certificate can be exported.
   *
   * @public
   */
  ExportOption?: CertificateExport | undefined;

  /**
   * Identifies the Amazon Web Services service that manages the certificate issued by ACM.
   *
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;

  /**
   * Specifies the domain validation method.
   *
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;

  /**
   * The origin of the certificate's key pair.
   *
   * @public
   */
  CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;

  /**
   * The ARN of the ACME endpoint used to issue the certificate.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The ACME account identifier associated with the certificate.
   *
   * @public
   */
  AcmeAccountId?: string | undefined;
}

/**
 * Filters certificates by ACM metadata.
 *
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
   * Filter by certificate status.
   *
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
   * Filter by certificate renewal status.
   *
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
   * Filter by certificate type.
   *
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
   * Filter by whether the certificate is in use.
   *
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
   * Filter by whether the certificate has been exported.
   *
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
   * Filter by certificate export option.
   *
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
   * Filter by the entity that manages the certificate.
   *
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
   * Filter by validation method.
   *
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
   * Filter by certificate key pair origin.
   *
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
   * Filter by ACME endpoint ARN.
   *
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
   * Filter by ACME account identifier.
   *
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
 * Contains detailed information about an ACME account.
 *
 * @public
 */
export interface AcmeAccount {
  /**
   * The URL of the ACME account.
   *
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * The thumbprint of the public key associated with the ACME account.
   *
   * @public
   */
  PublicKeyThumbprint?: string | undefined;

  /**
   * The status of the ACME account.
   *
   * @public
   */
  Status?: AcmeAccountStatus | undefined;

  /**
   * The time at which the ACME account was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the external account binding associated with this ACME account.
   *
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * The contact information for the ACME account.
   *
   * @public
   */
  Contacts?: string[] | undefined;
}

/**
 * Contains summary information about an ACME account.
 *
 * @public
 */
export interface AcmeAccountSummary {
  /**
   * The URL of the ACME account.
   *
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * The thumbprint of the public key associated with the ACME account.
   *
   * @public
   */
  PublicKeyThumbprint?: string | undefined;

  /**
   * The status of the ACME account.
   *
   * @public
   */
  Status?: AcmeAccountStatus | undefined;

  /**
   * The time at which the ACME account was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the external account binding associated with this ACME account.
   *
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * The contact information for the ACME account.
   *
   * @public
   */
  Contacts?: string[] | undefined;
}

/**
 * Contains details about a failure.
 *
 * @public
 */
export interface FailureDetails {
  /**
   * The reason for the failure.
   *
   * @public
   */
  Reason?: AcmeDomainValidationFailureReason | undefined;

  /**
   * A message describing the failure.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Specifies the scope of domain validation.
 *
 * @public
 */
export interface DomainScope {
  /**
   * Whether validation applies to the exact domain.
   *
   * @public
   */
  ExactDomain?: DomainScopeOption | undefined;

  /**
   * Whether validation applies to subdomains.
   *
   * @public
   */
  Subdomains?: DomainScopeOption | undefined;

  /**
   * Whether validation applies to wildcard domains.
   *
   * @public
   */
  Wildcards?: DomainScopeOption | undefined;
}

/**
 * Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the DescribeCertificate action.
 *
 * @public
 */
export interface ResourceRecord {
  /**
   * The name of the DNS record to create in your domain. This is supplied by ACM.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of DNS record. Currently this can be `CNAME`.
   *
   * @public
   */
  Type: RecordType | undefined;

  /**
   * The value of the CNAME record to add to your DNS database. This is supplied by ACM.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * DNS prevalidation details including the resource record for validation.
 *
 * @public
 */
export interface DnsPrevalidationDetails {
  /**
   * The scope of domains covered by this prevalidation.
   *
   * @public
   */
  DomainScope?: DomainScope | undefined;

  /**
   * The Route 53 hosted zone ID for DNS validation.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * The DNS resource record to create for domain validation.
   *
   * @public
   */
  ResourceRecord?: ResourceRecord | undefined;
}

/**
 * Contains details about the prevalidation configuration.
 *
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
   * DNS-based prevalidation details.
   *
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
 * Contains detailed information about an ACME domain validation.
 *
 * @public
 */
export interface AcmeDomainValidation {
  /**
   * The Amazon Resource Name (ARN) of the ACME domain validation.
   *
   * @public
   */
  AcmeDomainValidationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The domain name being validated.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The type of prevalidation used.
   *
   * @public
   */
  PrevalidationType?: PrevalidationType | undefined;

  /**
   * Details about the prevalidation configuration.
   *
   * @public
   */
  PrevalidationDetails?: PrevalidationDetails | undefined;

  /**
   * The status of the domain validation.
   *
   * @public
   */
  Status?: AcmeDomainValidationStatus | undefined;

  /**
   * Details about the failure, if the validation failed.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * The time at which the domain validation was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the domain validation was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Contains summary information about an ACME domain validation.
 *
 * @public
 */
export interface AcmeDomainValidationSummary {
  /**
   * The Amazon Resource Name (ARN) of the ACME domain validation.
   *
   * @public
   */
  AcmeDomainValidationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The domain name being validated.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The type of prevalidation used.
   *
   * @public
   */
  PrevalidationType?: PrevalidationType | undefined;

  /**
   * Details about the prevalidation configuration.
   *
   * @public
   */
  PrevalidationDetails?: PrevalidationDetails | undefined;

  /**
   * The status of the domain validation.
   *
   * @public
   */
  Status?: AcmeDomainValidationStatus | undefined;

  /**
   * Details about the failure, if the validation failed.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * The time at which the domain validation was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the domain validation was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Configuration for a public certificate authority.
 *
 * @public
 */
export interface PublicCertificateAuthority {
  /**
   * The key algorithms allowed for certificates issued by this certificate authority.
   *
   * @public
   */
  AllowedKeyAlgorithms?: PublicKeyAlgorithm[] | undefined;
}

/**
 * Defines the certificate authority to use for an ACME endpoint.
 *
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
   * Configuration for using a public certificate authority.
   *
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
 * A key-value pair that identifies or specifies metadata about an ACM resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains detailed information about an ACME endpoint.
 *
 * @public
 */
export interface AcmeEndpoint {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The URL of the ACME endpoint.
   *
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * The status of the ACME endpoint.
   *
   * @public
   */
  Status?: AcmeEndpointStatus | undefined;

  /**
   * The reason the ACME endpoint failed, if applicable.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The authorization behavior of the ACME endpoint.
   *
   * @public
   */
  AuthorizationBehavior?: AcmeAuthorizationBehavior | undefined;

  /**
   * Whether ACME clients must provide contact information during account registration.
   *
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * The certificate authority configuration for the ACME endpoint.
   *
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;

  /**
   * Tags applied to certificates issued through this ACME endpoint.
   *
   * @public
   */
  CertificateTags?: Tag[] | undefined;

  /**
   * The time at which the ACME endpoint was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the ACME endpoint was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Contains summary information about an ACME endpoint.
 *
 * @public
 */
export interface AcmeEndpointSummary {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The URL of the ACME endpoint.
   *
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * The status of the ACME endpoint.
   *
   * @public
   */
  Status?: AcmeEndpointStatus | undefined;

  /**
   * The reason the ACME endpoint failed, if applicable.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The authorization behavior of the ACME endpoint.
   *
   * @public
   */
  AuthorizationBehavior?: AcmeAuthorizationBehavior | undefined;

  /**
   * Whether ACME clients must provide contact information during account registration.
   *
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * The certificate authority configuration for the ACME endpoint.
   *
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;

  /**
   * Tags applied to certificates issued through this ACME endpoint.
   *
   * @public
   */
  CertificateTags?: Tag[] | undefined;

  /**
   * The time at which the ACME endpoint was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the ACME endpoint was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Contains detailed information about an ACME external account binding.
 *
 * @public
 */
export interface AcmeExternalAccountBinding {
  /**
   * The Amazon Resource Name (ARN) of the ACME external account binding.
   *
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the external account binding.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The time at which the external account binding expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The time at which the external account binding was revoked.
   *
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * The time at which the external account binding was last used.
   *
   * @public
   */
  LastUsedAt?: Date | undefined;

  /**
   * The time at which the external account binding was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the external account binding was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Contains summary information about an ACME external account binding.
 *
 * @public
 */
export interface AcmeExternalAccountBindingSummary {
  /**
   * The Amazon Resource Name (ARN) of the ACME external account binding.
   *
   * @public
   */
  AcmeExternalAccountBindingArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the external account binding.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The time at which the external account binding expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * The time at which the external account binding was revoked.
   *
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * The time at which the external account binding was last used.
   *
   * @public
   */
  LastUsedAt?: Date | undefined;

  /**
   * The time at which the external account binding was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the external account binding was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface AddTagsToCertificateRequest {
  /**
   * String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The key-value pair that defines the tag. The tag value is optional.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * A description of why a request was throttled.
 *
 * @public
 */
export interface ThrottlingReason {
  /**
   * A description of why a request was throttled.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The resource that causes the request to be throttled.
   *
   * @public
   */
  resource?: string | undefined;
}

/**
 * Contains information for HTTP-based domain validation of certificates requested through Amazon CloudFront and issued by ACM. This field exists only when the certificate type is `AMAZON_ISSUED` and the validation method is `HTTP`.
 *
 * @public
 */
export interface HttpRedirect {
  /**
   * The URL including the domain to be validated. The certificate authority sends `GET` requests here during validation.
   *
   * @public
   */
  RedirectFrom?: string | undefined;

  /**
   * The URL hosting the validation token. `RedirectFrom` must return this content or redirect here.
   *
   * @public
   */
  RedirectTo?: string | undefined;
}

/**
 * Contains information about the validation of each domain name in the certificate.
 *
 * @public
 */
export interface DomainValidation {
  /**
   * A fully qualified domain name (FQDN) in the certificate. For example, `www.example.com` or `example.com`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A list of email addresses that ACM used to send domain validation emails.
   *
   * @public
   */
  ValidationEmails?: string[] | undefined;

  /**
   * The domain name that ACM used to send domain validation emails.
   *
   * @public
   */
  ValidationDomain?: string | undefined;

  /**
   * The validation status of the domain name. This can be one of the following values:
   *
   * - `PENDING_VALIDATION`
   * - `SUCCESS`
   * - `FAILED`
   *
   * @public
   */
  ValidationStatus?: DomainStatus | undefined;

  /**
   * Contains the CNAME record that you add to your DNS database for domain validation. For more information, see [Use DNS to Validate Domain Ownership](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html).
   *
   * > **Note:** The CNAME information that you need does not include the name of your domain. If you include your domain name in the DNS database CNAME record, validation fails. For example, if the name is `_a79865eb4cd1a6ab990a45779b4e0b96.yourdomain.com`, only `_a79865eb4cd1a6ab990a45779b4e0b96` must be used.
   *
   * @public
   */
  ResourceRecord?: ResourceRecord | undefined;

  /**
   * Contains information for HTTP-based domain validation of certificates requested through Amazon CloudFront and issued by ACM. This field exists only when the certificate type is `AMAZON_ISSUED` and the validation method is `HTTP`.
   *
   * @public
   */
  HttpRedirect?: HttpRedirect | undefined;

  /**
   * Specifies the domain validation method.
   *
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;
}

/**
 * The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.
 *
 * @public
 */
export interface ExtendedKeyUsage {
  /**
   * The name of an Extended Key Usage value.
   *
   * @public
   */
  Name?: ExtendedKeyUsageName | undefined;

  /**
   * An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280.
   *
   * - `1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)`
   * - `1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)`
   * - `1.3.6.1.5.5.7.3.3 (CODE_SIGNING)`
   * - `1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)`
   * - `1.3.6.1.5.5.7.3.8 (TIME_STAMPING)`
   * - `1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)`
   * - `1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)`
   * - `1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)`
   * - `1.3.6.1.5.5.7.3.7 (IPSEC_USER)`
   *
   * @public
   */
  OID?: string | undefined;
}

/**
 * The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
 *
 * @public
 */
export interface KeyUsage {
  /**
   * A string value that contains a Key Usage extension name.
   *
   * @public
   */
  Name?: KeyUsageName | undefined;
}

/**
 * Structure that contains options for your certificate. You can use this structure to change the domain validation method or specify whether to export your certificate.
 *
 * All public certificates are recorded in a certificate transparency log. For general information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency).
 *
 * You can export public ACM certificates to use with Amazon Web Services services as well as outside Amazon Web Services Cloud. For more information, see [Certificate Manager exportable public certificate](https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html).
 *
 * @public
 */
export interface CertificateOptions {
  /**
   * This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.
   *
   * @deprecated (since 12th June 2026) Certificate transparency logging opt-out is no longer available.
   * @public
   */
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference | undefined;

  /**
   * You can opt in to allow the export of your certificates by specifying `ENABLED`. You cannot update the value of `Export` after the the certificate is created.
   *
   * @public
   */
  Export?: CertificateExport | undefined;

  /**
   * The domain validation method for the certificate. To migrate from email to DNS validation, specify `DNS`.
   *
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;
}

/**
 * Contains information about the status of ACM's [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for the certificate. This structure exists only when the certificate type is `AMAZON_ISSUED`.
 *
 * @public
 */
export interface RenewalSummary {
  /**
   * The status of ACM's [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) of the certificate.
   *
   * @public
   */
  RenewalStatus: RenewalStatus | undefined;

  /**
   * Contains information about the validation of each domain name in the certificate, as it pertains to ACM's [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html). This is different from the initial validation that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  DomainValidationOptions: DomainValidation[] | undefined;

  /**
   * The reason that a renewal request was unsuccessful.
   *
   * @public
   */
  RenewalStatusReason?: FailureReason | undefined;

  /**
   * The time at which the renewal summary was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * Contains information about a domain validation method migration, including the previous validation method and the target validation method.
 *
 * @public
 */
export interface DomainValidationMethodUpdateSummary {
  /**
   * The validation method that the certificate was using before the update.
   *
   * @public
   */
  From?: ValidationMethod | undefined;

  /**
   * The target validation method for the update.
   *
   * @public
   */
  To?: ValidationMethod | undefined;
}

/**
 * Contains information about the most recent certificate update, such as a domain validation method migration. This structure is returned as part of the CertificateDetail response from DescribeCertificate.
 *
 * @public
 */
export interface UpdateSummary {
  /**
   * The status of the certificate update. The following are valid values:
   *
   * - `PENDING_DOMAIN_VALIDATION` – The certificate update is waiting for domain ownership validation to complete.
   * - `SUCCESS` – The certificate was updated successfully.
   * - `FAILED` – The certificate update failed.
   *
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * The type of update that was requested for the certificate. The following are valid values:
   *
   * - `DOMAIN_VALIDATION_METHOD` – The update changes the domain validation method for the certificate.
   *
   * @public
   */
  Type?: UpdateType | undefined;

  /**
   * Contains information about a domain validation method migration, including the previous and target validation methods.
   *
   * @public
   */
  DomainValidationMethodUpdateSummary?: DomainValidationMethodUpdateSummary | undefined;

  /**
   * The time at which the certificate update was requested.
   *
   * @public
   */
  RequestedAt?: Date | undefined;

  /**
   * The time at which the certificate update status was last changed.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Contains metadata about an ACM certificate. This structure is returned in the response to a DescribeCertificate request.
 *
 * @public
 */
export interface CertificateDetail {
  /**
   * The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The fully qualified domain name for the certificate, such as www.example.com or example.com.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
   *
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * Identifies the Amazon Web Services service that manages the certificate issued by ACM.
   *
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;

  /**
   * Contains information about the initial validation of each domain name that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  DomainValidationOptions?: DomainValidation[] | undefined;

  /**
   * The serial number of the certificate.
   *
   * @public
   */
  Serial?: string | undefined;

  /**
   * The name of the entity that is associated with the public key contained in the certificate.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The name of the certificate authority that issued and signed the certificate.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The time at which the certificate was requested.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the certificate was issued. This value exists only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * The date and time when the certificate was imported. This value exists only when the certificate type is `IMPORTED`.
   *
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * The status of the certificate.
   *
   * A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic [Certificate request fails](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html). ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with [DNS validation](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html) or [Email validation](https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html), and try again. If validation succeeds, the certificate enters status ISSUED.
   *
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * The time at which the certificate was revoked. This value exists only when the certificate status is `REVOKED`.
   *
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * The reason the certificate was revoked. This value exists only when the certificate status is `REVOKED`.
   *
   * @public
   */
  RevocationReason?: RevocationReason | undefined;

  /**
   * The time before which the certificate is not valid.
   *
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * The time after which the certificate is not valid.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * The algorithm that was used to generate the public-private key pair.
   *
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * The algorithm that was used to sign the certificate.
   *
   * @public
   */
  SignatureAlgorithm?: string | undefined;

  /**
   * A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can be used by multiple Amazon Web Services resources.
   *
   * @public
   */
  InUseBy?: string[] | undefined;

  /**
   * The reason the certificate request failed. This value exists only when the certificate status is `FAILED`. For more information, see [Certificate Request Failed](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  FailureReason?: FailureReason | undefined;

  /**
   * The source of the certificate. For certificates provided by ACM, this value is `AMAZON_ISSUED`. For certificates that you imported with ImportCertificate, this value is `IMPORTED`. ACM does not provide [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see [Importing Certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * Contains information about the status of ACM's [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for the certificate. This field exists only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  RenewalSummary?: RenewalSummary | undefined;

  /**
   * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
   *
   * @public
   */
  KeyUsages?: KeyUsage[] | undefined;

  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
   *
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsage[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the certificate. This has the following format:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command.
   *
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * Contains the certificate options. Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log.
   *
   * @public
   */
  Options?: CertificateOptions | undefined;

  /**
   * Contains information about the most recent update to the certificate. This field exists only when the certificate type is `AMAZON_ISSUED` and a certificate update has been requested.
   *
   * @public
   */
  UpdateSummary?: UpdateSummary | undefined;

  /**
   * The origin of the certificate's key pair.
   *
   * @public
   */
  CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;

  /**
   * The ARN of the ACME endpoint used to issue the certificate.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;

  /**
   * The ACME account identifier associated with the certificate.
   *
   * @public
   */
  AcmeAccountId?: string | undefined;
}

/**
 * Specifies a time range for filtering certificates.
 *
 * @public
 */
export interface TimestampRange {
  /**
   * The start of the time range. This value is inclusive.
   *
   * @public
   */
  Start?: Date | undefined;

  /**
   * The end of the time range. This value is inclusive.
   *
   * @public
   */
  End?: Date | undefined;
}

/**
 * Filters certificates by common name.
 *
 * @public
 */
export interface CommonNameFilter {
  /**
   * The value to match against.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The comparison operator to use.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;
}

/**
 * Filters certificates by subject attributes.
 *
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
   * Filter by common name in the subject.
   *
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
 * Filters certificates by DNS name.
 *
 * @public
 */
export interface DnsNameFilter {
  /**
   * The DNS name value to match against.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The comparison operator to use.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;
}

/**
 * Filters certificates by subject alternative name attributes.
 *
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
   * Filter by DNS name in subject alternative names.
   *
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
 * Filters certificates by X.509 attributes.
 *
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
   * Filter by certificate subject.
   *
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
   * Filter by subject alternative names.
   *
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
   * Filter by extended key usage.
   *
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
   * Filter by key usage.
   *
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
   * Filter by key algorithm.
   *
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
   * Filter by serial number.
   *
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
   * Filter by certificate expiration date. The start date is inclusive.
   *
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
   * Filter by certificate validity start date. The start date is inclusive.
   *
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
 * Defines a filter for searching certificates by ARN, X.509 attributes, or ACM metadata.
 *
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
   * Filter by certificate ARN.
   *
   * @public
   */
  export interface CertificateArnMember {
    CertificateArn: string;
    X509AttributeFilter?: never;
    AcmCertificateMetadataFilter?: never;
    $unknown?: never;
  }

  /**
   * Filter by X.509 certificate attributes.
   *
   * @public
   */
  export interface X509AttributeFilterMember {
    CertificateArn?: never;
    X509AttributeFilter: X509AttributeFilter;
    AcmCertificateMetadataFilter?: never;
    $unknown?: never;
  }

  /**
   * Filter by ACM certificate metadata.
   *
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
 * DNS prevalidation options for domain validation.
 *
 * @public
 */
export interface DnsPrevalidationOptions {
  /**
   * The scope of domains covered by this prevalidation.
   *
   * @public
   */
  DomainScope?: DomainScope | undefined;

  /**
   * The Route 53 hosted zone ID for DNS validation.
   *
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * Specifies prevalidation options for domain validation.
 *
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
   * DNS-based prevalidation options.
   *
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
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * The domain name to validate.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The prevalidation options for the domain.
   *
   * @public
   */
  PrevalidationOptions: PrevalidationOptions | undefined;

  /**
   * One or more tags to associate with the domain validation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcmeDomainValidationResponse {
  /**
   * The Amazon Resource Name (ARN) of the created domain validation.
   *
   * @public
   */
  AcmeDomainValidationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAcmeEndpointRequest {
  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The authorization behavior for the ACME endpoint.
   *
   * @public
   */
  AuthorizationBehavior: AcmeAuthorizationBehavior | undefined;

  /**
   * Specifies whether ACME clients must provide contact information during account registration.
   *
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * The type of certificate authority to use for issuing certificates through this ACME endpoint.
   *
   * @public
   */
  CertificateAuthority: CertificateAuthority | undefined;

  /**
   * One or more tags to associate with the ACME endpoint.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Tags to apply to certificates issued through this ACME endpoint.
   *
   * @public
   */
  CertificateTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcmeEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the created ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn?: string | undefined;
}

/**
 * Specifies an expiration configuration.
 *
 * @public
 */
export interface Expiration {
  /**
   * The numeric value of the expiration.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The time unit for the expiration value.
   *
   * @public
   */
  Type: TimeType | undefined;
}

/**
 * @public
 */
export interface CreateAcmeExternalAccountBindingRequest {
  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the external account binding.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The expiration configuration for the external account binding.
   *
   * @public
   */
  Expiration?: Expiration | undefined;

  /**
   * One or more tags to associate with the external account binding.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAcmeExternalAccountBindingResponse {
  /**
   * The created external account binding.
   *
   * @public
   */
  ExternalAccountBinding?: AcmeExternalAccountBinding | undefined;
}

/**
 * @public
 */
export interface DeleteAcmeDomainValidationRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME domain validation to delete.
   *
   * @public
   */
  AcmeDomainValidationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAcmeEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint to delete.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAcmeExternalAccountBindingRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME external account binding to delete.
   *
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * String that contains the ARN of the ACM certificate to be deleted. This must be of the form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeAccountRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * The URL of the ACME account.
   *
   * @public
   */
  AccountUrl: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeAccountResponse {
  /**
   * The ACME account details.
   *
   * @public
   */
  AcmeAccount?: AcmeAccount | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeDomainValidationRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME domain validation.
   *
   * @public
   */
  AcmeDomainValidationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeDomainValidationResponse {
  /**
   * The ACME domain validation details.
   *
   * @public
   */
  AcmeDomainValidation?: AcmeDomainValidation | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeEndpointResponse {
  /**
   * The ACME endpoint details.
   *
   * @public
   */
  AcmeEndpoint?: AcmeEndpoint | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeExternalAccountBindingRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME external account binding.
   *
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAcmeExternalAccountBindingResponse {
  /**
   * The external account binding details.
   *
   * @public
   */
  ExternalAccountBinding?: AcmeExternalAccountBinding | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * Metadata about an ACM certificate.
   *
   * @public
   */
  Certificate?: CertificateDetail | undefined;
}

/**
 * @public
 */
export interface ExportCertificateRequest {
  /**
   * An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:
   *
   * `arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * Passphrase to associate with the encrypted exported private key.
   *
   * > **Note:** When creating your passphrase, you can use any ASCII character except #, $, or %.
   *
   * If you want to later decrypt the private key, you must have the passphrase. You can use the following OpenSSL command to decrypt a private key. After entering the command, you are prompted for the passphrase.
   *
   * `openssl rsa -in encrypted_key.pem -out decrypted_key.pem`
   *
   * @public
   */
  Passphrase: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ExportCertificateResponse {
  /**
   * The base64 PEM-encoded certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting.
   *
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * The encrypted private key associated with the public key in the certificate. The key is output in PKCS #8 format and is base64 PEM-encoded.
   *
   * @public
   */
  PrivateKey?: string | undefined;
}

/**
 * Object containing expiration events options associated with an Amazon Web Services account.
 *
 * @public
 */
export interface ExpiryEventsConfiguration {
  /**
   * Specifies the number of days prior to certificate expiration when ACM starts generating `EventBridge` events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.
   *
   * @public
   */
  DaysBeforeExpiry?: number | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationResponse {
  /**
   * Expiration events configuration options associated with the Amazon Web Services account.
   *
   * @public
   */
  ExpiryEvents?: ExpiryEventsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetAcmeExternalAccountBindingCredentialsRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME external account binding.
   *
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface GetAcmeExternalAccountBindingCredentialsResponse {
  /**
   * The key identifier for the external account binding credentials.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The MAC key for the external account binding credentials.
   *
   * @public
   */
  MacKey?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateRequest {
  /**
   * String that contains a certificate ARN in the following format:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateResponse {
  /**
   * The ACM-issued certificate corresponding to the ARN specified as input.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * Certificates forming the requested certificate's chain of trust. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs.
   *
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateRequest {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an imported certificate to replace. To import a new certificate, omit this field.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The certificate to import.
   *
   * @public
   */
  Certificate: Uint8Array | undefined;

  /**
   * The private key that matches the public key in the certificate.
   *
   * @public
   */
  PrivateKey: Uint8Array | undefined;

  /**
   * The PEM encoded certificate chain.
   *
   * @public
   */
  CertificateChain?: Uint8Array | undefined;

  /**
   * One or more resource tags to associate with the imported certificate.
   *
   * Note: You cannot apply tags when reimporting a certificate.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the imported certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeAccountsRequest {
  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeAccountsResponse {
  /**
   * The list of ACME accounts.
   *
   * @public
   */
  AcmeAccounts?: AcmeAccountSummary[] | undefined;

  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeDomainValidationsRequest {
  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeDomainValidationsResponse {
  /**
   * The list of domain validations.
   *
   * @public
   */
  AcmeDomainValidations?: AcmeDomainValidationSummary[] | undefined;

  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeEndpointsRequest {
  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAcmeEndpointsResponse {
  /**
   * The list of ACME endpoints.
   *
   * @public
   */
  AcmeEndpoints?: AcmeEndpointSummary[] | undefined;

  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeExternalAccountBindingsRequest {
  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ListAcmeExternalAccountBindingsResponse {
  /**
   * The list of external account bindings.
   *
   * @public
   */
  ExternalAccountBindings?: AcmeExternalAccountBindingSummary[] | undefined;

  /**
   * A token for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateDomainValidationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the certificate for which to list domain validation summaries.
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * A token returned by a previous call to `ListCertificateDomainValidations`. If the number of results exceeds `MaxItems`, use this token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of domain validation summaries to return. If you don't specify a value, the default is 1000.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains the CNAME record that you must add to your DNS configuration to validate domain ownership using DNS validation.
 *
 * @public
 */
export interface DnsValidationChallenge {
  /**
   * The CNAME record that ACM creates for DNS validation. Add this record to your DNS configuration to prove that you own or control the domain.
   *
   * @public
   */
  ResourceRecord?: ResourceRecord | undefined;
}

/**
 * Contains the email addresses used for email-based domain validation.
 *
 * @public
 */
export interface EmailValidationChallenge {
  /**
   * A list of email addresses that ACM uses to send domain validation emails.
   *
   * @public
   */
  ValidationEmails?: string[] | undefined;

  /**
   * The domain name that ACM uses to send validation emails.
   *
   * @public
   */
  ValidationDomain?: string | undefined;
}

/**
 * Contains the challenge details that you use to prove domain ownership. Only one member is set, depending on the validation method.
 *
 * @public
 */
export type ValidationChallenge =
  | ValidationChallenge.DnsValidationChallengeMember
  | ValidationChallenge.EmailValidationChallengeMember
  | ValidationChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ValidationChallenge {
  /**
   * Contains the email addresses used for email-based domain validation.
   *
   * @public
   */
  export interface EmailValidationChallengeMember {
    EmailValidationChallenge: EmailValidationChallenge;
    DnsValidationChallenge?: never;
    $unknown?: never;
  }

  /**
   * Contains the CNAME record that you must add to your DNS configuration to validate domain ownership using DNS validation.
   *
   * @public
   */
  export interface DnsValidationChallengeMember {
    EmailValidationChallenge?: never;
    DnsValidationChallenge: DnsValidationChallenge;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EmailValidationChallenge?: never;
    DnsValidationChallenge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EmailValidationChallenge: (value: EmailValidationChallenge) => T;
    DnsValidationChallenge: (value: DnsValidationChallenge) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the validation method, validation status, and validation challenge details for a domain. This structure appears in DomainValidationSummary as both the active and requested validation configuration.
 *
 * @public
 */
export interface ValidationConfiguration {
  /**
   * The validation method for this configuration. Valid values:
   *
   * - `DNS` – Validation using a CNAME record added to your DNS configuration.
   * - `EMAIL` – Validation using an approval email sent to domain contacts.
   * - `HTTP` – Validation using an HTTP resource placed on your web server.
   *
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;

  /**
   * The validation challenge details for this configuration. The structure varies by validation method: for DNS validation, contains a `DnsValidationChallenge` with the CNAME record to add; for email validation, contains an `EmailValidationChallenge` with the validation email addresses.
   *
   * @public
   */
  ValidationChallenge?: ValidationChallenge | undefined;

  /**
   * The validation status for this domain. Valid values:
   *
   * - `PENDING_VALIDATION` – The domain is waiting for validation to complete.
   * - `SUCCESS` – Validation completed successfully.
   * - `FAILED` – Validation failed.
   *
   * @public
   */
  ValidationStatus?: DomainStatus | undefined;
}

/**
 * Contains per-domain validation information for a certificate. This structure is returned as a member of the ListCertificateDomainValidations response.
 *
 * @public
 */
export interface DomainValidationSummary {
  /**
   * The fully qualified domain name (FQDN) in the certificate for which this validation summary applies.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The validation configuration currently in effect for this domain. This reflects the validation method that ACM is currently using to validate domain ownership (for example, email or DNS).
   *
   * @public
   */
  ActiveValidationConfiguration?: ValidationConfiguration | undefined;

  /**
   * The validation configuration for a pending validation method migration. This field is present only when a migration is in progress (for example, from email to DNS validation). It contains the target validation method, the current validation status, and the validation challenge details (such as the CNAME record to add to your DNS configuration).
   *
   * @public
   */
  RequestedValidationConfiguration?: ValidationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListCertificateDomainValidationsResponse {
  /**
   * A list of DomainValidationSummary objects, one for each domain on the certificate. Each object contains the domain name and its active and requested validation configurations.
   *
   * @public
   */
  DomainValidationSummaryList?: DomainValidationSummary[] | undefined;

  /**
   * If the number of results exceeds `MaxItems`, this token is included in the response. Use this token in a subsequent `ListCertificateDomainValidations` request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This structure can be used in the ListCertificates action to filter the output of the certificate list.
 *
 * @public
 */
export interface Filters {
  /**
   * Specify one or more ExtendedKeyUsage extension values.
   *
   * @public
   */
  extendedKeyUsage?: ExtendedKeyUsageName[] | undefined;

  /**
   * Specify one or more KeyUsage extension values.
   *
   * @public
   */
  keyUsage?: KeyUsageName[] | undefined;

  /**
   * Specify one or more algorithms that can be used to generate key pairs.
   *
   * Default filtering returns only `RSA_1024` and `RSA_2048` certificates that have at least one domain. To return other certificate types, provide the desired type signatures in a comma-separated list. For example, `"keyTypes": ["RSA_2048","RSA_4096"]` returns both `RSA_2048` and `RSA_4096` certificates.
   *
   * @public
   */
  keyTypes?: KeyAlgorithm[] | undefined;

  /**
   * Specify `ENABLED` or `DISABLED` to identify certificates that can be exported.
   *
   * @public
   */
  exportOption?: CertificateExport | undefined;

  /**
   * Identifies the Amazon Web Services service that manages the certificate issued by ACM.
   *
   * @public
   */
  managedBy?: CertificateManagedBy | undefined;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * Filter the certificate list by status value.
   *
   * @public
   */
  CertificateStatuses?: CertificateStatus[] | undefined;

  /**
   * Filter the certificate list by certificate key pair origin. Specify one or more `CertificateKeyPairOrigin` values. Default filtering returns only certificates with key pair origin of `AWS_MANAGED` and `CUSTOMER_PROVIDED`.
   *
   * @public
   */
  CertificateKeyPairOrigins?: CertificateKeyPairOrigin[] | undefined;

  /**
   * Filter the certificate list. For more information, see the Filters structure.
   *
   * @public
   */
  Includes?: Filters | undefined;

  /**
   * Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of `NextToken` from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Specifies the field to sort results by. If you specify `SortBy`, you must also specify `SortOrder`.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * Specifies the order of sorted results. If you specify `SortOrder`, you must also specify `SortBy`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * This structure is returned in the response object of ListCertificates action.
 *
 * @public
 */
export interface CertificateSummary {
  /**
   * Amazon Resource Name (ARN) of the certificate. This is of the form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
   *
   * When called by [ListCertificates](https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html), this parameter will only return the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use [DescribeCertificate](https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html).
   *
   * @public
   */
  SubjectAlternativeNameSummaries?: string[] | undefined;

  /**
   * When called by [ListCertificates](https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html), indicates whether the full list of subject alternative names has been included in the response. If false, the response includes all of the subject alternative names included in the certificate. If true, the response only includes the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use [DescribeCertificate](https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html).
   *
   * @public
   */
  HasAdditionalSubjectAlternativeNames?: boolean | undefined;

  /**
   * The status of the certificate.
   *
   * A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic [Certificate request fails](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html). ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with [DNS validation](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html) or [Email validation](https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html), and try again. If validation succeeds, the certificate enters status ISSUED.
   *
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * The source of the certificate. For certificates provided by ACM, this value is `AMAZON_ISSUED`. For certificates that you imported with ImportCertificate, this value is `IMPORTED`. ACM does not provide [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see [Importing Certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *Certificate Manager User Guide*.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * The algorithm that was used to generate the public-private key pair.
   *
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
   *
   * @public
   */
  KeyUsages?: KeyUsageName[] | undefined;

  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
   *
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsageName[] | undefined;

  /**
   * Indicates if export is enabled for the certificate.
   *
   * @public
   */
  ExportOption?: CertificateExport | undefined;

  /**
   * Indicates whether the certificate is currently in use by any Amazon Web Services resources.
   *
   * @public
   */
  InUse?: boolean | undefined;

  /**
   * Indicates whether the certificate has been exported.
   *
   * @public
   */
  Exported?: boolean | undefined;

  /**
   * Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command.
   *
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * The time before which the certificate is not valid.
   *
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * The time after which the certificate is not valid.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * The time at which the certificate was requested.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the certificate was issued. This value exists only when the certificate type is `AMAZON_ISSUED`.
   *
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * The date and time when the certificate was imported. This value exists only when the certificate type is `IMPORTED`.
   *
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * The time at which the certificate was revoked. This value exists only when the certificate status is `REVOKED`.
   *
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * Identifies the Amazon Web Services service that manages the certificate issued by ACM.
   *
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;

  /**
   * The origin of the certificate's key pair.
   *
   * @public
   */
  CertificateKeyPairOrigin?: CertificateKeyPairOrigin | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * When the list is truncated, this value is present and contains the value to use for the `NextToken` parameter in a subsequent pagination request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of ACM certificates.
   *
   * @public
   */
  CertificateSummaryList?: CertificateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForCertificateRequest {
  /**
   * String that contains the ARN of the ACM certificate for which you want to list the tags. This must have the following form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForCertificateResponse {
  /**
   * The key-value pairs that define the applied tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the ACM resource for which to list tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAccountConfigurationRequest {
  /**
   * Specifies expiration events associated with an account.
   *
   * @public
   */
  ExpiryEvents?: ExpiryEventsConfiguration | undefined;

  /**
   * Customer-chosen string used to distinguish between calls to `PutAccountConfiguration`. Idempotency tokens time out after one hour. If you call `PutAccountConfiguration` multiple times with the same unexpired idempotency token, ACM treats it as the same request and returns the original result. If you change the idempotency token for each call, ACM treats each call as a new request.
   *
   * @public
   */
  IdempotencyToken: string | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromCertificateRequest {
  /**
   * String that contains the ARN of the ACM Certificate with one or more tags that you want to remove. This must be of the form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The key-value pair that defines the tag to remove.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface RenewCertificateRequest {
  /**
   * String that contains the ARN of the ACM certificate to be renewed. This must be of the form:
   *
   * `arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.
 *
 * @public
 */
export interface DomainValidationOption {
  /**
   * A fully qualified domain name (FQDN) in the certificate request.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the `DomainName` value or a superdomain of the `DomainName` value. For example, if you request a certificate for `testing.example.com`, you can specify `example.com` for this value. In that case, ACM sends domain validation emails to the following five addresses:
   *
   * - admin@example.com
   * - administrator@example.com
   * - hostmaster@example.com
   * - postmaster@example.com
   * - webmaster@example.com
   *
   * @public
   */
  ValidationDomain: string | undefined;
}

/**
 * @public
 */
export interface RequestCertificateRequest {
  /**
   * Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com.
   *
   * In compliance with [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280), the length of the domain name (technically, the Common Name) that you provide cannot exceed 64 octets (characters), including periods. To add a longer domain name, specify it in the Subject Alternative Name field, which supports names up to 253 octets in length.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can [validate with DNS](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html) or [validate with email](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html). We recommend that you use DNS validation.
   *
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;

  /**
   * Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the `DomainName` field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial quota is 10 domain names. If you need more than 10 names, you must request a quota increase. For more information, see [Quotas](https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html).
   *
   * The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples:
   *
   * - `(63 octets).(63 octets).(63 octets).(61 octets)` is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.
   * - `(64 octets).(63 octets).(63 octets).(61 octets)` is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.
   * - `(63 octets).(63 octets).(63 octets).(62 octets)` is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.
   *
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * Customer chosen string that can be used to distinguish between calls to `RequestCertificate`. Idempotency tokens time out after one hour. Therefore, if you call `RequestCertificate` multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * The domain name that you want ACM to use to send you emails so that you can validate domain ownership.
   *
   * @public
   */
  DomainValidationOptions?: DomainValidationOption[] | undefined;

  /**
   * You can use this parameter to specify whether to export your certificate.
   *
   * Certificate transparency logging opt-out is no longer available. All public certificates are recorded in a certificate transparency log. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency).
   *
   * You can export public ACM certificates to use with Amazon Web Services services as well as outside the Amazon Web Services Cloud. For more information, see [Certificate Manager exportable public certificate](https://docs.aws.amazon.com/acm/latest/userguide/acm-exportable-certificates.html).
   *
   * @public
   */
  Options?: CertificateOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the [Amazon Web Services Private Certificate Authority](https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html) user guide. The ARN must have the following form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * One or more resource tags to associate with the certificate.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by all network clients. Some Amazon Web Services services may require RSA keys, or only support ECDSA keys of a particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken. Check the requirements for the Amazon Web Services service where you plan to deploy your certificate. For more information about selecting an algorithm, see [Key algorithms](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate-characteristics.html#algorithms-term).
   *
   * > **Note:**
   * >
   * > Algorithms supported for an ACM certificate request include:
   * >
   * > - `RSA_2048`
   * > - `EC_prime256v1`
   * > - `EC_secp384r1`
   * >
   * > Other listed algorithms are for imported certificates only.
   *
   * > **Note:** When you request a private PKI certificate signed by a CA from Amazon Web Services Private CA, the specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
   *
   * Default: RSA_2048
   *
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * Identifies the Amazon Web Services service that manages the certificate issued by ACM.
   *
   * @public
   */
  ManagedBy?: CertificateManagedBy | undefined;
}

/**
 * @public
 */
export interface RequestCertificateResponse {
  /**
   * String that contains the ARN of the issued certificate. This must be of the form:
   *
   * `arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ResendValidationEmailRequest {
  /**
   * String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the RequestCertificate action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form:
   *
   * `arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the certificate that needs to be validated.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the `Domain` value or a superdomain of the `Domain` value. For example, if you requested a certificate for `site.subdomain.example.com` and specify a **ValidationDomain** of `subdomain.example.com`, ACM sends email to the the following five addresses:
   *
   * - admin@subdomain.example.com
   * - administrator@subdomain.example.com
   * - hostmaster@subdomain.example.com
   * - postmaster@subdomain.example.com
   * - webmaster@subdomain.example.com
   *
   * @public
   */
  ValidationDomain: string | undefined;
}

/**
 * @public
 */
export interface RevokeAcmeAccountRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * The URL of the ACME account to revoke.
   *
   * @public
   */
  AccountUrl: string | undefined;
}

/**
 * @public
 */
export interface RevokeAcmeExternalAccountBindingRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME external account binding to revoke.
   *
   * @public
   */
  AcmeExternalAccountBindingArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) of the public or private certificate that will be revoked. The ARN must have the following form:
   *
   * `arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * Specifies why you revoked the certificate.
   *
   * @public
   */
  RevocationReason: RevocationReason | undefined;
}

/**
 * @public
 */
export interface RevokeCertificateResponse {
  /**
   * The Amazon Resource Name (ARN) of the public or private certificate that was revoked.
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * Contains metadata about a certificate. Currently supports ACM certificate metadata.
 *
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
   * Metadata for an ACM certificate.
   *
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
 * Defines the X.500 relative distinguished name (RDN).
 *
 * @public
 */
export interface CustomAttribute {
  /**
   * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * Specifies the attribute value of relative distinguished name (RDN).
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains X.500 distinguished name information.
 *
 * @public
 */
export interface DistinguishedName {
  /**
   * The common name (CN) attribute.
   *
   * @public
   */
  CommonName?: string | undefined;

  /**
   * The domain component attributes.
   *
   * @public
   */
  DomainComponents?: string[] | undefined;

  /**
   * The country (C) attribute.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * A list of custom attributes in the distinguished name. Each custom attribute contains an object identifier (OID) and its corresponding value.
   *
   * @public
   */
  CustomAttributes?: CustomAttribute[] | undefined;

  /**
   * The distinguished name qualifier attribute.
   *
   * @public
   */
  DistinguishedNameQualifier?: string | undefined;

  /**
   * The generation qualifier attribute.
   *
   * @public
   */
  GenerationQualifier?: string | undefined;

  /**
   * The given name attribute.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The initials attribute.
   *
   * @public
   */
  Initials?: string | undefined;

  /**
   * The locality (L) attribute.
   *
   * @public
   */
  Locality?: string | undefined;

  /**
   * The organization (O) attribute.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * The organizational unit (OU) attribute.
   *
   * @public
   */
  OrganizationalUnit?: string | undefined;

  /**
   * The pseudonym attribute.
   *
   * @public
   */
  Pseudonym?: string | undefined;

  /**
   * The serial number attribute.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The state or province (ST) attribute.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The surname attribute.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * The title attribute.
   *
   * @public
   */
  Title?: string | undefined;
}

/**
 * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
 *
 * @public
 */
export interface OtherName {
  /**
   * Specifies an OID.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * Specifies an OID value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided.
 *
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
   * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject` must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
   *
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
   * Represents `GeneralName` as a DNS name.
   *
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
   * Represents `GeneralName` as an IPv4 or IPv6 address.
   *
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
   * Represents `GeneralName` using an `OtherName` object.
   *
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
   * Represents `GeneralName` as an object identifier (OID).
   *
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
   * Represents `GeneralName` as an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) email address.
   *
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
   * Represents `GeneralName` as a URI.
   *
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
 * Contains X.509 certificate attributes extracted from the certificate.
 *
 * @public
 */
export interface X509Attributes {
  /**
   * The distinguished name of the certificate issuer.
   *
   * @public
   */
  Issuer?: DistinguishedName | undefined;

  /**
   * The distinguished name of the certificate subject.
   *
   * @public
   */
  Subject?: DistinguishedName | undefined;

  /**
   * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
   *
   * @public
   */
  SubjectAlternativeNames?: GeneralName[] | undefined;

  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
   *
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsageName[] | undefined;

  /**
   * The algorithm that was used to generate the public-private key pair.
   *
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
   *
   * @public
   */
  KeyUsages?: KeyUsageName[] | undefined;

  /**
   * The serial number assigned by the certificate authority.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The time after which the certificate is not valid.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * The time before which the certificate is not valid.
   *
   * @public
   */
  NotBefore?: Date | undefined;
}

/**
 * Contains information about a certificate returned by the SearchCertificates action. This structure includes the certificate ARN, X.509 attributes, and ACM metadata.
 *
 * @public
 */
export interface CertificateSearchResult {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * X.509 certificate attributes such as subject, issuer, and validity period.
   *
   * @public
   */
  X509Attributes?: X509Attributes | undefined;

  /**
   * ACM-specific metadata about the certificate.
   *
   * @public
   */
  CertificateMetadata?: CertificateMetadata | undefined;
}

/**
 * @public
 */
export interface SearchCertificatesResponse {
  /**
   * A list of certificate search results containing certificate ARNs, X.509 attributes, and ACM metadata.
   *
   * @public
   */
  Results?: CertificateSearchResult[] | undefined;

  /**
   * When the list is truncated, this value is present and contains the value to use for the `NextToken` parameter in a subsequent pagination request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the ACM resource to which the tag is to be applied.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair that defines the tag to apply.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the ACM resource from which the tag is to be removed.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key of each tag to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAcmeDomainValidationRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME domain validation to update.
   *
   * @public
   */
  AcmeDomainValidationArn: string | undefined;

  /**
   * The updated prevalidation options.
   *
   * @public
   */
  PrevalidationOptions?: PrevalidationOptions | undefined;
}

/**
 * @public
 */
export interface UpdateAcmeEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint to update.
   *
   * @public
   */
  AcmeEndpointArn: string | undefined;

  /**
   * The updated authorization behavior.
   *
   * @public
   */
  AuthorizationBehavior?: AcmeAuthorizationBehavior | undefined;

  /**
   * The updated contact requirement.
   *
   * @public
   */
  Contact?: AcmeContact | undefined;

  /**
   * The updated certificate authority configuration.
   *
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateOptionsRequest {
  /**
   * ARN of the requested certificate to update. This must be of the form:
   *
   * `arn:aws:acm:us-east-1:account:certificate/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * Use to update the options for your certificate. Currently, you can change the domain validation method or specify whether to export your certificate. For more information about migrating from email to DNS validation, see [Migrate from email to DNS validation](https://docs.aws.amazon.com/acm/latest/userguide/email-to-dns-migration.html).
   *
   * @public
   */
  Options: CertificateOptions | undefined;
}

/**
 * A filter statement used to search for certificates. Can contain AND, OR, NOT logical operators or a single filter.
 *
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
   * A list of filter statements that must all be true.
   *
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
   * A list of filter statements where at least one must be true.
   *
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
   * A filter statement that must not be true.
   *
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
   * A single certificate filter.
   *
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
   * A filter statement that defines the search criteria. You can combine multiple filters using AND, OR, and NOT logical operators to create complex queries.
   *
   * @public
   */
  FilterStatement?: CertificateFilterStatement | undefined;

  /**
   * The maximum number of results to return in the response. Default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of `NextToken` from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the field to sort results by. Valid values are CREATED_AT, NOT_AFTER, STATUS, RENEWAL_STATUS, EXPORTED, IN_USE, NOT_BEFORE, KEY_ALGORITHM, TYPE, CERTIFICATE_ARN, COMMON_NAME, REVOKED_AT, RENEWAL_ELIGIBILITY, ISSUED_AT, MANAGED_BY, EXPORT_OPTION, VALIDATION_METHOD, and IMPORTED_AT.
   *
   * @public
   */
  SortBy?: SearchCertificatesSortBy | undefined;

  /**
   * Specifies the order of sorted results. Valid values are ASCENDING or DESCENDING.
   *
   * @public
   */
  SortOrder?: SearchCertificatesSortOrder | undefined;
}

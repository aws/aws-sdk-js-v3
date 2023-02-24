// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { LicenseManagerServiceException as __BaseException } from "./LicenseManagerServiceException";

export interface AcceptGrantRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;
}

export enum GrantStatus {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  FAILED_WORKFLOW = "FAILED_WORKFLOW",
  PENDING_ACCEPT = "PENDING_ACCEPT",
  PENDING_DELETE = "PENDING_DELETE",
  PENDING_WORKFLOW = "PENDING_WORKFLOW",
  REJECTED = "REJECTED",
  WORKFLOW_COMPLETED = "WORKFLOW_COMPLETED",
}

export interface AcceptGrantResponse {
  /**
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * <p>Grant status.</p>
   */
  Status?: GrantStatus | string;

  /**
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * <p>Access to resource denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 */
export class AuthorizationException extends __BaseException {
  readonly name: "AuthorizationException" = "AuthorizationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationException, __BaseException>) {
    super({
      name: "AuthorizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Too many requests have been submitted. Try again after a brief wait.</p>
 */
export class RateLimitExceededException extends __BaseException {
  readonly name: "RateLimitExceededException" = "RateLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RateLimitExceededException, __BaseException>) {
    super({
      name: "RateLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RateLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The server experienced an internal error. Try again.</p>
 */
export class ServerInternalException extends __BaseException {
  readonly name: "ServerInternalException" = "ServerInternalException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerInternalException, __BaseException>) {
    super({
      name: "ServerInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerInternalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The provided input is not valid. Try your request again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

export enum AllowedOperation {
  CHECKOUT_BORROW_LICENSE = "CheckoutBorrowLicense",
  CHECKOUT_LICENSE = "CheckoutLicense",
  CHECK_IN_LICENSE = "CheckInLicense",
  CREATE_GRANT = "CreateGrant",
  CREATE_TOKEN = "CreateToken",
  EXTEND_CONSUMPTION_LICENSE = "ExtendConsumptionLicense",
  LIST_PURCHASED_LICENSES = "ListPurchasedLicenses",
}

/**
 * <p>Describes automated discovery.</p>
 */
export interface AutomatedDiscoveryInformation {
  /**
   * <p>Time that automated discovery last ran.</p>
   */
  LastRunTime?: Date;
}

export interface CheckInLicenseRequest {
  /**
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken: string | undefined;

  /**
   * <p>License beneficiary.</p>
   */
  Beneficiary?: string;
}

export interface CheckInLicenseResponse {}

/**
 * <p>There was a conflict processing the request. Try your request again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * <p>The resource cannot be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * <p>Describes key/value pairs.</p>
 */
export interface Metadata {
  /**
   * <p>The key name.</p>
   */
  Name?: string;

  /**
   * <p>The value.</p>
   */
  Value?: string;
}

export enum DigitalSignatureMethod {
  JWT_PS384 = "JWT_PS384",
}

export enum EntitlementDataUnit {
  BITS = "Bits",
  BITS_PER_SECOND = "Bits/Second",
  BYTES = "Bytes",
  BYTES_PER_SECOND = "Bytes/Second",
  COUNT = "Count",
  COUNT_PER_SECOND = "Count/Second",
  GIGABITS = "Gigabits",
  GIGABITS_PER_SECOND = "Gigabits/Second",
  GIGABYTES = "Gigabytes",
  GIGABYTES_PER_SECOND = "Gigabytes/Second",
  KILOBITS = "Kilobits",
  KILOBITS_PER_SECOND = "Kilobits/Second",
  KILOBYTES = "Kilobytes",
  KILOBYTES_PER_SECOND = "Kilobytes/Second",
  MEGABITS = "Megabits",
  MEGABITS_PER_SECOND = "Megabits/Second",
  MEGABYTES = "Megabytes",
  MEGABYTES_PER_SECOND = "Megabytes/Second",
  MICROSECONDS = "Microseconds",
  MILLISECONDS = "Milliseconds",
  NONE = "None",
  PERCENT = "Percent",
  SECONDS = "Seconds",
  TERABITS = "Terabits",
  TERABITS_PER_SECOND = "Terabits/Second",
  TERABYTES = "Terabytes",
  TERABYTES_PER_SECOND = "Terabytes/Second",
}

/**
 * <p>Data associated with an entitlement resource.</p>
 */
export interface EntitlementData {
  /**
   * <p>Entitlement data name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Entitlement data value.</p>
   */
  Value?: string;

  /**
   * <p>Entitlement data unit.</p>
   */
  Unit: EntitlementDataUnit | string | undefined;
}

export interface CheckoutBorrowLicenseRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license. The license must use the borrow consumption configuration.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>License entitlements. Partial checkouts are not supported.</p>
   */
  Entitlements: EntitlementData[] | undefined;

  /**
   * <p>Digital signature method. The possible value is JSON Web Signature (JWS) algorithm PS384.
   *          For more information, see <a href="https://tools.ietf.org/html/rfc7518#section-3.5">RFC 7518 Digital Signature with RSASSA-PSS</a>.</p>
   */
  DigitalSignatureMethod: DigitalSignatureMethod | string | undefined;

  /**
   * <p>Node ID.</p>
   */
  NodeId?: string;

  /**
   * <p>Information about constraints.</p>
   */
  CheckoutMetadata?: Metadata[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;
}

export interface CheckoutBorrowLicenseResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken?: string;

  /**
   * <p>Allowed license entitlements.</p>
   */
  EntitlementsAllowed?: EntitlementData[];

  /**
   * <p>Node ID.</p>
   */
  NodeId?: string;

  /**
   * <p>Signed token.</p>
   */
  SignedToken?: string;

  /**
   * <p>Date and time at which the license checkout is issued.</p>
   */
  IssuedAt?: string;

  /**
   * <p>Date and time at which the license checkout expires.</p>
   */
  Expiration?: string;

  /**
   * <p>Information about constraints.</p>
   */
  CheckoutMetadata?: Metadata[];
}

/**
 * <p>The entitlement is not allowed.</p>
 */
export class EntitlementNotAllowedException extends __BaseException {
  readonly name: "EntitlementNotAllowedException" = "EntitlementNotAllowedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitlementNotAllowedException, __BaseException>) {
    super({
      name: "EntitlementNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitlementNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There are no entitlements found for this license, or the entitlement maximum count is reached.</p>
 */
export class NoEntitlementsAllowedException extends __BaseException {
  readonly name: "NoEntitlementsAllowedException" = "NoEntitlementsAllowedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoEntitlementsAllowedException, __BaseException>) {
    super({
      name: "NoEntitlementsAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoEntitlementsAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This is not the correct Region for the resource. Try again.</p>
 */
export class RedirectException extends __BaseException {
  readonly name: "RedirectException" = "RedirectException";
  readonly $fault: "client" = "client";
  Location?: string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedirectException, __BaseException>) {
    super({
      name: "RedirectException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedirectException.prototype);
    this.Location = opts.Location;
    this.Message = opts.Message;
  }
}

/**
 * <p>The digital signature method is unsupported. Try your request again.</p>
 */
export class UnsupportedDigitalSignatureMethodException extends __BaseException {
  readonly name: "UnsupportedDigitalSignatureMethodException" = "UnsupportedDigitalSignatureMethodException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDigitalSignatureMethodException, __BaseException>) {
    super({
      name: "UnsupportedDigitalSignatureMethodException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDigitalSignatureMethodException.prototype);
    this.Message = opts.Message;
  }
}

export enum CheckoutType {
  PERPETUAL = "PERPETUAL",
  PROVISIONAL = "PROVISIONAL",
}

export interface CheckoutLicenseRequest {
  /**
   * <p>Product SKU.</p>
   */
  ProductSKU: string | undefined;

  /**
   * <p>Checkout type.</p>
   */
  CheckoutType: CheckoutType | string | undefined;

  /**
   * <p>Key fingerprint identifying the license.</p>
   */
  KeyFingerprint: string | undefined;

  /**
   * <p>License entitlements.</p>
   */
  Entitlements: EntitlementData[] | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>License beneficiary.</p>
   */
  Beneficiary?: string;

  /**
   * <p>Node ID.</p>
   */
  NodeId?: string;
}

export interface CheckoutLicenseResponse {
  /**
   * <p>Checkout type.</p>
   */
  CheckoutType?: CheckoutType | string;

  /**
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken?: string;

  /**
   * <p>Allowed license entitlements.</p>
   */
  EntitlementsAllowed?: EntitlementData[];

  /**
   * <p>Signed token.</p>
   */
  SignedToken?: string;

  /**
   * <p>Node ID.</p>
   */
  NodeId?: string;

  /**
   * <p>Date and time at which the license checkout is issued.</p>
   */
  IssuedAt?: string;

  /**
   * <p>Date and time at which the license checkout expires.</p>
   */
  Expiration?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the checkout license.</p>
   */
  LicenseArn?: string;
}

export interface CreateGrantRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Grant name.</p>
   */
  GrantName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>The grant principals. This value should be specified as an Amazon Resource Name (ARN).</p>
   */
  Principals: string[] | undefined;

  /**
   * <p>Home Region of the grant.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>Allowed operations for the grant.</p>
   */
  AllowedOperations: (AllowedOperation | string)[] | undefined;
}

export interface CreateGrantResponse {
  /**
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * <p>Grant status.</p>
   */
  Status?: GrantStatus | string;

  /**
   * <p>Grant version.</p>
   */
  Version?: string;
}

export interface CreateGrantVersionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * <p>Grant name.</p>
   */
  GrantName?: string;

  /**
   * <p>Allowed operations for the grant.</p>
   */
  AllowedOperations?: (AllowedOperation | string)[];

  /**
   * <p>Grant status.</p>
   */
  Status?: GrantStatus | string;

  /**
   * <p>Grant status reason.</p>
   */
  StatusReason?: string;

  /**
   * <p>Current version of the grant.</p>
   */
  SourceVersion?: string;
}

export interface CreateGrantVersionResponse {
  /**
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * <p>Grant status.</p>
   */
  Status?: GrantStatus | string;

  /**
   * <p>New version of the grant.</p>
   */
  Version?: string;
}

/**
 * <p>Details about a borrow configuration.</p>
 */
export interface BorrowConfiguration {
  /**
   * <p>Indicates whether early check-ins are allowed.</p>
   */
  AllowEarlyCheckIn: boolean | undefined;

  /**
   * <p>Maximum time for the borrow configuration, in minutes.</p>
   */
  MaxTimeToLiveInMinutes: number | undefined;
}

/**
 * <p>Details about a provisional configuration.</p>
 */
export interface ProvisionalConfiguration {
  /**
   * <p>Maximum time for the provisional configuration, in minutes.</p>
   */
  MaxTimeToLiveInMinutes: number | undefined;
}

export enum RenewType {
  MONTHLY = "Monthly",
  NONE = "None",
  WEEKLY = "Weekly",
}

/**
 * <p>Details about a consumption configuration.</p>
 */
export interface ConsumptionConfiguration {
  /**
   * <p>Renewal frequency.</p>
   */
  RenewType?: RenewType | string;

  /**
   * <p>Details about a provisional configuration.</p>
   */
  ProvisionalConfiguration?: ProvisionalConfiguration;

  /**
   * <p>Details about a borrow configuration.</p>
   */
  BorrowConfiguration?: BorrowConfiguration;
}

export enum EntitlementUnit {
  BITS = "Bits",
  BITS_PER_SECOND = "Bits/Second",
  BYTES = "Bytes",
  BYTES_PER_SECOND = "Bytes/Second",
  COUNT = "Count",
  COUNT_PER_SECOND = "Count/Second",
  GIGABITS = "Gigabits",
  GIGABITS_PER_SECOND = "Gigabits/Second",
  GIGABYTES = "Gigabytes",
  GIGABYTES_PER_SECOND = "Gigabytes/Second",
  KILOBITS = "Kilobits",
  KILOBITS_PER_SECOND = "Kilobits/Second",
  KILOBYTES = "Kilobytes",
  KILOBYTES_PER_SECOND = "Kilobytes/Second",
  MEGABITS = "Megabits",
  MEGABITS_PER_SECOND = "Megabits/Second",
  MEGABYTES = "Megabytes",
  MEGABYTES_PER_SECOND = "Megabytes/Second",
  MICROSECONDS = "Microseconds",
  MILLISECONDS = "Milliseconds",
  NONE = "None",
  PERCENT = "Percent",
  SECONDS = "Seconds",
  TERABITS = "Terabits",
  TERABITS_PER_SECOND = "Terabits/Second",
  TERABYTES = "Terabytes",
  TERABYTES_PER_SECOND = "Terabytes/Second",
}

/**
 * <p>Describes a resource entitled for use with a license.</p>
 */
export interface Entitlement {
  /**
   * <p>Entitlement name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Entitlement resource. Use only if the unit is None.</p>
   */
  Value?: string;

  /**
   * <p>Maximum entitlement count. Use if the unit is not None.</p>
   */
  MaxCount?: number;

  /**
   * <p>Indicates whether overages are allowed.</p>
   */
  Overage?: boolean;

  /**
   * <p>Entitlement unit.</p>
   */
  Unit: EntitlementUnit | string | undefined;

  /**
   * <p>Indicates whether check-ins are allowed.</p>
   */
  AllowCheckIn?: boolean;
}

/**
 * <p>Details about the issuer of a license.</p>
 */
export interface Issuer {
  /**
   * <p>Issuer name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify,
   *          and support the RSASSA-PSS SHA-256 signing algorithm.</p>
   */
  SignKey?: string;
}

/**
 * <p>Describes a time range, in ISO8601-UTC format.</p>
 */
export interface DatetimeRange {
  /**
   * <p>Start of the time range.</p>
   */
  Begin: string | undefined;

  /**
   * <p>End of the time range.</p>
   */
  End?: string;
}

export interface CreateLicenseRequest {
  /**
   * <p>License name.</p>
   */
  LicenseName: string | undefined;

  /**
   * <p>Product name.</p>
   */
  ProductName: string | undefined;

  /**
   * <p>Product SKU.</p>
   */
  ProductSKU: string | undefined;

  /**
   * <p>License issuer.</p>
   */
  Issuer: Issuer | undefined;

  /**
   * <p>Home Region for the license.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
   */
  Validity: DatetimeRange | undefined;

  /**
   * <p>License entitlements.</p>
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * <p>License beneficiary.</p>
   */
  Beneficiary: string | undefined;

  /**
   * <p>Configuration for consumption of the license. Choose a provisional configuration for workloads
   *           running with continuous connectivity. Choose a borrow configuration for workloads with offline
   *           usage.</p>
   */
  ConsumptionConfiguration: ConsumptionConfiguration | undefined;

  /**
   * <p>Information about the license.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;
}

export enum LicenseStatus {
  AVAILABLE = "AVAILABLE",
  DEACTIVATED = "DEACTIVATED",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
  PENDING_AVAILABLE = "PENDING_AVAILABLE",
  PENDING_DELETE = "PENDING_DELETE",
  SUSPENDED = "SUSPENDED",
}

export interface CreateLicenseResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * <p>License status.</p>
   */
  Status?: LicenseStatus | string;

  /**
   * <p>License version.</p>
   */
  Version?: string;
}

export enum LicenseCountingType {
  CORE = "Core",
  INSTANCE = "Instance",
  SOCKET = "Socket",
  VCPU = "vCPU",
}

/**
 * <p>Describes product information filters.</p>
 */
export interface ProductInformationFilter {
  /**
   * <p>Filter name.</p>
   */
  ProductInformationFilterName: string | undefined;

  /**
   * <p>Filter value.</p>
   */
  ProductInformationFilterValue?: string[];

  /**
   * <p>Logical operator.</p>
   */
  ProductInformationFilterComparator: string | undefined;
}

/**
 * <p>Describes product information for a license configuration.</p>
 */
export interface ProductInformation {
  /**
   * <p>Resource type. The possible values are <code>SSM_MANAGED</code> | <code>RDS</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>A Product information filter consists of a <code>ProductInformationFilterComparator</code> which is a logical operator, a <code>ProductInformationFilterName</code> which specifies the type of filter being declared, and a <code>ProductInformationFilterValue</code> that specifies the value to filter on. </p>
   *          <p>Accepted values for <code>ProductInformationFilterName</code> are listed here along with descriptions and valid options for <code>ProductInformationFilterComparator</code>. </p>
   *          <p>The following filters and are supported when the resource type
   *          is <code>SSM_MANAGED</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Application Name</code> - The name of the application.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Application Publisher</code> - The publisher of the application.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Application Version</code> - The version of the application.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Platform Name</code> - The name of the platform.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Platform Type</code> - The platform type.
   *                Logical operator is <code>EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Tag:key</code> - The key of a tag attached to an Amazon Web Services resource you wish to exclude from automated discovery. Logical operator is <code>NOT_EQUALS</code>.  The key for your tag must be appended to <code>Tag:</code> following the example: <code>Tag:name-of-your-key</code>. <code>ProductInformationFilterValue</code> is optional if you are not using values for the key.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountId</code> - The 12-digit ID of an Amazon Web Services account you wish to exclude from automated discovery.
   *                Logical operator is <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>License Included</code> - The type of license included.
   *                Logical operators are <code>EQUALS</code> and <code>NOT_EQUALS</code>.
   *                Possible values are: <code>sql-server-enterprise</code> |
   *                <code>sql-server-standard</code> |
   *                <code>sql-server-web</code> |
   *                <code>windows-server-datacenter</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The following filters and logical operators are supported when the resource type
   *          is <code>RDS</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Engine Edition</code> - The edition of the database engine.
   *                Logical operator is <code>EQUALS</code>.
   *                Possible values are: <code>oracle-ee</code> | <code>oracle-se</code> | <code>oracle-se1</code> | <code>oracle-se2</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>License Pack</code> - The license pack.
   *                Logical operator is <code>EQUALS</code>.
   *                Possible values are: <code>data guard</code> |
   *                <code>diagnostic pack sqlt</code> |
   *                <code>tuning pack sqlt</code> |
   *                <code>ols</code> |
   *                <code>olap</code>.</p>
   *             </li>
   *          </ul>
   */
  ProductInformationFilterList: ProductInformationFilter[] | undefined;
}

/**
 * <p>Details about a tag for a license configuration.</p>
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   */
  Key?: string;

  /**
   * <p>Tag value.</p>
   */
  Value?: string;
}

export interface CreateLicenseConfigurationRequest {
  /**
   * <p>Name of the license configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Dimension used to track the license inventory.</p>
   */
  LicenseCountingType: LicenseCountingType | string | undefined;

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Indicates whether hard or soft license enforcement is used. Exceeding a hard limit
   *          blocks the launch of new instances.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules
   *          vary by dimension, as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cores</code> dimension: <code>allowedTenancy</code> |
   *                <code>licenseAffinityToHost</code> |
   *                <code>maximumCores</code> | <code>minimumCores</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Instances</code> dimension: <code>allowedTenancy</code> |
   *                <code>maximumCores</code> | <code>minimumCores</code> |
   *                <code>maximumSockets</code> | <code>minimumSockets</code> |
   *                <code>maximumVcpus</code> | <code>minimumVcpus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sockets</code> dimension: <code>allowedTenancy</code> |
   *                <code>licenseAffinityToHost</code> |
   *                <code>maximumSockets</code> | <code>minimumSockets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vCPUs</code> dimension: <code>allowedTenancy</code> |
   *                <code>honorVcpuOptimization</code> |
   *                <code>maximumVcpus</code> | <code>minimumVcpus</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The unit for <code>licenseAffinityToHost</code> is days and the range is 1 to 180. The possible
   *          values for <code>allowedTenancy</code> are <code>EC2-Default</code>, <code>EC2-DedicatedHost</code>, and
   *          <code>EC2-DedicatedInstance</code>. The possible values for <code>honorVcpuOptimization</code> are
   *          <code>True</code> and <code>False</code>.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Tags to add to the license configuration.</p>
   */
  Tags?: Tag[];

  /**
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];
}

export interface CreateLicenseConfigurationResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * <p>Information about a license type conversion task.</p>
 */
export interface LicenseConversionContext {
  /**
   * <p>The Usage operation value that corresponds to the license type you are converting your resource from.  For more information about which platforms correspond to which usage operation values see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html#billing-info">Sample data: usage operation by platform
   *       </a>
   *          </p>
   */
  UsageOperation?: string;
}

export interface CreateLicenseConversionTaskForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource you are converting the license type for.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Information that identifies the license type you are converting from.
   *
   *          For the structure of the source license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the Amazon Web Services CLI</a> in the <i>License Manager User Guide</i>.</p>
   */
  SourceLicenseContext: LicenseConversionContext | undefined;

  /**
   * <p>Information that identifies the license type you are converting to. For the structure of the destination license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the Amazon Web Services CLI</a> in the <i>License Manager User Guide</i>.</p>
   */
  DestinationLicenseContext: LicenseConversionContext | undefined;
}

export interface CreateLicenseConversionTaskForResourceResponse {
  /**
   * <p>The ID of the created license type conversion task.</p>
   */
  LicenseConversionTaskId?: string;
}

/**
 * <p>Details of the license configuration that this generator reports on.</p>
 */
export interface ReportContext {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration that this generator reports on.</p>
   */
  licenseConfigurationArns: string[] | undefined;
}

export enum ReportFrequencyType {
  DAY = "DAY",
  MONTH = "MONTH",
  WEEK = "WEEK",
}

/**
 * <p>Details about how frequently reports are generated.</p>
 */
export interface ReportFrequency {
  /**
   * <p>Number of times within the frequency period that a report is generated.
   *          The only supported value is <code>1</code>.</p>
   */
  value?: number;

  /**
   * <p>Time period between each report. The period can be daily, weekly, or monthly.</p>
   */
  period?: ReportFrequencyType | string;
}

export enum ReportType {
  LICENSE_CONFIGURATION_SUMMARY_REPORT = "LicenseConfigurationSummaryReport",
  LICENSE_CONFIGURATION_USAGE_REPORT = "LicenseConfigurationUsageReport",
}

export interface CreateLicenseManagerReportGeneratorRequest {
  /**
   * <p>Name of the report generator.</p>
   */
  ReportGeneratorName: string | undefined;

  /**
   * <p>Type of reports to generate. The following report types an be generated:</p>
   *          <ul>
   *             <li>
   *                <p>License configuration report - Reports the number and details of consumed licenses for a license configuration.</p>
   *             </li>
   *             <li>
   *                <p>Resource report - Reports the tracked licenses and resource consumption for a license configuration.</p>
   *             </li>
   *          </ul>
   */
  Type: (ReportType | string)[] | undefined;

  /**
   * <p>Defines the type of license configuration the report generator tracks.</p>
   */
  ReportContext: ReportContext | undefined;

  /**
   * <p>Frequency by which reports are generated.  Reports can be generated daily, monthly, or weekly.</p>
   */
  ReportFrequency: ReportFrequency | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Description of the report generator.</p>
   */
  Description?: string;

  /**
   * <p>Tags to add to the report generator.</p>
   */
  Tags?: Tag[];
}

export interface CreateLicenseManagerReportGeneratorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new report generator.</p>
   */
  LicenseManagerReportGeneratorArn?: string;
}

export interface CreateLicenseVersionRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>License name.</p>
   */
  LicenseName: string | undefined;

  /**
   * <p>Product name.</p>
   */
  ProductName: string | undefined;

  /**
   * <p>License issuer.</p>
   */
  Issuer: Issuer | undefined;

  /**
   * <p>Home Region of the license.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
   */
  Validity: DatetimeRange | undefined;

  /**
   * <p>Information about the license.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * <p>License entitlements.</p>
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * <p>Configuration for consumption of the license. Choose a provisional configuration for workloads
   *          running with continuous connectivity. Choose a borrow configuration for workloads with offline
   *          usage.</p>
   */
  ConsumptionConfiguration: ConsumptionConfiguration | undefined;

  /**
   * <p>License status.</p>
   */
  Status: LicenseStatus | string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Current version of the license.</p>
   */
  SourceVersion?: string;
}

export interface CreateLicenseVersionResponse {
  /**
   * <p>License ARN.</p>
   */
  LicenseArn?: string;

  /**
   * <p>New version of the license.</p>
   */
  Version?: string;

  /**
   * <p>License status.</p>
   */
  Status?: LicenseStatus | string;
}

export interface CreateTokenRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the
   *           JWT token.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM roles to embed in the token.
   *          License Manager does not check whether the roles are in use.</p>
   */
  RoleArns?: string[];

  /**
   * <p>Token expiration, in days, counted from token creation. The default is 365 days.</p>
   */
  ExpirationInDays?: number;

  /**
   * <p>Data specified by the caller to be included in the JWT token. The data is mapped
   *           to the amr claim of the JWT token.</p>
   */
  TokenProperties?: string[];

  /**
   * <p>Idempotency token, valid for 10 minutes.</p>
   */
  ClientToken: string | undefined;
}

export enum TokenType {
  REFRESH_TOKEN = "REFRESH_TOKEN",
}

export interface CreateTokenResponse {
  /**
   * <p>Token ID.</p>
   */
  TokenId?: string;

  /**
   * <p>Token type.</p>
   */
  TokenType?: TokenType | string;

  /**
   * <p>Refresh token, encoded as a JWT token.</p>
   */
  Token?: string;
}

export interface DeleteGrantRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * <p>The Status reason for the delete request.</p>
   */
  StatusReason?: string;

  /**
   * <p>Current version of the grant.</p>
   */
  Version: string | undefined;
}

export interface DeleteGrantResponse {
  /**
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * <p>Grant status.</p>
   */
  Status?: GrantStatus | string;

  /**
   * <p>Grant version.</p>
   */
  Version?: string;
}

export interface DeleteLicenseRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>Current version of the license.</p>
   */
  SourceVersion: string | undefined;
}

export enum LicenseDeletionStatus {
  DELETED = "DELETED",
  PENDING_DELETE = "PENDING_DELETE",
}

export interface DeleteLicenseResponse {
  /**
   * <p>License status.</p>
   */
  Status?: LicenseDeletionStatus | string;

  /**
   * <p>Date when the license is deleted.</p>
   */
  DeletionDate?: string;
}

export interface DeleteLicenseConfigurationRequest {
  /**
   * <p>ID of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export interface DeleteLicenseConfigurationResponse {}

export interface DeleteLicenseManagerReportGeneratorRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the report generator to be deleted.</p>
   */
  LicenseManagerReportGeneratorArn: string | undefined;
}

export interface DeleteLicenseManagerReportGeneratorResponse {}

export interface DeleteTokenRequest {
  /**
   * <p>Token ID.</p>
   */
  TokenId: string | undefined;
}

export interface DeleteTokenResponse {}

export interface ExtendLicenseConsumptionRequest {
  /**
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request. Provides an error response if you do not have the required permissions.</p>
   */
  DryRun?: boolean;
}

export interface ExtendLicenseConsumptionResponse {
  /**
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken?: string;

  /**
   * <p>Date and time at which the license consumption expires.</p>
   */
  Expiration?: string;
}

export interface GetAccessTokenRequest {
  /**
   * <p>Refresh token, encoded as a JWT token.</p>
   */
  Token: string | undefined;

  /**
   * <p>Token properties to validate against those present in the JWT token.</p>
   */
  TokenProperties?: string[];
}

export interface GetAccessTokenResponse {
  /**
   * <p>Temporary access token.</p>
   */
  AccessToken?: string;
}

export interface GetGrantRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * <p>Describes a grant.</p>
 */
export interface Grant {
  /**
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * <p>Grant name.</p>
   */
  GrantName: string | undefined;

  /**
   * <p>Parent ARN.</p>
   */
  ParentArn: string | undefined;

  /**
   * <p>License ARN.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>The grantee principal ARN.</p>
   */
  GranteePrincipalArn: string | undefined;

  /**
   * <p>Home Region of the grant.</p>
   */
  HomeRegion: string | undefined;

  /**
   * <p>Grant status.</p>
   */
  GrantStatus: GrantStatus | string | undefined;

  /**
   * <p>Grant status reason.</p>
   */
  StatusReason?: string;

  /**
   * <p>Grant version.</p>
   */
  Version: string | undefined;

  /**
   * <p>Granted operations.</p>
   */
  GrantedOperations: (AllowedOperation | string)[] | undefined;
}

export interface GetGrantResponse {
  /**
   * <p>Grant details.</p>
   */
  Grant?: Grant;
}

export interface GetLicenseRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>License version.</p>
   */
  Version?: string;
}

/**
 * <p>Details associated with the issuer of a license.</p>
 */
export interface IssuerDetails {
  /**
   * <p>Issuer name.</p>
   */
  Name?: string;

  /**
   * <p>Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify,
   *          and support the RSASSA-PSS SHA-256 signing algorithm.</p>
   */
  SignKey?: string;

  /**
   * <p>Issuer key fingerprint.</p>
   */
  KeyFingerprint?: string;
}

/**
 * <p>Software license that is managed in License Manager.</p>
 */
export interface License {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * <p>License name.</p>
   */
  LicenseName?: string;

  /**
   * <p>Product name.</p>
   */
  ProductName?: string;

  /**
   * <p>Product SKU.</p>
   */
  ProductSKU?: string;

  /**
   * <p>License issuer.</p>
   */
  Issuer?: IssuerDetails;

  /**
   * <p>Home Region of the license.</p>
   */
  HomeRegion?: string;

  /**
   * <p>License status.</p>
   */
  Status?: LicenseStatus | string;

  /**
   * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
   */
  Validity?: DatetimeRange;

  /**
   * <p>License beneficiary.</p>
   */
  Beneficiary?: string;

  /**
   * <p>License entitlements.</p>
   */
  Entitlements?: Entitlement[];

  /**
   * <p>Configuration for consumption of the license.</p>
   */
  ConsumptionConfiguration?: ConsumptionConfiguration;

  /**
   * <p>License metadata.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * <p>License creation time.</p>
   */
  CreateTime?: string;

  /**
   * <p>License version.</p>
   */
  Version?: string;
}

export interface GetLicenseResponse {
  /**
   * <p>License details.</p>
   */
  License?: License;
}

export interface GetLicenseConfigurationRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

export enum ResourceType {
  EC2_AMI = "EC2_AMI",
  EC2_HOST = "EC2_HOST",
  EC2_INSTANCE = "EC2_INSTANCE",
  RDS = "RDS",
  SYSTEMS_MANAGER_MANAGED_INSTANCE = "SYSTEMS_MANAGER_MANAGED_INSTANCE",
}

/**
 * <p>Details about license consumption.</p>
 */
export interface ConsumedLicenseSummary {
  /**
   * <p>Resource type of the resource consuming a license.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;
}

/**
 * <p>Summary information about a managed resource.</p>
 */
export interface ManagedResourceSummary {
  /**
   * <p>Type of resource associated with a license.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Number of resources associated with licenses.</p>
   */
  AssociationCount?: number;
}

export interface GetLicenseConfigurationResponse {
  /**
   * <p>Unique ID for the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Dimension for which the licenses are counted.</p>
   */
  LicenseCountingType?: LicenseCountingType | string;

  /**
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Number of available licenses.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Number of licenses assigned to resources.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>License configuration status.</p>
   */
  Status?: string;

  /**
   * <p>Account ID of the owner of the license configuration.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Summaries of the licenses consumed by resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * <p>Summaries of the managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * <p>Tags for the license configuration.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  /**
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;
}

export interface GetLicenseConversionTaskRequest {
  /**
   * <p>ID of the license type conversion task to retrieve information on.</p>
   */
  LicenseConversionTaskId: string | undefined;
}

export enum LicenseConversionTaskStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

export interface GetLicenseConversionTaskResponse {
  /**
   * <p>ID of the license type conversion task.</p>
   */
  LicenseConversionTaskId?: string;

  /**
   * <p>Amazon Resource Names (ARN) of the resources the license conversion task is associated with.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the license type converted from.</p>
   */
  SourceLicenseContext?: LicenseConversionContext;

  /**
   * <p>Information about the license type converted to.</p>
   */
  DestinationLicenseContext?: LicenseConversionContext;

  /**
   * <p>The status message for the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Status of the license type conversion task.</p>
   */
  Status?: LicenseConversionTaskStatus | string;

  /**
   * <p>Time at which the license type conversion task was started .</p>
   */
  StartTime?: Date;

  /**
   * <p>Amount of time to complete the license type conversion.</p>
   */
  LicenseConversionTime?: Date;

  /**
   * <p>Time at which the license type conversion task was completed.</p>
   */
  EndTime?: Date;
}

export interface GetLicenseManagerReportGeneratorRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the report generator.</p>
   */
  LicenseManagerReportGeneratorArn: string | undefined;
}

/**
 * <p>Details of the S3 bucket that report generator reports are published to.</p>
 */
export interface S3Location {
  /**
   * <p>Name of the S3 bucket reports are published to.</p>
   */
  bucket?: string;

  /**
   * <p>Prefix of the S3 bucket reports are published to.</p>
   */
  keyPrefix?: string;
}

/**
 * <p>Describe the details of a report generator.</p>
 */
export interface ReportGenerator {
  /**
   * <p>Name of the report generator.</p>
   */
  ReportGeneratorName?: string;

  /**
   * <p>Type of reports that are generated.</p>
   */
  ReportType?: (ReportType | string)[];

  /**
   * <p>License configuration type for this generator.</p>
   */
  ReportContext?: ReportContext;

  /**
   * <p>Details about how frequently reports are generated.</p>
   */
  ReportFrequency?: ReportFrequency;

  /**
   * <p>Amazon Resource Name (ARN) of the report generator.</p>
   */
  LicenseManagerReportGeneratorArn?: string;

  /**
   * <p>Status of the last report generation attempt.</p>
   */
  LastRunStatus?: string;

  /**
   * <p>Failure message for the last report generation attempt.</p>
   */
  LastRunFailureReason?: string;

  /**
   * <p>Time the last report was generated at.</p>
   */
  LastReportGenerationTime?: string;

  /**
   * <p>The Amazon Web Services account ID used to create the report generator.</p>
   */
  ReportCreatorAccount?: string;

  /**
   * <p>Description of the report generator.</p>
   */
  Description?: string;

  /**
   * <p>Details of the S3 bucket that report generator reports are published to.</p>
   */
  S3Location?: S3Location;

  /**
   * <p>Time the report was created.</p>
   */
  CreateTime?: string;

  /**
   * <p>Tags associated with the report generator.</p>
   */
  Tags?: Tag[];
}

export interface GetLicenseManagerReportGeneratorResponse {
  /**
   * <p>A report generator that creates periodic reports about your license configurations.</p>
   */
  ReportGenerator?: ReportGenerator;
}

export interface GetLicenseUsageRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;
}

/**
 * <p>Usage associated with an entitlement resource.</p>
 */
export interface EntitlementUsage {
  /**
   * <p>Entitlement usage name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Resource usage consumed.</p>
   */
  ConsumedValue: string | undefined;

  /**
   * <p>Maximum entitlement usage count.</p>
   */
  MaxCount?: string;

  /**
   * <p>Entitlement usage unit.</p>
   */
  Unit: EntitlementDataUnit | string | undefined;
}

/**
 * <p>Describes the entitlement usage associated with a license.</p>
 */
export interface LicenseUsage {
  /**
   * <p>License entitlement usages.</p>
   */
  EntitlementUsages?: EntitlementUsage[];
}

export interface GetLicenseUsageResponse {
  /**
   * <p>License usage details.</p>
   */
  LicenseUsage?: LicenseUsage;
}

export interface GetServiceSettingsRequest {}

/**
 * <p>Configuration information for Organizations.</p>
 */
export interface OrganizationConfiguration {
  /**
   * <p>Enables Organizations integration.</p>
   */
  EnableIntegration: boolean | undefined;
}

export interface GetServiceSettingsResponse {
  /**
   * <p>Regional S3 bucket path for storing reports, license trail event data, discovery data,
   *          and so on.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>SNS topic configured to receive notifications from License Manager.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>Indicates whether Organizations is integrated with License Manager for
   *          cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * <p>Indicates whether cross-account discovery is enabled.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

  /**
   * <p>Amazon Resource Name (ARN) of the resource share. The License Manager management account
   *          provides member accounts with access to this share.</p>
   */
  LicenseManagerResourceShareArn?: string;
}

/**
 * <p>The request uses too many filters or too many filter values.</p>
 */
export class FilterLimitExceededException extends __BaseException {
  readonly name: "FilterLimitExceededException" = "FilterLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FilterLimitExceededException, __BaseException>) {
    super({
      name: "FilterLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FilterLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface ListAssociationsForLicenseConfigurationRequest {
  /**
   * <p>Amazon Resource Name (ARN) of a license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes an association with a license configuration.</p>
 */
export interface LicenseConfigurationAssociation {
  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Type of server resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>ID of the Amazon Web Services account that owns the resource consuming licenses.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Time when the license configuration was associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * <p>Scope of AMI associations. The possible value is <code>cross-account</code>.</p>
   */
  AmiAssociationScope?: string;
}

export interface ListAssociationsForLicenseConfigurationResponse {
  /**
   * <p>Information about the associations for the license configuration.</p>
   */
  LicenseConfigurationAssociations?: LicenseConfigurationAssociation[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific criteria,
 *          such as tags, attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * <p>Name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * <p>Filter values. Filter values are case-sensitive.</p>
   */
  Values?: string[];
}

export interface ListDistributedGrantsRequest {
  /**
   * <p>Amazon Resource Names (ARNs) of the grants.</p>
   */
  GrantArns?: string[];

  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LicenseArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GrantStatus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GranteePrincipalARN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProductSKU</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LicenseIssuerName</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListDistributedGrantsResponse {
  /**
   * <p>Distributed grant details.</p>
   */
  Grants?: Grant[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * <p>Amazon Resource Name of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the failure of a license operation.</p>
 */
export interface LicenseOperationFailure {
  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Resource type.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Failure time.</p>
   */
  FailureTime?: Date;

  /**
   * <p>Name of the operation.</p>
   */
  OperationName?: string;

  /**
   * <p>ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>The requester is "License Manager Automated Discovery".</p>
   */
  OperationRequestedBy?: string;

  /**
   * <p>Reserved.</p>
   */
  MetadataList?: Metadata[];
}

export interface ListFailuresForLicenseConfigurationOperationsResponse {
  /**
   * <p>License configuration operations that failed.</p>
   */
  LicenseOperationFailureList?: LicenseOperationFailure[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListLicenseConfigurationsRequest {
  /**
   * <p>Amazon Resource Names (ARN) of the license configurations.</p>
   */
  LicenseConfigurationArns?: string[];

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>licenseCountingType</code> - The dimension for which licenses are counted.
   *                Possible values are <code>vCPU</code> | <code>Instance</code> | <code>Core</code> | <code>Socket</code>.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>enforceLicenseCount</code> - A Boolean value that indicates whether hard license enforcement is used.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>usagelimitExceeded</code> - A Boolean value that indicates whether the available licenses have been exceeded.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

/**
 * <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
 *          must be associated with a host), and the number of licenses purchased and used.</p>
 */
export interface LicenseConfiguration {
  /**
   * <p>Unique ID of the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Dimension to use to track the license inventory.</p>
   */
  LicenseCountingType?: LicenseCountingType | string;

  /**
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;

  /**
   * <p>Number of licenses consumed. </p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Status of the license configuration.</p>
   */
  Status?: string;

  /**
   * <p>Account ID of the license configuration's owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Summaries for licenses consumed by various resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * <p>Summaries for managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
}

export interface ListLicenseConfigurationsResponse {
  /**
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurations?: LicenseConfiguration[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListLicenseConversionTasksRequest {
  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>
   *          Filters to scope the results. Valid filters are <code>ResourceArns</code> and <code>Status</code>.
   *       </p>
   */
  Filters?: Filter[];
}

/**
 * <p>Information about a license type conversion task.</p>
 */
export interface LicenseConversionTask {
  /**
   * <p>The ID of the license type conversion task.</p>
   */
  LicenseConversionTaskId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the license type
   *          conversion task.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the license type this conversion task converted from.</p>
   */
  SourceLicenseContext?: LicenseConversionContext;

  /**
   * <p>Information about the license type this conversion task converted to.</p>
   */
  DestinationLicenseContext?: LicenseConversionContext;

  /**
   * <p>The status of the conversion task.</p>
   */
  Status?: LicenseConversionTaskStatus | string;

  /**
   * <p>The status message for the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The time the conversion task was started at.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time the usage operation value of the resource was changed.</p>
   */
  LicenseConversionTime?: Date;

  /**
   * <p>The time the conversion task was completed.</p>
   */
  EndTime?: Date;
}

export interface ListLicenseConversionTasksResponse {
  /**
   * <p>Information about the license configuration tasks for your account.</p>
   */
  LicenseConversionTasks?: LicenseConversionTask[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListLicenseManagerReportGeneratorsRequest {
  /**
   * <p>Filters to scope the results. The following filters are supported: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LicenseConfigurationArn</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListLicenseManagerReportGeneratorsResponse {
  /**
   * <p>A report generator that creates periodic reports about your license configurations.</p>
   */
  ReportGenerators?: ReportGenerator[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListLicensesRequest {
  /**
   * <p>Amazon Resource Names (ARNs) of the licenses.</p>
   */
  LicenseArns?: string[];

  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Beneficiary</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProductSKU</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fingerprint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListLicensesResponse {
  /**
   * <p>License details.</p>
   */
  Licenses?: License[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListLicenseSpecificationsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of a resource that has an associated license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details for associating a license configuration with a resource.</p>
 */
export interface LicenseSpecification {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Scope of AMI associations. The possible value is <code>cross-account</code>.</p>
   */
  AmiAssociationScope?: string;
}

export interface ListLicenseSpecificationsForResourceResponse {
  /**
   * <p>License configurations associated with a resource.</p>
   */
  LicenseSpecifications?: LicenseSpecification[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListLicenseVersionsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListLicenseVersionsResponse {
  /**
   * <p>License details.</p>
   */
  Licenses?: License[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListReceivedGrantsRequest {
  /**
   * <p>Amazon Resource Names (ARNs) of the grants.</p>
   */
  GrantArns?: string[];

  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ProductSKU</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LicenseIssuerName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LicenseArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GrantStatus</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GranterAccountId</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListReceivedGrantsResponse {
  /**
   * <p>Received grant details.</p>
   */
  Grants?: Grant[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListReceivedGrantsForOrganizationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the received license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ParentArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GranteePrincipalArn</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListReceivedGrantsForOrganizationResponse {
  /**
   * <p>Lists the grants the organization has received.</p>
   */
  Grants?: Grant[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListReceivedLicensesRequest {
  /**
   * <p>Amazon Resource Names (ARNs) of the licenses.</p>
   */
  LicenseArns?: string[];

  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ProductSKU</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Fingerprint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IssuerName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Beneficiary</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export enum ReceivedStatus {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  FAILED_WORKFLOW = "FAILED_WORKFLOW",
  PENDING_ACCEPT = "PENDING_ACCEPT",
  PENDING_WORKFLOW = "PENDING_WORKFLOW",
  REJECTED = "REJECTED",
  WORKFLOW_COMPLETED = "WORKFLOW_COMPLETED",
}

/**
 * <p>Metadata associated with received licenses and grants.</p>
 */
export interface ReceivedMetadata {
  /**
   * <p>Received status.</p>
   */
  ReceivedStatus?: ReceivedStatus | string;

  /**
   * <p>Received status reason.</p>
   */
  ReceivedStatusReason?: string;

  /**
   * <p>Allowed operations.</p>
   */
  AllowedOperations?: (AllowedOperation | string)[];
}

/**
 * <p>Describes a license that is granted to a grantee.</p>
 */
export interface GrantedLicense {
  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * <p>License name.</p>
   */
  LicenseName?: string;

  /**
   * <p>Product name.</p>
   */
  ProductName?: string;

  /**
   * <p>Product SKU.</p>
   */
  ProductSKU?: string;

  /**
   * <p>Granted license issuer.</p>
   */
  Issuer?: IssuerDetails;

  /**
   * <p>Home Region of the granted license.</p>
   */
  HomeRegion?: string;

  /**
   * <p>Granted license status.</p>
   */
  Status?: LicenseStatus | string;

  /**
   * <p>Date and time range during which the granted license is valid, in ISO8601-UTC format.</p>
   */
  Validity?: DatetimeRange;

  /**
   * <p>Granted license beneficiary.</p>
   */
  Beneficiary?: string;

  /**
   * <p>License entitlements.</p>
   */
  Entitlements?: Entitlement[];

  /**
   * <p>Configuration for consumption of the license.</p>
   */
  ConsumptionConfiguration?: ConsumptionConfiguration;

  /**
   * <p>Granted license metadata.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * <p>Creation time of the granted license.</p>
   */
  CreateTime?: string;

  /**
   * <p>Version of the granted license.</p>
   */
  Version?: string;

  /**
   * <p>Granted license received metadata.</p>
   */
  ReceivedMetadata?: ReceivedMetadata;
}

export interface ListReceivedLicensesResponse {
  /**
   * <p>Received license details.</p>
   */
  Licenses?: GrantedLicense[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListReceivedLicensesForOrganizationRequest {
  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Beneficiary</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProductSKU</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListReceivedLicensesForOrganizationResponse {
  /**
   * <p>Lists the licenses the organization has received.</p>
   */
  Licenses?: GrantedLicense[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>A dependency required to run the API is missing.</p>
 */
export class FailedDependencyException extends __BaseException {
  readonly name: "FailedDependencyException" = "FailedDependencyException";
  readonly $fault: "client" = "client";
  Message?: string;
  ErrorCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyException, __BaseException>) {
    super({
      name: "FailedDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyException.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}

export enum InventoryFilterCondition {
  BEGINS_WITH = "BEGINS_WITH",
  CONTAINS = "CONTAINS",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>An inventory filter.</p>
 */
export interface InventoryFilter {
  /**
   * <p>Name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>Condition of the filter.</p>
   */
  Condition: InventoryFilterCondition | string | undefined;

  /**
   * <p>Value of the filter.</p>
   */
  Value?: string;
}

export interface ListResourceInventoryRequest {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>account_id</code> - The ID of the Amazon Web Services account that owns the resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application_name</code> - The name of the application.
   *                Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>license_included</code> - The type of license included.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.
   *                Possible values are <code>sql-server-enterprise</code> |
   *                <code>sql-server-standard</code> |
   *                <code>sql-server-web</code> |
   *                <code>windows-server-datacenter</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code> - The platform of the resource.
   *                Logical operators are <code>EQUALS</code> | <code>BEGINS_WITH</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resource_id</code> - The ID of the resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - The key/value combination of a tag assigned
   *                to the resource. Logical operators are <code>EQUALS</code> (single account) or
   *                <code>EQUALS</code> | <code>NOT_EQUALS</code> (cross account).</p>
   *             </li>
   *          </ul>
   */
  Filters?: InventoryFilter[];
}

/**
 * <p>Details about a resource.</p>
 */
export interface ResourceInventory {
  /**
   * <p>ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Platform of the resource.</p>
   */
  Platform?: string;

  /**
   * <p>Platform version of the resource in the inventory.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwningAccountId?: string;
}

export interface ListResourceInventoryResponse {
  /**
   * <p>Information about the resources.</p>
   */
  ResourceInventoryList?: ResourceInventory[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Tag[];
}

export interface ListTokensRequest {
  /**
   * <p>Token IDs.</p>
   */
  TokenIds?: string[];

  /**
   * <p>Filters to scope the results. The following filter is supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LicenseArns</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes a token.</p>
 */
export interface TokenData {
  /**
   * <p>Token ID.</p>
   */
  TokenId?: string;

  /**
   * <p>Type of token generated. The supported value is <code>REFRESH_TOKEN</code>.</p>
   */
  TokenType?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * <p>Token expiration time, in ISO8601-UTC format.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>Data specified by the caller.</p>
   */
  TokenProperties?: string[];

  /**
   * <p>Amazon Resource Names (ARN) of the roles included in the token.</p>
   */
  RoleArns?: string[];

  /**
   * <p>Token status. The possible values are <code>AVAILABLE</code> and <code>DELETED</code>.</p>
   */
  Status?: string;
}

export interface ListTokensResponse {
  /**
   * <p>Received token details.</p>
   */
  Tokens?: TokenData[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListUsageForLicenseConfigurationRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Filters to scope the results. The following filters and logical operators
   *         are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resourceArn</code> - The ARN of the license configuration resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resourceType</code> - The resource type (<code>EC2_INSTANCE</code> | <code>EC2_HOST</code> | <code>EC2_AMI</code> | <code>SYSTEMS_MANAGER_MANAGED_INSTANCE</code>).
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resourceAccount</code> - The ID of the account that owns the resource.
   *                Logical operators are <code>EQUALS</code> | <code>NOT_EQUALS</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];
}

/**
 * <p>Details about the usage of a resource associated with a license configuration.</p>
 */
export interface LicenseConfigurationUsage {
  /**
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Status of the resource.</p>
   */
  ResourceStatus?: string;

  /**
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * <p>Time when the license configuration was initially associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;
}

export interface ListUsageForLicenseConfigurationResponse {
  /**
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurationUsageList?: LicenseConfigurationUsage[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface RejectGrantRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;
}

export interface RejectGrantResponse {
  /**
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * <p>Grant status.</p>
   */
  Status?: GrantStatus | string;

  /**
   * <p>Grant version.</p>
   */
  Version?: string;
}

export interface TagResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys identifying the tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export enum LicenseConfigurationStatus {
  AVAILABLE = "AVAILABLE",
  DISABLED = "DISABLED",
}

export interface UpdateLicenseConfigurationRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * <p>New status of the license configuration.</p>
   */
  LicenseConfigurationStatus?: LicenseConfigurationStatus | string;

  /**
   * <p>New license rule. The only rule that you can add after you create a license
   *           configuration is licenseAffinityToHost.</p>
   */
  LicenseRules?: string[];

  /**
   * <p>New number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>New hard limit of the number of available licenses.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>New name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>New description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>New product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;
}

export interface UpdateLicenseConfigurationResponse {}

export interface UpdateLicenseManagerReportGeneratorRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the report generator to update.</p>
   */
  LicenseManagerReportGeneratorArn: string | undefined;

  /**
   * <p>Name of the report generator.</p>
   */
  ReportGeneratorName: string | undefined;

  /**
   * <p>Type of reports to generate. The following report types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>License configuration report - Reports the number and details of consumed licenses for a license configuration.</p>
   *             </li>
   *             <li>
   *                <p>Resource report - Reports the tracked licenses and resource consumption for a license configuration.</p>
   *             </li>
   *          </ul>
   */
  Type: (ReportType | string)[] | undefined;

  /**
   * <p>The report context.</p>
   */
  ReportContext: ReportContext | undefined;

  /**
   * <p>Frequency by which reports are generated.</p>
   */
  ReportFrequency: ReportFrequency | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>Description of the report generator.</p>
   */
  Description?: string;
}

export interface UpdateLicenseManagerReportGeneratorResponse {}

/**
 * <p>License Manager cannot allocate a license to a resource because of its state. </p>
 *          <p>For example, you cannot allocate a license to an instance in the process of shutting
 *          down.</p>
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You do not have enough licenses available to support a new resource launch.</p>
 */
export class LicenseUsageException extends __BaseException {
  readonly name: "LicenseUsageException" = "LicenseUsageException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LicenseUsageException, __BaseException>) {
    super({
      name: "LicenseUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LicenseUsageException.prototype);
    this.Message = opts.Message;
  }
}

export interface UpdateLicenseSpecificationsForResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>ARNs of the license configurations to add.</p>
   */
  AddLicenseSpecifications?: LicenseSpecification[];

  /**
   * <p>ARNs of the license configurations to remove.</p>
   */
  RemoveLicenseSpecifications?: LicenseSpecification[];
}

export interface UpdateLicenseSpecificationsForResourceResponse {}

export interface UpdateServiceSettingsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>Enables integration with Organizations for cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * <p>Activates cross-account discovery.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;
}

export interface UpdateServiceSettingsResponse {}

/**
 * @internal
 */
export const AcceptGrantRequestFilterSensitiveLog = (obj: AcceptGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptGrantResponseFilterSensitiveLog = (obj: AcceptGrantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutomatedDiscoveryInformationFilterSensitiveLog = (obj: AutomatedDiscoveryInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckInLicenseRequestFilterSensitiveLog = (obj: CheckInLicenseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckInLicenseResponseFilterSensitiveLog = (obj: CheckInLicenseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataFilterSensitiveLog = (obj: Metadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntitlementDataFilterSensitiveLog = (obj: EntitlementData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckoutBorrowLicenseRequestFilterSensitiveLog = (obj: CheckoutBorrowLicenseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckoutBorrowLicenseResponseFilterSensitiveLog = (obj: CheckoutBorrowLicenseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckoutLicenseRequestFilterSensitiveLog = (obj: CheckoutLicenseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckoutLicenseResponseFilterSensitiveLog = (obj: CheckoutLicenseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGrantRequestFilterSensitiveLog = (obj: CreateGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGrantResponseFilterSensitiveLog = (obj: CreateGrantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGrantVersionRequestFilterSensitiveLog = (obj: CreateGrantVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGrantVersionResponseFilterSensitiveLog = (obj: CreateGrantVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BorrowConfigurationFilterSensitiveLog = (obj: BorrowConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionalConfigurationFilterSensitiveLog = (obj: ProvisionalConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConsumptionConfigurationFilterSensitiveLog = (obj: ConsumptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntitlementFilterSensitiveLog = (obj: Entitlement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IssuerFilterSensitiveLog = (obj: Issuer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatetimeRangeFilterSensitiveLog = (obj: DatetimeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseRequestFilterSensitiveLog = (obj: CreateLicenseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseResponseFilterSensitiveLog = (obj: CreateLicenseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductInformationFilterFilterSensitiveLog = (obj: ProductInformationFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductInformationFilterSensitiveLog = (obj: ProductInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseConfigurationRequestFilterSensitiveLog = (obj: CreateLicenseConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseConfigurationResponseFilterSensitiveLog = (obj: CreateLicenseConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConversionContextFilterSensitiveLog = (obj: LicenseConversionContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseConversionTaskForResourceRequestFilterSensitiveLog = (
  obj: CreateLicenseConversionTaskForResourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseConversionTaskForResourceResponseFilterSensitiveLog = (
  obj: CreateLicenseConversionTaskForResourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportContextFilterSensitiveLog = (obj: ReportContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportFrequencyFilterSensitiveLog = (obj: ReportFrequency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseManagerReportGeneratorRequestFilterSensitiveLog = (
  obj: CreateLicenseManagerReportGeneratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseManagerReportGeneratorResponseFilterSensitiveLog = (
  obj: CreateLicenseManagerReportGeneratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseVersionRequestFilterSensitiveLog = (obj: CreateLicenseVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLicenseVersionResponseFilterSensitiveLog = (obj: CreateLicenseVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTokenRequestFilterSensitiveLog = (obj: CreateTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTokenResponseFilterSensitiveLog = (obj: CreateTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGrantRequestFilterSensitiveLog = (obj: DeleteGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGrantResponseFilterSensitiveLog = (obj: DeleteGrantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLicenseRequestFilterSensitiveLog = (obj: DeleteLicenseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLicenseResponseFilterSensitiveLog = (obj: DeleteLicenseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLicenseConfigurationRequestFilterSensitiveLog = (obj: DeleteLicenseConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLicenseConfigurationResponseFilterSensitiveLog = (obj: DeleteLicenseConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLicenseManagerReportGeneratorRequestFilterSensitiveLog = (
  obj: DeleteLicenseManagerReportGeneratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLicenseManagerReportGeneratorResponseFilterSensitiveLog = (
  obj: DeleteLicenseManagerReportGeneratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTokenRequestFilterSensitiveLog = (obj: DeleteTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTokenResponseFilterSensitiveLog = (obj: DeleteTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtendLicenseConsumptionRequestFilterSensitiveLog = (obj: ExtendLicenseConsumptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExtendLicenseConsumptionResponseFilterSensitiveLog = (obj: ExtendLicenseConsumptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessTokenRequestFilterSensitiveLog = (obj: GetAccessTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessTokenResponseFilterSensitiveLog = (obj: GetAccessTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGrantRequestFilterSensitiveLog = (obj: GetGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantFilterSensitiveLog = (obj: Grant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGrantResponseFilterSensitiveLog = (obj: GetGrantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseRequestFilterSensitiveLog = (obj: GetLicenseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IssuerDetailsFilterSensitiveLog = (obj: IssuerDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseFilterSensitiveLog = (obj: License): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseResponseFilterSensitiveLog = (obj: GetLicenseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseConfigurationRequestFilterSensitiveLog = (obj: GetLicenseConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConsumedLicenseSummaryFilterSensitiveLog = (obj: ConsumedLicenseSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedResourceSummaryFilterSensitiveLog = (obj: ManagedResourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseConfigurationResponseFilterSensitiveLog = (obj: GetLicenseConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseConversionTaskRequestFilterSensitiveLog = (obj: GetLicenseConversionTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseConversionTaskResponseFilterSensitiveLog = (obj: GetLicenseConversionTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseManagerReportGeneratorRequestFilterSensitiveLog = (
  obj: GetLicenseManagerReportGeneratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportGeneratorFilterSensitiveLog = (obj: ReportGenerator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseManagerReportGeneratorResponseFilterSensitiveLog = (
  obj: GetLicenseManagerReportGeneratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseUsageRequestFilterSensitiveLog = (obj: GetLicenseUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntitlementUsageFilterSensitiveLog = (obj: EntitlementUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseUsageFilterSensitiveLog = (obj: LicenseUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLicenseUsageResponseFilterSensitiveLog = (obj: GetLicenseUsageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceSettingsRequestFilterSensitiveLog = (obj: GetServiceSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationConfigurationFilterSensitiveLog = (obj: OrganizationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceSettingsResponseFilterSensitiveLog = (obj: GetServiceSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociationsForLicenseConfigurationRequestFilterSensitiveLog = (
  obj: ListAssociationsForLicenseConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConfigurationAssociationFilterSensitiveLog = (obj: LicenseConfigurationAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociationsForLicenseConfigurationResponseFilterSensitiveLog = (
  obj: ListAssociationsForLicenseConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributedGrantsRequestFilterSensitiveLog = (obj: ListDistributedGrantsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributedGrantsResponseFilterSensitiveLog = (obj: ListDistributedGrantsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFailuresForLicenseConfigurationOperationsRequestFilterSensitiveLog = (
  obj: ListFailuresForLicenseConfigurationOperationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseOperationFailureFilterSensitiveLog = (obj: LicenseOperationFailure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFailuresForLicenseConfigurationOperationsResponseFilterSensitiveLog = (
  obj: ListFailuresForLicenseConfigurationOperationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseConfigurationsRequestFilterSensitiveLog = (obj: ListLicenseConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConfigurationFilterSensitiveLog = (obj: LicenseConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseConfigurationsResponseFilterSensitiveLog = (obj: ListLicenseConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseConversionTasksRequestFilterSensitiveLog = (obj: ListLicenseConversionTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConversionTaskFilterSensitiveLog = (obj: LicenseConversionTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseConversionTasksResponseFilterSensitiveLog = (obj: ListLicenseConversionTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseManagerReportGeneratorsRequestFilterSensitiveLog = (
  obj: ListLicenseManagerReportGeneratorsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseManagerReportGeneratorsResponseFilterSensitiveLog = (
  obj: ListLicenseManagerReportGeneratorsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicensesRequestFilterSensitiveLog = (obj: ListLicensesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicensesResponseFilterSensitiveLog = (obj: ListLicensesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseSpecificationsForResourceRequestFilterSensitiveLog = (
  obj: ListLicenseSpecificationsForResourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseSpecificationFilterSensitiveLog = (obj: LicenseSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseSpecificationsForResourceResponseFilterSensitiveLog = (
  obj: ListLicenseSpecificationsForResourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseVersionsRequestFilterSensitiveLog = (obj: ListLicenseVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLicenseVersionsResponseFilterSensitiveLog = (obj: ListLicenseVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedGrantsRequestFilterSensitiveLog = (obj: ListReceivedGrantsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedGrantsResponseFilterSensitiveLog = (obj: ListReceivedGrantsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedGrantsForOrganizationRequestFilterSensitiveLog = (
  obj: ListReceivedGrantsForOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedGrantsForOrganizationResponseFilterSensitiveLog = (
  obj: ListReceivedGrantsForOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedLicensesRequestFilterSensitiveLog = (obj: ListReceivedLicensesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReceivedMetadataFilterSensitiveLog = (obj: ReceivedMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantedLicenseFilterSensitiveLog = (obj: GrantedLicense): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedLicensesResponseFilterSensitiveLog = (obj: ListReceivedLicensesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedLicensesForOrganizationRequestFilterSensitiveLog = (
  obj: ListReceivedLicensesForOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReceivedLicensesForOrganizationResponseFilterSensitiveLog = (
  obj: ListReceivedLicensesForOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InventoryFilterFilterSensitiveLog = (obj: InventoryFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceInventoryRequestFilterSensitiveLog = (obj: ListResourceInventoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceInventoryFilterSensitiveLog = (obj: ResourceInventory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceInventoryResponseFilterSensitiveLog = (obj: ListResourceInventoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTokensRequestFilterSensitiveLog = (obj: ListTokensRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TokenDataFilterSensitiveLog = (obj: TokenData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTokensResponseFilterSensitiveLog = (obj: ListTokensResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsageForLicenseConfigurationRequestFilterSensitiveLog = (
  obj: ListUsageForLicenseConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LicenseConfigurationUsageFilterSensitiveLog = (obj: LicenseConfigurationUsage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsageForLicenseConfigurationResponseFilterSensitiveLog = (
  obj: ListUsageForLicenseConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectGrantRequestFilterSensitiveLog = (obj: RejectGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectGrantResponseFilterSensitiveLog = (obj: RejectGrantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLicenseConfigurationRequestFilterSensitiveLog = (obj: UpdateLicenseConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLicenseConfigurationResponseFilterSensitiveLog = (obj: UpdateLicenseConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLicenseManagerReportGeneratorRequestFilterSensitiveLog = (
  obj: UpdateLicenseManagerReportGeneratorRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLicenseManagerReportGeneratorResponseFilterSensitiveLog = (
  obj: UpdateLicenseManagerReportGeneratorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLicenseSpecificationsForResourceRequestFilterSensitiveLog = (
  obj: UpdateLicenseSpecificationsForResourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLicenseSpecificationsForResourceResponseFilterSensitiveLog = (
  obj: UpdateLicenseSpecificationsForResourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServiceSettingsRequestFilterSensitiveLog = (obj: UpdateServiceSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServiceSettingsResponseFilterSensitiveLog = (obj: UpdateServiceSettingsResponse): any => ({
  ...obj,
});

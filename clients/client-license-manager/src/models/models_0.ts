// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LicenseManagerServiceException as __BaseException } from "./LicenseManagerServiceException";

/**
 * @public
 */
export interface AcceptGrantRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GrantStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  FAILED_WORKFLOW: "FAILED_WORKFLOW",
  PENDING_ACCEPT: "PENDING_ACCEPT",
  PENDING_DELETE: "PENDING_DELETE",
  PENDING_WORKFLOW: "PENDING_WORKFLOW",
  REJECTED: "REJECTED",
  WORKFLOW_COMPLETED: "WORKFLOW_COMPLETED",
} as const;

/**
 * @public
 */
export type GrantStatus = (typeof GrantStatus)[keyof typeof GrantStatus];

/**
 * @public
 */
export interface AcceptGrantResponse {
  /**
   * @public
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * @public
   * <p>Grant status.</p>
   */
  Status?: GrantStatus;

  /**
   * @public
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ActivationOverrideBehavior = {
  ALL_GRANTS_PERMITTED_BY_ISSUER: "ALL_GRANTS_PERMITTED_BY_ISSUER",
  DISTRIBUTED_GRANTS_ONLY: "DISTRIBUTED_GRANTS_ONLY",
} as const;

/**
 * @public
 */
export type ActivationOverrideBehavior = (typeof ActivationOverrideBehavior)[keyof typeof ActivationOverrideBehavior];

/**
 * @public
 * @enum
 */
export const AllowedOperation = {
  CHECKOUT_BORROW_LICENSE: "CheckoutBorrowLicense",
  CHECKOUT_LICENSE: "CheckoutLicense",
  CHECK_IN_LICENSE: "CheckInLicense",
  CREATE_GRANT: "CreateGrant",
  CREATE_TOKEN: "CreateToken",
  EXTEND_CONSUMPTION_LICENSE: "ExtendConsumptionLicense",
  LIST_PURCHASED_LICENSES: "ListPurchasedLicenses",
} as const;

/**
 * @public
 */
export type AllowedOperation = (typeof AllowedOperation)[keyof typeof AllowedOperation];

/**
 * @public
 * <p>Describes automated discovery.</p>
 */
export interface AutomatedDiscoveryInformation {
  /**
   * @public
   * <p>Time that automated discovery last ran.</p>
   */
  LastRunTime?: Date;
}

/**
 * @public
 */
export interface CheckInLicenseRequest {
  /**
   * @public
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken: string | undefined;

  /**
   * @public
   * <p>License beneficiary.</p>
   */
  Beneficiary?: string;
}

/**
 * @public
 */
export interface CheckInLicenseResponse {}

/**
 * @public
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
 * @public
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
 * @public
 * <p>Describes key/value pairs.</p>
 */
export interface Metadata {
  /**
   * @public
   * <p>The key name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const DigitalSignatureMethod = {
  JWT_PS384: "JWT_PS384",
} as const;

/**
 * @public
 */
export type DigitalSignatureMethod = (typeof DigitalSignatureMethod)[keyof typeof DigitalSignatureMethod];

/**
 * @public
 * @enum
 */
export const EntitlementDataUnit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type EntitlementDataUnit = (typeof EntitlementDataUnit)[keyof typeof EntitlementDataUnit];

/**
 * @public
 * <p>Data associated with an entitlement resource.</p>
 */
export interface EntitlementData {
  /**
   * @public
   * <p>Entitlement data name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Entitlement data value.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Entitlement data unit.</p>
   */
  Unit: EntitlementDataUnit | undefined;
}

/**
 * @public
 */
export interface CheckoutBorrowLicenseRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license. The license must use the borrow consumption configuration.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>License entitlements. Partial checkouts are not supported.</p>
   */
  Entitlements: EntitlementData[] | undefined;

  /**
   * @public
   * <p>Digital signature method. The possible value is JSON Web Signature (JWS) algorithm PS384.
   *          For more information, see <a href="https://tools.ietf.org/html/rfc7518#section-3.5">RFC 7518 Digital Signature with RSASSA-PSS</a>.</p>
   */
  DigitalSignatureMethod: DigitalSignatureMethod | undefined;

  /**
   * @public
   * <p>Node ID.</p>
   */
  NodeId?: string;

  /**
   * @public
   * <p>Information about constraints.</p>
   */
  CheckoutMetadata?: Metadata[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;
}

/**
 * @public
 */
export interface CheckoutBorrowLicenseResponse {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * @public
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken?: string;

  /**
   * @public
   * <p>Allowed license entitlements.</p>
   */
  EntitlementsAllowed?: EntitlementData[];

  /**
   * @public
   * <p>Node ID.</p>
   */
  NodeId?: string;

  /**
   * @public
   * <p>Signed token.</p>
   */
  SignedToken?: string;

  /**
   * @public
   * <p>Date and time at which the license checkout is issued.</p>
   */
  IssuedAt?: string;

  /**
   * @public
   * <p>Date and time at which the license checkout expires.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>Information about constraints.</p>
   */
  CheckoutMetadata?: Metadata[];
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const CheckoutType = {
  PERPETUAL: "PERPETUAL",
  PROVISIONAL: "PROVISIONAL",
} as const;

/**
 * @public
 */
export type CheckoutType = (typeof CheckoutType)[keyof typeof CheckoutType];

/**
 * @public
 */
export interface CheckoutLicenseRequest {
  /**
   * @public
   * <p>Product SKU.</p>
   */
  ProductSKU: string | undefined;

  /**
   * @public
   * <p>Checkout type.</p>
   */
  CheckoutType: CheckoutType | undefined;

  /**
   * @public
   * <p>Key fingerprint identifying the license.</p>
   */
  KeyFingerprint: string | undefined;

  /**
   * @public
   * <p>License entitlements.</p>
   */
  Entitlements: EntitlementData[] | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>License beneficiary.</p>
   */
  Beneficiary?: string;

  /**
   * @public
   * <p>Node ID.</p>
   */
  NodeId?: string;
}

/**
 * @public
 */
export interface CheckoutLicenseResponse {
  /**
   * @public
   * <p>Checkout type.</p>
   */
  CheckoutType?: CheckoutType;

  /**
   * @public
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken?: string;

  /**
   * @public
   * <p>Allowed license entitlements.</p>
   */
  EntitlementsAllowed?: EntitlementData[];

  /**
   * @public
   * <p>Signed token.</p>
   */
  SignedToken?: string;

  /**
   * @public
   * <p>Node ID.</p>
   */
  NodeId?: string;

  /**
   * @public
   * <p>Date and time at which the license checkout is issued.</p>
   */
  IssuedAt?: string;

  /**
   * @public
   * <p>Date and time at which the license checkout expires.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the checkout license.</p>
   */
  LicenseArn?: string;
}

/**
 * @public
 */
export interface CreateGrantRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>Grant name.</p>
   */
  GrantName: string | undefined;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>The grant principals. You can specify one of the following as an Amazon Resource Name
   *          (ARN):</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services account, which includes only the account specified.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>An organizational unit (OU), which includes all accounts in the OU.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>An organization, which will include all accounts across your organization.</p>
   *             </li>
   *          </ul>
   */
  Principals: string[] | undefined;

  /**
   * @public
   * <p>Home Region of the grant.</p>
   */
  HomeRegion: string | undefined;

  /**
   * @public
   * <p>Allowed operations for the grant.</p>
   */
  AllowedOperations: AllowedOperation[] | undefined;
}

/**
 * @public
 */
export interface CreateGrantResponse {
  /**
   * @public
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * @public
   * <p>Grant status.</p>
   */
  Status?: GrantStatus;

  /**
   * @public
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>The options you can specify when you create a new version of a grant, such as activation
 *          override behavior. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.</p>
 */
export interface Options {
  /**
   * @public
   * <p>An activation option for your grant that determines the behavior of activating a grant.
   *          Activation options can only be used with granted licenses sourced from the Amazon Web Services Marketplace. Additionally, the operation must specify the value of <code>ACTIVE</code> for the
   *             <code>Status</code> parameter.</p>
   *          <ul>
   *             <li>
   *                <p>As a license administrator, you can optionally specify an
   *                   <code>ActivationOverrideBehavior</code> when activating a grant.</p>
   *             </li>
   *             <li>
   *                <p>As a grantor, you can optionally specify an
   *                   <code>ActivationOverrideBehavior</code> when you activate a grant for a grantee
   *                account in your organization.</p>
   *             </li>
   *             <li>
   *                <p>As a grantee, if the grantor creating the distributed grant doesn’t specify an
   *                   <code>ActivationOverrideBehavior</code>, you can optionally specify one when you
   *                are activating the grant.</p>
   *             </li>
   *          </ul>
   *          <dl>
   *             <dt>DISTRIBUTED_GRANTS_ONLY</dt>
   *             <dd>
   *                <p>Use this value to activate a grant without replacing any member account’s
   *                   active grants for the same product.</p>
   *             </dd>
   *             <dt>ALL_GRANTS_PERMITTED_BY_ISSUER</dt>
   *             <dd>
   *                <p>Use this value to activate a grant and disable other active grants in any
   *                   member accounts for the same product. This action will also replace their
   *                   previously activated grants with this activated grant.</p>
   *             </dd>
   *          </dl>
   */
  ActivationOverrideBehavior?: ActivationOverrideBehavior;
}

/**
 * @public
 */
export interface CreateGrantVersionRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * @public
   * <p>Grant name.</p>
   */
  GrantName?: string;

  /**
   * @public
   * <p>Allowed operations for the grant.</p>
   */
  AllowedOperations?: AllowedOperation[];

  /**
   * @public
   * <p>Grant status.</p>
   */
  Status?: GrantStatus;

  /**
   * @public
   * <p>Grant status reason.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Current version of the grant.</p>
   */
  SourceVersion?: string;

  /**
   * @public
   * <p>The options specified for the grant.</p>
   */
  Options?: Options;
}

/**
 * @public
 */
export interface CreateGrantVersionResponse {
  /**
   * @public
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * @public
   * <p>Grant status.</p>
   */
  Status?: GrantStatus;

  /**
   * @public
   * <p>New version of the grant.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Details about a borrow configuration.</p>
 */
export interface BorrowConfiguration {
  /**
   * @public
   * <p>Indicates whether early check-ins are allowed.</p>
   */
  AllowEarlyCheckIn: boolean | undefined;

  /**
   * @public
   * <p>Maximum time for the borrow configuration, in minutes.</p>
   */
  MaxTimeToLiveInMinutes: number | undefined;
}

/**
 * @public
 * <p>Details about a provisional configuration.</p>
 */
export interface ProvisionalConfiguration {
  /**
   * @public
   * <p>Maximum time for the provisional configuration, in minutes.</p>
   */
  MaxTimeToLiveInMinutes: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RenewType = {
  MONTHLY: "Monthly",
  NONE: "None",
  WEEKLY: "Weekly",
} as const;

/**
 * @public
 */
export type RenewType = (typeof RenewType)[keyof typeof RenewType];

/**
 * @public
 * <p>Details about a consumption configuration.</p>
 */
export interface ConsumptionConfiguration {
  /**
   * @public
   * <p>Renewal frequency.</p>
   */
  RenewType?: RenewType;

  /**
   * @public
   * <p>Details about a provisional configuration.</p>
   */
  ProvisionalConfiguration?: ProvisionalConfiguration;

  /**
   * @public
   * <p>Details about a borrow configuration.</p>
   */
  BorrowConfiguration?: BorrowConfiguration;
}

/**
 * @public
 * @enum
 */
export const EntitlementUnit = {
  BITS: "Bits",
  BITS_PER_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_PER_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_PER_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_PER_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_PER_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_PER_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_PER_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_PER_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_PER_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_PER_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_PER_SECOND: "Terabytes/Second",
} as const;

/**
 * @public
 */
export type EntitlementUnit = (typeof EntitlementUnit)[keyof typeof EntitlementUnit];

/**
 * @public
 * <p>Describes a resource entitled for use with a license.</p>
 */
export interface Entitlement {
  /**
   * @public
   * <p>Entitlement name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Entitlement resource. Use only if the unit is None.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Maximum entitlement count. Use if the unit is not None.</p>
   */
  MaxCount?: number;

  /**
   * @public
   * <p>Indicates whether overages are allowed.</p>
   */
  Overage?: boolean;

  /**
   * @public
   * <p>Entitlement unit.</p>
   */
  Unit: EntitlementUnit | undefined;

  /**
   * @public
   * <p>Indicates whether check-ins are allowed.</p>
   */
  AllowCheckIn?: boolean;
}

/**
 * @public
 * <p>Details about the issuer of a license.</p>
 */
export interface Issuer {
  /**
   * @public
   * <p>Issuer name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify,
   *          and support the RSASSA-PSS SHA-256 signing algorithm.</p>
   */
  SignKey?: string;
}

/**
 * @public
 * <p>Describes a time range, in ISO8601-UTC format.</p>
 */
export interface DatetimeRange {
  /**
   * @public
   * <p>Start of the time range.</p>
   */
  Begin: string | undefined;

  /**
   * @public
   * <p>End of the time range.</p>
   */
  End?: string;
}

/**
 * @public
 */
export interface CreateLicenseRequest {
  /**
   * @public
   * <p>License name.</p>
   */
  LicenseName: string | undefined;

  /**
   * @public
   * <p>Product name.</p>
   */
  ProductName: string | undefined;

  /**
   * @public
   * <p>Product SKU.</p>
   */
  ProductSKU: string | undefined;

  /**
   * @public
   * <p>License issuer.</p>
   */
  Issuer: Issuer | undefined;

  /**
   * @public
   * <p>Home Region for the license.</p>
   */
  HomeRegion: string | undefined;

  /**
   * @public
   * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
   */
  Validity: DatetimeRange | undefined;

  /**
   * @public
   * <p>License entitlements.</p>
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * @public
   * <p>License beneficiary.</p>
   */
  Beneficiary: string | undefined;

  /**
   * @public
   * <p>Configuration for consumption of the license. Choose a provisional configuration for workloads
   *           running with continuous connectivity. Choose a borrow configuration for workloads with offline
   *           usage.</p>
   */
  ConsumptionConfiguration: ConsumptionConfiguration | undefined;

  /**
   * @public
   * <p>Information about the license.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LicenseStatus = {
  AVAILABLE: "AVAILABLE",
  DEACTIVATED: "DEACTIVATED",
  DELETED: "DELETED",
  EXPIRED: "EXPIRED",
  PENDING_AVAILABLE: "PENDING_AVAILABLE",
  PENDING_DELETE: "PENDING_DELETE",
  SUSPENDED: "SUSPENDED",
} as const;

/**
 * @public
 */
export type LicenseStatus = (typeof LicenseStatus)[keyof typeof LicenseStatus];

/**
 * @public
 */
export interface CreateLicenseResponse {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * @public
   * <p>License status.</p>
   */
  Status?: LicenseStatus;

  /**
   * @public
   * <p>License version.</p>
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const LicenseCountingType = {
  CORE: "Core",
  INSTANCE: "Instance",
  SOCKET: "Socket",
  VCPU: "vCPU",
} as const;

/**
 * @public
 */
export type LicenseCountingType = (typeof LicenseCountingType)[keyof typeof LicenseCountingType];

/**
 * @public
 * <p>Describes product information filters.</p>
 */
export interface ProductInformationFilter {
  /**
   * @public
   * <p>Filter name.</p>
   */
  ProductInformationFilterName: string | undefined;

  /**
   * @public
   * <p>Filter value.</p>
   */
  ProductInformationFilterValue?: string[];

  /**
   * @public
   * <p>Logical operator.</p>
   */
  ProductInformationFilterComparator: string | undefined;
}

/**
 * @public
 * <p>Describes product information for a license configuration.</p>
 */
export interface ProductInformation {
  /**
   * @public
   * <p>Resource type. The possible values are <code>SSM_MANAGED</code> | <code>RDS</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
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
 * @public
 * <p>Details about a tag for a license configuration.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Tag key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>Tag value.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateLicenseConfigurationRequest {
  /**
   * @public
   * <p>Name of the license configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Dimension used to track the license inventory.</p>
   */
  LicenseCountingType: LicenseCountingType | undefined;

  /**
   * @public
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * @public
   * <p>Indicates whether hard or soft license enforcement is used. Exceeding a hard limit
   *          blocks the launch of new instances.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * @public
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
   * @public
   * <p>Tags to add to the license configuration.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;

  /**
   * @public
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];
}

/**
 * @public
 */
export interface CreateLicenseConfigurationResponse {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

/**
 * @public
 * <p>Information about a license type conversion task.</p>
 */
export interface LicenseConversionContext {
  /**
   * @public
   * <p>The Usage operation value that corresponds to the license type you are converting your resource from.  For more information about which platforms correspond to which usage operation values see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html#billing-info">Sample data: usage operation by platform
   *       </a>
   *          </p>
   */
  UsageOperation?: string;
}

/**
 * @public
 */
export interface CreateLicenseConversionTaskForResourceRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource you are converting the license type for.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Information that identifies the license type you are converting from.
   *
   *          For the structure of the source license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the CLI </a> in the <i>License Manager User Guide</i>.</p>
   */
  SourceLicenseContext: LicenseConversionContext | undefined;

  /**
   * @public
   * <p>Information that identifies the license type you are converting to. For the structure of the destination license, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/conversion-procedures.html#conversion-cli">Convert a license type using the CLI </a> in the <i>License Manager User Guide</i>.</p>
   */
  DestinationLicenseContext: LicenseConversionContext | undefined;
}

/**
 * @public
 */
export interface CreateLicenseConversionTaskForResourceResponse {
  /**
   * @public
   * <p>The ID of the created license type conversion task.</p>
   */
  LicenseConversionTaskId?: string;
}

/**
 * @public
 * <p>Details of the license configuration that this generator reports on.</p>
 */
export interface ReportContext {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration that this generator reports on.</p>
   */
  licenseConfigurationArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportFrequencyType = {
  DAY: "DAY",
  MONTH: "MONTH",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type ReportFrequencyType = (typeof ReportFrequencyType)[keyof typeof ReportFrequencyType];

/**
 * @public
 * <p>Details about how frequently reports are generated.</p>
 */
export interface ReportFrequency {
  /**
   * @public
   * <p>Number of times within the frequency period that a report is generated.
   *          The only supported value is <code>1</code>.</p>
   */
  value?: number;

  /**
   * @public
   * <p>Time period between each report. The period can be daily, weekly, or monthly.</p>
   */
  period?: ReportFrequencyType;
}

/**
 * @public
 * @enum
 */
export const ReportType = {
  LICENSE_CONFIGURATION_SUMMARY_REPORT: "LicenseConfigurationSummaryReport",
  LICENSE_CONFIGURATION_USAGE_REPORT: "LicenseConfigurationUsageReport",
} as const;

/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 */
export interface CreateLicenseManagerReportGeneratorRequest {
  /**
   * @public
   * <p>Name of the report generator.</p>
   */
  ReportGeneratorName: string | undefined;

  /**
   * @public
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
  Type: ReportType[] | undefined;

  /**
   * @public
   * <p>Defines the type of license configuration the report generator tracks.</p>
   */
  ReportContext: ReportContext | undefined;

  /**
   * @public
   * <p>Frequency by which reports are generated.  Reports can be generated daily, monthly, or weekly.</p>
   */
  ReportFrequency: ReportFrequency | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>Description of the report generator.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Tags to add to the report generator.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLicenseManagerReportGeneratorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new report generator.</p>
   */
  LicenseManagerReportGeneratorArn?: string;
}

/**
 * @public
 */
export interface CreateLicenseVersionRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>License name.</p>
   */
  LicenseName: string | undefined;

  /**
   * @public
   * <p>Product name.</p>
   */
  ProductName: string | undefined;

  /**
   * @public
   * <p>License issuer.</p>
   */
  Issuer: Issuer | undefined;

  /**
   * @public
   * <p>Home Region of the license.</p>
   */
  HomeRegion: string | undefined;

  /**
   * @public
   * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
   */
  Validity: DatetimeRange | undefined;

  /**
   * @public
   * <p>Information about the license.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * @public
   * <p>License entitlements.</p>
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * @public
   * <p>Configuration for consumption of the license. Choose a provisional configuration for workloads
   *          running with continuous connectivity. Choose a borrow configuration for workloads with offline
   *          usage.</p>
   */
  ConsumptionConfiguration: ConsumptionConfiguration | undefined;

  /**
   * @public
   * <p>License status.</p>
   */
  Status: LicenseStatus | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>Current version of the license.</p>
   */
  SourceVersion?: string;
}

/**
 * @public
 */
export interface CreateLicenseVersionResponse {
  /**
   * @public
   * <p>License ARN.</p>
   */
  LicenseArn?: string;

  /**
   * @public
   * <p>New version of the license.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>License status.</p>
   */
  Status?: LicenseStatus;
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the
   *           JWT token.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the IAM roles to embed in the token.
   *          License Manager does not check whether the roles are in use.</p>
   */
  RoleArns?: string[];

  /**
   * @public
   * <p>Token expiration, in days, counted from token creation. The default is 365 days.</p>
   */
  ExpirationInDays?: number;

  /**
   * @public
   * <p>Data specified by the caller to be included in the JWT token. The data is mapped
   *           to the amr claim of the JWT token.</p>
   */
  TokenProperties?: string[];

  /**
   * @public
   * <p>Idempotency token, valid for 10 minutes.</p>
   */
  ClientToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TokenType = {
  REFRESH_TOKEN: "REFRESH_TOKEN",
} as const;

/**
 * @public
 */
export type TokenType = (typeof TokenType)[keyof typeof TokenType];

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * @public
   * <p>Token ID.</p>
   */
  TokenId?: string;

  /**
   * @public
   * <p>Token type.</p>
   */
  TokenType?: TokenType;

  /**
   * @public
   * <p>Refresh token, encoded as a JWT token.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface DeleteGrantRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * @public
   * <p>The Status reason for the delete request.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Current version of the grant.</p>
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface DeleteGrantResponse {
  /**
   * @public
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * @public
   * <p>Grant status.</p>
   */
  Status?: GrantStatus;

  /**
   * @public
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeleteLicenseRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>Current version of the license.</p>
   */
  SourceVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LicenseDeletionStatus = {
  DELETED: "DELETED",
  PENDING_DELETE: "PENDING_DELETE",
} as const;

/**
 * @public
 */
export type LicenseDeletionStatus = (typeof LicenseDeletionStatus)[keyof typeof LicenseDeletionStatus];

/**
 * @public
 */
export interface DeleteLicenseResponse {
  /**
   * @public
   * <p>License status.</p>
   */
  Status?: LicenseDeletionStatus;

  /**
   * @public
   * <p>Date when the license is deleted.</p>
   */
  DeletionDate?: string;
}

/**
 * @public
 */
export interface DeleteLicenseConfigurationRequest {
  /**
   * @public
   * <p>ID of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseConfigurationResponse {}

/**
 * @public
 */
export interface DeleteLicenseManagerReportGeneratorRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the report generator to be deleted.</p>
   */
  LicenseManagerReportGeneratorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseManagerReportGeneratorResponse {}

/**
 * @public
 */
export interface DeleteTokenRequest {
  /**
   * @public
   * <p>Token ID.</p>
   */
  TokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTokenResponse {}

/**
 * @public
 */
export interface ExtendLicenseConsumptionRequest {
  /**
   * @public
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken: string | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making the request. Provides an error response if you do not have the required permissions.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface ExtendLicenseConsumptionResponse {
  /**
   * @public
   * <p>License consumption token.</p>
   */
  LicenseConsumptionToken?: string;

  /**
   * @public
   * <p>Date and time at which the license consumption expires.</p>
   */
  Expiration?: string;
}

/**
 * @public
 */
export interface GetAccessTokenRequest {
  /**
   * @public
   * <p>Refresh token, encoded as a JWT token.</p>
   */
  Token: string | undefined;

  /**
   * @public
   * <p>Token properties to validate against those present in the JWT token.</p>
   */
  TokenProperties?: string[];
}

/**
 * @public
 */
export interface GetAccessTokenResponse {
  /**
   * @public
   * <p>Temporary access token.</p>
   */
  AccessToken?: string;
}

/**
 * @public
 */
export interface GetGrantRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * @public
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Describes a grant.</p>
 */
export interface Grant {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;

  /**
   * @public
   * <p>Grant name.</p>
   */
  GrantName: string | undefined;

  /**
   * @public
   * <p>Parent ARN.</p>
   */
  ParentArn: string | undefined;

  /**
   * @public
   * <p>License ARN.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>The grantee principal ARN.</p>
   */
  GranteePrincipalArn: string | undefined;

  /**
   * @public
   * <p>Home Region of the grant.</p>
   */
  HomeRegion: string | undefined;

  /**
   * @public
   * <p>Grant status.</p>
   */
  GrantStatus: GrantStatus | undefined;

  /**
   * @public
   * <p>Grant status reason.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Grant version.</p>
   */
  Version: string | undefined;

  /**
   * @public
   * <p>Granted operations.</p>
   */
  GrantedOperations: AllowedOperation[] | undefined;

  /**
   * @public
   * <p>The options specified for the grant.</p>
   */
  Options?: Options;
}

/**
 * @public
 */
export interface GetGrantResponse {
  /**
   * @public
   * <p>Grant details.</p>
   */
  Grant?: Grant;
}

/**
 * @public
 */
export interface GetLicenseRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>License version.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Details associated with the issuer of a license.</p>
 */
export interface IssuerDetails {
  /**
   * @public
   * <p>Issuer name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Asymmetric KMS key from Key Management Service. The KMS key must have a key usage of sign and verify,
   *          and support the RSASSA-PSS SHA-256 signing algorithm.</p>
   */
  SignKey?: string;

  /**
   * @public
   * <p>Issuer key fingerprint.</p>
   */
  KeyFingerprint?: string;
}

/**
 * @public
 * <p>Software license that is managed in License Manager.</p>
 */
export interface License {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * @public
   * <p>License name.</p>
   */
  LicenseName?: string;

  /**
   * @public
   * <p>Product name.</p>
   */
  ProductName?: string;

  /**
   * @public
   * <p>Product SKU.</p>
   */
  ProductSKU?: string;

  /**
   * @public
   * <p>License issuer.</p>
   */
  Issuer?: IssuerDetails;

  /**
   * @public
   * <p>Home Region of the license.</p>
   */
  HomeRegion?: string;

  /**
   * @public
   * <p>License status.</p>
   */
  Status?: LicenseStatus;

  /**
   * @public
   * <p>Date and time range during which the license is valid, in ISO8601-UTC format.</p>
   */
  Validity?: DatetimeRange;

  /**
   * @public
   * <p>License beneficiary.</p>
   */
  Beneficiary?: string;

  /**
   * @public
   * <p>License entitlements.</p>
   */
  Entitlements?: Entitlement[];

  /**
   * @public
   * <p>Configuration for consumption of the license.</p>
   */
  ConsumptionConfiguration?: ConsumptionConfiguration;

  /**
   * @public
   * <p>License metadata.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * @public
   * <p>License creation time.</p>
   */
  CreateTime?: string;

  /**
   * @public
   * <p>License version.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetLicenseResponse {
  /**
   * @public
   * <p>License details.</p>
   */
  License?: License;
}

/**
 * @public
 */
export interface GetLicenseConfigurationRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EC2_AMI: "EC2_AMI",
  EC2_HOST: "EC2_HOST",
  EC2_INSTANCE: "EC2_INSTANCE",
  RDS: "RDS",
  SYSTEMS_MANAGER_MANAGED_INSTANCE: "SYSTEMS_MANAGER_MANAGED_INSTANCE",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Details about license consumption.</p>
 */
export interface ConsumedLicenseSummary {
  /**
   * @public
   * <p>Resource type of the resource consuming a license.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;
}

/**
 * @public
 * <p>Summary information about a managed resource.</p>
 */
export interface ManagedResourceSummary {
  /**
   * @public
   * <p>Type of resource associated with a license.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>Number of resources associated with licenses.</p>
   */
  AssociationCount?: number;
}

/**
 * @public
 */
export interface GetLicenseConfigurationResponse {
  /**
   * @public
   * <p>Unique ID for the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * @public
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Dimension for which the licenses are counted.</p>
   */
  LicenseCountingType?: LicenseCountingType;

  /**
   * @public
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * @public
   * <p>Number of available licenses.</p>
   */
  LicenseCount?: number;

  /**
   * @public
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * @public
   * <p>Number of licenses assigned to resources.</p>
   */
  ConsumedLicenses?: number;

  /**
   * @public
   * <p>License configuration status.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Account ID of the owner of the license configuration.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>Summaries of the licenses consumed by resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * @public
   * <p>Summaries of the managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * @public
   * <p>Tags for the license configuration.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * @public
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;

  /**
   * @public
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;
}

/**
 * @public
 */
export interface GetLicenseConversionTaskRequest {
  /**
   * @public
   * <p>ID of the license type conversion task to retrieve information on.</p>
   */
  LicenseConversionTaskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LicenseConversionTaskStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type LicenseConversionTaskStatus =
  (typeof LicenseConversionTaskStatus)[keyof typeof LicenseConversionTaskStatus];

/**
 * @public
 */
export interface GetLicenseConversionTaskResponse {
  /**
   * @public
   * <p>ID of the license type conversion task.</p>
   */
  LicenseConversionTaskId?: string;

  /**
   * @public
   * <p>Amazon Resource Names (ARN) of the resources the license conversion task is associated with.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Information about the license type converted from.</p>
   */
  SourceLicenseContext?: LicenseConversionContext;

  /**
   * @public
   * <p>Information about the license type converted to.</p>
   */
  DestinationLicenseContext?: LicenseConversionContext;

  /**
   * @public
   * <p>The status message for the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Status of the license type conversion task.</p>
   */
  Status?: LicenseConversionTaskStatus;

  /**
   * @public
   * <p>Time at which the license type conversion task was started .</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>Amount of time to complete the license type conversion.</p>
   */
  LicenseConversionTime?: Date;

  /**
   * @public
   * <p>Time at which the license type conversion task was completed.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface GetLicenseManagerReportGeneratorRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the report generator.</p>
   */
  LicenseManagerReportGeneratorArn: string | undefined;
}

/**
 * @public
 * <p>Details of the S3 bucket that report generator reports are published to.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>Name of the S3 bucket reports are published to.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>Prefix of the S3 bucket reports are published to.</p>
   */
  keyPrefix?: string;
}

/**
 * @public
 * <p>Describe the details of a report generator.</p>
 */
export interface ReportGenerator {
  /**
   * @public
   * <p>Name of the report generator.</p>
   */
  ReportGeneratorName?: string;

  /**
   * @public
   * <p>Type of reports that are generated.</p>
   */
  ReportType?: ReportType[];

  /**
   * @public
   * <p>License configuration type for this generator.</p>
   */
  ReportContext?: ReportContext;

  /**
   * @public
   * <p>Details about how frequently reports are generated.</p>
   */
  ReportFrequency?: ReportFrequency;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the report generator.</p>
   */
  LicenseManagerReportGeneratorArn?: string;

  /**
   * @public
   * <p>Status of the last report generation attempt.</p>
   */
  LastRunStatus?: string;

  /**
   * @public
   * <p>Failure message for the last report generation attempt.</p>
   */
  LastRunFailureReason?: string;

  /**
   * @public
   * <p>Time the last report was generated at.</p>
   */
  LastReportGenerationTime?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID used to create the report generator.</p>
   */
  ReportCreatorAccount?: string;

  /**
   * @public
   * <p>Description of the report generator.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Details of the S3 bucket that report generator reports are published to.</p>
   */
  S3Location?: S3Location;

  /**
   * @public
   * <p>Time the report was created.</p>
   */
  CreateTime?: string;

  /**
   * @public
   * <p>Tags associated with the report generator.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface GetLicenseManagerReportGeneratorResponse {
  /**
   * @public
   * <p>A report generator that creates periodic reports about your license configurations.</p>
   */
  ReportGenerator?: ReportGenerator;
}

/**
 * @public
 */
export interface GetLicenseUsageRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;
}

/**
 * @public
 * <p>Usage associated with an entitlement resource.</p>
 */
export interface EntitlementUsage {
  /**
   * @public
   * <p>Entitlement usage name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Resource usage consumed.</p>
   */
  ConsumedValue: string | undefined;

  /**
   * @public
   * <p>Maximum entitlement usage count.</p>
   */
  MaxCount?: string;

  /**
   * @public
   * <p>Entitlement usage unit.</p>
   */
  Unit: EntitlementDataUnit | undefined;
}

/**
 * @public
 * <p>Describes the entitlement usage associated with a license.</p>
 */
export interface LicenseUsage {
  /**
   * @public
   * <p>License entitlement usages.</p>
   */
  EntitlementUsages?: EntitlementUsage[];
}

/**
 * @public
 */
export interface GetLicenseUsageResponse {
  /**
   * @public
   * <p>License usage details.</p>
   */
  LicenseUsage?: LicenseUsage;
}

/**
 * @public
 */
export interface GetServiceSettingsRequest {}

/**
 * @public
 * <p>Configuration information for Organizations.</p>
 */
export interface OrganizationConfiguration {
  /**
   * @public
   * <p>Enables Organizations integration.</p>
   */
  EnableIntegration: boolean | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsResponse {
  /**
   * @public
   * <p>Regional S3 bucket path for storing reports, license trail event data, discovery data,
   *          and so on.</p>
   */
  S3BucketArn?: string;

  /**
   * @public
   * <p>SNS topic configured to receive notifications from License Manager.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>Indicates whether Organizations is integrated with License Manager for
   *          cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * @public
   * <p>Indicates whether cross-account discovery is enabled.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource share. The License Manager management account
   *          provides member accounts with access to this share.</p>
   */
  LicenseManagerResourceShareArn?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface ListAssociationsForLicenseConfigurationRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of a license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes an association with a license configuration.</p>
 */
export interface LicenseConfigurationAssociation {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Type of server resource.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>ID of the Amazon Web Services account that owns the resource consuming licenses.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>Time when the license configuration was associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * @public
   * <p>Scope of AMI associations. The possible value is <code>cross-account</code>.</p>
   */
  AmiAssociationScope?: string;
}

/**
 * @public
 */
export interface ListAssociationsForLicenseConfigurationResponse {
  /**
   * @public
   * <p>Information about the associations for the license configuration.</p>
   */
  LicenseConfigurationAssociations?: LicenseConfigurationAssociation[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific criteria,
 *          such as tags, attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>Name of the filter. Filter names are case-sensitive.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the filter, which is case-sensitive. You can only specify one value for the filter.</p>
   */
  Values?: string[];
}

/**
 * @public
 */
export interface ListDistributedGrantsRequest {
  /**
   * @public
   * <p>Amazon Resource Names (ARNs) of the grants.</p>
   */
  GrantArns?: string[];

  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDistributedGrantsResponse {
  /**
   * @public
   * <p>Distributed grant details.</p>
   */
  Grants?: Grant[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * @public
   * <p>Amazon Resource Name of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the failure of a license operation.</p>
 */
export interface LicenseOperationFailure {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Resource type.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>Error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Failure time.</p>
   */
  FailureTime?: Date;

  /**
   * @public
   * <p>Name of the operation.</p>
   */
  OperationName?: string;

  /**
   * @public
   * <p>ID of the Amazon Web Services account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>The requester is "License Manager Automated Discovery".</p>
   */
  OperationRequestedBy?: string;

  /**
   * @public
   * <p>Reserved.</p>
   */
  MetadataList?: Metadata[];
}

/**
 * @public
 */
export interface ListFailuresForLicenseConfigurationOperationsResponse {
  /**
   * @public
   * <p>License configuration operations that failed.</p>
   */
  LicenseOperationFailureList?: LicenseOperationFailure[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLicenseConfigurationsRequest {
  /**
   * @public
   * <p>Amazon Resource Names (ARN) of the license configurations.</p>
   */
  LicenseConfigurationArns?: string[];

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
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
 * @public
 * <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
 *          must be associated with a host), and the number of licenses purchased and used.</p>
 */
export interface LicenseConfiguration {
  /**
   * @public
   * <p>Unique ID of the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * @public
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Dimension to use to track the license inventory.</p>
   */
  LicenseCountingType?: LicenseCountingType;

  /**
   * @public
   * <p>License rules.</p>
   */
  LicenseRules?: string[];

  /**
   * @public
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * @public
   * <p>Number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * @public
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;

  /**
   * @public
   * <p>Number of licenses consumed. </p>
   */
  ConsumedLicenses?: number;

  /**
   * @public
   * <p>Status of the license configuration.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Account ID of the license configuration's owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>Summaries for licenses consumed by various resources.</p>
   */
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];

  /**
   * @public
   * <p>Summaries for managed resources.</p>
   */
  ManagedResourceSummaryList?: ManagedResourceSummary[];

  /**
   * @public
   * <p>Product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * @public
   * <p>Automated discovery information.</p>
   */
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
}

/**
 * @public
 */
export interface ListLicenseConfigurationsResponse {
  /**
   * @public
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurations?: LicenseConfiguration[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLicenseConversionTasksRequest {
  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *          Filters to scope the results. Valid filters are <code>ResourceArns</code> and <code>Status</code>.
   *       </p>
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Information about a license type conversion task.</p>
 */
export interface LicenseConversionTask {
  /**
   * @public
   * <p>The ID of the license type conversion task.</p>
   */
  LicenseConversionTaskId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource associated with the license type
   *          conversion task.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Information about the license type this conversion task converted from.</p>
   */
  SourceLicenseContext?: LicenseConversionContext;

  /**
   * @public
   * <p>Information about the license type this conversion task converted to.</p>
   */
  DestinationLicenseContext?: LicenseConversionContext;

  /**
   * @public
   * <p>The status of the conversion task.</p>
   */
  Status?: LicenseConversionTaskStatus;

  /**
   * @public
   * <p>The status message for the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The time the conversion task was started at.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time the usage operation value of the resource was changed.</p>
   */
  LicenseConversionTime?: Date;

  /**
   * @public
   * <p>The time the conversion task was completed.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface ListLicenseConversionTasksResponse {
  /**
   * @public
   * <p>Information about the license configuration tasks for your account.</p>
   */
  LicenseConversionTasks?: LicenseConversionTask[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLicenseManagerReportGeneratorsRequest {
  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLicenseManagerReportGeneratorsResponse {
  /**
   * @public
   * <p>A report generator that creates periodic reports about your license configurations.</p>
   */
  ReportGenerators?: ReportGenerator[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLicensesRequest {
  /**
   * @public
   * <p>Amazon Resource Names (ARNs) of the licenses.</p>
   */
  LicenseArns?: string[];

  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLicensesResponse {
  /**
   * @public
   * <p>License details.</p>
   */
  Licenses?: License[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLicenseSpecificationsForResourceRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of a resource that has an associated license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details for associating a license configuration with a resource.</p>
 */
export interface LicenseSpecification {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * @public
   * <p>Scope of AMI associations. The possible value is <code>cross-account</code>.</p>
   */
  AmiAssociationScope?: string;
}

/**
 * @public
 */
export interface ListLicenseSpecificationsForResourceResponse {
  /**
   * @public
   * <p>License configurations associated with a resource.</p>
   */
  LicenseSpecifications?: LicenseSpecification[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLicenseVersionsRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLicenseVersionsResponse {
  /**
   * @public
   * <p>License details.</p>
   */
  Licenses?: License[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReceivedGrantsRequest {
  /**
   * @public
   * <p>Amazon Resource Names (ARNs) of the grants.</p>
   */
  GrantArns?: string[];

  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListReceivedGrantsResponse {
  /**
   * @public
   * <p>Received grant details.</p>
   */
  Grants?: Grant[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReceivedGrantsForOrganizationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the received license.</p>
   */
  LicenseArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListReceivedGrantsForOrganizationResponse {
  /**
   * @public
   * <p>Lists the grants the organization has received.</p>
   */
  Grants?: Grant[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReceivedLicensesRequest {
  /**
   * @public
   * <p>Amazon Resource Names (ARNs) of the licenses.</p>
   */
  LicenseArns?: string[];

  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ReceivedStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  FAILED_WORKFLOW: "FAILED_WORKFLOW",
  PENDING_ACCEPT: "PENDING_ACCEPT",
  PENDING_WORKFLOW: "PENDING_WORKFLOW",
  REJECTED: "REJECTED",
  WORKFLOW_COMPLETED: "WORKFLOW_COMPLETED",
} as const;

/**
 * @public
 */
export type ReceivedStatus = (typeof ReceivedStatus)[keyof typeof ReceivedStatus];

/**
 * @public
 * <p>Metadata associated with received licenses and grants.</p>
 */
export interface ReceivedMetadata {
  /**
   * @public
   * <p>Received status.</p>
   */
  ReceivedStatus?: ReceivedStatus;

  /**
   * @public
   * <p>Received status reason.</p>
   */
  ReceivedStatusReason?: string;

  /**
   * @public
   * <p>Allowed operations.</p>
   */
  AllowedOperations?: AllowedOperation[];
}

/**
 * @public
 * <p>Describes a license that is granted to a grantee.</p>
 */
export interface GrantedLicense {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * @public
   * <p>License name.</p>
   */
  LicenseName?: string;

  /**
   * @public
   * <p>Product name.</p>
   */
  ProductName?: string;

  /**
   * @public
   * <p>Product SKU.</p>
   */
  ProductSKU?: string;

  /**
   * @public
   * <p>Granted license issuer.</p>
   */
  Issuer?: IssuerDetails;

  /**
   * @public
   * <p>Home Region of the granted license.</p>
   */
  HomeRegion?: string;

  /**
   * @public
   * <p>Granted license status.</p>
   */
  Status?: LicenseStatus;

  /**
   * @public
   * <p>Date and time range during which the granted license is valid, in ISO8601-UTC format.</p>
   */
  Validity?: DatetimeRange;

  /**
   * @public
   * <p>Granted license beneficiary.</p>
   */
  Beneficiary?: string;

  /**
   * @public
   * <p>License entitlements.</p>
   */
  Entitlements?: Entitlement[];

  /**
   * @public
   * <p>Configuration for consumption of the license.</p>
   */
  ConsumptionConfiguration?: ConsumptionConfiguration;

  /**
   * @public
   * <p>Granted license metadata.</p>
   */
  LicenseMetadata?: Metadata[];

  /**
   * @public
   * <p>Creation time of the granted license.</p>
   */
  CreateTime?: string;

  /**
   * @public
   * <p>Version of the granted license.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>Granted license received metadata.</p>
   */
  ReceivedMetadata?: ReceivedMetadata;
}

/**
 * @public
 */
export interface ListReceivedLicensesResponse {
  /**
   * @public
   * <p>Received license details.</p>
   */
  Licenses?: GrantedLicense[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReceivedLicensesForOrganizationRequest {
  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListReceivedLicensesForOrganizationResponse {
  /**
   * @public
   * <p>Lists the licenses the organization has received.</p>
   */
  Licenses?: GrantedLicense[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const InventoryFilterCondition = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type InventoryFilterCondition = (typeof InventoryFilterCondition)[keyof typeof InventoryFilterCondition];

/**
 * @public
 * <p>An inventory filter.</p>
 */
export interface InventoryFilter {
  /**
   * @public
   * <p>Name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Condition of the filter.</p>
   */
  Condition: InventoryFilterCondition | undefined;

  /**
   * @public
   * <p>Value of the filter.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface ListResourceInventoryRequest {
  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
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
 * @public
 * <p>Details about a resource.</p>
 */
export interface ResourceInventory {
  /**
   * @public
   * <p>ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Platform of the resource.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>Platform version of the resource in the inventory.</p>
   */
  PlatformVersion?: string;

  /**
   * @public
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwningAccountId?: string;
}

/**
 * @public
 */
export interface ListResourceInventoryResponse {
  /**
   * @public
   * <p>Information about the resources.</p>
   */
  ResourceInventoryList?: ResourceInventory[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Information about the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListTokensRequest {
  /**
   * @public
   * <p>Token IDs.</p>
   */
  TokenIds?: string[];

  /**
   * @public
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
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes a token.</p>
 */
export interface TokenData {
  /**
   * @public
   * <p>Token ID.</p>
   */
  TokenId?: string;

  /**
   * @public
   * <p>Type of token generated. The supported value is <code>REFRESH_TOKEN</code>.</p>
   */
  TokenType?: string;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license.</p>
   */
  LicenseArn?: string;

  /**
   * @public
   * <p>Token expiration time, in ISO8601-UTC format.</p>
   */
  ExpirationTime?: string;

  /**
   * @public
   * <p>Data specified by the caller.</p>
   */
  TokenProperties?: string[];

  /**
   * @public
   * <p>Amazon Resource Names (ARN) of the roles included in the token.</p>
   */
  RoleArns?: string[];

  /**
   * @public
   * <p>Token status. The possible values are <code>AVAILABLE</code> and <code>DELETED</code>.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface ListTokensResponse {
  /**
   * @public
   * <p>Received token details.</p>
   */
  Tokens?: TokenData[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUsageForLicenseConfigurationRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
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
 * @public
 * <p>Details about the usage of a resource associated with a license configuration.</p>
 */
export interface LicenseConfigurationUsage {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Type of resource.</p>
   */
  ResourceType?: ResourceType;

  /**
   * @public
   * <p>Status of the resource.</p>
   */
  ResourceStatus?: string;

  /**
   * @public
   * <p>ID of the account that owns the resource.</p>
   */
  ResourceOwnerId?: string;

  /**
   * @public
   * <p>Time when the license configuration was initially associated with the resource.</p>
   */
  AssociationTime?: Date;

  /**
   * @public
   * <p>Number of licenses consumed by the resource.</p>
   */
  ConsumedLicenses?: number;
}

/**
 * @public
 */
export interface ListUsageForLicenseConfigurationResponse {
  /**
   * @public
   * <p>Information about the license configurations.</p>
   */
  LicenseConfigurationUsageList?: LicenseConfigurationUsage[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RejectGrantRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the grant.</p>
   */
  GrantArn: string | undefined;
}

/**
 * @public
 */
export interface RejectGrantResponse {
  /**
   * @public
   * <p>Grant ARN.</p>
   */
  GrantArn?: string;

  /**
   * @public
   * <p>Grant status.</p>
   */
  Status?: GrantStatus;

  /**
   * @public
   * <p>Grant version.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Keys identifying the tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * @enum
 */
export const LicenseConfigurationStatus = {
  AVAILABLE: "AVAILABLE",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type LicenseConfigurationStatus = (typeof LicenseConfigurationStatus)[keyof typeof LicenseConfigurationStatus];

/**
 * @public
 */
export interface UpdateLicenseConfigurationRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn: string | undefined;

  /**
   * @public
   * <p>New status of the license configuration.</p>
   */
  LicenseConfigurationStatus?: LicenseConfigurationStatus;

  /**
   * @public
   * <p>New license rule. The only rule that you can add after you create a license
   *           configuration is licenseAffinityToHost.</p>
   */
  LicenseRules?: string[];

  /**
   * @public
   * <p>New number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * @public
   * <p>New hard limit of the number of available licenses.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * @public
   * <p>New name of the license configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>New description of the license configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>New product information.</p>
   */
  ProductInformationList?: ProductInformation[];

  /**
   * @public
   * <p>When true, disassociates a resource when software is uninstalled.</p>
   */
  DisassociateWhenNotFound?: boolean;
}

/**
 * @public
 */
export interface UpdateLicenseConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLicenseManagerReportGeneratorRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the report generator to update.</p>
   */
  LicenseManagerReportGeneratorArn: string | undefined;

  /**
   * @public
   * <p>Name of the report generator.</p>
   */
  ReportGeneratorName: string | undefined;

  /**
   * @public
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
  Type: ReportType[] | undefined;

  /**
   * @public
   * <p>The report context.</p>
   */
  ReportContext: ReportContext | undefined;

  /**
   * @public
   * <p>Frequency by which reports are generated.</p>
   */
  ReportFrequency: ReportFrequency | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken: string | undefined;

  /**
   * @public
   * <p>Description of the report generator.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateLicenseManagerReportGeneratorResponse {}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface UpdateLicenseSpecificationsForResourceRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Web Services resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>ARNs of the license configurations to add.</p>
   */
  AddLicenseSpecifications?: LicenseSpecification[];

  /**
   * @public
   * <p>ARNs of the license configurations to remove.</p>
   */
  RemoveLicenseSpecifications?: LicenseSpecification[];
}

/**
 * @public
 */
export interface UpdateLicenseSpecificationsForResourceResponse {}

/**
 * @public
 */
export interface UpdateServiceSettingsRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.</p>
   */
  S3BucketArn?: string;

  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>Enables integration with Organizations for cross-account discovery.</p>
   */
  OrganizationConfiguration?: OrganizationConfiguration;

  /**
   * @public
   * <p>Activates cross-account discovery.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;
}

/**
 * @public
 */
export interface UpdateServiceSettingsResponse {}

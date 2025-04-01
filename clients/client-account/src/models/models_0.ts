// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AccountServiceException as __BaseException } from "./AccountServiceException";

/**
 * @public
 */
export interface AcceptPrimaryEmailUpdateRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. To use this parameter, the caller must be an identity in
   *             the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <p>This operation can only be called from the management account or the delegated
   *             administrator account of an organization for a member account.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>.</p>
   *          </note>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The new primary email address for use with the specified account. This must
   *             match the <code>PrimaryEmail</code> from the <code>StartPrimaryEmailUpdate</code> API
   *             call.</p>
   * @public
   */
  PrimaryEmail: string | undefined;

  /**
   * <p>The OTP code sent to the <code>PrimaryEmail</code> specified on the
   *                 <code>StartPrimaryEmailUpdate</code> API call.</p>
   * @public
   */
  Otp: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PrimaryEmailUpdateStatus = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type PrimaryEmailUpdateStatus = (typeof PrimaryEmailUpdateStatus)[keyof typeof PrimaryEmailUpdateStatus];

/**
 * @public
 */
export interface AcceptPrimaryEmailUpdateResponse {
  /**
   * <p>Retrieves the status of the accepted primary email update request.</p>
   * @public
   */
  Status?: PrimaryEmailUpdateStatus | undefined;
}

/**
 * <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request could not be processed because of a conflict in the current status of the
 *             resource. For example, this happens if you try to enable a Region that is currently being disabled
 *             (in a status of DISABLING).</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * <p>The operation failed because it specified a resource that can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in a specified field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_REGION_OPT_TARGET: "invalidRegionOptTarget",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The operation failed because one of the input parameters was invalid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason that validation failed.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The field where the invalid entry was detected.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * @enum
 */
export const AlternateContactType = {
  BILLING: "BILLING",
  OPERATIONS: "OPERATIONS",
  SECURITY: "SECURITY",
} as const;

/**
 * @public
 */
export type AlternateContactType = (typeof AlternateContactType)[keyof typeof AlternateContactType];

/**
 * @public
 */
export interface DeleteAlternateContactRequest {
  /**
   * <p>Specifies which of the alternate contacts to delete. </p>
   * @public
   */
  AlternateContactType: AlternateContactType | undefined;

  /**
   * <p>Specifies the 12 digit account ID number of the Amazon Web Services account that
   *         you want to access or modify with this operation.</p>
   *          <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the
   *         identity used to call the operation.</p>
   *          <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and
   *         the specified account ID must be a member account in the same organization. The
   *         organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *         enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the
   *         Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *         assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>; it must call
   *             the operation in standalone context by not including the <code>AccountId</code>
   *             parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, then
   *         don't specify this parameter, and call the operation using an identity belonging to
   *         the account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAlternateContactRequest {
  /**
   * <p>Specifies which alternate contact you want to retrieve.</p>
   * @public
   */
  AlternateContactType: AlternateContactType | undefined;

  /**
   * <p>Specifies the 12 digit account ID number of the Amazon Web Services account that
   *         you want to access or modify with this operation.</p>
   *          <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the
   *         identity used to call the operation.</p>
   *          <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and
   *         the specified account ID must be a member account in the same organization. The
   *         organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *         enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the
   *         Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *         assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>; it must call
   *             the operation in standalone context by not including the <code>AccountId</code>
   *             parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, then
   *         don't specify this parameter, and call the operation using an identity belonging to
   *         the account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>A structure that contains the details of an alternate contact associated with an Amazon Web Services
 *             account</p>
 * @public
 */
export interface AlternateContact {
  /**
   * <p>The name associated with this alternate contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The title associated with this alternate contact.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The email address associated with this alternate contact.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The phone number associated with this alternate contact.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The type of alternate contact.</p>
   * @public
   */
  AlternateContactType?: AlternateContactType | undefined;
}

/**
 * @public
 */
export interface GetAlternateContactResponse {
  /**
   * <p>A structure that contains the details for the specified alternate contact.</p>
   * @public
   */
  AlternateContact?: AlternateContact | undefined;
}

/**
 * @public
 */
export interface PutAlternateContactRequest {
  /**
   * <p>Specifies a name for the alternate contact.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies a title for the alternate contact.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>Specifies an email address for the alternate contact. </p>
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * <p>Specifies a phone number for the alternate contact.</p>
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * <p>Specifies which alternate contact you want to create or update.</p>
   * @public
   */
  AlternateContactType: AlternateContactType | undefined;

  /**
   * <p>Specifies the 12 digit account ID number of the Amazon Web Services account that
   *         you want to access or modify with this operation.</p>
   *          <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the
   *         identity used to call the operation.</p>
   *          <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and
   *         the specified account ID must be a member account in the same organization. The
   *         organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *         enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the
   *         Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *         assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>; it must call
   *             the operation in standalone context by not including the <code>AccountId</code>
   *             parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, then
   *         don't specify this parameter, and call the operation using an identity belonging to
   *         the account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetContactInformationRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this
   *             parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to the
   *             account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>Contains the details of the primary contact information associated with an
 *             Amazon Web Services account.</p>
 * @public
 */
export interface ContactInformation {
  /**
   * <p>The full name of the primary contact address.</p>
   * @public
   */
  FullName: string | undefined;

  /**
   * <p>The first line of the primary contact address.</p>
   * @public
   */
  AddressLine1: string | undefined;

  /**
   * <p>The second line of the primary contact address, if any.</p>
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * <p>The third line of the primary contact address, if any.</p>
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * <p>The city of the primary contact address.</p>
   * @public
   */
  City: string | undefined;

  /**
   * <p>The state or region of the primary contact address. If the mailing address is within the United States (US), the
   *             value in this field can be either a two character state code (for example, <code>NJ</code>) or the full state name
   *             (for example, <code>New Jersey</code>). This field is required in the following countries: <code>US</code>,
   *                 <code>CA</code>, <code>GB</code>, <code>DE</code>, <code>JP</code>, <code>IN</code>,
   *             and <code>BR</code>.</p>
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * <p>The district or county of the primary contact address, if any.</p>
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * <p>The postal code of the primary contact address.</p>
   * @public
   */
  PostalCode: string | undefined;

  /**
   * <p>The ISO-3166 two-letter country code for the primary contact address.</p>
   * @public
   */
  CountryCode: string | undefined;

  /**
   * <p>The phone number of the primary contact information. The number will be validated and,
   *             in some countries, checked for activation.</p>
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The name of the company associated with the primary contact information, if
   *             any.</p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>The URL of the website associated with the primary contact information, if any.</p>
   * @public
   */
  WebsiteUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetContactInformationResponse {
  /**
   * <p>Contains the details of the primary contact information associated with an
   *             Amazon Web Services account.</p>
   * @public
   */
  ContactInformation?: ContactInformation | undefined;
}

/**
 * @public
 */
export interface PutContactInformationRequest {
  /**
   * <p>Contains the details of the primary contact information associated with an
   *             Amazon Web Services account.</p>
   * @public
   */
  ContactInformation: ContactInformation | undefined;

  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this
   *             parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to the
   *             account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetPrimaryEmailRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. To use this parameter, the caller must be an identity in
   *             the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <p>This operation can only be called from the management account or the delegated
   *             administrator account of an organization for a member account.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>.</p>
   *          </note>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetPrimaryEmailResponse {
  /**
   * <p>Retrieves the primary email address associated with the specified
   *             account.</p>
   * @public
   */
  PrimaryEmail?: string | undefined;
}

/**
 * @public
 */
export interface StartPrimaryEmailUpdateRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. To use this parameter, the caller must be an identity in
   *             the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <p>This operation can only be called from the management account or the delegated
   *             administrator account of an organization for a member account.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>.</p>
   *          </note>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The new primary email address (also known as the root user email address) to
   *             use in the specified account.</p>
   * @public
   */
  PrimaryEmail: string | undefined;
}

/**
 * @public
 */
export interface StartPrimaryEmailUpdateResponse {
  /**
   * <p>The status of the primary email update request.</p>
   * @public
   */
  Status?: PrimaryEmailUpdateStatus | undefined;
}

/**
 * @public
 */
export interface DisableRegionRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this
   *             parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to the
   *             account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the Region-code for a given Region name (for example,
   *                 <code>af-south-1</code>). When you disable a Region, Amazon Web Services performs actions to
   *             deactivate that Region in your account, such as destroying IAM resources in the Region.
   *             This process takes a few minutes for most accounts, but this can take several hours. You
   *             cannot enable the Region until the disabling process is fully completed.</p>
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface EnableRegionRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this
   *             parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to the
   *             account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the Region-code for a given Region name (for example,
   *                 <code>af-south-1</code>). When you enable a Region, Amazon Web Services performs actions to
   *             prepare your account in that Region, such as distributing your IAM resources to the
   *             Region. This process takes a few minutes for most accounts, but it can take several
   *             hours. You cannot use the Region until this process is complete. Furthermore, you cannot
   *             disable the Region until the enabling process is fully completed.</p>
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface GetRegionOptStatusRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this
   *             parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to the
   *             account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the Region-code for a given Region name (for example,
   *                 <code>af-south-1</code>). This function will return the status of whatever Region
   *             you pass into this parameter. </p>
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RegionOptStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLED_BY_DEFAULT: "ENABLED_BY_DEFAULT",
  ENABLING: "ENABLING",
} as const;

/**
 * @public
 */
export type RegionOptStatus = (typeof RegionOptStatus)[keyof typeof RegionOptStatus];

/**
 * @public
 */
export interface GetRegionOptStatusResponse {
  /**
   * <p>The Region code that was passed in.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>One of the potential statuses a Region can undergo (Enabled, Enabling, Disabled,
   *             Disabling, Enabled_By_Default).</p>
   * @public
   */
  RegionOptStatus?: RegionOptStatus | undefined;
}

/**
 * @public
 */
export interface ListRegionsRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this
   *             parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *          <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *          </note>
   *          <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to the
   *             account whose contacts you wish to retrieve or modify.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The total number of items to return in the command’s output. If the total number of
   *             items available is more than the value specified, a <code>NextToken</code> is provided
   *             in the command’s output. To resume pagination, provide the <code>NextToken</code> value
   *             in the <code>starting-token</code> argument of a subsequent command. Do not use the
   *                 <code>NextToken</code> response element directly outside of the Amazon Web Services CLI. For usage
   *             examples, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Pagination</a> in the <i>Amazon Web Services Command Line Interface User
   *                 Guide</i>. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used to specify where to start paginating. This is the <code>NextToken</code>
   *             from a previously truncated response. For usage examples, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Pagination</a> in the
   *                 <i>Amazon Web Services Command Line Interface User Guide</i>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Region statuses (Enabling, Enabled, Disabling, Disabled, Enabled_by_default)
   *             to use to filter the list of Regions for a given account. For example, passing in a
   *             value of ENABLING will only return a list of Regions with a Region status of
   *             ENABLING.</p>
   * @public
   */
  RegionOptStatusContains?: RegionOptStatus[] | undefined;
}

/**
 * <p>This is a structure that expresses the Region for a given account, consisting of a
 *             name and opt-in status.</p>
 * @public
 */
export interface Region {
  /**
   * <p>The Region code of a given Region (for example, <code>us-east-1</code>).</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>One of potential statuses a Region can undergo (Enabled, Enabling, Disabled,
   *             Disabling, Enabled_By_Default).</p>
   * @public
   */
  RegionOptStatus?: RegionOptStatus | undefined;
}

/**
 * @public
 */
export interface ListRegionsResponse {
  /**
   * <p>If there is more data to be returned, this will be populated. It should be passed into
   *             the <code>next-token</code> request parameter of <code>list-regions</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This is a list of Regions for a given account, or if the filtered parameter was used,
   *             a list of Regions that match the filter criteria set in the <code>filter</code>
   *             parameter.</p>
   * @public
   */
  Regions?: Region[] | undefined;
}

/**
 * @internal
 */
export const AcceptPrimaryEmailUpdateRequestFilterSensitiveLog = (obj: AcceptPrimaryEmailUpdateRequest): any => ({
  ...obj,
  ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
  ...(obj.Otp && { Otp: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AlternateContactFilterSensitiveLog = (obj: AlternateContact): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Title && { Title: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAlternateContactResponseFilterSensitiveLog = (obj: GetAlternateContactResponse): any => ({
  ...obj,
  ...(obj.AlternateContact && { AlternateContact: AlternateContactFilterSensitiveLog(obj.AlternateContact) }),
});

/**
 * @internal
 */
export const PutAlternateContactRequestFilterSensitiveLog = (obj: PutAlternateContactRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Title && { Title: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContactInformationFilterSensitiveLog = (obj: ContactInformation): any => ({
  ...obj,
  ...(obj.FullName && { FullName: SENSITIVE_STRING }),
  ...(obj.AddressLine1 && { AddressLine1: SENSITIVE_STRING }),
  ...(obj.AddressLine2 && { AddressLine2: SENSITIVE_STRING }),
  ...(obj.AddressLine3 && { AddressLine3: SENSITIVE_STRING }),
  ...(obj.City && { City: SENSITIVE_STRING }),
  ...(obj.StateOrRegion && { StateOrRegion: SENSITIVE_STRING }),
  ...(obj.DistrictOrCounty && { DistrictOrCounty: SENSITIVE_STRING }),
  ...(obj.PostalCode && { PostalCode: SENSITIVE_STRING }),
  ...(obj.CountryCode && { CountryCode: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.CompanyName && { CompanyName: SENSITIVE_STRING }),
  ...(obj.WebsiteUrl && { WebsiteUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetContactInformationResponseFilterSensitiveLog = (obj: GetContactInformationResponse): any => ({
  ...obj,
  ...(obj.ContactInformation && { ContactInformation: ContactInformationFilterSensitiveLog(obj.ContactInformation) }),
});

/**
 * @internal
 */
export const PutContactInformationRequestFilterSensitiveLog = (obj: PutContactInformationRequest): any => ({
  ...obj,
  ...(obj.ContactInformation && { ContactInformation: ContactInformationFilterSensitiveLog(obj.ContactInformation) }),
});

/**
 * @internal
 */
export const GetPrimaryEmailResponseFilterSensitiveLog = (obj: GetPrimaryEmailResponse): any => ({
  ...obj,
  ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartPrimaryEmailUpdateRequestFilterSensitiveLog = (obj: StartPrimaryEmailUpdateRequest): any => ({
  ...obj,
  ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
});

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { AccountServiceException as __BaseException } from "./AccountServiceException";

/**
 * <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
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

export enum AlternateContactType {
  BILLING = "BILLING",
  OPERATIONS = "OPERATIONS",
  SECURITY = "SECURITY",
}

export interface DeleteAlternateContactRequest {
  /**
   * <p>Specifies which of the alternate contacts to delete. </p>
   */
  AlternateContactType: AlternateContactType | string | undefined;

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
   */
  AccountId?: string;
}

/**
 * <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
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
 * <p>The operation failed because one of the input parameters was invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

export interface GetAlternateContactRequest {
  /**
   * <p>Specifies which alternate contact you want to retrieve.</p>
   */
  AlternateContactType: AlternateContactType | string | undefined;

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
   */
  AccountId?: string;
}

/**
 * <p>A structure that contains the details of an alternate contact associated with an Amazon Web Services
 *             account</p>
 */
export interface AlternateContact {
  /**
   * <p>The name associated with this alternate contact.</p>
   */
  Name?: string;

  /**
   * <p>The title associated with this alternate contact.</p>
   */
  Title?: string;

  /**
   * <p>The email address associated with this alternate contact.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The phone number associated with this alternate contact.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The type of alternate contact.</p>
   */
  AlternateContactType?: AlternateContactType | string;
}

export interface GetAlternateContactResponse {
  /**
   * <p>A structure that contains the details for the specified alternate contact.</p>
   */
  AlternateContact?: AlternateContact;
}

export interface PutAlternateContactRequest {
  /**
   * <p>Specifies a name for the alternate contact.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies a title for the alternate contact.</p>
   */
  Title: string | undefined;

  /**
   * <p>Specifies an email address for the alternate contact. </p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>Specifies a phone number for the alternate contact.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>Specifies which alternate contact you want to create or update.</p>
   */
  AlternateContactType: AlternateContactType | string | undefined;

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
   */
  AccountId?: string;
}

export interface GetContactInformationRequest {
  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this parameter, the
   *             caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must also be a member account in the same organization. The organization must have
   *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *         <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *         </note>
   *         <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to
   *             the account whose contacts you wish to retrieve or modify.</p>
   */
  AccountId?: string;
}

/**
 * <p>Contains the details of the primary contact information associated with an Amazon Web Services account.</p>
 */
export interface ContactInformation {
  /**
   * <p>The full name of the primary contact address.</p>
   */
  FullName: string | undefined;

  /**
   * <p>The first line of the primary contact address.</p>
   */
  AddressLine1: string | undefined;

  /**
   * <p>The second line of the primary contact address, if any.</p>
   */
  AddressLine2?: string;

  /**
   * <p>The third line of the primary contact address, if any.</p>
   */
  AddressLine3?: string;

  /**
   * <p>The city of the primary contact address.</p>
   */
  City: string | undefined;

  /**
   * <p>The state or region of the primary contact address. This field is required in selected countries.</p>
   */
  StateOrRegion?: string;

  /**
   * <p>The district or county of the primary contact address, if any.</p>
   */
  DistrictOrCounty?: string;

  /**
   * <p>The postal code of the primary contact address.</p>
   */
  PostalCode: string | undefined;

  /**
   * <p>The ISO-3166 two-letter country code for the primary contact address.</p>
   */
  CountryCode: string | undefined;

  /**
   * <p>The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The name of the company associated with the primary contact information, if any.</p>
   */
  CompanyName?: string;

  /**
   * <p>The URL of the website associated with the primary contact information, if any.</p>
   */
  WebsiteUrl?: string;
}

export interface GetContactInformationResponse {
  /**
   * <p>Contains the details of the primary contact information associated with an Amazon Web Services account.</p>
   */
  ContactInformation?: ContactInformation;
}

export interface PutContactInformationRequest {
  /**
   * <p>Contains the details of the primary contact information associated with an Amazon Web Services account.</p>
   */
  ContactInformation: ContactInformation | undefined;

  /**
   * <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access
   *             or modify with this operation. If you don't specify this parameter, it defaults to the
   *             Amazon Web Services account of the identity used to call the operation. To use this parameter, the
   *             caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's
   *                 management account</a> or a delegated administrator account. The specified
   *             account ID must also be a member account in the same organization. The organization must have
   *             <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features
   *                 enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled
   *             for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account
   *             assigned.</p>
   *         <note>
   *             <p>The management account can't specify its own <code>AccountId</code>. It must call
   *                 the operation in standalone context by not including the <code>AccountId</code>
   *                 parameter.</p>
   *         </note>
   *         <p>To call this operation on an account that is not a member of an organization, don't
   *             specify this parameter. Instead, call the operation using an identity belonging to
   *             the account whose contacts you wish to retrieve or modify.</p>
   */
  AccountId?: string;
}

/**
 * @internal
 */
export const DeleteAlternateContactRequestFilterSensitiveLog = (obj: DeleteAlternateContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAlternateContactRequestFilterSensitiveLog = (obj: GetAlternateContactRequest): any => ({
  ...obj,
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
export const GetContactInformationRequestFilterSensitiveLog = (obj: GetContactInformationRequest): any => ({
  ...obj,
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

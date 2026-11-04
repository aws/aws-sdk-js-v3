// smithy-typescript generated code
import type {
  AccountState,
  AlternateContactType,
  AwsAccountState,
  PhoneNumberVerificationStatus,
  PrimaryEmailUpdateStatus,
  RegionOptStatus,
} from "./enums";

/**
 * @public
 */
export interface AcceptPrimaryEmailUpdateRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * This operation can only be called from the management account or the delegated administrator account of an organization for a member account.
   *
   * > **Note:** The management account can't specify its own `AccountId`.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The new primary email address for use with the specified account. This must match the `PrimaryEmail` from the `StartPrimaryEmailUpdate` API call.
   *
   * @public
   */
  PrimaryEmail: string | undefined;

  /**
   * The OTP code sent to the `PrimaryEmail` specified on the `StartPrimaryEmailUpdate` API call.
   *
   * @public
   */
  Otp: string | undefined;
}

/**
 * @public
 */
export interface AcceptPrimaryEmailUpdateResponse {
  /**
   * Retrieves the status of the accepted primary email update request.
   *
   * @public
   */
  Status?: PrimaryEmailUpdateStatus | undefined;
}

/**
 * The input failed to meet the constraints specified by the Amazon Web Services service in a specified field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message about the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetAccountInformationRequest {
  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountInformationResponse {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * This operation can only be called from the management account or the delegated administrator account of an organization for a member account.
   *
   * > **Note:** The management account can't specify its own `AccountId`.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the account.
   *
   * @public
   */
  AccountName?: string | undefined;

  /**
   * The date and time the account was created.
   *
   * @public
   */
  AccountCreatedDate?: Date | undefined;

  /**
   * The state of the account. Each account state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes.
   *
   * Valid values: `PENDING_ACTIVATION | ACTIVE | SUSPENDED | CLOSED`
   *
   * @public
   */
  AccountState?: AccountState | undefined;
}

/**
 * @public
 */
export interface PutAccountNameRequest {
  /**
   * The name of the account.
   *
   * @public
   */
  AccountName: string | undefined;

  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlternateContactRequest {
  /**
   * Specifies which of the alternate contacts to delete.
   *
   * @public
   */
  AlternateContactType: AlternateContactType | undefined;

  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAlternateContactRequest {
  /**
   * Specifies which alternate contact you want to retrieve.
   *
   * @public
   */
  AlternateContactType: AlternateContactType | undefined;

  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * A structure that contains the details of an alternate contact associated with an Amazon Web Services account
 *
 * @public
 */
export interface AlternateContact {
  /**
   * The name associated with this alternate contact.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The title associated with this alternate contact.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The email address associated with this alternate contact.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The phone number associated with this alternate contact.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The type of alternate contact.
   *
   * @public
   */
  AlternateContactType?: AlternateContactType | undefined;
}

/**
 * @public
 */
export interface GetAlternateContactResponse {
  /**
   * A structure that contains the details for the specified alternate contact.
   *
   * @public
   */
  AlternateContact?: AlternateContact | undefined;
}

/**
 * @public
 */
export interface PutAlternateContactRequest {
  /**
   * Specifies a name for the alternate contact.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies a title for the alternate contact.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * Specifies an email address for the alternate contact.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * Specifies a phone number for the alternate contact.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * Specifies which alternate contact you want to create or update.
   *
   * @public
   */
  AlternateContactType: AlternateContactType | undefined;

  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetGovCloudAccountInformationRequest {
  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  StandardAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetGovCloudAccountInformationResponse {
  /**
   * The 12-digit account ID number of the linked GovCloud account.
   *
   * @public
   */
  GovCloudAccountId: string | undefined;

  /**
   * The account state of the linked GovCloud account.
   *
   * @public
   */
  AccountState: AwsAccountState | undefined;
}

/**
 * @public
 */
export interface GetContactInformationRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`. It must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * Contains the details of the primary contact information associated with an Amazon Web Services account.
 *
 * @public
 */
export interface ContactInformation {
  /**
   * The full name of the primary contact address.
   *
   * @public
   */
  FullName: string | undefined;

  /**
   * The first line of the primary contact address.
   *
   * @public
   */
  AddressLine1: string | undefined;

  /**
   * The second line of the primary contact address, if any.
   *
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * The third line of the primary contact address, if any.
   *
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * The city of the primary contact address.
   *
   * @public
   */
  City: string | undefined;

  /**
   * The state or region of the primary contact address. If the mailing address is within the United States (US), the value in this field can be either a two character state code (for example, `NJ`) or the full state name (for example, `New Jersey`). This field is required in the following countries: `US`, `CA`, `GB`, `DE`, `JP`, `IN`, and `BR`.
   *
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * The district or county of the primary contact address, if any.
   *
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * The postal code of the primary contact address.
   *
   * @public
   */
  PostalCode: string | undefined;

  /**
   * The ISO-3166 two-letter country code for the primary contact address.
   *
   * @public
   */
  CountryCode: string | undefined;

  /**
   * The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation.
   *
   * @public
   */
  PhoneNumber: string | undefined;

  /**
   * The name of the company associated with the primary contact information, if any.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * The URL of the website associated with the primary contact information, if any.
   *
   * @public
   */
  WebsiteUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetContactInformationResponse {
  /**
   * Contains the details of the primary contact information associated with an Amazon Web Services account.
   *
   * @public
   */
  ContactInformation?: ContactInformation | undefined;

  /**
   * The verification status of the phone number in the primary contact information associated with an Amazon Web Services account. Valid values:
   *
   * - `PENDING` – A one-time passcode has been sent and is waiting to be submitted.
   * - `VERIFIED` – The phone number has been verified.
   * - `UNVERIFIED` – The phone number has not been verified.
   * - `NOT_SUPPORTED` – Phone number verification isn't available for this account.
   *
   * @public
   */
  VerificationStatus?: PhoneNumberVerificationStatus | undefined;
}

/**
 * @public
 */
export interface PutContactInformationRequest {
  /**
   * Contains the details of the primary contact information associated with an Amazon Web Services account.
   *
   * @public
   */
  ContactInformation: ContactInformation | undefined;

  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`. It must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface SendPhoneNumberVerificationRequest {
  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface SendPhoneNumberVerificationResponse {
  /**
   * The verification status of the phone number in the primary contact information after the one-time passcode is sent. Valid values:
   *
   * - `PENDING` – A one-time passcode has been sent and is waiting to be submitted.
   * - `VERIFIED` – The phone number has been verified.
   * - `UNVERIFIED` – The phone number has not been verified.
   * - `NOT_SUPPORTED` – Phone number verification isn't available for this account.
   *
   * @public
   */
  Status?: PhoneNumberVerificationStatus | undefined;
}

/**
 * @public
 */
export interface VerifyPhoneNumberRequest {
  /**
   * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.
   *
   * If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.
   *
   * To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-account.html) enabled for the Account Management service, and optionally a [delegated administrator](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`; it must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The one-time passcode sent to the phone number in the primary contact information by the `SendPhoneNumberVerification` operation.
   *
   * @public
   */
  Otp: string | undefined;
}

/**
 * @public
 */
export interface VerifyPhoneNumberResponse {
  /**
   * The verification status of the phone number in the primary contact information after the submitted one-time passcode is evaluated. Valid values:
   *
   * - `PENDING` – A one-time passcode has been sent and is waiting to be submitted.
   * - `VERIFIED` – The phone number has been verified.
   * - `UNVERIFIED` – The phone number has not been verified.
   * - `NOT_SUPPORTED` – Phone number verification isn't available for this account.
   *
   * @public
   */
  Status?: PhoneNumberVerificationStatus | undefined;
}

/**
 * @public
 */
export interface GetPrimaryEmailRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * This operation can only be called from the management account or the delegated administrator account of an organization for a member account.
   *
   * > **Note:** The management account can't specify its own `AccountId`.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetPrimaryEmailResponse {
  /**
   * Retrieves the primary email address associated with the specified account.
   *
   * @public
   */
  PrimaryEmail?: string | undefined;
}

/**
 * @public
 */
export interface GetPrimaryEmailUpdateStatusRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * This operation can only be called from the management account or the delegated administrator account of an organization for a member account.
   *
   * > **Note:** The management account can't specify its own `AccountId`.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetPrimaryEmailUpdateStatusResponse {
  /**
   * The status of the most recent primary email update request.
   *
   * @public
   */
  Status: PrimaryEmailUpdateStatus | undefined;

  /**
   * The date and time that the most recent primary email update status was last changed.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StartPrimaryEmailUpdateRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * This operation can only be called from the management account or the delegated administrator account of an organization for a member account.
   *
   * > **Note:** The management account can't specify its own `AccountId`.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The new primary email address (also known as the root user email address) to use in the specified account.
   *
   * @public
   */
  PrimaryEmail: string | undefined;
}

/**
 * @public
 */
export interface StartPrimaryEmailUpdateResponse {
  /**
   * The status of the primary email update request.
   *
   * @public
   */
  Status?: PrimaryEmailUpdateStatus | undefined;
}

/**
 * @public
 */
export interface DisableRegionRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`. It must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the Region-code for a given Region name (for example, `af-south-1`). When you disable a Region, Amazon Web Services performs actions to deactivate that Region in your account, such as destroying IAM resources in the Region. This process takes a few minutes for most accounts, but this can take several hours. You cannot enable the Region until the disabling process is fully completed.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface EnableRegionRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`. It must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the Region-code for a given Region name (for example, `af-south-1`). When you enable a Region, Amazon Web Services performs actions to prepare your account in that Region, such as distributing your IAM resources to the Region. This process takes a few minutes for most accounts, but it can take several hours. You cannot use the Region until this process is complete. Furthermore, you cannot disable the Region until the enabling process is fully completed.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface GetRegionOptStatusRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`. It must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the Region-code for a given Region name (for example, `af-south-1`). This function will return the status of whatever Region you pass into this parameter.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface GetRegionOptStatusResponse {
  /**
   * The Region code that was passed in.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * One of the potential statuses a Region can undergo (Enabled, Enabling, Disabled, Disabling, Enabled_By_Default).
   *
   * @public
   */
  RegionOptStatus?: RegionOptStatus | undefined;
}

/**
 * @public
 */
export interface ListRegionsRequest {
  /**
   * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the [organization's management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have [all features enabled](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html), and the organization must have [trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html) enabled for the Account Management service, and optionally a [delegated admin](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#delegated-admin) account assigned.
   *
   * > **Note:** The management account can't specify its own `AccountId`. It must call the operation in standalone context by not including the `AccountId` parameter.
   *
   * To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The total number of items to return in the command’s output. If the total number of items available is more than the value specified, a `NextToken` is provided in the command’s output. To resume pagination, provide the `NextToken` value in the `starting-token` argument of a subsequent command. Do not use the `NextToken` response element directly outside of the Amazon Web Services CLI. For usage examples, see [Pagination](http://docs.aws.amazon.com/cli/latest/userguide/pagination.html) in the *Amazon Web Services Command Line Interface User Guide*.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to specify where to start paginating. This is the `NextToken` from a previously truncated response. For usage examples, see [Pagination](http://docs.aws.amazon.com/cli/latest/userguide/pagination.html) in the *Amazon Web Services Command Line Interface User Guide*.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of Region statuses (Enabling, Enabled, Disabling, Disabled, Enabled_by_default) to use to filter the list of Regions for a given account. For example, passing in a value of ENABLING will only return a list of Regions with a Region status of ENABLING.
   *
   * @public
   */
  RegionOptStatusContains?: RegionOptStatus[] | undefined;
}

/**
 * This is a structure that expresses the Region for a given account, consisting of a name and opt-in status.
 *
 * @public
 */
export interface Region {
  /**
   * The Region code of a given Region (for example, `us-east-1`).
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * One of potential statuses a Region can undergo (Enabled, Enabling, Disabled, Disabling, Enabled_By_Default).
   *
   * @public
   */
  RegionOptStatus?: RegionOptStatus | undefined;
}

/**
 * @public
 */
export interface ListRegionsResponse {
  /**
   * If there is more data to be returned, this will be populated. It should be passed into the `next-token` request parameter of `list-regions`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * This is a list of Regions for a given account, or if the filtered parameter was used, a list of Regions that match the filter criteria set in the `filter` parameter.
   *
   * @public
   */
  Regions?: Region[] | undefined;
}

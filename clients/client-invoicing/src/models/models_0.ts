// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { InvoicingServiceException as __BaseException } from "./InvoicingServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>You don't have sufficient access to perform this action.
   *         </p>
   * @public
   */
  resourceName?: string | undefined;

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
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface BatchGetInvoiceProfileRequest {
  /**
   * <p>Retrieves the corresponding invoice profile data for these account IDs.
   *     </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>
 * The details of the address associated with the receiver.
 * </p>
 * @public
 */
export interface ReceiverAddress {
  /**
   * <p>
   * The first line of the address.
   * </p>
   * @public
   */
  AddressLine1?: string | undefined;

  /**
   * <p>
   * The second line of the address, if applicable.
   * </p>
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * <p>
   * The third line of the address, if applicable.
   * </p>
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * <p>
   * The district or country the address is located in.
   * </p>
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * <p>
   * The city that the address is in.
   * </p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>
   * The state, region, or province the address is located.
   * </p>
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * <p>
   * The country code for the country the address is in.
   * </p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>
   * A unique company name.
   * </p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>
   * The postal code associated with the address.
   * </p>
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * <p>
 * Contains high-level information about the invoice receiver.
 * </p>
 * @public
 */
export interface InvoiceProfile {
  /**
   * <p>
   * The account ID the invoice profile is generated for.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The name of the person receiving the invoice profile.
   * </p>
   * @public
   */
  ReceiverName?: string | undefined;

  /**
   * <p>The address of the receiver that will be printed on the invoice.
   * </p>
   * @public
   */
  ReceiverAddress?: ReceiverAddress | undefined;

  /**
   * <p>The email address for the invoice profile receiver.
   * </p>
   * @public
   */
  ReceiverEmail?: string | undefined;

  /**
   * <p>
   * This specifies the issuing entity of the invoice.
   * </p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>
   * Your Tax Registration Number (TRN) information.
   * </p>
   * @public
   */
  TaxRegistrationNumber?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetInvoiceProfileResponse {
  /**
   * <p>
   *       A list of invoice profiles corresponding to the requested accounts.
   *     </p>
   * @public
   */
  Profiles?: InvoiceProfile[] | undefined;
}

/**
 * <p>The processing request failed because of an unknown error, exception, or failure.
 * </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The processing request failed because of an unknown error, exception, or failure.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource could not be found.
 * </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource could not be found.</p>
   * @public
   */
  resourceName?: string | undefined;

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
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>
 *             The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *         </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>
   *             The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *             The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *         </p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ACCOUNT_MEMBERSHIP_ERROR: "accountMembershipError",
  CANNOT_PARSE: "cannotParse",
  DUPLICATE_INVOICE_UNIT: "duplicateInvoiceUnit",
  EXPIRED_NEXT_TOKEN: "expiredNextToken",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_INPUT: "invalidInput",
  INVALID_NEXT_TOKEN: "invalidNextToken",
  MAX_ACCOUNTS_EXCEEDED: "maxAccountsExceeded",
  MAX_INVOICE_UNITS_EXCEEDED: "maxInvoiceUnitsExceeded",
  MUTUAL_EXCLUSION_ERROR: "mutualExclusionError",
  NON_MEMBERS_PRESENT: "nonMemberPresent",
  OTHER: "other",
  TAX_SETTINGS_ERROR: "taxSettingsError",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>
 *     The input fails to satisfy the constraints specified by an Amazon Web Services service.
 * </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>You don't have sufficient access to perform this action.
   *         </p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>You don't have sufficient access to perform this action.
   *         </p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>
   *             The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *         </p>
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
    this.resourceName = opts.resourceName;
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The tag structure that contains a tag key and value.
 * </p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The object key of your of your resource tag.
   * </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>
   * The specific value of the resource tag.
   * </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>
 * This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is <code>LINKED_ACCOUNT</code>.
 * </p>
 * @public
 */
export interface InvoiceUnitRule {
  /**
   * <p>The list of <code>LINKED_ACCOUNT</code> IDs where charges are included within the invoice unit.
   * </p>
   * @public
   */
  LinkedAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInvoiceUnitRequest {
  /**
   * <p>
   *       The unique name of the invoice unit that is shown on the generated invoice. This can't be changed once it is set. To change this name, you must delete the invoice unit recreate.
   *     </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *       The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID.
   *     </p>
   * @public
   */
  InvoiceReceiver: string | undefined;

  /**
   * <p>
   *       The invoice unit's description. This can be changed at a later time.
   *     </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *     </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p>The <code>InvoiceUnitRule</code> object used to create invoice units.
   *     </p>
   * @public
   */
  Rule: InvoiceUnitRule | undefined;

  /**
   * <p>
   *       The tag structure that contains a tag key and value.
   *     </p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateInvoiceUnitResponse {
  /**
   * <p>
   *       The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvoiceUnitRequest {
  /**
   * <p>
   *       The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvoiceUnitResponse {
  /**
   * <p>
   *       The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * <p>An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are <code>InvoiceReceivers</code>, <code>Names</code>, and <code>Accounts</code>.
 * </p>
 * @public
 */
export interface Filters {
  /**
   * <p>
   *     An optional input to the list API. You can specify a list of invoice unit names inside filters to return invoice units that match only the specified invoice unit names. If multiple names are provided, the result is an <code>OR</code> condition (match any) of the specified invoice unit names.
   * </p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p>
   * You can specify a list of Amazon Web Services account IDs inside filters to return invoice units that match only the specified accounts. If multiple accounts are provided, the result is an <code>OR</code> condition (match any) of the specified accounts. This filter only matches the specified accounts on the invoice receivers of the invoice units.
   * </p>
   * @public
   */
  InvoiceReceivers?: string[] | undefined;

  /**
   * <p>
   * You can specify a list of Amazon Web Services account IDs inside filters to return invoice units that match only the specified accounts. If multiple accounts are provided, the result is an <code>OR</code> condition (match any) of the specified accounts. The specified account IDs are matched with either the receiver or the linked accounts in the rules.
   * </p>
   * @public
   */
  Accounts?: string[] | undefined;
}

/**
 * @public
 */
export interface GetInvoiceUnitRequest {
  /**
   * <p>
   *       The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * <p>
   *       The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the <code>AsOf</code> time is set to before it was deleted. If an <code>AsOf</code> is not provided, the default value is the current time.
   *     </p>
   * @public
   */
  AsOf?: Date | undefined;
}

/**
 * @public
 */
export interface GetInvoiceUnitResponse {
  /**
   * <p>
   *       The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;

  /**
   * <p>
   *       The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID.
   *     </p>
   * @public
   */
  InvoiceReceiver?: string | undefined;

  /**
   * <p>
   *       The unique name of the invoice unit that is shown on the generated invoice.
   *     </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *       The assigned description for an invoice unit.
   *     </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *       Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *     </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p>
   * This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is <code>LINKED_ACCOUNT</code>.
   * </p>
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * <p>
   *       The most recent date the invoice unit response was updated.
   *     </p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * <p>An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you separate Amazon Web Services account costs and configures your invoice for each business entity going forward.
 * </p>
 * @public
 */
export interface InvoiceUnit {
  /**
   * <p>ARN to identify an invoice unit. This information can't be modified or deleted.
   * </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;

  /**
   * <p>The account that receives invoices related to the invoice unit.
   * </p>
   * @public
   */
  InvoiceReceiver?: string | undefined;

  /**
   * <p>
   *     A unique name that is distinctive within your Amazon Web Services.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The assigned description for an invoice unit. This information can't be modified or deleted.
   * </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   * </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p>
   * An <code>InvoiceUnitRule</code> object used the categorize invoice units.
   * </p>
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * <p>
   * The last time the invoice unit was updated. This is important to determine the version of invoice unit configuration used to create the invoices. Any invoice created after this modified time will use this invoice unit configuration.
   * </p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvoiceUnitsRequest {
  /**
   * <p>
   *       An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are <code>InvoiceReceivers</code>, <code>Names</code>, and <code>Accounts</code>.
   *     </p>
   * @public
   */
  Filters?: Filters | undefined;

  /**
   * <p>The next token used to indicate where the returned list should start from.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of invoice units that can be returned.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the <code>AsOf</code> time is set to before it was deleted. If an <code>AsOf</code> is not provided, the default value is the current time.
   *     </p>
   * @public
   */
  AsOf?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvoiceUnitsResponse {
  /**
   * <p>
   *       An invoice unit is a set of mutually exclusive accounts that correspond to your business entity.
   *     </p>
   * @public
   */
  InvoiceUnits?: InvoiceUnit[] | undefined;

  /**
   * <p>The next token used to indicate where the returned list should start from.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of tags to list.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *       Adds a tag to a resource.
   *     </p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *         </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the tags.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *       Adds a tag to a resource.
   *     </p>
   * @public
   */
  ResourceTags: ResourceTag[] | undefined;
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
   * <p>
   *       The Amazon Resource Name (ARN) to untag.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *       Keys for the tags to be removed.
   *     </p>
   * @public
   */
  ResourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateInvoiceUnitRequest {
  /**
   * <p>The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * <p>The assigned description for an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *     </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p>The <code>InvoiceUnitRule</code> object used to update invoice units.
   *     </p>
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;
}

/**
 * @public
 */
export interface UpdateInvoiceUnitResponse {
  /**
   * <p>
   *       The ARN to identify an invoice unit. This information can't be modified or deleted.
   *     </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * @internal
 */
export const ReceiverAddressFilterSensitiveLog = (obj: ReceiverAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvoiceProfileFilterSensitiveLog = (obj: InvoiceProfile): any => ({
  ...obj,
  ...(obj.ReceiverAddress && { ReceiverAddress: SENSITIVE_STRING }),
  ...(obj.ReceiverEmail && { ReceiverEmail: SENSITIVE_STRING }),
  ...(obj.TaxRegistrationNumber && { TaxRegistrationNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetInvoiceProfileResponseFilterSensitiveLog = (obj: BatchGetInvoiceProfileResponse): any => ({
  ...obj,
  ...(obj.Profiles && { Profiles: obj.Profiles.map((item) => InvoiceProfileFilterSensitiveLog(item)) }),
});

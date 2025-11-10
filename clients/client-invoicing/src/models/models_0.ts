// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { InvoicingServiceException as __BaseException } from "./InvoicingServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>You don't have sufficient access to perform this action. </p>
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
 * <p> The discounted amount. </p>
 * @public
 */
export interface DiscountsBreakdownAmount {
  /**
   * <p> The list of discounts information. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The discounted amount. </p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p> The details for the discount rate.. </p>
   * @public
   */
  Rate?: string | undefined;
}

/**
 * <p>The discounts details. </p>
 * @public
 */
export interface DiscountsBreakdown {
  /**
   * <p>The list of discounts information. </p>
   * @public
   */
  Breakdown?: DiscountsBreakdownAmount[] | undefined;

  /**
   * <p> The discount's total amount. </p>
   * @public
   */
  TotalAmount?: string | undefined;
}

/**
 * <p> The fee amount. </p>
 * @public
 */
export interface FeesBreakdownAmount {
  /**
   * <p> The list of fees information. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The fee amount. </p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p> Details about the rate amount. </p>
   * @public
   */
  Rate?: string | undefined;
}

/**
 * <p> The details of fees. </p>
 * @public
 */
export interface FeesBreakdown {
  /**
   * <p>The list of fees information. </p>
   * @public
   */
  Breakdown?: FeesBreakdownAmount[] | undefined;

  /**
   * <p> The total amount of fees. </p>
   * @public
   */
  TotalAmount?: string | undefined;
}

/**
 * <p> The tax amount. </p>
 * @public
 */
export interface TaxesBreakdownAmount {
  /**
   * <p> The details of the taxes. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The tax amount. </p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p> The details of the tax rate. </p>
   * @public
   */
  Rate?: string | undefined;
}

/**
 * <p> The details of the taxes. </p>
 * @public
 */
export interface TaxesBreakdown {
  /**
   * <p> A list of tax information. </p>
   * @public
   */
  Breakdown?: TaxesBreakdownAmount[] | undefined;

  /**
   * <p> The total amount for your taxes. </p>
   * @public
   */
  TotalAmount?: string | undefined;
}

/**
 * <p>Details about how the total amount was calculated and categorized. </p>
 * @public
 */
export interface AmountBreakdown {
  /**
   * <p> The total of a set of the breakdown. </p>
   * @public
   */
  SubTotalAmount?: string | undefined;

  /**
   * <p> The discounted amount. </p>
   * @public
   */
  Discounts?: DiscountsBreakdown | undefined;

  /**
   * <p> The tax amount. </p>
   * @public
   */
  Taxes?: TaxesBreakdown | undefined;

  /**
   * <p> The fee amount. </p>
   * @public
   */
  Fees?: FeesBreakdown | undefined;
}

/**
 * @public
 */
export interface BatchGetInvoiceProfileRequest {
  /**
   * <p>Retrieves the corresponding invoice profile data for these account IDs. </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p> The details of the address associated with the receiver. </p>
 * @public
 */
export interface ReceiverAddress {
  /**
   * <p> The first line of the address. </p>
   * @public
   */
  AddressLine1?: string | undefined;

  /**
   * <p> The second line of the address, if applicable. </p>
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * <p> The third line of the address, if applicable. </p>
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * <p> The district or country the address is located in. </p>
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * <p> The city that the address is in. </p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p> The state, region, or province the address is located. </p>
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * <p> The country code for the country the address is in. </p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p> A unique company name. </p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p> The postal code associated with the address. </p>
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * <p> Contains high-level information about the invoice receiver. </p>
 * @public
 */
export interface InvoiceProfile {
  /**
   * <p> The account ID the invoice profile is generated for. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p> The name of the person receiving the invoice profile. </p>
   * @public
   */
  ReceiverName?: string | undefined;

  /**
   * <p>The address of the receiver that will be printed on the invoice. </p>
   * @public
   */
  ReceiverAddress?: ReceiverAddress | undefined;

  /**
   * <p>The email address for the invoice profile receiver. </p>
   * @public
   */
  ReceiverEmail?: string | undefined;

  /**
   * <p> This specifies the issuing entity of the invoice. </p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p> Your Tax Registration Number (TRN) information. </p>
   * @public
   */
  TaxRegistrationNumber?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetInvoiceProfileResponse {
  /**
   * <p> A list of invoice profiles corresponding to the requested accounts. </p>
   * @public
   */
  Profiles?: InvoiceProfile[] | undefined;
}

/**
 * <p>The processing request failed because of an unknown error, exception, or failure. </p>
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
 * <p>The resource could not be found. </p>
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
 * <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
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
 * <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>You don't have sufficient access to perform this action. </p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * <p>You don't have sufficient access to perform this action. </p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p> The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
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
 * <p> The billing period for which you want to retrieve invoice-related documents. </p>
 * @public
 */
export interface BillingPeriod {
  /**
   * <p> The billing period month. </p>
   * @public
   */
  Month: number | undefined;

  /**
   * <p> The billing period year. </p>
   * @public
   */
  Year: number | undefined;
}

/**
 * <p>The tag structure that contains a tag key and value. </p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The object key of your of your resource tag. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p> The specific value of the resource tag. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p> This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is <code>LINKED_ACCOUNT</code>. </p>
 * @public
 */
export interface InvoiceUnitRule {
  /**
   * <p>The list of <code>LINKED_ACCOUNT</code> IDs where charges are included within the invoice unit. </p>
   * @public
   */
  LinkedAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInvoiceUnitRequest {
  /**
   * <p> The unique name of the invoice unit that is shown on the generated invoice. This can't be changed once it is set. To change this name, you must delete the invoice unit recreate. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID. </p>
   * @public
   */
  InvoiceReceiver: string | undefined;

  /**
   * <p> The invoice unit's description. This can be changed at a later time. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the invoice unit based tax inheritance is/ should be enabled or disabled. </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p>The <code>InvoiceUnitRule</code> object used to create invoice units. </p>
   * @public
   */
  Rule: InvoiceUnitRule | undefined;

  /**
   * <p> The tag structure that contains a tag key and value. </p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateInvoiceUnitResponse {
  /**
   * <p> The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * <p>The details of currency exchange. </p>
 * @public
 */
export interface CurrencyExchangeDetails {
  /**
   * <p>The exchange source currency. </p>
   * @public
   */
  SourceCurrencyCode?: string | undefined;

  /**
   * <p>The exchange target currency. </p>
   * @public
   */
  TargetCurrencyCode?: string | undefined;

  /**
   * <p>The currency exchange rate. </p>
   * @public
   */
  Rate?: string | undefined;
}

/**
 * <p> The time period that you want invoice-related documents for. </p>
 * @public
 */
export interface DateInterval {
  /**
   * <p> The beginning of the time period that you want invoice-related documents for. The start date is inclusive. For example, if <code>start</code> is <code>2019-01-01</code>, AWS retrieves invoices starting at <code>2019-01-01</code> up to the end date. </p>
   * @public
   */
  StartDate: Date | undefined;

  /**
   * <p> The end of the time period that you want invoice-related documents for. The end date is exclusive. For example, if <code>end</code> is <code>2019-01-10</code>, Amazon Web Services retrieves invoice-related documents from the start date up to, but not including, <code>2018-01-10</code>. </p>
   * @public
   */
  EndDate: Date | undefined;
}

/**
 * @public
 */
export interface DeleteInvoiceUnitRequest {
  /**
   * <p> The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvoiceUnitResponse {
  /**
   * <p> The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * <p>The organization name providing Amazon Web Services services.</p>
 * @public
 */
export interface Entity {
  /**
   * <p>The name of the entity that issues the Amazon Web Services invoice.</p>
   * @public
   */
  InvoicingEntity?: string | undefined;
}

/**
 * <p>An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are <code>InvoiceReceivers</code>, <code>Names</code>, and <code>Accounts</code>. </p>
 * @public
 */
export interface Filters {
  /**
   * <p> An optional input to the list API. You can specify a list of invoice unit names inside filters to return invoice units that match only the specified invoice unit names. If multiple names are provided, the result is an <code>OR</code> condition (match any) of the specified invoice unit names. </p>
   * @public
   */
  Names?: string[] | undefined;

  /**
   * <p> You can specify a list of Amazon Web Services account IDs inside filters to return invoice units that match only the specified accounts. If multiple accounts are provided, the result is an <code>OR</code> condition (match any) of the specified accounts. This filter only matches the specified accounts on the invoice receivers of the invoice units. </p>
   * @public
   */
  InvoiceReceivers?: string[] | undefined;

  /**
   * <p> You can specify a list of Amazon Web Services account IDs inside filters to return invoice units that match only the specified accounts. If multiple accounts are provided, the result is an <code>OR</code> condition (match any) of the specified accounts. The specified account IDs are matched with either the receiver or the linked accounts in the rules. </p>
   * @public
   */
  Accounts?: string[] | undefined;
}

/**
 * @public
 */
export interface GetInvoicePDFRequest {
  /**
   * <p> Your unique invoice ID. </p>
   * @public
   */
  InvoiceId: string | undefined;
}

/**
 * <p>Supplemental document associated with the invoice.</p>
 * @public
 */
export interface SupplementalDocument {
  /**
   * <p>The pre-signed URL to download invoice supplemental document.</p>
   * @public
   */
  DocumentUrl?: string | undefined;

  /**
   * <p>The pre-signed URL expiration date of invoice supplemental document.</p>
   * @public
   */
  DocumentUrlExpirationDate?: Date | undefined;
}

/**
 * <p> Invoice document data. </p>
 * @public
 */
export interface InvoicePDF {
  /**
   * <p> Your unique invoice ID. </p>
   * @public
   */
  InvoiceId?: string | undefined;

  /**
   * <p>The pre-signed URL to download the invoice document. </p>
   * @public
   */
  DocumentUrl?: string | undefined;

  /**
   * <p>The pre-signed URL expiration date of the invoice document.</p>
   * @public
   */
  DocumentUrlExpirationDate?: Date | undefined;

  /**
   * <p>List of supplemental documents associated with the invoice.</p>
   * @public
   */
  SupplementalDocuments?: SupplementalDocument[] | undefined;
}

/**
 * @public
 */
export interface GetInvoicePDFResponse {
  /**
   * <p> The invoice document and supplemental documents associated with the invoice. </p>
   * @public
   */
  InvoicePDF?: InvoicePDF | undefined;
}

/**
 * @public
 */
export interface GetInvoiceUnitRequest {
  /**
   * <p> The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * <p> The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the <code>AsOf</code> time is set to before it was deleted. If an <code>AsOf</code> is not provided, the default value is the current time. </p>
   * @public
   */
  AsOf?: Date | undefined;
}

/**
 * @public
 */
export interface GetInvoiceUnitResponse {
  /**
   * <p> The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID. </p>
   * @public
   */
  InvoiceReceiver?: string | undefined;

  /**
   * <p> The unique name of the invoice unit that is shown on the generated invoice. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The assigned description for an invoice unit. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> Whether the invoice unit based tax inheritance is/ should be enabled or disabled. </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p> This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is <code>LINKED_ACCOUNT</code>. </p>
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * <p> The most recent date the invoice unit response was updated. </p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * <p> The amount charged after taxes, in the preferred currency. </p>
 * @public
 */
export interface InvoiceCurrencyAmount {
  /**
   * <p> The invoice currency amount. </p>
   * @public
   */
  TotalAmount?: string | undefined;

  /**
   * <p> Details about the invoice total amount before tax. </p>
   * @public
   */
  TotalAmountBeforeTax?: string | undefined;

  /**
   * <p>The currency dominion of the invoice document.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p> Details about the invoice currency amount. </p>
   * @public
   */
  AmountBreakdown?: AmountBreakdown | undefined;

  /**
   * <p> The details of currency exchange. </p>
   * @public
   */
  CurrencyExchangeDetails?: CurrencyExchangeDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const InvoiceType = {
  CREDIT_MEMO: "CREDIT_MEMO",
  INVOICE: "INVOICE",
} as const;

/**
 * @public
 */
export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType];

/**
 * <p> The invoice that the API retrieved. </p>
 * @public
 */
export interface InvoiceSummary {
  /**
   * <p> The Amazon Web Services account ID. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p> The invoice ID. </p>
   * @public
   */
  InvoiceId?: string | undefined;

  /**
   * <p> The issued date of the invoice. </p>
   * @public
   */
  IssuedDate?: Date | undefined;

  /**
   * <p> The invoice due date. </p>
   * @public
   */
  DueDate?: Date | undefined;

  /**
   * <p>The organization name providing Amazon Web Services services.</p>
   * @public
   */
  Entity?: Entity | undefined;

  /**
   * <p> The billing period of the invoice-related document. </p>
   * @public
   */
  BillingPeriod?: BillingPeriod | undefined;

  /**
   * <p> The type of invoice. </p>
   * @public
   */
  InvoiceType?: InvoiceType | undefined;

  /**
   * <p>The initial or original invoice ID. </p>
   * @public
   */
  OriginalInvoiceId?: string | undefined;

  /**
   * <p> The purchase order number associated to the invoice.</p>
   * @public
   */
  PurchaseOrderNumber?: string | undefined;

  /**
   * <p> The summary with the product and service currency. </p>
   * @public
   */
  BaseCurrencyAmount?: InvoiceCurrencyAmount | undefined;

  /**
   * <p> The summary with the tax currency. </p>
   * @public
   */
  TaxCurrencyAmount?: InvoiceCurrencyAmount | undefined;

  /**
   * <p> The summary with the customer configured currency. </p>
   * @public
   */
  PaymentCurrencyAmount?: InvoiceCurrencyAmount | undefined;
}

/**
 * <p> Filters for your invoice summaries. </p>
 * @public
 */
export interface InvoiceSummariesFilter {
  /**
   * <p>The date range for invoice summary retrieval. </p>
   * @public
   */
  TimeInterval?: DateInterval | undefined;

  /**
   * <p>The billing period associated with the invoice documents. </p>
   * @public
   */
  BillingPeriod?: BillingPeriod | undefined;

  /**
   * <p>The name of the entity that issues the Amazon Web Services invoice.</p>
   * @public
   */
  InvoicingEntity?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListInvoiceSummariesResourceType = {
  ACCOUNT_ID: "ACCOUNT_ID",
  INVOICE_ID: "INVOICE_ID",
} as const;

/**
 * @public
 */
export type ListInvoiceSummariesResourceType =
  (typeof ListInvoiceSummariesResourceType)[keyof typeof ListInvoiceSummariesResourceType];

/**
 * <p>Specifies the invoice summary.</p>
 * @public
 */
export interface InvoiceSummariesSelector {
  /**
   * <p>The query identifier type (<code>INVOICE_ID</code> or <code>ACCOUNT_ID</code>).</p>
   * @public
   */
  ResourceType: ListInvoiceSummariesResourceType | undefined;

  /**
   * <p>The value of the query identifier.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you separate Amazon Web Services account costs and configures your invoice for each business entity going forward. </p>
 * @public
 */
export interface InvoiceUnit {
  /**
   * <p>ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;

  /**
   * <p>The account that receives invoices related to the invoice unit. </p>
   * @public
   */
  InvoiceReceiver?: string | undefined;

  /**
   * <p> A unique name that is distinctive within your Amazon Web Services. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The assigned description for an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the invoice unit based tax inheritance is/ should be enabled or disabled. </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p> An <code>InvoiceUnitRule</code> object used the categorize invoice units. </p>
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * <p> The last time the invoice unit was updated. This is important to determine the version of invoice unit configuration used to create the invoices. Any invoice created after this modified time will use this invoice unit configuration. </p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvoiceSummariesRequest {
  /**
   * <p>The option to retrieve details for a specific invoice by providing its unique ID. Alternatively, access information for all invoices linked to the account by providing an account ID.</p>
   * @public
   */
  Selector: InvoiceSummariesSelector | undefined;

  /**
   * <p>Filters you can use to customize your invoice summary.</p>
   * @public
   */
  Filter?: InvoiceSummariesFilter | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of invoice summaries a paginated response can contain.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInvoiceSummariesResponse {
  /**
   * <p>List of key (summary level) invoice details without line item details.</p>
   * @public
   */
  InvoiceSummaries: InvoiceSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvoiceUnitsRequest {
  /**
   * <p> An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are <code>InvoiceReceivers</code>, <code>Names</code>, and <code>Accounts</code>. </p>
   * @public
   */
  Filters?: Filters | undefined;

  /**
   * <p>The next token used to indicate where the returned list should start from. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of invoice units that can be returned. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the <code>AsOf</code> time is set to before it was deleted. If an <code>AsOf</code> is not provided, the default value is the current time. </p>
   * @public
   */
  AsOf?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvoiceUnitsResponse {
  /**
   * <p> An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. </p>
   * @public
   */
  InvoiceUnits?: InvoiceUnit[] | undefined;

  /**
   * <p>The next token used to indicate where the returned list should start from. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of tags to list. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> Adds a tag to a resource. </p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded. </p>
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
   * <p>The Amazon Resource Name (ARN) of the tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> Adds a tag to a resource. </p>
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
   * <p> The Amazon Resource Name (ARN) to untag. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> Keys for the tags to be removed. </p>
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
   * <p>The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * <p>The assigned description for an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the invoice unit based tax inheritance is/ should be enabled or disabled. </p>
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * <p>The <code>InvoiceUnitRule</code> object used to update invoice units. </p>
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;
}

/**
 * @public
 */
export interface UpdateInvoiceUnitResponse {
  /**
   * <p> The ARN to identify an invoice unit. This information can't be modified or deleted. </p>
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

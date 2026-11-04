// smithy-typescript generated code
import type {
  BillingEntity,
  BillType,
  BuyerDomain,
  ConnectionTestingMethod,
  EinvoiceDeliveryAttachmentType,
  EinvoiceDeliveryDocumentType,
  EinvoiceDeliveryStatus,
  InvoiceFrequency,
  InvoiceType,
  ListInvoiceSummariesResourceType,
  ProcurementPortalEnv,
  ProcurementPortalName,
  ProcurementPortalPreferenceStatus,
  Protocol,
  PurchaseOrderDataSourceType,
  ReceiverRole,
  SupplementalDocumentType,
  SupplierDomain,
  TaxAuthorityStatus,
} from "./enums";

/**
 * The discounted amount.
 *
 * @public
 */
export interface DiscountsBreakdownAmount {
  /**
   * The list of discounts information.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The discounted amount.
   *
   * @public
   */
  Amount?: string | undefined;

  /**
   * The details for the discount rate..
   *
   * @public
   */
  Rate?: string | undefined;
}

/**
 * The discounts details.
 *
 * @public
 */
export interface DiscountsBreakdown {
  /**
   * The list of discounts information.
   *
   * @public
   */
  Breakdown?: DiscountsBreakdownAmount[] | undefined;

  /**
   * The discount's total amount.
   *
   * @public
   */
  TotalAmount?: string | undefined;
}

/**
 * The fee amount.
 *
 * @public
 */
export interface FeesBreakdownAmount {
  /**
   * The list of fees information.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The fee amount.
   *
   * @public
   */
  Amount?: string | undefined;

  /**
   * Details about the rate amount.
   *
   * @public
   */
  Rate?: string | undefined;
}

/**
 * The details of fees.
 *
 * @public
 */
export interface FeesBreakdown {
  /**
   * The list of fees information.
   *
   * @public
   */
  Breakdown?: FeesBreakdownAmount[] | undefined;

  /**
   * The total amount of fees.
   *
   * @public
   */
  TotalAmount?: string | undefined;
}

/**
 * The tax amount.
 *
 * @public
 */
export interface TaxesBreakdownAmount {
  /**
   * The details of the taxes.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tax amount.
   *
   * @public
   */
  Amount?: string | undefined;

  /**
   * The details of the tax rate.
   *
   * @public
   */
  Rate?: string | undefined;
}

/**
 * The details of the taxes.
 *
 * @public
 */
export interface TaxesBreakdown {
  /**
   * A list of tax information.
   *
   * @public
   */
  Breakdown?: TaxesBreakdownAmount[] | undefined;

  /**
   * The total amount for your taxes.
   *
   * @public
   */
  TotalAmount?: string | undefined;
}

/**
 * Details about how the total amount was calculated and categorized.
 *
 * @public
 */
export interface AmountBreakdown {
  /**
   * The total of a set of the breakdown.
   *
   * @public
   */
  SubTotalAmount?: string | undefined;

  /**
   * The discounted amount.
   *
   * @public
   */
  Discounts?: DiscountsBreakdown | undefined;

  /**
   * The tax amount.
   *
   * @public
   */
  Taxes?: TaxesBreakdown | undefined;

  /**
   * The fee amount.
   *
   * @public
   */
  Fees?: FeesBreakdown | undefined;
}

/**
 * @public
 */
export interface BatchGetInvoiceProfileRequest {
  /**
   * Retrieves the corresponding invoice profile data for these account IDs.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * The details of the address associated with the receiver.
 *
 * @public
 */
export interface ReceiverAddress {
  /**
   * The first line of the address.
   *
   * @public
   */
  AddressLine1?: string | undefined;

  /**
   * The second line of the address, if applicable.
   *
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * The third line of the address, if applicable.
   *
   * @public
   */
  AddressLine3?: string | undefined;

  /**
   * The district or country the address is located in.
   *
   * @public
   */
  DistrictOrCounty?: string | undefined;

  /**
   * The city that the address is in.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The state, region, or province the address is located.
   *
   * @public
   */
  StateOrRegion?: string | undefined;

  /**
   * The country code for the country the address is in.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * A unique company name.
   *
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * The postal code associated with the address.
   *
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * Contains high-level information about the invoice receiver.
 *
 * @public
 */
export interface InvoiceProfile {
  /**
   * The account ID the invoice profile is generated for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the person receiving the invoice profile.
   *
   * @public
   */
  ReceiverName?: string | undefined;

  /**
   * The address of the receiver that will be printed on the invoice.
   *
   * @public
   */
  ReceiverAddress?: ReceiverAddress | undefined;

  /**
   * The email address for the invoice profile receiver.
   *
   * @public
   */
  ReceiverEmail?: string | undefined;

  /**
   * This specifies the issuing entity of the invoice.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * Your Tax Registration Number (TRN) information.
   *
   * @public
   */
  TaxRegistrationNumber?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetInvoiceProfileResponse {
  /**
   * A list of invoice profiles corresponding to the requested accounts.
   *
   * @public
   */
  Profiles?: InvoiceProfile[] | undefined;
}

/**
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The billing period for which you want to retrieve invoice-related documents.
 *
 * @public
 */
export interface BillingPeriod {
  /**
   * The billing period month.
   *
   * @public
   */
  Month: number | undefined;

  /**
   * The billing period year.
   *
   * @public
   */
  Year: number | undefined;
}

/**
 * Represents contact information for a person or role associated with the procurement portal preference.
 *
 * @public
 */
export interface Contact {
  /**
   * The name of the contact person or role.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The email address of the contact person or role.
   *
   * @public
   */
  Email?: string | undefined;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The object key of your of your resource tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The specific value of the resource tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is `LINKED_ACCOUNT`.
 *
 * @public
 */
export interface InvoiceUnitRule {
  /**
   * The list of `LINKED_ACCOUNT` IDs where charges are included within the invoice unit.
   *
   * @public
   */
  LinkedAccounts?: string[] | undefined;

  /**
   * A list of Amazon Web Services account IDs that have delegated their billing responsibility to the receiver account through transfer billing. Unlike linked accounts, these bill source accounts can be payer accounts from other organizations that have authorized billing transfer to this account.
   *
   * @public
   */
  BillSourceAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInvoiceUnitRequest {
  /**
   * The unique name of the invoice unit that is shown on the generated invoice. This can't be changed once it is set. To change this name, you must delete the invoice unit recreate.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID.
   *
   * @public
   */
  InvoiceReceiver: string | undefined;

  /**
   * The invoice unit's description. This can be changed at a later time.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * The `InvoiceUnitRule` object used to create invoice units.
   *
   * @public
   */
  Rule: InvoiceUnitRule | undefined;

  /**
   * The tag structure that contains a tag key and value.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvoiceUnitResponse {
  /**
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * Specifies the source configuration for retrieving purchase order data.
 *
 * @public
 */
export interface PurchaseOrderDataSource {
  /**
   * The type of e-invoice document that requires purchase order data.
   *
   * @public
   */
  EinvoiceDeliveryDocumentType?: EinvoiceDeliveryDocumentType | undefined;

  /**
   * The type of source for purchase order data.
   *
   * @public
   */
  PurchaseOrderDataSourceType?: PurchaseOrderDataSourceType | undefined;
}

/**
 * Specifies the preferences for e-invoice delivery, including document types, attachment types, and customization settings.
 *
 * @public
 */
export interface EinvoiceDeliveryPreference {
  /**
   * The types of e-invoice documents to be delivered.
   *
   * @public
   */
  EinvoiceDeliveryDocumentTypes: EinvoiceDeliveryDocumentType[] | undefined;

  /**
   * The types of attachments to include with the e-invoice delivery.
   *
   * @public
   */
  EinvoiceDeliveryAttachmentTypes?: EinvoiceDeliveryAttachmentType[] | undefined;

  /**
   * The communication protocol to use for e-invoice delivery.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The sources of purchase order data to use for e-invoice generation and delivery.
   *
   * @public
   */
  PurchaseOrderDataSources: PurchaseOrderDataSource[] | undefined;

  /**
   * The method to use for testing the connection to the procurement portal.
   *
   * @public
   */
  ConnectionTestingMethod: ConnectionTestingMethod | undefined;

  /**
   * The date when e-invoice delivery should be activated for this preference.
   *
   * @public
   */
  EinvoiceDeliveryActivationDate: Date | undefined;
}

/**
 * Represents the Marketplace PunchOut configuration for a procurement portal preference.
 *
 * @public
 */
export interface MarketplacePunchOutPreference {
  /**
   * The URL that buyers are redirected to for approval requests in the procurement portal. This is only supported for Coupa. When provided together with the procurement portal instance endpoint, its host must match the host of that endpoint.
   *
   * @public
   */
  ApprovalRequestRedirectUrl?: string | undefined;
}

/**
 * Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.
 *
 * @public
 */
export interface ProcurementPortalPreferenceSelector {
  /**
   * The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.
   *
   * @public
   */
  InvoiceUnitArns?: string[] | undefined;

  /**
   * The list of seller of record IDs to which this preference applies.
   *
   * @public
   */
  SellerOfRecords?: string[] | undefined;
}

/**
 * Input parameters for configuring test environment preferences for a procurement portal.
 *
 * @public
 */
export interface TestEnvPreferenceInput {
  /**
   * The domain identifier to use for the buyer in the test environment.
   *
   * @public
   */
  BuyerDomain: BuyerDomain | undefined;

  /**
   * The unique identifier to use for the buyer in the test environment.
   *
   * @public
   */
  BuyerIdentifier: string | undefined;

  /**
   * The domain identifier to use for the supplier in the test environment.
   *
   * @public
   */
  SupplierDomain: SupplierDomain | undefined;

  /**
   * The unique identifier to use for the supplier in the test environment.
   *
   * @public
   */
  SupplierIdentifier: string | undefined;

  /**
   * The shared secret or authentication credential to use for secure communication in the test environment.
   *
   * @public
   */
  ProcurementPortalSharedSecret?: string | undefined;

  /**
   * The endpoint URL where e-invoices will be delivered in the test environment.
   *
   * @public
   */
  ProcurementPortalInstanceEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface CreateProcurementPortalPreferenceRequest {
  /**
   * The name of the procurement portal.
   *
   * @public
   */
  ProcurementPortalName: ProcurementPortalName | undefined;

  /**
   * The domain identifier for the buyer in the procurement portal.
   *
   * @public
   */
  BuyerDomain: BuyerDomain | undefined;

  /**
   * The unique identifier for the buyer in the procurement portal.
   *
   * @public
   */
  BuyerIdentifier: string | undefined;

  /**
   * The domain identifier for the supplier in the procurement portal.
   *
   * @public
   */
  SupplierDomain: SupplierDomain | undefined;

  /**
   * The unique identifier for the supplier in the procurement portal.
   *
   * @public
   */
  SupplierIdentifier: string | undefined;

  /**
   * Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.
   *
   * @public
   */
  Selector?: ProcurementPortalPreferenceSelector | undefined;

  /**
   * The shared secret or authentication credential used to establish secure communication with the procurement portal. This value must be encrypted at rest.
   *
   * @public
   */
  ProcurementPortalSharedSecret?: string | undefined;

  /**
   * The endpoint URL where e-invoices will be delivered to the procurement portal. Must be a valid HTTPS URL.
   *
   * @public
   */
  ProcurementPortalInstanceEndpoint?: string | undefined;

  /**
   * Configuration settings for the test environment of the procurement portal. Includes test credentials and endpoints that are used for validation before production deployment.
   *
   * @public
   */
  TestEnvPreference?: TestEnvPreferenceInput | undefined;

  /**
   * Indicates whether e-invoice delivery is enabled for this procurement portal preference. Set to true to enable e-invoice delivery, false to disable.
   *
   * @public
   */
  EinvoiceDeliveryEnabled: boolean | undefined;

  /**
   * Specifies the e-invoice delivery configuration including document types, attachment types, and customization settings for the portal.
   *
   * @public
   */
  EinvoiceDeliveryPreference?: EinvoiceDeliveryPreference | undefined;

  /**
   * Indicates whether purchase order retrieval is enabled for this procurement portal preference. Set to true to enable PO retrieval, false to disable.
   *
   * @public
   */
  PurchaseOrderRetrievalEnabled: boolean | undefined;

  /**
   * Defaults to false if not provided.
   * @public
   */
  MarketplacePunchOutEnabled?: boolean | undefined;

  /**
   * Required for Coupa when MarketplacePunchOutEnabled is true.
   * @public
   */
  MarketplacePunchOutPreference?: MarketplacePunchOutPreference | undefined;

  /**
   * List of contact information for portal administrators and technical contacts responsible for the e-invoice integration.
   *
   * @public
   */
  Contacts: Contact[] | undefined;

  /**
   * The tags to apply to this procurement portal preference resource. Each tag consists of a key and an optional value.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProcurementPortalPreferenceResponse {
  /**
   * The Amazon Resource Name (ARN) of the created procurement portal preference.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

/**
 * The details of currency exchange.
 *
 * @public
 */
export interface CurrencyExchangeDetails {
  /**
   * The exchange source currency.
   *
   * @public
   */
  SourceCurrencyCode?: string | undefined;

  /**
   * The exchange target currency.
   *
   * @public
   */
  TargetCurrencyCode?: string | undefined;

  /**
   * The currency exchange rate.
   *
   * @public
   */
  Rate?: string | undefined;
}

/**
 * The time period that you want invoice-related documents for.
 *
 * @public
 */
export interface DateInterval {
  /**
   * The beginning of the time period that you want invoice-related documents for. The start date is inclusive. For example, if `start` is `2019-01-01`, AWS retrieves invoices starting at `2019-01-01` up to the end date.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * The end of the time period that you want invoice-related documents for. The end date is exclusive. For example, if `end` is `2019-01-10`, Amazon Web Services retrieves invoice-related documents from the start date up to, but not including, `2018-01-10`.
   *
   * @public
   */
  EndDate: Date | undefined;
}

/**
 * @public
 */
export interface DeleteInvoiceUnitRequest {
  /**
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvoiceUnitResponse {
  /**
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProcurementPortalPreferenceRequest {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference to delete.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProcurementPortalPreferenceResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted procurement portal preference.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

/**
 * The organization name providing Amazon Web Services services.
 *
 * @public
 */
export interface Entity {
  /**
   * The name of the entity that issues the Amazon Web Services invoice.
   *
   * @public
   */
  InvoicingEntity?: string | undefined;

  /**
   * Helps you identify whether your invoices are for Amazon Web Services Marketplace or for purchases of other Amazon Web Services services.
   *
   * @public
   */
  BillingEntity?: BillingEntity | undefined;
}

/**
 * Specifies the supported document types and attachment types for invoice delivery to a procurement portal.
 *
 * @public
 */
export interface InvoiceConfiguration {
  /**
   * The e-invoice document types supported by the procurement portal.
   *
   * @public
   */
  DocumentTypes?: EinvoiceDeliveryDocumentType[] | undefined;

  /**
   * The attachment types supported by the procurement portal for e-invoice delivery.
   *
   * @public
   */
  AttachmentTypes?: EinvoiceDeliveryAttachmentType[] | undefined;
}

/**
 * Contains the default feature configuration settings for a procurement portal.
 *
 * @public
 */
export interface FeatureConfigurations {
  /**
   * The invoice configuration settings for the procurement portal.
   *
   * @public
   */
  InvoiceConfiguration?: InvoiceConfiguration | undefined;
}

/**
 * An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are `InvoiceReceivers`, `Names`, and `Accounts`.
 *
 * @public
 */
export interface Filters {
  /**
   * An optional input to the list API. You can specify a list of invoice unit names inside filters to return invoice units that match only the specified invoice unit names. If multiple names are provided, the result is an `OR` condition (match any) of the specified invoice unit names.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * You can specify a list of Amazon Web Services account IDs inside filters to return invoice units that match only the specified accounts. If multiple accounts are provided, the result is an `OR` condition (match any) of the specified accounts. This filter only matches the specified accounts on the invoice receivers of the invoice units.
   *
   * @public
   */
  InvoiceReceivers?: string[] | undefined;

  /**
   * You can specify a list of Amazon Web Services account IDs inside filters to return invoice units that match only the specified accounts. If multiple accounts are provided, the result is an `OR` condition (match any) of the specified accounts. The specified account IDs are matched with either the receiver or the linked accounts in the rules.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * A list of Amazon Web Services account IDs used to filter invoice units. These are payer accounts from other Organizations that have delegated their billing responsibility to the receiver account through the billing transfer feature.
   *
   * @public
   */
  BillSourceAccounts?: string[] | undefined;
}

/**
 * @public
 */
export interface GetInvoicePDFRequest {
  /**
   * Your unique invoice ID.
   *
   * @public
   */
  InvoiceId: string | undefined;
}

/**
 * Supplemental document associated with the invoice.
 *
 * @public
 */
export interface SupplementalDocument {
  /**
   * The type of supplemental document.
   *
   * @public
   */
  DocumentType?: SupplementalDocumentType | undefined;

  /**
   * The ID of the supplemental document.
   *
   * @public
   */
  DocumentId?: string | undefined;

  /**
   * The pre-signed URL to download invoice supplemental document.
   *
   * @public
   */
  DocumentUrl?: string | undefined;

  /**
   * The pre-signed URL expiration date of invoice supplemental document.
   *
   * @public
   */
  DocumentUrlExpirationDate?: Date | undefined;
}

/**
 * Invoice document data.
 *
 * @public
 */
export interface InvoicePDF {
  /**
   * Your unique invoice ID.
   *
   * @public
   */
  InvoiceId?: string | undefined;

  /**
   * The pre-signed URL to download the invoice document.
   *
   * @public
   */
  DocumentUrl?: string | undefined;

  /**
   * The pre-signed URL expiration date of the invoice document.
   *
   * @public
   */
  DocumentUrlExpirationDate?: Date | undefined;

  /**
   * List of supplemental documents associated with the invoice.
   *
   * @public
   */
  SupplementalDocuments?: SupplementalDocument[] | undefined;
}

/**
 * @public
 */
export interface GetInvoicePDFResponse {
  /**
   * The invoice document and supplemental documents associated with the invoice.
   *
   * @public
   */
  InvoicePDF?: InvoicePDF | undefined;
}

/**
 * @public
 */
export interface GetInvoiceUnitRequest {
  /**
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the `AsOf` time is set to before it was deleted. If an `AsOf` is not provided, the default value is the current time.
   *
   * @public
   */
  AsOf?: Date | undefined;
}

/**
 * @public
 */
export interface GetInvoiceUnitResponse {
  /**
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn?: string | undefined;

  /**
   * The Amazon Web Services account ID chosen to be the receiver of an invoice unit. All invoices generated for that invoice unit will be sent to this account ID.
   *
   * @public
   */
  InvoiceReceiver?: string | undefined;

  /**
   * The unique name of the invoice unit that is shown on the generated invoice.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The assigned description for an invoice unit.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * This is used to categorize the invoice unit. Values are Amazon Web Services account IDs. Currently, the only supported rule is `LINKED_ACCOUNT`.
   *
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * The most recent date the invoice unit response was updated.
   *
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface GetProcurementPortalPreferenceRequest {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference to retrieve.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

/**
 * Contains configuration settings for testing the procurement portal integration in a non-production environment.
 *
 * @public
 */
export interface TestEnvPreference {
  /**
   * The domain identifier for the buyer in the test environment of the procurement portal.
   *
   * @public
   */
  BuyerDomain: BuyerDomain | undefined;

  /**
   * The unique identifier for the buyer in the test environment of the procurement portal.
   *
   * @public
   */
  BuyerIdentifier: string | undefined;

  /**
   * The domain identifier for the supplier in the test environment of the procurement portal.
   *
   * @public
   */
  SupplierDomain: SupplierDomain | undefined;

  /**
   * The unique identifier for the supplier in the test environment of the procurement portal.
   *
   * @public
   */
  SupplierIdentifier: string | undefined;

  /**
   * The shared secret or authentication credential used for secure communication with the test environment.
   *
   * @public
   */
  ProcurementPortalSharedSecret?: string | undefined;

  /**
   * The endpoint URL where e-invoices are delivered in the test environment.
   *
   * @public
   */
  ProcurementPortalInstanceEndpoint?: string | undefined;

  /**
   * The endpoint URL used for retrieving purchase orders in the test environment.
   *
   * @public
   */
  PurchaseOrderRetrievalEndpoint?: string | undefined;
}

/**
 * Represents the full configuration of a procurement portal preference, including settings for e-invoice delivery and purchase order retrieval.
 *
 * @public
 */
export interface ProcurementPortalPreference {
  /**
   * The Amazon Web Services account ID associated with this procurement portal preference.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * The name of the procurement portal.
   *
   * @public
   */
  ProcurementPortalName: ProcurementPortalName | undefined;

  /**
   * The domain identifier for the buyer in the procurement portal.
   *
   * @public
   */
  BuyerDomain: BuyerDomain | undefined;

  /**
   * The unique identifier for the buyer in the procurement portal.
   *
   * @public
   */
  BuyerIdentifier: string | undefined;

  /**
   * The domain identifier for the supplier in the procurement portal.
   *
   * @public
   */
  SupplierDomain: SupplierDomain | undefined;

  /**
   * The unique identifier for the supplier in the procurement portal.
   *
   * @public
   */
  SupplierIdentifier: string | undefined;

  /**
   * Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.
   *
   * @public
   */
  Selector?: ProcurementPortalPreferenceSelector | undefined;

  /**
   * The shared secret or authentication credential used for secure communication with the procurement portal.
   *
   * @public
   */
  ProcurementPortalSharedSecret?: string | undefined;

  /**
   * The endpoint URL where e-invoices are delivered to the procurement portal.
   *
   * @public
   */
  ProcurementPortalInstanceEndpoint?: string | undefined;

  /**
   * The endpoint URL used for retrieving purchase orders from the procurement portal.
   *
   * @public
   */
  PurchaseOrderRetrievalEndpoint?: string | undefined;

  /**
   * Configuration on settings for the test environment of the procurement portal.
   *
   * @public
   */
  TestEnvPreference?: TestEnvPreference | undefined;

  /**
   * Indicates whether e-invoice delivery is enabled for this procurement portal preference.
   *
   * @public
   */
  EinvoiceDeliveryEnabled: boolean | undefined;

  /**
   * The e-invoice delivery configuration including document types, attachment types, and customization settings.
   *
   * @public
   */
  EinvoiceDeliveryPreference?: EinvoiceDeliveryPreference | undefined;

  /**
   * Indicates whether purchase order retrieval is enabled for this procurement portal preference.
   *
   * @public
   */
  PurchaseOrderRetrievalEnabled: boolean | undefined;

  /**
   * Indicates whether Marketplace PunchOut is enabled for this procurement portal preference. Defaults to `false`.
   *
   * @public
   */
  MarketplacePunchOutEnabled?: boolean | undefined;

  /**
   * The Marketplace PunchOut configuration for this procurement portal preference. This is present when `MarketplacePunchOutEnabled` is `true`.
   *
   * @public
   */
  MarketplacePunchOutPreference?: MarketplacePunchOutPreference | undefined;

  /**
   * List of contact information for portal administrators and technical contacts.
   *
   * @public
   */
  Contacts?: Contact[] | undefined;

  /**
   * The current status of the e-invoice delivery preference.
   *
   * @public
   */
  EinvoiceDeliveryPreferenceStatus?: ProcurementPortalPreferenceStatus | undefined;

  /**
   * The reason for the current e-invoice delivery preference status.
   *
   * @public
   */
  EinvoiceDeliveryPreferenceStatusReason?: string | undefined;

  /**
   * The current status of the purchase order retrieval preference.
   *
   * @public
   */
  PurchaseOrderRetrievalPreferenceStatus?: ProcurementPortalPreferenceStatus | undefined;

  /**
   * The reason for the current purchase order retrieval preference status.
   *
   * @public
   */
  PurchaseOrderRetrievalPreferenceStatusReason?: string | undefined;

  /**
   * The version number of the procurement portal preference configuration.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The date and time when the procurement portal preference was created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The date and time when the procurement portal preference was last updated.
   *
   * @public
   */
  LastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface GetProcurementPortalPreferenceResponse {
  /**
   * The detailed configuration of the requested procurement portal preference.
   *
   * @public
   */
  ProcurementPortalPreference: ProcurementPortalPreference | undefined;
}

/**
 * The amount charged after taxes, in the preferred currency.
 *
 * @public
 */
export interface InvoiceCurrencyAmount {
  /**
   * The invoice currency amount.
   *
   * @public
   */
  TotalAmount?: string | undefined;

  /**
   * Details about the invoice total amount before tax.
   *
   * @public
   */
  TotalAmountBeforeTax?: string | undefined;

  /**
   * The currency dominion of the invoice document.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Details about the invoice currency amount.
   *
   * @public
   */
  AmountBreakdown?: AmountBreakdown | undefined;

  /**
   * The details of currency exchange.
   *
   * @public
   */
  CurrencyExchangeDetails?: CurrencyExchangeDetails | undefined;
}

/**
 * The invoice that the API retrieved.
 *
 * @public
 */
export interface InvoiceSummary {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The invoice ID.
   *
   * @public
   */
  InvoiceId?: string | undefined;

  /**
   * The issued date of the invoice.
   *
   * @public
   */
  IssuedDate?: Date | undefined;

  /**
   * The invoice due date.
   *
   * @public
   */
  DueDate?: Date | undefined;

  /**
   * The list of Amazon Web Services account IDs that are the bill source of the invoice. Currently, only a single bill source account is returned.
   *
   * @public
   */
  BillSourceAccounts?: string[] | undefined;

  /**
   * The total number of accounts that are the bill source of the invoice.
   *
   * @public
   */
  BillSourceAccountsTotalCount?: number | undefined;

  /**
   * The role of the invoice receiver.
   *
   * @public
   */
  ReceiverRole?: ReceiverRole | undefined;

  /**
   * The organization name providing Amazon Web Services services.
   *
   * @public
   */
  Entity?: Entity | undefined;

  /**
   * The billing period of the invoice-related document.
   *
   * @public
   */
  BillingPeriod?: BillingPeriod | undefined;

  /**
   * The frequency of the invoice.
   *
   * @public
   */
  InvoiceFrequency?: InvoiceFrequency | undefined;

  /**
   * The type of the bill.
   *
   * @public
   */
  BillType?: BillType | undefined;

  /**
   * The type of invoice.
   *
   * @public
   */
  InvoiceType?: InvoiceType | undefined;

  /**
   * The commercial invoice ID. This is only applicable for tax invoices and identifies the associated commercial invoice.
   *
   * @public
   */
  CommercialInvoiceId?: string | undefined;

  /**
   * The initial or original invoice ID.
   *
   * @public
   */
  OriginalInvoiceId?: string | undefined;

  /**
   * The purchase order number associated to the invoice.
   *
   * @public
   */
  PurchaseOrderNumber?: string | undefined;

  /**
   * The e-invoice delivery status.
   *
   * @public
   */
  EinvoiceDeliveryStatus?: EinvoiceDeliveryStatus | undefined;

  /**
   * The current status of an invoice as reported to the tax authority. This captures scenarios where an invoice may be cancelled after issuance.
   *
   * @public
   */
  TaxAuthorityStatus?: TaxAuthorityStatus | undefined;

  /**
   * The summary with the product and service currency.
   *
   * @public
   */
  BaseCurrencyAmount?: InvoiceCurrencyAmount | undefined;

  /**
   * The summary with the tax currency.
   *
   * @public
   */
  TaxCurrencyAmount?: InvoiceCurrencyAmount | undefined;

  /**
   * The summary with the customer configured currency.
   *
   * @public
   */
  PaymentCurrencyAmount?: InvoiceCurrencyAmount | undefined;
}

/**
 * Filters for your invoice summaries.
 *
 * @public
 */
export interface InvoiceSummariesFilter {
  /**
   * The date range for invoice summary retrieval.
   *
   * @public
   */
  TimeInterval?: DateInterval | undefined;

  /**
   * The billing period associated with the invoice documents.
   *
   * @public
   */
  BillingPeriod?: BillingPeriod | undefined;

  /**
   * The name of the entity that issues the Amazon Web Services invoice.
   *
   * @public
   */
  InvoicingEntity?: string | undefined;

  /**
   * The role of the invoice receiver to filter by.
   *
   * > **Note:**
   * >
   * > When `ReceiverRole` is specified:
   * >
   * > - Data is available starting `2025-06-01`. Queries for periods before `2025-06-01` return a validation error.
   * > - `TimeInterval` supports a time interval of up to 5 years. Without `ReceiverRole`, `TimeInterval` is limited to one month.
   *
   * @public
   */
  ReceiverRole?: ReceiverRole | undefined;
}

/**
 * Specifies the invoice summary.
 *
 * @public
 */
export interface InvoiceSummariesSelector {
  /**
   * The query identifier type (`INVOICE_ID` or `ACCOUNT_ID`).
   *
   * @public
   */
  ResourceType: ListInvoiceSummariesResourceType | undefined;

  /**
   * The value of the query identifier.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you separate Amazon Web Services account costs and configures your invoice for each business entity going forward.
 *
 * @public
 */
export interface InvoiceUnit {
  /**
   * ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn?: string | undefined;

  /**
   * The account that receives invoices related to the invoice unit.
   *
   * @public
   */
  InvoiceReceiver?: string | undefined;

  /**
   * A unique name that is distinctive within your Amazon Web Services.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The assigned description for an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * An `InvoiceUnitRule` object used the categorize invoice units.
   *
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * The last time the invoice unit was updated. This is important to determine the version of invoice unit configuration used to create the invoices. Any invoice created after this modified time will use this invoice unit configuration.
   *
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvoiceSummariesRequest {
  /**
   * The option to retrieve details for a specific invoice by providing its unique ID. Alternatively, access information for all invoices linked to the account by providing an account ID.
   *
   * @public
   */
  Selector: InvoiceSummariesSelector | undefined;

  /**
   * Filters you can use to customize your invoice summary.
   *
   * @public
   */
  Filter?: InvoiceSummariesFilter | undefined;

  /**
   * The token for the next set of results. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of invoice summaries a paginated response can contain.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInvoiceSummariesResponse {
  /**
   * List of key (summary level) invoice details without line item details.
   *
   * @public
   */
  InvoiceSummaries: InvoiceSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvoiceUnitsRequest {
  /**
   * An optional input to the list API. If multiple filters are specified, the returned list will be a configuration that match all of the provided filters. Supported filter types are `InvoiceReceivers`, `Names`, and `Accounts`.
   *
   * @public
   */
  Filters?: Filters | undefined;

  /**
   * The next token used to indicate where the returned list should start from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of invoice units that can be returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The state of an invoice unit at a specified time. You can see legacy invoice units that are currently deleted if the `AsOf` time is set to before it was deleted. If an `AsOf` is not provided, the default value is the current time.
   *
   * @public
   */
  AsOf?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvoiceUnitsResponse {
  /**
   * An invoice unit is a set of mutually exclusive accounts that correspond to your business entity.
   *
   * @public
   */
  InvoiceUnits?: InvoiceUnit[] | undefined;

  /**
   * The next token used to indicate where the returned list should start from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProcurementPortalPreferencesRequest {
  /**
   * The token for the next set of results. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides a summary of a procurement portal preference, including key identifiers and status information.
 *
 * @public
 */
export interface ProcurementPortalPreferenceSummary {
  /**
   * The Amazon Web Services account ID associated with this procurement portal preference summary.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * The name of the procurement portal.
   *
   * @public
   */
  ProcurementPortalName: ProcurementPortalName | undefined;

  /**
   * The domain identifier for the buyer in the procurement portal.
   *
   * @public
   */
  BuyerDomain: BuyerDomain | undefined;

  /**
   * The unique identifier for the buyer in the procurement portal.
   *
   * @public
   */
  BuyerIdentifier: string | undefined;

  /**
   * The domain identifier for the supplier in the procurement portal.
   *
   * @public
   */
  SupplierDomain: SupplierDomain | undefined;

  /**
   * The unique identifier for the supplier in the procurement portal.
   *
   * @public
   */
  SupplierIdentifier: string | undefined;

  /**
   * Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.
   *
   * @public
   */
  Selector?: ProcurementPortalPreferenceSelector | undefined;

  /**
   * Indicates whether e-invoice delivery is enabled for this procurement portal preference.
   *
   * @public
   */
  EinvoiceDeliveryEnabled: boolean | undefined;

  /**
   * Indicates whether purchase order retrieval is enabled for this procurement portal preference.
   *
   * @public
   */
  PurchaseOrderRetrievalEnabled: boolean | undefined;

  /**
   * Indicates whether Marketplace PunchOut is enabled for this procurement portal preference. Defaults to `false`.
   *
   * @public
   */
  MarketplacePunchOutEnabled?: boolean | undefined;

  /**
   * The current status of the e-invoice delivery preference in this summary.
   *
   * @public
   */
  EinvoiceDeliveryPreferenceStatus?: ProcurementPortalPreferenceStatus | undefined;

  /**
   * The reason for the current e-invoice delivery preference status in this summary.
   *
   * @public
   */
  EinvoiceDeliveryPreferenceStatusReason?: string | undefined;

  /**
   * The current status of the purchase order retrieval preference in this summary.
   *
   * @public
   */
  PurchaseOrderRetrievalPreferenceStatus?: ProcurementPortalPreferenceStatus | undefined;

  /**
   * The reason for the current purchase order retrieval preference status in this summary.
   *
   * @public
   */
  PurchaseOrderRetrievalPreferenceStatusReason?: string | undefined;

  /**
   * The version number of the procurement portal preference configuration in this summary.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The date and time when the procurement portal preference was created.
   *
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * The date and time when the procurement portal preference was last updated.
   *
   * @public
   */
  LastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface ListProcurementPortalPreferencesResponse {
  /**
   * The list of procurement portal preferences associated with the Amazon Web Services account.
   *
   * @public
   */
  ProcurementPortalPreferences?: ProcurementPortalPreferenceSummary[] | undefined;

  /**
   * The token to use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProcurementPortalsRequest {
  /**
   * The token for the next set of results. You received this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. Default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains metadata for a procurement portal, including the portal identifier, name, and default feature configurations.
 *
 * @public
 */
export interface ProcurementPortal {
  /**
   * The unique identifier of the procurement portal.
   *
   * @public
   */
  PortalIdentifier: string | undefined;

  /**
   * The name of the procurement portal.
   *
   * @public
   */
  PortalName: ProcurementPortalName | undefined;

  /**
   * The display name of the procurement portal.
   *
   * @public
   */
  PortalDisplayName?: string | undefined;

  /**
   * The default feature configurations for the procurement portal.
   *
   * @public
   */
  DefaultFeatureConfigurations?: FeatureConfigurations | undefined;
}

/**
 * @public
 */
export interface ListProcurementPortalsResponse {
  /**
   * The list of procurement portals available for configuration.
   *
   * @public
   */
  ProcurementPortals: ProcurementPortal[] | undefined;

  /**
   * The token to use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProcurementPortalSuppliersRequest {
  /**
   * The unique identifier of the procurement portal for which to list suppliers. Use the `PortalIdentifier` value returned by `ListProcurementPortals`.
   *
   * @public
   */
  PortalIdentifier: string | undefined;

  /**
   * The token for the next set of results. You received this token from a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. Default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains metadata for a supplier configured within a procurement portal.
 *
 * @public
 */
export interface ProcurementPortalSupplier {
  /**
   * The unique identifier of the supplier within the procurement portal.
   *
   * @public
   */
  SupplierIdentifier: string | undefined;

  /**
   * The Amazon Web Services seller of record associated with the supplier—the Amazon Web Services legal entity that issues invoices for the account (for example, `AWS_INC` or `AWS_EUROPE`).
   *
   * @public
   */
  SellerOfRecord?: string | undefined;

  /**
   * The two-letter ISO 3166-1 alpha-2 country code associated with the supplier.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The environment identifier for the supplier in the procurement portal. PROD for production env, or TEST for sandbox/test env.
   *
   * @public
   */
  Environment?: ProcurementPortalEnv | undefined;
}

/**
 * @public
 */
export interface ListProcurementPortalSuppliersResponse {
  /**
   * The list of suppliers configured for the specified procurement portal.
   *
   * @public
   */
  ProcurementPortalSuppliers: ProcurementPortalSupplier[] | undefined;

  /**
   * The token to use to retrieve the next set of results, or null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of tags to list.
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
   * Adds a tag to a resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface PutProcurementPortalPreferenceRequest {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference to update.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * Specifies criteria for selecting which invoices should be processed using a particular procurement portal preference.
   *
   * @public
   */
  Selector?: ProcurementPortalPreferenceSelector | undefined;

  /**
   * The updated shared secret or authentication credential for the procurement portal. This value must be encrypted at rest.
   *
   * @public
   */
  ProcurementPortalSharedSecret?: string | undefined;

  /**
   * The updated endpoint URL where e-invoices will be delivered to the procurement portal. Must be a valid HTTPS URL.
   *
   * @public
   */
  ProcurementPortalInstanceEndpoint?: string | undefined;

  /**
   * Updated configuration settings for the test environment of the procurement portal.
   *
   * @public
   */
  TestEnvPreference?: TestEnvPreferenceInput | undefined;

  /**
   * Updated flag indicating whether e-invoice delivery is enabled for this procurement portal preference.
   *
   * @public
   */
  EinvoiceDeliveryEnabled: boolean | undefined;

  /**
   * Updated e-invoice delivery configuration including document types, attachment types, and customization settings for the portal.
   *
   * @public
   */
  EinvoiceDeliveryPreference?: EinvoiceDeliveryPreference | undefined;

  /**
   * Updated flag indicating whether purchase order retrieval is enabled for this procurement portal preference.
   *
   * @public
   */
  PurchaseOrderRetrievalEnabled: boolean | undefined;

  /**
   * Whether Marketplace PunchOut is enabled for this connection. Defaults to false if not provided.
   * @public
   */
  MarketplacePunchOutEnabled?: boolean | undefined;

  /**
   * Configuration for Marketplace PunchOut. Required when MarketplacePunchOutEnabled is true.
   * @public
   */
  MarketplacePunchOutPreference?: MarketplacePunchOutPreference | undefined;

  /**
   * Updated list of contact information for portal administrators and technical contacts.
   *
   * @public
   */
  Contacts: Contact[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutProcurementPortalPreferenceResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated procurement portal preference.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

/**
 * @public
 */
export interface SendProcurementPortalValidationRequest {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference to validate.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface SendProcurementPortalValidationResponse {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference for which the validation request was sent.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Adds a tag to a resource.
   *
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
   * The Amazon Resource Name (ARN) to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Keys for the tags to be removed.
   *
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
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn: string | undefined;

  /**
   * The assigned description for an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
   *
   * @public
   */
  TaxInheritanceDisabled?: boolean | undefined;

  /**
   * The `InvoiceUnitRule` object used to update invoice units.
   *
   * @public
   */
  Rule?: InvoiceUnitRule | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInvoiceUnitResponse {
  /**
   * The ARN to identify an invoice unit. This information can't be modified or deleted.
   *
   * @public
   */
  InvoiceUnitArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProcurementPortalPreferenceStatusRequest {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference to update.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * The updated status of the e-invoice delivery preference.
   *
   * @public
   */
  EinvoiceDeliveryPreferenceStatus?: ProcurementPortalPreferenceStatus | undefined;

  /**
   * The reason for the e-invoice delivery preference status update, providing context for the change.
   *
   * @public
   */
  EinvoiceDeliveryPreferenceStatusReason?: string | undefined;

  /**
   * The updated status of the purchase order retrieval preference.
   *
   * @public
   */
  PurchaseOrderRetrievalPreferenceStatus?: ProcurementPortalPreferenceStatus | undefined;

  /**
   * The reason for the purchase order retrieval preference status update, providing context for the change.
   *
   * @public
   */
  PurchaseOrderRetrievalPreferenceStatusReason?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProcurementPortalPreferenceStatusResponse {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference with updated status.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

/**
 * @public
 */
export interface VerifyProcurementPortalValidationRequest {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference to validate.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;

  /**
   * The validation code received from the procurement portal in response to a previous `SendProcurementPortalValidation` request.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface VerifyProcurementPortalValidationResponse {
  /**
   * The Amazon Resource Name (ARN) of the procurement portal preference for which validation was completed.
   *
   * @public
   */
  ProcurementPortalPreferenceArn: string | undefined;
}

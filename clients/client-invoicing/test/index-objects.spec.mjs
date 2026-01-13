import {
  AccessDeniedException,
  AccessDeniedException$,
  AmountBreakdown$,
  BatchGetInvoiceProfile$,
  BatchGetInvoiceProfileCommand,
  BatchGetInvoiceProfileRequest$,
  BatchGetInvoiceProfileResponse$,
  BillingPeriod$,
  BuyerDomain,
  ConflictException,
  ConflictException$,
  ConnectionTestingMethod,
  Contact$,
  CreateInvoiceUnit$,
  CreateInvoiceUnitCommand,
  CreateInvoiceUnitRequest$,
  CreateInvoiceUnitResponse$,
  CreateProcurementPortalPreference$,
  CreateProcurementPortalPreferenceCommand,
  CreateProcurementPortalPreferenceRequest$,
  CreateProcurementPortalPreferenceResponse$,
  CurrencyExchangeDetails$,
  DateInterval$,
  DeleteInvoiceUnit$,
  DeleteInvoiceUnitCommand,
  DeleteInvoiceUnitRequest$,
  DeleteInvoiceUnitResponse$,
  DeleteProcurementPortalPreference$,
  DeleteProcurementPortalPreferenceCommand,
  DeleteProcurementPortalPreferenceRequest$,
  DeleteProcurementPortalPreferenceResponse$,
  DiscountsBreakdown$,
  DiscountsBreakdownAmount$,
  EinvoiceDeliveryAttachmentType,
  EinvoiceDeliveryDocumentType,
  EinvoiceDeliveryPreference$,
  Entity$,
  FeesBreakdown$,
  FeesBreakdownAmount$,
  Filters$,
  GetInvoicePDF$,
  GetInvoicePDFCommand,
  GetInvoicePDFRequest$,
  GetInvoicePDFResponse$,
  GetInvoiceUnit$,
  GetInvoiceUnitCommand,
  GetInvoiceUnitRequest$,
  GetInvoiceUnitResponse$,
  GetProcurementPortalPreference$,
  GetProcurementPortalPreferenceCommand,
  GetProcurementPortalPreferenceRequest$,
  GetProcurementPortalPreferenceResponse$,
  InternalServerException,
  InternalServerException$,
  InvoiceCurrencyAmount$,
  InvoicePDF$,
  InvoiceProfile$,
  InvoiceSummariesFilter$,
  InvoiceSummariesSelector$,
  InvoiceSummary$,
  InvoiceType,
  InvoiceUnit$,
  InvoiceUnitRule$,
  Invoicing,
  InvoicingClient,
  InvoicingServiceException,
  ListInvoiceSummaries$,
  ListInvoiceSummariesCommand,
  ListInvoiceSummariesRequest$,
  ListInvoiceSummariesResourceType,
  ListInvoiceSummariesResponse$,
  ListInvoiceUnits$,
  ListInvoiceUnitsCommand,
  ListInvoiceUnitsRequest$,
  ListInvoiceUnitsResponse$,
  ListProcurementPortalPreferences$,
  ListProcurementPortalPreferencesCommand,
  ListProcurementPortalPreferencesRequest$,
  ListProcurementPortalPreferencesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListInvoiceSummaries,
  paginateListInvoiceUnits,
  paginateListProcurementPortalPreferences,
  ProcurementPortalName,
  ProcurementPortalPreference$,
  ProcurementPortalPreferenceSelector$,
  ProcurementPortalPreferenceStatus,
  ProcurementPortalPreferenceSummary$,
  Protocol,
  PurchaseOrderDataSource$,
  PurchaseOrderDataSourceType,
  PutProcurementPortalPreference$,
  PutProcurementPortalPreferenceCommand,
  PutProcurementPortalPreferenceRequest$,
  PutProcurementPortalPreferenceResponse$,
  ReceiverAddress$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SupplementalDocument$,
  SupplierDomain,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaxesBreakdown$,
  TaxesBreakdownAmount$,
  TestEnvPreference$,
  TestEnvPreferenceInput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateInvoiceUnit$,
  UpdateInvoiceUnitCommand,
  UpdateInvoiceUnitRequest$,
  UpdateInvoiceUnitResponse$,
  UpdateProcurementPortalPreferenceStatus$,
  UpdateProcurementPortalPreferenceStatusCommand,
  UpdateProcurementPortalPreferenceStatusRequest$,
  UpdateProcurementPortalPreferenceStatusResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InvoicingClient === "function");
assert(typeof Invoicing === "function");
// commands
assert(typeof BatchGetInvoiceProfileCommand === "function");
assert(typeof BatchGetInvoiceProfile$ === "object");
assert(typeof CreateInvoiceUnitCommand === "function");
assert(typeof CreateInvoiceUnit$ === "object");
assert(typeof CreateProcurementPortalPreferenceCommand === "function");
assert(typeof CreateProcurementPortalPreference$ === "object");
assert(typeof DeleteInvoiceUnitCommand === "function");
assert(typeof DeleteInvoiceUnit$ === "object");
assert(typeof DeleteProcurementPortalPreferenceCommand === "function");
assert(typeof DeleteProcurementPortalPreference$ === "object");
assert(typeof GetInvoicePDFCommand === "function");
assert(typeof GetInvoicePDF$ === "object");
assert(typeof GetInvoiceUnitCommand === "function");
assert(typeof GetInvoiceUnit$ === "object");
assert(typeof GetProcurementPortalPreferenceCommand === "function");
assert(typeof GetProcurementPortalPreference$ === "object");
assert(typeof ListInvoiceSummariesCommand === "function");
assert(typeof ListInvoiceSummaries$ === "object");
assert(typeof ListInvoiceUnitsCommand === "function");
assert(typeof ListInvoiceUnits$ === "object");
assert(typeof ListProcurementPortalPreferencesCommand === "function");
assert(typeof ListProcurementPortalPreferences$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutProcurementPortalPreferenceCommand === "function");
assert(typeof PutProcurementPortalPreference$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateInvoiceUnitCommand === "function");
assert(typeof UpdateInvoiceUnit$ === "object");
assert(typeof UpdateProcurementPortalPreferenceStatusCommand === "function");
assert(typeof UpdateProcurementPortalPreferenceStatus$ === "object");
// structural schemas
assert(typeof AmountBreakdown$ === "object");
assert(typeof BatchGetInvoiceProfileRequest$ === "object");
assert(typeof BatchGetInvoiceProfileResponse$ === "object");
assert(typeof BillingPeriod$ === "object");
assert(typeof Contact$ === "object");
assert(typeof CreateInvoiceUnitRequest$ === "object");
assert(typeof CreateInvoiceUnitResponse$ === "object");
assert(typeof CreateProcurementPortalPreferenceRequest$ === "object");
assert(typeof CreateProcurementPortalPreferenceResponse$ === "object");
assert(typeof CurrencyExchangeDetails$ === "object");
assert(typeof DateInterval$ === "object");
assert(typeof DeleteInvoiceUnitRequest$ === "object");
assert(typeof DeleteInvoiceUnitResponse$ === "object");
assert(typeof DeleteProcurementPortalPreferenceRequest$ === "object");
assert(typeof DeleteProcurementPortalPreferenceResponse$ === "object");
assert(typeof DiscountsBreakdown$ === "object");
assert(typeof DiscountsBreakdownAmount$ === "object");
assert(typeof EinvoiceDeliveryPreference$ === "object");
assert(typeof Entity$ === "object");
assert(typeof FeesBreakdown$ === "object");
assert(typeof FeesBreakdownAmount$ === "object");
assert(typeof Filters$ === "object");
assert(typeof GetInvoicePDFRequest$ === "object");
assert(typeof GetInvoicePDFResponse$ === "object");
assert(typeof GetInvoiceUnitRequest$ === "object");
assert(typeof GetInvoiceUnitResponse$ === "object");
assert(typeof GetProcurementPortalPreferenceRequest$ === "object");
assert(typeof GetProcurementPortalPreferenceResponse$ === "object");
assert(typeof InvoiceCurrencyAmount$ === "object");
assert(typeof InvoicePDF$ === "object");
assert(typeof InvoiceProfile$ === "object");
assert(typeof InvoiceSummariesFilter$ === "object");
assert(typeof InvoiceSummariesSelector$ === "object");
assert(typeof InvoiceSummary$ === "object");
assert(typeof InvoiceUnit$ === "object");
assert(typeof InvoiceUnitRule$ === "object");
assert(typeof ListInvoiceSummariesRequest$ === "object");
assert(typeof ListInvoiceSummariesResponse$ === "object");
assert(typeof ListInvoiceUnitsRequest$ === "object");
assert(typeof ListInvoiceUnitsResponse$ === "object");
assert(typeof ListProcurementPortalPreferencesRequest$ === "object");
assert(typeof ListProcurementPortalPreferencesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ProcurementPortalPreference$ === "object");
assert(typeof ProcurementPortalPreferenceSelector$ === "object");
assert(typeof ProcurementPortalPreferenceSummary$ === "object");
assert(typeof PurchaseOrderDataSource$ === "object");
assert(typeof PutProcurementPortalPreferenceRequest$ === "object");
assert(typeof PutProcurementPortalPreferenceResponse$ === "object");
assert(typeof ReceiverAddress$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof SupplementalDocument$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaxesBreakdown$ === "object");
assert(typeof TaxesBreakdownAmount$ === "object");
assert(typeof TestEnvPreference$ === "object");
assert(typeof TestEnvPreferenceInput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateInvoiceUnitRequest$ === "object");
assert(typeof UpdateInvoiceUnitResponse$ === "object");
assert(typeof UpdateProcurementPortalPreferenceStatusRequest$ === "object");
assert(typeof UpdateProcurementPortalPreferenceStatusResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof BuyerDomain === "object");
assert(typeof ConnectionTestingMethod === "object");
assert(typeof EinvoiceDeliveryAttachmentType === "object");
assert(typeof EinvoiceDeliveryDocumentType === "object");
assert(typeof InvoiceType === "object");
assert(typeof ListInvoiceSummariesResourceType === "object");
assert(typeof ProcurementPortalName === "object");
assert(typeof ProcurementPortalPreferenceStatus === "object");
assert(typeof Protocol === "object");
assert(typeof PurchaseOrderDataSourceType === "object");
assert(typeof SupplierDomain === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof InvoicingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof InvoicingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof InvoicingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof InvoicingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof InvoicingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof InvoicingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof InvoicingServiceException);
assert(typeof ValidationException$ === "object");
assert(InvoicingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListInvoiceSummaries === "function");
assert(typeof paginateListInvoiceUnits === "function");
assert(typeof paginateListProcurementPortalPreferences === "function");
console.log(`Invoicing index test passed.`);

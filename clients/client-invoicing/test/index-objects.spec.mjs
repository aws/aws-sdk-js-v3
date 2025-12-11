import {
  AccessDeniedException,
  BatchGetInvoiceProfileCommand,
  BuyerDomain,
  ConflictException,
  ConnectionTestingMethod,
  CreateInvoiceUnitCommand,
  CreateProcurementPortalPreferenceCommand,
  DeleteInvoiceUnitCommand,
  DeleteProcurementPortalPreferenceCommand,
  EinvoiceDeliveryAttachmentType,
  EinvoiceDeliveryDocumentType,
  GetInvoicePDFCommand,
  GetInvoiceUnitCommand,
  GetProcurementPortalPreferenceCommand,
  InternalServerException,
  InvoiceType,
  Invoicing,
  InvoicingClient,
  InvoicingServiceException,
  ListInvoiceSummariesCommand,
  ListInvoiceSummariesResourceType,
  ListInvoiceUnitsCommand,
  ListProcurementPortalPreferencesCommand,
  ListTagsForResourceCommand,
  ProcurementPortalName,
  ProcurementPortalPreferenceStatus,
  Protocol,
  PurchaseOrderDataSourceType,
  PutProcurementPortalPreferenceCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SupplierDomain,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateInvoiceUnitCommand,
  UpdateProcurementPortalPreferenceStatusCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListInvoiceSummaries,
  paginateListInvoiceUnits,
  paginateListProcurementPortalPreferences,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InvoicingClient === "function");
assert(typeof Invoicing === "function");
// commands
assert(typeof BatchGetInvoiceProfileCommand === "function");
assert(typeof CreateInvoiceUnitCommand === "function");
assert(typeof CreateProcurementPortalPreferenceCommand === "function");
assert(typeof DeleteInvoiceUnitCommand === "function");
assert(typeof DeleteProcurementPortalPreferenceCommand === "function");
assert(typeof GetInvoicePDFCommand === "function");
assert(typeof GetInvoiceUnitCommand === "function");
assert(typeof GetProcurementPortalPreferenceCommand === "function");
assert(typeof ListInvoiceSummariesCommand === "function");
assert(typeof ListInvoiceUnitsCommand === "function");
assert(typeof ListProcurementPortalPreferencesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutProcurementPortalPreferenceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateInvoiceUnitCommand === "function");
assert(typeof UpdateProcurementPortalPreferenceStatusCommand === "function");
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
assert(ConflictException.prototype instanceof InvoicingServiceException);
assert(InternalServerException.prototype instanceof InvoicingServiceException);
assert(ResourceNotFoundException.prototype instanceof InvoicingServiceException);
assert(ServiceQuotaExceededException.prototype instanceof InvoicingServiceException);
assert(ThrottlingException.prototype instanceof InvoicingServiceException);
assert(ValidationException.prototype instanceof InvoicingServiceException);
assert(InvoicingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListInvoiceSummaries === "function");
assert(typeof paginateListInvoiceUnits === "function");
assert(typeof paginateListProcurementPortalPreferences === "function");
console.log(`Invoicing index test passed.`);

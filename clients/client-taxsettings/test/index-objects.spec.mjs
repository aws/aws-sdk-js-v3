import {
  AccessDeniedException,
  AddressRoleType,
  AttachmentUploadException,
  BatchDeleteTaxRegistrationCommand,
  BatchGetTaxExemptionsCommand,
  BatchPutTaxRegistrationCommand,
  CaseCreationLimitExceededException,
  ConflictException,
  DeleteSupplementalTaxRegistrationCommand,
  DeleteTaxRegistrationCommand,
  EntityExemptionAccountStatus,
  GetTaxExemptionTypesCommand,
  GetTaxInheritanceCommand,
  GetTaxRegistrationCommand,
  GetTaxRegistrationDocumentCommand,
  HeritageStatus,
  IndonesiaTaxRegistrationNumberType,
  Industries,
  InternalServerException,
  IsraelCustomerType,
  IsraelDealerType,
  ListSupplementalTaxRegistrationsCommand,
  ListTaxExemptionsCommand,
  ListTaxRegistrationsCommand,
  MalaysiaServiceTaxCode,
  PersonType,
  PutSupplementalTaxRegistrationCommand,
  PutTaxExemptionCommand,
  PutTaxInheritanceCommand,
  PutTaxRegistrationCommand,
  RegistrationType,
  ResourceNotFoundException,
  SaudiArabiaTaxRegistrationNumberType,
  Sector,
  SupplementalTaxRegistrationType,
  TaxRegistrationNumberType,
  TaxRegistrationStatus,
  TaxRegistrationType,
  TaxSettings,
  TaxSettingsClient,
  TaxSettingsServiceException,
  UkraineTrnType,
  UzbekistanTaxRegistrationNumberType,
  ValidationException,
  ValidationExceptionErrorCode,
  paginateListSupplementalTaxRegistrations,
  paginateListTaxExemptions,
  paginateListTaxRegistrations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TaxSettingsClient === "function");
assert(typeof TaxSettings === "function");
// commands
assert(typeof BatchDeleteTaxRegistrationCommand === "function");
assert(typeof BatchGetTaxExemptionsCommand === "function");
assert(typeof BatchPutTaxRegistrationCommand === "function");
assert(typeof DeleteSupplementalTaxRegistrationCommand === "function");
assert(typeof DeleteTaxRegistrationCommand === "function");
assert(typeof GetTaxExemptionTypesCommand === "function");
assert(typeof GetTaxInheritanceCommand === "function");
assert(typeof GetTaxRegistrationCommand === "function");
assert(typeof GetTaxRegistrationDocumentCommand === "function");
assert(typeof ListSupplementalTaxRegistrationsCommand === "function");
assert(typeof ListTaxExemptionsCommand === "function");
assert(typeof ListTaxRegistrationsCommand === "function");
assert(typeof PutSupplementalTaxRegistrationCommand === "function");
assert(typeof PutTaxExemptionCommand === "function");
assert(typeof PutTaxInheritanceCommand === "function");
assert(typeof PutTaxRegistrationCommand === "function");
// enums
assert(typeof AddressRoleType === "object");
assert(typeof EntityExemptionAccountStatus === "object");
assert(typeof HeritageStatus === "object");
assert(typeof IndonesiaTaxRegistrationNumberType === "object");
assert(typeof Industries === "object");
assert(typeof IsraelCustomerType === "object");
assert(typeof IsraelDealerType === "object");
assert(typeof MalaysiaServiceTaxCode === "object");
assert(typeof PersonType === "object");
assert(typeof RegistrationType === "object");
assert(typeof SaudiArabiaTaxRegistrationNumberType === "object");
assert(typeof Sector === "object");
assert(typeof SupplementalTaxRegistrationType === "object");
assert(typeof TaxRegistrationNumberType === "object");
assert(typeof TaxRegistrationStatus === "object");
assert(typeof TaxRegistrationType === "object");
assert(typeof UkraineTrnType === "object");
assert(typeof UzbekistanTaxRegistrationNumberType === "object");
assert(typeof ValidationExceptionErrorCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof TaxSettingsServiceException);
assert(AttachmentUploadException.prototype instanceof TaxSettingsServiceException);
assert(CaseCreationLimitExceededException.prototype instanceof TaxSettingsServiceException);
assert(ConflictException.prototype instanceof TaxSettingsServiceException);
assert(InternalServerException.prototype instanceof TaxSettingsServiceException);
assert(ResourceNotFoundException.prototype instanceof TaxSettingsServiceException);
assert(ValidationException.prototype instanceof TaxSettingsServiceException);
assert(TaxSettingsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSupplementalTaxRegistrations === "function");
assert(typeof paginateListTaxExemptions === "function");
assert(typeof paginateListTaxRegistrations === "function");
console.log(`TaxSettings index test passed.`);

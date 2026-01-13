import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountDetails$,
  AccountMetaData$,
  AdditionalInfoRequest$,
  AdditionalInfoResponse$,
  Address$,
  AddressRoleType,
  AttachmentUploadException,
  AttachmentUploadException$,
  Authority$,
  BatchDeleteTaxRegistration$,
  BatchDeleteTaxRegistrationCommand,
  BatchDeleteTaxRegistrationError$,
  BatchDeleteTaxRegistrationRequest$,
  BatchDeleteTaxRegistrationResponse$,
  BatchGetTaxExemptions$,
  BatchGetTaxExemptionsCommand,
  BatchGetTaxExemptionsRequest$,
  BatchGetTaxExemptionsResponse$,
  BatchPutTaxRegistration$,
  BatchPutTaxRegistrationCommand,
  BatchPutTaxRegistrationError$,
  BatchPutTaxRegistrationRequest$,
  BatchPutTaxRegistrationResponse$,
  BrazilAdditionalInfo$,
  CanadaAdditionalInfo$,
  CaseCreationLimitExceededException,
  CaseCreationLimitExceededException$,
  ConflictException,
  ConflictException$,
  DeleteSupplementalTaxRegistration$,
  DeleteSupplementalTaxRegistrationCommand,
  DeleteSupplementalTaxRegistrationRequest$,
  DeleteSupplementalTaxRegistrationResponse$,
  DeleteTaxRegistration$,
  DeleteTaxRegistrationCommand,
  DeleteTaxRegistrationRequest$,
  DeleteTaxRegistrationResponse$,
  DestinationS3Location$,
  EgyptAdditionalInfo$,
  EntityExemptionAccountStatus,
  EstoniaAdditionalInfo$,
  ExemptionCertificate$,
  GeorgiaAdditionalInfo$,
  GetTaxExemptionTypes$,
  GetTaxExemptionTypesCommand,
  GetTaxExemptionTypesRequest$,
  GetTaxExemptionTypesResponse$,
  GetTaxInheritance$,
  GetTaxInheritanceCommand,
  GetTaxInheritanceRequest$,
  GetTaxInheritanceResponse$,
  GetTaxRegistration$,
  GetTaxRegistrationCommand,
  GetTaxRegistrationDocument$,
  GetTaxRegistrationDocumentCommand,
  GetTaxRegistrationDocumentRequest$,
  GetTaxRegistrationDocumentResponse$,
  GetTaxRegistrationRequest$,
  GetTaxRegistrationResponse$,
  GreeceAdditionalInfo$,
  HeritageStatus,
  IndiaAdditionalInfo$,
  IndonesiaAdditionalInfo$,
  IndonesiaTaxRegistrationNumberType,
  Industries,
  InternalServerException,
  InternalServerException$,
  IsraelAdditionalInfo$,
  IsraelCustomerType,
  IsraelDealerType,
  ItalyAdditionalInfo$,
  Jurisdiction$,
  KenyaAdditionalInfo$,
  ListSupplementalTaxRegistrations$,
  ListSupplementalTaxRegistrationsCommand,
  ListSupplementalTaxRegistrationsRequest$,
  ListSupplementalTaxRegistrationsResponse$,
  ListTaxExemptions$,
  ListTaxExemptionsCommand,
  ListTaxExemptionsRequest$,
  ListTaxExemptionsResponse$,
  ListTaxRegistrations$,
  ListTaxRegistrationsCommand,
  ListTaxRegistrationsRequest$,
  ListTaxRegistrationsResponse$,
  MalaysiaAdditionalInfo$,
  MalaysiaServiceTaxCode,
  paginateListSupplementalTaxRegistrations,
  paginateListTaxExemptions,
  paginateListTaxRegistrations,
  PersonType,
  PolandAdditionalInfo$,
  PutSupplementalTaxRegistration$,
  PutSupplementalTaxRegistrationCommand,
  PutSupplementalTaxRegistrationRequest$,
  PutSupplementalTaxRegistrationResponse$,
  PutTaxExemption$,
  PutTaxExemptionCommand,
  PutTaxExemptionRequest$,
  PutTaxExemptionResponse$,
  PutTaxInheritance$,
  PutTaxInheritanceCommand,
  PutTaxInheritanceRequest$,
  PutTaxInheritanceResponse$,
  PutTaxRegistration$,
  PutTaxRegistrationCommand,
  PutTaxRegistrationRequest$,
  PutTaxRegistrationResponse$,
  RegistrationType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RomaniaAdditionalInfo$,
  SaudiArabiaAdditionalInfo$,
  SaudiArabiaTaxRegistrationNumberType,
  Sector,
  SourceS3Location$,
  SouthKoreaAdditionalInfo$,
  SpainAdditionalInfo$,
  SupplementalTaxRegistration$,
  SupplementalTaxRegistrationEntry$,
  SupplementalTaxRegistrationType,
  TaxDocumentMetadata$,
  TaxExemption$,
  TaxExemptionDetails$,
  TaxExemptionType$,
  TaxInheritanceDetails$,
  TaxRegistration$,
  TaxRegistrationDocFile$,
  TaxRegistrationDocument$,
  TaxRegistrationEntry$,
  TaxRegistrationNumberType,
  TaxRegistrationStatus,
  TaxRegistrationType,
  TaxRegistrationWithJurisdiction$,
  TaxSettings,
  TaxSettingsClient,
  TaxSettingsServiceException,
  TurkeyAdditionalInfo$,
  UkraineAdditionalInfo$,
  UkraineTrnType,
  UzbekistanAdditionalInfo$,
  UzbekistanTaxRegistrationNumberType,
  ValidationException,
  ValidationException$,
  ValidationExceptionErrorCode,
  ValidationExceptionField$,
  VerificationDetails$,
  VietnamAdditionalInfo$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TaxSettingsClient === "function");
assert(typeof TaxSettings === "function");
// commands
assert(typeof BatchDeleteTaxRegistrationCommand === "function");
assert(typeof BatchDeleteTaxRegistration$ === "object");
assert(typeof BatchGetTaxExemptionsCommand === "function");
assert(typeof BatchGetTaxExemptions$ === "object");
assert(typeof BatchPutTaxRegistrationCommand === "function");
assert(typeof BatchPutTaxRegistration$ === "object");
assert(typeof DeleteSupplementalTaxRegistrationCommand === "function");
assert(typeof DeleteSupplementalTaxRegistration$ === "object");
assert(typeof DeleteTaxRegistrationCommand === "function");
assert(typeof DeleteTaxRegistration$ === "object");
assert(typeof GetTaxExemptionTypesCommand === "function");
assert(typeof GetTaxExemptionTypes$ === "object");
assert(typeof GetTaxInheritanceCommand === "function");
assert(typeof GetTaxInheritance$ === "object");
assert(typeof GetTaxRegistrationCommand === "function");
assert(typeof GetTaxRegistration$ === "object");
assert(typeof GetTaxRegistrationDocumentCommand === "function");
assert(typeof GetTaxRegistrationDocument$ === "object");
assert(typeof ListSupplementalTaxRegistrationsCommand === "function");
assert(typeof ListSupplementalTaxRegistrations$ === "object");
assert(typeof ListTaxExemptionsCommand === "function");
assert(typeof ListTaxExemptions$ === "object");
assert(typeof ListTaxRegistrationsCommand === "function");
assert(typeof ListTaxRegistrations$ === "object");
assert(typeof PutSupplementalTaxRegistrationCommand === "function");
assert(typeof PutSupplementalTaxRegistration$ === "object");
assert(typeof PutTaxExemptionCommand === "function");
assert(typeof PutTaxExemption$ === "object");
assert(typeof PutTaxInheritanceCommand === "function");
assert(typeof PutTaxInheritance$ === "object");
assert(typeof PutTaxRegistrationCommand === "function");
assert(typeof PutTaxRegistration$ === "object");
// structural schemas
assert(typeof AccountDetails$ === "object");
assert(typeof AccountMetaData$ === "object");
assert(typeof AdditionalInfoRequest$ === "object");
assert(typeof AdditionalInfoResponse$ === "object");
assert(typeof Address$ === "object");
assert(typeof Authority$ === "object");
assert(typeof BatchDeleteTaxRegistrationError$ === "object");
assert(typeof BatchDeleteTaxRegistrationRequest$ === "object");
assert(typeof BatchDeleteTaxRegistrationResponse$ === "object");
assert(typeof BatchGetTaxExemptionsRequest$ === "object");
assert(typeof BatchGetTaxExemptionsResponse$ === "object");
assert(typeof BatchPutTaxRegistrationError$ === "object");
assert(typeof BatchPutTaxRegistrationRequest$ === "object");
assert(typeof BatchPutTaxRegistrationResponse$ === "object");
assert(typeof BrazilAdditionalInfo$ === "object");
assert(typeof CanadaAdditionalInfo$ === "object");
assert(typeof DeleteSupplementalTaxRegistrationRequest$ === "object");
assert(typeof DeleteSupplementalTaxRegistrationResponse$ === "object");
assert(typeof DeleteTaxRegistrationRequest$ === "object");
assert(typeof DeleteTaxRegistrationResponse$ === "object");
assert(typeof DestinationS3Location$ === "object");
assert(typeof EgyptAdditionalInfo$ === "object");
assert(typeof EstoniaAdditionalInfo$ === "object");
assert(typeof ExemptionCertificate$ === "object");
assert(typeof GeorgiaAdditionalInfo$ === "object");
assert(typeof GetTaxExemptionTypesRequest$ === "object");
assert(typeof GetTaxExemptionTypesResponse$ === "object");
assert(typeof GetTaxInheritanceRequest$ === "object");
assert(typeof GetTaxInheritanceResponse$ === "object");
assert(typeof GetTaxRegistrationDocumentRequest$ === "object");
assert(typeof GetTaxRegistrationDocumentResponse$ === "object");
assert(typeof GetTaxRegistrationRequest$ === "object");
assert(typeof GetTaxRegistrationResponse$ === "object");
assert(typeof GreeceAdditionalInfo$ === "object");
assert(typeof IndiaAdditionalInfo$ === "object");
assert(typeof IndonesiaAdditionalInfo$ === "object");
assert(typeof IsraelAdditionalInfo$ === "object");
assert(typeof ItalyAdditionalInfo$ === "object");
assert(typeof Jurisdiction$ === "object");
assert(typeof KenyaAdditionalInfo$ === "object");
assert(typeof ListSupplementalTaxRegistrationsRequest$ === "object");
assert(typeof ListSupplementalTaxRegistrationsResponse$ === "object");
assert(typeof ListTaxExemptionsRequest$ === "object");
assert(typeof ListTaxExemptionsResponse$ === "object");
assert(typeof ListTaxRegistrationsRequest$ === "object");
assert(typeof ListTaxRegistrationsResponse$ === "object");
assert(typeof MalaysiaAdditionalInfo$ === "object");
assert(typeof PolandAdditionalInfo$ === "object");
assert(typeof PutSupplementalTaxRegistrationRequest$ === "object");
assert(typeof PutSupplementalTaxRegistrationResponse$ === "object");
assert(typeof PutTaxExemptionRequest$ === "object");
assert(typeof PutTaxExemptionResponse$ === "object");
assert(typeof PutTaxInheritanceRequest$ === "object");
assert(typeof PutTaxInheritanceResponse$ === "object");
assert(typeof PutTaxRegistrationRequest$ === "object");
assert(typeof PutTaxRegistrationResponse$ === "object");
assert(typeof RomaniaAdditionalInfo$ === "object");
assert(typeof SaudiArabiaAdditionalInfo$ === "object");
assert(typeof SourceS3Location$ === "object");
assert(typeof SouthKoreaAdditionalInfo$ === "object");
assert(typeof SpainAdditionalInfo$ === "object");
assert(typeof SupplementalTaxRegistration$ === "object");
assert(typeof SupplementalTaxRegistrationEntry$ === "object");
assert(typeof TaxDocumentMetadata$ === "object");
assert(typeof TaxExemption$ === "object");
assert(typeof TaxExemptionDetails$ === "object");
assert(typeof TaxExemptionType$ === "object");
assert(typeof TaxInheritanceDetails$ === "object");
assert(typeof TaxRegistration$ === "object");
assert(typeof TaxRegistrationDocFile$ === "object");
assert(typeof TaxRegistrationDocument$ === "object");
assert(typeof TaxRegistrationEntry$ === "object");
assert(typeof TaxRegistrationWithJurisdiction$ === "object");
assert(typeof TurkeyAdditionalInfo$ === "object");
assert(typeof UkraineAdditionalInfo$ === "object");
assert(typeof UzbekistanAdditionalInfo$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VerificationDetails$ === "object");
assert(typeof VietnamAdditionalInfo$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AttachmentUploadException.prototype instanceof TaxSettingsServiceException);
assert(typeof AttachmentUploadException$ === "object");
assert(CaseCreationLimitExceededException.prototype instanceof TaxSettingsServiceException);
assert(typeof CaseCreationLimitExceededException$ === "object");
assert(ConflictException.prototype instanceof TaxSettingsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof TaxSettingsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TaxSettingsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof TaxSettingsServiceException);
assert(typeof ValidationException$ === "object");
assert(TaxSettingsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSupplementalTaxRegistrations === "function");
assert(typeof paginateListTaxExemptions === "function");
assert(typeof paginateListTaxRegistrations === "function");
console.log(`TaxSettings index test passed.`);

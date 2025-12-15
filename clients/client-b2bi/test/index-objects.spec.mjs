import {
  AccessDeniedException,
  AccessDeniedException$,
  AdvancedOptions$,
  B2bi,
  B2biClient,
  B2biServiceException,
  CapabilityConfiguration$,
  CapabilityDirection,
  CapabilityOptions$,
  CapabilitySummary$,
  CapabilityType,
  ConflictException,
  ConflictException$,
  ConversionSource$,
  ConversionSourceFormat,
  ConversionTarget$,
  ConversionTargetFormat,
  ConversionTargetFormatDetails$,
  CreateCapability$,
  CreateCapabilityCommand,
  CreateCapabilityRequest$,
  CreateCapabilityResponse$,
  CreatePartnership$,
  CreatePartnershipCommand,
  CreatePartnershipRequest$,
  CreatePartnershipResponse$,
  CreateProfile$,
  CreateProfileCommand,
  CreateProfileRequest$,
  CreateProfileResponse$,
  CreateStarterMappingTemplate$,
  CreateStarterMappingTemplateCommand,
  CreateStarterMappingTemplateRequest$,
  CreateStarterMappingTemplateResponse$,
  CreateTransformer$,
  CreateTransformerCommand,
  CreateTransformerRequest$,
  CreateTransformerResponse$,
  DeleteCapability$,
  DeleteCapabilityCommand,
  DeleteCapabilityRequest$,
  DeletePartnership$,
  DeletePartnershipCommand,
  DeletePartnershipRequest$,
  DeleteProfile$,
  DeleteProfileCommand,
  DeleteProfileRequest$,
  DeleteTransformer$,
  DeleteTransformerCommand,
  DeleteTransformerRequest$,
  EdiConfiguration$,
  EdiType$,
  ElementRequirement,
  FileFormat,
  FormatOptions$,
  FromFormat,
  GenerateMapping$,
  GenerateMappingCommand,
  GenerateMappingRequest$,
  GenerateMappingResponse$,
  GetCapability$,
  GetCapabilityCommand,
  GetCapabilityRequest$,
  GetCapabilityResponse$,
  GetPartnership$,
  GetPartnershipCommand,
  GetPartnershipRequest$,
  GetPartnershipResponse$,
  GetProfile$,
  GetProfileCommand,
  GetProfileRequest$,
  GetProfileResponse$,
  GetTransformer$,
  GetTransformerCommand,
  GetTransformerJob$,
  GetTransformerJobCommand,
  GetTransformerJobRequest$,
  GetTransformerJobResponse$,
  GetTransformerRequest$,
  GetTransformerResponse$,
  InboundEdiOptions$,
  InputConversion$,
  InputFileSource$,
  InternalServerException,
  InternalServerException$,
  LineTerminator,
  ListCapabilities$,
  ListCapabilitiesCommand,
  ListCapabilitiesRequest$,
  ListCapabilitiesResponse$,
  ListPartnerships$,
  ListPartnershipsCommand,
  ListPartnershipsRequest$,
  ListPartnershipsResponse$,
  ListProfiles$,
  ListProfilesCommand,
  ListProfilesRequest$,
  ListProfilesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTransformers$,
  ListTransformersCommand,
  ListTransformersRequest$,
  ListTransformersResponse$,
  Logging,
  Mapping$,
  MappingTemplateLanguage,
  MappingType,
  OutboundEdiOptions$,
  OutputConversion$,
  OutputSampleFileSource$,
  PartnershipSummary$,
  ProfileSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Location$,
  SampleDocumentKeys$,
  SampleDocuments$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartTransformerJob$,
  StartTransformerJobCommand,
  StartTransformerJobRequest$,
  StartTransformerJobResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TemplateDetails$,
  TestConversion$,
  TestConversionCommand,
  TestConversionRequest$,
  TestConversionResponse$,
  TestMapping$,
  TestMappingCommand,
  TestMappingRequest$,
  TestMappingResponse$,
  TestParsing$,
  TestParsingCommand,
  TestParsingRequest$,
  TestParsingResponse$,
  ThrottlingException,
  ThrottlingException$,
  ToFormat,
  TransformerJobStatus,
  TransformerStatus,
  TransformerSummary$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateCapability$,
  UpdateCapabilityCommand,
  UpdateCapabilityRequest$,
  UpdateCapabilityResponse$,
  UpdatePartnership$,
  UpdatePartnershipCommand,
  UpdatePartnershipRequest$,
  UpdatePartnershipResponse$,
  UpdateProfile$,
  UpdateProfileCommand,
  UpdateProfileRequest$,
  UpdateProfileResponse$,
  UpdateTransformer$,
  UpdateTransformerCommand,
  UpdateTransformerRequest$,
  UpdateTransformerResponse$,
  ValidationException,
  ValidationException$,
  WrapFormat,
  WrapOptions$,
  X12AcknowledgmentOptions$,
  X12AdvancedOptions$,
  X12CodeListValidationRule$,
  X12ControlNumbers$,
  X12Delimiters$,
  X12Details$,
  X12ElementLengthValidationRule$,
  X12ElementRequirementValidationRule$,
  X12Envelope$,
  X12FunctionalAcknowledgment,
  X12FunctionalGroupHeaders$,
  X12GS05TimeFormat,
  X12InboundEdiOptions$,
  X12InterchangeControlHeaders$,
  X12OutboundEdiHeaders$,
  X12SplitBy,
  X12SplitOptions$,
  X12TechnicalAcknowledgment,
  X12TransactionSet,
  X12ValidationOptions$,
  X12ValidationRule$,
  X12Version,
  paginateListCapabilities,
  paginateListPartnerships,
  paginateListProfiles,
  paginateListTransformers,
  waitForTransformerJobSucceeded,
  waitUntilTransformerJobSucceeded,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof B2biClient === "function");
assert(typeof B2bi === "function");
// commands
assert(typeof CreateCapabilityCommand === "function");
assert(typeof CreateCapability$ === "object");
assert(typeof CreatePartnershipCommand === "function");
assert(typeof CreatePartnership$ === "object");
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateProfile$ === "object");
assert(typeof CreateStarterMappingTemplateCommand === "function");
assert(typeof CreateStarterMappingTemplate$ === "object");
assert(typeof CreateTransformerCommand === "function");
assert(typeof CreateTransformer$ === "object");
assert(typeof DeleteCapabilityCommand === "function");
assert(typeof DeleteCapability$ === "object");
assert(typeof DeletePartnershipCommand === "function");
assert(typeof DeletePartnership$ === "object");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfile$ === "object");
assert(typeof DeleteTransformerCommand === "function");
assert(typeof DeleteTransformer$ === "object");
assert(typeof GenerateMappingCommand === "function");
assert(typeof GenerateMapping$ === "object");
assert(typeof GetCapabilityCommand === "function");
assert(typeof GetCapability$ === "object");
assert(typeof GetPartnershipCommand === "function");
assert(typeof GetPartnership$ === "object");
assert(typeof GetProfileCommand === "function");
assert(typeof GetProfile$ === "object");
assert(typeof GetTransformerCommand === "function");
assert(typeof GetTransformer$ === "object");
assert(typeof GetTransformerJobCommand === "function");
assert(typeof GetTransformerJob$ === "object");
assert(typeof ListCapabilitiesCommand === "function");
assert(typeof ListCapabilities$ === "object");
assert(typeof ListPartnershipsCommand === "function");
assert(typeof ListPartnerships$ === "object");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListProfiles$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTransformersCommand === "function");
assert(typeof ListTransformers$ === "object");
assert(typeof StartTransformerJobCommand === "function");
assert(typeof StartTransformerJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestConversionCommand === "function");
assert(typeof TestConversion$ === "object");
assert(typeof TestMappingCommand === "function");
assert(typeof TestMapping$ === "object");
assert(typeof TestParsingCommand === "function");
assert(typeof TestParsing$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCapabilityCommand === "function");
assert(typeof UpdateCapability$ === "object");
assert(typeof UpdatePartnershipCommand === "function");
assert(typeof UpdatePartnership$ === "object");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateProfile$ === "object");
assert(typeof UpdateTransformerCommand === "function");
assert(typeof UpdateTransformer$ === "object");
// structural schemas
assert(typeof AdvancedOptions$ === "object");
assert(typeof CapabilityConfiguration$ === "object");
assert(typeof CapabilityOptions$ === "object");
assert(typeof CapabilitySummary$ === "object");
assert(typeof ConversionSource$ === "object");
assert(typeof ConversionTarget$ === "object");
assert(typeof ConversionTargetFormatDetails$ === "object");
assert(typeof CreateCapabilityRequest$ === "object");
assert(typeof CreateCapabilityResponse$ === "object");
assert(typeof CreatePartnershipRequest$ === "object");
assert(typeof CreatePartnershipResponse$ === "object");
assert(typeof CreateProfileRequest$ === "object");
assert(typeof CreateProfileResponse$ === "object");
assert(typeof CreateStarterMappingTemplateRequest$ === "object");
assert(typeof CreateStarterMappingTemplateResponse$ === "object");
assert(typeof CreateTransformerRequest$ === "object");
assert(typeof CreateTransformerResponse$ === "object");
assert(typeof DeleteCapabilityRequest$ === "object");
assert(typeof DeletePartnershipRequest$ === "object");
assert(typeof DeleteProfileRequest$ === "object");
assert(typeof DeleteTransformerRequest$ === "object");
assert(typeof EdiConfiguration$ === "object");
assert(typeof EdiType$ === "object");
assert(typeof FormatOptions$ === "object");
assert(typeof GenerateMappingRequest$ === "object");
assert(typeof GenerateMappingResponse$ === "object");
assert(typeof GetCapabilityRequest$ === "object");
assert(typeof GetCapabilityResponse$ === "object");
assert(typeof GetPartnershipRequest$ === "object");
assert(typeof GetPartnershipResponse$ === "object");
assert(typeof GetProfileRequest$ === "object");
assert(typeof GetProfileResponse$ === "object");
assert(typeof GetTransformerJobRequest$ === "object");
assert(typeof GetTransformerJobResponse$ === "object");
assert(typeof GetTransformerRequest$ === "object");
assert(typeof GetTransformerResponse$ === "object");
assert(typeof InboundEdiOptions$ === "object");
assert(typeof InputConversion$ === "object");
assert(typeof InputFileSource$ === "object");
assert(typeof ListCapabilitiesRequest$ === "object");
assert(typeof ListCapabilitiesResponse$ === "object");
assert(typeof ListPartnershipsRequest$ === "object");
assert(typeof ListPartnershipsResponse$ === "object");
assert(typeof ListProfilesRequest$ === "object");
assert(typeof ListProfilesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTransformersRequest$ === "object");
assert(typeof ListTransformersResponse$ === "object");
assert(typeof Mapping$ === "object");
assert(typeof OutboundEdiOptions$ === "object");
assert(typeof OutputConversion$ === "object");
assert(typeof OutputSampleFileSource$ === "object");
assert(typeof PartnershipSummary$ === "object");
assert(typeof ProfileSummary$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SampleDocumentKeys$ === "object");
assert(typeof SampleDocuments$ === "object");
assert(typeof StartTransformerJobRequest$ === "object");
assert(typeof StartTransformerJobResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TemplateDetails$ === "object");
assert(typeof TestConversionRequest$ === "object");
assert(typeof TestConversionResponse$ === "object");
assert(typeof TestMappingRequest$ === "object");
assert(typeof TestMappingResponse$ === "object");
assert(typeof TestParsingRequest$ === "object");
assert(typeof TestParsingResponse$ === "object");
assert(typeof TransformerSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateCapabilityRequest$ === "object");
assert(typeof UpdateCapabilityResponse$ === "object");
assert(typeof UpdatePartnershipRequest$ === "object");
assert(typeof UpdatePartnershipResponse$ === "object");
assert(typeof UpdateProfileRequest$ === "object");
assert(typeof UpdateProfileResponse$ === "object");
assert(typeof UpdateTransformerRequest$ === "object");
assert(typeof UpdateTransformerResponse$ === "object");
assert(typeof WrapOptions$ === "object");
assert(typeof X12AcknowledgmentOptions$ === "object");
assert(typeof X12AdvancedOptions$ === "object");
assert(typeof X12CodeListValidationRule$ === "object");
assert(typeof X12ControlNumbers$ === "object");
assert(typeof X12Delimiters$ === "object");
assert(typeof X12Details$ === "object");
assert(typeof X12ElementLengthValidationRule$ === "object");
assert(typeof X12ElementRequirementValidationRule$ === "object");
assert(typeof X12Envelope$ === "object");
assert(typeof X12FunctionalGroupHeaders$ === "object");
assert(typeof X12InboundEdiOptions$ === "object");
assert(typeof X12InterchangeControlHeaders$ === "object");
assert(typeof X12OutboundEdiHeaders$ === "object");
assert(typeof X12SplitOptions$ === "object");
assert(typeof X12ValidationOptions$ === "object");
assert(typeof X12ValidationRule$ === "object");
// enums
assert(typeof CapabilityDirection === "object");
assert(typeof CapabilityType === "object");
assert(typeof ConversionSourceFormat === "object");
assert(typeof ConversionTargetFormat === "object");
assert(typeof ElementRequirement === "object");
assert(typeof FileFormat === "object");
assert(typeof FromFormat === "object");
assert(typeof LineTerminator === "object");
assert(typeof Logging === "object");
assert(typeof MappingTemplateLanguage === "object");
assert(typeof MappingType === "object");
assert(typeof ToFormat === "object");
assert(typeof TransformerJobStatus === "object");
assert(typeof TransformerStatus === "object");
assert(typeof WrapFormat === "object");
assert(typeof X12FunctionalAcknowledgment === "object");
assert(typeof X12GS05TimeFormat === "object");
assert(typeof X12SplitBy === "object");
assert(typeof X12TechnicalAcknowledgment === "object");
assert(typeof X12TransactionSet === "object");
assert(typeof X12Version === "object");
// errors
assert(AccessDeniedException.prototype instanceof B2biServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof B2biServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof B2biServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof B2biServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof B2biServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof B2biServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof B2biServiceException);
assert(typeof ValidationException$ === "object");
assert(B2biServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForTransformerJobSucceeded === "function");
assert(typeof waitUntilTransformerJobSucceeded === "function");
// paginators
assert(typeof paginateListCapabilities === "function");
assert(typeof paginateListPartnerships === "function");
assert(typeof paginateListProfiles === "function");
assert(typeof paginateListTransformers === "function");
console.log(`B2bi index test passed.`);

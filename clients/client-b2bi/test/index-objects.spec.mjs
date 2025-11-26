import {
  B2bi,
  B2biClient,
  B2biServiceException,
  CapabilityDirection,
  CapabilityType,
  ConversionSourceFormat,
  ConversionTargetFormat,
  CreateCapabilityCommand,
  CreatePartnershipCommand,
  CreateProfileCommand,
  CreateStarterMappingTemplateCommand,
  CreateTransformerCommand,
  DeleteCapabilityCommand,
  DeletePartnershipCommand,
  DeleteProfileCommand,
  DeleteTransformerCommand,
  ElementRequirement,
  FileFormat,
  FromFormat,
  GenerateMappingCommand,
  GetCapabilityCommand,
  GetPartnershipCommand,
  GetProfileCommand,
  GetTransformerCommand,
  GetTransformerJobCommand,
  LineTerminator,
  ListCapabilitiesCommand,
  ListPartnershipsCommand,
  ListProfilesCommand,
  ListTagsForResourceCommand,
  ListTransformersCommand,
  Logging,
  MappingTemplateLanguage,
  MappingType,
  StartTransformerJobCommand,
  TagResourceCommand,
  TestConversionCommand,
  TestMappingCommand,
  TestParsingCommand,
  ToFormat,
  TransformerJobStatus,
  TransformerStatus,
  UntagResourceCommand,
  UpdateCapabilityCommand,
  UpdatePartnershipCommand,
  UpdateProfileCommand,
  UpdateTransformerCommand,
  WrapFormat,
  X12FunctionalAcknowledgment,
  X12GS05TimeFormat,
  X12SplitBy,
  X12TechnicalAcknowledgment,
  X12TransactionSet,
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
assert(typeof B2biClient === "function")
assert(typeof B2bi === "function")
// commands
assert(typeof CreateCapabilityCommand === "function")
assert(typeof CreatePartnershipCommand === "function")
assert(typeof CreateProfileCommand === "function")
assert(typeof CreateStarterMappingTemplateCommand === "function")
assert(typeof CreateTransformerCommand === "function")
assert(typeof DeleteCapabilityCommand === "function")
assert(typeof DeletePartnershipCommand === "function")
assert(typeof DeleteProfileCommand === "function")
assert(typeof DeleteTransformerCommand === "function")
assert(typeof GenerateMappingCommand === "function")
assert(typeof GetCapabilityCommand === "function")
assert(typeof GetPartnershipCommand === "function")
assert(typeof GetProfileCommand === "function")
assert(typeof GetTransformerCommand === "function")
assert(typeof GetTransformerJobCommand === "function")
assert(typeof ListCapabilitiesCommand === "function")
assert(typeof ListPartnershipsCommand === "function")
assert(typeof ListProfilesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTransformersCommand === "function")
assert(typeof StartTransformerJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestConversionCommand === "function")
assert(typeof TestMappingCommand === "function")
assert(typeof TestParsingCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCapabilityCommand === "function")
assert(typeof UpdatePartnershipCommand === "function")
assert(typeof UpdateProfileCommand === "function")
assert(typeof UpdateTransformerCommand === "function")
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
assert(B2biServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForTransformerJobSucceeded === "function")
assert(typeof waitUntilTransformerJobSucceeded === "function")
// paginators
assert(typeof paginateListCapabilities === "function")
assert(typeof paginateListPartnerships === "function")
assert(typeof paginateListProfiles === "function")
assert(typeof paginateListTransformers === "function")
console.log(`B2bi index test passed.`);

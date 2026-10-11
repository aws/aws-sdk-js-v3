import {
  AccessDeniedException,
  AccessDeniedException$,
  BrandProfileAttributeInput$,
  BrandProfileAttributeOutput$,
  BrandProfileAttributeSummary$,
  BrandProfileAttributeType,
  BrandProfileInfo$,
  ChannelParameters$,
  CodeConfigurationParameters$,
  CodeType,
  ConflictException,
  ConflictException$,
  CreateBrandProfile$,
  CreateBrandProfileAttributes$,
  CreateBrandProfileAttributesCommand,
  CreateBrandProfileAttributesInput$,
  CreateBrandProfileAttributesOutput$,
  CreateBrandProfileCommand,
  CreateBrandProfileFromRegistration$,
  CreateBrandProfileFromRegistrationCommand,
  CreateBrandProfileFromRegistrationInput$,
  CreateBrandProfileFromRegistrationOutput$,
  CreateBrandProfileInput$,
  CreateBrandProfileOutput$,
  CreateNotifyCodeConfiguration$,
  CreateNotifyCodeConfigurationCommand,
  CreateNotifyCodeConfigurationInput$,
  CreateNotifyCodeConfigurationOutput$,
  CreateRegistrationsFromBrandProfile$,
  CreateRegistrationsFromBrandProfileCommand,
  CreateRegistrationsFromBrandProfileInput$,
  CreateRegistrationsFromBrandProfileOutput$,
  DeleteBrandProfile$,
  DeleteBrandProfileAttribute$,
  DeleteBrandProfileAttributeCommand,
  DeleteBrandProfileAttributeInput$,
  DeleteBrandProfileAttributeOutput$,
  DeleteBrandProfileCommand,
  DeleteBrandProfileInput$,
  DeleteBrandProfileOutput$,
  DeleteNotifyCodeConfiguration$,
  DeleteNotifyCodeConfigurationCommand,
  DeleteNotifyCodeConfigurationInput$,
  DeleteNotifyCodeConfigurationOutput$,
  EndUserMessaging,
  EndUserMessagingClient,
  EndUserMessagingServiceException,
  GetBrandProfile$,
  GetBrandProfileAttribute$,
  GetBrandProfileAttributeCommand,
  GetBrandProfileAttributeInput$,
  GetBrandProfileAttributeOutput$,
  GetBrandProfileCommand,
  GetBrandProfileInput$,
  GetBrandProfileOutput$,
  GetJob$,
  GetJobCommand,
  GetJobInput$,
  GetNotifyCodeConfiguration$,
  GetNotifyCodeConfigurationCommand,
  GetNotifyCodeConfigurationInput$,
  GetNotifyCodeConfigurationOutput$,
  InternalServerException,
  InternalServerException$,
  Job$,
  JobResource$,
  JobResourceType,
  JobResult$,
  JobStatus,
  JobSummary$,
  ListBrandProfileAttributes$,
  ListBrandProfileAttributesCommand,
  ListBrandProfileAttributesInput$,
  ListBrandProfileAttributesOutput$,
  ListBrandProfiles$,
  ListBrandProfilesCommand,
  ListBrandProfilesInput$,
  ListBrandProfilesOutput$,
  ListJobs$,
  ListJobsCommand,
  ListJobsInput$,
  ListJobsOutput$,
  ListNotifyCodeConfigurations$,
  ListNotifyCodeConfigurationsCommand,
  ListNotifyCodeConfigurationsInput$,
  ListNotifyCodeConfigurationsOutput$,
  ListRegistrationsFromBrandProfile$,
  ListRegistrationsFromBrandProfileCommand,
  ListRegistrationsFromBrandProfileInput$,
  ListRegistrationsFromBrandProfileOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  NotifyChannel,
  NotifyCodeConfiguration$,
  NotifyParameters$,
  OnAttributeConflict,
  paginateListBrandProfileAttributes,
  paginateListBrandProfiles,
  paginateListJobs,
  paginateListNotifyCodeConfigurations,
  paginateListRegistrationsFromBrandProfile,
  RegistrationAssociationSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SendNotifyCodeVerification$,
  SendNotifyCodeVerificationCommand,
  SendNotifyCodeVerificationInput$,
  SendNotifyCodeVerificationOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Status,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TextParameters$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateBrandProfile$,
  UpdateBrandProfileAttribute$,
  UpdateBrandProfileAttributeCommand,
  UpdateBrandProfileAttributeInput$,
  UpdateBrandProfileAttributeOutput$,
  UpdateBrandProfileCommand,
  UpdateBrandProfileFromRegistration$,
  UpdateBrandProfileFromRegistrationCommand,
  UpdateBrandProfileFromRegistrationInput$,
  UpdateBrandProfileFromRegistrationOutput$,
  UpdateBrandProfileInput$,
  UpdateBrandProfileOutput$,
  UpdateChannelParameters$,
  UpdateCodeConfigurationParameters$,
  UpdateNotifyCodeConfiguration$,
  UpdateNotifyCodeConfigurationCommand,
  UpdateNotifyCodeConfigurationInput$,
  UpdateNotifyCodeConfigurationOutput$,
  UpdateNotifyParameters$,
  UpdateRegistrationsFromBrandProfile$,
  UpdateRegistrationsFromBrandProfileCommand,
  UpdateRegistrationsFromBrandProfileInput$,
  UpdateRegistrationsFromBrandProfileOutput$,
  UpdateTextParameters$,
  UpdateVoiceParameters$,
  UpdateWhatsAppParameters$,
  ValidateNotifyCodeVerification$,
  ValidateNotifyCodeVerificationCommand,
  ValidateNotifyCodeVerificationInput$,
  ValidateNotifyCodeVerificationOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VerificationStatus,
  VoiceMessageBodyTextType,
  VoiceParameters$,
  waitForBrandProfileActive,
  waitForJobSuccess,
  waitUntilBrandProfileActive,
  waitUntilJobSuccess,
  WhatsAppParameters$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EndUserMessagingClient === "function");
assert(typeof EndUserMessaging === "function");
// commands
assert(typeof CreateBrandProfileCommand === "function");
assert(typeof CreateBrandProfile$ === "object");
assert(typeof CreateBrandProfileAttributesCommand === "function");
assert(typeof CreateBrandProfileAttributes$ === "object");
assert(typeof CreateBrandProfileFromRegistrationCommand === "function");
assert(typeof CreateBrandProfileFromRegistration$ === "object");
assert(typeof CreateNotifyCodeConfigurationCommand === "function");
assert(typeof CreateNotifyCodeConfiguration$ === "object");
assert(typeof CreateRegistrationsFromBrandProfileCommand === "function");
assert(typeof CreateRegistrationsFromBrandProfile$ === "object");
assert(typeof DeleteBrandProfileCommand === "function");
assert(typeof DeleteBrandProfile$ === "object");
assert(typeof DeleteBrandProfileAttributeCommand === "function");
assert(typeof DeleteBrandProfileAttribute$ === "object");
assert(typeof DeleteNotifyCodeConfigurationCommand === "function");
assert(typeof DeleteNotifyCodeConfiguration$ === "object");
assert(typeof GetBrandProfileCommand === "function");
assert(typeof GetBrandProfile$ === "object");
assert(typeof GetBrandProfileAttributeCommand === "function");
assert(typeof GetBrandProfileAttribute$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetNotifyCodeConfigurationCommand === "function");
assert(typeof GetNotifyCodeConfiguration$ === "object");
assert(typeof ListBrandProfileAttributesCommand === "function");
assert(typeof ListBrandProfileAttributes$ === "object");
assert(typeof ListBrandProfilesCommand === "function");
assert(typeof ListBrandProfiles$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListNotifyCodeConfigurationsCommand === "function");
assert(typeof ListNotifyCodeConfigurations$ === "object");
assert(typeof ListRegistrationsFromBrandProfileCommand === "function");
assert(typeof ListRegistrationsFromBrandProfile$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SendNotifyCodeVerificationCommand === "function");
assert(typeof SendNotifyCodeVerification$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBrandProfileCommand === "function");
assert(typeof UpdateBrandProfile$ === "object");
assert(typeof UpdateBrandProfileAttributeCommand === "function");
assert(typeof UpdateBrandProfileAttribute$ === "object");
assert(typeof UpdateBrandProfileFromRegistrationCommand === "function");
assert(typeof UpdateBrandProfileFromRegistration$ === "object");
assert(typeof UpdateNotifyCodeConfigurationCommand === "function");
assert(typeof UpdateNotifyCodeConfiguration$ === "object");
assert(typeof UpdateRegistrationsFromBrandProfileCommand === "function");
assert(typeof UpdateRegistrationsFromBrandProfile$ === "object");
assert(typeof ValidateNotifyCodeVerificationCommand === "function");
assert(typeof ValidateNotifyCodeVerification$ === "object");
// structural schemas
assert(typeof BrandProfileAttributeInput$ === "object");
assert(typeof BrandProfileAttributeOutput$ === "object");
assert(typeof BrandProfileAttributeSummary$ === "object");
assert(typeof BrandProfileInfo$ === "object");
assert(typeof ChannelParameters$ === "object");
assert(typeof CodeConfigurationParameters$ === "object");
assert(typeof CreateBrandProfileAttributesInput$ === "object");
assert(typeof CreateBrandProfileAttributesOutput$ === "object");
assert(typeof CreateBrandProfileFromRegistrationInput$ === "object");
assert(typeof CreateBrandProfileFromRegistrationOutput$ === "object");
assert(typeof CreateBrandProfileInput$ === "object");
assert(typeof CreateBrandProfileOutput$ === "object");
assert(typeof CreateNotifyCodeConfigurationInput$ === "object");
assert(typeof CreateNotifyCodeConfigurationOutput$ === "object");
assert(typeof CreateRegistrationsFromBrandProfileInput$ === "object");
assert(typeof CreateRegistrationsFromBrandProfileOutput$ === "object");
assert(typeof DeleteBrandProfileAttributeInput$ === "object");
assert(typeof DeleteBrandProfileAttributeOutput$ === "object");
assert(typeof DeleteBrandProfileInput$ === "object");
assert(typeof DeleteBrandProfileOutput$ === "object");
assert(typeof DeleteNotifyCodeConfigurationInput$ === "object");
assert(typeof DeleteNotifyCodeConfigurationOutput$ === "object");
assert(typeof GetBrandProfileAttributeInput$ === "object");
assert(typeof GetBrandProfileAttributeOutput$ === "object");
assert(typeof GetBrandProfileInput$ === "object");
assert(typeof GetBrandProfileOutput$ === "object");
assert(typeof GetJobInput$ === "object");
assert(typeof GetNotifyCodeConfigurationInput$ === "object");
assert(typeof GetNotifyCodeConfigurationOutput$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobResource$ === "object");
assert(typeof JobResult$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof ListBrandProfileAttributesInput$ === "object");
assert(typeof ListBrandProfileAttributesOutput$ === "object");
assert(typeof ListBrandProfilesInput$ === "object");
assert(typeof ListBrandProfilesOutput$ === "object");
assert(typeof ListJobsInput$ === "object");
assert(typeof ListJobsOutput$ === "object");
assert(typeof ListNotifyCodeConfigurationsInput$ === "object");
assert(typeof ListNotifyCodeConfigurationsOutput$ === "object");
assert(typeof ListRegistrationsFromBrandProfileInput$ === "object");
assert(typeof ListRegistrationsFromBrandProfileOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof NotifyCodeConfiguration$ === "object");
assert(typeof NotifyParameters$ === "object");
assert(typeof RegistrationAssociationSummary$ === "object");
assert(typeof SendNotifyCodeVerificationInput$ === "object");
assert(typeof SendNotifyCodeVerificationOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TextParameters$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateBrandProfileAttributeInput$ === "object");
assert(typeof UpdateBrandProfileAttributeOutput$ === "object");
assert(typeof UpdateBrandProfileFromRegistrationInput$ === "object");
assert(typeof UpdateBrandProfileFromRegistrationOutput$ === "object");
assert(typeof UpdateBrandProfileInput$ === "object");
assert(typeof UpdateBrandProfileOutput$ === "object");
assert(typeof UpdateChannelParameters$ === "object");
assert(typeof UpdateCodeConfigurationParameters$ === "object");
assert(typeof UpdateNotifyCodeConfigurationInput$ === "object");
assert(typeof UpdateNotifyCodeConfigurationOutput$ === "object");
assert(typeof UpdateNotifyParameters$ === "object");
assert(typeof UpdateRegistrationsFromBrandProfileInput$ === "object");
assert(typeof UpdateRegistrationsFromBrandProfileOutput$ === "object");
assert(typeof UpdateTextParameters$ === "object");
assert(typeof UpdateVoiceParameters$ === "object");
assert(typeof UpdateWhatsAppParameters$ === "object");
assert(typeof ValidateNotifyCodeVerificationInput$ === "object");
assert(typeof ValidateNotifyCodeVerificationOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VoiceParameters$ === "object");
assert(typeof WhatsAppParameters$ === "object");
// enums
assert(typeof BrandProfileAttributeType === "object");
assert(typeof CodeType === "object");
assert(typeof JobResourceType === "object");
assert(typeof JobStatus === "object");
assert(typeof NotifyChannel === "object");
assert(typeof OnAttributeConflict === "object");
assert(typeof Status === "object");
assert(typeof VerificationStatus === "object");
assert(typeof VoiceMessageBodyTextType === "object");
// errors
assert(AccessDeniedException.prototype instanceof EndUserMessagingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof EndUserMessagingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof EndUserMessagingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EndUserMessagingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof EndUserMessagingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof EndUserMessagingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof EndUserMessagingServiceException);
assert(typeof ValidationException$ === "object");
assert(EndUserMessagingServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForBrandProfileActive === "function");
assert(typeof waitForJobSuccess === "function");
assert(typeof waitUntilBrandProfileActive === "function");
assert(typeof waitUntilJobSuccess === "function");
// paginators
assert(typeof paginateListBrandProfileAttributes === "function");
assert(typeof paginateListBrandProfiles === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListNotifyCodeConfigurations === "function");
assert(typeof paginateListRegistrationsFromBrandProfile === "function");
console.log(`EndUserMessaging index test passed.`);

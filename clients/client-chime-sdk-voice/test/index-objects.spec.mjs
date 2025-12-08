import {
  AccessDeniedException,
  AlexaSkillStatus,
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  BadRequestException,
  BatchDeletePhoneNumberCommand,
  BatchUpdatePhoneNumberCommand,
  CallLegType,
  CallingNameStatus,
  Capability,
  ChimeSDKVoice,
  ChimeSDKVoiceClient,
  ChimeSDKVoiceServiceException,
  ConflictException,
  ContactCenterSystemType,
  CreatePhoneNumberOrderCommand,
  CreateProxySessionCommand,
  CreateSipMediaApplicationCallCommand,
  CreateSipMediaApplicationCommand,
  CreateSipRuleCommand,
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorGroupCommand,
  CreateVoiceProfileCommand,
  CreateVoiceProfileDomainCommand,
  DeletePhoneNumberCommand,
  DeleteProxySessionCommand,
  DeleteSipMediaApplicationCommand,
  DeleteSipRuleCommand,
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  DeleteVoiceConnectorExternalSystemsConfigurationCommand,
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorProxyCommand,
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DeleteVoiceProfileCommand,
  DeleteVoiceProfileDomainCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  ErrorCode,
  ForbiddenException,
  GeoMatchLevel,
  GetGlobalSettingsCommand,
  GetPhoneNumberCommand,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberSettingsCommand,
  GetProxySessionCommand,
  GetSipMediaApplicationAlexaSkillConfigurationCommand,
  GetSipMediaApplicationCommand,
  GetSipMediaApplicationLoggingConfigurationCommand,
  GetSipRuleCommand,
  GetSpeakerSearchTaskCommand,
  GetVoiceConnectorCommand,
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
  GetVoiceConnectorExternalSystemsConfigurationCommand,
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorProxyCommand,
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationHealthCommand,
  GetVoiceProfileCommand,
  GetVoiceProfileDomainCommand,
  GetVoiceToneAnalysisTaskCommand,
  GoneException,
  LanguageCode,
  ListAvailableVoiceConnectorRegionsCommand,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumbersCommand,
  ListProxySessionsCommand,
  ListSipMediaApplicationsCommand,
  ListSipRulesCommand,
  ListSupportedPhoneNumberCountriesCommand,
  ListTagsForResourceCommand,
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceConnectorsCommand,
  ListVoiceProfileDomainsCommand,
  ListVoiceProfilesCommand,
  NetworkType,
  NotFoundException,
  NotificationTarget,
  NumberSelectionBehavior,
  OrderedPhoneNumberStatus,
  OriginationRouteProtocol,
  PhoneNumberAssociationName,
  PhoneNumberOrderStatus,
  PhoneNumberOrderType,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  ProxySessionStatus,
  PutSipMediaApplicationAlexaSkillConfigurationCommand,
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
  PutVoiceConnectorExternalSystemsConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorProxyCommand,
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCredentialsCommand,
  ResourceLimitExceededException,
  RestorePhoneNumberCommand,
  SearchAvailablePhoneNumbersCommand,
  ServiceFailureException,
  ServiceUnavailableException,
  SessionBorderControllerType,
  SipRuleTriggerType,
  StartSpeakerSearchTaskCommand,
  StartVoiceToneAnalysisTaskCommand,
  StopSpeakerSearchTaskCommand,
  StopVoiceToneAnalysisTaskCommand,
  TagResourceCommand,
  ThrottledClientException,
  UnauthorizedClientException,
  UnprocessableEntityException,
  UntagResourceCommand,
  UpdateGlobalSettingsCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberSettingsCommand,
  UpdateProxySessionCommand,
  UpdateSipMediaApplicationCallCommand,
  UpdateSipMediaApplicationCommand,
  UpdateSipRuleCommand,
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorGroupCommand,
  UpdateVoiceProfileCommand,
  UpdateVoiceProfileDomainCommand,
  ValidateE911AddressCommand,
  VoiceConnectorAwsRegion,
  VoiceConnectorIntegrationType,
  paginateListPhoneNumberOrders,
  paginateListPhoneNumbers,
  paginateListProxySessions,
  paginateListSipMediaApplications,
  paginateListSipRules,
  paginateListVoiceConnectorGroups,
  paginateListVoiceConnectors,
  paginateListVoiceProfileDomains,
  paginateListVoiceProfiles,
  paginateSearchAvailablePhoneNumbers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeSDKVoiceClient === "function");
assert(typeof ChimeSDKVoice === "function");
// commands
assert(typeof AssociatePhoneNumbersWithVoiceConnectorCommand === "function");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorGroupCommand === "function");
assert(typeof BatchDeletePhoneNumberCommand === "function");
assert(typeof BatchUpdatePhoneNumberCommand === "function");
assert(typeof CreatePhoneNumberOrderCommand === "function");
assert(typeof CreateProxySessionCommand === "function");
assert(typeof CreateSipMediaApplicationCommand === "function");
assert(typeof CreateSipMediaApplicationCallCommand === "function");
assert(typeof CreateSipRuleCommand === "function");
assert(typeof CreateVoiceConnectorCommand === "function");
assert(typeof CreateVoiceConnectorGroupCommand === "function");
assert(typeof CreateVoiceProfileCommand === "function");
assert(typeof CreateVoiceProfileDomainCommand === "function");
assert(typeof DeletePhoneNumberCommand === "function");
assert(typeof DeleteProxySessionCommand === "function");
assert(typeof DeleteSipMediaApplicationCommand === "function");
assert(typeof DeleteSipRuleCommand === "function");
assert(typeof DeleteVoiceConnectorCommand === "function");
assert(typeof DeleteVoiceConnectorEmergencyCallingConfigurationCommand === "function");
assert(typeof DeleteVoiceConnectorExternalSystemsConfigurationCommand === "function");
assert(typeof DeleteVoiceConnectorGroupCommand === "function");
assert(typeof DeleteVoiceConnectorOriginationCommand === "function");
assert(typeof DeleteVoiceConnectorProxyCommand === "function");
assert(typeof DeleteVoiceConnectorStreamingConfigurationCommand === "function");
assert(typeof DeleteVoiceConnectorTerminationCommand === "function");
assert(typeof DeleteVoiceConnectorTerminationCredentialsCommand === "function");
assert(typeof DeleteVoiceProfileCommand === "function");
assert(typeof DeleteVoiceProfileDomainCommand === "function");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorCommand === "function");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorGroupCommand === "function");
assert(typeof GetGlobalSettingsCommand === "function");
assert(typeof GetPhoneNumberCommand === "function");
assert(typeof GetPhoneNumberOrderCommand === "function");
assert(typeof GetPhoneNumberSettingsCommand === "function");
assert(typeof GetProxySessionCommand === "function");
assert(typeof GetSipMediaApplicationCommand === "function");
assert(typeof GetSipMediaApplicationAlexaSkillConfigurationCommand === "function");
assert(typeof GetSipMediaApplicationLoggingConfigurationCommand === "function");
assert(typeof GetSipRuleCommand === "function");
assert(typeof GetSpeakerSearchTaskCommand === "function");
assert(typeof GetVoiceConnectorCommand === "function");
assert(typeof GetVoiceConnectorEmergencyCallingConfigurationCommand === "function");
assert(typeof GetVoiceConnectorExternalSystemsConfigurationCommand === "function");
assert(typeof GetVoiceConnectorGroupCommand === "function");
assert(typeof GetVoiceConnectorLoggingConfigurationCommand === "function");
assert(typeof GetVoiceConnectorOriginationCommand === "function");
assert(typeof GetVoiceConnectorProxyCommand === "function");
assert(typeof GetVoiceConnectorStreamingConfigurationCommand === "function");
assert(typeof GetVoiceConnectorTerminationCommand === "function");
assert(typeof GetVoiceConnectorTerminationHealthCommand === "function");
assert(typeof GetVoiceProfileCommand === "function");
assert(typeof GetVoiceProfileDomainCommand === "function");
assert(typeof GetVoiceToneAnalysisTaskCommand === "function");
assert(typeof ListAvailableVoiceConnectorRegionsCommand === "function");
assert(typeof ListPhoneNumberOrdersCommand === "function");
assert(typeof ListPhoneNumbersCommand === "function");
assert(typeof ListProxySessionsCommand === "function");
assert(typeof ListSipMediaApplicationsCommand === "function");
assert(typeof ListSipRulesCommand === "function");
assert(typeof ListSupportedPhoneNumberCountriesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVoiceConnectorGroupsCommand === "function");
assert(typeof ListVoiceConnectorsCommand === "function");
assert(typeof ListVoiceConnectorTerminationCredentialsCommand === "function");
assert(typeof ListVoiceProfileDomainsCommand === "function");
assert(typeof ListVoiceProfilesCommand === "function");
assert(typeof PutSipMediaApplicationAlexaSkillConfigurationCommand === "function");
assert(typeof PutSipMediaApplicationLoggingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorEmergencyCallingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorExternalSystemsConfigurationCommand === "function");
assert(typeof PutVoiceConnectorLoggingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorOriginationCommand === "function");
assert(typeof PutVoiceConnectorProxyCommand === "function");
assert(typeof PutVoiceConnectorStreamingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorTerminationCommand === "function");
assert(typeof PutVoiceConnectorTerminationCredentialsCommand === "function");
assert(typeof RestorePhoneNumberCommand === "function");
assert(typeof SearchAvailablePhoneNumbersCommand === "function");
assert(typeof StartSpeakerSearchTaskCommand === "function");
assert(typeof StartVoiceToneAnalysisTaskCommand === "function");
assert(typeof StopSpeakerSearchTaskCommand === "function");
assert(typeof StopVoiceToneAnalysisTaskCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePhoneNumberSettingsCommand === "function");
assert(typeof UpdateProxySessionCommand === "function");
assert(typeof UpdateSipMediaApplicationCommand === "function");
assert(typeof UpdateSipMediaApplicationCallCommand === "function");
assert(typeof UpdateSipRuleCommand === "function");
assert(typeof UpdateVoiceConnectorCommand === "function");
assert(typeof UpdateVoiceConnectorGroupCommand === "function");
assert(typeof UpdateVoiceProfileCommand === "function");
assert(typeof UpdateVoiceProfileDomainCommand === "function");
assert(typeof ValidateE911AddressCommand === "function");
// enums
assert(typeof AlexaSkillStatus === "object");
assert(typeof CallingNameStatus === "object");
assert(typeof CallLegType === "object");
assert(typeof Capability === "object");
assert(typeof ContactCenterSystemType === "object");
assert(typeof ErrorCode === "object");
assert(typeof GeoMatchLevel === "object");
assert(typeof LanguageCode === "object");
assert(typeof NetworkType === "object");
assert(typeof NotificationTarget === "object");
assert(typeof NumberSelectionBehavior === "object");
assert(typeof OrderedPhoneNumberStatus === "object");
assert(typeof OriginationRouteProtocol === "object");
assert(typeof PhoneNumberAssociationName === "object");
assert(typeof PhoneNumberOrderStatus === "object");
assert(typeof PhoneNumberOrderType === "object");
assert(typeof PhoneNumberProductType === "object");
assert(typeof PhoneNumberStatus === "object");
assert(typeof PhoneNumberType === "object");
assert(typeof ProxySessionStatus === "object");
assert(typeof SessionBorderControllerType === "object");
assert(typeof SipRuleTriggerType === "object");
assert(typeof VoiceConnectorAwsRegion === "object");
assert(typeof VoiceConnectorIntegrationType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ChimeSDKVoiceServiceException);
assert(BadRequestException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ConflictException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ForbiddenException.prototype instanceof ChimeSDKVoiceServiceException);
assert(GoneException.prototype instanceof ChimeSDKVoiceServiceException);
assert(NotFoundException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ResourceLimitExceededException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ServiceFailureException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ServiceUnavailableException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ThrottledClientException.prototype instanceof ChimeSDKVoiceServiceException);
assert(UnauthorizedClientException.prototype instanceof ChimeSDKVoiceServiceException);
assert(UnprocessableEntityException.prototype instanceof ChimeSDKVoiceServiceException);
assert(ChimeSDKVoiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPhoneNumberOrders === "function");
assert(typeof paginateListPhoneNumbers === "function");
assert(typeof paginateListProxySessions === "function");
assert(typeof paginateListSipMediaApplications === "function");
assert(typeof paginateListSipRules === "function");
assert(typeof paginateListVoiceConnectorGroups === "function");
assert(typeof paginateListVoiceConnectors === "function");
assert(typeof paginateListVoiceProfileDomains === "function");
assert(typeof paginateListVoiceProfiles === "function");
assert(typeof paginateSearchAvailablePhoneNumbers === "function");
console.log(`ChimeSDKVoice index test passed.`);

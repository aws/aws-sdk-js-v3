import {
  AccessDeniedException,
  AccessDeniedException$,
  Address$,
  AlexaSkillStatus,
  AssociatePhoneNumbersWithVoiceConnector$,
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroup$,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest$,
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse$,
  AssociatePhoneNumbersWithVoiceConnectorRequest$,
  AssociatePhoneNumbersWithVoiceConnectorResponse$,
  BadRequestException,
  BadRequestException$,
  BatchDeletePhoneNumber$,
  BatchDeletePhoneNumberCommand,
  BatchDeletePhoneNumberRequest$,
  BatchDeletePhoneNumberResponse$,
  BatchUpdatePhoneNumber$,
  BatchUpdatePhoneNumberCommand,
  BatchUpdatePhoneNumberRequest$,
  BatchUpdatePhoneNumberResponse$,
  CallDetails$,
  CallLegType,
  CallingNameStatus,
  CandidateAddress$,
  Capability,
  ChimeSDKVoice,
  ChimeSDKVoiceClient,
  ChimeSDKVoiceServiceException,
  ConflictException,
  ConflictException$,
  ContactCenterSystemType,
  CreatePhoneNumberOrder$,
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderRequest$,
  CreatePhoneNumberOrderResponse$,
  CreateProxySession$,
  CreateProxySessionCommand,
  CreateProxySessionRequest$,
  CreateProxySessionResponse$,
  CreateSipMediaApplication$,
  CreateSipMediaApplicationCall$,
  CreateSipMediaApplicationCallCommand,
  CreateSipMediaApplicationCallRequest$,
  CreateSipMediaApplicationCallResponse$,
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationRequest$,
  CreateSipMediaApplicationResponse$,
  CreateSipRule$,
  CreateSipRuleCommand,
  CreateSipRuleRequest$,
  CreateSipRuleResponse$,
  CreateVoiceConnector$,
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorGroup$,
  CreateVoiceConnectorGroupCommand,
  CreateVoiceConnectorGroupRequest$,
  CreateVoiceConnectorGroupResponse$,
  CreateVoiceConnectorRequest$,
  CreateVoiceConnectorResponse$,
  CreateVoiceProfile$,
  CreateVoiceProfileCommand,
  CreateVoiceProfileDomain$,
  CreateVoiceProfileDomainCommand,
  CreateVoiceProfileDomainRequest$,
  CreateVoiceProfileDomainResponse$,
  CreateVoiceProfileRequest$,
  CreateVoiceProfileResponse$,
  Credential$,
  DNISEmergencyCallingConfiguration$,
  DeletePhoneNumber$,
  DeletePhoneNumberCommand,
  DeletePhoneNumberRequest$,
  DeleteProxySession$,
  DeleteProxySessionCommand,
  DeleteProxySessionRequest$,
  DeleteSipMediaApplication$,
  DeleteSipMediaApplicationCommand,
  DeleteSipMediaApplicationRequest$,
  DeleteSipRule$,
  DeleteSipRuleCommand,
  DeleteSipRuleRequest$,
  DeleteVoiceConnector$,
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorEmergencyCallingConfiguration$,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  DeleteVoiceConnectorEmergencyCallingConfigurationRequest$,
  DeleteVoiceConnectorExternalSystemsConfiguration$,
  DeleteVoiceConnectorExternalSystemsConfigurationCommand,
  DeleteVoiceConnectorExternalSystemsConfigurationRequest$,
  DeleteVoiceConnectorGroup$,
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorGroupRequest$,
  DeleteVoiceConnectorOrigination$,
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorOriginationRequest$,
  DeleteVoiceConnectorProxy$,
  DeleteVoiceConnectorProxyCommand,
  DeleteVoiceConnectorProxyRequest$,
  DeleteVoiceConnectorRequest$,
  DeleteVoiceConnectorStreamingConfiguration$,
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorStreamingConfigurationRequest$,
  DeleteVoiceConnectorTermination$,
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCredentials$,
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DeleteVoiceConnectorTerminationCredentialsRequest$,
  DeleteVoiceConnectorTerminationRequest$,
  DeleteVoiceProfile$,
  DeleteVoiceProfileCommand,
  DeleteVoiceProfileDomain$,
  DeleteVoiceProfileDomainCommand,
  DeleteVoiceProfileDomainRequest$,
  DeleteVoiceProfileRequest$,
  DisassociatePhoneNumbersFromVoiceConnector$,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroup$,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest$,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse$,
  DisassociatePhoneNumbersFromVoiceConnectorRequest$,
  DisassociatePhoneNumbersFromVoiceConnectorResponse$,
  EmergencyCallingConfiguration$,
  ErrorCode,
  ExternalSystemsConfiguration$,
  ForbiddenException,
  ForbiddenException$,
  GeoMatchLevel,
  GeoMatchParams$,
  GetGlobalSettings$,
  GetGlobalSettingsCommand,
  GetGlobalSettingsResponse$,
  GetPhoneNumber$,
  GetPhoneNumberCommand,
  GetPhoneNumberOrder$,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberOrderRequest$,
  GetPhoneNumberOrderResponse$,
  GetPhoneNumberRequest$,
  GetPhoneNumberResponse$,
  GetPhoneNumberSettings$,
  GetPhoneNumberSettingsCommand,
  GetPhoneNumberSettingsResponse$,
  GetProxySession$,
  GetProxySessionCommand,
  GetProxySessionRequest$,
  GetProxySessionResponse$,
  GetSipMediaApplication$,
  GetSipMediaApplicationAlexaSkillConfiguration$,
  GetSipMediaApplicationAlexaSkillConfigurationCommand,
  GetSipMediaApplicationAlexaSkillConfigurationRequest$,
  GetSipMediaApplicationAlexaSkillConfigurationResponse$,
  GetSipMediaApplicationCommand,
  GetSipMediaApplicationLoggingConfiguration$,
  GetSipMediaApplicationLoggingConfigurationCommand,
  GetSipMediaApplicationLoggingConfigurationRequest$,
  GetSipMediaApplicationLoggingConfigurationResponse$,
  GetSipMediaApplicationRequest$,
  GetSipMediaApplicationResponse$,
  GetSipRule$,
  GetSipRuleCommand,
  GetSipRuleRequest$,
  GetSipRuleResponse$,
  GetSpeakerSearchTask$,
  GetSpeakerSearchTaskCommand,
  GetSpeakerSearchTaskRequest$,
  GetSpeakerSearchTaskResponse$,
  GetVoiceConnector$,
  GetVoiceConnectorCommand,
  GetVoiceConnectorEmergencyCallingConfiguration$,
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
  GetVoiceConnectorEmergencyCallingConfigurationRequest$,
  GetVoiceConnectorEmergencyCallingConfigurationResponse$,
  GetVoiceConnectorExternalSystemsConfiguration$,
  GetVoiceConnectorExternalSystemsConfigurationCommand,
  GetVoiceConnectorExternalSystemsConfigurationRequest$,
  GetVoiceConnectorExternalSystemsConfigurationResponse$,
  GetVoiceConnectorGroup$,
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorGroupRequest$,
  GetVoiceConnectorGroupResponse$,
  GetVoiceConnectorLoggingConfiguration$,
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorLoggingConfigurationRequest$,
  GetVoiceConnectorLoggingConfigurationResponse$,
  GetVoiceConnectorOrigination$,
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorOriginationRequest$,
  GetVoiceConnectorOriginationResponse$,
  GetVoiceConnectorProxy$,
  GetVoiceConnectorProxyCommand,
  GetVoiceConnectorProxyRequest$,
  GetVoiceConnectorProxyResponse$,
  GetVoiceConnectorRequest$,
  GetVoiceConnectorResponse$,
  GetVoiceConnectorStreamingConfiguration$,
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorStreamingConfigurationRequest$,
  GetVoiceConnectorStreamingConfigurationResponse$,
  GetVoiceConnectorTermination$,
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationHealth$,
  GetVoiceConnectorTerminationHealthCommand,
  GetVoiceConnectorTerminationHealthRequest$,
  GetVoiceConnectorTerminationHealthResponse$,
  GetVoiceConnectorTerminationRequest$,
  GetVoiceConnectorTerminationResponse$,
  GetVoiceProfile$,
  GetVoiceProfileCommand,
  GetVoiceProfileDomain$,
  GetVoiceProfileDomainCommand,
  GetVoiceProfileDomainRequest$,
  GetVoiceProfileDomainResponse$,
  GetVoiceProfileRequest$,
  GetVoiceProfileResponse$,
  GetVoiceToneAnalysisTask$,
  GetVoiceToneAnalysisTaskCommand,
  GetVoiceToneAnalysisTaskRequest$,
  GetVoiceToneAnalysisTaskResponse$,
  GoneException,
  GoneException$,
  LanguageCode,
  ListAvailableVoiceConnectorRegions$,
  ListAvailableVoiceConnectorRegionsCommand,
  ListAvailableVoiceConnectorRegionsResponse$,
  ListPhoneNumberOrders$,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersRequest$,
  ListPhoneNumberOrdersResponse$,
  ListPhoneNumbers$,
  ListPhoneNumbersCommand,
  ListPhoneNumbersRequest$,
  ListPhoneNumbersResponse$,
  ListProxySessions$,
  ListProxySessionsCommand,
  ListProxySessionsRequest$,
  ListProxySessionsResponse$,
  ListSipMediaApplications$,
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsRequest$,
  ListSipMediaApplicationsResponse$,
  ListSipRules$,
  ListSipRulesCommand,
  ListSipRulesRequest$,
  ListSipRulesResponse$,
  ListSupportedPhoneNumberCountries$,
  ListSupportedPhoneNumberCountriesCommand,
  ListSupportedPhoneNumberCountriesRequest$,
  ListSupportedPhoneNumberCountriesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVoiceConnectorGroups$,
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsRequest$,
  ListVoiceConnectorGroupsResponse$,
  ListVoiceConnectorTerminationCredentials$,
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceConnectorTerminationCredentialsRequest$,
  ListVoiceConnectorTerminationCredentialsResponse$,
  ListVoiceConnectors$,
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsRequest$,
  ListVoiceConnectorsResponse$,
  ListVoiceProfileDomains$,
  ListVoiceProfileDomainsCommand,
  ListVoiceProfileDomainsRequest$,
  ListVoiceProfileDomainsResponse$,
  ListVoiceProfiles$,
  ListVoiceProfilesCommand,
  ListVoiceProfilesRequest$,
  ListVoiceProfilesResponse$,
  LoggingConfiguration$,
  MediaInsightsConfiguration$,
  NetworkType,
  NotFoundException,
  NotFoundException$,
  NotificationTarget,
  NumberSelectionBehavior,
  OrderedPhoneNumber$,
  OrderedPhoneNumberStatus,
  Origination$,
  OriginationRoute$,
  OriginationRouteProtocol,
  Participant$,
  PhoneNumber$,
  PhoneNumberAssociation$,
  PhoneNumberAssociationName,
  PhoneNumberCapabilities$,
  PhoneNumberCountry$,
  PhoneNumberError$,
  PhoneNumberOrder$,
  PhoneNumberOrderStatus,
  PhoneNumberOrderType,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  Proxy$,
  ProxySession$,
  ProxySessionStatus,
  PutSipMediaApplicationAlexaSkillConfiguration$,
  PutSipMediaApplicationAlexaSkillConfigurationCommand,
  PutSipMediaApplicationAlexaSkillConfigurationRequest$,
  PutSipMediaApplicationAlexaSkillConfigurationResponse$,
  PutSipMediaApplicationLoggingConfiguration$,
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutSipMediaApplicationLoggingConfigurationRequest$,
  PutSipMediaApplicationLoggingConfigurationResponse$,
  PutVoiceConnectorEmergencyCallingConfiguration$,
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
  PutVoiceConnectorEmergencyCallingConfigurationRequest$,
  PutVoiceConnectorEmergencyCallingConfigurationResponse$,
  PutVoiceConnectorExternalSystemsConfiguration$,
  PutVoiceConnectorExternalSystemsConfigurationCommand,
  PutVoiceConnectorExternalSystemsConfigurationRequest$,
  PutVoiceConnectorExternalSystemsConfigurationResponse$,
  PutVoiceConnectorLoggingConfiguration$,
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationRequest$,
  PutVoiceConnectorLoggingConfigurationResponse$,
  PutVoiceConnectorOrigination$,
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorOriginationRequest$,
  PutVoiceConnectorOriginationResponse$,
  PutVoiceConnectorProxy$,
  PutVoiceConnectorProxyCommand,
  PutVoiceConnectorProxyRequest$,
  PutVoiceConnectorProxyResponse$,
  PutVoiceConnectorStreamingConfiguration$,
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorStreamingConfigurationRequest$,
  PutVoiceConnectorStreamingConfigurationResponse$,
  PutVoiceConnectorTermination$,
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCredentials$,
  PutVoiceConnectorTerminationCredentialsCommand,
  PutVoiceConnectorTerminationCredentialsRequest$,
  PutVoiceConnectorTerminationRequest$,
  PutVoiceConnectorTerminationResponse$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  RestorePhoneNumber$,
  RestorePhoneNumberCommand,
  RestorePhoneNumberRequest$,
  RestorePhoneNumberResponse$,
  SearchAvailablePhoneNumbers$,
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersRequest$,
  SearchAvailablePhoneNumbersResponse$,
  ServerSideEncryptionConfiguration$,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SessionBorderControllerType,
  SipMediaApplication$,
  SipMediaApplicationAlexaSkillConfiguration$,
  SipMediaApplicationCall$,
  SipMediaApplicationEndpoint$,
  SipMediaApplicationLoggingConfiguration$,
  SipRule$,
  SipRuleTargetApplication$,
  SipRuleTriggerType,
  SpeakerSearchDetails$,
  SpeakerSearchResult$,
  SpeakerSearchTask$,
  StartSpeakerSearchTask$,
  StartSpeakerSearchTaskCommand,
  StartSpeakerSearchTaskRequest$,
  StartSpeakerSearchTaskResponse$,
  StartVoiceToneAnalysisTask$,
  StartVoiceToneAnalysisTaskCommand,
  StartVoiceToneAnalysisTaskRequest$,
  StartVoiceToneAnalysisTaskResponse$,
  StopSpeakerSearchTask$,
  StopSpeakerSearchTaskCommand,
  StopSpeakerSearchTaskRequest$,
  StopVoiceToneAnalysisTask$,
  StopVoiceToneAnalysisTaskCommand,
  StopVoiceToneAnalysisTaskRequest$,
  StreamingConfiguration$,
  StreamingNotificationTarget$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Termination$,
  TerminationHealth$,
  ThrottledClientException,
  ThrottledClientException$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateGlobalSettings$,
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsRequest$,
  UpdatePhoneNumber$,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberRequest$,
  UpdatePhoneNumberRequestItem$,
  UpdatePhoneNumberResponse$,
  UpdatePhoneNumberSettings$,
  UpdatePhoneNumberSettingsCommand,
  UpdatePhoneNumberSettingsRequest$,
  UpdateProxySession$,
  UpdateProxySessionCommand,
  UpdateProxySessionRequest$,
  UpdateProxySessionResponse$,
  UpdateSipMediaApplication$,
  UpdateSipMediaApplicationCall$,
  UpdateSipMediaApplicationCallCommand,
  UpdateSipMediaApplicationCallRequest$,
  UpdateSipMediaApplicationCallResponse$,
  UpdateSipMediaApplicationCommand,
  UpdateSipMediaApplicationRequest$,
  UpdateSipMediaApplicationResponse$,
  UpdateSipRule$,
  UpdateSipRuleCommand,
  UpdateSipRuleRequest$,
  UpdateSipRuleResponse$,
  UpdateVoiceConnector$,
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorGroup$,
  UpdateVoiceConnectorGroupCommand,
  UpdateVoiceConnectorGroupRequest$,
  UpdateVoiceConnectorGroupResponse$,
  UpdateVoiceConnectorRequest$,
  UpdateVoiceConnectorResponse$,
  UpdateVoiceProfile$,
  UpdateVoiceProfileCommand,
  UpdateVoiceProfileDomain$,
  UpdateVoiceProfileDomainCommand,
  UpdateVoiceProfileDomainRequest$,
  UpdateVoiceProfileDomainResponse$,
  UpdateVoiceProfileRequest$,
  UpdateVoiceProfileResponse$,
  ValidateE911Address$,
  ValidateE911AddressCommand,
  ValidateE911AddressRequest$,
  ValidateE911AddressResponse$,
  VoiceConnector$,
  VoiceConnectorAwsRegion,
  VoiceConnectorGroup$,
  VoiceConnectorIntegrationType,
  VoiceConnectorItem$,
  VoiceConnectorSettings$,
  VoiceProfile$,
  VoiceProfileDomain$,
  VoiceProfileDomainSummary$,
  VoiceProfileSummary$,
  VoiceToneAnalysisTask$,
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
assert(typeof AssociatePhoneNumbersWithVoiceConnector$ === "object");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorGroupCommand === "function");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorGroup$ === "object");
assert(typeof BatchDeletePhoneNumberCommand === "function");
assert(typeof BatchDeletePhoneNumber$ === "object");
assert(typeof BatchUpdatePhoneNumberCommand === "function");
assert(typeof BatchUpdatePhoneNumber$ === "object");
assert(typeof CreatePhoneNumberOrderCommand === "function");
assert(typeof CreatePhoneNumberOrder$ === "object");
assert(typeof CreateProxySessionCommand === "function");
assert(typeof CreateProxySession$ === "object");
assert(typeof CreateSipMediaApplicationCommand === "function");
assert(typeof CreateSipMediaApplication$ === "object");
assert(typeof CreateSipMediaApplicationCallCommand === "function");
assert(typeof CreateSipMediaApplicationCall$ === "object");
assert(typeof CreateSipRuleCommand === "function");
assert(typeof CreateSipRule$ === "object");
assert(typeof CreateVoiceConnectorCommand === "function");
assert(typeof CreateVoiceConnector$ === "object");
assert(typeof CreateVoiceConnectorGroupCommand === "function");
assert(typeof CreateVoiceConnectorGroup$ === "object");
assert(typeof CreateVoiceProfileCommand === "function");
assert(typeof CreateVoiceProfile$ === "object");
assert(typeof CreateVoiceProfileDomainCommand === "function");
assert(typeof CreateVoiceProfileDomain$ === "object");
assert(typeof DeletePhoneNumberCommand === "function");
assert(typeof DeletePhoneNumber$ === "object");
assert(typeof DeleteProxySessionCommand === "function");
assert(typeof DeleteProxySession$ === "object");
assert(typeof DeleteSipMediaApplicationCommand === "function");
assert(typeof DeleteSipMediaApplication$ === "object");
assert(typeof DeleteSipRuleCommand === "function");
assert(typeof DeleteSipRule$ === "object");
assert(typeof DeleteVoiceConnectorCommand === "function");
assert(typeof DeleteVoiceConnector$ === "object");
assert(typeof DeleteVoiceConnectorEmergencyCallingConfigurationCommand === "function");
assert(typeof DeleteVoiceConnectorEmergencyCallingConfiguration$ === "object");
assert(typeof DeleteVoiceConnectorExternalSystemsConfigurationCommand === "function");
assert(typeof DeleteVoiceConnectorExternalSystemsConfiguration$ === "object");
assert(typeof DeleteVoiceConnectorGroupCommand === "function");
assert(typeof DeleteVoiceConnectorGroup$ === "object");
assert(typeof DeleteVoiceConnectorOriginationCommand === "function");
assert(typeof DeleteVoiceConnectorOrigination$ === "object");
assert(typeof DeleteVoiceConnectorProxyCommand === "function");
assert(typeof DeleteVoiceConnectorProxy$ === "object");
assert(typeof DeleteVoiceConnectorStreamingConfigurationCommand === "function");
assert(typeof DeleteVoiceConnectorStreamingConfiguration$ === "object");
assert(typeof DeleteVoiceConnectorTerminationCommand === "function");
assert(typeof DeleteVoiceConnectorTermination$ === "object");
assert(typeof DeleteVoiceConnectorTerminationCredentialsCommand === "function");
assert(typeof DeleteVoiceConnectorTerminationCredentials$ === "object");
assert(typeof DeleteVoiceProfileCommand === "function");
assert(typeof DeleteVoiceProfile$ === "object");
assert(typeof DeleteVoiceProfileDomainCommand === "function");
assert(typeof DeleteVoiceProfileDomain$ === "object");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorCommand === "function");
assert(typeof DisassociatePhoneNumbersFromVoiceConnector$ === "object");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorGroupCommand === "function");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorGroup$ === "object");
assert(typeof GetGlobalSettingsCommand === "function");
assert(typeof GetGlobalSettings$ === "object");
assert(typeof GetPhoneNumberCommand === "function");
assert(typeof GetPhoneNumber$ === "object");
assert(typeof GetPhoneNumberOrderCommand === "function");
assert(typeof GetPhoneNumberOrder$ === "object");
assert(typeof GetPhoneNumberSettingsCommand === "function");
assert(typeof GetPhoneNumberSettings$ === "object");
assert(typeof GetProxySessionCommand === "function");
assert(typeof GetProxySession$ === "object");
assert(typeof GetSipMediaApplicationCommand === "function");
assert(typeof GetSipMediaApplication$ === "object");
assert(typeof GetSipMediaApplicationAlexaSkillConfigurationCommand === "function");
assert(typeof GetSipMediaApplicationAlexaSkillConfiguration$ === "object");
assert(typeof GetSipMediaApplicationLoggingConfigurationCommand === "function");
assert(typeof GetSipMediaApplicationLoggingConfiguration$ === "object");
assert(typeof GetSipRuleCommand === "function");
assert(typeof GetSipRule$ === "object");
assert(typeof GetSpeakerSearchTaskCommand === "function");
assert(typeof GetSpeakerSearchTask$ === "object");
assert(typeof GetVoiceConnectorCommand === "function");
assert(typeof GetVoiceConnector$ === "object");
assert(typeof GetVoiceConnectorEmergencyCallingConfigurationCommand === "function");
assert(typeof GetVoiceConnectorEmergencyCallingConfiguration$ === "object");
assert(typeof GetVoiceConnectorExternalSystemsConfigurationCommand === "function");
assert(typeof GetVoiceConnectorExternalSystemsConfiguration$ === "object");
assert(typeof GetVoiceConnectorGroupCommand === "function");
assert(typeof GetVoiceConnectorGroup$ === "object");
assert(typeof GetVoiceConnectorLoggingConfigurationCommand === "function");
assert(typeof GetVoiceConnectorLoggingConfiguration$ === "object");
assert(typeof GetVoiceConnectorOriginationCommand === "function");
assert(typeof GetVoiceConnectorOrigination$ === "object");
assert(typeof GetVoiceConnectorProxyCommand === "function");
assert(typeof GetVoiceConnectorProxy$ === "object");
assert(typeof GetVoiceConnectorStreamingConfigurationCommand === "function");
assert(typeof GetVoiceConnectorStreamingConfiguration$ === "object");
assert(typeof GetVoiceConnectorTerminationCommand === "function");
assert(typeof GetVoiceConnectorTermination$ === "object");
assert(typeof GetVoiceConnectorTerminationHealthCommand === "function");
assert(typeof GetVoiceConnectorTerminationHealth$ === "object");
assert(typeof GetVoiceProfileCommand === "function");
assert(typeof GetVoiceProfile$ === "object");
assert(typeof GetVoiceProfileDomainCommand === "function");
assert(typeof GetVoiceProfileDomain$ === "object");
assert(typeof GetVoiceToneAnalysisTaskCommand === "function");
assert(typeof GetVoiceToneAnalysisTask$ === "object");
assert(typeof ListAvailableVoiceConnectorRegionsCommand === "function");
assert(typeof ListAvailableVoiceConnectorRegions$ === "object");
assert(typeof ListPhoneNumberOrdersCommand === "function");
assert(typeof ListPhoneNumberOrders$ === "object");
assert(typeof ListPhoneNumbersCommand === "function");
assert(typeof ListPhoneNumbers$ === "object");
assert(typeof ListProxySessionsCommand === "function");
assert(typeof ListProxySessions$ === "object");
assert(typeof ListSipMediaApplicationsCommand === "function");
assert(typeof ListSipMediaApplications$ === "object");
assert(typeof ListSipRulesCommand === "function");
assert(typeof ListSipRules$ === "object");
assert(typeof ListSupportedPhoneNumberCountriesCommand === "function");
assert(typeof ListSupportedPhoneNumberCountries$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVoiceConnectorGroupsCommand === "function");
assert(typeof ListVoiceConnectorGroups$ === "object");
assert(typeof ListVoiceConnectorsCommand === "function");
assert(typeof ListVoiceConnectors$ === "object");
assert(typeof ListVoiceConnectorTerminationCredentialsCommand === "function");
assert(typeof ListVoiceConnectorTerminationCredentials$ === "object");
assert(typeof ListVoiceProfileDomainsCommand === "function");
assert(typeof ListVoiceProfileDomains$ === "object");
assert(typeof ListVoiceProfilesCommand === "function");
assert(typeof ListVoiceProfiles$ === "object");
assert(typeof PutSipMediaApplicationAlexaSkillConfigurationCommand === "function");
assert(typeof PutSipMediaApplicationAlexaSkillConfiguration$ === "object");
assert(typeof PutSipMediaApplicationLoggingConfigurationCommand === "function");
assert(typeof PutSipMediaApplicationLoggingConfiguration$ === "object");
assert(typeof PutVoiceConnectorEmergencyCallingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorEmergencyCallingConfiguration$ === "object");
assert(typeof PutVoiceConnectorExternalSystemsConfigurationCommand === "function");
assert(typeof PutVoiceConnectorExternalSystemsConfiguration$ === "object");
assert(typeof PutVoiceConnectorLoggingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorLoggingConfiguration$ === "object");
assert(typeof PutVoiceConnectorOriginationCommand === "function");
assert(typeof PutVoiceConnectorOrigination$ === "object");
assert(typeof PutVoiceConnectorProxyCommand === "function");
assert(typeof PutVoiceConnectorProxy$ === "object");
assert(typeof PutVoiceConnectorStreamingConfigurationCommand === "function");
assert(typeof PutVoiceConnectorStreamingConfiguration$ === "object");
assert(typeof PutVoiceConnectorTerminationCommand === "function");
assert(typeof PutVoiceConnectorTermination$ === "object");
assert(typeof PutVoiceConnectorTerminationCredentialsCommand === "function");
assert(typeof PutVoiceConnectorTerminationCredentials$ === "object");
assert(typeof RestorePhoneNumberCommand === "function");
assert(typeof RestorePhoneNumber$ === "object");
assert(typeof SearchAvailablePhoneNumbersCommand === "function");
assert(typeof SearchAvailablePhoneNumbers$ === "object");
assert(typeof StartSpeakerSearchTaskCommand === "function");
assert(typeof StartSpeakerSearchTask$ === "object");
assert(typeof StartVoiceToneAnalysisTaskCommand === "function");
assert(typeof StartVoiceToneAnalysisTask$ === "object");
assert(typeof StopSpeakerSearchTaskCommand === "function");
assert(typeof StopSpeakerSearchTask$ === "object");
assert(typeof StopVoiceToneAnalysisTaskCommand === "function");
assert(typeof StopVoiceToneAnalysisTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdateGlobalSettings$ === "object");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePhoneNumber$ === "object");
assert(typeof UpdatePhoneNumberSettingsCommand === "function");
assert(typeof UpdatePhoneNumberSettings$ === "object");
assert(typeof UpdateProxySessionCommand === "function");
assert(typeof UpdateProxySession$ === "object");
assert(typeof UpdateSipMediaApplicationCommand === "function");
assert(typeof UpdateSipMediaApplication$ === "object");
assert(typeof UpdateSipMediaApplicationCallCommand === "function");
assert(typeof UpdateSipMediaApplicationCall$ === "object");
assert(typeof UpdateSipRuleCommand === "function");
assert(typeof UpdateSipRule$ === "object");
assert(typeof UpdateVoiceConnectorCommand === "function");
assert(typeof UpdateVoiceConnector$ === "object");
assert(typeof UpdateVoiceConnectorGroupCommand === "function");
assert(typeof UpdateVoiceConnectorGroup$ === "object");
assert(typeof UpdateVoiceProfileCommand === "function");
assert(typeof UpdateVoiceProfile$ === "object");
assert(typeof UpdateVoiceProfileDomainCommand === "function");
assert(typeof UpdateVoiceProfileDomain$ === "object");
assert(typeof ValidateE911AddressCommand === "function");
assert(typeof ValidateE911Address$ === "object");
// structural schemas
assert(typeof Address$ === "object");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorGroupRequest$ === "object");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorGroupResponse$ === "object");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorRequest$ === "object");
assert(typeof AssociatePhoneNumbersWithVoiceConnectorResponse$ === "object");
assert(typeof BatchDeletePhoneNumberRequest$ === "object");
assert(typeof BatchDeletePhoneNumberResponse$ === "object");
assert(typeof BatchUpdatePhoneNumberRequest$ === "object");
assert(typeof BatchUpdatePhoneNumberResponse$ === "object");
assert(typeof CallDetails$ === "object");
assert(typeof CandidateAddress$ === "object");
assert(typeof CreatePhoneNumberOrderRequest$ === "object");
assert(typeof CreatePhoneNumberOrderResponse$ === "object");
assert(typeof CreateProxySessionRequest$ === "object");
assert(typeof CreateProxySessionResponse$ === "object");
assert(typeof CreateSipMediaApplicationCallRequest$ === "object");
assert(typeof CreateSipMediaApplicationCallResponse$ === "object");
assert(typeof CreateSipMediaApplicationRequest$ === "object");
assert(typeof CreateSipMediaApplicationResponse$ === "object");
assert(typeof CreateSipRuleRequest$ === "object");
assert(typeof CreateSipRuleResponse$ === "object");
assert(typeof CreateVoiceConnectorGroupRequest$ === "object");
assert(typeof CreateVoiceConnectorGroupResponse$ === "object");
assert(typeof CreateVoiceConnectorRequest$ === "object");
assert(typeof CreateVoiceConnectorResponse$ === "object");
assert(typeof CreateVoiceProfileDomainRequest$ === "object");
assert(typeof CreateVoiceProfileDomainResponse$ === "object");
assert(typeof CreateVoiceProfileRequest$ === "object");
assert(typeof CreateVoiceProfileResponse$ === "object");
assert(typeof Credential$ === "object");
assert(typeof DeletePhoneNumberRequest$ === "object");
assert(typeof DeleteProxySessionRequest$ === "object");
assert(typeof DeleteSipMediaApplicationRequest$ === "object");
assert(typeof DeleteSipRuleRequest$ === "object");
assert(typeof DeleteVoiceConnectorEmergencyCallingConfigurationRequest$ === "object");
assert(typeof DeleteVoiceConnectorExternalSystemsConfigurationRequest$ === "object");
assert(typeof DeleteVoiceConnectorGroupRequest$ === "object");
assert(typeof DeleteVoiceConnectorOriginationRequest$ === "object");
assert(typeof DeleteVoiceConnectorProxyRequest$ === "object");
assert(typeof DeleteVoiceConnectorRequest$ === "object");
assert(typeof DeleteVoiceConnectorStreamingConfigurationRequest$ === "object");
assert(typeof DeleteVoiceConnectorTerminationCredentialsRequest$ === "object");
assert(typeof DeleteVoiceConnectorTerminationRequest$ === "object");
assert(typeof DeleteVoiceProfileDomainRequest$ === "object");
assert(typeof DeleteVoiceProfileRequest$ === "object");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorGroupRequest$ === "object");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorGroupResponse$ === "object");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorRequest$ === "object");
assert(typeof DisassociatePhoneNumbersFromVoiceConnectorResponse$ === "object");
assert(typeof DNISEmergencyCallingConfiguration$ === "object");
assert(typeof EmergencyCallingConfiguration$ === "object");
assert(typeof ExternalSystemsConfiguration$ === "object");
assert(typeof GeoMatchParams$ === "object");
assert(typeof GetGlobalSettingsResponse$ === "object");
assert(typeof GetPhoneNumberOrderRequest$ === "object");
assert(typeof GetPhoneNumberOrderResponse$ === "object");
assert(typeof GetPhoneNumberRequest$ === "object");
assert(typeof GetPhoneNumberResponse$ === "object");
assert(typeof GetPhoneNumberSettingsResponse$ === "object");
assert(typeof GetProxySessionRequest$ === "object");
assert(typeof GetProxySessionResponse$ === "object");
assert(typeof GetSipMediaApplicationAlexaSkillConfigurationRequest$ === "object");
assert(typeof GetSipMediaApplicationAlexaSkillConfigurationResponse$ === "object");
assert(typeof GetSipMediaApplicationLoggingConfigurationRequest$ === "object");
assert(typeof GetSipMediaApplicationLoggingConfigurationResponse$ === "object");
assert(typeof GetSipMediaApplicationRequest$ === "object");
assert(typeof GetSipMediaApplicationResponse$ === "object");
assert(typeof GetSipRuleRequest$ === "object");
assert(typeof GetSipRuleResponse$ === "object");
assert(typeof GetSpeakerSearchTaskRequest$ === "object");
assert(typeof GetSpeakerSearchTaskResponse$ === "object");
assert(typeof GetVoiceConnectorEmergencyCallingConfigurationRequest$ === "object");
assert(typeof GetVoiceConnectorEmergencyCallingConfigurationResponse$ === "object");
assert(typeof GetVoiceConnectorExternalSystemsConfigurationRequest$ === "object");
assert(typeof GetVoiceConnectorExternalSystemsConfigurationResponse$ === "object");
assert(typeof GetVoiceConnectorGroupRequest$ === "object");
assert(typeof GetVoiceConnectorGroupResponse$ === "object");
assert(typeof GetVoiceConnectorLoggingConfigurationRequest$ === "object");
assert(typeof GetVoiceConnectorLoggingConfigurationResponse$ === "object");
assert(typeof GetVoiceConnectorOriginationRequest$ === "object");
assert(typeof GetVoiceConnectorOriginationResponse$ === "object");
assert(typeof GetVoiceConnectorProxyRequest$ === "object");
assert(typeof GetVoiceConnectorProxyResponse$ === "object");
assert(typeof GetVoiceConnectorRequest$ === "object");
assert(typeof GetVoiceConnectorResponse$ === "object");
assert(typeof GetVoiceConnectorStreamingConfigurationRequest$ === "object");
assert(typeof GetVoiceConnectorStreamingConfigurationResponse$ === "object");
assert(typeof GetVoiceConnectorTerminationHealthRequest$ === "object");
assert(typeof GetVoiceConnectorTerminationHealthResponse$ === "object");
assert(typeof GetVoiceConnectorTerminationRequest$ === "object");
assert(typeof GetVoiceConnectorTerminationResponse$ === "object");
assert(typeof GetVoiceProfileDomainRequest$ === "object");
assert(typeof GetVoiceProfileDomainResponse$ === "object");
assert(typeof GetVoiceProfileRequest$ === "object");
assert(typeof GetVoiceProfileResponse$ === "object");
assert(typeof GetVoiceToneAnalysisTaskRequest$ === "object");
assert(typeof GetVoiceToneAnalysisTaskResponse$ === "object");
assert(typeof ListAvailableVoiceConnectorRegionsResponse$ === "object");
assert(typeof ListPhoneNumberOrdersRequest$ === "object");
assert(typeof ListPhoneNumberOrdersResponse$ === "object");
assert(typeof ListPhoneNumbersRequest$ === "object");
assert(typeof ListPhoneNumbersResponse$ === "object");
assert(typeof ListProxySessionsRequest$ === "object");
assert(typeof ListProxySessionsResponse$ === "object");
assert(typeof ListSipMediaApplicationsRequest$ === "object");
assert(typeof ListSipMediaApplicationsResponse$ === "object");
assert(typeof ListSipRulesRequest$ === "object");
assert(typeof ListSipRulesResponse$ === "object");
assert(typeof ListSupportedPhoneNumberCountriesRequest$ === "object");
assert(typeof ListSupportedPhoneNumberCountriesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVoiceConnectorGroupsRequest$ === "object");
assert(typeof ListVoiceConnectorGroupsResponse$ === "object");
assert(typeof ListVoiceConnectorsRequest$ === "object");
assert(typeof ListVoiceConnectorsResponse$ === "object");
assert(typeof ListVoiceConnectorTerminationCredentialsRequest$ === "object");
assert(typeof ListVoiceConnectorTerminationCredentialsResponse$ === "object");
assert(typeof ListVoiceProfileDomainsRequest$ === "object");
assert(typeof ListVoiceProfileDomainsResponse$ === "object");
assert(typeof ListVoiceProfilesRequest$ === "object");
assert(typeof ListVoiceProfilesResponse$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof MediaInsightsConfiguration$ === "object");
assert(typeof OrderedPhoneNumber$ === "object");
assert(typeof Origination$ === "object");
assert(typeof OriginationRoute$ === "object");
assert(typeof Participant$ === "object");
assert(typeof PhoneNumber$ === "object");
assert(typeof PhoneNumberAssociation$ === "object");
assert(typeof PhoneNumberCapabilities$ === "object");
assert(typeof PhoneNumberCountry$ === "object");
assert(typeof PhoneNumberError$ === "object");
assert(typeof PhoneNumberOrder$ === "object");
assert(typeof Proxy$ === "object");
assert(typeof ProxySession$ === "object");
assert(typeof PutSipMediaApplicationAlexaSkillConfigurationRequest$ === "object");
assert(typeof PutSipMediaApplicationAlexaSkillConfigurationResponse$ === "object");
assert(typeof PutSipMediaApplicationLoggingConfigurationRequest$ === "object");
assert(typeof PutSipMediaApplicationLoggingConfigurationResponse$ === "object");
assert(typeof PutVoiceConnectorEmergencyCallingConfigurationRequest$ === "object");
assert(typeof PutVoiceConnectorEmergencyCallingConfigurationResponse$ === "object");
assert(typeof PutVoiceConnectorExternalSystemsConfigurationRequest$ === "object");
assert(typeof PutVoiceConnectorExternalSystemsConfigurationResponse$ === "object");
assert(typeof PutVoiceConnectorLoggingConfigurationRequest$ === "object");
assert(typeof PutVoiceConnectorLoggingConfigurationResponse$ === "object");
assert(typeof PutVoiceConnectorOriginationRequest$ === "object");
assert(typeof PutVoiceConnectorOriginationResponse$ === "object");
assert(typeof PutVoiceConnectorProxyRequest$ === "object");
assert(typeof PutVoiceConnectorProxyResponse$ === "object");
assert(typeof PutVoiceConnectorStreamingConfigurationRequest$ === "object");
assert(typeof PutVoiceConnectorStreamingConfigurationResponse$ === "object");
assert(typeof PutVoiceConnectorTerminationCredentialsRequest$ === "object");
assert(typeof PutVoiceConnectorTerminationRequest$ === "object");
assert(typeof PutVoiceConnectorTerminationResponse$ === "object");
assert(typeof RestorePhoneNumberRequest$ === "object");
assert(typeof RestorePhoneNumberResponse$ === "object");
assert(typeof SearchAvailablePhoneNumbersRequest$ === "object");
assert(typeof SearchAvailablePhoneNumbersResponse$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof SipMediaApplication$ === "object");
assert(typeof SipMediaApplicationAlexaSkillConfiguration$ === "object");
assert(typeof SipMediaApplicationCall$ === "object");
assert(typeof SipMediaApplicationEndpoint$ === "object");
assert(typeof SipMediaApplicationLoggingConfiguration$ === "object");
assert(typeof SipRule$ === "object");
assert(typeof SipRuleTargetApplication$ === "object");
assert(typeof SpeakerSearchDetails$ === "object");
assert(typeof SpeakerSearchResult$ === "object");
assert(typeof SpeakerSearchTask$ === "object");
assert(typeof StartSpeakerSearchTaskRequest$ === "object");
assert(typeof StartSpeakerSearchTaskResponse$ === "object");
assert(typeof StartVoiceToneAnalysisTaskRequest$ === "object");
assert(typeof StartVoiceToneAnalysisTaskResponse$ === "object");
assert(typeof StopSpeakerSearchTaskRequest$ === "object");
assert(typeof StopVoiceToneAnalysisTaskRequest$ === "object");
assert(typeof StreamingConfiguration$ === "object");
assert(typeof StreamingNotificationTarget$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Termination$ === "object");
assert(typeof TerminationHealth$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateGlobalSettingsRequest$ === "object");
assert(typeof UpdatePhoneNumberRequest$ === "object");
assert(typeof UpdatePhoneNumberRequestItem$ === "object");
assert(typeof UpdatePhoneNumberResponse$ === "object");
assert(typeof UpdatePhoneNumberSettingsRequest$ === "object");
assert(typeof UpdateProxySessionRequest$ === "object");
assert(typeof UpdateProxySessionResponse$ === "object");
assert(typeof UpdateSipMediaApplicationCallRequest$ === "object");
assert(typeof UpdateSipMediaApplicationCallResponse$ === "object");
assert(typeof UpdateSipMediaApplicationRequest$ === "object");
assert(typeof UpdateSipMediaApplicationResponse$ === "object");
assert(typeof UpdateSipRuleRequest$ === "object");
assert(typeof UpdateSipRuleResponse$ === "object");
assert(typeof UpdateVoiceConnectorGroupRequest$ === "object");
assert(typeof UpdateVoiceConnectorGroupResponse$ === "object");
assert(typeof UpdateVoiceConnectorRequest$ === "object");
assert(typeof UpdateVoiceConnectorResponse$ === "object");
assert(typeof UpdateVoiceProfileDomainRequest$ === "object");
assert(typeof UpdateVoiceProfileDomainResponse$ === "object");
assert(typeof UpdateVoiceProfileRequest$ === "object");
assert(typeof UpdateVoiceProfileResponse$ === "object");
assert(typeof ValidateE911AddressRequest$ === "object");
assert(typeof ValidateE911AddressResponse$ === "object");
assert(typeof VoiceConnector$ === "object");
assert(typeof VoiceConnectorGroup$ === "object");
assert(typeof VoiceConnectorItem$ === "object");
assert(typeof VoiceConnectorSettings$ === "object");
assert(typeof VoiceProfile$ === "object");
assert(typeof VoiceProfileDomain$ === "object");
assert(typeof VoiceProfileDomainSummary$ === "object");
assert(typeof VoiceProfileSummary$ === "object");
assert(typeof VoiceToneAnalysisTask$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof ForbiddenException$ === "object");
assert(GoneException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof GoneException$ === "object");
assert(NotFoundException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ServiceFailureException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottledClientException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof ThrottledClientException$ === "object");
assert(UnauthorizedClientException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof UnauthorizedClientException$ === "object");
assert(UnprocessableEntityException.prototype instanceof ChimeSDKVoiceServiceException);
assert(typeof UnprocessableEntityException$ === "object");
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

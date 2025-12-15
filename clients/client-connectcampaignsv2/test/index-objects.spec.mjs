import {
  AccessDeniedException,
  AccessDeniedException$,
  AgentAction,
  AgentlessConfig$,
  AnswerMachineDetectionConfig$,
  Campaign$,
  CampaignDeletionPolicy,
  CampaignFilters$,
  CampaignState,
  CampaignSummary$,
  ChannelSubtype,
  ChannelSubtypeConfig$,
  ChannelSubtypeParameters$,
  CommunicationLimit$,
  CommunicationLimitTimeUnit,
  CommunicationLimits$,
  CommunicationLimitsConfig$,
  CommunicationLimitsConfigType,
  CommunicationTimeConfig$,
  CommunicationTimeConfigType,
  ConflictException,
  ConflictException$,
  ConnectCampaignsV2,
  ConnectCampaignsV2Client,
  ConnectCampaignsV2ServiceException,
  CreateCampaign$,
  CreateCampaignCommand,
  CreateCampaignRequest$,
  CreateCampaignResponse$,
  CustomerProfilesIntegrationConfig$,
  CustomerProfilesIntegrationIdentifier$,
  CustomerProfilesIntegrationSummary$,
  DayOfWeek,
  DeleteCampaign$,
  DeleteCampaignChannelSubtypeConfig$,
  DeleteCampaignChannelSubtypeConfigCommand,
  DeleteCampaignChannelSubtypeConfigRequest$,
  DeleteCampaignCommand,
  DeleteCampaignCommunicationLimits$,
  DeleteCampaignCommunicationLimitsCommand,
  DeleteCampaignCommunicationLimitsRequest$,
  DeleteCampaignCommunicationTime$,
  DeleteCampaignCommunicationTimeCommand,
  DeleteCampaignCommunicationTimeRequest$,
  DeleteCampaignRequest$,
  DeleteConnectInstanceConfig$,
  DeleteConnectInstanceConfigCommand,
  DeleteConnectInstanceConfigRequest$,
  DeleteConnectInstanceIntegration$,
  DeleteConnectInstanceIntegrationCommand,
  DeleteConnectInstanceIntegrationRequest$,
  DeleteInstanceOnboardingJob$,
  DeleteInstanceOnboardingJobCommand,
  DeleteInstanceOnboardingJobRequest$,
  DescribeCampaign$,
  DescribeCampaignCommand,
  DescribeCampaignRequest$,
  DescribeCampaignResponse$,
  EmailChannelSubtypeConfig$,
  EmailChannelSubtypeParameters$,
  EmailOutboundConfig$,
  EmailOutboundMode$,
  EncryptionConfig$,
  EncryptionType,
  EventTrigger$,
  EventType,
  ExternalCampaignType,
  FailedCampaignStateResponse$,
  FailedProfileOutboundRequest$,
  FailedRequest$,
  FailureCode,
  GetCampaignState$,
  GetCampaignStateBatch$,
  GetCampaignStateBatchCommand,
  GetCampaignStateBatchFailureCode,
  GetCampaignStateBatchRequest$,
  GetCampaignStateBatchResponse$,
  GetCampaignStateCommand,
  GetCampaignStateRequest$,
  GetCampaignStateResponse$,
  GetConnectInstanceConfig$,
  GetConnectInstanceConfigCommand,
  GetConnectInstanceConfigRequest$,
  GetConnectInstanceConfigResponse$,
  GetInstanceCommunicationLimits$,
  GetInstanceCommunicationLimitsCommand,
  GetInstanceCommunicationLimitsRequest$,
  GetInstanceCommunicationLimitsResponse$,
  GetInstanceOnboardingJobStatus$,
  GetInstanceOnboardingJobStatusCommand,
  GetInstanceOnboardingJobStatusRequest$,
  GetInstanceOnboardingJobStatusResponse$,
  InstanceCommunicationLimitsConfig$,
  InstanceConfig$,
  InstanceIdFilter$,
  InstanceIdFilterOperator,
  InstanceLimitsHandling,
  InstanceOnboardingJobFailureCode,
  InstanceOnboardingJobStatus$,
  InstanceOnboardingJobStatusCode,
  IntegrationConfig$,
  IntegrationIdentifier$,
  IntegrationSummary$,
  InternalServerException,
  InternalServerException$,
  InvalidCampaignStateException,
  InvalidCampaignStateException$,
  InvalidStateException,
  InvalidStateException$,
  LambdaIntegrationConfig$,
  LambdaIntegrationIdentifier$,
  LambdaIntegrationSummary$,
  ListCampaigns$,
  ListCampaignsCommand,
  ListCampaignsRequest$,
  ListCampaignsResponse$,
  ListConnectInstanceIntegrations$,
  ListConnectInstanceIntegrationsCommand,
  ListConnectInstanceIntegrationsRequest$,
  ListConnectInstanceIntegrationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocalTimeZoneConfig$,
  LocalTimeZoneDetectionType,
  OpenHours$,
  OutboundRequest$,
  PauseCampaign$,
  PauseCampaignCommand,
  PauseCampaignRequest$,
  PredictiveConfig$,
  PreviewConfig$,
  ProfileOutboundRequest$,
  ProfileOutboundRequestFailureCode,
  ProgressiveConfig$,
  PutConnectInstanceIntegration$,
  PutConnectInstanceIntegrationCommand,
  PutConnectInstanceIntegrationRequest$,
  PutInstanceCommunicationLimits$,
  PutInstanceCommunicationLimitsCommand,
  PutInstanceCommunicationLimitsRequest$,
  PutOutboundRequestBatch$,
  PutOutboundRequestBatchCommand,
  PutOutboundRequestBatchRequest$,
  PutOutboundRequestBatchResponse$,
  PutProfileOutboundRequestBatch$,
  PutProfileOutboundRequestBatchCommand,
  PutProfileOutboundRequestBatchRequest$,
  PutProfileOutboundRequestBatchResponse$,
  QConnectIntegrationConfig$,
  QConnectIntegrationIdentifier$,
  QConnectIntegrationSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestrictedPeriod$,
  RestrictedPeriods$,
  ResumeCampaign$,
  ResumeCampaignCommand,
  ResumeCampaignRequest$,
  Schedule$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SmsChannelSubtypeConfig$,
  SmsChannelSubtypeParameters$,
  SmsOutboundConfig$,
  SmsOutboundMode$,
  Source$,
  StartCampaign$,
  StartCampaignCommand,
  StartCampaignRequest$,
  StartInstanceOnboardingJob$,
  StartInstanceOnboardingJobCommand,
  StartInstanceOnboardingJobRequest$,
  StartInstanceOnboardingJobResponse$,
  StopCampaign$,
  StopCampaignCommand,
  StopCampaignRequest$,
  SuccessfulCampaignStateResponse$,
  SuccessfulProfileOutboundRequest$,
  SuccessfulRequest$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TelephonyChannelSubtypeConfig$,
  TelephonyChannelSubtypeParameters$,
  TelephonyOutboundConfig$,
  TelephonyOutboundMode$,
  ThrottlingException,
  ThrottlingException$,
  TimeRange$,
  TimeWindow$,
  TimeoutConfig$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateCampaignChannelSubtypeConfig$,
  UpdateCampaignChannelSubtypeConfigCommand,
  UpdateCampaignChannelSubtypeConfigRequest$,
  UpdateCampaignCommunicationLimits$,
  UpdateCampaignCommunicationLimitsCommand,
  UpdateCampaignCommunicationLimitsRequest$,
  UpdateCampaignCommunicationTime$,
  UpdateCampaignCommunicationTimeCommand,
  UpdateCampaignCommunicationTimeRequest$,
  UpdateCampaignFlowAssociation$,
  UpdateCampaignFlowAssociationCommand,
  UpdateCampaignFlowAssociationRequest$,
  UpdateCampaignName$,
  UpdateCampaignNameCommand,
  UpdateCampaignNameRequest$,
  UpdateCampaignSchedule$,
  UpdateCampaignScheduleCommand,
  UpdateCampaignScheduleRequest$,
  UpdateCampaignSource$,
  UpdateCampaignSourceCommand,
  UpdateCampaignSourceRequest$,
  ValidationException,
  ValidationException$,
  WhatsAppChannelSubtypeConfig$,
  WhatsAppChannelSubtypeParameters$,
  WhatsAppOutboundConfig$,
  WhatsAppOutboundMode$,
  paginateListCampaigns,
  paginateListConnectInstanceIntegrations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCampaignsV2Client === "function");
assert(typeof ConnectCampaignsV2 === "function");
// commands
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateCampaign$ === "object");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaign$ === "object");
assert(typeof DeleteCampaignChannelSubtypeConfigCommand === "function");
assert(typeof DeleteCampaignChannelSubtypeConfig$ === "object");
assert(typeof DeleteCampaignCommunicationLimitsCommand === "function");
assert(typeof DeleteCampaignCommunicationLimits$ === "object");
assert(typeof DeleteCampaignCommunicationTimeCommand === "function");
assert(typeof DeleteCampaignCommunicationTime$ === "object");
assert(typeof DeleteConnectInstanceConfigCommand === "function");
assert(typeof DeleteConnectInstanceConfig$ === "object");
assert(typeof DeleteConnectInstanceIntegrationCommand === "function");
assert(typeof DeleteConnectInstanceIntegration$ === "object");
assert(typeof DeleteInstanceOnboardingJobCommand === "function");
assert(typeof DeleteInstanceOnboardingJob$ === "object");
assert(typeof DescribeCampaignCommand === "function");
assert(typeof DescribeCampaign$ === "object");
assert(typeof GetCampaignStateCommand === "function");
assert(typeof GetCampaignState$ === "object");
assert(typeof GetCampaignStateBatchCommand === "function");
assert(typeof GetCampaignStateBatch$ === "object");
assert(typeof GetConnectInstanceConfigCommand === "function");
assert(typeof GetConnectInstanceConfig$ === "object");
assert(typeof GetInstanceCommunicationLimitsCommand === "function");
assert(typeof GetInstanceCommunicationLimits$ === "object");
assert(typeof GetInstanceOnboardingJobStatusCommand === "function");
assert(typeof GetInstanceOnboardingJobStatus$ === "object");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListCampaigns$ === "object");
assert(typeof ListConnectInstanceIntegrationsCommand === "function");
assert(typeof ListConnectInstanceIntegrations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PauseCampaignCommand === "function");
assert(typeof PauseCampaign$ === "object");
assert(typeof PutConnectInstanceIntegrationCommand === "function");
assert(typeof PutConnectInstanceIntegration$ === "object");
assert(typeof PutInstanceCommunicationLimitsCommand === "function");
assert(typeof PutInstanceCommunicationLimits$ === "object");
assert(typeof PutOutboundRequestBatchCommand === "function");
assert(typeof PutOutboundRequestBatch$ === "object");
assert(typeof PutProfileOutboundRequestBatchCommand === "function");
assert(typeof PutProfileOutboundRequestBatch$ === "object");
assert(typeof ResumeCampaignCommand === "function");
assert(typeof ResumeCampaign$ === "object");
assert(typeof StartCampaignCommand === "function");
assert(typeof StartCampaign$ === "object");
assert(typeof StartInstanceOnboardingJobCommand === "function");
assert(typeof StartInstanceOnboardingJob$ === "object");
assert(typeof StopCampaignCommand === "function");
assert(typeof StopCampaign$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCampaignChannelSubtypeConfigCommand === "function");
assert(typeof UpdateCampaignChannelSubtypeConfig$ === "object");
assert(typeof UpdateCampaignCommunicationLimitsCommand === "function");
assert(typeof UpdateCampaignCommunicationLimits$ === "object");
assert(typeof UpdateCampaignCommunicationTimeCommand === "function");
assert(typeof UpdateCampaignCommunicationTime$ === "object");
assert(typeof UpdateCampaignFlowAssociationCommand === "function");
assert(typeof UpdateCampaignFlowAssociation$ === "object");
assert(typeof UpdateCampaignNameCommand === "function");
assert(typeof UpdateCampaignName$ === "object");
assert(typeof UpdateCampaignScheduleCommand === "function");
assert(typeof UpdateCampaignSchedule$ === "object");
assert(typeof UpdateCampaignSourceCommand === "function");
assert(typeof UpdateCampaignSource$ === "object");
// structural schemas
assert(typeof AgentlessConfig$ === "object");
assert(typeof AnswerMachineDetectionConfig$ === "object");
assert(typeof Campaign$ === "object");
assert(typeof CampaignFilters$ === "object");
assert(typeof CampaignSummary$ === "object");
assert(typeof ChannelSubtypeConfig$ === "object");
assert(typeof ChannelSubtypeParameters$ === "object");
assert(typeof CommunicationLimit$ === "object");
assert(typeof CommunicationLimits$ === "object");
assert(typeof CommunicationLimitsConfig$ === "object");
assert(typeof CommunicationTimeConfig$ === "object");
assert(typeof CreateCampaignRequest$ === "object");
assert(typeof CreateCampaignResponse$ === "object");
assert(typeof CustomerProfilesIntegrationConfig$ === "object");
assert(typeof CustomerProfilesIntegrationIdentifier$ === "object");
assert(typeof CustomerProfilesIntegrationSummary$ === "object");
assert(typeof DeleteCampaignChannelSubtypeConfigRequest$ === "object");
assert(typeof DeleteCampaignCommunicationLimitsRequest$ === "object");
assert(typeof DeleteCampaignCommunicationTimeRequest$ === "object");
assert(typeof DeleteCampaignRequest$ === "object");
assert(typeof DeleteConnectInstanceConfigRequest$ === "object");
assert(typeof DeleteConnectInstanceIntegrationRequest$ === "object");
assert(typeof DeleteInstanceOnboardingJobRequest$ === "object");
assert(typeof DescribeCampaignRequest$ === "object");
assert(typeof DescribeCampaignResponse$ === "object");
assert(typeof EmailChannelSubtypeConfig$ === "object");
assert(typeof EmailChannelSubtypeParameters$ === "object");
assert(typeof EmailOutboundConfig$ === "object");
assert(typeof EmailOutboundMode$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof EventTrigger$ === "object");
assert(typeof FailedCampaignStateResponse$ === "object");
assert(typeof FailedProfileOutboundRequest$ === "object");
assert(typeof FailedRequest$ === "object");
assert(typeof GetCampaignStateBatchRequest$ === "object");
assert(typeof GetCampaignStateBatchResponse$ === "object");
assert(typeof GetCampaignStateRequest$ === "object");
assert(typeof GetCampaignStateResponse$ === "object");
assert(typeof GetConnectInstanceConfigRequest$ === "object");
assert(typeof GetConnectInstanceConfigResponse$ === "object");
assert(typeof GetInstanceCommunicationLimitsRequest$ === "object");
assert(typeof GetInstanceCommunicationLimitsResponse$ === "object");
assert(typeof GetInstanceOnboardingJobStatusRequest$ === "object");
assert(typeof GetInstanceOnboardingJobStatusResponse$ === "object");
assert(typeof InstanceCommunicationLimitsConfig$ === "object");
assert(typeof InstanceConfig$ === "object");
assert(typeof InstanceIdFilter$ === "object");
assert(typeof InstanceOnboardingJobStatus$ === "object");
assert(typeof IntegrationConfig$ === "object");
assert(typeof IntegrationIdentifier$ === "object");
assert(typeof IntegrationSummary$ === "object");
assert(typeof LambdaIntegrationConfig$ === "object");
assert(typeof LambdaIntegrationIdentifier$ === "object");
assert(typeof LambdaIntegrationSummary$ === "object");
assert(typeof ListCampaignsRequest$ === "object");
assert(typeof ListCampaignsResponse$ === "object");
assert(typeof ListConnectInstanceIntegrationsRequest$ === "object");
assert(typeof ListConnectInstanceIntegrationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LocalTimeZoneConfig$ === "object");
assert(typeof OpenHours$ === "object");
assert(typeof OutboundRequest$ === "object");
assert(typeof PauseCampaignRequest$ === "object");
assert(typeof PredictiveConfig$ === "object");
assert(typeof PreviewConfig$ === "object");
assert(typeof ProfileOutboundRequest$ === "object");
assert(typeof ProgressiveConfig$ === "object");
assert(typeof PutConnectInstanceIntegrationRequest$ === "object");
assert(typeof PutInstanceCommunicationLimitsRequest$ === "object");
assert(typeof PutOutboundRequestBatchRequest$ === "object");
assert(typeof PutOutboundRequestBatchResponse$ === "object");
assert(typeof PutProfileOutboundRequestBatchRequest$ === "object");
assert(typeof PutProfileOutboundRequestBatchResponse$ === "object");
assert(typeof QConnectIntegrationConfig$ === "object");
assert(typeof QConnectIntegrationIdentifier$ === "object");
assert(typeof QConnectIntegrationSummary$ === "object");
assert(typeof RestrictedPeriod$ === "object");
assert(typeof RestrictedPeriods$ === "object");
assert(typeof ResumeCampaignRequest$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof SmsChannelSubtypeConfig$ === "object");
assert(typeof SmsChannelSubtypeParameters$ === "object");
assert(typeof SmsOutboundConfig$ === "object");
assert(typeof SmsOutboundMode$ === "object");
assert(typeof Source$ === "object");
assert(typeof StartCampaignRequest$ === "object");
assert(typeof StartInstanceOnboardingJobRequest$ === "object");
assert(typeof StartInstanceOnboardingJobResponse$ === "object");
assert(typeof StopCampaignRequest$ === "object");
assert(typeof SuccessfulCampaignStateResponse$ === "object");
assert(typeof SuccessfulProfileOutboundRequest$ === "object");
assert(typeof SuccessfulRequest$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TelephonyChannelSubtypeConfig$ === "object");
assert(typeof TelephonyChannelSubtypeParameters$ === "object");
assert(typeof TelephonyOutboundConfig$ === "object");
assert(typeof TelephonyOutboundMode$ === "object");
assert(typeof TimeoutConfig$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof TimeWindow$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateCampaignChannelSubtypeConfigRequest$ === "object");
assert(typeof UpdateCampaignCommunicationLimitsRequest$ === "object");
assert(typeof UpdateCampaignCommunicationTimeRequest$ === "object");
assert(typeof UpdateCampaignFlowAssociationRequest$ === "object");
assert(typeof UpdateCampaignNameRequest$ === "object");
assert(typeof UpdateCampaignScheduleRequest$ === "object");
assert(typeof UpdateCampaignSourceRequest$ === "object");
assert(typeof WhatsAppChannelSubtypeConfig$ === "object");
assert(typeof WhatsAppChannelSubtypeParameters$ === "object");
assert(typeof WhatsAppOutboundConfig$ === "object");
assert(typeof WhatsAppOutboundMode$ === "object");
// enums
assert(typeof AgentAction === "object");
assert(typeof CampaignDeletionPolicy === "object");
assert(typeof CampaignState === "object");
assert(typeof ChannelSubtype === "object");
assert(typeof CommunicationLimitsConfigType === "object");
assert(typeof CommunicationLimitTimeUnit === "object");
assert(typeof CommunicationTimeConfigType === "object");
assert(typeof DayOfWeek === "object");
assert(typeof EncryptionType === "object");
assert(typeof EventType === "object");
assert(typeof ExternalCampaignType === "object");
assert(typeof FailureCode === "object");
assert(typeof GetCampaignStateBatchFailureCode === "object");
assert(typeof InstanceIdFilterOperator === "object");
assert(typeof InstanceLimitsHandling === "object");
assert(typeof InstanceOnboardingJobFailureCode === "object");
assert(typeof InstanceOnboardingJobStatusCode === "object");
assert(typeof LocalTimeZoneDetectionType === "object");
assert(typeof ProfileOutboundRequestFailureCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidCampaignStateException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof InvalidCampaignStateException$ === "object");
assert(InvalidStateException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof InvalidStateException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(typeof ValidationException$ === "object");
assert(ConnectCampaignsV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCampaigns === "function");
assert(typeof paginateListConnectInstanceIntegrations === "function");
console.log(`ConnectCampaignsV2 index test passed.`);

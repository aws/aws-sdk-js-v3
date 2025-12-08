import {
  AccessDeniedException,
  AgentAction,
  CampaignDeletionPolicy,
  CampaignState,
  ChannelSubtype,
  CommunicationLimitTimeUnit,
  CommunicationLimitsConfigType,
  CommunicationTimeConfigType,
  ConflictException,
  ConnectCampaignsV2,
  ConnectCampaignsV2Client,
  ConnectCampaignsV2ServiceException,
  CreateCampaignCommand,
  DayOfWeek,
  DeleteCampaignChannelSubtypeConfigCommand,
  DeleteCampaignCommand,
  DeleteCampaignCommunicationLimitsCommand,
  DeleteCampaignCommunicationTimeCommand,
  DeleteConnectInstanceConfigCommand,
  DeleteConnectInstanceIntegrationCommand,
  DeleteInstanceOnboardingJobCommand,
  DescribeCampaignCommand,
  EncryptionType,
  EventType,
  ExternalCampaignType,
  FailureCode,
  GetCampaignStateBatchCommand,
  GetCampaignStateBatchFailureCode,
  GetCampaignStateCommand,
  GetConnectInstanceConfigCommand,
  GetInstanceCommunicationLimitsCommand,
  GetInstanceOnboardingJobStatusCommand,
  InstanceIdFilterOperator,
  InstanceLimitsHandling,
  InstanceOnboardingJobFailureCode,
  InstanceOnboardingJobStatusCode,
  InternalServerException,
  InvalidCampaignStateException,
  InvalidStateException,
  ListCampaignsCommand,
  ListConnectInstanceIntegrationsCommand,
  ListTagsForResourceCommand,
  LocalTimeZoneDetectionType,
  PauseCampaignCommand,
  ProfileOutboundRequestFailureCode,
  PutConnectInstanceIntegrationCommand,
  PutInstanceCommunicationLimitsCommand,
  PutOutboundRequestBatchCommand,
  PutProfileOutboundRequestBatchCommand,
  ResourceNotFoundException,
  ResumeCampaignCommand,
  ServiceQuotaExceededException,
  StartCampaignCommand,
  StartInstanceOnboardingJobCommand,
  StopCampaignCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateCampaignChannelSubtypeConfigCommand,
  UpdateCampaignCommunicationLimitsCommand,
  UpdateCampaignCommunicationTimeCommand,
  UpdateCampaignFlowAssociationCommand,
  UpdateCampaignNameCommand,
  UpdateCampaignScheduleCommand,
  UpdateCampaignSourceCommand,
  ValidationException,
  paginateListCampaigns,
  paginateListConnectInstanceIntegrations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCampaignsV2Client === "function");
assert(typeof ConnectCampaignsV2 === "function");
// commands
assert(typeof CreateCampaignCommand === "function");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaignChannelSubtypeConfigCommand === "function");
assert(typeof DeleteCampaignCommunicationLimitsCommand === "function");
assert(typeof DeleteCampaignCommunicationTimeCommand === "function");
assert(typeof DeleteConnectInstanceConfigCommand === "function");
assert(typeof DeleteConnectInstanceIntegrationCommand === "function");
assert(typeof DeleteInstanceOnboardingJobCommand === "function");
assert(typeof DescribeCampaignCommand === "function");
assert(typeof GetCampaignStateCommand === "function");
assert(typeof GetCampaignStateBatchCommand === "function");
assert(typeof GetConnectInstanceConfigCommand === "function");
assert(typeof GetInstanceCommunicationLimitsCommand === "function");
assert(typeof GetInstanceOnboardingJobStatusCommand === "function");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListConnectInstanceIntegrationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PauseCampaignCommand === "function");
assert(typeof PutConnectInstanceIntegrationCommand === "function");
assert(typeof PutInstanceCommunicationLimitsCommand === "function");
assert(typeof PutOutboundRequestBatchCommand === "function");
assert(typeof PutProfileOutboundRequestBatchCommand === "function");
assert(typeof ResumeCampaignCommand === "function");
assert(typeof StartCampaignCommand === "function");
assert(typeof StartInstanceOnboardingJobCommand === "function");
assert(typeof StopCampaignCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCampaignChannelSubtypeConfigCommand === "function");
assert(typeof UpdateCampaignCommunicationLimitsCommand === "function");
assert(typeof UpdateCampaignCommunicationTimeCommand === "function");
assert(typeof UpdateCampaignFlowAssociationCommand === "function");
assert(typeof UpdateCampaignNameCommand === "function");
assert(typeof UpdateCampaignScheduleCommand === "function");
assert(typeof UpdateCampaignSourceCommand === "function");
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
assert(ConflictException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(InternalServerException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(InvalidCampaignStateException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(InvalidStateException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(ResourceNotFoundException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(ThrottlingException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(ValidationException.prototype instanceof ConnectCampaignsV2ServiceException);
assert(ConnectCampaignsV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCampaigns === "function");
assert(typeof paginateListConnectInstanceIntegrations === "function");
console.log(`ConnectCampaignsV2 index test passed.`);

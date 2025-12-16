import {
  AccessDeniedException,
  AccessDeniedException$,
  AgentlessDialerConfig$,
  AnswerMachineDetectionConfig$,
  Campaign$,
  CampaignFilters$,
  CampaignState,
  CampaignSummary$,
  ConflictException,
  ConflictException$,
  ConnectCampaigns,
  ConnectCampaignsClient,
  ConnectCampaignsServiceException,
  CreateCampaign$,
  CreateCampaignCommand,
  CreateCampaignRequest$,
  CreateCampaignResponse$,
  DeleteCampaign$,
  DeleteCampaignCommand,
  DeleteCampaignRequest$,
  DeleteConnectInstanceConfig$,
  DeleteConnectInstanceConfigCommand,
  DeleteConnectInstanceConfigRequest$,
  DeleteInstanceOnboardingJob$,
  DeleteInstanceOnboardingJobCommand,
  DeleteInstanceOnboardingJobRequest$,
  DescribeCampaign$,
  DescribeCampaignCommand,
  DescribeCampaignRequest$,
  DescribeCampaignResponse$,
  DialRequest$,
  DialerConfig$,
  EncryptionConfig$,
  EncryptionType,
  FailedCampaignStateResponse$,
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
  GetInstanceOnboardingJobStatus$,
  GetInstanceOnboardingJobStatusCommand,
  GetInstanceOnboardingJobStatusRequest$,
  GetInstanceOnboardingJobStatusResponse$,
  InstanceConfig$,
  InstanceIdFilter$,
  InstanceIdFilterOperator,
  InstanceOnboardingJobFailureCode,
  InstanceOnboardingJobStatus$,
  InstanceOnboardingJobStatusCode,
  InternalServerException,
  InternalServerException$,
  InvalidCampaignStateException,
  InvalidCampaignStateException$,
  InvalidStateException,
  InvalidStateException$,
  ListCampaigns$,
  ListCampaignsCommand,
  ListCampaignsRequest$,
  ListCampaignsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OutboundCallConfig$,
  PauseCampaign$,
  PauseCampaignCommand,
  PauseCampaignRequest$,
  PredictiveDialerConfig$,
  ProgressiveDialerConfig$,
  PutDialRequestBatch$,
  PutDialRequestBatchCommand,
  PutDialRequestBatchRequest$,
  PutDialRequestBatchResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResumeCampaign$,
  ResumeCampaignCommand,
  ResumeCampaignRequest$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
  SuccessfulRequest$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateCampaignDialerConfig$,
  UpdateCampaignDialerConfigCommand,
  UpdateCampaignDialerConfigRequest$,
  UpdateCampaignName$,
  UpdateCampaignNameCommand,
  UpdateCampaignNameRequest$,
  UpdateCampaignOutboundCallConfig$,
  UpdateCampaignOutboundCallConfigCommand,
  UpdateCampaignOutboundCallConfigRequest$,
  ValidationException,
  ValidationException$,
  paginateListCampaigns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCampaignsClient === "function");
assert(typeof ConnectCampaigns === "function");
// commands
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateCampaign$ === "object");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaign$ === "object");
assert(typeof DeleteConnectInstanceConfigCommand === "function");
assert(typeof DeleteConnectInstanceConfig$ === "object");
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
assert(typeof GetInstanceOnboardingJobStatusCommand === "function");
assert(typeof GetInstanceOnboardingJobStatus$ === "object");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListCampaigns$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PauseCampaignCommand === "function");
assert(typeof PauseCampaign$ === "object");
assert(typeof PutDialRequestBatchCommand === "function");
assert(typeof PutDialRequestBatch$ === "object");
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
assert(typeof UpdateCampaignDialerConfigCommand === "function");
assert(typeof UpdateCampaignDialerConfig$ === "object");
assert(typeof UpdateCampaignNameCommand === "function");
assert(typeof UpdateCampaignName$ === "object");
assert(typeof UpdateCampaignOutboundCallConfigCommand === "function");
assert(typeof UpdateCampaignOutboundCallConfig$ === "object");
// structural schemas
assert(typeof AgentlessDialerConfig$ === "object");
assert(typeof AnswerMachineDetectionConfig$ === "object");
assert(typeof Campaign$ === "object");
assert(typeof CampaignFilters$ === "object");
assert(typeof CampaignSummary$ === "object");
assert(typeof CreateCampaignRequest$ === "object");
assert(typeof CreateCampaignResponse$ === "object");
assert(typeof DeleteCampaignRequest$ === "object");
assert(typeof DeleteConnectInstanceConfigRequest$ === "object");
assert(typeof DeleteInstanceOnboardingJobRequest$ === "object");
assert(typeof DescribeCampaignRequest$ === "object");
assert(typeof DescribeCampaignResponse$ === "object");
assert(typeof DialerConfig$ === "object");
assert(typeof DialRequest$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof FailedCampaignStateResponse$ === "object");
assert(typeof FailedRequest$ === "object");
assert(typeof GetCampaignStateBatchRequest$ === "object");
assert(typeof GetCampaignStateBatchResponse$ === "object");
assert(typeof GetCampaignStateRequest$ === "object");
assert(typeof GetCampaignStateResponse$ === "object");
assert(typeof GetConnectInstanceConfigRequest$ === "object");
assert(typeof GetConnectInstanceConfigResponse$ === "object");
assert(typeof GetInstanceOnboardingJobStatusRequest$ === "object");
assert(typeof GetInstanceOnboardingJobStatusResponse$ === "object");
assert(typeof InstanceConfig$ === "object");
assert(typeof InstanceIdFilter$ === "object");
assert(typeof InstanceOnboardingJobStatus$ === "object");
assert(typeof ListCampaignsRequest$ === "object");
assert(typeof ListCampaignsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OutboundCallConfig$ === "object");
assert(typeof PauseCampaignRequest$ === "object");
assert(typeof PredictiveDialerConfig$ === "object");
assert(typeof ProgressiveDialerConfig$ === "object");
assert(typeof PutDialRequestBatchRequest$ === "object");
assert(typeof PutDialRequestBatchResponse$ === "object");
assert(typeof ResumeCampaignRequest$ === "object");
assert(typeof StartCampaignRequest$ === "object");
assert(typeof StartInstanceOnboardingJobRequest$ === "object");
assert(typeof StartInstanceOnboardingJobResponse$ === "object");
assert(typeof StopCampaignRequest$ === "object");
assert(typeof SuccessfulCampaignStateResponse$ === "object");
assert(typeof SuccessfulRequest$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateCampaignDialerConfigRequest$ === "object");
assert(typeof UpdateCampaignNameRequest$ === "object");
assert(typeof UpdateCampaignOutboundCallConfigRequest$ === "object");
// enums
assert(typeof CampaignState === "object");
assert(typeof EncryptionType === "object");
assert(typeof FailureCode === "object");
assert(typeof GetCampaignStateBatchFailureCode === "object");
assert(typeof InstanceIdFilterOperator === "object");
assert(typeof InstanceOnboardingJobFailureCode === "object");
assert(typeof InstanceOnboardingJobStatusCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidCampaignStateException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof InvalidCampaignStateException$ === "object");
assert(InvalidStateException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof InvalidStateException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ConnectCampaignsServiceException);
assert(typeof ValidationException$ === "object");
assert(ConnectCampaignsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCampaigns === "function");
console.log(`ConnectCampaigns index test passed.`);

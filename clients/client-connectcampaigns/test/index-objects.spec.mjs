import {
  AccessDeniedException,
  CampaignState,
  ConflictException,
  ConnectCampaigns,
  ConnectCampaignsClient,
  ConnectCampaignsServiceException,
  CreateCampaignCommand,
  DeleteCampaignCommand,
  DeleteConnectInstanceConfigCommand,
  DeleteInstanceOnboardingJobCommand,
  DescribeCampaignCommand,
  EncryptionType,
  FailureCode,
  GetCampaignStateBatchCommand,
  GetCampaignStateBatchFailureCode,
  GetCampaignStateCommand,
  GetConnectInstanceConfigCommand,
  GetInstanceOnboardingJobStatusCommand,
  InstanceIdFilterOperator,
  InstanceOnboardingJobFailureCode,
  InstanceOnboardingJobStatusCode,
  InternalServerException,
  InvalidCampaignStateException,
  InvalidStateException,
  ListCampaignsCommand,
  ListTagsForResourceCommand,
  PauseCampaignCommand,
  PutDialRequestBatchCommand,
  ResourceNotFoundException,
  ResumeCampaignCommand,
  ServiceQuotaExceededException,
  StartCampaignCommand,
  StartInstanceOnboardingJobCommand,
  StopCampaignCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateCampaignDialerConfigCommand,
  UpdateCampaignNameCommand,
  UpdateCampaignOutboundCallConfigCommand,
  ValidationException,
  paginateListCampaigns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCampaignsClient === "function");
assert(typeof ConnectCampaigns === "function");
// commands
assert(typeof CreateCampaignCommand === "function");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteConnectInstanceConfigCommand === "function");
assert(typeof DeleteInstanceOnboardingJobCommand === "function");
assert(typeof DescribeCampaignCommand === "function");
assert(typeof GetCampaignStateCommand === "function");
assert(typeof GetCampaignStateBatchCommand === "function");
assert(typeof GetConnectInstanceConfigCommand === "function");
assert(typeof GetInstanceOnboardingJobStatusCommand === "function");
assert(typeof ListCampaignsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PauseCampaignCommand === "function");
assert(typeof PutDialRequestBatchCommand === "function");
assert(typeof ResumeCampaignCommand === "function");
assert(typeof StartCampaignCommand === "function");
assert(typeof StartInstanceOnboardingJobCommand === "function");
assert(typeof StopCampaignCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCampaignDialerConfigCommand === "function");
assert(typeof UpdateCampaignNameCommand === "function");
assert(typeof UpdateCampaignOutboundCallConfigCommand === "function");
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
assert(ConflictException.prototype instanceof ConnectCampaignsServiceException);
assert(InternalServerException.prototype instanceof ConnectCampaignsServiceException);
assert(InvalidCampaignStateException.prototype instanceof ConnectCampaignsServiceException);
assert(InvalidStateException.prototype instanceof ConnectCampaignsServiceException);
assert(ResourceNotFoundException.prototype instanceof ConnectCampaignsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ConnectCampaignsServiceException);
assert(ThrottlingException.prototype instanceof ConnectCampaignsServiceException);
assert(ValidationException.prototype instanceof ConnectCampaignsServiceException);
assert(ConnectCampaignsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCampaigns === "function");
console.log(`ConnectCampaigns index test passed.`);

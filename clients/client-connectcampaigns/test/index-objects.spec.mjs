import {
  CampaignState,
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
  ListCampaignsCommand,
  ListTagsForResourceCommand,
  PauseCampaignCommand,
  PutDialRequestBatchCommand,
  ResumeCampaignCommand,
  StartCampaignCommand,
  StartInstanceOnboardingJobCommand,
  StopCampaignCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCampaignDialerConfigCommand,
  UpdateCampaignNameCommand,
  UpdateCampaignOutboundCallConfigCommand,
  paginateListCampaigns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectCampaignsClient === "function")
assert(typeof ConnectCampaigns === "function")
// commands
assert(typeof CreateCampaignCommand === "function")
assert(typeof DeleteCampaignCommand === "function")
assert(typeof DeleteConnectInstanceConfigCommand === "function")
assert(typeof DeleteInstanceOnboardingJobCommand === "function")
assert(typeof DescribeCampaignCommand === "function")
assert(typeof GetCampaignStateCommand === "function")
assert(typeof GetCampaignStateBatchCommand === "function")
assert(typeof GetConnectInstanceConfigCommand === "function")
assert(typeof GetInstanceOnboardingJobStatusCommand === "function")
assert(typeof ListCampaignsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PauseCampaignCommand === "function")
assert(typeof PutDialRequestBatchCommand === "function")
assert(typeof ResumeCampaignCommand === "function")
assert(typeof StartCampaignCommand === "function")
assert(typeof StartInstanceOnboardingJobCommand === "function")
assert(typeof StopCampaignCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCampaignDialerConfigCommand === "function")
assert(typeof UpdateCampaignNameCommand === "function")
assert(typeof UpdateCampaignOutboundCallConfigCommand === "function")
// enums
assert(typeof CampaignState === "object");
assert(typeof EncryptionType === "object");
assert(typeof FailureCode === "object");
assert(typeof GetCampaignStateBatchFailureCode === "object");
assert(typeof InstanceIdFilterOperator === "object");
assert(typeof InstanceOnboardingJobFailureCode === "object");
assert(typeof InstanceOnboardingJobStatusCode === "object");
// errors
assert(ConnectCampaignsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCampaigns === "function")
console.log(`ConnectCampaigns index test passed.`);

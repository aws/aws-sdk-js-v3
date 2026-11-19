import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  DataAsAServiceConfigurationDetail$,
  DeliveryOptionType,
  DeploymentConfigurationDetail$,
  DeploymentConfigurationJobErrorCode,
  DeploymentConfigurationJobStatus,
  DeploymentConfigurationJobSummary$,
  DeploymentParameterInput$,
  GetDeploymentConfiguration$,
  GetDeploymentConfigurationCommand,
  GetDeploymentConfigurationJob$,
  GetDeploymentConfigurationJobCommand,
  GetDeploymentConfigurationJobRequest$,
  GetDeploymentConfigurationJobResponse$,
  GetDeploymentConfigurationRequest$,
  GetDeploymentConfigurationResponse$,
  InternalServerException,
  InternalServerException$,
  ListDeploymentConfigurationJobs$,
  ListDeploymentConfigurationJobsCommand,
  ListDeploymentConfigurationJobsRequest$,
  ListDeploymentConfigurationJobsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MarketplaceDeployment,
  MarketplaceDeploymentClient,
  MarketplaceDeploymentServiceException,
  paginateListDeploymentConfigurationJobs,
  PutDeploymentParameter$,
  PutDeploymentParameterCommand,
  PutDeploymentParameterRequest$,
  PutDeploymentParameterResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartDeploymentConfigurationJob$,
  StartDeploymentConfigurationJobCommand,
  StartDeploymentConfigurationJobRequest$,
  StartDeploymentConfigurationJobResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceDeploymentClient === "function");
assert(typeof MarketplaceDeployment === "function");
// commands
assert(typeof GetDeploymentConfigurationCommand === "function");
assert(typeof GetDeploymentConfiguration$ === "object");
assert(typeof GetDeploymentConfigurationJobCommand === "function");
assert(typeof GetDeploymentConfigurationJob$ === "object");
assert(typeof ListDeploymentConfigurationJobsCommand === "function");
assert(typeof ListDeploymentConfigurationJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutDeploymentParameterCommand === "function");
assert(typeof PutDeploymentParameter$ === "object");
assert(typeof StartDeploymentConfigurationJobCommand === "function");
assert(typeof StartDeploymentConfigurationJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof DataAsAServiceConfigurationDetail$ === "object");
assert(typeof DeploymentConfigurationDetail$ === "object");
assert(typeof DeploymentConfigurationJobSummary$ === "object");
assert(typeof DeploymentParameterInput$ === "object");
assert(typeof GetDeploymentConfigurationJobRequest$ === "object");
assert(typeof GetDeploymentConfigurationJobResponse$ === "object");
assert(typeof GetDeploymentConfigurationRequest$ === "object");
assert(typeof GetDeploymentConfigurationResponse$ === "object");
assert(typeof ListDeploymentConfigurationJobsRequest$ === "object");
assert(typeof ListDeploymentConfigurationJobsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutDeploymentParameterRequest$ === "object");
assert(typeof PutDeploymentParameterResponse$ === "object");
assert(typeof StartDeploymentConfigurationJobRequest$ === "object");
assert(typeof StartDeploymentConfigurationJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof DeliveryOptionType === "object");
assert(typeof DeploymentConfigurationJobErrorCode === "object");
assert(typeof DeploymentConfigurationJobStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MarketplaceDeploymentServiceException);
assert(typeof ValidationException$ === "object");
assert(MarketplaceDeploymentServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeploymentConfigurationJobs === "function");
console.log(`MarketplaceDeployment index test passed.`);

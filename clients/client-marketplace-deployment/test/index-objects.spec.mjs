import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  DeploymentParameterInput$,
  InternalServerException,
  InternalServerException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MarketplaceDeployment,
  MarketplaceDeploymentClient,
  MarketplaceDeploymentServiceException,
  PutDeploymentParameter$,
  PutDeploymentParameterCommand,
  PutDeploymentParameterRequest$,
  PutDeploymentParameterResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutDeploymentParameterCommand === "function");
assert(typeof PutDeploymentParameter$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof DeploymentParameterInput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutDeploymentParameterRequest$ === "object");
assert(typeof PutDeploymentParameterResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
console.log(`MarketplaceDeployment index test passed.`);

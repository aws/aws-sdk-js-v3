import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ListTagsForResourceCommand,
  MarketplaceDeployment,
  MarketplaceDeploymentClient,
  MarketplaceDeploymentServiceException,
  PutDeploymentParameterCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceDeploymentClient === "function");
assert(typeof MarketplaceDeployment === "function");
// commands
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutDeploymentParameterCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceDeploymentServiceException);
assert(ConflictException.prototype instanceof MarketplaceDeploymentServiceException);
assert(InternalServerException.prototype instanceof MarketplaceDeploymentServiceException);
assert(ResourceNotFoundException.prototype instanceof MarketplaceDeploymentServiceException);
assert(ServiceQuotaExceededException.prototype instanceof MarketplaceDeploymentServiceException);
assert(ThrottlingException.prototype instanceof MarketplaceDeploymentServiceException);
assert(ValidationException.prototype instanceof MarketplaceDeploymentServiceException);
assert(MarketplaceDeploymentServiceException.prototype instanceof Error);
console.log(`MarketplaceDeployment index test passed.`);

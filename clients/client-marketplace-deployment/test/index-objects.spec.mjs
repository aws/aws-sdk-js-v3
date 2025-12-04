import {
  ListTagsForResourceCommand,
  MarketplaceDeployment,
  MarketplaceDeploymentClient,
  MarketplaceDeploymentServiceException,
  PutDeploymentParameterCommand,
  TagResourceCommand,
  UntagResourceCommand,
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
assert(MarketplaceDeploymentServiceException.prototype instanceof Error);
console.log(`MarketplaceDeployment index test passed.`);

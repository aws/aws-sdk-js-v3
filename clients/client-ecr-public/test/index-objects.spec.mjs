import {
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  CompleteLayerUploadCommand,
  CreateRepositoryCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryPolicyCommand,
  DescribeImageTagsCommand,
  DescribeImagesCommand,
  DescribeRegistriesCommand,
  DescribeRepositoriesCommand,
  ECRPUBLIC,
  ECRPUBLICClient,
  ECRPUBLICServiceException,
  GetAuthorizationTokenCommand,
  GetRegistryCatalogDataCommand,
  GetRepositoryCatalogDataCommand,
  GetRepositoryPolicyCommand,
  ImageFailureCode,
  InitiateLayerUploadCommand,
  LayerAvailability,
  LayerFailureCode,
  ListTagsForResourceCommand,
  PutImageCommand,
  PutRegistryCatalogDataCommand,
  PutRepositoryCatalogDataCommand,
  RegistryAliasStatus,
  SetRepositoryPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UploadLayerPartCommand,
  paginateDescribeImageTags,
  paginateDescribeImages,
  paginateDescribeRegistries,
  paginateDescribeRepositories,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ECRPUBLICClient === "function");
assert(typeof ECRPUBLIC === "function");
// commands
assert(typeof BatchCheckLayerAvailabilityCommand === "function");
assert(typeof BatchDeleteImageCommand === "function");
assert(typeof CompleteLayerUploadCommand === "function");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepositoryPolicyCommand === "function");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImageTagsCommand === "function");
assert(typeof DescribeRegistriesCommand === "function");
assert(typeof DescribeRepositoriesCommand === "function");
assert(typeof GetAuthorizationTokenCommand === "function");
assert(typeof GetRegistryCatalogDataCommand === "function");
assert(typeof GetRepositoryCatalogDataCommand === "function");
assert(typeof GetRepositoryPolicyCommand === "function");
assert(typeof InitiateLayerUploadCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutImageCommand === "function");
assert(typeof PutRegistryCatalogDataCommand === "function");
assert(typeof PutRepositoryCatalogDataCommand === "function");
assert(typeof SetRepositoryPolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UploadLayerPartCommand === "function");
// enums
assert(typeof ImageFailureCode === "object");
assert(typeof LayerAvailability === "object");
assert(typeof LayerFailureCode === "object");
assert(typeof RegistryAliasStatus === "object");
// errors
assert(ECRPUBLICServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeImageTags === "function");
assert(typeof paginateDescribeImages === "function");
assert(typeof paginateDescribeRegistries === "function");
assert(typeof paginateDescribeRepositories === "function");
console.log(`ECRPUBLIC index test passed.`);

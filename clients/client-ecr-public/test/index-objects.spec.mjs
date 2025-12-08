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
  EmptyUploadException,
  GetAuthorizationTokenCommand,
  GetRegistryCatalogDataCommand,
  GetRepositoryCatalogDataCommand,
  GetRepositoryPolicyCommand,
  ImageAlreadyExistsException,
  ImageDigestDoesNotMatchException,
  ImageFailureCode,
  ImageNotFoundException,
  ImageTagAlreadyExistsException,
  InitiateLayerUploadCommand,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  LayerAlreadyExistsException,
  LayerAvailability,
  LayerFailureCode,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LimitExceededException,
  ListTagsForResourceCommand,
  PutImageCommand,
  PutRegistryCatalogDataCommand,
  PutRepositoryCatalogDataCommand,
  ReferencedImagesNotFoundException,
  RegistryAliasStatus,
  RegistryNotFoundException,
  RepositoryAlreadyExistsException,
  RepositoryCatalogDataNotFoundException,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ServerException,
  SetRepositoryPolicyCommand,
  TagResourceCommand,
  TooManyTagsException,
  UnsupportedCommandException,
  UntagResourceCommand,
  UploadLayerPartCommand,
  UploadNotFoundException,
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
assert(EmptyUploadException.prototype instanceof ECRPUBLICServiceException);
assert(ImageAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(ImageDigestDoesNotMatchException.prototype instanceof ECRPUBLICServiceException);
assert(ImageNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(ImageTagAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(InvalidLayerException.prototype instanceof ECRPUBLICServiceException);
assert(InvalidLayerPartException.prototype instanceof ECRPUBLICServiceException);
assert(InvalidParameterException.prototype instanceof ECRPUBLICServiceException);
assert(InvalidTagParameterException.prototype instanceof ECRPUBLICServiceException);
assert(LayerAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(LayerPartTooSmallException.prototype instanceof ECRPUBLICServiceException);
assert(LayersNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(LimitExceededException.prototype instanceof ECRPUBLICServiceException);
assert(ReferencedImagesNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(RegistryNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(RepositoryAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(RepositoryCatalogDataNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(RepositoryNotEmptyException.prototype instanceof ECRPUBLICServiceException);
assert(RepositoryNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(RepositoryPolicyNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(ServerException.prototype instanceof ECRPUBLICServiceException);
assert(TooManyTagsException.prototype instanceof ECRPUBLICServiceException);
assert(UnsupportedCommandException.prototype instanceof ECRPUBLICServiceException);
assert(UploadNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(ECRPUBLICServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeImageTags === "function");
assert(typeof paginateDescribeImages === "function");
assert(typeof paginateDescribeRegistries === "function");
assert(typeof paginateDescribeRepositories === "function");
console.log(`ECRPUBLIC index test passed.`);

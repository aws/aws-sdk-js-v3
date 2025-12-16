import {
  AuthorizationData$,
  BatchCheckLayerAvailability$,
  BatchCheckLayerAvailabilityCommand,
  BatchCheckLayerAvailabilityRequest$,
  BatchCheckLayerAvailabilityResponse$,
  BatchDeleteImage$,
  BatchDeleteImageCommand,
  BatchDeleteImageRequest$,
  BatchDeleteImageResponse$,
  CompleteLayerUpload$,
  CompleteLayerUploadCommand,
  CompleteLayerUploadRequest$,
  CompleteLayerUploadResponse$,
  CreateRepository$,
  CreateRepositoryCommand,
  CreateRepositoryRequest$,
  CreateRepositoryResponse$,
  DeleteRepository$,
  DeleteRepositoryCommand,
  DeleteRepositoryPolicy$,
  DeleteRepositoryPolicyCommand,
  DeleteRepositoryPolicyRequest$,
  DeleteRepositoryPolicyResponse$,
  DeleteRepositoryRequest$,
  DeleteRepositoryResponse$,
  DescribeImageTags$,
  DescribeImageTagsCommand,
  DescribeImageTagsRequest$,
  DescribeImageTagsResponse$,
  DescribeImages$,
  DescribeImagesCommand,
  DescribeImagesRequest$,
  DescribeImagesResponse$,
  DescribeRegistries$,
  DescribeRegistriesCommand,
  DescribeRegistriesRequest$,
  DescribeRegistriesResponse$,
  DescribeRepositories$,
  DescribeRepositoriesCommand,
  DescribeRepositoriesRequest$,
  DescribeRepositoriesResponse$,
  ECRPUBLIC,
  ECRPUBLICClient,
  ECRPUBLICServiceException,
  EmptyUploadException,
  EmptyUploadException$,
  GetAuthorizationToken$,
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenRequest$,
  GetAuthorizationTokenResponse$,
  GetRegistryCatalogData$,
  GetRegistryCatalogDataCommand,
  GetRegistryCatalogDataRequest$,
  GetRegistryCatalogDataResponse$,
  GetRepositoryCatalogData$,
  GetRepositoryCatalogDataCommand,
  GetRepositoryCatalogDataRequest$,
  GetRepositoryCatalogDataResponse$,
  GetRepositoryPolicy$,
  GetRepositoryPolicyCommand,
  GetRepositoryPolicyRequest$,
  GetRepositoryPolicyResponse$,
  Image$,
  ImageAlreadyExistsException,
  ImageAlreadyExistsException$,
  ImageDetail$,
  ImageDigestDoesNotMatchException,
  ImageDigestDoesNotMatchException$,
  ImageFailure$,
  ImageFailureCode,
  ImageIdentifier$,
  ImageNotFoundException,
  ImageNotFoundException$,
  ImageTagAlreadyExistsException,
  ImageTagAlreadyExistsException$,
  ImageTagDetail$,
  InitiateLayerUpload$,
  InitiateLayerUploadCommand,
  InitiateLayerUploadRequest$,
  InitiateLayerUploadResponse$,
  InvalidLayerException,
  InvalidLayerException$,
  InvalidLayerPartException,
  InvalidLayerPartException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidTagParameterException,
  InvalidTagParameterException$,
  Layer$,
  LayerAlreadyExistsException,
  LayerAlreadyExistsException$,
  LayerAvailability,
  LayerFailure$,
  LayerFailureCode,
  LayerPartTooSmallException,
  LayerPartTooSmallException$,
  LayersNotFoundException,
  LayersNotFoundException$,
  LimitExceededException,
  LimitExceededException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  PutImage$,
  PutImageCommand,
  PutImageRequest$,
  PutImageResponse$,
  PutRegistryCatalogData$,
  PutRegistryCatalogDataCommand,
  PutRegistryCatalogDataRequest$,
  PutRegistryCatalogDataResponse$,
  PutRepositoryCatalogData$,
  PutRepositoryCatalogDataCommand,
  PutRepositoryCatalogDataRequest$,
  PutRepositoryCatalogDataResponse$,
  ReferencedImageDetail$,
  ReferencedImagesNotFoundException,
  ReferencedImagesNotFoundException$,
  Registry$,
  RegistryAlias$,
  RegistryAliasStatus,
  RegistryCatalogData$,
  RegistryNotFoundException,
  RegistryNotFoundException$,
  Repository$,
  RepositoryAlreadyExistsException,
  RepositoryAlreadyExistsException$,
  RepositoryCatalogData$,
  RepositoryCatalogDataInput$,
  RepositoryCatalogDataNotFoundException,
  RepositoryCatalogDataNotFoundException$,
  RepositoryNotEmptyException,
  RepositoryNotEmptyException$,
  RepositoryNotFoundException,
  RepositoryNotFoundException$,
  RepositoryPolicyNotFoundException,
  RepositoryPolicyNotFoundException$,
  ServerException,
  ServerException$,
  SetRepositoryPolicy$,
  SetRepositoryPolicyCommand,
  SetRepositoryPolicyRequest$,
  SetRepositoryPolicyResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  UnsupportedCommandException,
  UnsupportedCommandException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UploadLayerPart$,
  UploadLayerPartCommand,
  UploadLayerPartRequest$,
  UploadLayerPartResponse$,
  UploadNotFoundException,
  UploadNotFoundException$,
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
assert(typeof BatchCheckLayerAvailability$ === "object");
assert(typeof BatchDeleteImageCommand === "function");
assert(typeof BatchDeleteImage$ === "object");
assert(typeof CompleteLayerUploadCommand === "function");
assert(typeof CompleteLayerUpload$ === "object");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateRepository$ === "object");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepository$ === "object");
assert(typeof DeleteRepositoryPolicyCommand === "function");
assert(typeof DeleteRepositoryPolicy$ === "object");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImages$ === "object");
assert(typeof DescribeImageTagsCommand === "function");
assert(typeof DescribeImageTags$ === "object");
assert(typeof DescribeRegistriesCommand === "function");
assert(typeof DescribeRegistries$ === "object");
assert(typeof DescribeRepositoriesCommand === "function");
assert(typeof DescribeRepositories$ === "object");
assert(typeof GetAuthorizationTokenCommand === "function");
assert(typeof GetAuthorizationToken$ === "object");
assert(typeof GetRegistryCatalogDataCommand === "function");
assert(typeof GetRegistryCatalogData$ === "object");
assert(typeof GetRepositoryCatalogDataCommand === "function");
assert(typeof GetRepositoryCatalogData$ === "object");
assert(typeof GetRepositoryPolicyCommand === "function");
assert(typeof GetRepositoryPolicy$ === "object");
assert(typeof InitiateLayerUploadCommand === "function");
assert(typeof InitiateLayerUpload$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutImageCommand === "function");
assert(typeof PutImage$ === "object");
assert(typeof PutRegistryCatalogDataCommand === "function");
assert(typeof PutRegistryCatalogData$ === "object");
assert(typeof PutRepositoryCatalogDataCommand === "function");
assert(typeof PutRepositoryCatalogData$ === "object");
assert(typeof SetRepositoryPolicyCommand === "function");
assert(typeof SetRepositoryPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UploadLayerPartCommand === "function");
assert(typeof UploadLayerPart$ === "object");
// structural schemas
assert(typeof AuthorizationData$ === "object");
assert(typeof BatchCheckLayerAvailabilityRequest$ === "object");
assert(typeof BatchCheckLayerAvailabilityResponse$ === "object");
assert(typeof BatchDeleteImageRequest$ === "object");
assert(typeof BatchDeleteImageResponse$ === "object");
assert(typeof CompleteLayerUploadRequest$ === "object");
assert(typeof CompleteLayerUploadResponse$ === "object");
assert(typeof CreateRepositoryRequest$ === "object");
assert(typeof CreateRepositoryResponse$ === "object");
assert(typeof DeleteRepositoryPolicyRequest$ === "object");
assert(typeof DeleteRepositoryPolicyResponse$ === "object");
assert(typeof DeleteRepositoryRequest$ === "object");
assert(typeof DeleteRepositoryResponse$ === "object");
assert(typeof DescribeImagesRequest$ === "object");
assert(typeof DescribeImagesResponse$ === "object");
assert(typeof DescribeImageTagsRequest$ === "object");
assert(typeof DescribeImageTagsResponse$ === "object");
assert(typeof DescribeRegistriesRequest$ === "object");
assert(typeof DescribeRegistriesResponse$ === "object");
assert(typeof DescribeRepositoriesRequest$ === "object");
assert(typeof DescribeRepositoriesResponse$ === "object");
assert(typeof GetAuthorizationTokenRequest$ === "object");
assert(typeof GetAuthorizationTokenResponse$ === "object");
assert(typeof GetRegistryCatalogDataRequest$ === "object");
assert(typeof GetRegistryCatalogDataResponse$ === "object");
assert(typeof GetRepositoryCatalogDataRequest$ === "object");
assert(typeof GetRepositoryCatalogDataResponse$ === "object");
assert(typeof GetRepositoryPolicyRequest$ === "object");
assert(typeof GetRepositoryPolicyResponse$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageDetail$ === "object");
assert(typeof ImageFailure$ === "object");
assert(typeof ImageIdentifier$ === "object");
assert(typeof ImageTagDetail$ === "object");
assert(typeof InitiateLayerUploadRequest$ === "object");
assert(typeof InitiateLayerUploadResponse$ === "object");
assert(typeof Layer$ === "object");
assert(typeof LayerFailure$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutImageRequest$ === "object");
assert(typeof PutImageResponse$ === "object");
assert(typeof PutRegistryCatalogDataRequest$ === "object");
assert(typeof PutRegistryCatalogDataResponse$ === "object");
assert(typeof PutRepositoryCatalogDataRequest$ === "object");
assert(typeof PutRepositoryCatalogDataResponse$ === "object");
assert(typeof ReferencedImageDetail$ === "object");
assert(typeof Registry$ === "object");
assert(typeof RegistryAlias$ === "object");
assert(typeof RegistryCatalogData$ === "object");
assert(typeof Repository$ === "object");
assert(typeof RepositoryCatalogData$ === "object");
assert(typeof RepositoryCatalogDataInput$ === "object");
assert(typeof SetRepositoryPolicyRequest$ === "object");
assert(typeof SetRepositoryPolicyResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UploadLayerPartRequest$ === "object");
assert(typeof UploadLayerPartResponse$ === "object");
// enums
assert(typeof ImageFailureCode === "object");
assert(typeof LayerAvailability === "object");
assert(typeof LayerFailureCode === "object");
assert(typeof RegistryAliasStatus === "object");
// errors
assert(EmptyUploadException.prototype instanceof ECRPUBLICServiceException);
assert(typeof EmptyUploadException$ === "object");
assert(ImageAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(typeof ImageAlreadyExistsException$ === "object");
assert(ImageDigestDoesNotMatchException.prototype instanceof ECRPUBLICServiceException);
assert(typeof ImageDigestDoesNotMatchException$ === "object");
assert(ImageNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof ImageNotFoundException$ === "object");
assert(ImageTagAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(typeof ImageTagAlreadyExistsException$ === "object");
assert(InvalidLayerException.prototype instanceof ECRPUBLICServiceException);
assert(typeof InvalidLayerException$ === "object");
assert(InvalidLayerPartException.prototype instanceof ECRPUBLICServiceException);
assert(typeof InvalidLayerPartException$ === "object");
assert(InvalidParameterException.prototype instanceof ECRPUBLICServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidTagParameterException.prototype instanceof ECRPUBLICServiceException);
assert(typeof InvalidTagParameterException$ === "object");
assert(LayerAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(typeof LayerAlreadyExistsException$ === "object");
assert(LayerPartTooSmallException.prototype instanceof ECRPUBLICServiceException);
assert(typeof LayerPartTooSmallException$ === "object");
assert(LayersNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof LayersNotFoundException$ === "object");
assert(LimitExceededException.prototype instanceof ECRPUBLICServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ReferencedImagesNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof ReferencedImagesNotFoundException$ === "object");
assert(RegistryNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof RegistryNotFoundException$ === "object");
assert(RepositoryAlreadyExistsException.prototype instanceof ECRPUBLICServiceException);
assert(typeof RepositoryAlreadyExistsException$ === "object");
assert(RepositoryCatalogDataNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof RepositoryCatalogDataNotFoundException$ === "object");
assert(RepositoryNotEmptyException.prototype instanceof ECRPUBLICServiceException);
assert(typeof RepositoryNotEmptyException$ === "object");
assert(RepositoryNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof RepositoryNotFoundException$ === "object");
assert(RepositoryPolicyNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof RepositoryPolicyNotFoundException$ === "object");
assert(ServerException.prototype instanceof ECRPUBLICServiceException);
assert(typeof ServerException$ === "object");
assert(TooManyTagsException.prototype instanceof ECRPUBLICServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnsupportedCommandException.prototype instanceof ECRPUBLICServiceException);
assert(typeof UnsupportedCommandException$ === "object");
assert(UploadNotFoundException.prototype instanceof ECRPUBLICServiceException);
assert(typeof UploadNotFoundException$ === "object");
assert(ECRPUBLICServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeImageTags === "function");
assert(typeof paginateDescribeImages === "function");
assert(typeof paginateDescribeRegistries === "function");
assert(typeof paginateDescribeRepositories === "function");
console.log(`ECRPUBLIC index test passed.`);

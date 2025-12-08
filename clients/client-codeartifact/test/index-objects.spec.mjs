import {
  AccessDeniedException,
  AllowPublish,
  AllowUpstream,
  AssociateExternalConnectionCommand,
  Codeartifact,
  CodeartifactClient,
  CodeartifactServiceException,
  ConflictException,
  CopyPackageVersionsCommand,
  CreateDomainCommand,
  CreatePackageGroupCommand,
  CreateRepositoryCommand,
  DeleteDomainCommand,
  DeleteDomainPermissionsPolicyCommand,
  DeletePackageCommand,
  DeletePackageGroupCommand,
  DeletePackageVersionsCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryPermissionsPolicyCommand,
  DescribeDomainCommand,
  DescribePackageCommand,
  DescribePackageGroupCommand,
  DescribePackageVersionCommand,
  DescribeRepositoryCommand,
  DisassociateExternalConnectionCommand,
  DisposePackageVersionsCommand,
  DomainStatus,
  EndpointType,
  ExternalConnectionStatus,
  GetAssociatedPackageGroupCommand,
  GetAuthorizationTokenCommand,
  GetDomainPermissionsPolicyCommand,
  GetPackageVersionAssetCommand,
  GetPackageVersionReadmeCommand,
  GetRepositoryEndpointCommand,
  GetRepositoryPermissionsPolicyCommand,
  HashAlgorithm,
  InternalServerException,
  ListAllowedRepositoriesForGroupCommand,
  ListAssociatedPackagesCommand,
  ListDomainsCommand,
  ListPackageGroupsCommand,
  ListPackageVersionAssetsCommand,
  ListPackageVersionDependenciesCommand,
  ListPackageVersionsCommand,
  ListPackagesCommand,
  ListRepositoriesCommand,
  ListRepositoriesInDomainCommand,
  ListSubPackageGroupsCommand,
  ListTagsForResourceCommand,
  PackageFormat,
  PackageGroupAllowedRepositoryUpdateType,
  PackageGroupAssociationType,
  PackageGroupOriginRestrictionMode,
  PackageGroupOriginRestrictionType,
  PackageVersionErrorCode,
  PackageVersionOriginType,
  PackageVersionSortType,
  PackageVersionStatus,
  PublishPackageVersionCommand,
  PutDomainPermissionsPolicyCommand,
  PutPackageOriginConfigurationCommand,
  PutRepositoryPermissionsPolicyCommand,
  ResourceNotFoundException,
  ResourceType,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdatePackageGroupCommand,
  UpdatePackageGroupOriginConfigurationCommand,
  UpdatePackageVersionsStatusCommand,
  UpdateRepositoryCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListAllowedRepositoriesForGroup,
  paginateListAssociatedPackages,
  paginateListDomains,
  paginateListPackageGroups,
  paginateListPackageVersionAssets,
  paginateListPackageVersions,
  paginateListPackages,
  paginateListRepositories,
  paginateListRepositoriesInDomain,
  paginateListSubPackageGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeartifactClient === "function");
assert(typeof Codeartifact === "function");
// commands
assert(typeof AssociateExternalConnectionCommand === "function");
assert(typeof CopyPackageVersionsCommand === "function");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreatePackageGroupCommand === "function");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomainPermissionsPolicyCommand === "function");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackageGroupCommand === "function");
assert(typeof DeletePackageVersionsCommand === "function");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepositoryPermissionsPolicyCommand === "function");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribePackageCommand === "function");
assert(typeof DescribePackageGroupCommand === "function");
assert(typeof DescribePackageVersionCommand === "function");
assert(typeof DescribeRepositoryCommand === "function");
assert(typeof DisassociateExternalConnectionCommand === "function");
assert(typeof DisposePackageVersionsCommand === "function");
assert(typeof GetAssociatedPackageGroupCommand === "function");
assert(typeof GetAuthorizationTokenCommand === "function");
assert(typeof GetDomainPermissionsPolicyCommand === "function");
assert(typeof GetPackageVersionAssetCommand === "function");
assert(typeof GetPackageVersionReadmeCommand === "function");
assert(typeof GetRepositoryEndpointCommand === "function");
assert(typeof GetRepositoryPermissionsPolicyCommand === "function");
assert(typeof ListAllowedRepositoriesForGroupCommand === "function");
assert(typeof ListAssociatedPackagesCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListPackageGroupsCommand === "function");
assert(typeof ListPackagesCommand === "function");
assert(typeof ListPackageVersionAssetsCommand === "function");
assert(typeof ListPackageVersionDependenciesCommand === "function");
assert(typeof ListPackageVersionsCommand === "function");
assert(typeof ListRepositoriesCommand === "function");
assert(typeof ListRepositoriesInDomainCommand === "function");
assert(typeof ListSubPackageGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PublishPackageVersionCommand === "function");
assert(typeof PutDomainPermissionsPolicyCommand === "function");
assert(typeof PutPackageOriginConfigurationCommand === "function");
assert(typeof PutRepositoryPermissionsPolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdatePackageGroupCommand === "function");
assert(typeof UpdatePackageGroupOriginConfigurationCommand === "function");
assert(typeof UpdatePackageVersionsStatusCommand === "function");
assert(typeof UpdateRepositoryCommand === "function");
// enums
assert(typeof AllowPublish === "object");
assert(typeof AllowUpstream === "object");
assert(typeof DomainStatus === "object");
assert(typeof EndpointType === "object");
assert(typeof ExternalConnectionStatus === "object");
assert(typeof HashAlgorithm === "object");
assert(typeof PackageFormat === "object");
assert(typeof PackageGroupAllowedRepositoryUpdateType === "object");
assert(typeof PackageGroupAssociationType === "object");
assert(typeof PackageGroupOriginRestrictionMode === "object");
assert(typeof PackageGroupOriginRestrictionType === "object");
assert(typeof PackageVersionErrorCode === "object");
assert(typeof PackageVersionOriginType === "object");
assert(typeof PackageVersionSortType === "object");
assert(typeof PackageVersionStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof CodeartifactServiceException);
assert(ConflictException.prototype instanceof CodeartifactServiceException);
assert(InternalServerException.prototype instanceof CodeartifactServiceException);
assert(ResourceNotFoundException.prototype instanceof CodeartifactServiceException);
assert(ServiceQuotaExceededException.prototype instanceof CodeartifactServiceException);
assert(ThrottlingException.prototype instanceof CodeartifactServiceException);
assert(ValidationException.prototype instanceof CodeartifactServiceException);
assert(CodeartifactServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAllowedRepositoriesForGroup === "function");
assert(typeof paginateListAssociatedPackages === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListPackageGroups === "function");
assert(typeof paginateListPackageVersionAssets === "function");
assert(typeof paginateListPackageVersions === "function");
assert(typeof paginateListPackages === "function");
assert(typeof paginateListRepositories === "function");
assert(typeof paginateListRepositoriesInDomain === "function");
assert(typeof paginateListSubPackageGroups === "function");
console.log(`Codeartifact index test passed.`);

import {
  AccessDeniedException,
  AccessDeniedException$,
  AllowPublish,
  AllowUpstream,
  AssetSummary$,
  AssociatedPackage$,
  AssociateExternalConnection$,
  AssociateExternalConnectionCommand,
  AssociateExternalConnectionRequest$,
  AssociateExternalConnectionResult$,
  Codeartifact,
  CodeartifactClient,
  CodeartifactServiceException,
  ConflictException,
  ConflictException$,
  CopyPackageVersions$,
  CopyPackageVersionsCommand,
  CopyPackageVersionsRequest$,
  CopyPackageVersionsResult$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainRequest$,
  CreateDomainResult$,
  CreatePackageGroup$,
  CreatePackageGroupCommand,
  CreatePackageGroupRequest$,
  CreatePackageGroupResult$,
  CreateRepository$,
  CreateRepositoryCommand,
  CreateRepositoryRequest$,
  CreateRepositoryResult$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainPermissionsPolicy$,
  DeleteDomainPermissionsPolicyCommand,
  DeleteDomainPermissionsPolicyRequest$,
  DeleteDomainPermissionsPolicyResult$,
  DeleteDomainRequest$,
  DeleteDomainResult$,
  DeletePackage$,
  DeletePackageCommand,
  DeletePackageGroup$,
  DeletePackageGroupCommand,
  DeletePackageGroupRequest$,
  DeletePackageGroupResult$,
  DeletePackageRequest$,
  DeletePackageResult$,
  DeletePackageVersions$,
  DeletePackageVersionsCommand,
  DeletePackageVersionsRequest$,
  DeletePackageVersionsResult$,
  DeleteRepository$,
  DeleteRepositoryCommand,
  DeleteRepositoryPermissionsPolicy$,
  DeleteRepositoryPermissionsPolicyCommand,
  DeleteRepositoryPermissionsPolicyRequest$,
  DeleteRepositoryPermissionsPolicyResult$,
  DeleteRepositoryRequest$,
  DeleteRepositoryResult$,
  DescribeDomain$,
  DescribeDomainCommand,
  DescribeDomainRequest$,
  DescribeDomainResult$,
  DescribePackage$,
  DescribePackageCommand,
  DescribePackageGroup$,
  DescribePackageGroupCommand,
  DescribePackageGroupRequest$,
  DescribePackageGroupResult$,
  DescribePackageRequest$,
  DescribePackageResult$,
  DescribePackageVersion$,
  DescribePackageVersionCommand,
  DescribePackageVersionRequest$,
  DescribePackageVersionResult$,
  DescribeRepository$,
  DescribeRepositoryCommand,
  DescribeRepositoryRequest$,
  DescribeRepositoryResult$,
  DisassociateExternalConnection$,
  DisassociateExternalConnectionCommand,
  DisassociateExternalConnectionRequest$,
  DisassociateExternalConnectionResult$,
  DisposePackageVersions$,
  DisposePackageVersionsCommand,
  DisposePackageVersionsRequest$,
  DisposePackageVersionsResult$,
  DomainDescription$,
  DomainEntryPoint$,
  DomainStatus,
  DomainSummary$,
  EndpointType,
  ExternalConnectionStatus,
  GetAssociatedPackageGroup$,
  GetAssociatedPackageGroupCommand,
  GetAssociatedPackageGroupRequest$,
  GetAssociatedPackageGroupResult$,
  GetAuthorizationToken$,
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenRequest$,
  GetAuthorizationTokenResult$,
  GetDomainPermissionsPolicy$,
  GetDomainPermissionsPolicyCommand,
  GetDomainPermissionsPolicyRequest$,
  GetDomainPermissionsPolicyResult$,
  GetPackageVersionAsset$,
  GetPackageVersionAssetCommand,
  GetPackageVersionAssetRequest$,
  GetPackageVersionAssetResult$,
  GetPackageVersionReadme$,
  GetPackageVersionReadmeCommand,
  GetPackageVersionReadmeRequest$,
  GetPackageVersionReadmeResult$,
  GetRepositoryEndpoint$,
  GetRepositoryEndpointCommand,
  GetRepositoryEndpointRequest$,
  GetRepositoryEndpointResult$,
  GetRepositoryPermissionsPolicy$,
  GetRepositoryPermissionsPolicyCommand,
  GetRepositoryPermissionsPolicyRequest$,
  GetRepositoryPermissionsPolicyResult$,
  HashAlgorithm,
  InternalServerException,
  InternalServerException$,
  LicenseInfo$,
  ListAllowedRepositoriesForGroup$,
  ListAllowedRepositoriesForGroupCommand,
  ListAllowedRepositoriesForGroupRequest$,
  ListAllowedRepositoriesForGroupResult$,
  ListAssociatedPackages$,
  ListAssociatedPackagesCommand,
  ListAssociatedPackagesRequest$,
  ListAssociatedPackagesResult$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResult$,
  ListPackageGroups$,
  ListPackageGroupsCommand,
  ListPackageGroupsRequest$,
  ListPackageGroupsResult$,
  ListPackages$,
  ListPackagesCommand,
  ListPackagesRequest$,
  ListPackagesResult$,
  ListPackageVersionAssets$,
  ListPackageVersionAssetsCommand,
  ListPackageVersionAssetsRequest$,
  ListPackageVersionAssetsResult$,
  ListPackageVersionDependencies$,
  ListPackageVersionDependenciesCommand,
  ListPackageVersionDependenciesRequest$,
  ListPackageVersionDependenciesResult$,
  ListPackageVersions$,
  ListPackageVersionsCommand,
  ListPackageVersionsRequest$,
  ListPackageVersionsResult$,
  ListRepositories$,
  ListRepositoriesCommand,
  ListRepositoriesInDomain$,
  ListRepositoriesInDomainCommand,
  ListRepositoriesInDomainRequest$,
  ListRepositoriesInDomainResult$,
  ListRepositoriesRequest$,
  ListRepositoriesResult$,
  ListSubPackageGroups$,
  ListSubPackageGroupsCommand,
  ListSubPackageGroupsRequest$,
  ListSubPackageGroupsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  PackageDependency$,
  PackageDescription$,
  PackageFormat,
  PackageGroupAllowedRepository$,
  PackageGroupAllowedRepositoryUpdateType,
  PackageGroupAssociationType,
  PackageGroupDescription$,
  PackageGroupOriginConfiguration$,
  PackageGroupOriginRestriction$,
  PackageGroupOriginRestrictionMode,
  PackageGroupOriginRestrictionType,
  PackageGroupReference$,
  PackageGroupSummary$,
  PackageOriginConfiguration$,
  PackageOriginRestrictions$,
  PackageSummary$,
  PackageVersionDescription$,
  PackageVersionError$,
  PackageVersionErrorCode,
  PackageVersionOrigin$,
  PackageVersionOriginType,
  PackageVersionSortType,
  PackageVersionStatus,
  PackageVersionSummary$,
  paginateListAllowedRepositoriesForGroup,
  paginateListAssociatedPackages,
  paginateListDomains,
  paginateListPackageGroups,
  paginateListPackages,
  paginateListPackageVersionAssets,
  paginateListPackageVersions,
  paginateListRepositories,
  paginateListRepositoriesInDomain,
  paginateListSubPackageGroups,
  PublishPackageVersion$,
  PublishPackageVersionCommand,
  PublishPackageVersionRequest$,
  PublishPackageVersionResult$,
  PutDomainPermissionsPolicy$,
  PutDomainPermissionsPolicyCommand,
  PutDomainPermissionsPolicyRequest$,
  PutDomainPermissionsPolicyResult$,
  PutPackageOriginConfiguration$,
  PutPackageOriginConfigurationCommand,
  PutPackageOriginConfigurationRequest$,
  PutPackageOriginConfigurationResult$,
  PutRepositoryPermissionsPolicy$,
  PutRepositoryPermissionsPolicyCommand,
  PutRepositoryPermissionsPolicyRequest$,
  PutRepositoryPermissionsPolicyResult$,
  RepositoryDescription$,
  RepositoryExternalConnectionInfo$,
  RepositorySummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicy$,
  ResourceType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SuccessfulPackageVersionInfo$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdatePackageGroup$,
  UpdatePackageGroupCommand,
  UpdatePackageGroupOriginConfiguration$,
  UpdatePackageGroupOriginConfigurationCommand,
  UpdatePackageGroupOriginConfigurationRequest$,
  UpdatePackageGroupOriginConfigurationResult$,
  UpdatePackageGroupRequest$,
  UpdatePackageGroupResult$,
  UpdatePackageVersionsStatus$,
  UpdatePackageVersionsStatusCommand,
  UpdatePackageVersionsStatusRequest$,
  UpdatePackageVersionsStatusResult$,
  UpdateRepository$,
  UpdateRepositoryCommand,
  UpdateRepositoryRequest$,
  UpdateRepositoryResult$,
  UpstreamRepository$,
  UpstreamRepositoryInfo$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeartifactClient === "function");
assert(typeof Codeartifact === "function");
// commands
assert(typeof AssociateExternalConnectionCommand === "function");
assert(typeof AssociateExternalConnection$ === "object");
assert(typeof CopyPackageVersionsCommand === "function");
assert(typeof CopyPackageVersions$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreatePackageGroupCommand === "function");
assert(typeof CreatePackageGroup$ === "object");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateRepository$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteDomainPermissionsPolicyCommand === "function");
assert(typeof DeleteDomainPermissionsPolicy$ === "object");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackage$ === "object");
assert(typeof DeletePackageGroupCommand === "function");
assert(typeof DeletePackageGroup$ === "object");
assert(typeof DeletePackageVersionsCommand === "function");
assert(typeof DeletePackageVersions$ === "object");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepository$ === "object");
assert(typeof DeleteRepositoryPermissionsPolicyCommand === "function");
assert(typeof DeleteRepositoryPermissionsPolicy$ === "object");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeDomain$ === "object");
assert(typeof DescribePackageCommand === "function");
assert(typeof DescribePackage$ === "object");
assert(typeof DescribePackageGroupCommand === "function");
assert(typeof DescribePackageGroup$ === "object");
assert(typeof DescribePackageVersionCommand === "function");
assert(typeof DescribePackageVersion$ === "object");
assert(typeof DescribeRepositoryCommand === "function");
assert(typeof DescribeRepository$ === "object");
assert(typeof DisassociateExternalConnectionCommand === "function");
assert(typeof DisassociateExternalConnection$ === "object");
assert(typeof DisposePackageVersionsCommand === "function");
assert(typeof DisposePackageVersions$ === "object");
assert(typeof GetAssociatedPackageGroupCommand === "function");
assert(typeof GetAssociatedPackageGroup$ === "object");
assert(typeof GetAuthorizationTokenCommand === "function");
assert(typeof GetAuthorizationToken$ === "object");
assert(typeof GetDomainPermissionsPolicyCommand === "function");
assert(typeof GetDomainPermissionsPolicy$ === "object");
assert(typeof GetPackageVersionAssetCommand === "function");
assert(typeof GetPackageVersionAsset$ === "object");
assert(typeof GetPackageVersionReadmeCommand === "function");
assert(typeof GetPackageVersionReadme$ === "object");
assert(typeof GetRepositoryEndpointCommand === "function");
assert(typeof GetRepositoryEndpoint$ === "object");
assert(typeof GetRepositoryPermissionsPolicyCommand === "function");
assert(typeof GetRepositoryPermissionsPolicy$ === "object");
assert(typeof ListAllowedRepositoriesForGroupCommand === "function");
assert(typeof ListAllowedRepositoriesForGroup$ === "object");
assert(typeof ListAssociatedPackagesCommand === "function");
assert(typeof ListAssociatedPackages$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListPackageGroupsCommand === "function");
assert(typeof ListPackageGroups$ === "object");
assert(typeof ListPackagesCommand === "function");
assert(typeof ListPackages$ === "object");
assert(typeof ListPackageVersionAssetsCommand === "function");
assert(typeof ListPackageVersionAssets$ === "object");
assert(typeof ListPackageVersionDependenciesCommand === "function");
assert(typeof ListPackageVersionDependencies$ === "object");
assert(typeof ListPackageVersionsCommand === "function");
assert(typeof ListPackageVersions$ === "object");
assert(typeof ListRepositoriesCommand === "function");
assert(typeof ListRepositories$ === "object");
assert(typeof ListRepositoriesInDomainCommand === "function");
assert(typeof ListRepositoriesInDomain$ === "object");
assert(typeof ListSubPackageGroupsCommand === "function");
assert(typeof ListSubPackageGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PublishPackageVersionCommand === "function");
assert(typeof PublishPackageVersion$ === "object");
assert(typeof PutDomainPermissionsPolicyCommand === "function");
assert(typeof PutDomainPermissionsPolicy$ === "object");
assert(typeof PutPackageOriginConfigurationCommand === "function");
assert(typeof PutPackageOriginConfiguration$ === "object");
assert(typeof PutRepositoryPermissionsPolicyCommand === "function");
assert(typeof PutRepositoryPermissionsPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePackageGroupCommand === "function");
assert(typeof UpdatePackageGroup$ === "object");
assert(typeof UpdatePackageGroupOriginConfigurationCommand === "function");
assert(typeof UpdatePackageGroupOriginConfiguration$ === "object");
assert(typeof UpdatePackageVersionsStatusCommand === "function");
assert(typeof UpdatePackageVersionsStatus$ === "object");
assert(typeof UpdateRepositoryCommand === "function");
assert(typeof UpdateRepository$ === "object");
// structural schemas
assert(typeof AssetSummary$ === "object");
assert(typeof AssociatedPackage$ === "object");
assert(typeof AssociateExternalConnectionRequest$ === "object");
assert(typeof AssociateExternalConnectionResult$ === "object");
assert(typeof CopyPackageVersionsRequest$ === "object");
assert(typeof CopyPackageVersionsResult$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResult$ === "object");
assert(typeof CreatePackageGroupRequest$ === "object");
assert(typeof CreatePackageGroupResult$ === "object");
assert(typeof CreateRepositoryRequest$ === "object");
assert(typeof CreateRepositoryResult$ === "object");
assert(typeof DeleteDomainPermissionsPolicyRequest$ === "object");
assert(typeof DeleteDomainPermissionsPolicyResult$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResult$ === "object");
assert(typeof DeletePackageGroupRequest$ === "object");
assert(typeof DeletePackageGroupResult$ === "object");
assert(typeof DeletePackageRequest$ === "object");
assert(typeof DeletePackageResult$ === "object");
assert(typeof DeletePackageVersionsRequest$ === "object");
assert(typeof DeletePackageVersionsResult$ === "object");
assert(typeof DeleteRepositoryPermissionsPolicyRequest$ === "object");
assert(typeof DeleteRepositoryPermissionsPolicyResult$ === "object");
assert(typeof DeleteRepositoryRequest$ === "object");
assert(typeof DeleteRepositoryResult$ === "object");
assert(typeof DescribeDomainRequest$ === "object");
assert(typeof DescribeDomainResult$ === "object");
assert(typeof DescribePackageGroupRequest$ === "object");
assert(typeof DescribePackageGroupResult$ === "object");
assert(typeof DescribePackageRequest$ === "object");
assert(typeof DescribePackageResult$ === "object");
assert(typeof DescribePackageVersionRequest$ === "object");
assert(typeof DescribePackageVersionResult$ === "object");
assert(typeof DescribeRepositoryRequest$ === "object");
assert(typeof DescribeRepositoryResult$ === "object");
assert(typeof DisassociateExternalConnectionRequest$ === "object");
assert(typeof DisassociateExternalConnectionResult$ === "object");
assert(typeof DisposePackageVersionsRequest$ === "object");
assert(typeof DisposePackageVersionsResult$ === "object");
assert(typeof DomainDescription$ === "object");
assert(typeof DomainEntryPoint$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof GetAssociatedPackageGroupRequest$ === "object");
assert(typeof GetAssociatedPackageGroupResult$ === "object");
assert(typeof GetAuthorizationTokenRequest$ === "object");
assert(typeof GetAuthorizationTokenResult$ === "object");
assert(typeof GetDomainPermissionsPolicyRequest$ === "object");
assert(typeof GetDomainPermissionsPolicyResult$ === "object");
assert(typeof GetPackageVersionAssetRequest$ === "object");
assert(typeof GetPackageVersionAssetResult$ === "object");
assert(typeof GetPackageVersionReadmeRequest$ === "object");
assert(typeof GetPackageVersionReadmeResult$ === "object");
assert(typeof GetRepositoryEndpointRequest$ === "object");
assert(typeof GetRepositoryEndpointResult$ === "object");
assert(typeof GetRepositoryPermissionsPolicyRequest$ === "object");
assert(typeof GetRepositoryPermissionsPolicyResult$ === "object");
assert(typeof LicenseInfo$ === "object");
assert(typeof ListAllowedRepositoriesForGroupRequest$ === "object");
assert(typeof ListAllowedRepositoriesForGroupResult$ === "object");
assert(typeof ListAssociatedPackagesRequest$ === "object");
assert(typeof ListAssociatedPackagesResult$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResult$ === "object");
assert(typeof ListPackageGroupsRequest$ === "object");
assert(typeof ListPackageGroupsResult$ === "object");
assert(typeof ListPackagesRequest$ === "object");
assert(typeof ListPackagesResult$ === "object");
assert(typeof ListPackageVersionAssetsRequest$ === "object");
assert(typeof ListPackageVersionAssetsResult$ === "object");
assert(typeof ListPackageVersionDependenciesRequest$ === "object");
assert(typeof ListPackageVersionDependenciesResult$ === "object");
assert(typeof ListPackageVersionsRequest$ === "object");
assert(typeof ListPackageVersionsResult$ === "object");
assert(typeof ListRepositoriesInDomainRequest$ === "object");
assert(typeof ListRepositoriesInDomainResult$ === "object");
assert(typeof ListRepositoriesRequest$ === "object");
assert(typeof ListRepositoriesResult$ === "object");
assert(typeof ListSubPackageGroupsRequest$ === "object");
assert(typeof ListSubPackageGroupsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof PackageDependency$ === "object");
assert(typeof PackageDescription$ === "object");
assert(typeof PackageGroupAllowedRepository$ === "object");
assert(typeof PackageGroupDescription$ === "object");
assert(typeof PackageGroupOriginConfiguration$ === "object");
assert(typeof PackageGroupOriginRestriction$ === "object");
assert(typeof PackageGroupReference$ === "object");
assert(typeof PackageGroupSummary$ === "object");
assert(typeof PackageOriginConfiguration$ === "object");
assert(typeof PackageOriginRestrictions$ === "object");
assert(typeof PackageSummary$ === "object");
assert(typeof PackageVersionDescription$ === "object");
assert(typeof PackageVersionError$ === "object");
assert(typeof PackageVersionOrigin$ === "object");
assert(typeof PackageVersionSummary$ === "object");
assert(typeof PublishPackageVersionRequest$ === "object");
assert(typeof PublishPackageVersionResult$ === "object");
assert(typeof PutDomainPermissionsPolicyRequest$ === "object");
assert(typeof PutDomainPermissionsPolicyResult$ === "object");
assert(typeof PutPackageOriginConfigurationRequest$ === "object");
assert(typeof PutPackageOriginConfigurationResult$ === "object");
assert(typeof PutRepositoryPermissionsPolicyRequest$ === "object");
assert(typeof PutRepositoryPermissionsPolicyResult$ === "object");
assert(typeof RepositoryDescription$ === "object");
assert(typeof RepositoryExternalConnectionInfo$ === "object");
assert(typeof RepositorySummary$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof SuccessfulPackageVersionInfo$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdatePackageGroupOriginConfigurationRequest$ === "object");
assert(typeof UpdatePackageGroupOriginConfigurationResult$ === "object");
assert(typeof UpdatePackageGroupRequest$ === "object");
assert(typeof UpdatePackageGroupResult$ === "object");
assert(typeof UpdatePackageVersionsStatusRequest$ === "object");
assert(typeof UpdatePackageVersionsStatusResult$ === "object");
assert(typeof UpdateRepositoryRequest$ === "object");
assert(typeof UpdateRepositoryResult$ === "object");
assert(typeof UpstreamRepository$ === "object");
assert(typeof UpstreamRepositoryInfo$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CodeartifactServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CodeartifactServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeartifactServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CodeartifactServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CodeartifactServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CodeartifactServiceException);
assert(typeof ValidationException$ === "object");
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

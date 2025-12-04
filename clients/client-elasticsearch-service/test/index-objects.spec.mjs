import {
  AcceptInboundCrossClusterSearchConnectionCommand,
  AddTagsCommand,
  AssociatePackageCommand,
  AuthorizeVpcEndpointAccessCommand,
  AutoTuneDesiredState,
  AutoTuneState,
  AutoTuneType,
  CancelDomainConfigChangeCommand,
  CancelElasticsearchServiceSoftwareUpdateCommand,
  ConfigChangeStatus,
  CreateElasticsearchDomainCommand,
  CreateOutboundCrossClusterSearchConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DeleteElasticsearchDomainCommand,
  DeleteElasticsearchServiceRoleCommand,
  DeleteInboundCrossClusterSearchConnectionCommand,
  DeleteOutboundCrossClusterSearchConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DeploymentStatus,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeElasticsearchDomainCommand,
  DescribeElasticsearchDomainConfigCommand,
  DescribeElasticsearchDomainsCommand,
  DescribeElasticsearchInstanceTypeLimitsCommand,
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeOutboundCrossClusterSearchConnectionsCommand,
  DescribePackagesCommand,
  DescribePackagesFilterName,
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  DomainPackageStatus,
  DomainProcessingStatusType,
  ESPartitionInstanceType,
  ESWarmPartitionInstanceType,
  ElasticsearchService,
  ElasticsearchServiceClient,
  ElasticsearchServiceServiceException,
  EngineType,
  GetCompatibleElasticsearchVersionsCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  InboundCrossClusterSearchConnectionStatusCode,
  InitiatedBy,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchVersionsCommand,
  ListPackagesForDomainCommand,
  ListTagsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  LogType,
  OptionState,
  OutboundCrossClusterSearchConnectionStatusCode,
  OverallChangeStatus,
  PackageStatus,
  PackageType,
  PrincipalType,
  PropertyValueType,
  PurchaseReservedElasticsearchInstanceOfferingCommand,
  RejectInboundCrossClusterSearchConnectionCommand,
  RemoveTagsCommand,
  ReservedElasticsearchInstancePaymentOption,
  RevokeVpcEndpointAccessCommand,
  RollbackOnDisable,
  ScheduledAutoTuneActionType,
  ScheduledAutoTuneSeverityType,
  StartElasticsearchServiceSoftwareUpdateCommand,
  TLSSecurityPolicy,
  TimeUnit,
  UpdateElasticsearchDomainConfigCommand,
  UpdatePackageCommand,
  UpdateVpcEndpointCommand,
  UpgradeElasticsearchDomainCommand,
  UpgradeStatus,
  UpgradeStep,
  VolumeType,
  VpcEndpointErrorCode,
  VpcEndpointStatus,
  paginateDescribeDomainAutoTunes,
  paginateDescribeInboundCrossClusterSearchConnections,
  paginateDescribeOutboundCrossClusterSearchConnections,
  paginateDescribePackages,
  paginateDescribeReservedElasticsearchInstanceOfferings,
  paginateDescribeReservedElasticsearchInstances,
  paginateGetPackageVersionHistory,
  paginateGetUpgradeHistory,
  paginateListDomainsForPackage,
  paginateListElasticsearchInstanceTypes,
  paginateListElasticsearchVersions,
  paginateListPackagesForDomain,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElasticsearchServiceClient === "function");
assert(typeof ElasticsearchService === "function");
// commands
assert(typeof AcceptInboundCrossClusterSearchConnectionCommand === "function");
assert(typeof AddTagsCommand === "function");
assert(typeof AssociatePackageCommand === "function");
assert(typeof AuthorizeVpcEndpointAccessCommand === "function");
assert(typeof CancelDomainConfigChangeCommand === "function");
assert(typeof CancelElasticsearchServiceSoftwareUpdateCommand === "function");
assert(typeof CreateElasticsearchDomainCommand === "function");
assert(typeof CreateOutboundCrossClusterSearchConnectionCommand === "function");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof DeleteElasticsearchDomainCommand === "function");
assert(typeof DeleteElasticsearchServiceRoleCommand === "function");
assert(typeof DeleteInboundCrossClusterSearchConnectionCommand === "function");
assert(typeof DeleteOutboundCrossClusterSearchConnectionCommand === "function");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeleteVpcEndpointCommand === "function");
assert(typeof DescribeDomainAutoTunesCommand === "function");
assert(typeof DescribeDomainChangeProgressCommand === "function");
assert(typeof DescribeElasticsearchDomainCommand === "function");
assert(typeof DescribeElasticsearchDomainConfigCommand === "function");
assert(typeof DescribeElasticsearchDomainsCommand === "function");
assert(typeof DescribeElasticsearchInstanceTypeLimitsCommand === "function");
assert(typeof DescribeInboundCrossClusterSearchConnectionsCommand === "function");
assert(typeof DescribeOutboundCrossClusterSearchConnectionsCommand === "function");
assert(typeof DescribePackagesCommand === "function");
assert(typeof DescribeReservedElasticsearchInstanceOfferingsCommand === "function");
assert(typeof DescribeReservedElasticsearchInstancesCommand === "function");
assert(typeof DescribeVpcEndpointsCommand === "function");
assert(typeof DissociatePackageCommand === "function");
assert(typeof GetCompatibleElasticsearchVersionsCommand === "function");
assert(typeof GetPackageVersionHistoryCommand === "function");
assert(typeof GetUpgradeHistoryCommand === "function");
assert(typeof GetUpgradeStatusCommand === "function");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof ListDomainsForPackageCommand === "function");
assert(typeof ListElasticsearchInstanceTypesCommand === "function");
assert(typeof ListElasticsearchVersionsCommand === "function");
assert(typeof ListPackagesForDomainCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof ListVpcEndpointAccessCommand === "function");
assert(typeof ListVpcEndpointsCommand === "function");
assert(typeof ListVpcEndpointsForDomainCommand === "function");
assert(typeof PurchaseReservedElasticsearchInstanceOfferingCommand === "function");
assert(typeof RejectInboundCrossClusterSearchConnectionCommand === "function");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RevokeVpcEndpointAccessCommand === "function");
assert(typeof StartElasticsearchServiceSoftwareUpdateCommand === "function");
assert(typeof UpdateElasticsearchDomainConfigCommand === "function");
assert(typeof UpdatePackageCommand === "function");
assert(typeof UpdateVpcEndpointCommand === "function");
assert(typeof UpgradeElasticsearchDomainCommand === "function");
// enums
assert(typeof AutoTuneDesiredState === "object");
assert(typeof AutoTuneState === "object");
assert(typeof AutoTuneType === "object");
assert(typeof ConfigChangeStatus === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DescribePackagesFilterName === "object");
assert(typeof DomainPackageStatus === "object");
assert(typeof DomainProcessingStatusType === "object");
assert(typeof EngineType === "object");
assert(typeof ESPartitionInstanceType === "object");
assert(typeof ESWarmPartitionInstanceType === "object");
assert(typeof InboundCrossClusterSearchConnectionStatusCode === "object");
assert(typeof InitiatedBy === "object");
assert(typeof LogType === "object");
assert(typeof OptionState === "object");
assert(typeof OutboundCrossClusterSearchConnectionStatusCode === "object");
assert(typeof OverallChangeStatus === "object");
assert(typeof PackageStatus === "object");
assert(typeof PackageType === "object");
assert(typeof PrincipalType === "object");
assert(typeof PropertyValueType === "object");
assert(typeof ReservedElasticsearchInstancePaymentOption === "object");
assert(typeof RollbackOnDisable === "object");
assert(typeof ScheduledAutoTuneActionType === "object");
assert(typeof ScheduledAutoTuneSeverityType === "object");
assert(typeof TimeUnit === "object");
assert(typeof TLSSecurityPolicy === "object");
assert(typeof UpgradeStatus === "object");
assert(typeof UpgradeStep === "object");
assert(typeof VolumeType === "object");
assert(typeof VpcEndpointErrorCode === "object");
assert(typeof VpcEndpointStatus === "object");
// errors
assert(ElasticsearchServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeDomainAutoTunes === "function");
assert(typeof paginateDescribeInboundCrossClusterSearchConnections === "function");
assert(typeof paginateDescribeOutboundCrossClusterSearchConnections === "function");
assert(typeof paginateDescribePackages === "function");
assert(typeof paginateDescribeReservedElasticsearchInstanceOfferings === "function");
assert(typeof paginateDescribeReservedElasticsearchInstances === "function");
assert(typeof paginateGetPackageVersionHistory === "function");
assert(typeof paginateGetUpgradeHistory === "function");
assert(typeof paginateListDomainsForPackage === "function");
assert(typeof paginateListElasticsearchInstanceTypes === "function");
assert(typeof paginateListElasticsearchVersions === "function");
assert(typeof paginateListPackagesForDomain === "function");
console.log(`ElasticsearchService index test passed.`);

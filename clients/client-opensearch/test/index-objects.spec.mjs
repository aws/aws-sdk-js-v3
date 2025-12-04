import {
  AWSServicePrincipal,
  AcceptInboundConnectionCommand,
  ActionSeverity,
  ActionStatus,
  ActionType,
  AddDataSourceCommand,
  AddDirectQueryDataSourceCommand,
  AddTagsCommand,
  AppConfigType,
  ApplicationStatus,
  AssociatePackageCommand,
  AssociatePackagesCommand,
  AuthorizeVpcEndpointAccessCommand,
  AutoTuneDesiredState,
  AutoTuneState,
  AutoTuneType,
  CancelDomainConfigChangeCommand,
  CancelServiceSoftwareUpdateCommand,
  ConfigChangeStatus,
  ConnectionMode,
  CreateApplicationCommand,
  CreateDomainCommand,
  CreateIndexCommand,
  CreateOutboundConnectionCommand,
  CreatePackageCommand,
  CreateVpcEndpointCommand,
  DataSourceStatus,
  DeleteApplicationCommand,
  DeleteDataSourceCommand,
  DeleteDirectQueryDataSourceCommand,
  DeleteDomainCommand,
  DeleteInboundConnectionCommand,
  DeleteIndexCommand,
  DeleteOutboundConnectionCommand,
  DeletePackageCommand,
  DeleteVpcEndpointCommand,
  DeploymentStatus,
  DescribeDomainAutoTunesCommand,
  DescribeDomainChangeProgressCommand,
  DescribeDomainCommand,
  DescribeDomainConfigCommand,
  DescribeDomainHealthCommand,
  DescribeDomainNodesCommand,
  DescribeDomainsCommand,
  DescribeDryRunProgressCommand,
  DescribeInboundConnectionsCommand,
  DescribeInstanceTypeLimitsCommand,
  DescribeOutboundConnectionsCommand,
  DescribePackagesCommand,
  DescribePackagesFilterName,
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstancesCommand,
  DescribeVpcEndpointsCommand,
  DissociatePackageCommand,
  DissociatePackagesCommand,
  DomainHealth,
  DomainPackageStatus,
  DomainProcessingStatusType,
  DomainState,
  DryRunMode,
  EngineType,
  GetApplicationCommand,
  GetCompatibleVersionsCommand,
  GetDataSourceCommand,
  GetDefaultApplicationSettingCommand,
  GetDirectQueryDataSourceCommand,
  GetDomainMaintenanceStatusCommand,
  GetIndexCommand,
  GetPackageVersionHistoryCommand,
  GetUpgradeHistoryCommand,
  GetUpgradeStatusCommand,
  IPAddressType,
  InboundConnectionStatusCode,
  IndexStatus,
  InitiatedBy,
  ListApplicationsCommand,
  ListDataSourcesCommand,
  ListDirectQueryDataSourcesCommand,
  ListDomainMaintenancesCommand,
  ListDomainNamesCommand,
  ListDomainsForPackageCommand,
  ListInstanceTypeDetailsCommand,
  ListPackagesForDomainCommand,
  ListScheduledActionsCommand,
  ListTagsCommand,
  ListVersionsCommand,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomainCommand,
  LogType,
  MaintenanceStatus,
  MaintenanceType,
  MasterNodeStatus,
  NaturalLanguageQueryGenerationCurrentState,
  NaturalLanguageQueryGenerationDesiredState,
  NodeOptionsNodeType,
  NodeStatus,
  NodeType,
  OpenSearch,
  OpenSearchClient,
  OpenSearchPartitionInstanceType,
  OpenSearchServiceException,
  OpenSearchWarmPartitionInstanceType,
  OptionState,
  OutboundConnectionStatusCode,
  OverallChangeStatus,
  PackageScopeOperationEnum,
  PackageStatus,
  PackageType,
  PrincipalType,
  PropertyValueType,
  PurchaseReservedInstanceOfferingCommand,
  PutDefaultApplicationSettingCommand,
  RejectInboundConnectionCommand,
  RemoveTagsCommand,
  RequirementLevel,
  ReservedInstancePaymentOption,
  RevokeVpcEndpointAccessCommand,
  RolesKeyIdCOption,
  RollbackOnDisable,
  ScheduleAt,
  ScheduledAutoTuneActionType,
  ScheduledAutoTuneSeverityType,
  ScheduledBy,
  SkipUnavailableStatus,
  StartDomainMaintenanceCommand,
  StartServiceSoftwareUpdateCommand,
  SubjectKeyIdCOption,
  TLSSecurityPolicy,
  TimeUnit,
  UpdateApplicationCommand,
  UpdateDataSourceCommand,
  UpdateDirectQueryDataSourceCommand,
  UpdateDomainConfigCommand,
  UpdateIndexCommand,
  UpdatePackageCommand,
  UpdatePackageScopeCommand,
  UpdateScheduledActionCommand,
  UpdateVpcEndpointCommand,
  UpgradeDomainCommand,
  UpgradeStatus,
  UpgradeStep,
  VolumeType,
  VpcEndpointErrorCode,
  VpcEndpointStatus,
  ZoneStatus,
  paginateDescribeDomainAutoTunes,
  paginateDescribeInboundConnections,
  paginateDescribeOutboundConnections,
  paginateDescribePackages,
  paginateDescribeReservedInstanceOfferings,
  paginateDescribeReservedInstances,
  paginateGetPackageVersionHistory,
  paginateGetUpgradeHistory,
  paginateListApplications,
  paginateListDomainMaintenances,
  paginateListDomainsForPackage,
  paginateListInstanceTypeDetails,
  paginateListPackagesForDomain,
  paginateListScheduledActions,
  paginateListVersions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OpenSearchClient === "function");
assert(typeof OpenSearch === "function");
// commands
assert(typeof AcceptInboundConnectionCommand === "function");
assert(typeof AddDataSourceCommand === "function");
assert(typeof AddDirectQueryDataSourceCommand === "function");
assert(typeof AddTagsCommand === "function");
assert(typeof AssociatePackageCommand === "function");
assert(typeof AssociatePackagesCommand === "function");
assert(typeof AuthorizeVpcEndpointAccessCommand === "function");
assert(typeof CancelDomainConfigChangeCommand === "function");
assert(typeof CancelServiceSoftwareUpdateCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateOutboundConnectionCommand === "function");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDirectQueryDataSourceCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteInboundConnectionCommand === "function");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteOutboundConnectionCommand === "function");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeleteVpcEndpointCommand === "function");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeDomainAutoTunesCommand === "function");
assert(typeof DescribeDomainChangeProgressCommand === "function");
assert(typeof DescribeDomainConfigCommand === "function");
assert(typeof DescribeDomainHealthCommand === "function");
assert(typeof DescribeDomainNodesCommand === "function");
assert(typeof DescribeDomainsCommand === "function");
assert(typeof DescribeDryRunProgressCommand === "function");
assert(typeof DescribeInboundConnectionsCommand === "function");
assert(typeof DescribeInstanceTypeLimitsCommand === "function");
assert(typeof DescribeOutboundConnectionsCommand === "function");
assert(typeof DescribePackagesCommand === "function");
assert(typeof DescribeReservedInstanceOfferingsCommand === "function");
assert(typeof DescribeReservedInstancesCommand === "function");
assert(typeof DescribeVpcEndpointsCommand === "function");
assert(typeof DissociatePackageCommand === "function");
assert(typeof DissociatePackagesCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetCompatibleVersionsCommand === "function");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDefaultApplicationSettingCommand === "function");
assert(typeof GetDirectQueryDataSourceCommand === "function");
assert(typeof GetDomainMaintenanceStatusCommand === "function");
assert(typeof GetIndexCommand === "function");
assert(typeof GetPackageVersionHistoryCommand === "function");
assert(typeof GetUpgradeHistoryCommand === "function");
assert(typeof GetUpgradeStatusCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDirectQueryDataSourcesCommand === "function");
assert(typeof ListDomainMaintenancesCommand === "function");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof ListDomainsForPackageCommand === "function");
assert(typeof ListInstanceTypeDetailsCommand === "function");
assert(typeof ListPackagesForDomainCommand === "function");
assert(typeof ListScheduledActionsCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof ListVersionsCommand === "function");
assert(typeof ListVpcEndpointAccessCommand === "function");
assert(typeof ListVpcEndpointsCommand === "function");
assert(typeof ListVpcEndpointsForDomainCommand === "function");
assert(typeof PurchaseReservedInstanceOfferingCommand === "function");
assert(typeof PutDefaultApplicationSettingCommand === "function");
assert(typeof RejectInboundConnectionCommand === "function");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RevokeVpcEndpointAccessCommand === "function");
assert(typeof StartDomainMaintenanceCommand === "function");
assert(typeof StartServiceSoftwareUpdateCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDirectQueryDataSourceCommand === "function");
assert(typeof UpdateDomainConfigCommand === "function");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdatePackageCommand === "function");
assert(typeof UpdatePackageScopeCommand === "function");
assert(typeof UpdateScheduledActionCommand === "function");
assert(typeof UpdateVpcEndpointCommand === "function");
assert(typeof UpgradeDomainCommand === "function");
// enums
assert(typeof ActionSeverity === "object");
assert(typeof ActionStatus === "object");
assert(typeof ActionType === "object");
assert(typeof AppConfigType === "object");
assert(typeof ApplicationStatus === "object");
assert(typeof AutoTuneDesiredState === "object");
assert(typeof AutoTuneState === "object");
assert(typeof AutoTuneType === "object");
assert(typeof AWSServicePrincipal === "object");
assert(typeof ConfigChangeStatus === "object");
assert(typeof ConnectionMode === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DescribePackagesFilterName === "object");
assert(typeof DomainHealth === "object");
assert(typeof DomainPackageStatus === "object");
assert(typeof DomainProcessingStatusType === "object");
assert(typeof DomainState === "object");
assert(typeof DryRunMode === "object");
assert(typeof EngineType === "object");
assert(typeof InboundConnectionStatusCode === "object");
assert(typeof IndexStatus === "object");
assert(typeof InitiatedBy === "object");
assert(typeof IPAddressType === "object");
assert(typeof LogType === "object");
assert(typeof MaintenanceStatus === "object");
assert(typeof MaintenanceType === "object");
assert(typeof MasterNodeStatus === "object");
assert(typeof NaturalLanguageQueryGenerationCurrentState === "object");
assert(typeof NaturalLanguageQueryGenerationDesiredState === "object");
assert(typeof NodeOptionsNodeType === "object");
assert(typeof NodeStatus === "object");
assert(typeof NodeType === "object");
assert(typeof OpenSearchPartitionInstanceType === "object");
assert(typeof OpenSearchWarmPartitionInstanceType === "object");
assert(typeof OptionState === "object");
assert(typeof OutboundConnectionStatusCode === "object");
assert(typeof OverallChangeStatus === "object");
assert(typeof PackageScopeOperationEnum === "object");
assert(typeof PackageStatus === "object");
assert(typeof PackageType === "object");
assert(typeof PrincipalType === "object");
assert(typeof PropertyValueType === "object");
assert(typeof RequirementLevel === "object");
assert(typeof ReservedInstancePaymentOption === "object");
assert(typeof RolesKeyIdCOption === "object");
assert(typeof RollbackOnDisable === "object");
assert(typeof ScheduleAt === "object");
assert(typeof ScheduledAutoTuneActionType === "object");
assert(typeof ScheduledAutoTuneSeverityType === "object");
assert(typeof ScheduledBy === "object");
assert(typeof SkipUnavailableStatus === "object");
assert(typeof SubjectKeyIdCOption === "object");
assert(typeof TimeUnit === "object");
assert(typeof TLSSecurityPolicy === "object");
assert(typeof UpgradeStatus === "object");
assert(typeof UpgradeStep === "object");
assert(typeof VolumeType === "object");
assert(typeof VpcEndpointErrorCode === "object");
assert(typeof VpcEndpointStatus === "object");
assert(typeof ZoneStatus === "object");
// errors
assert(OpenSearchServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeDomainAutoTunes === "function");
assert(typeof paginateDescribeInboundConnections === "function");
assert(typeof paginateDescribeOutboundConnections === "function");
assert(typeof paginateDescribePackages === "function");
assert(typeof paginateDescribeReservedInstanceOfferings === "function");
assert(typeof paginateDescribeReservedInstances === "function");
assert(typeof paginateGetPackageVersionHistory === "function");
assert(typeof paginateGetUpgradeHistory === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListDomainMaintenances === "function");
assert(typeof paginateListDomainsForPackage === "function");
assert(typeof paginateListInstanceTypeDetails === "function");
assert(typeof paginateListPackagesForDomain === "function");
assert(typeof paginateListScheduledActions === "function");
assert(typeof paginateListVersions === "function");
console.log(`OpenSearch index test passed.`);

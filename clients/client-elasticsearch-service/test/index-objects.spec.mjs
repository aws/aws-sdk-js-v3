import {
  AcceptInboundCrossClusterSearchConnection$,
  AcceptInboundCrossClusterSearchConnectionCommand,
  AcceptInboundCrossClusterSearchConnectionRequest$,
  AcceptInboundCrossClusterSearchConnectionResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessPoliciesStatus$,
  AdditionalLimit$,
  AddTags$,
  AddTagsCommand,
  AddTagsRequest$,
  AdvancedOptionsStatus$,
  AdvancedSecurityOptions$,
  AdvancedSecurityOptionsInput$,
  AdvancedSecurityOptionsStatus$,
  AssociatePackage$,
  AssociatePackageCommand,
  AssociatePackageRequest$,
  AssociatePackageResponse$,
  AuthorizedPrincipal$,
  AuthorizeVpcEndpointAccess$,
  AuthorizeVpcEndpointAccessCommand,
  AuthorizeVpcEndpointAccessRequest$,
  AuthorizeVpcEndpointAccessResponse$,
  AutoTune$,
  AutoTuneDesiredState,
  AutoTuneDetails$,
  AutoTuneMaintenanceSchedule$,
  AutoTuneOptions$,
  AutoTuneOptionsInput$,
  AutoTuneOptionsOutput$,
  AutoTuneOptionsStatus$,
  AutoTuneState,
  AutoTuneStatus$,
  AutoTuneType,
  BaseException,
  BaseException$,
  CancelDomainConfigChange$,
  CancelDomainConfigChangeCommand,
  CancelDomainConfigChangeRequest$,
  CancelDomainConfigChangeResponse$,
  CancelElasticsearchServiceSoftwareUpdate$,
  CancelElasticsearchServiceSoftwareUpdateCommand,
  CancelElasticsearchServiceSoftwareUpdateRequest$,
  CancelElasticsearchServiceSoftwareUpdateResponse$,
  CancelledChangeProperty$,
  ChangeProgressDetails$,
  ChangeProgressStage$,
  ChangeProgressStatusDetails$,
  CognitoOptions$,
  CognitoOptionsStatus$,
  ColdStorageOptions$,
  CompatibleVersionsMap$,
  ConfigChangeStatus,
  ConflictException,
  ConflictException$,
  CreateElasticsearchDomain$,
  CreateElasticsearchDomainCommand,
  CreateElasticsearchDomainRequest$,
  CreateElasticsearchDomainResponse$,
  CreateOutboundCrossClusterSearchConnection$,
  CreateOutboundCrossClusterSearchConnectionCommand,
  CreateOutboundCrossClusterSearchConnectionRequest$,
  CreateOutboundCrossClusterSearchConnectionResponse$,
  CreatePackage$,
  CreatePackageCommand,
  CreatePackageRequest$,
  CreatePackageResponse$,
  CreateVpcEndpoint$,
  CreateVpcEndpointCommand,
  CreateVpcEndpointRequest$,
  CreateVpcEndpointResponse$,
  DeleteElasticsearchDomain$,
  DeleteElasticsearchDomainCommand,
  DeleteElasticsearchDomainRequest$,
  DeleteElasticsearchDomainResponse$,
  DeleteElasticsearchServiceRole$,
  DeleteElasticsearchServiceRoleCommand,
  DeleteInboundCrossClusterSearchConnection$,
  DeleteInboundCrossClusterSearchConnectionCommand,
  DeleteInboundCrossClusterSearchConnectionRequest$,
  DeleteInboundCrossClusterSearchConnectionResponse$,
  DeleteOutboundCrossClusterSearchConnection$,
  DeleteOutboundCrossClusterSearchConnectionCommand,
  DeleteOutboundCrossClusterSearchConnectionRequest$,
  DeleteOutboundCrossClusterSearchConnectionResponse$,
  DeletePackage$,
  DeletePackageCommand,
  DeletePackageRequest$,
  DeletePackageResponse$,
  DeleteVpcEndpoint$,
  DeleteVpcEndpointCommand,
  DeleteVpcEndpointRequest$,
  DeleteVpcEndpointResponse$,
  DeploymentStatus,
  DescribeDomainAutoTunes$,
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesRequest$,
  DescribeDomainAutoTunesResponse$,
  DescribeDomainChangeProgress$,
  DescribeDomainChangeProgressCommand,
  DescribeDomainChangeProgressRequest$,
  DescribeDomainChangeProgressResponse$,
  DescribeElasticsearchDomain$,
  DescribeElasticsearchDomainCommand,
  DescribeElasticsearchDomainConfig$,
  DescribeElasticsearchDomainConfigCommand,
  DescribeElasticsearchDomainConfigRequest$,
  DescribeElasticsearchDomainConfigResponse$,
  DescribeElasticsearchDomainRequest$,
  DescribeElasticsearchDomainResponse$,
  DescribeElasticsearchDomains$,
  DescribeElasticsearchDomainsCommand,
  DescribeElasticsearchDomainsRequest$,
  DescribeElasticsearchDomainsResponse$,
  DescribeElasticsearchInstanceTypeLimits$,
  DescribeElasticsearchInstanceTypeLimitsCommand,
  DescribeElasticsearchInstanceTypeLimitsRequest$,
  DescribeElasticsearchInstanceTypeLimitsResponse$,
  DescribeInboundCrossClusterSearchConnections$,
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeInboundCrossClusterSearchConnectionsRequest$,
  DescribeInboundCrossClusterSearchConnectionsResponse$,
  DescribeOutboundCrossClusterSearchConnections$,
  DescribeOutboundCrossClusterSearchConnectionsCommand,
  DescribeOutboundCrossClusterSearchConnectionsRequest$,
  DescribeOutboundCrossClusterSearchConnectionsResponse$,
  DescribePackages$,
  DescribePackagesCommand,
  DescribePackagesFilter$,
  DescribePackagesFilterName,
  DescribePackagesRequest$,
  DescribePackagesResponse$,
  DescribeReservedElasticsearchInstanceOfferings$,
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstanceOfferingsRequest$,
  DescribeReservedElasticsearchInstanceOfferingsResponse$,
  DescribeReservedElasticsearchInstances$,
  DescribeReservedElasticsearchInstancesCommand,
  DescribeReservedElasticsearchInstancesRequest$,
  DescribeReservedElasticsearchInstancesResponse$,
  DescribeVpcEndpoints$,
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsRequest$,
  DescribeVpcEndpointsResponse$,
  DisabledOperationException,
  DisabledOperationException$,
  DissociatePackage$,
  DissociatePackageCommand,
  DissociatePackageRequest$,
  DissociatePackageResponse$,
  DomainEndpointOptions$,
  DomainEndpointOptionsStatus$,
  DomainInfo$,
  DomainInformation$,
  DomainPackageDetails$,
  DomainPackageStatus,
  DomainProcessingStatusType,
  DryRunResults$,
  Duration$,
  EBSOptions$,
  EBSOptionsStatus$,
  ElasticsearchClusterConfig$,
  ElasticsearchClusterConfigStatus$,
  ElasticsearchDomainConfig$,
  ElasticsearchDomainStatus$,
  ElasticsearchService,
  ElasticsearchServiceClient,
  ElasticsearchServiceServiceException,
  ElasticsearchVersionStatus$,
  EncryptionAtRestOptions$,
  EncryptionAtRestOptionsStatus$,
  EngineType,
  ErrorDetails$,
  ESPartitionInstanceType,
  ESWarmPartitionInstanceType,
  Filter$,
  GetCompatibleElasticsearchVersions$,
  GetCompatibleElasticsearchVersionsCommand,
  GetCompatibleElasticsearchVersionsRequest$,
  GetCompatibleElasticsearchVersionsResponse$,
  GetPackageVersionHistory$,
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryRequest$,
  GetPackageVersionHistoryResponse$,
  GetUpgradeHistory$,
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryRequest$,
  GetUpgradeHistoryResponse$,
  GetUpgradeStatus$,
  GetUpgradeStatusCommand,
  GetUpgradeStatusRequest$,
  GetUpgradeStatusResponse$,
  InboundCrossClusterSearchConnection$,
  InboundCrossClusterSearchConnectionStatus$,
  InboundCrossClusterSearchConnectionStatusCode,
  InitiatedBy,
  InstanceCountLimits$,
  InstanceLimits$,
  InternalException,
  InternalException$,
  InvalidPaginationTokenException,
  InvalidPaginationTokenException$,
  InvalidTypeException,
  InvalidTypeException$,
  LimitExceededException,
  LimitExceededException$,
  Limits$,
  ListDomainNames$,
  ListDomainNamesCommand,
  ListDomainNamesRequest$,
  ListDomainNamesResponse$,
  ListDomainsForPackage$,
  ListDomainsForPackageCommand,
  ListDomainsForPackageRequest$,
  ListDomainsForPackageResponse$,
  ListElasticsearchInstanceTypes$,
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchInstanceTypesRequest$,
  ListElasticsearchInstanceTypesResponse$,
  ListElasticsearchVersions$,
  ListElasticsearchVersionsCommand,
  ListElasticsearchVersionsRequest$,
  ListElasticsearchVersionsResponse$,
  ListPackagesForDomain$,
  ListPackagesForDomainCommand,
  ListPackagesForDomainRequest$,
  ListPackagesForDomainResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ListVpcEndpointAccess$,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointAccessRequest$,
  ListVpcEndpointAccessResponse$,
  ListVpcEndpoints$,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomain$,
  ListVpcEndpointsForDomainCommand,
  ListVpcEndpointsForDomainRequest$,
  ListVpcEndpointsForDomainResponse$,
  ListVpcEndpointsRequest$,
  ListVpcEndpointsResponse$,
  LogPublishingOption$,
  LogPublishingOptionsStatus$,
  LogType,
  MasterUserOptions$,
  ModifyingProperties$,
  NodeToNodeEncryptionOptions$,
  NodeToNodeEncryptionOptionsStatus$,
  OptionState,
  OptionStatus$,
  OutboundCrossClusterSearchConnection$,
  OutboundCrossClusterSearchConnectionStatus$,
  OutboundCrossClusterSearchConnectionStatusCode,
  OverallChangeStatus,
  PackageDetails$,
  PackageSource$,
  PackageStatus,
  PackageType,
  PackageVersionHistory$,
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
  PrincipalType,
  PropertyValueType,
  PurchaseReservedElasticsearchInstanceOffering$,
  PurchaseReservedElasticsearchInstanceOfferingCommand,
  PurchaseReservedElasticsearchInstanceOfferingRequest$,
  PurchaseReservedElasticsearchInstanceOfferingResponse$,
  RecurringCharge$,
  RejectInboundCrossClusterSearchConnection$,
  RejectInboundCrossClusterSearchConnectionCommand,
  RejectInboundCrossClusterSearchConnectionRequest$,
  RejectInboundCrossClusterSearchConnectionResponse$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsRequest$,
  ReservedElasticsearchInstance$,
  ReservedElasticsearchInstanceOffering$,
  ReservedElasticsearchInstancePaymentOption,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevokeVpcEndpointAccess$,
  RevokeVpcEndpointAccessCommand,
  RevokeVpcEndpointAccessRequest$,
  RevokeVpcEndpointAccessResponse$,
  RollbackOnDisable,
  SAMLIdp$,
  SAMLOptionsInput$,
  SAMLOptionsOutput$,
  ScheduledAutoTuneActionType,
  ScheduledAutoTuneDetails$,
  ScheduledAutoTuneSeverityType,
  ServiceSoftwareOptions$,
  SnapshotOptions$,
  SnapshotOptionsStatus$,
  StartElasticsearchServiceSoftwareUpdate$,
  StartElasticsearchServiceSoftwareUpdateCommand,
  StartElasticsearchServiceSoftwareUpdateRequest$,
  StartElasticsearchServiceSoftwareUpdateResponse$,
  StorageType$,
  StorageTypeLimit$,
  Tag$,
  TimeUnit,
  TLSSecurityPolicy,
  UpdateElasticsearchDomainConfig$,
  UpdateElasticsearchDomainConfigCommand,
  UpdateElasticsearchDomainConfigRequest$,
  UpdateElasticsearchDomainConfigResponse$,
  UpdatePackage$,
  UpdatePackageCommand,
  UpdatePackageRequest$,
  UpdatePackageResponse$,
  UpdateVpcEndpoint$,
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointRequest$,
  UpdateVpcEndpointResponse$,
  UpgradeElasticsearchDomain$,
  UpgradeElasticsearchDomainCommand,
  UpgradeElasticsearchDomainRequest$,
  UpgradeElasticsearchDomainResponse$,
  UpgradeHistory$,
  UpgradeStatus,
  UpgradeStep,
  UpgradeStepItem$,
  ValidationException,
  ValidationException$,
  VolumeType,
  VPCDerivedInfo$,
  VPCDerivedInfoStatus$,
  VpcEndpoint$,
  VpcEndpointError$,
  VpcEndpointErrorCode,
  VpcEndpointStatus,
  VpcEndpointSummary$,
  VPCOptions$,
  ZoneAwarenessConfig$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElasticsearchServiceClient === "function");
assert(typeof ElasticsearchService === "function");
// commands
assert(typeof AcceptInboundCrossClusterSearchConnectionCommand === "function");
assert(typeof AcceptInboundCrossClusterSearchConnection$ === "object");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof AssociatePackageCommand === "function");
assert(typeof AssociatePackage$ === "object");
assert(typeof AuthorizeVpcEndpointAccessCommand === "function");
assert(typeof AuthorizeVpcEndpointAccess$ === "object");
assert(typeof CancelDomainConfigChangeCommand === "function");
assert(typeof CancelDomainConfigChange$ === "object");
assert(typeof CancelElasticsearchServiceSoftwareUpdateCommand === "function");
assert(typeof CancelElasticsearchServiceSoftwareUpdate$ === "object");
assert(typeof CreateElasticsearchDomainCommand === "function");
assert(typeof CreateElasticsearchDomain$ === "object");
assert(typeof CreateOutboundCrossClusterSearchConnectionCommand === "function");
assert(typeof CreateOutboundCrossClusterSearchConnection$ === "object");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreatePackage$ === "object");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof CreateVpcEndpoint$ === "object");
assert(typeof DeleteElasticsearchDomainCommand === "function");
assert(typeof DeleteElasticsearchDomain$ === "object");
assert(typeof DeleteElasticsearchServiceRoleCommand === "function");
assert(typeof DeleteElasticsearchServiceRole$ === "object");
assert(typeof DeleteInboundCrossClusterSearchConnectionCommand === "function");
assert(typeof DeleteInboundCrossClusterSearchConnection$ === "object");
assert(typeof DeleteOutboundCrossClusterSearchConnectionCommand === "function");
assert(typeof DeleteOutboundCrossClusterSearchConnection$ === "object");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackage$ === "object");
assert(typeof DeleteVpcEndpointCommand === "function");
assert(typeof DeleteVpcEndpoint$ === "object");
assert(typeof DescribeDomainAutoTunesCommand === "function");
assert(typeof DescribeDomainAutoTunes$ === "object");
assert(typeof DescribeDomainChangeProgressCommand === "function");
assert(typeof DescribeDomainChangeProgress$ === "object");
assert(typeof DescribeElasticsearchDomainCommand === "function");
assert(typeof DescribeElasticsearchDomain$ === "object");
assert(typeof DescribeElasticsearchDomainConfigCommand === "function");
assert(typeof DescribeElasticsearchDomainConfig$ === "object");
assert(typeof DescribeElasticsearchDomainsCommand === "function");
assert(typeof DescribeElasticsearchDomains$ === "object");
assert(typeof DescribeElasticsearchInstanceTypeLimitsCommand === "function");
assert(typeof DescribeElasticsearchInstanceTypeLimits$ === "object");
assert(typeof DescribeInboundCrossClusterSearchConnectionsCommand === "function");
assert(typeof DescribeInboundCrossClusterSearchConnections$ === "object");
assert(typeof DescribeOutboundCrossClusterSearchConnectionsCommand === "function");
assert(typeof DescribeOutboundCrossClusterSearchConnections$ === "object");
assert(typeof DescribePackagesCommand === "function");
assert(typeof DescribePackages$ === "object");
assert(typeof DescribeReservedElasticsearchInstanceOfferingsCommand === "function");
assert(typeof DescribeReservedElasticsearchInstanceOfferings$ === "object");
assert(typeof DescribeReservedElasticsearchInstancesCommand === "function");
assert(typeof DescribeReservedElasticsearchInstances$ === "object");
assert(typeof DescribeVpcEndpointsCommand === "function");
assert(typeof DescribeVpcEndpoints$ === "object");
assert(typeof DissociatePackageCommand === "function");
assert(typeof DissociatePackage$ === "object");
assert(typeof GetCompatibleElasticsearchVersionsCommand === "function");
assert(typeof GetCompatibleElasticsearchVersions$ === "object");
assert(typeof GetPackageVersionHistoryCommand === "function");
assert(typeof GetPackageVersionHistory$ === "object");
assert(typeof GetUpgradeHistoryCommand === "function");
assert(typeof GetUpgradeHistory$ === "object");
assert(typeof GetUpgradeStatusCommand === "function");
assert(typeof GetUpgradeStatus$ === "object");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof ListDomainNames$ === "object");
assert(typeof ListDomainsForPackageCommand === "function");
assert(typeof ListDomainsForPackage$ === "object");
assert(typeof ListElasticsearchInstanceTypesCommand === "function");
assert(typeof ListElasticsearchInstanceTypes$ === "object");
assert(typeof ListElasticsearchVersionsCommand === "function");
assert(typeof ListElasticsearchVersions$ === "object");
assert(typeof ListPackagesForDomainCommand === "function");
assert(typeof ListPackagesForDomain$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListVpcEndpointAccessCommand === "function");
assert(typeof ListVpcEndpointAccess$ === "object");
assert(typeof ListVpcEndpointsCommand === "function");
assert(typeof ListVpcEndpoints$ === "object");
assert(typeof ListVpcEndpointsForDomainCommand === "function");
assert(typeof ListVpcEndpointsForDomain$ === "object");
assert(typeof PurchaseReservedElasticsearchInstanceOfferingCommand === "function");
assert(typeof PurchaseReservedElasticsearchInstanceOffering$ === "object");
assert(typeof RejectInboundCrossClusterSearchConnectionCommand === "function");
assert(typeof RejectInboundCrossClusterSearchConnection$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof RevokeVpcEndpointAccessCommand === "function");
assert(typeof RevokeVpcEndpointAccess$ === "object");
assert(typeof StartElasticsearchServiceSoftwareUpdateCommand === "function");
assert(typeof StartElasticsearchServiceSoftwareUpdate$ === "object");
assert(typeof UpdateElasticsearchDomainConfigCommand === "function");
assert(typeof UpdateElasticsearchDomainConfig$ === "object");
assert(typeof UpdatePackageCommand === "function");
assert(typeof UpdatePackage$ === "object");
assert(typeof UpdateVpcEndpointCommand === "function");
assert(typeof UpdateVpcEndpoint$ === "object");
assert(typeof UpgradeElasticsearchDomainCommand === "function");
assert(typeof UpgradeElasticsearchDomain$ === "object");
// structural schemas
assert(typeof AcceptInboundCrossClusterSearchConnectionRequest$ === "object");
assert(typeof AcceptInboundCrossClusterSearchConnectionResponse$ === "object");
assert(typeof AccessPoliciesStatus$ === "object");
assert(typeof AdditionalLimit$ === "object");
assert(typeof AddTagsRequest$ === "object");
assert(typeof AdvancedOptionsStatus$ === "object");
assert(typeof AdvancedSecurityOptions$ === "object");
assert(typeof AdvancedSecurityOptionsInput$ === "object");
assert(typeof AdvancedSecurityOptionsStatus$ === "object");
assert(typeof AssociatePackageRequest$ === "object");
assert(typeof AssociatePackageResponse$ === "object");
assert(typeof AuthorizedPrincipal$ === "object");
assert(typeof AuthorizeVpcEndpointAccessRequest$ === "object");
assert(typeof AuthorizeVpcEndpointAccessResponse$ === "object");
assert(typeof AutoTune$ === "object");
assert(typeof AutoTuneDetails$ === "object");
assert(typeof AutoTuneMaintenanceSchedule$ === "object");
assert(typeof AutoTuneOptions$ === "object");
assert(typeof AutoTuneOptionsInput$ === "object");
assert(typeof AutoTuneOptionsOutput$ === "object");
assert(typeof AutoTuneOptionsStatus$ === "object");
assert(typeof AutoTuneStatus$ === "object");
assert(typeof CancelDomainConfigChangeRequest$ === "object");
assert(typeof CancelDomainConfigChangeResponse$ === "object");
assert(typeof CancelElasticsearchServiceSoftwareUpdateRequest$ === "object");
assert(typeof CancelElasticsearchServiceSoftwareUpdateResponse$ === "object");
assert(typeof CancelledChangeProperty$ === "object");
assert(typeof ChangeProgressDetails$ === "object");
assert(typeof ChangeProgressStage$ === "object");
assert(typeof ChangeProgressStatusDetails$ === "object");
assert(typeof CognitoOptions$ === "object");
assert(typeof CognitoOptionsStatus$ === "object");
assert(typeof ColdStorageOptions$ === "object");
assert(typeof CompatibleVersionsMap$ === "object");
assert(typeof CreateElasticsearchDomainRequest$ === "object");
assert(typeof CreateElasticsearchDomainResponse$ === "object");
assert(typeof CreateOutboundCrossClusterSearchConnectionRequest$ === "object");
assert(typeof CreateOutboundCrossClusterSearchConnectionResponse$ === "object");
assert(typeof CreatePackageRequest$ === "object");
assert(typeof CreatePackageResponse$ === "object");
assert(typeof CreateVpcEndpointRequest$ === "object");
assert(typeof CreateVpcEndpointResponse$ === "object");
assert(typeof DeleteElasticsearchDomainRequest$ === "object");
assert(typeof DeleteElasticsearchDomainResponse$ === "object");
assert(typeof DeleteInboundCrossClusterSearchConnectionRequest$ === "object");
assert(typeof DeleteInboundCrossClusterSearchConnectionResponse$ === "object");
assert(typeof DeleteOutboundCrossClusterSearchConnectionRequest$ === "object");
assert(typeof DeleteOutboundCrossClusterSearchConnectionResponse$ === "object");
assert(typeof DeletePackageRequest$ === "object");
assert(typeof DeletePackageResponse$ === "object");
assert(typeof DeleteVpcEndpointRequest$ === "object");
assert(typeof DeleteVpcEndpointResponse$ === "object");
assert(typeof DescribeDomainAutoTunesRequest$ === "object");
assert(typeof DescribeDomainAutoTunesResponse$ === "object");
assert(typeof DescribeDomainChangeProgressRequest$ === "object");
assert(typeof DescribeDomainChangeProgressResponse$ === "object");
assert(typeof DescribeElasticsearchDomainConfigRequest$ === "object");
assert(typeof DescribeElasticsearchDomainConfigResponse$ === "object");
assert(typeof DescribeElasticsearchDomainRequest$ === "object");
assert(typeof DescribeElasticsearchDomainResponse$ === "object");
assert(typeof DescribeElasticsearchDomainsRequest$ === "object");
assert(typeof DescribeElasticsearchDomainsResponse$ === "object");
assert(typeof DescribeElasticsearchInstanceTypeLimitsRequest$ === "object");
assert(typeof DescribeElasticsearchInstanceTypeLimitsResponse$ === "object");
assert(typeof DescribeInboundCrossClusterSearchConnectionsRequest$ === "object");
assert(typeof DescribeInboundCrossClusterSearchConnectionsResponse$ === "object");
assert(typeof DescribeOutboundCrossClusterSearchConnectionsRequest$ === "object");
assert(typeof DescribeOutboundCrossClusterSearchConnectionsResponse$ === "object");
assert(typeof DescribePackagesFilter$ === "object");
assert(typeof DescribePackagesRequest$ === "object");
assert(typeof DescribePackagesResponse$ === "object");
assert(typeof DescribeReservedElasticsearchInstanceOfferingsRequest$ === "object");
assert(typeof DescribeReservedElasticsearchInstanceOfferingsResponse$ === "object");
assert(typeof DescribeReservedElasticsearchInstancesRequest$ === "object");
assert(typeof DescribeReservedElasticsearchInstancesResponse$ === "object");
assert(typeof DescribeVpcEndpointsRequest$ === "object");
assert(typeof DescribeVpcEndpointsResponse$ === "object");
assert(typeof DissociatePackageRequest$ === "object");
assert(typeof DissociatePackageResponse$ === "object");
assert(typeof DomainEndpointOptions$ === "object");
assert(typeof DomainEndpointOptionsStatus$ === "object");
assert(typeof DomainInfo$ === "object");
assert(typeof DomainInformation$ === "object");
assert(typeof DomainPackageDetails$ === "object");
assert(typeof DryRunResults$ === "object");
assert(typeof Duration$ === "object");
assert(typeof EBSOptions$ === "object");
assert(typeof EBSOptionsStatus$ === "object");
assert(typeof ElasticsearchClusterConfig$ === "object");
assert(typeof ElasticsearchClusterConfigStatus$ === "object");
assert(typeof ElasticsearchDomainConfig$ === "object");
assert(typeof ElasticsearchDomainStatus$ === "object");
assert(typeof ElasticsearchVersionStatus$ === "object");
assert(typeof EncryptionAtRestOptions$ === "object");
assert(typeof EncryptionAtRestOptionsStatus$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetCompatibleElasticsearchVersionsRequest$ === "object");
assert(typeof GetCompatibleElasticsearchVersionsResponse$ === "object");
assert(typeof GetPackageVersionHistoryRequest$ === "object");
assert(typeof GetPackageVersionHistoryResponse$ === "object");
assert(typeof GetUpgradeHistoryRequest$ === "object");
assert(typeof GetUpgradeHistoryResponse$ === "object");
assert(typeof GetUpgradeStatusRequest$ === "object");
assert(typeof GetUpgradeStatusResponse$ === "object");
assert(typeof InboundCrossClusterSearchConnection$ === "object");
assert(typeof InboundCrossClusterSearchConnectionStatus$ === "object");
assert(typeof InstanceCountLimits$ === "object");
assert(typeof InstanceLimits$ === "object");
assert(typeof Limits$ === "object");
assert(typeof ListDomainNamesRequest$ === "object");
assert(typeof ListDomainNamesResponse$ === "object");
assert(typeof ListDomainsForPackageRequest$ === "object");
assert(typeof ListDomainsForPackageResponse$ === "object");
assert(typeof ListElasticsearchInstanceTypesRequest$ === "object");
assert(typeof ListElasticsearchInstanceTypesResponse$ === "object");
assert(typeof ListElasticsearchVersionsRequest$ === "object");
assert(typeof ListElasticsearchVersionsResponse$ === "object");
assert(typeof ListPackagesForDomainRequest$ === "object");
assert(typeof ListPackagesForDomainResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ListVpcEndpointAccessRequest$ === "object");
assert(typeof ListVpcEndpointAccessResponse$ === "object");
assert(typeof ListVpcEndpointsForDomainRequest$ === "object");
assert(typeof ListVpcEndpointsForDomainResponse$ === "object");
assert(typeof ListVpcEndpointsRequest$ === "object");
assert(typeof ListVpcEndpointsResponse$ === "object");
assert(typeof LogPublishingOption$ === "object");
assert(typeof LogPublishingOptionsStatus$ === "object");
assert(typeof MasterUserOptions$ === "object");
assert(typeof ModifyingProperties$ === "object");
assert(typeof NodeToNodeEncryptionOptions$ === "object");
assert(typeof NodeToNodeEncryptionOptionsStatus$ === "object");
assert(typeof OptionStatus$ === "object");
assert(typeof OutboundCrossClusterSearchConnection$ === "object");
assert(typeof OutboundCrossClusterSearchConnectionStatus$ === "object");
assert(typeof PackageDetails$ === "object");
assert(typeof PackageSource$ === "object");
assert(typeof PackageVersionHistory$ === "object");
assert(typeof PurchaseReservedElasticsearchInstanceOfferingRequest$ === "object");
assert(typeof PurchaseReservedElasticsearchInstanceOfferingResponse$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof RejectInboundCrossClusterSearchConnectionRequest$ === "object");
assert(typeof RejectInboundCrossClusterSearchConnectionResponse$ === "object");
assert(typeof RemoveTagsRequest$ === "object");
assert(typeof ReservedElasticsearchInstance$ === "object");
assert(typeof ReservedElasticsearchInstanceOffering$ === "object");
assert(typeof RevokeVpcEndpointAccessRequest$ === "object");
assert(typeof RevokeVpcEndpointAccessResponse$ === "object");
assert(typeof SAMLIdp$ === "object");
assert(typeof SAMLOptionsInput$ === "object");
assert(typeof SAMLOptionsOutput$ === "object");
assert(typeof ScheduledAutoTuneDetails$ === "object");
assert(typeof ServiceSoftwareOptions$ === "object");
assert(typeof SnapshotOptions$ === "object");
assert(typeof SnapshotOptionsStatus$ === "object");
assert(typeof StartElasticsearchServiceSoftwareUpdateRequest$ === "object");
assert(typeof StartElasticsearchServiceSoftwareUpdateResponse$ === "object");
assert(typeof StorageType$ === "object");
assert(typeof StorageTypeLimit$ === "object");
assert(typeof Tag$ === "object");
assert(typeof UpdateElasticsearchDomainConfigRequest$ === "object");
assert(typeof UpdateElasticsearchDomainConfigResponse$ === "object");
assert(typeof UpdatePackageRequest$ === "object");
assert(typeof UpdatePackageResponse$ === "object");
assert(typeof UpdateVpcEndpointRequest$ === "object");
assert(typeof UpdateVpcEndpointResponse$ === "object");
assert(typeof UpgradeElasticsearchDomainRequest$ === "object");
assert(typeof UpgradeElasticsearchDomainResponse$ === "object");
assert(typeof UpgradeHistory$ === "object");
assert(typeof UpgradeStepItem$ === "object");
assert(typeof VPCDerivedInfo$ === "object");
assert(typeof VPCDerivedInfoStatus$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcEndpointError$ === "object");
assert(typeof VpcEndpointSummary$ === "object");
assert(typeof VPCOptions$ === "object");
assert(typeof ZoneAwarenessConfig$ === "object");
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
assert(AccessDeniedException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BaseException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof BaseException$ === "object");
assert(ConflictException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof ConflictException$ === "object");
assert(DisabledOperationException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof DisabledOperationException$ === "object");
assert(InternalException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidPaginationTokenException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof InvalidPaginationTokenException$ === "object");
assert(InvalidTypeException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof InvalidTypeException$ === "object");
assert(LimitExceededException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof ElasticsearchServiceServiceException);
assert(typeof ValidationException$ === "object");
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

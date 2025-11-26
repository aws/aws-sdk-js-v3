import {
  AccessDirection,
  AccessType,
  AccountLevelBpaSyncStatus,
  AddOnType,
  AlarmState,
  AllocateStaticIpCommand,
  AppCategory,
  AttachCertificateToDistributionCommand,
  AttachDiskCommand,
  AttachInstancesToLoadBalancerCommand,
  AttachLoadBalancerTlsCertificateCommand,
  AttachStaticIpCommand,
  AutoMountStatus,
  AutoSnapshotStatus,
  BPAStatusMessage,
  BehaviorEnum,
  BlueprintType,
  BucketMetricName,
  CertificateDomainValidationStatus,
  CertificateProvider,
  CertificateStatus,
  CloseInstancePublicPortsCommand,
  CloudFormationStackRecordSourceType,
  ComparisonOperator,
  ContactMethodStatus,
  ContactMethodVerificationProtocol,
  ContactProtocol,
  ContainerServiceDeploymentState,
  ContainerServiceMetricName,
  ContainerServicePowerName,
  ContainerServiceProtocol,
  ContainerServiceState,
  ContainerServiceStateDetailCode,
  CopySnapshotCommand,
  CreateBucketAccessKeyCommand,
  CreateBucketCommand,
  CreateCertificateCommand,
  CreateCloudFormationStackCommand,
  CreateContactMethodCommand,
  CreateContainerServiceCommand,
  CreateContainerServiceDeploymentCommand,
  CreateContainerServiceRegistryLoginCommand,
  CreateDiskCommand,
  CreateDiskFromSnapshotCommand,
  CreateDiskSnapshotCommand,
  CreateDistributionCommand,
  CreateDomainCommand,
  CreateDomainEntryCommand,
  CreateGUISessionAccessDetailsCommand,
  CreateInstanceSnapshotCommand,
  CreateInstancesCommand,
  CreateInstancesFromSnapshotCommand,
  CreateKeyPairCommand,
  CreateLoadBalancerCommand,
  CreateLoadBalancerTlsCertificateCommand,
  CreateRelationalDatabaseCommand,
  CreateRelationalDatabaseFromSnapshotCommand,
  CreateRelationalDatabaseSnapshotCommand,
  Currency,
  DeleteAlarmCommand,
  DeleteAutoSnapshotCommand,
  DeleteBucketAccessKeyCommand,
  DeleteBucketCommand,
  DeleteCertificateCommand,
  DeleteContactMethodCommand,
  DeleteContainerImageCommand,
  DeleteContainerServiceCommand,
  DeleteDiskCommand,
  DeleteDiskSnapshotCommand,
  DeleteDistributionCommand,
  DeleteDomainCommand,
  DeleteDomainEntryCommand,
  DeleteInstanceCommand,
  DeleteInstanceSnapshotCommand,
  DeleteKeyPairCommand,
  DeleteKnownHostKeysCommand,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerTlsCertificateCommand,
  DeleteRelationalDatabaseCommand,
  DeleteRelationalDatabaseSnapshotCommand,
  DetachCertificateFromDistributionCommand,
  DetachDiskCommand,
  DetachInstancesFromLoadBalancerCommand,
  DetachStaticIpCommand,
  DisableAddOnCommand,
  DiskSnapshotState,
  DiskState,
  DistributionMetricName,
  DnsRecordCreationStateCode,
  DownloadDefaultKeyPairCommand,
  EnableAddOnCommand,
  ExportSnapshotCommand,
  ExportSnapshotRecordSourceType,
  ForwardValues,
  GetActiveNamesCommand,
  GetAlarmsCommand,
  GetAutoSnapshotsCommand,
  GetBlueprintsCommand,
  GetBucketAccessKeysCommand,
  GetBucketBundlesCommand,
  GetBucketMetricDataCommand,
  GetBucketsCommand,
  GetBundlesCommand,
  GetCertificatesCommand,
  GetCloudFormationStackRecordsCommand,
  GetContactMethodsCommand,
  GetContainerAPIMetadataCommand,
  GetContainerImagesCommand,
  GetContainerLogCommand,
  GetContainerServiceDeploymentsCommand,
  GetContainerServiceMetricDataCommand,
  GetContainerServicePowersCommand,
  GetContainerServicesCommand,
  GetCostEstimateCommand,
  GetDiskCommand,
  GetDiskSnapshotCommand,
  GetDiskSnapshotsCommand,
  GetDisksCommand,
  GetDistributionBundlesCommand,
  GetDistributionLatestCacheResetCommand,
  GetDistributionMetricDataCommand,
  GetDistributionsCommand,
  GetDomainCommand,
  GetDomainsCommand,
  GetExportSnapshotRecordsCommand,
  GetInstanceAccessDetailsCommand,
  GetInstanceCommand,
  GetInstanceMetricDataCommand,
  GetInstancePortStatesCommand,
  GetInstanceSnapshotCommand,
  GetInstanceSnapshotsCommand,
  GetInstanceStateCommand,
  GetInstancesCommand,
  GetKeyPairCommand,
  GetKeyPairsCommand,
  GetLoadBalancerCommand,
  GetLoadBalancerMetricDataCommand,
  GetLoadBalancerTlsCertificatesCommand,
  GetLoadBalancerTlsPoliciesCommand,
  GetLoadBalancersCommand,
  GetOperationCommand,
  GetOperationsCommand,
  GetOperationsForResourceCommand,
  GetRegionsCommand,
  GetRelationalDatabaseBlueprintsCommand,
  GetRelationalDatabaseBundlesCommand,
  GetRelationalDatabaseCommand,
  GetRelationalDatabaseEventsCommand,
  GetRelationalDatabaseLogEventsCommand,
  GetRelationalDatabaseLogStreamsCommand,
  GetRelationalDatabaseMasterUserPasswordCommand,
  GetRelationalDatabaseMetricDataCommand,
  GetRelationalDatabaseParametersCommand,
  GetRelationalDatabaseSnapshotCommand,
  GetRelationalDatabaseSnapshotsCommand,
  GetRelationalDatabasesCommand,
  GetSetupHistoryCommand,
  GetStaticIpCommand,
  GetStaticIpsCommand,
  HeaderEnum,
  HttpEndpoint,
  HttpProtocolIpv6,
  HttpTokens,
  ImportKeyPairCommand,
  InstanceAccessProtocol,
  InstanceHealthReason,
  InstanceHealthState,
  InstanceMetadataState,
  InstanceMetricName,
  InstancePlatform,
  InstanceSnapshotState,
  IpAddressType,
  IsVpcPeeredCommand,
  Lightsail,
  LightsailClient,
  LightsailServiceException,
  LoadBalancerAttributeName,
  LoadBalancerMetricName,
  LoadBalancerProtocol,
  LoadBalancerState,
  LoadBalancerTlsCertificateDnsRecordCreationStateCode,
  LoadBalancerTlsCertificateDomainStatus,
  LoadBalancerTlsCertificateFailureReason,
  LoadBalancerTlsCertificateRenewalStatus,
  LoadBalancerTlsCertificateRevocationReason,
  LoadBalancerTlsCertificateStatus,
  MetricName,
  MetricStatistic,
  MetricUnit,
  NameServersUpdateStateCode,
  NetworkProtocol,
  OpenInstancePublicPortsCommand,
  OperationStatus,
  OperationType,
  OriginProtocolPolicyEnum,
  PeerVpcCommand,
  PortAccessType,
  PortInfoSourceType,
  PortState,
  PricingUnit,
  PutAlarmCommand,
  PutInstancePublicPortsCommand,
  R53HostedZoneDeletionStateCode,
  RebootInstanceCommand,
  RebootRelationalDatabaseCommand,
  RecordState,
  RegionName,
  RegisterContainerImageCommand,
  RelationalDatabaseEngine,
  RelationalDatabaseMetricName,
  RelationalDatabasePasswordVersion,
  ReleaseStaticIpCommand,
  RenewalStatus,
  ResetDistributionCacheCommand,
  ResourceBucketAccess,
  ResourceType,
  SendContactMethodVerificationCommand,
  SetIpAddressTypeCommand,
  SetResourceAccessForBucketCommand,
  SetupInstanceHttpsCommand,
  SetupStatus,
  StartGUISessionCommand,
  StartInstanceCommand,
  StartRelationalDatabaseCommand,
  Status,
  StatusType,
  StopGUISessionCommand,
  StopInstanceCommand,
  StopRelationalDatabaseCommand,
  TagResourceCommand,
  TestAlarmCommand,
  TreatMissingData,
  UnpeerVpcCommand,
  UntagResourceCommand,
  UpdateBucketBundleCommand,
  UpdateBucketCommand,
  UpdateContainerServiceCommand,
  UpdateDistributionBundleCommand,
  UpdateDistributionCommand,
  UpdateDomainEntryCommand,
  UpdateInstanceMetadataOptionsCommand,
  UpdateLoadBalancerAttributeCommand,
  UpdateRelationalDatabaseCommand,
  UpdateRelationalDatabaseParametersCommand,
  ViewerMinimumTlsProtocolVersionEnum,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LightsailClient === "function")
assert(typeof Lightsail === "function")
// commands
assert(typeof AllocateStaticIpCommand === "function")
assert(typeof AttachCertificateToDistributionCommand === "function")
assert(typeof AttachDiskCommand === "function")
assert(typeof AttachInstancesToLoadBalancerCommand === "function")
assert(typeof AttachLoadBalancerTlsCertificateCommand === "function")
assert(typeof AttachStaticIpCommand === "function")
assert(typeof CloseInstancePublicPortsCommand === "function")
assert(typeof CopySnapshotCommand === "function")
assert(typeof CreateBucketCommand === "function")
assert(typeof CreateBucketAccessKeyCommand === "function")
assert(typeof CreateCertificateCommand === "function")
assert(typeof CreateCloudFormationStackCommand === "function")
assert(typeof CreateContactMethodCommand === "function")
assert(typeof CreateContainerServiceCommand === "function")
assert(typeof CreateContainerServiceDeploymentCommand === "function")
assert(typeof CreateContainerServiceRegistryLoginCommand === "function")
assert(typeof CreateDiskCommand === "function")
assert(typeof CreateDiskFromSnapshotCommand === "function")
assert(typeof CreateDiskSnapshotCommand === "function")
assert(typeof CreateDistributionCommand === "function")
assert(typeof CreateDomainCommand === "function")
assert(typeof CreateDomainEntryCommand === "function")
assert(typeof CreateGUISessionAccessDetailsCommand === "function")
assert(typeof CreateInstancesCommand === "function")
assert(typeof CreateInstancesFromSnapshotCommand === "function")
assert(typeof CreateInstanceSnapshotCommand === "function")
assert(typeof CreateKeyPairCommand === "function")
assert(typeof CreateLoadBalancerCommand === "function")
assert(typeof CreateLoadBalancerTlsCertificateCommand === "function")
assert(typeof CreateRelationalDatabaseCommand === "function")
assert(typeof CreateRelationalDatabaseFromSnapshotCommand === "function")
assert(typeof CreateRelationalDatabaseSnapshotCommand === "function")
assert(typeof DeleteAlarmCommand === "function")
assert(typeof DeleteAutoSnapshotCommand === "function")
assert(typeof DeleteBucketCommand === "function")
assert(typeof DeleteBucketAccessKeyCommand === "function")
assert(typeof DeleteCertificateCommand === "function")
assert(typeof DeleteContactMethodCommand === "function")
assert(typeof DeleteContainerImageCommand === "function")
assert(typeof DeleteContainerServiceCommand === "function")
assert(typeof DeleteDiskCommand === "function")
assert(typeof DeleteDiskSnapshotCommand === "function")
assert(typeof DeleteDistributionCommand === "function")
assert(typeof DeleteDomainCommand === "function")
assert(typeof DeleteDomainEntryCommand === "function")
assert(typeof DeleteInstanceCommand === "function")
assert(typeof DeleteInstanceSnapshotCommand === "function")
assert(typeof DeleteKeyPairCommand === "function")
assert(typeof DeleteKnownHostKeysCommand === "function")
assert(typeof DeleteLoadBalancerCommand === "function")
assert(typeof DeleteLoadBalancerTlsCertificateCommand === "function")
assert(typeof DeleteRelationalDatabaseCommand === "function")
assert(typeof DeleteRelationalDatabaseSnapshotCommand === "function")
assert(typeof DetachCertificateFromDistributionCommand === "function")
assert(typeof DetachDiskCommand === "function")
assert(typeof DetachInstancesFromLoadBalancerCommand === "function")
assert(typeof DetachStaticIpCommand === "function")
assert(typeof DisableAddOnCommand === "function")
assert(typeof DownloadDefaultKeyPairCommand === "function")
assert(typeof EnableAddOnCommand === "function")
assert(typeof ExportSnapshotCommand === "function")
assert(typeof GetActiveNamesCommand === "function")
assert(typeof GetAlarmsCommand === "function")
assert(typeof GetAutoSnapshotsCommand === "function")
assert(typeof GetBlueprintsCommand === "function")
assert(typeof GetBucketAccessKeysCommand === "function")
assert(typeof GetBucketBundlesCommand === "function")
assert(typeof GetBucketMetricDataCommand === "function")
assert(typeof GetBucketsCommand === "function")
assert(typeof GetBundlesCommand === "function")
assert(typeof GetCertificatesCommand === "function")
assert(typeof GetCloudFormationStackRecordsCommand === "function")
assert(typeof GetContactMethodsCommand === "function")
assert(typeof GetContainerAPIMetadataCommand === "function")
assert(typeof GetContainerImagesCommand === "function")
assert(typeof GetContainerLogCommand === "function")
assert(typeof GetContainerServiceDeploymentsCommand === "function")
assert(typeof GetContainerServiceMetricDataCommand === "function")
assert(typeof GetContainerServicePowersCommand === "function")
assert(typeof GetContainerServicesCommand === "function")
assert(typeof GetCostEstimateCommand === "function")
assert(typeof GetDiskCommand === "function")
assert(typeof GetDisksCommand === "function")
assert(typeof GetDiskSnapshotCommand === "function")
assert(typeof GetDiskSnapshotsCommand === "function")
assert(typeof GetDistributionBundlesCommand === "function")
assert(typeof GetDistributionLatestCacheResetCommand === "function")
assert(typeof GetDistributionMetricDataCommand === "function")
assert(typeof GetDistributionsCommand === "function")
assert(typeof GetDomainCommand === "function")
assert(typeof GetDomainsCommand === "function")
assert(typeof GetExportSnapshotRecordsCommand === "function")
assert(typeof GetInstanceCommand === "function")
assert(typeof GetInstanceAccessDetailsCommand === "function")
assert(typeof GetInstanceMetricDataCommand === "function")
assert(typeof GetInstancePortStatesCommand === "function")
assert(typeof GetInstancesCommand === "function")
assert(typeof GetInstanceSnapshotCommand === "function")
assert(typeof GetInstanceSnapshotsCommand === "function")
assert(typeof GetInstanceStateCommand === "function")
assert(typeof GetKeyPairCommand === "function")
assert(typeof GetKeyPairsCommand === "function")
assert(typeof GetLoadBalancerCommand === "function")
assert(typeof GetLoadBalancerMetricDataCommand === "function")
assert(typeof GetLoadBalancersCommand === "function")
assert(typeof GetLoadBalancerTlsCertificatesCommand === "function")
assert(typeof GetLoadBalancerTlsPoliciesCommand === "function")
assert(typeof GetOperationCommand === "function")
assert(typeof GetOperationsCommand === "function")
assert(typeof GetOperationsForResourceCommand === "function")
assert(typeof GetRegionsCommand === "function")
assert(typeof GetRelationalDatabaseCommand === "function")
assert(typeof GetRelationalDatabaseBlueprintsCommand === "function")
assert(typeof GetRelationalDatabaseBundlesCommand === "function")
assert(typeof GetRelationalDatabaseEventsCommand === "function")
assert(typeof GetRelationalDatabaseLogEventsCommand === "function")
assert(typeof GetRelationalDatabaseLogStreamsCommand === "function")
assert(typeof GetRelationalDatabaseMasterUserPasswordCommand === "function")
assert(typeof GetRelationalDatabaseMetricDataCommand === "function")
assert(typeof GetRelationalDatabaseParametersCommand === "function")
assert(typeof GetRelationalDatabasesCommand === "function")
assert(typeof GetRelationalDatabaseSnapshotCommand === "function")
assert(typeof GetRelationalDatabaseSnapshotsCommand === "function")
assert(typeof GetSetupHistoryCommand === "function")
assert(typeof GetStaticIpCommand === "function")
assert(typeof GetStaticIpsCommand === "function")
assert(typeof ImportKeyPairCommand === "function")
assert(typeof IsVpcPeeredCommand === "function")
assert(typeof OpenInstancePublicPortsCommand === "function")
assert(typeof PeerVpcCommand === "function")
assert(typeof PutAlarmCommand === "function")
assert(typeof PutInstancePublicPortsCommand === "function")
assert(typeof RebootInstanceCommand === "function")
assert(typeof RebootRelationalDatabaseCommand === "function")
assert(typeof RegisterContainerImageCommand === "function")
assert(typeof ReleaseStaticIpCommand === "function")
assert(typeof ResetDistributionCacheCommand === "function")
assert(typeof SendContactMethodVerificationCommand === "function")
assert(typeof SetIpAddressTypeCommand === "function")
assert(typeof SetResourceAccessForBucketCommand === "function")
assert(typeof SetupInstanceHttpsCommand === "function")
assert(typeof StartGUISessionCommand === "function")
assert(typeof StartInstanceCommand === "function")
assert(typeof StartRelationalDatabaseCommand === "function")
assert(typeof StopGUISessionCommand === "function")
assert(typeof StopInstanceCommand === "function")
assert(typeof StopRelationalDatabaseCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestAlarmCommand === "function")
assert(typeof UnpeerVpcCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateBucketCommand === "function")
assert(typeof UpdateBucketBundleCommand === "function")
assert(typeof UpdateContainerServiceCommand === "function")
assert(typeof UpdateDistributionCommand === "function")
assert(typeof UpdateDistributionBundleCommand === "function")
assert(typeof UpdateDomainEntryCommand === "function")
assert(typeof UpdateInstanceMetadataOptionsCommand === "function")
assert(typeof UpdateLoadBalancerAttributeCommand === "function")
assert(typeof UpdateRelationalDatabaseCommand === "function")
assert(typeof UpdateRelationalDatabaseParametersCommand === "function")
// enums
assert(typeof AccessDirection === "object");
assert(typeof AccessType === "object");
assert(typeof AccountLevelBpaSyncStatus === "object");
assert(typeof AddOnType === "object");
assert(typeof AlarmState === "object");
assert(typeof AppCategory === "object");
assert(typeof AutoMountStatus === "object");
assert(typeof AutoSnapshotStatus === "object");
assert(typeof BehaviorEnum === "object");
assert(typeof BlueprintType === "object");
assert(typeof BPAStatusMessage === "object");
assert(typeof BucketMetricName === "object");
assert(typeof CertificateDomainValidationStatus === "object");
assert(typeof CertificateProvider === "object");
assert(typeof CertificateStatus === "object");
assert(typeof CloudFormationStackRecordSourceType === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof ContactMethodStatus === "object");
assert(typeof ContactMethodVerificationProtocol === "object");
assert(typeof ContactProtocol === "object");
assert(typeof ContainerServiceDeploymentState === "object");
assert(typeof ContainerServiceMetricName === "object");
assert(typeof ContainerServicePowerName === "object");
assert(typeof ContainerServiceProtocol === "object");
assert(typeof ContainerServiceState === "object");
assert(typeof ContainerServiceStateDetailCode === "object");
assert(typeof Currency === "object");
assert(typeof DiskSnapshotState === "object");
assert(typeof DiskState === "object");
assert(typeof DistributionMetricName === "object");
assert(typeof DnsRecordCreationStateCode === "object");
assert(typeof ExportSnapshotRecordSourceType === "object");
assert(typeof ForwardValues === "object");
assert(typeof HeaderEnum === "object");
assert(typeof HttpEndpoint === "object");
assert(typeof HttpProtocolIpv6 === "object");
assert(typeof HttpTokens === "object");
assert(typeof InstanceAccessProtocol === "object");
assert(typeof InstanceHealthReason === "object");
assert(typeof InstanceHealthState === "object");
assert(typeof InstanceMetadataState === "object");
assert(typeof InstanceMetricName === "object");
assert(typeof InstancePlatform === "object");
assert(typeof InstanceSnapshotState === "object");
assert(typeof IpAddressType === "object");
assert(typeof LoadBalancerAttributeName === "object");
assert(typeof LoadBalancerMetricName === "object");
assert(typeof LoadBalancerProtocol === "object");
assert(typeof LoadBalancerState === "object");
assert(typeof LoadBalancerTlsCertificateDnsRecordCreationStateCode === "object");
assert(typeof LoadBalancerTlsCertificateDomainStatus === "object");
assert(typeof LoadBalancerTlsCertificateFailureReason === "object");
assert(typeof LoadBalancerTlsCertificateRenewalStatus === "object");
assert(typeof LoadBalancerTlsCertificateRevocationReason === "object");
assert(typeof LoadBalancerTlsCertificateStatus === "object");
assert(typeof MetricName === "object");
assert(typeof MetricStatistic === "object");
assert(typeof MetricUnit === "object");
assert(typeof NameServersUpdateStateCode === "object");
assert(typeof NetworkProtocol === "object");
assert(typeof OperationStatus === "object");
assert(typeof OperationType === "object");
assert(typeof OriginProtocolPolicyEnum === "object");
assert(typeof PortAccessType === "object");
assert(typeof PortInfoSourceType === "object");
assert(typeof PortState === "object");
assert(typeof PricingUnit === "object");
assert(typeof R53HostedZoneDeletionStateCode === "object");
assert(typeof RecordState === "object");
assert(typeof RegionName === "object");
assert(typeof RelationalDatabaseEngine === "object");
assert(typeof RelationalDatabaseMetricName === "object");
assert(typeof RelationalDatabasePasswordVersion === "object");
assert(typeof RenewalStatus === "object");
assert(typeof ResourceBucketAccess === "object");
assert(typeof ResourceType === "object");
assert(typeof SetupStatus === "object");
assert(typeof Status === "object");
assert(typeof StatusType === "object");
assert(typeof TreatMissingData === "object");
assert(typeof ViewerMinimumTlsProtocolVersionEnum === "object");
// errors
assert(LightsailServiceException.prototype instanceof Error)
console.log(`Lightsail index test passed.`);

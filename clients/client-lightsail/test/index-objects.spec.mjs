import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDirection,
  AccessKey$,
  AccessKeyLastUsed$,
  AccessRules$,
  AccessType,
  AccountLevelBpaSync$,
  AccountLevelBpaSyncStatus,
  AccountSetupInProgressException,
  AccountSetupInProgressException$,
  AddOn$,
  AddOnRequest$,
  AddOnType,
  Alarm$,
  AlarmState,
  AllocateStaticIp$,
  AllocateStaticIpCommand,
  AllocateStaticIpRequest$,
  AllocateStaticIpResult$,
  AppCategory,
  AttachCertificateToDistribution$,
  AttachCertificateToDistributionCommand,
  AttachCertificateToDistributionRequest$,
  AttachCertificateToDistributionResult$,
  AttachDisk$,
  AttachDiskCommand,
  AttachDiskRequest$,
  AttachDiskResult$,
  AttachInstancesToLoadBalancer$,
  AttachInstancesToLoadBalancerCommand,
  AttachInstancesToLoadBalancerRequest$,
  AttachInstancesToLoadBalancerResult$,
  AttachLoadBalancerTlsCertificate$,
  AttachLoadBalancerTlsCertificateCommand,
  AttachLoadBalancerTlsCertificateRequest$,
  AttachLoadBalancerTlsCertificateResult$,
  AttachStaticIp$,
  AttachStaticIpCommand,
  AttachStaticIpRequest$,
  AttachStaticIpResult$,
  AttachedDisk$,
  AutoMountStatus,
  AutoSnapshotAddOnRequest$,
  AutoSnapshotDetails$,
  AutoSnapshotStatus,
  AvailabilityZone$,
  BPAStatusMessage,
  BehaviorEnum,
  Blueprint$,
  BlueprintType,
  Bucket$,
  BucketAccessLogConfig$,
  BucketBundle$,
  BucketCorsConfig$,
  BucketCorsRule$,
  BucketMetricName,
  BucketState$,
  Bundle$,
  CacheBehavior$,
  CacheBehaviorPerPath$,
  CacheSettings$,
  Certificate$,
  CertificateDomainValidationStatus,
  CertificateProvider,
  CertificateStatus,
  CertificateSummary$,
  CloseInstancePublicPorts$,
  CloseInstancePublicPortsCommand,
  CloseInstancePublicPortsRequest$,
  CloseInstancePublicPortsResult$,
  CloudFormationStackRecord$,
  CloudFormationStackRecordSourceInfo$,
  CloudFormationStackRecordSourceType,
  ComparisonOperator,
  ContactMethod$,
  ContactMethodStatus,
  ContactMethodVerificationProtocol,
  ContactProtocol,
  Container$,
  ContainerImage$,
  ContainerService$,
  ContainerServiceDeployment$,
  ContainerServiceDeploymentRequest$,
  ContainerServiceDeploymentState,
  ContainerServiceECRImagePullerRole$,
  ContainerServiceECRImagePullerRoleRequest$,
  ContainerServiceEndpoint$,
  ContainerServiceHealthCheckConfig$,
  ContainerServiceLogEvent$,
  ContainerServiceMetricName,
  ContainerServicePower$,
  ContainerServicePowerName,
  ContainerServiceProtocol,
  ContainerServiceRegistryLogin$,
  ContainerServiceState,
  ContainerServiceStateDetail$,
  ContainerServiceStateDetailCode,
  ContainerServicesListResult$,
  CookieObject$,
  CopySnapshot$,
  CopySnapshotCommand,
  CopySnapshotRequest$,
  CopySnapshotResult$,
  CostEstimate$,
  CreateBucket$,
  CreateBucketAccessKey$,
  CreateBucketAccessKeyCommand,
  CreateBucketAccessKeyRequest$,
  CreateBucketAccessKeyResult$,
  CreateBucketCommand,
  CreateBucketRequest$,
  CreateBucketResult$,
  CreateCertificate$,
  CreateCertificateCommand,
  CreateCertificateRequest$,
  CreateCertificateResult$,
  CreateCloudFormationStack$,
  CreateCloudFormationStackCommand,
  CreateCloudFormationStackRequest$,
  CreateCloudFormationStackResult$,
  CreateContactMethod$,
  CreateContactMethodCommand,
  CreateContactMethodRequest$,
  CreateContactMethodResult$,
  CreateContainerService$,
  CreateContainerServiceCommand,
  CreateContainerServiceDeployment$,
  CreateContainerServiceDeploymentCommand,
  CreateContainerServiceDeploymentRequest$,
  CreateContainerServiceDeploymentResult$,
  CreateContainerServiceRegistryLogin$,
  CreateContainerServiceRegistryLoginCommand,
  CreateContainerServiceRegistryLoginRequest$,
  CreateContainerServiceRegistryLoginResult$,
  CreateContainerServiceRequest$,
  CreateContainerServiceResult$,
  CreateDisk$,
  CreateDiskCommand,
  CreateDiskFromSnapshot$,
  CreateDiskFromSnapshotCommand,
  CreateDiskFromSnapshotRequest$,
  CreateDiskFromSnapshotResult$,
  CreateDiskRequest$,
  CreateDiskResult$,
  CreateDiskSnapshot$,
  CreateDiskSnapshotCommand,
  CreateDiskSnapshotRequest$,
  CreateDiskSnapshotResult$,
  CreateDistribution$,
  CreateDistributionCommand,
  CreateDistributionRequest$,
  CreateDistributionResult$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainEntry$,
  CreateDomainEntryCommand,
  CreateDomainEntryRequest$,
  CreateDomainEntryResult$,
  CreateDomainRequest$,
  CreateDomainResult$,
  CreateGUISessionAccessDetails$,
  CreateGUISessionAccessDetailsCommand,
  CreateGUISessionAccessDetailsRequest$,
  CreateGUISessionAccessDetailsResult$,
  CreateInstanceSnapshot$,
  CreateInstanceSnapshotCommand,
  CreateInstanceSnapshotRequest$,
  CreateInstanceSnapshotResult$,
  CreateInstances$,
  CreateInstancesCommand,
  CreateInstancesFromSnapshot$,
  CreateInstancesFromSnapshotCommand,
  CreateInstancesFromSnapshotRequest$,
  CreateInstancesFromSnapshotResult$,
  CreateInstancesRequest$,
  CreateInstancesResult$,
  CreateKeyPair$,
  CreateKeyPairCommand,
  CreateKeyPairRequest$,
  CreateKeyPairResult$,
  CreateLoadBalancer$,
  CreateLoadBalancerCommand,
  CreateLoadBalancerRequest$,
  CreateLoadBalancerResult$,
  CreateLoadBalancerTlsCertificate$,
  CreateLoadBalancerTlsCertificateCommand,
  CreateLoadBalancerTlsCertificateRequest$,
  CreateLoadBalancerTlsCertificateResult$,
  CreateRelationalDatabase$,
  CreateRelationalDatabaseCommand,
  CreateRelationalDatabaseFromSnapshot$,
  CreateRelationalDatabaseFromSnapshotCommand,
  CreateRelationalDatabaseFromSnapshotRequest$,
  CreateRelationalDatabaseFromSnapshotResult$,
  CreateRelationalDatabaseRequest$,
  CreateRelationalDatabaseResult$,
  CreateRelationalDatabaseSnapshot$,
  CreateRelationalDatabaseSnapshotCommand,
  CreateRelationalDatabaseSnapshotRequest$,
  CreateRelationalDatabaseSnapshotResult$,
  Currency,
  DeleteAlarm$,
  DeleteAlarmCommand,
  DeleteAlarmRequest$,
  DeleteAlarmResult$,
  DeleteAutoSnapshot$,
  DeleteAutoSnapshotCommand,
  DeleteAutoSnapshotRequest$,
  DeleteAutoSnapshotResult$,
  DeleteBucket$,
  DeleteBucketAccessKey$,
  DeleteBucketAccessKeyCommand,
  DeleteBucketAccessKeyRequest$,
  DeleteBucketAccessKeyResult$,
  DeleteBucketCommand,
  DeleteBucketRequest$,
  DeleteBucketResult$,
  DeleteCertificate$,
  DeleteCertificateCommand,
  DeleteCertificateRequest$,
  DeleteCertificateResult$,
  DeleteContactMethod$,
  DeleteContactMethodCommand,
  DeleteContactMethodRequest$,
  DeleteContactMethodResult$,
  DeleteContainerImage$,
  DeleteContainerImageCommand,
  DeleteContainerImageRequest$,
  DeleteContainerImageResult$,
  DeleteContainerService$,
  DeleteContainerServiceCommand,
  DeleteContainerServiceRequest$,
  DeleteContainerServiceResult$,
  DeleteDisk$,
  DeleteDiskCommand,
  DeleteDiskRequest$,
  DeleteDiskResult$,
  DeleteDiskSnapshot$,
  DeleteDiskSnapshotCommand,
  DeleteDiskSnapshotRequest$,
  DeleteDiskSnapshotResult$,
  DeleteDistribution$,
  DeleteDistributionCommand,
  DeleteDistributionRequest$,
  DeleteDistributionResult$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainEntry$,
  DeleteDomainEntryCommand,
  DeleteDomainEntryRequest$,
  DeleteDomainEntryResult$,
  DeleteDomainRequest$,
  DeleteDomainResult$,
  DeleteInstance$,
  DeleteInstanceCommand,
  DeleteInstanceRequest$,
  DeleteInstanceResult$,
  DeleteInstanceSnapshot$,
  DeleteInstanceSnapshotCommand,
  DeleteInstanceSnapshotRequest$,
  DeleteInstanceSnapshotResult$,
  DeleteKeyPair$,
  DeleteKeyPairCommand,
  DeleteKeyPairRequest$,
  DeleteKeyPairResult$,
  DeleteKnownHostKeys$,
  DeleteKnownHostKeysCommand,
  DeleteKnownHostKeysRequest$,
  DeleteKnownHostKeysResult$,
  DeleteLoadBalancer$,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerRequest$,
  DeleteLoadBalancerResult$,
  DeleteLoadBalancerTlsCertificate$,
  DeleteLoadBalancerTlsCertificateCommand,
  DeleteLoadBalancerTlsCertificateRequest$,
  DeleteLoadBalancerTlsCertificateResult$,
  DeleteRelationalDatabase$,
  DeleteRelationalDatabaseCommand,
  DeleteRelationalDatabaseRequest$,
  DeleteRelationalDatabaseResult$,
  DeleteRelationalDatabaseSnapshot$,
  DeleteRelationalDatabaseSnapshotCommand,
  DeleteRelationalDatabaseSnapshotRequest$,
  DeleteRelationalDatabaseSnapshotResult$,
  DestinationInfo$,
  DetachCertificateFromDistribution$,
  DetachCertificateFromDistributionCommand,
  DetachCertificateFromDistributionRequest$,
  DetachCertificateFromDistributionResult$,
  DetachDisk$,
  DetachDiskCommand,
  DetachDiskRequest$,
  DetachDiskResult$,
  DetachInstancesFromLoadBalancer$,
  DetachInstancesFromLoadBalancerCommand,
  DetachInstancesFromLoadBalancerRequest$,
  DetachInstancesFromLoadBalancerResult$,
  DetachStaticIp$,
  DetachStaticIpCommand,
  DetachStaticIpRequest$,
  DetachStaticIpResult$,
  DisableAddOn$,
  DisableAddOnCommand,
  DisableAddOnRequest$,
  DisableAddOnResult$,
  Disk$,
  DiskInfo$,
  DiskMap$,
  DiskSnapshot$,
  DiskSnapshotInfo$,
  DiskSnapshotState,
  DiskState,
  DistributionBundle$,
  DistributionMetricName,
  DnsRecordCreationState$,
  DnsRecordCreationStateCode,
  Domain$,
  DomainEntry$,
  DomainValidationRecord$,
  DownloadDefaultKeyPair$,
  DownloadDefaultKeyPairCommand,
  DownloadDefaultKeyPairRequest$,
  DownloadDefaultKeyPairResult$,
  EnableAddOn$,
  EnableAddOnCommand,
  EnableAddOnRequest$,
  EnableAddOnResult$,
  EndpointRequest$,
  EstimateByTime$,
  ExportSnapshot$,
  ExportSnapshotCommand,
  ExportSnapshotRecord$,
  ExportSnapshotRecordSourceInfo$,
  ExportSnapshotRecordSourceType,
  ExportSnapshotRequest$,
  ExportSnapshotResult$,
  ForwardValues,
  GetActiveNames$,
  GetActiveNamesCommand,
  GetActiveNamesRequest$,
  GetActiveNamesResult$,
  GetAlarms$,
  GetAlarmsCommand,
  GetAlarmsRequest$,
  GetAlarmsResult$,
  GetAutoSnapshots$,
  GetAutoSnapshotsCommand,
  GetAutoSnapshotsRequest$,
  GetAutoSnapshotsResult$,
  GetBlueprints$,
  GetBlueprintsCommand,
  GetBlueprintsRequest$,
  GetBlueprintsResult$,
  GetBucketAccessKeys$,
  GetBucketAccessKeysCommand,
  GetBucketAccessKeysRequest$,
  GetBucketAccessKeysResult$,
  GetBucketBundles$,
  GetBucketBundlesCommand,
  GetBucketBundlesRequest$,
  GetBucketBundlesResult$,
  GetBucketMetricData$,
  GetBucketMetricDataCommand,
  GetBucketMetricDataRequest$,
  GetBucketMetricDataResult$,
  GetBuckets$,
  GetBucketsCommand,
  GetBucketsRequest$,
  GetBucketsResult$,
  GetBundles$,
  GetBundlesCommand,
  GetBundlesRequest$,
  GetBundlesResult$,
  GetCertificates$,
  GetCertificatesCommand,
  GetCertificatesRequest$,
  GetCertificatesResult$,
  GetCloudFormationStackRecords$,
  GetCloudFormationStackRecordsCommand,
  GetCloudFormationStackRecordsRequest$,
  GetCloudFormationStackRecordsResult$,
  GetContactMethods$,
  GetContactMethodsCommand,
  GetContactMethodsRequest$,
  GetContactMethodsResult$,
  GetContainerAPIMetadata$,
  GetContainerAPIMetadataCommand,
  GetContainerAPIMetadataRequest$,
  GetContainerAPIMetadataResult$,
  GetContainerImages$,
  GetContainerImagesCommand,
  GetContainerImagesRequest$,
  GetContainerImagesResult$,
  GetContainerLog$,
  GetContainerLogCommand,
  GetContainerLogRequest$,
  GetContainerLogResult$,
  GetContainerServiceDeployments$,
  GetContainerServiceDeploymentsCommand,
  GetContainerServiceDeploymentsRequest$,
  GetContainerServiceDeploymentsResult$,
  GetContainerServiceMetricData$,
  GetContainerServiceMetricDataCommand,
  GetContainerServiceMetricDataRequest$,
  GetContainerServiceMetricDataResult$,
  GetContainerServicePowers$,
  GetContainerServicePowersCommand,
  GetContainerServicePowersRequest$,
  GetContainerServicePowersResult$,
  GetContainerServices$,
  GetContainerServicesCommand,
  GetContainerServicesRequest$,
  GetCostEstimate$,
  GetCostEstimateCommand,
  GetCostEstimateRequest$,
  GetCostEstimateResult$,
  GetDisk$,
  GetDiskCommand,
  GetDiskRequest$,
  GetDiskResult$,
  GetDiskSnapshot$,
  GetDiskSnapshotCommand,
  GetDiskSnapshotRequest$,
  GetDiskSnapshotResult$,
  GetDiskSnapshots$,
  GetDiskSnapshotsCommand,
  GetDiskSnapshotsRequest$,
  GetDiskSnapshotsResult$,
  GetDisks$,
  GetDisksCommand,
  GetDisksRequest$,
  GetDisksResult$,
  GetDistributionBundles$,
  GetDistributionBundlesCommand,
  GetDistributionBundlesRequest$,
  GetDistributionBundlesResult$,
  GetDistributionLatestCacheReset$,
  GetDistributionLatestCacheResetCommand,
  GetDistributionLatestCacheResetRequest$,
  GetDistributionLatestCacheResetResult$,
  GetDistributionMetricData$,
  GetDistributionMetricDataCommand,
  GetDistributionMetricDataRequest$,
  GetDistributionMetricDataResult$,
  GetDistributions$,
  GetDistributionsCommand,
  GetDistributionsRequest$,
  GetDistributionsResult$,
  GetDomain$,
  GetDomainCommand,
  GetDomainRequest$,
  GetDomainResult$,
  GetDomains$,
  GetDomainsCommand,
  GetDomainsRequest$,
  GetDomainsResult$,
  GetExportSnapshotRecords$,
  GetExportSnapshotRecordsCommand,
  GetExportSnapshotRecordsRequest$,
  GetExportSnapshotRecordsResult$,
  GetInstance$,
  GetInstanceAccessDetails$,
  GetInstanceAccessDetailsCommand,
  GetInstanceAccessDetailsRequest$,
  GetInstanceAccessDetailsResult$,
  GetInstanceCommand,
  GetInstanceMetricData$,
  GetInstanceMetricDataCommand,
  GetInstanceMetricDataRequest$,
  GetInstanceMetricDataResult$,
  GetInstancePortStates$,
  GetInstancePortStatesCommand,
  GetInstancePortStatesRequest$,
  GetInstancePortStatesResult$,
  GetInstanceRequest$,
  GetInstanceResult$,
  GetInstanceSnapshot$,
  GetInstanceSnapshotCommand,
  GetInstanceSnapshotRequest$,
  GetInstanceSnapshotResult$,
  GetInstanceSnapshots$,
  GetInstanceSnapshotsCommand,
  GetInstanceSnapshotsRequest$,
  GetInstanceSnapshotsResult$,
  GetInstanceState$,
  GetInstanceStateCommand,
  GetInstanceStateRequest$,
  GetInstanceStateResult$,
  GetInstances$,
  GetInstancesCommand,
  GetInstancesRequest$,
  GetInstancesResult$,
  GetKeyPair$,
  GetKeyPairCommand,
  GetKeyPairRequest$,
  GetKeyPairResult$,
  GetKeyPairs$,
  GetKeyPairsCommand,
  GetKeyPairsRequest$,
  GetKeyPairsResult$,
  GetLoadBalancer$,
  GetLoadBalancerCommand,
  GetLoadBalancerMetricData$,
  GetLoadBalancerMetricDataCommand,
  GetLoadBalancerMetricDataRequest$,
  GetLoadBalancerMetricDataResult$,
  GetLoadBalancerRequest$,
  GetLoadBalancerResult$,
  GetLoadBalancerTlsCertificates$,
  GetLoadBalancerTlsCertificatesCommand,
  GetLoadBalancerTlsCertificatesRequest$,
  GetLoadBalancerTlsCertificatesResult$,
  GetLoadBalancerTlsPolicies$,
  GetLoadBalancerTlsPoliciesCommand,
  GetLoadBalancerTlsPoliciesRequest$,
  GetLoadBalancerTlsPoliciesResult$,
  GetLoadBalancers$,
  GetLoadBalancersCommand,
  GetLoadBalancersRequest$,
  GetLoadBalancersResult$,
  GetOperation$,
  GetOperationCommand,
  GetOperationRequest$,
  GetOperationResult$,
  GetOperations$,
  GetOperationsCommand,
  GetOperationsForResource$,
  GetOperationsForResourceCommand,
  GetOperationsForResourceRequest$,
  GetOperationsForResourceResult$,
  GetOperationsRequest$,
  GetOperationsResult$,
  GetRegions$,
  GetRegionsCommand,
  GetRegionsRequest$,
  GetRegionsResult$,
  GetRelationalDatabase$,
  GetRelationalDatabaseBlueprints$,
  GetRelationalDatabaseBlueprintsCommand,
  GetRelationalDatabaseBlueprintsRequest$,
  GetRelationalDatabaseBlueprintsResult$,
  GetRelationalDatabaseBundles$,
  GetRelationalDatabaseBundlesCommand,
  GetRelationalDatabaseBundlesRequest$,
  GetRelationalDatabaseBundlesResult$,
  GetRelationalDatabaseCommand,
  GetRelationalDatabaseEvents$,
  GetRelationalDatabaseEventsCommand,
  GetRelationalDatabaseEventsRequest$,
  GetRelationalDatabaseEventsResult$,
  GetRelationalDatabaseLogEvents$,
  GetRelationalDatabaseLogEventsCommand,
  GetRelationalDatabaseLogEventsRequest$,
  GetRelationalDatabaseLogEventsResult$,
  GetRelationalDatabaseLogStreams$,
  GetRelationalDatabaseLogStreamsCommand,
  GetRelationalDatabaseLogStreamsRequest$,
  GetRelationalDatabaseLogStreamsResult$,
  GetRelationalDatabaseMasterUserPassword$,
  GetRelationalDatabaseMasterUserPasswordCommand,
  GetRelationalDatabaseMasterUserPasswordRequest$,
  GetRelationalDatabaseMasterUserPasswordResult$,
  GetRelationalDatabaseMetricData$,
  GetRelationalDatabaseMetricDataCommand,
  GetRelationalDatabaseMetricDataRequest$,
  GetRelationalDatabaseMetricDataResult$,
  GetRelationalDatabaseParameters$,
  GetRelationalDatabaseParametersCommand,
  GetRelationalDatabaseParametersRequest$,
  GetRelationalDatabaseParametersResult$,
  GetRelationalDatabaseRequest$,
  GetRelationalDatabaseResult$,
  GetRelationalDatabaseSnapshot$,
  GetRelationalDatabaseSnapshotCommand,
  GetRelationalDatabaseSnapshotRequest$,
  GetRelationalDatabaseSnapshotResult$,
  GetRelationalDatabaseSnapshots$,
  GetRelationalDatabaseSnapshotsCommand,
  GetRelationalDatabaseSnapshotsRequest$,
  GetRelationalDatabaseSnapshotsResult$,
  GetRelationalDatabases$,
  GetRelationalDatabasesCommand,
  GetRelationalDatabasesRequest$,
  GetRelationalDatabasesResult$,
  GetSetupHistory$,
  GetSetupHistoryCommand,
  GetSetupHistoryRequest$,
  GetSetupHistoryResult$,
  GetStaticIp$,
  GetStaticIpCommand,
  GetStaticIpRequest$,
  GetStaticIpResult$,
  GetStaticIps$,
  GetStaticIpsCommand,
  GetStaticIpsRequest$,
  GetStaticIpsResult$,
  HeaderEnum,
  HeaderObject$,
  HostKeyAttributes$,
  HttpEndpoint,
  HttpProtocolIpv6,
  HttpTokens,
  ImportKeyPair$,
  ImportKeyPairCommand,
  ImportKeyPairRequest$,
  ImportKeyPairResult$,
  InputOrigin$,
  Instance$,
  InstanceAccessDetails$,
  InstanceAccessProtocol,
  InstanceEntry$,
  InstanceHardware$,
  InstanceHealthReason,
  InstanceHealthState,
  InstanceHealthSummary$,
  InstanceMetadataOptions$,
  InstanceMetadataState,
  InstanceMetricName,
  InstanceNetworking$,
  InstancePlatform,
  InstancePortInfo$,
  InstancePortState$,
  InstanceSnapshot$,
  InstanceSnapshotInfo$,
  InstanceSnapshotState,
  InstanceState$,
  InvalidInputException,
  InvalidInputException$,
  IpAddressType,
  IsVpcPeered$,
  IsVpcPeeredCommand,
  IsVpcPeeredRequest$,
  IsVpcPeeredResult$,
  KeyPair$,
  Lightsail,
  LightsailClient,
  LightsailDistribution$,
  LightsailServiceException,
  LoadBalancer$,
  LoadBalancerAttributeName,
  LoadBalancerMetricName,
  LoadBalancerProtocol,
  LoadBalancerState,
  LoadBalancerTlsCertificate$,
  LoadBalancerTlsCertificateDnsRecordCreationState$,
  LoadBalancerTlsCertificateDnsRecordCreationStateCode,
  LoadBalancerTlsCertificateDomainStatus,
  LoadBalancerTlsCertificateDomainValidationOption$,
  LoadBalancerTlsCertificateDomainValidationRecord$,
  LoadBalancerTlsCertificateFailureReason,
  LoadBalancerTlsCertificateRenewalStatus,
  LoadBalancerTlsCertificateRenewalSummary$,
  LoadBalancerTlsCertificateRevocationReason,
  LoadBalancerTlsCertificateStatus,
  LoadBalancerTlsCertificateSummary$,
  LoadBalancerTlsPolicy$,
  LogEvent$,
  MetricDatapoint$,
  MetricName,
  MetricStatistic,
  MetricUnit,
  MonitoredResourceInfo$,
  MonthlyTransfer$,
  NameServersUpdateState$,
  NameServersUpdateStateCode,
  NetworkProtocol,
  NotFoundException,
  NotFoundException$,
  OpenInstancePublicPorts$,
  OpenInstancePublicPortsCommand,
  OpenInstancePublicPortsRequest$,
  OpenInstancePublicPortsResult$,
  Operation$,
  OperationFailureException,
  OperationFailureException$,
  OperationStatus,
  OperationType,
  Origin$,
  OriginProtocolPolicyEnum,
  PasswordData$,
  PeerVpc$,
  PeerVpcCommand,
  PeerVpcRequest$,
  PeerVpcResult$,
  PendingMaintenanceAction$,
  PendingModifiedRelationalDatabaseValues$,
  PortAccessType,
  PortInfo$,
  PortInfoSourceType,
  PortState,
  PricingUnit,
  PrivateRegistryAccess$,
  PrivateRegistryAccessRequest$,
  PutAlarm$,
  PutAlarmCommand,
  PutAlarmRequest$,
  PutAlarmResult$,
  PutInstancePublicPorts$,
  PutInstancePublicPortsCommand,
  PutInstancePublicPortsRequest$,
  PutInstancePublicPortsResult$,
  QueryStringObject$,
  R53HostedZoneDeletionState$,
  R53HostedZoneDeletionStateCode,
  RebootInstance$,
  RebootInstanceCommand,
  RebootInstanceRequest$,
  RebootInstanceResult$,
  RebootRelationalDatabase$,
  RebootRelationalDatabaseCommand,
  RebootRelationalDatabaseRequest$,
  RebootRelationalDatabaseResult$,
  RecordState,
  Region$,
  RegionName,
  RegionSetupInProgressException,
  RegionSetupInProgressException$,
  RegisterContainerImage$,
  RegisterContainerImageCommand,
  RegisterContainerImageRequest$,
  RegisterContainerImageResult$,
  RegisteredDomainDelegationInfo$,
  RelationalDatabase$,
  RelationalDatabaseBlueprint$,
  RelationalDatabaseBundle$,
  RelationalDatabaseEndpoint$,
  RelationalDatabaseEngine,
  RelationalDatabaseEvent$,
  RelationalDatabaseHardware$,
  RelationalDatabaseMetricName,
  RelationalDatabaseParameter$,
  RelationalDatabasePasswordVersion,
  RelationalDatabaseSnapshot$,
  ReleaseStaticIp$,
  ReleaseStaticIpCommand,
  ReleaseStaticIpRequest$,
  ReleaseStaticIpResult$,
  RenewalStatus,
  RenewalSummary$,
  ResetDistributionCache$,
  ResetDistributionCacheCommand,
  ResetDistributionCacheRequest$,
  ResetDistributionCacheResult$,
  ResourceBucketAccess,
  ResourceBudgetEstimate$,
  ResourceLocation$,
  ResourceReceivingAccess$,
  ResourceRecord$,
  ResourceType,
  SendContactMethodVerification$,
  SendContactMethodVerificationCommand,
  SendContactMethodVerificationRequest$,
  SendContactMethodVerificationResult$,
  ServiceException,
  ServiceException$,
  Session$,
  SetIpAddressType$,
  SetIpAddressTypeCommand,
  SetIpAddressTypeRequest$,
  SetIpAddressTypeResult$,
  SetResourceAccessForBucket$,
  SetResourceAccessForBucketCommand,
  SetResourceAccessForBucketRequest$,
  SetResourceAccessForBucketResult$,
  SetupExecutionDetails$,
  SetupHistory$,
  SetupHistoryResource$,
  SetupInstanceHttps$,
  SetupInstanceHttpsCommand,
  SetupInstanceHttpsRequest$,
  SetupInstanceHttpsResult$,
  SetupRequest$,
  SetupStatus,
  StartGUISession$,
  StartGUISessionCommand,
  StartGUISessionRequest$,
  StartGUISessionResult$,
  StartInstance$,
  StartInstanceCommand,
  StartInstanceRequest$,
  StartInstanceResult$,
  StartRelationalDatabase$,
  StartRelationalDatabaseCommand,
  StartRelationalDatabaseRequest$,
  StartRelationalDatabaseResult$,
  StaticIp$,
  Status,
  StatusType,
  StopGUISession$,
  StopGUISessionCommand,
  StopGUISessionRequest$,
  StopGUISessionResult$,
  StopInstance$,
  StopInstanceCommand,
  StopInstanceOnIdleRequest$,
  StopInstanceRequest$,
  StopInstanceResult$,
  StopRelationalDatabase$,
  StopRelationalDatabaseCommand,
  StopRelationalDatabaseRequest$,
  StopRelationalDatabaseResult$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  TestAlarm$,
  TestAlarmCommand,
  TestAlarmRequest$,
  TestAlarmResult$,
  TimePeriod$,
  TreatMissingData,
  UnauthenticatedException,
  UnauthenticatedException$,
  UnpeerVpc$,
  UnpeerVpcCommand,
  UnpeerVpcRequest$,
  UnpeerVpcResult$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdateBucket$,
  UpdateBucketBundle$,
  UpdateBucketBundleCommand,
  UpdateBucketBundleRequest$,
  UpdateBucketBundleResult$,
  UpdateBucketCommand,
  UpdateBucketRequest$,
  UpdateBucketResult$,
  UpdateContainerService$,
  UpdateContainerServiceCommand,
  UpdateContainerServiceRequest$,
  UpdateContainerServiceResult$,
  UpdateDistribution$,
  UpdateDistributionBundle$,
  UpdateDistributionBundleCommand,
  UpdateDistributionBundleRequest$,
  UpdateDistributionBundleResult$,
  UpdateDistributionCommand,
  UpdateDistributionRequest$,
  UpdateDistributionResult$,
  UpdateDomainEntry$,
  UpdateDomainEntryCommand,
  UpdateDomainEntryRequest$,
  UpdateDomainEntryResult$,
  UpdateInstanceMetadataOptions$,
  UpdateInstanceMetadataOptionsCommand,
  UpdateInstanceMetadataOptionsRequest$,
  UpdateInstanceMetadataOptionsResult$,
  UpdateLoadBalancerAttribute$,
  UpdateLoadBalancerAttributeCommand,
  UpdateLoadBalancerAttributeRequest$,
  UpdateLoadBalancerAttributeResult$,
  UpdateRelationalDatabase$,
  UpdateRelationalDatabaseCommand,
  UpdateRelationalDatabaseParameters$,
  UpdateRelationalDatabaseParametersCommand,
  UpdateRelationalDatabaseParametersRequest$,
  UpdateRelationalDatabaseParametersResult$,
  UpdateRelationalDatabaseRequest$,
  UpdateRelationalDatabaseResult$,
  ViewerMinimumTlsProtocolVersionEnum,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LightsailClient === "function");
assert(typeof Lightsail === "function");
// commands
assert(typeof AllocateStaticIpCommand === "function");
assert(typeof AllocateStaticIp$ === "object");
assert(typeof AttachCertificateToDistributionCommand === "function");
assert(typeof AttachCertificateToDistribution$ === "object");
assert(typeof AttachDiskCommand === "function");
assert(typeof AttachDisk$ === "object");
assert(typeof AttachInstancesToLoadBalancerCommand === "function");
assert(typeof AttachInstancesToLoadBalancer$ === "object");
assert(typeof AttachLoadBalancerTlsCertificateCommand === "function");
assert(typeof AttachLoadBalancerTlsCertificate$ === "object");
assert(typeof AttachStaticIpCommand === "function");
assert(typeof AttachStaticIp$ === "object");
assert(typeof CloseInstancePublicPortsCommand === "function");
assert(typeof CloseInstancePublicPorts$ === "object");
assert(typeof CopySnapshotCommand === "function");
assert(typeof CopySnapshot$ === "object");
assert(typeof CreateBucketCommand === "function");
assert(typeof CreateBucket$ === "object");
assert(typeof CreateBucketAccessKeyCommand === "function");
assert(typeof CreateBucketAccessKey$ === "object");
assert(typeof CreateCertificateCommand === "function");
assert(typeof CreateCertificate$ === "object");
assert(typeof CreateCloudFormationStackCommand === "function");
assert(typeof CreateCloudFormationStack$ === "object");
assert(typeof CreateContactMethodCommand === "function");
assert(typeof CreateContactMethod$ === "object");
assert(typeof CreateContainerServiceCommand === "function");
assert(typeof CreateContainerService$ === "object");
assert(typeof CreateContainerServiceDeploymentCommand === "function");
assert(typeof CreateContainerServiceDeployment$ === "object");
assert(typeof CreateContainerServiceRegistryLoginCommand === "function");
assert(typeof CreateContainerServiceRegistryLogin$ === "object");
assert(typeof CreateDiskCommand === "function");
assert(typeof CreateDisk$ === "object");
assert(typeof CreateDiskFromSnapshotCommand === "function");
assert(typeof CreateDiskFromSnapshot$ === "object");
assert(typeof CreateDiskSnapshotCommand === "function");
assert(typeof CreateDiskSnapshot$ === "object");
assert(typeof CreateDistributionCommand === "function");
assert(typeof CreateDistribution$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateDomainEntryCommand === "function");
assert(typeof CreateDomainEntry$ === "object");
assert(typeof CreateGUISessionAccessDetailsCommand === "function");
assert(typeof CreateGUISessionAccessDetails$ === "object");
assert(typeof CreateInstancesCommand === "function");
assert(typeof CreateInstances$ === "object");
assert(typeof CreateInstancesFromSnapshotCommand === "function");
assert(typeof CreateInstancesFromSnapshot$ === "object");
assert(typeof CreateInstanceSnapshotCommand === "function");
assert(typeof CreateInstanceSnapshot$ === "object");
assert(typeof CreateKeyPairCommand === "function");
assert(typeof CreateKeyPair$ === "object");
assert(typeof CreateLoadBalancerCommand === "function");
assert(typeof CreateLoadBalancer$ === "object");
assert(typeof CreateLoadBalancerTlsCertificateCommand === "function");
assert(typeof CreateLoadBalancerTlsCertificate$ === "object");
assert(typeof CreateRelationalDatabaseCommand === "function");
assert(typeof CreateRelationalDatabase$ === "object");
assert(typeof CreateRelationalDatabaseFromSnapshotCommand === "function");
assert(typeof CreateRelationalDatabaseFromSnapshot$ === "object");
assert(typeof CreateRelationalDatabaseSnapshotCommand === "function");
assert(typeof CreateRelationalDatabaseSnapshot$ === "object");
assert(typeof DeleteAlarmCommand === "function");
assert(typeof DeleteAlarm$ === "object");
assert(typeof DeleteAutoSnapshotCommand === "function");
assert(typeof DeleteAutoSnapshot$ === "object");
assert(typeof DeleteBucketCommand === "function");
assert(typeof DeleteBucket$ === "object");
assert(typeof DeleteBucketAccessKeyCommand === "function");
assert(typeof DeleteBucketAccessKey$ === "object");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificate$ === "object");
assert(typeof DeleteContactMethodCommand === "function");
assert(typeof DeleteContactMethod$ === "object");
assert(typeof DeleteContainerImageCommand === "function");
assert(typeof DeleteContainerImage$ === "object");
assert(typeof DeleteContainerServiceCommand === "function");
assert(typeof DeleteContainerService$ === "object");
assert(typeof DeleteDiskCommand === "function");
assert(typeof DeleteDisk$ === "object");
assert(typeof DeleteDiskSnapshotCommand === "function");
assert(typeof DeleteDiskSnapshot$ === "object");
assert(typeof DeleteDistributionCommand === "function");
assert(typeof DeleteDistribution$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteDomainEntryCommand === "function");
assert(typeof DeleteDomainEntry$ === "object");
assert(typeof DeleteInstanceCommand === "function");
assert(typeof DeleteInstance$ === "object");
assert(typeof DeleteInstanceSnapshotCommand === "function");
assert(typeof DeleteInstanceSnapshot$ === "object");
assert(typeof DeleteKeyPairCommand === "function");
assert(typeof DeleteKeyPair$ === "object");
assert(typeof DeleteKnownHostKeysCommand === "function");
assert(typeof DeleteKnownHostKeys$ === "object");
assert(typeof DeleteLoadBalancerCommand === "function");
assert(typeof DeleteLoadBalancer$ === "object");
assert(typeof DeleteLoadBalancerTlsCertificateCommand === "function");
assert(typeof DeleteLoadBalancerTlsCertificate$ === "object");
assert(typeof DeleteRelationalDatabaseCommand === "function");
assert(typeof DeleteRelationalDatabase$ === "object");
assert(typeof DeleteRelationalDatabaseSnapshotCommand === "function");
assert(typeof DeleteRelationalDatabaseSnapshot$ === "object");
assert(typeof DetachCertificateFromDistributionCommand === "function");
assert(typeof DetachCertificateFromDistribution$ === "object");
assert(typeof DetachDiskCommand === "function");
assert(typeof DetachDisk$ === "object");
assert(typeof DetachInstancesFromLoadBalancerCommand === "function");
assert(typeof DetachInstancesFromLoadBalancer$ === "object");
assert(typeof DetachStaticIpCommand === "function");
assert(typeof DetachStaticIp$ === "object");
assert(typeof DisableAddOnCommand === "function");
assert(typeof DisableAddOn$ === "object");
assert(typeof DownloadDefaultKeyPairCommand === "function");
assert(typeof DownloadDefaultKeyPair$ === "object");
assert(typeof EnableAddOnCommand === "function");
assert(typeof EnableAddOn$ === "object");
assert(typeof ExportSnapshotCommand === "function");
assert(typeof ExportSnapshot$ === "object");
assert(typeof GetActiveNamesCommand === "function");
assert(typeof GetActiveNames$ === "object");
assert(typeof GetAlarmsCommand === "function");
assert(typeof GetAlarms$ === "object");
assert(typeof GetAutoSnapshotsCommand === "function");
assert(typeof GetAutoSnapshots$ === "object");
assert(typeof GetBlueprintsCommand === "function");
assert(typeof GetBlueprints$ === "object");
assert(typeof GetBucketAccessKeysCommand === "function");
assert(typeof GetBucketAccessKeys$ === "object");
assert(typeof GetBucketBundlesCommand === "function");
assert(typeof GetBucketBundles$ === "object");
assert(typeof GetBucketMetricDataCommand === "function");
assert(typeof GetBucketMetricData$ === "object");
assert(typeof GetBucketsCommand === "function");
assert(typeof GetBuckets$ === "object");
assert(typeof GetBundlesCommand === "function");
assert(typeof GetBundles$ === "object");
assert(typeof GetCertificatesCommand === "function");
assert(typeof GetCertificates$ === "object");
assert(typeof GetCloudFormationStackRecordsCommand === "function");
assert(typeof GetCloudFormationStackRecords$ === "object");
assert(typeof GetContactMethodsCommand === "function");
assert(typeof GetContactMethods$ === "object");
assert(typeof GetContainerAPIMetadataCommand === "function");
assert(typeof GetContainerAPIMetadata$ === "object");
assert(typeof GetContainerImagesCommand === "function");
assert(typeof GetContainerImages$ === "object");
assert(typeof GetContainerLogCommand === "function");
assert(typeof GetContainerLog$ === "object");
assert(typeof GetContainerServiceDeploymentsCommand === "function");
assert(typeof GetContainerServiceDeployments$ === "object");
assert(typeof GetContainerServiceMetricDataCommand === "function");
assert(typeof GetContainerServiceMetricData$ === "object");
assert(typeof GetContainerServicePowersCommand === "function");
assert(typeof GetContainerServicePowers$ === "object");
assert(typeof GetContainerServicesCommand === "function");
assert(typeof GetContainerServices$ === "object");
assert(typeof GetCostEstimateCommand === "function");
assert(typeof GetCostEstimate$ === "object");
assert(typeof GetDiskCommand === "function");
assert(typeof GetDisk$ === "object");
assert(typeof GetDisksCommand === "function");
assert(typeof GetDisks$ === "object");
assert(typeof GetDiskSnapshotCommand === "function");
assert(typeof GetDiskSnapshot$ === "object");
assert(typeof GetDiskSnapshotsCommand === "function");
assert(typeof GetDiskSnapshots$ === "object");
assert(typeof GetDistributionBundlesCommand === "function");
assert(typeof GetDistributionBundles$ === "object");
assert(typeof GetDistributionLatestCacheResetCommand === "function");
assert(typeof GetDistributionLatestCacheReset$ === "object");
assert(typeof GetDistributionMetricDataCommand === "function");
assert(typeof GetDistributionMetricData$ === "object");
assert(typeof GetDistributionsCommand === "function");
assert(typeof GetDistributions$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetDomainsCommand === "function");
assert(typeof GetDomains$ === "object");
assert(typeof GetExportSnapshotRecordsCommand === "function");
assert(typeof GetExportSnapshotRecords$ === "object");
assert(typeof GetInstanceCommand === "function");
assert(typeof GetInstance$ === "object");
assert(typeof GetInstanceAccessDetailsCommand === "function");
assert(typeof GetInstanceAccessDetails$ === "object");
assert(typeof GetInstanceMetricDataCommand === "function");
assert(typeof GetInstanceMetricData$ === "object");
assert(typeof GetInstancePortStatesCommand === "function");
assert(typeof GetInstancePortStates$ === "object");
assert(typeof GetInstancesCommand === "function");
assert(typeof GetInstances$ === "object");
assert(typeof GetInstanceSnapshotCommand === "function");
assert(typeof GetInstanceSnapshot$ === "object");
assert(typeof GetInstanceSnapshotsCommand === "function");
assert(typeof GetInstanceSnapshots$ === "object");
assert(typeof GetInstanceStateCommand === "function");
assert(typeof GetInstanceState$ === "object");
assert(typeof GetKeyPairCommand === "function");
assert(typeof GetKeyPair$ === "object");
assert(typeof GetKeyPairsCommand === "function");
assert(typeof GetKeyPairs$ === "object");
assert(typeof GetLoadBalancerCommand === "function");
assert(typeof GetLoadBalancer$ === "object");
assert(typeof GetLoadBalancerMetricDataCommand === "function");
assert(typeof GetLoadBalancerMetricData$ === "object");
assert(typeof GetLoadBalancersCommand === "function");
assert(typeof GetLoadBalancers$ === "object");
assert(typeof GetLoadBalancerTlsCertificatesCommand === "function");
assert(typeof GetLoadBalancerTlsCertificates$ === "object");
assert(typeof GetLoadBalancerTlsPoliciesCommand === "function");
assert(typeof GetLoadBalancerTlsPolicies$ === "object");
assert(typeof GetOperationCommand === "function");
assert(typeof GetOperation$ === "object");
assert(typeof GetOperationsCommand === "function");
assert(typeof GetOperations$ === "object");
assert(typeof GetOperationsForResourceCommand === "function");
assert(typeof GetOperationsForResource$ === "object");
assert(typeof GetRegionsCommand === "function");
assert(typeof GetRegions$ === "object");
assert(typeof GetRelationalDatabaseCommand === "function");
assert(typeof GetRelationalDatabase$ === "object");
assert(typeof GetRelationalDatabaseBlueprintsCommand === "function");
assert(typeof GetRelationalDatabaseBlueprints$ === "object");
assert(typeof GetRelationalDatabaseBundlesCommand === "function");
assert(typeof GetRelationalDatabaseBundles$ === "object");
assert(typeof GetRelationalDatabaseEventsCommand === "function");
assert(typeof GetRelationalDatabaseEvents$ === "object");
assert(typeof GetRelationalDatabaseLogEventsCommand === "function");
assert(typeof GetRelationalDatabaseLogEvents$ === "object");
assert(typeof GetRelationalDatabaseLogStreamsCommand === "function");
assert(typeof GetRelationalDatabaseLogStreams$ === "object");
assert(typeof GetRelationalDatabaseMasterUserPasswordCommand === "function");
assert(typeof GetRelationalDatabaseMasterUserPassword$ === "object");
assert(typeof GetRelationalDatabaseMetricDataCommand === "function");
assert(typeof GetRelationalDatabaseMetricData$ === "object");
assert(typeof GetRelationalDatabaseParametersCommand === "function");
assert(typeof GetRelationalDatabaseParameters$ === "object");
assert(typeof GetRelationalDatabasesCommand === "function");
assert(typeof GetRelationalDatabases$ === "object");
assert(typeof GetRelationalDatabaseSnapshotCommand === "function");
assert(typeof GetRelationalDatabaseSnapshot$ === "object");
assert(typeof GetRelationalDatabaseSnapshotsCommand === "function");
assert(typeof GetRelationalDatabaseSnapshots$ === "object");
assert(typeof GetSetupHistoryCommand === "function");
assert(typeof GetSetupHistory$ === "object");
assert(typeof GetStaticIpCommand === "function");
assert(typeof GetStaticIp$ === "object");
assert(typeof GetStaticIpsCommand === "function");
assert(typeof GetStaticIps$ === "object");
assert(typeof ImportKeyPairCommand === "function");
assert(typeof ImportKeyPair$ === "object");
assert(typeof IsVpcPeeredCommand === "function");
assert(typeof IsVpcPeered$ === "object");
assert(typeof OpenInstancePublicPortsCommand === "function");
assert(typeof OpenInstancePublicPorts$ === "object");
assert(typeof PeerVpcCommand === "function");
assert(typeof PeerVpc$ === "object");
assert(typeof PutAlarmCommand === "function");
assert(typeof PutAlarm$ === "object");
assert(typeof PutInstancePublicPortsCommand === "function");
assert(typeof PutInstancePublicPorts$ === "object");
assert(typeof RebootInstanceCommand === "function");
assert(typeof RebootInstance$ === "object");
assert(typeof RebootRelationalDatabaseCommand === "function");
assert(typeof RebootRelationalDatabase$ === "object");
assert(typeof RegisterContainerImageCommand === "function");
assert(typeof RegisterContainerImage$ === "object");
assert(typeof ReleaseStaticIpCommand === "function");
assert(typeof ReleaseStaticIp$ === "object");
assert(typeof ResetDistributionCacheCommand === "function");
assert(typeof ResetDistributionCache$ === "object");
assert(typeof SendContactMethodVerificationCommand === "function");
assert(typeof SendContactMethodVerification$ === "object");
assert(typeof SetIpAddressTypeCommand === "function");
assert(typeof SetIpAddressType$ === "object");
assert(typeof SetResourceAccessForBucketCommand === "function");
assert(typeof SetResourceAccessForBucket$ === "object");
assert(typeof SetupInstanceHttpsCommand === "function");
assert(typeof SetupInstanceHttps$ === "object");
assert(typeof StartGUISessionCommand === "function");
assert(typeof StartGUISession$ === "object");
assert(typeof StartInstanceCommand === "function");
assert(typeof StartInstance$ === "object");
assert(typeof StartRelationalDatabaseCommand === "function");
assert(typeof StartRelationalDatabase$ === "object");
assert(typeof StopGUISessionCommand === "function");
assert(typeof StopGUISession$ === "object");
assert(typeof StopInstanceCommand === "function");
assert(typeof StopInstance$ === "object");
assert(typeof StopRelationalDatabaseCommand === "function");
assert(typeof StopRelationalDatabase$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestAlarmCommand === "function");
assert(typeof TestAlarm$ === "object");
assert(typeof UnpeerVpcCommand === "function");
assert(typeof UnpeerVpc$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBucketCommand === "function");
assert(typeof UpdateBucket$ === "object");
assert(typeof UpdateBucketBundleCommand === "function");
assert(typeof UpdateBucketBundle$ === "object");
assert(typeof UpdateContainerServiceCommand === "function");
assert(typeof UpdateContainerService$ === "object");
assert(typeof UpdateDistributionCommand === "function");
assert(typeof UpdateDistribution$ === "object");
assert(typeof UpdateDistributionBundleCommand === "function");
assert(typeof UpdateDistributionBundle$ === "object");
assert(typeof UpdateDomainEntryCommand === "function");
assert(typeof UpdateDomainEntry$ === "object");
assert(typeof UpdateInstanceMetadataOptionsCommand === "function");
assert(typeof UpdateInstanceMetadataOptions$ === "object");
assert(typeof UpdateLoadBalancerAttributeCommand === "function");
assert(typeof UpdateLoadBalancerAttribute$ === "object");
assert(typeof UpdateRelationalDatabaseCommand === "function");
assert(typeof UpdateRelationalDatabase$ === "object");
assert(typeof UpdateRelationalDatabaseParametersCommand === "function");
assert(typeof UpdateRelationalDatabaseParameters$ === "object");
// structural schemas
assert(typeof AccessKey$ === "object");
assert(typeof AccessKeyLastUsed$ === "object");
assert(typeof AccessRules$ === "object");
assert(typeof AccountLevelBpaSync$ === "object");
assert(typeof AddOn$ === "object");
assert(typeof AddOnRequest$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AllocateStaticIpRequest$ === "object");
assert(typeof AllocateStaticIpResult$ === "object");
assert(typeof AttachCertificateToDistributionRequest$ === "object");
assert(typeof AttachCertificateToDistributionResult$ === "object");
assert(typeof AttachDiskRequest$ === "object");
assert(typeof AttachDiskResult$ === "object");
assert(typeof AttachedDisk$ === "object");
assert(typeof AttachInstancesToLoadBalancerRequest$ === "object");
assert(typeof AttachInstancesToLoadBalancerResult$ === "object");
assert(typeof AttachLoadBalancerTlsCertificateRequest$ === "object");
assert(typeof AttachLoadBalancerTlsCertificateResult$ === "object");
assert(typeof AttachStaticIpRequest$ === "object");
assert(typeof AttachStaticIpResult$ === "object");
assert(typeof AutoSnapshotAddOnRequest$ === "object");
assert(typeof AutoSnapshotDetails$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof Blueprint$ === "object");
assert(typeof Bucket$ === "object");
assert(typeof BucketAccessLogConfig$ === "object");
assert(typeof BucketBundle$ === "object");
assert(typeof BucketCorsConfig$ === "object");
assert(typeof BucketCorsRule$ === "object");
assert(typeof BucketState$ === "object");
assert(typeof Bundle$ === "object");
assert(typeof CacheBehavior$ === "object");
assert(typeof CacheBehaviorPerPath$ === "object");
assert(typeof CacheSettings$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateSummary$ === "object");
assert(typeof CloseInstancePublicPortsRequest$ === "object");
assert(typeof CloseInstancePublicPortsResult$ === "object");
assert(typeof CloudFormationStackRecord$ === "object");
assert(typeof CloudFormationStackRecordSourceInfo$ === "object");
assert(typeof ContactMethod$ === "object");
assert(typeof Container$ === "object");
assert(typeof ContainerImage$ === "object");
assert(typeof ContainerService$ === "object");
assert(typeof ContainerServiceDeployment$ === "object");
assert(typeof ContainerServiceDeploymentRequest$ === "object");
assert(typeof ContainerServiceECRImagePullerRole$ === "object");
assert(typeof ContainerServiceECRImagePullerRoleRequest$ === "object");
assert(typeof ContainerServiceEndpoint$ === "object");
assert(typeof ContainerServiceHealthCheckConfig$ === "object");
assert(typeof ContainerServiceLogEvent$ === "object");
assert(typeof ContainerServicePower$ === "object");
assert(typeof ContainerServiceRegistryLogin$ === "object");
assert(typeof ContainerServicesListResult$ === "object");
assert(typeof ContainerServiceStateDetail$ === "object");
assert(typeof CookieObject$ === "object");
assert(typeof CopySnapshotRequest$ === "object");
assert(typeof CopySnapshotResult$ === "object");
assert(typeof CostEstimate$ === "object");
assert(typeof CreateBucketAccessKeyRequest$ === "object");
assert(typeof CreateBucketAccessKeyResult$ === "object");
assert(typeof CreateBucketRequest$ === "object");
assert(typeof CreateBucketResult$ === "object");
assert(typeof CreateCertificateRequest$ === "object");
assert(typeof CreateCertificateResult$ === "object");
assert(typeof CreateCloudFormationStackRequest$ === "object");
assert(typeof CreateCloudFormationStackResult$ === "object");
assert(typeof CreateContactMethodRequest$ === "object");
assert(typeof CreateContactMethodResult$ === "object");
assert(typeof CreateContainerServiceDeploymentRequest$ === "object");
assert(typeof CreateContainerServiceDeploymentResult$ === "object");
assert(typeof CreateContainerServiceRegistryLoginRequest$ === "object");
assert(typeof CreateContainerServiceRegistryLoginResult$ === "object");
assert(typeof CreateContainerServiceRequest$ === "object");
assert(typeof CreateContainerServiceResult$ === "object");
assert(typeof CreateDiskFromSnapshotRequest$ === "object");
assert(typeof CreateDiskFromSnapshotResult$ === "object");
assert(typeof CreateDiskRequest$ === "object");
assert(typeof CreateDiskResult$ === "object");
assert(typeof CreateDiskSnapshotRequest$ === "object");
assert(typeof CreateDiskSnapshotResult$ === "object");
assert(typeof CreateDistributionRequest$ === "object");
assert(typeof CreateDistributionResult$ === "object");
assert(typeof CreateDomainEntryRequest$ === "object");
assert(typeof CreateDomainEntryResult$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResult$ === "object");
assert(typeof CreateGUISessionAccessDetailsRequest$ === "object");
assert(typeof CreateGUISessionAccessDetailsResult$ === "object");
assert(typeof CreateInstancesFromSnapshotRequest$ === "object");
assert(typeof CreateInstancesFromSnapshotResult$ === "object");
assert(typeof CreateInstanceSnapshotRequest$ === "object");
assert(typeof CreateInstanceSnapshotResult$ === "object");
assert(typeof CreateInstancesRequest$ === "object");
assert(typeof CreateInstancesResult$ === "object");
assert(typeof CreateKeyPairRequest$ === "object");
assert(typeof CreateKeyPairResult$ === "object");
assert(typeof CreateLoadBalancerRequest$ === "object");
assert(typeof CreateLoadBalancerResult$ === "object");
assert(typeof CreateLoadBalancerTlsCertificateRequest$ === "object");
assert(typeof CreateLoadBalancerTlsCertificateResult$ === "object");
assert(typeof CreateRelationalDatabaseFromSnapshotRequest$ === "object");
assert(typeof CreateRelationalDatabaseFromSnapshotResult$ === "object");
assert(typeof CreateRelationalDatabaseRequest$ === "object");
assert(typeof CreateRelationalDatabaseResult$ === "object");
assert(typeof CreateRelationalDatabaseSnapshotRequest$ === "object");
assert(typeof CreateRelationalDatabaseSnapshotResult$ === "object");
assert(typeof DeleteAlarmRequest$ === "object");
assert(typeof DeleteAlarmResult$ === "object");
assert(typeof DeleteAutoSnapshotRequest$ === "object");
assert(typeof DeleteAutoSnapshotResult$ === "object");
assert(typeof DeleteBucketAccessKeyRequest$ === "object");
assert(typeof DeleteBucketAccessKeyResult$ === "object");
assert(typeof DeleteBucketRequest$ === "object");
assert(typeof DeleteBucketResult$ === "object");
assert(typeof DeleteCertificateRequest$ === "object");
assert(typeof DeleteCertificateResult$ === "object");
assert(typeof DeleteContactMethodRequest$ === "object");
assert(typeof DeleteContactMethodResult$ === "object");
assert(typeof DeleteContainerImageRequest$ === "object");
assert(typeof DeleteContainerImageResult$ === "object");
assert(typeof DeleteContainerServiceRequest$ === "object");
assert(typeof DeleteContainerServiceResult$ === "object");
assert(typeof DeleteDiskRequest$ === "object");
assert(typeof DeleteDiskResult$ === "object");
assert(typeof DeleteDiskSnapshotRequest$ === "object");
assert(typeof DeleteDiskSnapshotResult$ === "object");
assert(typeof DeleteDistributionRequest$ === "object");
assert(typeof DeleteDistributionResult$ === "object");
assert(typeof DeleteDomainEntryRequest$ === "object");
assert(typeof DeleteDomainEntryResult$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResult$ === "object");
assert(typeof DeleteInstanceRequest$ === "object");
assert(typeof DeleteInstanceResult$ === "object");
assert(typeof DeleteInstanceSnapshotRequest$ === "object");
assert(typeof DeleteInstanceSnapshotResult$ === "object");
assert(typeof DeleteKeyPairRequest$ === "object");
assert(typeof DeleteKeyPairResult$ === "object");
assert(typeof DeleteKnownHostKeysRequest$ === "object");
assert(typeof DeleteKnownHostKeysResult$ === "object");
assert(typeof DeleteLoadBalancerRequest$ === "object");
assert(typeof DeleteLoadBalancerResult$ === "object");
assert(typeof DeleteLoadBalancerTlsCertificateRequest$ === "object");
assert(typeof DeleteLoadBalancerTlsCertificateResult$ === "object");
assert(typeof DeleteRelationalDatabaseRequest$ === "object");
assert(typeof DeleteRelationalDatabaseResult$ === "object");
assert(typeof DeleteRelationalDatabaseSnapshotRequest$ === "object");
assert(typeof DeleteRelationalDatabaseSnapshotResult$ === "object");
assert(typeof DestinationInfo$ === "object");
assert(typeof DetachCertificateFromDistributionRequest$ === "object");
assert(typeof DetachCertificateFromDistributionResult$ === "object");
assert(typeof DetachDiskRequest$ === "object");
assert(typeof DetachDiskResult$ === "object");
assert(typeof DetachInstancesFromLoadBalancerRequest$ === "object");
assert(typeof DetachInstancesFromLoadBalancerResult$ === "object");
assert(typeof DetachStaticIpRequest$ === "object");
assert(typeof DetachStaticIpResult$ === "object");
assert(typeof DisableAddOnRequest$ === "object");
assert(typeof DisableAddOnResult$ === "object");
assert(typeof Disk$ === "object");
assert(typeof DiskInfo$ === "object");
assert(typeof DiskMap$ === "object");
assert(typeof DiskSnapshot$ === "object");
assert(typeof DiskSnapshotInfo$ === "object");
assert(typeof DistributionBundle$ === "object");
assert(typeof DnsRecordCreationState$ === "object");
assert(typeof Domain$ === "object");
assert(typeof DomainEntry$ === "object");
assert(typeof DomainValidationRecord$ === "object");
assert(typeof DownloadDefaultKeyPairRequest$ === "object");
assert(typeof DownloadDefaultKeyPairResult$ === "object");
assert(typeof EnableAddOnRequest$ === "object");
assert(typeof EnableAddOnResult$ === "object");
assert(typeof EndpointRequest$ === "object");
assert(typeof EstimateByTime$ === "object");
assert(typeof ExportSnapshotRecord$ === "object");
assert(typeof ExportSnapshotRecordSourceInfo$ === "object");
assert(typeof ExportSnapshotRequest$ === "object");
assert(typeof ExportSnapshotResult$ === "object");
assert(typeof GetActiveNamesRequest$ === "object");
assert(typeof GetActiveNamesResult$ === "object");
assert(typeof GetAlarmsRequest$ === "object");
assert(typeof GetAlarmsResult$ === "object");
assert(typeof GetAutoSnapshotsRequest$ === "object");
assert(typeof GetAutoSnapshotsResult$ === "object");
assert(typeof GetBlueprintsRequest$ === "object");
assert(typeof GetBlueprintsResult$ === "object");
assert(typeof GetBucketAccessKeysRequest$ === "object");
assert(typeof GetBucketAccessKeysResult$ === "object");
assert(typeof GetBucketBundlesRequest$ === "object");
assert(typeof GetBucketBundlesResult$ === "object");
assert(typeof GetBucketMetricDataRequest$ === "object");
assert(typeof GetBucketMetricDataResult$ === "object");
assert(typeof GetBucketsRequest$ === "object");
assert(typeof GetBucketsResult$ === "object");
assert(typeof GetBundlesRequest$ === "object");
assert(typeof GetBundlesResult$ === "object");
assert(typeof GetCertificatesRequest$ === "object");
assert(typeof GetCertificatesResult$ === "object");
assert(typeof GetCloudFormationStackRecordsRequest$ === "object");
assert(typeof GetCloudFormationStackRecordsResult$ === "object");
assert(typeof GetContactMethodsRequest$ === "object");
assert(typeof GetContactMethodsResult$ === "object");
assert(typeof GetContainerAPIMetadataRequest$ === "object");
assert(typeof GetContainerAPIMetadataResult$ === "object");
assert(typeof GetContainerImagesRequest$ === "object");
assert(typeof GetContainerImagesResult$ === "object");
assert(typeof GetContainerLogRequest$ === "object");
assert(typeof GetContainerLogResult$ === "object");
assert(typeof GetContainerServiceDeploymentsRequest$ === "object");
assert(typeof GetContainerServiceDeploymentsResult$ === "object");
assert(typeof GetContainerServiceMetricDataRequest$ === "object");
assert(typeof GetContainerServiceMetricDataResult$ === "object");
assert(typeof GetContainerServicePowersRequest$ === "object");
assert(typeof GetContainerServicePowersResult$ === "object");
assert(typeof GetContainerServicesRequest$ === "object");
assert(typeof GetCostEstimateRequest$ === "object");
assert(typeof GetCostEstimateResult$ === "object");
assert(typeof GetDiskRequest$ === "object");
assert(typeof GetDiskResult$ === "object");
assert(typeof GetDiskSnapshotRequest$ === "object");
assert(typeof GetDiskSnapshotResult$ === "object");
assert(typeof GetDiskSnapshotsRequest$ === "object");
assert(typeof GetDiskSnapshotsResult$ === "object");
assert(typeof GetDisksRequest$ === "object");
assert(typeof GetDisksResult$ === "object");
assert(typeof GetDistributionBundlesRequest$ === "object");
assert(typeof GetDistributionBundlesResult$ === "object");
assert(typeof GetDistributionLatestCacheResetRequest$ === "object");
assert(typeof GetDistributionLatestCacheResetResult$ === "object");
assert(typeof GetDistributionMetricDataRequest$ === "object");
assert(typeof GetDistributionMetricDataResult$ === "object");
assert(typeof GetDistributionsRequest$ === "object");
assert(typeof GetDistributionsResult$ === "object");
assert(typeof GetDomainRequest$ === "object");
assert(typeof GetDomainResult$ === "object");
assert(typeof GetDomainsRequest$ === "object");
assert(typeof GetDomainsResult$ === "object");
assert(typeof GetExportSnapshotRecordsRequest$ === "object");
assert(typeof GetExportSnapshotRecordsResult$ === "object");
assert(typeof GetInstanceAccessDetailsRequest$ === "object");
assert(typeof GetInstanceAccessDetailsResult$ === "object");
assert(typeof GetInstanceMetricDataRequest$ === "object");
assert(typeof GetInstanceMetricDataResult$ === "object");
assert(typeof GetInstancePortStatesRequest$ === "object");
assert(typeof GetInstancePortStatesResult$ === "object");
assert(typeof GetInstanceRequest$ === "object");
assert(typeof GetInstanceResult$ === "object");
assert(typeof GetInstanceSnapshotRequest$ === "object");
assert(typeof GetInstanceSnapshotResult$ === "object");
assert(typeof GetInstanceSnapshotsRequest$ === "object");
assert(typeof GetInstanceSnapshotsResult$ === "object");
assert(typeof GetInstancesRequest$ === "object");
assert(typeof GetInstancesResult$ === "object");
assert(typeof GetInstanceStateRequest$ === "object");
assert(typeof GetInstanceStateResult$ === "object");
assert(typeof GetKeyPairRequest$ === "object");
assert(typeof GetKeyPairResult$ === "object");
assert(typeof GetKeyPairsRequest$ === "object");
assert(typeof GetKeyPairsResult$ === "object");
assert(typeof GetLoadBalancerMetricDataRequest$ === "object");
assert(typeof GetLoadBalancerMetricDataResult$ === "object");
assert(typeof GetLoadBalancerRequest$ === "object");
assert(typeof GetLoadBalancerResult$ === "object");
assert(typeof GetLoadBalancersRequest$ === "object");
assert(typeof GetLoadBalancersResult$ === "object");
assert(typeof GetLoadBalancerTlsCertificatesRequest$ === "object");
assert(typeof GetLoadBalancerTlsCertificatesResult$ === "object");
assert(typeof GetLoadBalancerTlsPoliciesRequest$ === "object");
assert(typeof GetLoadBalancerTlsPoliciesResult$ === "object");
assert(typeof GetOperationRequest$ === "object");
assert(typeof GetOperationResult$ === "object");
assert(typeof GetOperationsForResourceRequest$ === "object");
assert(typeof GetOperationsForResourceResult$ === "object");
assert(typeof GetOperationsRequest$ === "object");
assert(typeof GetOperationsResult$ === "object");
assert(typeof GetRegionsRequest$ === "object");
assert(typeof GetRegionsResult$ === "object");
assert(typeof GetRelationalDatabaseBlueprintsRequest$ === "object");
assert(typeof GetRelationalDatabaseBlueprintsResult$ === "object");
assert(typeof GetRelationalDatabaseBundlesRequest$ === "object");
assert(typeof GetRelationalDatabaseBundlesResult$ === "object");
assert(typeof GetRelationalDatabaseEventsRequest$ === "object");
assert(typeof GetRelationalDatabaseEventsResult$ === "object");
assert(typeof GetRelationalDatabaseLogEventsRequest$ === "object");
assert(typeof GetRelationalDatabaseLogEventsResult$ === "object");
assert(typeof GetRelationalDatabaseLogStreamsRequest$ === "object");
assert(typeof GetRelationalDatabaseLogStreamsResult$ === "object");
assert(typeof GetRelationalDatabaseMasterUserPasswordRequest$ === "object");
assert(typeof GetRelationalDatabaseMasterUserPasswordResult$ === "object");
assert(typeof GetRelationalDatabaseMetricDataRequest$ === "object");
assert(typeof GetRelationalDatabaseMetricDataResult$ === "object");
assert(typeof GetRelationalDatabaseParametersRequest$ === "object");
assert(typeof GetRelationalDatabaseParametersResult$ === "object");
assert(typeof GetRelationalDatabaseRequest$ === "object");
assert(typeof GetRelationalDatabaseResult$ === "object");
assert(typeof GetRelationalDatabaseSnapshotRequest$ === "object");
assert(typeof GetRelationalDatabaseSnapshotResult$ === "object");
assert(typeof GetRelationalDatabaseSnapshotsRequest$ === "object");
assert(typeof GetRelationalDatabaseSnapshotsResult$ === "object");
assert(typeof GetRelationalDatabasesRequest$ === "object");
assert(typeof GetRelationalDatabasesResult$ === "object");
assert(typeof GetSetupHistoryRequest$ === "object");
assert(typeof GetSetupHistoryResult$ === "object");
assert(typeof GetStaticIpRequest$ === "object");
assert(typeof GetStaticIpResult$ === "object");
assert(typeof GetStaticIpsRequest$ === "object");
assert(typeof GetStaticIpsResult$ === "object");
assert(typeof HeaderObject$ === "object");
assert(typeof HostKeyAttributes$ === "object");
assert(typeof ImportKeyPairRequest$ === "object");
assert(typeof ImportKeyPairResult$ === "object");
assert(typeof InputOrigin$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceAccessDetails$ === "object");
assert(typeof InstanceEntry$ === "object");
assert(typeof InstanceHardware$ === "object");
assert(typeof InstanceHealthSummary$ === "object");
assert(typeof InstanceMetadataOptions$ === "object");
assert(typeof InstanceNetworking$ === "object");
assert(typeof InstancePortInfo$ === "object");
assert(typeof InstancePortState$ === "object");
assert(typeof InstanceSnapshot$ === "object");
assert(typeof InstanceSnapshotInfo$ === "object");
assert(typeof InstanceState$ === "object");
assert(typeof IsVpcPeeredRequest$ === "object");
assert(typeof IsVpcPeeredResult$ === "object");
assert(typeof KeyPair$ === "object");
assert(typeof LightsailDistribution$ === "object");
assert(typeof LoadBalancer$ === "object");
assert(typeof LoadBalancerTlsCertificate$ === "object");
assert(typeof LoadBalancerTlsCertificateDnsRecordCreationState$ === "object");
assert(typeof LoadBalancerTlsCertificateDomainValidationOption$ === "object");
assert(typeof LoadBalancerTlsCertificateDomainValidationRecord$ === "object");
assert(typeof LoadBalancerTlsCertificateRenewalSummary$ === "object");
assert(typeof LoadBalancerTlsCertificateSummary$ === "object");
assert(typeof LoadBalancerTlsPolicy$ === "object");
assert(typeof LogEvent$ === "object");
assert(typeof MetricDatapoint$ === "object");
assert(typeof MonitoredResourceInfo$ === "object");
assert(typeof MonthlyTransfer$ === "object");
assert(typeof NameServersUpdateState$ === "object");
assert(typeof OpenInstancePublicPortsRequest$ === "object");
assert(typeof OpenInstancePublicPortsResult$ === "object");
assert(typeof Operation$ === "object");
assert(typeof Origin$ === "object");
assert(typeof PasswordData$ === "object");
assert(typeof PeerVpcRequest$ === "object");
assert(typeof PeerVpcResult$ === "object");
assert(typeof PendingMaintenanceAction$ === "object");
assert(typeof PendingModifiedRelationalDatabaseValues$ === "object");
assert(typeof PortInfo$ === "object");
assert(typeof PrivateRegistryAccess$ === "object");
assert(typeof PrivateRegistryAccessRequest$ === "object");
assert(typeof PutAlarmRequest$ === "object");
assert(typeof PutAlarmResult$ === "object");
assert(typeof PutInstancePublicPortsRequest$ === "object");
assert(typeof PutInstancePublicPortsResult$ === "object");
assert(typeof QueryStringObject$ === "object");
assert(typeof R53HostedZoneDeletionState$ === "object");
assert(typeof RebootInstanceRequest$ === "object");
assert(typeof RebootInstanceResult$ === "object");
assert(typeof RebootRelationalDatabaseRequest$ === "object");
assert(typeof RebootRelationalDatabaseResult$ === "object");
assert(typeof Region$ === "object");
assert(typeof RegisterContainerImageRequest$ === "object");
assert(typeof RegisterContainerImageResult$ === "object");
assert(typeof RegisteredDomainDelegationInfo$ === "object");
assert(typeof RelationalDatabase$ === "object");
assert(typeof RelationalDatabaseBlueprint$ === "object");
assert(typeof RelationalDatabaseBundle$ === "object");
assert(typeof RelationalDatabaseEndpoint$ === "object");
assert(typeof RelationalDatabaseEvent$ === "object");
assert(typeof RelationalDatabaseHardware$ === "object");
assert(typeof RelationalDatabaseParameter$ === "object");
assert(typeof RelationalDatabaseSnapshot$ === "object");
assert(typeof ReleaseStaticIpRequest$ === "object");
assert(typeof ReleaseStaticIpResult$ === "object");
assert(typeof RenewalSummary$ === "object");
assert(typeof ResetDistributionCacheRequest$ === "object");
assert(typeof ResetDistributionCacheResult$ === "object");
assert(typeof ResourceBudgetEstimate$ === "object");
assert(typeof ResourceLocation$ === "object");
assert(typeof ResourceReceivingAccess$ === "object");
assert(typeof ResourceRecord$ === "object");
assert(typeof SendContactMethodVerificationRequest$ === "object");
assert(typeof SendContactMethodVerificationResult$ === "object");
assert(typeof Session$ === "object");
assert(typeof SetIpAddressTypeRequest$ === "object");
assert(typeof SetIpAddressTypeResult$ === "object");
assert(typeof SetResourceAccessForBucketRequest$ === "object");
assert(typeof SetResourceAccessForBucketResult$ === "object");
assert(typeof SetupExecutionDetails$ === "object");
assert(typeof SetupHistory$ === "object");
assert(typeof SetupHistoryResource$ === "object");
assert(typeof SetupInstanceHttpsRequest$ === "object");
assert(typeof SetupInstanceHttpsResult$ === "object");
assert(typeof SetupRequest$ === "object");
assert(typeof StartGUISessionRequest$ === "object");
assert(typeof StartGUISessionResult$ === "object");
assert(typeof StartInstanceRequest$ === "object");
assert(typeof StartInstanceResult$ === "object");
assert(typeof StartRelationalDatabaseRequest$ === "object");
assert(typeof StartRelationalDatabaseResult$ === "object");
assert(typeof StaticIp$ === "object");
assert(typeof StopGUISessionRequest$ === "object");
assert(typeof StopGUISessionResult$ === "object");
assert(typeof StopInstanceOnIdleRequest$ === "object");
assert(typeof StopInstanceRequest$ === "object");
assert(typeof StopInstanceResult$ === "object");
assert(typeof StopRelationalDatabaseRequest$ === "object");
assert(typeof StopRelationalDatabaseResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof TestAlarmRequest$ === "object");
assert(typeof TestAlarmResult$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof UnpeerVpcRequest$ === "object");
assert(typeof UnpeerVpcResult$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdateBucketBundleRequest$ === "object");
assert(typeof UpdateBucketBundleResult$ === "object");
assert(typeof UpdateBucketRequest$ === "object");
assert(typeof UpdateBucketResult$ === "object");
assert(typeof UpdateContainerServiceRequest$ === "object");
assert(typeof UpdateContainerServiceResult$ === "object");
assert(typeof UpdateDistributionBundleRequest$ === "object");
assert(typeof UpdateDistributionBundleResult$ === "object");
assert(typeof UpdateDistributionRequest$ === "object");
assert(typeof UpdateDistributionResult$ === "object");
assert(typeof UpdateDomainEntryRequest$ === "object");
assert(typeof UpdateDomainEntryResult$ === "object");
assert(typeof UpdateInstanceMetadataOptionsRequest$ === "object");
assert(typeof UpdateInstanceMetadataOptionsResult$ === "object");
assert(typeof UpdateLoadBalancerAttributeRequest$ === "object");
assert(typeof UpdateLoadBalancerAttributeResult$ === "object");
assert(typeof UpdateRelationalDatabaseParametersRequest$ === "object");
assert(typeof UpdateRelationalDatabaseParametersResult$ === "object");
assert(typeof UpdateRelationalDatabaseRequest$ === "object");
assert(typeof UpdateRelationalDatabaseResult$ === "object");
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
assert(AccessDeniedException.prototype instanceof LightsailServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AccountSetupInProgressException.prototype instanceof LightsailServiceException);
assert(typeof AccountSetupInProgressException$ === "object");
assert(InvalidInputException.prototype instanceof LightsailServiceException);
assert(typeof InvalidInputException$ === "object");
assert(NotFoundException.prototype instanceof LightsailServiceException);
assert(typeof NotFoundException$ === "object");
assert(OperationFailureException.prototype instanceof LightsailServiceException);
assert(typeof OperationFailureException$ === "object");
assert(RegionSetupInProgressException.prototype instanceof LightsailServiceException);
assert(typeof RegionSetupInProgressException$ === "object");
assert(ServiceException.prototype instanceof LightsailServiceException);
assert(typeof ServiceException$ === "object");
assert(UnauthenticatedException.prototype instanceof LightsailServiceException);
assert(typeof UnauthenticatedException$ === "object");
assert(LightsailServiceException.prototype instanceof Error);
console.log(`Lightsail index test passed.`);

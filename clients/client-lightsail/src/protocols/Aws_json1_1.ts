// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput } from "../commands/AllocateStaticIpCommand";
import {
  AttachCertificateToDistributionCommandInput,
  AttachCertificateToDistributionCommandOutput,
} from "../commands/AttachCertificateToDistributionCommand";
import { AttachDiskCommandInput, AttachDiskCommandOutput } from "../commands/AttachDiskCommand";
import {
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
} from "../commands/AttachInstancesToLoadBalancerCommand";
import {
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput,
} from "../commands/AttachLoadBalancerTlsCertificateCommand";
import { AttachStaticIpCommandInput, AttachStaticIpCommandOutput } from "../commands/AttachStaticIpCommand";
import {
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput,
} from "../commands/CloseInstancePublicPortsCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "../commands/CopySnapshotCommand";
import {
  CreateBucketAccessKeyCommandInput,
  CreateBucketAccessKeyCommandOutput,
} from "../commands/CreateBucketAccessKeyCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import { CreateCertificateCommandInput, CreateCertificateCommandOutput } from "../commands/CreateCertificateCommand";
import {
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
} from "../commands/CreateCloudFormationStackCommand";
import {
  CreateContactMethodCommandInput,
  CreateContactMethodCommandOutput,
} from "../commands/CreateContactMethodCommand";
import {
  CreateContainerServiceCommandInput,
  CreateContainerServiceCommandOutput,
} from "../commands/CreateContainerServiceCommand";
import {
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
} from "../commands/CreateContainerServiceDeploymentCommand";
import {
  CreateContainerServiceRegistryLoginCommandInput,
  CreateContainerServiceRegistryLoginCommandOutput,
} from "../commands/CreateContainerServiceRegistryLoginCommand";
import { CreateDiskCommandInput, CreateDiskCommandOutput } from "../commands/CreateDiskCommand";
import {
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
} from "../commands/CreateDiskFromSnapshotCommand";
import { CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput } from "../commands/CreateDiskSnapshotCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "../commands/CreateDistributionCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput } from "../commands/CreateDomainEntryCommand";
import {
  CreateGUISessionAccessDetailsCommandInput,
  CreateGUISessionAccessDetailsCommandOutput,
} from "../commands/CreateGUISessionAccessDetailsCommand";
import { CreateInstancesCommandInput, CreateInstancesCommandOutput } from "../commands/CreateInstancesCommand";
import {
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput,
} from "../commands/CreateInstancesFromSnapshotCommand";
import {
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput,
} from "../commands/CreateInstanceSnapshotCommand";
import { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "../commands/CreateKeyPairCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "../commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
} from "../commands/CreateLoadBalancerTlsCertificateCommand";
import {
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput,
} from "../commands/CreateRelationalDatabaseCommand";
import {
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
} from "../commands/CreateRelationalDatabaseFromSnapshotCommand";
import {
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput,
} from "../commands/CreateRelationalDatabaseSnapshotCommand";
import { DeleteAlarmCommandInput, DeleteAlarmCommandOutput } from "../commands/DeleteAlarmCommand";
import { DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput } from "../commands/DeleteAutoSnapshotCommand";
import {
  DeleteBucketAccessKeyCommandInput,
  DeleteBucketAccessKeyCommandOutput,
} from "../commands/DeleteBucketAccessKeyCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "../commands/DeleteBucketCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand";
import {
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
} from "../commands/DeleteContactMethodCommand";
import {
  DeleteContainerImageCommandInput,
  DeleteContainerImageCommandOutput,
} from "../commands/DeleteContainerImageCommand";
import {
  DeleteContainerServiceCommandInput,
  DeleteContainerServiceCommandOutput,
} from "../commands/DeleteContainerServiceCommand";
import { DeleteDiskCommandInput, DeleteDiskCommandOutput } from "../commands/DeleteDiskCommand";
import { DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput } from "../commands/DeleteDiskSnapshotCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "../commands/DeleteDistributionCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput } from "../commands/DeleteDomainEntryCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand";
import {
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
} from "../commands/DeleteInstanceSnapshotCommand";
import { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "../commands/DeleteKeyPairCommand";
import {
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
} from "../commands/DeleteKnownHostKeysCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "../commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput,
} from "../commands/DeleteLoadBalancerTlsCertificateCommand";
import {
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput,
} from "../commands/DeleteRelationalDatabaseCommand";
import {
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput,
} from "../commands/DeleteRelationalDatabaseSnapshotCommand";
import {
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
} from "../commands/DetachCertificateFromDistributionCommand";
import { DetachDiskCommandInput, DetachDiskCommandOutput } from "../commands/DetachDiskCommand";
import {
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput,
} from "../commands/DetachInstancesFromLoadBalancerCommand";
import { DetachStaticIpCommandInput, DetachStaticIpCommandOutput } from "../commands/DetachStaticIpCommand";
import { DisableAddOnCommandInput, DisableAddOnCommandOutput } from "../commands/DisableAddOnCommand";
import {
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
} from "../commands/DownloadDefaultKeyPairCommand";
import { EnableAddOnCommandInput, EnableAddOnCommandOutput } from "../commands/EnableAddOnCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "../commands/ExportSnapshotCommand";
import { GetActiveNamesCommandInput, GetActiveNamesCommandOutput } from "../commands/GetActiveNamesCommand";
import { GetAlarmsCommandInput, GetAlarmsCommandOutput } from "../commands/GetAlarmsCommand";
import { GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput } from "../commands/GetAutoSnapshotsCommand";
import { GetBlueprintsCommandInput, GetBlueprintsCommandOutput } from "../commands/GetBlueprintsCommand";
import {
  GetBucketAccessKeysCommandInput,
  GetBucketAccessKeysCommandOutput,
} from "../commands/GetBucketAccessKeysCommand";
import { GetBucketBundlesCommandInput, GetBucketBundlesCommandOutput } from "../commands/GetBucketBundlesCommand";
import {
  GetBucketMetricDataCommandInput,
  GetBucketMetricDataCommandOutput,
} from "../commands/GetBucketMetricDataCommand";
import { GetBucketsCommandInput, GetBucketsCommandOutput } from "../commands/GetBucketsCommand";
import { GetBundlesCommandInput, GetBundlesCommandOutput } from "../commands/GetBundlesCommand";
import { GetCertificatesCommandInput, GetCertificatesCommandOutput } from "../commands/GetCertificatesCommand";
import {
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
} from "../commands/GetCloudFormationStackRecordsCommand";
import { GetContactMethodsCommandInput, GetContactMethodsCommandOutput } from "../commands/GetContactMethodsCommand";
import {
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
} from "../commands/GetContainerAPIMetadataCommand";
import { GetContainerImagesCommandInput, GetContainerImagesCommandOutput } from "../commands/GetContainerImagesCommand";
import { GetContainerLogCommandInput, GetContainerLogCommandOutput } from "../commands/GetContainerLogCommand";
import {
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
} from "../commands/GetContainerServiceDeploymentsCommand";
import {
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
} from "../commands/GetContainerServiceMetricDataCommand";
import {
  GetContainerServicePowersCommandInput,
  GetContainerServicePowersCommandOutput,
} from "../commands/GetContainerServicePowersCommand";
import {
  GetContainerServicesCommandInput,
  GetContainerServicesCommandOutput,
} from "../commands/GetContainerServicesCommand";
import { GetCostEstimateCommandInput, GetCostEstimateCommandOutput } from "../commands/GetCostEstimateCommand";
import { GetDiskCommandInput, GetDiskCommandOutput } from "../commands/GetDiskCommand";
import { GetDisksCommandInput, GetDisksCommandOutput } from "../commands/GetDisksCommand";
import { GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput } from "../commands/GetDiskSnapshotCommand";
import { GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput } from "../commands/GetDiskSnapshotsCommand";
import {
  GetDistributionBundlesCommandInput,
  GetDistributionBundlesCommandOutput,
} from "../commands/GetDistributionBundlesCommand";
import {
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
} from "../commands/GetDistributionLatestCacheResetCommand";
import {
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
} from "../commands/GetDistributionMetricDataCommand";
import { GetDistributionsCommandInput, GetDistributionsCommandOutput } from "../commands/GetDistributionsCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import { GetDomainsCommandInput, GetDomainsCommandOutput } from "../commands/GetDomainsCommand";
import {
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
} from "../commands/GetExportSnapshotRecordsCommand";
import {
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput,
} from "../commands/GetInstanceAccessDetailsCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "../commands/GetInstanceCommand";
import {
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
} from "../commands/GetInstanceMetricDataCommand";
import {
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
} from "../commands/GetInstancePortStatesCommand";
import { GetInstancesCommandInput, GetInstancesCommandOutput } from "../commands/GetInstancesCommand";
import {
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput,
} from "../commands/GetInstanceSnapshotCommand";
import {
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput,
} from "../commands/GetInstanceSnapshotsCommand";
import { GetInstanceStateCommandInput, GetInstanceStateCommandOutput } from "../commands/GetInstanceStateCommand";
import { GetKeyPairCommandInput, GetKeyPairCommandOutput } from "../commands/GetKeyPairCommand";
import { GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "../commands/GetKeyPairsCommand";
import { GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput } from "../commands/GetLoadBalancerCommand";
import {
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput,
} from "../commands/GetLoadBalancerMetricDataCommand";
import { GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput } from "../commands/GetLoadBalancersCommand";
import {
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
} from "../commands/GetLoadBalancerTlsCertificatesCommand";
import {
  GetLoadBalancerTlsPoliciesCommandInput,
  GetLoadBalancerTlsPoliciesCommandOutput,
} from "../commands/GetLoadBalancerTlsPoliciesCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "../commands/GetOperationCommand";
import { GetOperationsCommandInput, GetOperationsCommandOutput } from "../commands/GetOperationsCommand";
import {
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput,
} from "../commands/GetOperationsForResourceCommand";
import { GetRegionsCommandInput, GetRegionsCommandOutput } from "../commands/GetRegionsCommand";
import {
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput,
} from "../commands/GetRelationalDatabaseBlueprintsCommand";
import {
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput,
} from "../commands/GetRelationalDatabaseBundlesCommand";
import {
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput,
} from "../commands/GetRelationalDatabaseCommand";
import {
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
} from "../commands/GetRelationalDatabaseEventsCommand";
import {
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput,
} from "../commands/GetRelationalDatabaseLogEventsCommand";
import {
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput,
} from "../commands/GetRelationalDatabaseLogStreamsCommand";
import {
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
} from "../commands/GetRelationalDatabaseMasterUserPasswordCommand";
import {
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput,
} from "../commands/GetRelationalDatabaseMetricDataCommand";
import {
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput,
} from "../commands/GetRelationalDatabaseParametersCommand";
import {
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
} from "../commands/GetRelationalDatabasesCommand";
import {
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput,
} from "../commands/GetRelationalDatabaseSnapshotCommand";
import {
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput,
} from "../commands/GetRelationalDatabaseSnapshotsCommand";
import { GetStaticIpCommandInput, GetStaticIpCommandOutput } from "../commands/GetStaticIpCommand";
import { GetStaticIpsCommandInput, GetStaticIpsCommandOutput } from "../commands/GetStaticIpsCommand";
import { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "../commands/ImportKeyPairCommand";
import { IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "../commands/IsVpcPeeredCommand";
import {
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput,
} from "../commands/OpenInstancePublicPortsCommand";
import { PeerVpcCommandInput, PeerVpcCommandOutput } from "../commands/PeerVpcCommand";
import { PutAlarmCommandInput, PutAlarmCommandOutput } from "../commands/PutAlarmCommand";
import {
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
} from "../commands/PutInstancePublicPortsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "../commands/RebootInstanceCommand";
import {
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput,
} from "../commands/RebootRelationalDatabaseCommand";
import {
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
} from "../commands/RegisterContainerImageCommand";
import { ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput } from "../commands/ReleaseStaticIpCommand";
import {
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
} from "../commands/ResetDistributionCacheCommand";
import {
  SendContactMethodVerificationCommandInput,
  SendContactMethodVerificationCommandOutput,
} from "../commands/SendContactMethodVerificationCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "../commands/SetIpAddressTypeCommand";
import {
  SetResourceAccessForBucketCommandInput,
  SetResourceAccessForBucketCommandOutput,
} from "../commands/SetResourceAccessForBucketCommand";
import { StartGUISessionCommandInput, StartGUISessionCommandOutput } from "../commands/StartGUISessionCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "../commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
} from "../commands/StartRelationalDatabaseCommand";
import { StopGUISessionCommandInput, StopGUISessionCommandOutput } from "../commands/StopGUISessionCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "../commands/StopInstanceCommand";
import {
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput,
} from "../commands/StopRelationalDatabaseCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestAlarmCommandInput, TestAlarmCommandOutput } from "../commands/TestAlarmCommand";
import { UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "../commands/UnpeerVpcCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBucketBundleCommandInput, UpdateBucketBundleCommandOutput } from "../commands/UpdateBucketBundleCommand";
import { UpdateBucketCommandInput, UpdateBucketCommandOutput } from "../commands/UpdateBucketCommand";
import {
  UpdateContainerServiceCommandInput,
  UpdateContainerServiceCommandOutput,
} from "../commands/UpdateContainerServiceCommand";
import {
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
} from "../commands/UpdateDistributionBundleCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "../commands/UpdateDistributionCommand";
import { UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput } from "../commands/UpdateDomainEntryCommand";
import {
  UpdateInstanceMetadataOptionsCommandInput,
  UpdateInstanceMetadataOptionsCommandOutput,
} from "../commands/UpdateInstanceMetadataOptionsCommand";
import {
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
} from "../commands/UpdateLoadBalancerAttributeCommand";
import {
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput,
} from "../commands/UpdateRelationalDatabaseCommand";
import {
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
} from "../commands/UpdateRelationalDatabaseParametersCommand";
import { LightsailServiceException as __BaseException } from "../models/LightsailServiceException";
import {
  AccessDeniedException,
  AccessKey,
  AccessKeyLastUsed,
  AccessRules,
  AccountLevelBpaSync,
  AccountSetupInProgressException,
  AddOn,
  AddOnRequest,
  Alarm,
  AlarmState,
  AllocateStaticIpRequest,
  AllocateStaticIpResult,
  AppCategory,
  AttachCertificateToDistributionRequest,
  AttachCertificateToDistributionResult,
  AttachDiskRequest,
  AttachDiskResult,
  AttachedDisk,
  AttachInstancesToLoadBalancerRequest,
  AttachInstancesToLoadBalancerResult,
  AttachLoadBalancerTlsCertificateRequest,
  AttachLoadBalancerTlsCertificateResult,
  AttachStaticIpRequest,
  AttachStaticIpResult,
  AutoSnapshotAddOnRequest,
  AutoSnapshotDetails,
  AvailabilityZone,
  Blueprint,
  Bucket,
  BucketAccessLogConfig,
  BucketBundle,
  BucketState,
  Bundle,
  CacheBehavior,
  CacheBehaviorPerPath,
  CacheSettings,
  Certificate,
  CertificateStatus,
  CertificateSummary,
  CloseInstancePublicPortsRequest,
  CloseInstancePublicPortsResult,
  CloudFormationStackRecord,
  CloudFormationStackRecordSourceInfo,
  ContactMethod,
  ContactProtocol,
  Container,
  ContainerImage,
  ContainerService,
  ContainerServiceDeployment,
  ContainerServiceDeploymentRequest,
  ContainerServiceECRImagePullerRole,
  ContainerServiceECRImagePullerRoleRequest,
  ContainerServiceEndpoint,
  ContainerServiceHealthCheckConfig,
  ContainerServiceLogEvent,
  ContainerServicePower,
  ContainerServiceProtocol,
  ContainerServiceRegistryLogin,
  ContainerServicesListResult,
  ContainerServiceStateDetail,
  CookieObject,
  CopySnapshotRequest,
  CopySnapshotResult,
  CostEstimate,
  CreateBucketAccessKeyRequest,
  CreateBucketAccessKeyResult,
  CreateBucketRequest,
  CreateBucketResult,
  CreateCertificateRequest,
  CreateCertificateResult,
  CreateCloudFormationStackRequest,
  CreateCloudFormationStackResult,
  CreateContactMethodRequest,
  CreateContactMethodResult,
  CreateContainerServiceDeploymentRequest,
  CreateContainerServiceDeploymentResult,
  CreateContainerServiceRegistryLoginRequest,
  CreateContainerServiceRegistryLoginResult,
  CreateContainerServiceRequest,
  CreateContainerServiceResult,
  CreateDiskFromSnapshotRequest,
  CreateDiskFromSnapshotResult,
  CreateDiskRequest,
  CreateDiskResult,
  CreateDiskSnapshotRequest,
  CreateDiskSnapshotResult,
  CreateDistributionRequest,
  CreateDistributionResult,
  CreateDomainEntryRequest,
  CreateDomainEntryResult,
  CreateDomainRequest,
  CreateDomainResult,
  CreateGUISessionAccessDetailsRequest,
  CreateGUISessionAccessDetailsResult,
  CreateInstancesFromSnapshotRequest,
  CreateInstancesFromSnapshotResult,
  CreateInstanceSnapshotRequest,
  CreateInstanceSnapshotResult,
  CreateInstancesRequest,
  CreateInstancesResult,
  CreateKeyPairRequest,
  CreateKeyPairResult,
  CreateLoadBalancerRequest,
  CreateLoadBalancerResult,
  CreateLoadBalancerTlsCertificateRequest,
  CreateLoadBalancerTlsCertificateResult,
  CreateRelationalDatabaseFromSnapshotRequest,
  CreateRelationalDatabaseFromSnapshotResult,
  CreateRelationalDatabaseRequest,
  CreateRelationalDatabaseResult,
  CreateRelationalDatabaseSnapshotRequest,
  CreateRelationalDatabaseSnapshotResult,
  DeleteAlarmRequest,
  DeleteAlarmResult,
  DeleteAutoSnapshotRequest,
  DeleteAutoSnapshotResult,
  DeleteBucketAccessKeyRequest,
  DeleteBucketAccessKeyResult,
  DeleteBucketRequest,
  DeleteBucketResult,
  DeleteCertificateRequest,
  DeleteCertificateResult,
  DeleteContactMethodRequest,
  DeleteContactMethodResult,
  DeleteContainerImageRequest,
  DeleteContainerImageResult,
  DeleteContainerServiceRequest,
  DeleteContainerServiceResult,
  DeleteDiskRequest,
  DeleteDiskResult,
  DeleteDiskSnapshotRequest,
  DeleteDiskSnapshotResult,
  DeleteDistributionRequest,
  DeleteDistributionResult,
  DeleteDomainEntryRequest,
  DeleteDomainEntryResult,
  DeleteDomainRequest,
  DeleteDomainResult,
  DeleteInstanceRequest,
  DeleteInstanceResult,
  DeleteInstanceSnapshotRequest,
  DeleteInstanceSnapshotResult,
  DeleteKeyPairRequest,
  DeleteKeyPairResult,
  DeleteKnownHostKeysRequest,
  DeleteKnownHostKeysResult,
  DeleteLoadBalancerRequest,
  DeleteLoadBalancerResult,
  DeleteLoadBalancerTlsCertificateRequest,
  DeleteLoadBalancerTlsCertificateResult,
  DeleteRelationalDatabaseRequest,
  DeleteRelationalDatabaseResult,
  DeleteRelationalDatabaseSnapshotRequest,
  DeleteRelationalDatabaseSnapshotResult,
  DestinationInfo,
  DetachCertificateFromDistributionRequest,
  DetachCertificateFromDistributionResult,
  DetachDiskRequest,
  DetachDiskResult,
  DetachInstancesFromLoadBalancerRequest,
  DetachInstancesFromLoadBalancerResult,
  DetachStaticIpRequest,
  DetachStaticIpResult,
  DisableAddOnRequest,
  DisableAddOnResult,
  Disk,
  DiskInfo,
  DiskMap,
  DiskSnapshot,
  DiskSnapshotInfo,
  DistributionBundle,
  DnsRecordCreationState,
  Domain,
  DomainEntry,
  DomainValidationRecord,
  DownloadDefaultKeyPairRequest,
  DownloadDefaultKeyPairResult,
  EnableAddOnRequest,
  EnableAddOnResult,
  EndpointRequest,
  EstimateByTime,
  ExportSnapshotRecord,
  ExportSnapshotRecordSourceInfo,
  ExportSnapshotRequest,
  ExportSnapshotResult,
  GetActiveNamesRequest,
  GetActiveNamesResult,
  GetAlarmsRequest,
  GetAlarmsResult,
  GetAutoSnapshotsRequest,
  GetAutoSnapshotsResult,
  GetBlueprintsRequest,
  GetBlueprintsResult,
  GetBucketAccessKeysRequest,
  GetBucketAccessKeysResult,
  GetBucketBundlesRequest,
  GetBucketBundlesResult,
  GetBucketMetricDataRequest,
  GetBucketMetricDataResult,
  GetBucketsRequest,
  GetBucketsResult,
  GetBundlesRequest,
  GetBundlesResult,
  GetCertificatesRequest,
  GetCertificatesResult,
  GetCloudFormationStackRecordsRequest,
  GetCloudFormationStackRecordsResult,
  GetContactMethodsRequest,
  GetContactMethodsResult,
  GetContainerAPIMetadataRequest,
  GetContainerAPIMetadataResult,
  GetContainerImagesRequest,
  GetContainerImagesResult,
  GetContainerLogRequest,
  GetContainerLogResult,
  GetContainerServiceDeploymentsRequest,
  GetContainerServiceDeploymentsResult,
  GetContainerServiceMetricDataRequest,
  GetContainerServiceMetricDataResult,
  GetContainerServicePowersRequest,
  GetContainerServicePowersResult,
  GetContainerServicesRequest,
  HeaderEnum,
  HeaderObject,
  InputOrigin,
  InstanceEntry,
  InstancePlatform,
  InstanceSnapshotInfo,
  InvalidInputException,
  KeyPair,
  LightsailDistribution,
  MetricDatapoint,
  MetricStatistic,
  MonitoredResourceInfo,
  NameServersUpdateState,
  NotFoundException,
  Operation,
  OperationFailureException,
  Origin,
  PortInfo,
  PrivateRegistryAccess,
  PrivateRegistryAccessRequest,
  QueryStringObject,
  R53HostedZoneDeletionState,
  RegisteredDomainDelegationInfo,
  RenewalSummary,
  ResourceLocation,
  ResourceReceivingAccess,
  ResourceRecord,
  ServiceException,
  Session,
  StopInstanceOnIdleRequest,
  Tag,
  TimePeriod,
  UnauthenticatedException,
} from "../models/models_0";
import {
  GetCostEstimateRequest,
  GetCostEstimateResult,
  GetDiskRequest,
  GetDiskResult,
  GetDiskSnapshotRequest,
  GetDiskSnapshotResult,
  GetDiskSnapshotsRequest,
  GetDiskSnapshotsResult,
  GetDisksRequest,
  GetDisksResult,
  GetDistributionBundlesRequest,
  GetDistributionBundlesResult,
  GetDistributionLatestCacheResetRequest,
  GetDistributionLatestCacheResetResult,
  GetDistributionMetricDataRequest,
  GetDistributionMetricDataResult,
  GetDistributionsRequest,
  GetDistributionsResult,
  GetDomainRequest,
  GetDomainResult,
  GetDomainsRequest,
  GetDomainsResult,
  GetExportSnapshotRecordsRequest,
  GetExportSnapshotRecordsResult,
  GetInstanceAccessDetailsRequest,
  GetInstanceAccessDetailsResult,
  GetInstanceMetricDataRequest,
  GetInstanceMetricDataResult,
  GetInstancePortStatesRequest,
  GetInstancePortStatesResult,
  GetInstanceRequest,
  GetInstanceResult,
  GetInstanceSnapshotRequest,
  GetInstanceSnapshotResult,
  GetInstanceSnapshotsRequest,
  GetInstanceSnapshotsResult,
  GetInstancesRequest,
  GetInstancesResult,
  GetInstanceStateRequest,
  GetInstanceStateResult,
  GetKeyPairRequest,
  GetKeyPairResult,
  GetKeyPairsRequest,
  GetKeyPairsResult,
  GetLoadBalancerMetricDataRequest,
  GetLoadBalancerMetricDataResult,
  GetLoadBalancerRequest,
  GetLoadBalancerResult,
  GetLoadBalancersRequest,
  GetLoadBalancersResult,
  GetLoadBalancerTlsCertificatesRequest,
  GetLoadBalancerTlsCertificatesResult,
  GetLoadBalancerTlsPoliciesRequest,
  GetLoadBalancerTlsPoliciesResult,
  GetOperationRequest,
  GetOperationResult,
  GetOperationsForResourceRequest,
  GetOperationsForResourceResult,
  GetOperationsRequest,
  GetOperationsResult,
  GetRegionsRequest,
  GetRegionsResult,
  GetRelationalDatabaseBlueprintsRequest,
  GetRelationalDatabaseBlueprintsResult,
  GetRelationalDatabaseBundlesRequest,
  GetRelationalDatabaseBundlesResult,
  GetRelationalDatabaseEventsRequest,
  GetRelationalDatabaseEventsResult,
  GetRelationalDatabaseLogEventsRequest,
  GetRelationalDatabaseLogEventsResult,
  GetRelationalDatabaseLogStreamsRequest,
  GetRelationalDatabaseLogStreamsResult,
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
  GetRelationalDatabaseMetricDataRequest,
  GetRelationalDatabaseMetricDataResult,
  GetRelationalDatabaseParametersRequest,
  GetRelationalDatabaseParametersResult,
  GetRelationalDatabaseRequest,
  GetRelationalDatabaseResult,
  GetRelationalDatabaseSnapshotRequest,
  GetRelationalDatabaseSnapshotResult,
  GetRelationalDatabaseSnapshotsRequest,
  GetRelationalDatabaseSnapshotsResult,
  GetRelationalDatabasesRequest,
  GetRelationalDatabasesResult,
  GetStaticIpRequest,
  GetStaticIpResult,
  GetStaticIpsRequest,
  GetStaticIpsResult,
  HostKeyAttributes,
  ImportKeyPairRequest,
  ImportKeyPairResult,
  Instance,
  InstanceAccessDetails,
  InstanceHardware,
  InstanceHealthSummary,
  InstanceMetadataOptions,
  InstanceNetworking,
  InstancePortInfo,
  InstancePortState,
  InstanceSnapshot,
  InstanceState,
  IsVpcPeeredRequest,
  IsVpcPeeredResult,
  LoadBalancer,
  LoadBalancerAttributeName,
  LoadBalancerTlsCertificate,
  LoadBalancerTlsCertificateDnsRecordCreationState,
  LoadBalancerTlsCertificateDomainValidationOption,
  LoadBalancerTlsCertificateDomainValidationRecord,
  LoadBalancerTlsCertificateRenewalSummary,
  LoadBalancerTlsCertificateSummary,
  LoadBalancerTlsPolicy,
  LogEvent,
  MonthlyTransfer,
  OpenInstancePublicPortsRequest,
  OpenInstancePublicPortsResult,
  PasswordData,
  PeerVpcRequest,
  PeerVpcResult,
  PendingMaintenanceAction,
  PendingModifiedRelationalDatabaseValues,
  PutAlarmRequest,
  PutAlarmResult,
  PutInstancePublicPortsRequest,
  PutInstancePublicPortsResult,
  RebootInstanceRequest,
  RebootInstanceResult,
  RebootRelationalDatabaseRequest,
  RebootRelationalDatabaseResult,
  Region,
  RegisterContainerImageRequest,
  RegisterContainerImageResult,
  RelationalDatabase,
  RelationalDatabaseBlueprint,
  RelationalDatabaseBundle,
  RelationalDatabaseEndpoint,
  RelationalDatabaseEvent,
  RelationalDatabaseHardware,
  RelationalDatabaseParameter,
  RelationalDatabaseSnapshot,
  ReleaseStaticIpRequest,
  ReleaseStaticIpResult,
  ResetDistributionCacheRequest,
  ResetDistributionCacheResult,
  ResourceBudgetEstimate,
  SendContactMethodVerificationRequest,
  SendContactMethodVerificationResult,
  SetIpAddressTypeRequest,
  SetIpAddressTypeResult,
  SetResourceAccessForBucketRequest,
  SetResourceAccessForBucketResult,
  StartGUISessionRequest,
  StartGUISessionResult,
  StartInstanceRequest,
  StartInstanceResult,
  StartRelationalDatabaseRequest,
  StartRelationalDatabaseResult,
  StaticIp,
  StopGUISessionRequest,
  StopGUISessionResult,
  StopInstanceRequest,
  StopInstanceResult,
  StopRelationalDatabaseRequest,
  StopRelationalDatabaseResult,
  TagResourceRequest,
  TagResourceResult,
  TestAlarmRequest,
  TestAlarmResult,
  UnpeerVpcRequest,
  UnpeerVpcResult,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateBucketBundleRequest,
  UpdateBucketBundleResult,
  UpdateBucketRequest,
  UpdateBucketResult,
  UpdateContainerServiceRequest,
  UpdateContainerServiceResult,
  UpdateDistributionBundleRequest,
  UpdateDistributionBundleResult,
  UpdateDistributionRequest,
  UpdateDistributionResult,
  UpdateDomainEntryRequest,
  UpdateDomainEntryResult,
  UpdateInstanceMetadataOptionsRequest,
  UpdateInstanceMetadataOptionsResult,
  UpdateLoadBalancerAttributeRequest,
  UpdateLoadBalancerAttributeResult,
  UpdateRelationalDatabaseParametersRequest,
  UpdateRelationalDatabaseParametersResult,
  UpdateRelationalDatabaseRequest,
  UpdateRelationalDatabaseResult,
} from "../models/models_1";

/**
 * serializeAws_json1_1AllocateStaticIpCommand
 */
export const se_AllocateStaticIpCommand = async (
  input: AllocateStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AllocateStaticIp",
  };
  let body: any;
  body = JSON.stringify(se_AllocateStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachCertificateToDistributionCommand
 */
export const se_AttachCertificateToDistributionCommand = async (
  input: AttachCertificateToDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachCertificateToDistribution",
  };
  let body: any;
  body = JSON.stringify(se_AttachCertificateToDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachDiskCommand
 */
export const se_AttachDiskCommand = async (
  input: AttachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachDisk",
  };
  let body: any;
  body = JSON.stringify(se_AttachDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachInstancesToLoadBalancerCommand
 */
export const se_AttachInstancesToLoadBalancerCommand = async (
  input: AttachInstancesToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachInstancesToLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(se_AttachInstancesToLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand
 */
export const se_AttachLoadBalancerTlsCertificateCommand = async (
  input: AttachLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(se_AttachLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachStaticIpCommand
 */
export const se_AttachStaticIpCommand = async (
  input: AttachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachStaticIp",
  };
  let body: any;
  body = JSON.stringify(se_AttachStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CloseInstancePublicPortsCommand
 */
export const se_CloseInstancePublicPortsCommand = async (
  input: CloseInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CloseInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(se_CloseInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopySnapshotCommand
 */
export const se_CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CopySnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CopySnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBucketCommand
 */
export const se_CreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateBucket",
  };
  let body: any;
  body = JSON.stringify(se_CreateBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBucketAccessKeyCommand
 */
export const se_CreateBucketAccessKeyCommand = async (
  input: CreateBucketAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateBucketAccessKey",
  };
  let body: any;
  body = JSON.stringify(se_CreateBucketAccessKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCertificateCommand
 */
export const se_CreateCertificateCommand = async (
  input: CreateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateCertificate",
  };
  let body: any;
  body = JSON.stringify(se_CreateCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCloudFormationStackCommand
 */
export const se_CreateCloudFormationStackCommand = async (
  input: CreateCloudFormationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateCloudFormationStack",
  };
  let body: any;
  body = JSON.stringify(se_CreateCloudFormationStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContactMethodCommand
 */
export const se_CreateContactMethodCommand = async (
  input: CreateContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContactMethod",
  };
  let body: any;
  body = JSON.stringify(se_CreateContactMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContainerServiceCommand
 */
export const se_CreateContainerServiceCommand = async (
  input: CreateContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContainerService",
  };
  let body: any;
  body = JSON.stringify(se_CreateContainerServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContainerServiceDeploymentCommand
 */
export const se_CreateContainerServiceDeploymentCommand = async (
  input: CreateContainerServiceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContainerServiceDeployment",
  };
  let body: any;
  body = JSON.stringify(se_CreateContainerServiceDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContainerServiceRegistryLoginCommand
 */
export const se_CreateContainerServiceRegistryLoginCommand = async (
  input: CreateContainerServiceRegistryLoginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContainerServiceRegistryLogin",
  };
  let body: any;
  body = JSON.stringify(se_CreateContainerServiceRegistryLoginRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDiskCommand
 */
export const se_CreateDiskCommand = async (
  input: CreateDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDisk",
  };
  let body: any;
  body = JSON.stringify(se_CreateDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDiskFromSnapshotCommand
 */
export const se_CreateDiskFromSnapshotCommand = async (
  input: CreateDiskFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDiskFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateDiskFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDiskSnapshotCommand
 */
export const se_CreateDiskSnapshotCommand = async (
  input: CreateDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDistributionCommand
 */
export const se_CreateDistributionCommand = async (
  input: CreateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDistribution",
  };
  let body: any;
  body = JSON.stringify(se_CreateDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDomain",
  };
  let body: any;
  body = JSON.stringify(se_CreateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDomainEntryCommand
 */
export const se_CreateDomainEntryCommand = async (
  input: CreateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDomainEntry",
  };
  let body: any;
  body = JSON.stringify(se_CreateDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGUISessionAccessDetailsCommand
 */
export const se_CreateGUISessionAccessDetailsCommand = async (
  input: CreateGUISessionAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateGUISessionAccessDetails",
  };
  let body: any;
  body = JSON.stringify(se_CreateGUISessionAccessDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstancesCommand
 */
export const se_CreateInstancesCommand = async (
  input: CreateInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateInstances",
  };
  let body: any;
  body = JSON.stringify(se_CreateInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstancesFromSnapshotCommand
 */
export const se_CreateInstancesFromSnapshotCommand = async (
  input: CreateInstancesFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateInstancesFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateInstancesFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceSnapshotCommand
 */
export const se_CreateInstanceSnapshotCommand = async (
  input: CreateInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateKeyPairCommand
 */
export const se_CreateKeyPairCommand = async (
  input: CreateKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateKeyPair",
  };
  let body: any;
  body = JSON.stringify(se_CreateKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLoadBalancerCommand
 */
export const se_CreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(se_CreateLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand
 */
export const se_CreateLoadBalancerTlsCertificateCommand = async (
  input: CreateLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(se_CreateLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseCommand
 */
export const se_CreateRelationalDatabaseCommand = async (
  input: CreateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_CreateRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand
 */
export const se_CreateRelationalDatabaseFromSnapshotCommand = async (
  input: CreateRelationalDatabaseFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateRelationalDatabaseFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand
 */
export const se_CreateRelationalDatabaseSnapshotCommand = async (
  input: CreateRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAlarmCommand
 */
export const se_DeleteAlarmCommand = async (
  input: DeleteAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteAlarm",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAutoSnapshotCommand
 */
export const se_DeleteAutoSnapshotCommand = async (
  input: DeleteAutoSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteAutoSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAutoSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBucketCommand
 */
export const se_DeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteBucket",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBucketAccessKeyCommand
 */
export const se_DeleteBucketAccessKeyCommand = async (
  input: DeleteBucketAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteBucketAccessKey",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBucketAccessKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCertificateCommand
 */
export const se_DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteCertificate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactMethodCommand
 */
export const se_DeleteContactMethodCommand = async (
  input: DeleteContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteContactMethod",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContactMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerImageCommand
 */
export const se_DeleteContainerImageCommand = async (
  input: DeleteContainerImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteContainerImage",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContainerImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerServiceCommand
 */
export const se_DeleteContainerServiceCommand = async (
  input: DeleteContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteContainerService",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContainerServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDiskCommand
 */
export const se_DeleteDiskCommand = async (
  input: DeleteDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDisk",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDiskSnapshotCommand
 */
export const se_DeleteDiskSnapshotCommand = async (
  input: DeleteDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDistributionCommand
 */
export const se_DeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDistribution",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainEntryCommand
 */
export const se_DeleteDomainEntryCommand = async (
  input: DeleteDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDomainEntry",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteInstance",
  };
  let body: any;
  body = JSON.stringify(se_DeleteInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceSnapshotCommand
 */
export const se_DeleteInstanceSnapshotCommand = async (
  input: DeleteInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_DeleteInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteKeyPairCommand
 */
export const se_DeleteKeyPairCommand = async (
  input: DeleteKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteKeyPair",
  };
  let body: any;
  body = JSON.stringify(se_DeleteKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteKnownHostKeysCommand
 */
export const se_DeleteKnownHostKeysCommand = async (
  input: DeleteKnownHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteKnownHostKeys",
  };
  let body: any;
  body = JSON.stringify(se_DeleteKnownHostKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLoadBalancerCommand
 */
export const se_DeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand
 */
export const se_DeleteLoadBalancerTlsCertificateCommand = async (
  input: DeleteLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRelationalDatabaseCommand
 */
export const se_DeleteRelationalDatabaseCommand = async (
  input: DeleteRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand
 */
export const se_DeleteRelationalDatabaseSnapshotCommand = async (
  input: DeleteRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachCertificateFromDistributionCommand
 */
export const se_DetachCertificateFromDistributionCommand = async (
  input: DetachCertificateFromDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachCertificateFromDistribution",
  };
  let body: any;
  body = JSON.stringify(se_DetachCertificateFromDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachDiskCommand
 */
export const se_DetachDiskCommand = async (
  input: DetachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachDisk",
  };
  let body: any;
  body = JSON.stringify(se_DetachDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachInstancesFromLoadBalancerCommand
 */
export const se_DetachInstancesFromLoadBalancerCommand = async (
  input: DetachInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachInstancesFromLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(se_DetachInstancesFromLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachStaticIpCommand
 */
export const se_DetachStaticIpCommand = async (
  input: DetachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachStaticIp",
  };
  let body: any;
  body = JSON.stringify(se_DetachStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableAddOnCommand
 */
export const se_DisableAddOnCommand = async (
  input: DisableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DisableAddOn",
  };
  let body: any;
  body = JSON.stringify(se_DisableAddOnRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DownloadDefaultKeyPairCommand
 */
export const se_DownloadDefaultKeyPairCommand = async (
  input: DownloadDefaultKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DownloadDefaultKeyPair",
  };
  let body: any;
  body = JSON.stringify(se_DownloadDefaultKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAddOnCommand
 */
export const se_EnableAddOnCommand = async (
  input: EnableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.EnableAddOn",
  };
  let body: any;
  body = JSON.stringify(se_EnableAddOnRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExportSnapshotCommand
 */
export const se_ExportSnapshotCommand = async (
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ExportSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_ExportSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetActiveNamesCommand
 */
export const se_GetActiveNamesCommand = async (
  input: GetActiveNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetActiveNames",
  };
  let body: any;
  body = JSON.stringify(se_GetActiveNamesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAlarmsCommand
 */
export const se_GetAlarmsCommand = async (
  input: GetAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetAlarms",
  };
  let body: any;
  body = JSON.stringify(se_GetAlarmsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAutoSnapshotsCommand
 */
export const se_GetAutoSnapshotsCommand = async (
  input: GetAutoSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetAutoSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_GetAutoSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlueprintsCommand
 */
export const se_GetBlueprintsCommand = async (
  input: GetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBlueprints",
  };
  let body: any;
  body = JSON.stringify(se_GetBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketAccessKeysCommand
 */
export const se_GetBucketAccessKeysCommand = async (
  input: GetBucketAccessKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBucketAccessKeys",
  };
  let body: any;
  body = JSON.stringify(se_GetBucketAccessKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketBundlesCommand
 */
export const se_GetBucketBundlesCommand = async (
  input: GetBucketBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBucketBundles",
  };
  let body: any;
  body = JSON.stringify(se_GetBucketBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketMetricDataCommand
 */
export const se_GetBucketMetricDataCommand = async (
  input: GetBucketMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBucketMetricData",
  };
  let body: any;
  body = JSON.stringify(se_GetBucketMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketsCommand
 */
export const se_GetBucketsCommand = async (
  input: GetBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBuckets",
  };
  let body: any;
  body = JSON.stringify(se_GetBucketsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBundlesCommand
 */
export const se_GetBundlesCommand = async (
  input: GetBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBundles",
  };
  let body: any;
  body = JSON.stringify(se_GetBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCertificatesCommand
 */
export const se_GetCertificatesCommand = async (
  input: GetCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetCertificates",
  };
  let body: any;
  body = JSON.stringify(se_GetCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCloudFormationStackRecordsCommand
 */
export const se_GetCloudFormationStackRecordsCommand = async (
  input: GetCloudFormationStackRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetCloudFormationStackRecords",
  };
  let body: any;
  body = JSON.stringify(se_GetCloudFormationStackRecordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactMethodsCommand
 */
export const se_GetContactMethodsCommand = async (
  input: GetContactMethodsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContactMethods",
  };
  let body: any;
  body = JSON.stringify(se_GetContactMethodsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerAPIMetadataCommand
 */
export const se_GetContainerAPIMetadataCommand = async (
  input: GetContainerAPIMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerAPIMetadata",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerAPIMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerImagesCommand
 */
export const se_GetContainerImagesCommand = async (
  input: GetContainerImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerImages",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerLogCommand
 */
export const se_GetContainerLogCommand = async (
  input: GetContainerLogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerLog",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerLogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerServiceDeploymentsCommand
 */
export const se_GetContainerServiceDeploymentsCommand = async (
  input: GetContainerServiceDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServiceDeployments",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerServiceDeploymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerServiceMetricDataCommand
 */
export const se_GetContainerServiceMetricDataCommand = async (
  input: GetContainerServiceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServiceMetricData",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerServiceMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerServicePowersCommand
 */
export const se_GetContainerServicePowersCommand = async (
  input: GetContainerServicePowersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServicePowers",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerServicePowersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerServicesCommand
 */
export const se_GetContainerServicesCommand = async (
  input: GetContainerServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServices",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostEstimateCommand
 */
export const se_GetCostEstimateCommand = async (
  input: GetCostEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetCostEstimate",
  };
  let body: any;
  body = JSON.stringify(se_GetCostEstimateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiskCommand
 */
export const se_GetDiskCommand = async (
  input: GetDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDisk",
  };
  let body: any;
  body = JSON.stringify(se_GetDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDisksCommand
 */
export const se_GetDisksCommand = async (
  input: GetDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDisks",
  };
  let body: any;
  body = JSON.stringify(se_GetDisksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiskSnapshotCommand
 */
export const se_GetDiskSnapshotCommand = async (
  input: GetDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_GetDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiskSnapshotsCommand
 */
export const se_GetDiskSnapshotsCommand = async (
  input: GetDiskSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDiskSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_GetDiskSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionBundlesCommand
 */
export const se_GetDistributionBundlesCommand = async (
  input: GetDistributionBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributionBundles",
  };
  let body: any;
  body = JSON.stringify(se_GetDistributionBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionLatestCacheResetCommand
 */
export const se_GetDistributionLatestCacheResetCommand = async (
  input: GetDistributionLatestCacheResetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributionLatestCacheReset",
  };
  let body: any;
  body = JSON.stringify(se_GetDistributionLatestCacheResetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionMetricDataCommand
 */
export const se_GetDistributionMetricDataCommand = async (
  input: GetDistributionMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributionMetricData",
  };
  let body: any;
  body = JSON.stringify(se_GetDistributionMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionsCommand
 */
export const se_GetDistributionsCommand = async (
  input: GetDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributions",
  };
  let body: any;
  body = JSON.stringify(se_GetDistributionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDomain",
  };
  let body: any;
  body = JSON.stringify(se_GetDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainsCommand
 */
export const se_GetDomainsCommand = async (
  input: GetDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDomains",
  };
  let body: any;
  body = JSON.stringify(se_GetDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExportSnapshotRecordsCommand
 */
export const se_GetExportSnapshotRecordsCommand = async (
  input: GetExportSnapshotRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetExportSnapshotRecords",
  };
  let body: any;
  body = JSON.stringify(se_GetExportSnapshotRecordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceCommand
 */
export const se_GetInstanceCommand = async (
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstance",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceAccessDetailsCommand
 */
export const se_GetInstanceAccessDetailsCommand = async (
  input: GetInstanceAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceAccessDetails",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceAccessDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceMetricDataCommand
 */
export const se_GetInstanceMetricDataCommand = async (
  input: GetInstanceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceMetricData",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstancePortStatesCommand
 */
export const se_GetInstancePortStatesCommand = async (
  input: GetInstancePortStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstancePortStates",
  };
  let body: any;
  body = JSON.stringify(se_GetInstancePortStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstancesCommand
 */
export const se_GetInstancesCommand = async (
  input: GetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstances",
  };
  let body: any;
  body = JSON.stringify(se_GetInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceSnapshotCommand
 */
export const se_GetInstanceSnapshotCommand = async (
  input: GetInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceSnapshotsCommand
 */
export const se_GetInstanceSnapshotsCommand = async (
  input: GetInstanceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceStateCommand
 */
export const se_GetInstanceStateCommand = async (
  input: GetInstanceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceState",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyPairCommand
 */
export const se_GetKeyPairCommand = async (
  input: GetKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetKeyPair",
  };
  let body: any;
  body = JSON.stringify(se_GetKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyPairsCommand
 */
export const se_GetKeyPairsCommand = async (
  input: GetKeyPairsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetKeyPairs",
  };
  let body: any;
  body = JSON.stringify(se_GetKeyPairsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerCommand
 */
export const se_GetLoadBalancerCommand = async (
  input: GetLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(se_GetLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerMetricDataCommand
 */
export const se_GetLoadBalancerMetricDataCommand = async (
  input: GetLoadBalancerMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancerMetricData",
  };
  let body: any;
  body = JSON.stringify(se_GetLoadBalancerMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancersCommand
 */
export const se_GetLoadBalancersCommand = async (
  input: GetLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancers",
  };
  let body: any;
  body = JSON.stringify(se_GetLoadBalancersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand
 */
export const se_GetLoadBalancerTlsCertificatesCommand = async (
  input: GetLoadBalancerTlsCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancerTlsCertificates",
  };
  let body: any;
  body = JSON.stringify(se_GetLoadBalancerTlsCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerTlsPoliciesCommand
 */
export const se_GetLoadBalancerTlsPoliciesCommand = async (
  input: GetLoadBalancerTlsPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancerTlsPolicies",
  };
  let body: any;
  body = JSON.stringify(se_GetLoadBalancerTlsPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationCommand
 */
export const se_GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetOperation",
  };
  let body: any;
  body = JSON.stringify(se_GetOperationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationsCommand
 */
export const se_GetOperationsCommand = async (
  input: GetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetOperations",
  };
  let body: any;
  body = JSON.stringify(se_GetOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationsForResourceCommand
 */
export const se_GetOperationsForResourceCommand = async (
  input: GetOperationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetOperationsForResource",
  };
  let body: any;
  body = JSON.stringify(se_GetOperationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegionsCommand
 */
export const se_GetRegionsCommand = async (
  input: GetRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRegions",
  };
  let body: any;
  body = JSON.stringify(se_GetRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseCommand
 */
export const se_GetRelationalDatabaseCommand = async (
  input: GetRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand
 */
export const se_GetRelationalDatabaseBlueprintsCommand = async (
  input: GetRelationalDatabaseBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseBlueprints",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseBundlesCommand
 */
export const se_GetRelationalDatabaseBundlesCommand = async (
  input: GetRelationalDatabaseBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseBundles",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseEventsCommand
 */
export const se_GetRelationalDatabaseEventsCommand = async (
  input: GetRelationalDatabaseEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseEvents",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseLogEventsCommand
 */
export const se_GetRelationalDatabaseLogEventsCommand = async (
  input: GetRelationalDatabaseLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseLogEvents",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand
 */
export const se_GetRelationalDatabaseLogStreamsCommand = async (
  input: GetRelationalDatabaseLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseLogStreams",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseLogStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand
 */
export const se_GetRelationalDatabaseMasterUserPasswordCommand = async (
  input: GetRelationalDatabaseMasterUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseMasterUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseMetricDataCommand
 */
export const se_GetRelationalDatabaseMetricDataCommand = async (
  input: GetRelationalDatabaseMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseMetricData",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseParametersCommand
 */
export const se_GetRelationalDatabaseParametersCommand = async (
  input: GetRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseParameters",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabasesCommand
 */
export const se_GetRelationalDatabasesCommand = async (
  input: GetRelationalDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabases",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseSnapshotCommand
 */
export const se_GetRelationalDatabaseSnapshotCommand = async (
  input: GetRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand
 */
export const se_GetRelationalDatabaseSnapshotsCommand = async (
  input: GetRelationalDatabaseSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_GetRelationalDatabaseSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStaticIpCommand
 */
export const se_GetStaticIpCommand = async (
  input: GetStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetStaticIp",
  };
  let body: any;
  body = JSON.stringify(se_GetStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStaticIpsCommand
 */
export const se_GetStaticIpsCommand = async (
  input: GetStaticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetStaticIps",
  };
  let body: any;
  body = JSON.stringify(se_GetStaticIpsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportKeyPairCommand
 */
export const se_ImportKeyPairCommand = async (
  input: ImportKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ImportKeyPair",
  };
  let body: any;
  body = JSON.stringify(se_ImportKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IsVpcPeeredCommand
 */
export const se_IsVpcPeeredCommand = async (
  input: IsVpcPeeredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.IsVpcPeered",
  };
  let body: any;
  body = JSON.stringify(se_IsVpcPeeredRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1OpenInstancePublicPortsCommand
 */
export const se_OpenInstancePublicPortsCommand = async (
  input: OpenInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.OpenInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(se_OpenInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PeerVpcCommand
 */
export const se_PeerVpcCommand = async (
  input: PeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.PeerVpc",
  };
  let body: any;
  body = JSON.stringify(se_PeerVpcRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAlarmCommand
 */
export const se_PutAlarmCommand = async (
  input: PutAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.PutAlarm",
  };
  let body: any;
  body = JSON.stringify(se_PutAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInstancePublicPortsCommand
 */
export const se_PutInstancePublicPortsCommand = async (
  input: PutInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.PutInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(se_PutInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootInstanceCommand
 */
export const se_RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.RebootInstance",
  };
  let body: any;
  body = JSON.stringify(se_RebootInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootRelationalDatabaseCommand
 */
export const se_RebootRelationalDatabaseCommand = async (
  input: RebootRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.RebootRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_RebootRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterContainerImageCommand
 */
export const se_RegisterContainerImageCommand = async (
  input: RegisterContainerImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.RegisterContainerImage",
  };
  let body: any;
  body = JSON.stringify(se_RegisterContainerImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReleaseStaticIpCommand
 */
export const se_ReleaseStaticIpCommand = async (
  input: ReleaseStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ReleaseStaticIp",
  };
  let body: any;
  body = JSON.stringify(se_ReleaseStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetDistributionCacheCommand
 */
export const se_ResetDistributionCacheCommand = async (
  input: ResetDistributionCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ResetDistributionCache",
  };
  let body: any;
  body = JSON.stringify(se_ResetDistributionCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendContactMethodVerificationCommand
 */
export const se_SendContactMethodVerificationCommand = async (
  input: SendContactMethodVerificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.SendContactMethodVerification",
  };
  let body: any;
  body = JSON.stringify(se_SendContactMethodVerificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetIpAddressTypeCommand
 */
export const se_SetIpAddressTypeCommand = async (
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.SetIpAddressType",
  };
  let body: any;
  body = JSON.stringify(se_SetIpAddressTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetResourceAccessForBucketCommand
 */
export const se_SetResourceAccessForBucketCommand = async (
  input: SetResourceAccessForBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.SetResourceAccessForBucket",
  };
  let body: any;
  body = JSON.stringify(se_SetResourceAccessForBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartGUISessionCommand
 */
export const se_StartGUISessionCommand = async (
  input: StartGUISessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StartGUISession",
  };
  let body: any;
  body = JSON.stringify(se_StartGUISessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartInstanceCommand
 */
export const se_StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StartInstance",
  };
  let body: any;
  body = JSON.stringify(se_StartInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRelationalDatabaseCommand
 */
export const se_StartRelationalDatabaseCommand = async (
  input: StartRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StartRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_StartRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopGUISessionCommand
 */
export const se_StopGUISessionCommand = async (
  input: StopGUISessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StopGUISession",
  };
  let body: any;
  body = JSON.stringify(se_StopGUISessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInstanceCommand
 */
export const se_StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StopInstance",
  };
  let body: any;
  body = JSON.stringify(se_StopInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopRelationalDatabaseCommand
 */
export const se_StopRelationalDatabaseCommand = async (
  input: StopRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StopRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_StopRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestAlarmCommand
 */
export const se_TestAlarmCommand = async (
  input: TestAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.TestAlarm",
  };
  let body: any;
  body = JSON.stringify(se_TestAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnpeerVpcCommand
 */
export const se_UnpeerVpcCommand = async (
  input: UnpeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UnpeerVpc",
  };
  let body: any;
  body = JSON.stringify(se_UnpeerVpcRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBucketCommand
 */
export const se_UpdateBucketCommand = async (
  input: UpdateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateBucket",
  };
  let body: any;
  body = JSON.stringify(se_UpdateBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBucketBundleCommand
 */
export const se_UpdateBucketBundleCommand = async (
  input: UpdateBucketBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateBucketBundle",
  };
  let body: any;
  body = JSON.stringify(se_UpdateBucketBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContainerServiceCommand
 */
export const se_UpdateContainerServiceCommand = async (
  input: UpdateContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateContainerService",
  };
  let body: any;
  body = JSON.stringify(se_UpdateContainerServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDistributionCommand
 */
export const se_UpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateDistribution",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDistributionBundleCommand
 */
export const se_UpdateDistributionBundleCommand = async (
  input: UpdateDistributionBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateDistributionBundle",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDistributionBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainEntryCommand
 */
export const se_UpdateDomainEntryCommand = async (
  input: UpdateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateDomainEntry",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceMetadataOptionsCommand
 */
export const se_UpdateInstanceMetadataOptionsCommand = async (
  input: UpdateInstanceMetadataOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateInstanceMetadataOptions",
  };
  let body: any;
  body = JSON.stringify(se_UpdateInstanceMetadataOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLoadBalancerAttributeCommand
 */
export const se_UpdateLoadBalancerAttributeCommand = async (
  input: UpdateLoadBalancerAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateLoadBalancerAttribute",
  };
  let body: any;
  body = JSON.stringify(se_UpdateLoadBalancerAttributeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRelationalDatabaseCommand
 */
export const se_UpdateRelationalDatabaseCommand = async (
  input: UpdateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRelationalDatabaseParametersCommand
 */
export const se_UpdateRelationalDatabaseParametersCommand = async (
  input: UpdateRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateRelationalDatabaseParameters",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRelationalDatabaseParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AllocateStaticIpCommand
 */
export const de_AllocateStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllocateStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AllocateStaticIpResult(data, context);
  const response: AllocateStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllocateStaticIpCommandError
 */
const de_AllocateStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachCertificateToDistributionCommand
 */
export const de_AttachCertificateToDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCertificateToDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachCertificateToDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachCertificateToDistributionResult(data, context);
  const response: AttachCertificateToDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachCertificateToDistributionCommandError
 */
const de_AttachCertificateToDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCertificateToDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachDiskCommand
 */
export const de_AttachDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachDiskResult(data, context);
  const response: AttachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachDiskCommandError
 */
const de_AttachDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachInstancesToLoadBalancerCommand
 */
export const de_AttachInstancesToLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachInstancesToLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachInstancesToLoadBalancerResult(data, context);
  const response: AttachInstancesToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError
 */
const de_AttachInstancesToLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand
 */
export const de_AttachLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachLoadBalancerTlsCertificateResult(data, context);
  const response: AttachLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError
 */
const de_AttachLoadBalancerTlsCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachStaticIpCommand
 */
export const de_AttachStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachStaticIpResult(data, context);
  const response: AttachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachStaticIpCommandError
 */
const de_AttachStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CloseInstancePublicPortsCommand
 */
export const de_CloseInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CloseInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CloseInstancePublicPortsResult(data, context);
  const response: CloseInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CloseInstancePublicPortsCommandError
 */
const de_CloseInstancePublicPortsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CopySnapshotCommand
 */
export const de_CopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopySnapshotResult(data, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopySnapshotCommandError
 */
const de_CopySnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBucketCommand
 */
export const de_CreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBucketResult(data, context);
  const response: CreateBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBucketCommandError
 */
const de_CreateBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBucketAccessKeyCommand
 */
export const de_CreateBucketAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBucketAccessKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBucketAccessKeyResult(data, context);
  const response: CreateBucketAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBucketAccessKeyCommandError
 */
const de_CreateBucketAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCertificateCommand
 */
export const de_CreateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCertificateResult(data, context);
  const response: CreateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCertificateCommandError
 */
const de_CreateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCloudFormationStackCommand
 */
export const de_CreateCloudFormationStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCloudFormationStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCloudFormationStackResult(data, context);
  const response: CreateCloudFormationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCloudFormationStackCommandError
 */
const de_CreateCloudFormationStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateContactMethodCommand
 */
export const de_CreateContactMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContactMethodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContactMethodResult(data, context);
  const response: CreateContactMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateContactMethodCommandError
 */
const de_CreateContactMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateContainerServiceCommand
 */
export const de_CreateContainerServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContainerServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContainerServiceResult(data, context);
  const response: CreateContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateContainerServiceCommandError
 */
const de_CreateContainerServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateContainerServiceDeploymentCommand
 */
export const de_CreateContainerServiceDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContainerServiceDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContainerServiceDeploymentResult(data, context);
  const response: CreateContainerServiceDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateContainerServiceDeploymentCommandError
 */
const de_CreateContainerServiceDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand
 */
export const de_CreateContainerServiceRegistryLoginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceRegistryLoginCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContainerServiceRegistryLoginCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContainerServiceRegistryLoginResult(data, context);
  const response: CreateContainerServiceRegistryLoginCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateContainerServiceRegistryLoginCommandError
 */
const de_CreateContainerServiceRegistryLoginCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceRegistryLoginCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDiskCommand
 */
export const de_CreateDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDiskResult(data, context);
  const response: CreateDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDiskCommandError
 */
const de_CreateDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDiskFromSnapshotCommand
 */
export const de_CreateDiskFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDiskFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDiskFromSnapshotResult(data, context);
  const response: CreateDiskFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDiskFromSnapshotCommandError
 */
const de_CreateDiskFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDiskSnapshotCommand
 */
export const de_CreateDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDiskSnapshotResult(data, context);
  const response: CreateDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDiskSnapshotCommandError
 */
const de_CreateDiskSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDistributionCommand
 */
export const de_CreateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDistributionResult(data, context);
  const response: CreateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDistributionCommandError
 */
const de_CreateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDomainResult(data, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDomainEntryCommand
 */
export const de_CreateDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDomainEntryResult(data, context);
  const response: CreateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDomainEntryCommandError
 */
const de_CreateDomainEntryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateGUISessionAccessDetailsCommand
 */
export const de_CreateGUISessionAccessDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGUISessionAccessDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGUISessionAccessDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGUISessionAccessDetailsResult(data, context);
  const response: CreateGUISessionAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGUISessionAccessDetailsCommandError
 */
const de_CreateGUISessionAccessDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGUISessionAccessDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInstancesCommand
 */
export const de_CreateInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInstancesResult(data, context);
  const response: CreateInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateInstancesCommandError
 */
const de_CreateInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInstancesFromSnapshotCommand
 */
export const de_CreateInstancesFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstancesFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInstancesFromSnapshotResult(data, context);
  const response: CreateInstancesFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateInstancesFromSnapshotCommandError
 */
const de_CreateInstancesFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInstanceSnapshotCommand
 */
export const de_CreateInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInstanceSnapshotResult(data, context);
  const response: CreateInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateInstanceSnapshotCommandError
 */
const de_CreateInstanceSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateKeyPairCommand
 */
export const de_CreateKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateKeyPairResult(data, context);
  const response: CreateKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateKeyPairCommandError
 */
const de_CreateKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLoadBalancerCommand
 */
export const de_CreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLoadBalancerResult(data, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLoadBalancerCommandError
 */
const de_CreateLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand
 */
export const de_CreateLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLoadBalancerTlsCertificateResult(data, context);
  const response: CreateLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError
 */
const de_CreateLoadBalancerTlsCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseCommand
 */
export const de_CreateRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRelationalDatabaseResult(data, context);
  const response: CreateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseCommandError
 */
const de_CreateRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand
 */
export const de_CreateRelationalDatabaseFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRelationalDatabaseFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRelationalDatabaseFromSnapshotResult(data, context);
  const response: CreateRelationalDatabaseFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError
 */
const de_CreateRelationalDatabaseFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand
 */
export const de_CreateRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRelationalDatabaseSnapshotResult(data, context);
  const response: CreateRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError
 */
const de_CreateRelationalDatabaseSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAlarmCommand
 */
export const de_DeleteAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAlarmResult(data, context);
  const response: DeleteAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAlarmCommandError
 */
const de_DeleteAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAutoSnapshotCommand
 */
export const de_DeleteAutoSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAutoSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAutoSnapshotResult(data, context);
  const response: DeleteAutoSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAutoSnapshotCommandError
 */
const de_DeleteAutoSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBucketCommand
 */
export const de_DeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBucketResult(data, context);
  const response: DeleteBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBucketCommandError
 */
const de_DeleteBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBucketAccessKeyCommand
 */
export const de_DeleteBucketAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBucketAccessKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBucketAccessKeyResult(data, context);
  const response: DeleteBucketAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBucketAccessKeyCommandError
 */
const de_DeleteBucketAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCertificateCommand
 */
export const de_DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCertificateResult(data, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCertificateCommandError
 */
const de_DeleteCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteContactMethodCommand
 */
export const de_DeleteContactMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContactMethodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContactMethodResult(data, context);
  const response: DeleteContactMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteContactMethodCommandError
 */
const de_DeleteContactMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteContainerImageCommand
 */
export const de_DeleteContainerImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContainerImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContainerImageResult(data, context);
  const response: DeleteContainerImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteContainerImageCommandError
 */
const de_DeleteContainerImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteContainerServiceCommand
 */
export const de_DeleteContainerServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContainerServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContainerServiceResult(data, context);
  const response: DeleteContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteContainerServiceCommandError
 */
const de_DeleteContainerServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDiskCommand
 */
export const de_DeleteDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDiskResult(data, context);
  const response: DeleteDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDiskCommandError
 */
const de_DeleteDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDiskSnapshotCommand
 */
export const de_DeleteDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDiskSnapshotResult(data, context);
  const response: DeleteDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDiskSnapshotCommandError
 */
const de_DeleteDiskSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDistributionCommand
 */
export const de_DeleteDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDistributionResult(data, context);
  const response: DeleteDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDistributionCommandError
 */
const de_DeleteDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDomainResult(data, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDomainEntryCommand
 */
export const de_DeleteDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDomainEntryResult(data, context);
  const response: DeleteDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDomainEntryCommandError
 */
const de_DeleteDomainEntryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteInstanceCommand
 */
export const de_DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInstanceResult(data, context);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInstanceCommandError
 */
const de_DeleteInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteInstanceSnapshotCommand
 */
export const de_DeleteInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteInstanceSnapshotResult(data, context);
  const response: DeleteInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteInstanceSnapshotCommandError
 */
const de_DeleteInstanceSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteKeyPairCommand
 */
export const de_DeleteKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteKeyPairResult(data, context);
  const response: DeleteKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteKeyPairCommandError
 */
const de_DeleteKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteKnownHostKeysCommand
 */
export const de_DeleteKnownHostKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteKnownHostKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteKnownHostKeysResult(data, context);
  const response: DeleteKnownHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteKnownHostKeysCommandError
 */
const de_DeleteKnownHostKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerCommand
 */
export const de_DeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLoadBalancerResult(data, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerCommandError
 */
const de_DeleteLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand
 */
export const de_DeleteLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLoadBalancerTlsCertificateResult(data, context);
  const response: DeleteLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError
 */
const de_DeleteLoadBalancerTlsCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseCommand
 */
export const de_DeleteRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRelationalDatabaseResult(data, context);
  const response: DeleteRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseCommandError
 */
const de_DeleteRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand
 */
export const de_DeleteRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRelationalDatabaseSnapshotResult(data, context);
  const response: DeleteRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError
 */
const de_DeleteRelationalDatabaseSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetachCertificateFromDistributionCommand
 */
export const de_DetachCertificateFromDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCertificateFromDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachCertificateFromDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachCertificateFromDistributionResult(data, context);
  const response: DetachCertificateFromDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachCertificateFromDistributionCommandError
 */
const de_DetachCertificateFromDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCertificateFromDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetachDiskCommand
 */
export const de_DetachDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachDiskResult(data, context);
  const response: DetachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachDiskCommandError
 */
const de_DetachDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand
 */
export const de_DetachInstancesFromLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachInstancesFromLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachInstancesFromLoadBalancerResult(data, context);
  const response: DetachInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError
 */
const de_DetachInstancesFromLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetachStaticIpCommand
 */
export const de_DetachStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachStaticIpResult(data, context);
  const response: DetachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachStaticIpCommandError
 */
const de_DetachStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableAddOnCommand
 */
export const de_DisableAddOnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableAddOnResult(data, context);
  const response: DisableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableAddOnCommandError
 */
const de_DisableAddOnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DownloadDefaultKeyPairCommand
 */
export const de_DownloadDefaultKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DownloadDefaultKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DownloadDefaultKeyPairResult(data, context);
  const response: DownloadDefaultKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DownloadDefaultKeyPairCommandError
 */
const de_DownloadDefaultKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableAddOnCommand
 */
export const de_EnableAddOnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableAddOnResult(data, context);
  const response: EnableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableAddOnCommandError
 */
const de_EnableAddOnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ExportSnapshotCommand
 */
export const de_ExportSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportSnapshotResult(data, context);
  const response: ExportSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExportSnapshotCommandError
 */
const de_ExportSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetActiveNamesCommand
 */
export const de_GetActiveNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetActiveNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetActiveNamesResult(data, context);
  const response: GetActiveNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetActiveNamesCommandError
 */
const de_GetActiveNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAlarmsCommand
 */
export const de_GetAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAlarmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAlarmsResult(data, context);
  const response: GetAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAlarmsCommandError
 */
const de_GetAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAutoSnapshotsCommand
 */
export const de_GetAutoSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAutoSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAutoSnapshotsResult(data, context);
  const response: GetAutoSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAutoSnapshotsCommandError
 */
const de_GetAutoSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBlueprintsCommand
 */
export const de_GetBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBlueprintsResult(data, context);
  const response: GetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBlueprintsCommandError
 */
const de_GetBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBucketAccessKeysCommand
 */
export const de_GetBucketAccessKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccessKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBucketAccessKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBucketAccessKeysResult(data, context);
  const response: GetBucketAccessKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBucketAccessKeysCommandError
 */
const de_GetBucketAccessKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccessKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBucketBundlesCommand
 */
export const de_GetBucketBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBucketBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBucketBundlesResult(data, context);
  const response: GetBucketBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBucketBundlesCommandError
 */
const de_GetBucketBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBucketMetricDataCommand
 */
export const de_GetBucketMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBucketMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBucketMetricDataResult(data, context);
  const response: GetBucketMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBucketMetricDataCommandError
 */
const de_GetBucketMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBucketsCommand
 */
export const de_GetBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBucketsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBucketsResult(data, context);
  const response: GetBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBucketsCommandError
 */
const de_GetBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBundlesCommand
 */
export const de_GetBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBundlesResult(data, context);
  const response: GetBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBundlesCommandError
 */
const de_GetBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCertificatesCommand
 */
export const de_GetCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCertificatesResult(data, context);
  const response: GetCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCertificatesCommandError
 */
const de_GetCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCloudFormationStackRecordsCommand
 */
export const de_GetCloudFormationStackRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCloudFormationStackRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCloudFormationStackRecordsResult(data, context);
  const response: GetCloudFormationStackRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCloudFormationStackRecordsCommandError
 */
const de_GetCloudFormationStackRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContactMethodsCommand
 */
export const de_GetContactMethodsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactMethodsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContactMethodsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContactMethodsResult(data, context);
  const response: GetContactMethodsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContactMethodsCommandError
 */
const de_GetContactMethodsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactMethodsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerAPIMetadataCommand
 */
export const de_GetContainerAPIMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerAPIMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerAPIMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerAPIMetadataResult(data, context);
  const response: GetContainerAPIMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerAPIMetadataCommandError
 */
const de_GetContainerAPIMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerAPIMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerImagesCommand
 */
export const de_GetContainerImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerImagesResult(data, context);
  const response: GetContainerImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerImagesCommandError
 */
const de_GetContainerImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerLogCommand
 */
export const de_GetContainerLogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerLogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerLogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerLogResult(data, context);
  const response: GetContainerLogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerLogCommandError
 */
const de_GetContainerLogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerLogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerServiceDeploymentsCommand
 */
export const de_GetContainerServiceDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServiceDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerServiceDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerServiceDeploymentsResult(data, context);
  const response: GetContainerServiceDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerServiceDeploymentsCommandError
 */
const de_GetContainerServiceDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServiceDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerServiceMetricDataCommand
 */
export const de_GetContainerServiceMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServiceMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerServiceMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerServiceMetricDataResult(data, context);
  const response: GetContainerServiceMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerServiceMetricDataCommandError
 */
const de_GetContainerServiceMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServiceMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerServicePowersCommand
 */
export const de_GetContainerServicePowersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServicePowersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerServicePowersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerServicePowersResult(data, context);
  const response: GetContainerServicePowersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerServicePowersCommandError
 */
const de_GetContainerServicePowersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServicePowersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContainerServicesCommand
 */
export const de_GetContainerServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ContainerServicesListResult(data, context);
  const response: GetContainerServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerServicesCommandError
 */
const de_GetContainerServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCostEstimateCommand
 */
export const de_GetCostEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCostEstimateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCostEstimateResult(data, context);
  const response: GetCostEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCostEstimateCommandError
 */
const de_GetCostEstimateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostEstimateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDiskCommand
 */
export const de_GetDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDiskResult(data, context);
  const response: GetDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDiskCommandError
 */
const de_GetDiskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDisksCommand
 */
export const de_GetDisksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDisksResult(data, context);
  const response: GetDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDisksCommandError
 */
const de_GetDisksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDiskSnapshotCommand
 */
export const de_GetDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDiskSnapshotResult(data, context);
  const response: GetDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDiskSnapshotCommandError
 */
const de_GetDiskSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDiskSnapshotsCommand
 */
export const de_GetDiskSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDiskSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDiskSnapshotsResult(data, context);
  const response: GetDiskSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDiskSnapshotsCommandError
 */
const de_GetDiskSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDistributionBundlesCommand
 */
export const de_GetDistributionBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDistributionBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDistributionBundlesResult(data, context);
  const response: GetDistributionBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDistributionBundlesCommandError
 */
const de_GetDistributionBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDistributionLatestCacheResetCommand
 */
export const de_GetDistributionLatestCacheResetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionLatestCacheResetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDistributionLatestCacheResetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDistributionLatestCacheResetResult(data, context);
  const response: GetDistributionLatestCacheResetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDistributionLatestCacheResetCommandError
 */
const de_GetDistributionLatestCacheResetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionLatestCacheResetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDistributionMetricDataCommand
 */
export const de_GetDistributionMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDistributionMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDistributionMetricDataResult(data, context);
  const response: GetDistributionMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDistributionMetricDataCommandError
 */
const de_GetDistributionMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDistributionsCommand
 */
export const de_GetDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDistributionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDistributionsResult(data, context);
  const response: GetDistributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDistributionsCommandError
 */
const de_GetDistributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDomainCommand
 */
export const de_GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDomainResult(data, context);
  const response: GetDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDomainCommandError
 */
const de_GetDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDomainsCommand
 */
export const de_GetDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDomainsResult(data, context);
  const response: GetDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDomainsCommandError
 */
const de_GetDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetExportSnapshotRecordsCommand
 */
export const de_GetExportSnapshotRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetExportSnapshotRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetExportSnapshotRecordsResult(data, context);
  const response: GetExportSnapshotRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetExportSnapshotRecordsCommandError
 */
const de_GetExportSnapshotRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceCommand
 */
export const de_GetInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceResult(data, context);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceCommandError
 */
const de_GetInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceAccessDetailsCommand
 */
export const de_GetInstanceAccessDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceAccessDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceAccessDetailsResult(data, context);
  const response: GetInstanceAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceAccessDetailsCommandError
 */
const de_GetInstanceAccessDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceMetricDataCommand
 */
export const de_GetInstanceMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceMetricDataResult(data, context);
  const response: GetInstanceMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceMetricDataCommandError
 */
const de_GetInstanceMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstancePortStatesCommand
 */
export const de_GetInstancePortStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstancePortStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstancePortStatesResult(data, context);
  const response: GetInstancePortStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstancePortStatesCommandError
 */
const de_GetInstancePortStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstancesCommand
 */
export const de_GetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstancesResult(data, context);
  const response: GetInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstancesCommandError
 */
const de_GetInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotCommand
 */
export const de_GetInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceSnapshotResult(data, context);
  const response: GetInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotCommandError
 */
const de_GetInstanceSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotsCommand
 */
export const de_GetInstanceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceSnapshotsResult(data, context);
  const response: GetInstanceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotsCommandError
 */
const de_GetInstanceSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceStateCommand
 */
export const de_GetInstanceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceStateResult(data, context);
  const response: GetInstanceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceStateCommandError
 */
const de_GetInstanceStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetKeyPairCommand
 */
export const de_GetKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetKeyPairResult(data, context);
  const response: GetKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetKeyPairCommandError
 */
const de_GetKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetKeyPairsCommand
 */
export const de_GetKeyPairsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKeyPairsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetKeyPairsResult(data, context);
  const response: GetKeyPairsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetKeyPairsCommandError
 */
const de_GetKeyPairsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLoadBalancerCommand
 */
export const de_GetLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoadBalancerResult(data, context);
  const response: GetLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLoadBalancerCommandError
 */
const de_GetLoadBalancerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLoadBalancerMetricDataCommand
 */
export const de_GetLoadBalancerMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoadBalancerMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoadBalancerMetricDataResult(data, context);
  const response: GetLoadBalancerMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLoadBalancerMetricDataCommandError
 */
const de_GetLoadBalancerMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLoadBalancersCommand
 */
export const de_GetLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoadBalancersResult(data, context);
  const response: GetLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLoadBalancersCommandError
 */
const de_GetLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand
 */
export const de_GetLoadBalancerTlsCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoadBalancerTlsCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoadBalancerTlsCertificatesResult(data, context);
  const response: GetLoadBalancerTlsCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError
 */
const de_GetLoadBalancerTlsCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommand
 */
export const de_GetLoadBalancerTlsPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoadBalancerTlsPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoadBalancerTlsPoliciesResult(data, context);
  const response: GetLoadBalancerTlsPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommandError
 */
const de_GetLoadBalancerTlsPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOperationCommand
 */
export const de_GetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOperationResult(data, context);
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOperationCommandError
 */
const de_GetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOperationsCommand
 */
export const de_GetOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOperationsResult(data, context);
  const response: GetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOperationsCommandError
 */
const de_GetOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOperationsForResourceCommand
 */
export const de_GetOperationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOperationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOperationsForResourceResult(data, context);
  const response: GetOperationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOperationsForResourceCommandError
 */
const de_GetOperationsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRegionsCommand
 */
export const de_GetRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRegionsResult(data, context);
  const response: GetRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRegionsCommandError
 */
const de_GetRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseCommand
 */
export const de_GetRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseResult(data, context);
  const response: GetRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseCommandError
 */
const de_GetRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand
 */
export const de_GetRelationalDatabaseBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseBlueprintsResult(data, context);
  const response: GetRelationalDatabaseBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError
 */
const de_GetRelationalDatabaseBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseBundlesCommand
 */
export const de_GetRelationalDatabaseBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseBundlesResult(data, context);
  const response: GetRelationalDatabaseBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError
 */
const de_GetRelationalDatabaseBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseEventsCommand
 */
export const de_GetRelationalDatabaseEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseEventsResult(data, context);
  const response: GetRelationalDatabaseEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseEventsCommandError
 */
const de_GetRelationalDatabaseEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand
 */
export const de_GetRelationalDatabaseLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseLogEventsResult(data, context);
  const response: GetRelationalDatabaseLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError
 */
const de_GetRelationalDatabaseLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand
 */
export const de_GetRelationalDatabaseLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseLogStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseLogStreamsResult(data, context);
  const response: GetRelationalDatabaseLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError
 */
const de_GetRelationalDatabaseLogStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand
 */
export const de_GetRelationalDatabaseMasterUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseMasterUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseMasterUserPasswordResult(data, context);
  const response: GetRelationalDatabaseMasterUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError
 */
const de_GetRelationalDatabaseMasterUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand
 */
export const de_GetRelationalDatabaseMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseMetricDataResult(data, context);
  const response: GetRelationalDatabaseMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError
 */
const de_GetRelationalDatabaseMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseParametersCommand
 */
export const de_GetRelationalDatabaseParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseParametersResult(data, context);
  const response: GetRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseParametersCommandError
 */
const de_GetRelationalDatabaseParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabasesCommand
 */
export const de_GetRelationalDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabasesResult(data, context);
  const response: GetRelationalDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabasesCommandError
 */
const de_GetRelationalDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand
 */
export const de_GetRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseSnapshotResult(data, context);
  const response: GetRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError
 */
const de_GetRelationalDatabaseSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand
 */
export const de_GetRelationalDatabaseSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRelationalDatabaseSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRelationalDatabaseSnapshotsResult(data, context);
  const response: GetRelationalDatabaseSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError
 */
const de_GetRelationalDatabaseSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetStaticIpCommand
 */
export const de_GetStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStaticIpResult(data, context);
  const response: GetStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetStaticIpCommandError
 */
const de_GetStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetStaticIpsCommand
 */
export const de_GetStaticIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStaticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStaticIpsResult(data, context);
  const response: GetStaticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetStaticIpsCommandError
 */
const de_GetStaticIpsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportKeyPairCommand
 */
export const de_ImportKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportKeyPairResult(data, context);
  const response: ImportKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportKeyPairCommandError
 */
const de_ImportKeyPairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1IsVpcPeeredCommand
 */
export const de_IsVpcPeeredCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IsVpcPeeredCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IsVpcPeeredResult(data, context);
  const response: IsVpcPeeredCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1IsVpcPeeredCommandError
 */
const de_IsVpcPeeredCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1OpenInstancePublicPortsCommand
 */
export const de_OpenInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OpenInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OpenInstancePublicPortsResult(data, context);
  const response: OpenInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1OpenInstancePublicPortsCommandError
 */
const de_OpenInstancePublicPortsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PeerVpcCommand
 */
export const de_PeerVpcCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PeerVpcResult(data, context);
  const response: PeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PeerVpcCommandError
 */
const de_PeerVpcCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAlarmCommand
 */
export const de_PutAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAlarmResult(data, context);
  const response: PutAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAlarmCommandError
 */
const de_PutAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutInstancePublicPortsCommand
 */
export const de_PutInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutInstancePublicPortsResult(data, context);
  const response: PutInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutInstancePublicPortsCommandError
 */
const de_PutInstancePublicPortsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RebootInstanceCommand
 */
export const de_RebootInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootInstanceResult(data, context);
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RebootInstanceCommandError
 */
const de_RebootInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RebootRelationalDatabaseCommand
 */
export const de_RebootRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootRelationalDatabaseResult(data, context);
  const response: RebootRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RebootRelationalDatabaseCommandError
 */
const de_RebootRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterContainerImageCommand
 */
export const de_RegisterContainerImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterContainerImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterContainerImageResult(data, context);
  const response: RegisterContainerImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterContainerImageCommandError
 */
const de_RegisterContainerImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ReleaseStaticIpCommand
 */
export const de_ReleaseStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReleaseStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReleaseStaticIpResult(data, context);
  const response: ReleaseStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ReleaseStaticIpCommandError
 */
const de_ReleaseStaticIpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResetDistributionCacheCommand
 */
export const de_ResetDistributionCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDistributionCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetDistributionCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetDistributionCacheResult(data, context);
  const response: ResetDistributionCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResetDistributionCacheCommandError
 */
const de_ResetDistributionCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDistributionCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SendContactMethodVerificationCommand
 */
export const de_SendContactMethodVerificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendContactMethodVerificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendContactMethodVerificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendContactMethodVerificationResult(data, context);
  const response: SendContactMethodVerificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendContactMethodVerificationCommandError
 */
const de_SendContactMethodVerificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendContactMethodVerificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetIpAddressTypeCommand
 */
export const de_SetIpAddressTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIpAddressTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetIpAddressTypeResult(data, context);
  const response: SetIpAddressTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetIpAddressTypeCommandError
 */
const de_SetIpAddressTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetResourceAccessForBucketCommand
 */
export const de_SetResourceAccessForBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetResourceAccessForBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetResourceAccessForBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetResourceAccessForBucketResult(data, context);
  const response: SetResourceAccessForBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetResourceAccessForBucketCommandError
 */
const de_SetResourceAccessForBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetResourceAccessForBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartGUISessionCommand
 */
export const de_StartGUISessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGUISessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartGUISessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartGUISessionResult(data, context);
  const response: StartGUISessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartGUISessionCommandError
 */
const de_StartGUISessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGUISessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartInstanceCommand
 */
export const de_StartInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartInstanceResult(data, context);
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartInstanceCommandError
 */
const de_StartInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartRelationalDatabaseCommand
 */
export const de_StartRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartRelationalDatabaseResult(data, context);
  const response: StartRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartRelationalDatabaseCommandError
 */
const de_StartRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopGUISessionCommand
 */
export const de_StopGUISessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopGUISessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopGUISessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopGUISessionResult(data, context);
  const response: StopGUISessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopGUISessionCommandError
 */
const de_StopGUISessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopGUISessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopInstanceCommand
 */
export const de_StopInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopInstanceResult(data, context);
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopInstanceCommandError
 */
const de_StopInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopRelationalDatabaseCommand
 */
export const de_StopRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopRelationalDatabaseResult(data, context);
  const response: StopRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopRelationalDatabaseCommandError
 */
const de_StopRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TestAlarmCommand
 */
export const de_TestAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestAlarmResult(data, context);
  const response: TestAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TestAlarmCommandError
 */
const de_TestAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UnpeerVpcCommand
 */
export const de_UnpeerVpcCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnpeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UnpeerVpcResult(data, context);
  const response: UnpeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnpeerVpcCommandError
 */
const de_UnpeerVpcCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateBucketCommand
 */
export const de_UpdateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBucketResult(data, context);
  const response: UpdateBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateBucketCommandError
 */
const de_UpdateBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateBucketBundleCommand
 */
export const de_UpdateBucketBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBucketBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBucketBundleResult(data, context);
  const response: UpdateBucketBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateBucketBundleCommandError
 */
const de_UpdateBucketBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateContainerServiceCommand
 */
export const de_UpdateContainerServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContainerServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContainerServiceResult(data, context);
  const response: UpdateContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateContainerServiceCommandError
 */
const de_UpdateContainerServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDistributionCommand
 */
export const de_UpdateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDistributionResult(data, context);
  const response: UpdateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDistributionCommandError
 */
const de_UpdateDistributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDistributionBundleCommand
 */
export const de_UpdateDistributionBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDistributionBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDistributionBundleResult(data, context);
  const response: UpdateDistributionBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDistributionBundleCommandError
 */
const de_UpdateDistributionBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDomainEntryCommand
 */
export const de_UpdateDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainEntryResult(data, context);
  const response: UpdateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDomainEntryCommandError
 */
const de_UpdateDomainEntryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateInstanceMetadataOptionsCommand
 */
export const de_UpdateInstanceMetadataOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceMetadataOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceMetadataOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateInstanceMetadataOptionsResult(data, context);
  const response: UpdateInstanceMetadataOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateInstanceMetadataOptionsCommandError
 */
const de_UpdateInstanceMetadataOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceMetadataOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateLoadBalancerAttributeCommand
 */
export const de_UpdateLoadBalancerAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLoadBalancerAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLoadBalancerAttributeResult(data, context);
  const response: UpdateLoadBalancerAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError
 */
const de_UpdateLoadBalancerAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseCommand
 */
export const de_UpdateRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRelationalDatabaseResult(data, context);
  const response: UpdateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseCommandError
 */
const de_UpdateRelationalDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand
 */
export const de_UpdateRelationalDatabaseParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRelationalDatabaseParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRelationalDatabaseParametersResult(data, context);
  const response: UpdateRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError
 */
const de_UpdateRelationalDatabaseParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lightsail#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await de_AccountSetupInProgressExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await de_OperationFailureExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await de_UnauthenticatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountSetupInProgressExceptionRes
 */
const de_AccountSetupInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSetupInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountSetupInProgressException(body, context);
  const exception = new AccountSetupInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationFailureExceptionRes
 */
const de_OperationFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationFailureException(body, context);
  const exception = new OperationFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceException(body, context);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnauthenticatedExceptionRes
 */
const de_UnauthenticatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthenticatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnauthenticatedException(body, context);
  const exception = new UnauthenticatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccessRules
 */
const se_AccessRules = (input: AccessRules, context: __SerdeContext): any => {
  return {
    ...(input.allowPublicOverrides != null && { allowPublicOverrides: input.allowPublicOverrides }),
    ...(input.getObject != null && { getObject: input.getObject }),
  };
};

/**
 * serializeAws_json1_1AddOnRequest
 */
const se_AddOnRequest = (input: AddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnType != null && { addOnType: input.addOnType }),
    ...(input.autoSnapshotAddOnRequest != null && {
      autoSnapshotAddOnRequest: se_AutoSnapshotAddOnRequest(input.autoSnapshotAddOnRequest, context),
    }),
    ...(input.stopInstanceOnIdleRequest != null && {
      stopInstanceOnIdleRequest: se_StopInstanceOnIdleRequest(input.stopInstanceOnIdleRequest, context),
    }),
  };
};

/**
 * serializeAws_json1_1AddOnRequestList
 */
const se_AddOnRequestList = (input: AddOnRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AddOnRequest(entry, context);
    });
};

/**
 * serializeAws_json1_1AllocateStaticIpRequest
 */
const se_AllocateStaticIpRequest = (input: AllocateStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

/**
 * serializeAws_json1_1AttachCertificateToDistributionRequest
 */
const se_AttachCertificateToDistributionRequest = (
  input: AttachCertificateToDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

/**
 * serializeAws_json1_1AttachDiskRequest
 */
const se_AttachDiskRequest = (input: AttachDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.autoMounting != null && { autoMounting: input.autoMounting }),
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.diskPath != null && { diskPath: input.diskPath }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1AttachedDiskMap
 */
const se_AttachedDiskMap = (input: Record<string, DiskMap[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_DiskMapList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1AttachInstancesToLoadBalancerRequest
 */
const se_AttachInstancesToLoadBalancerRequest = (
  input: AttachInstancesToLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames != null && { instanceNames: se_ResourceNameList(input.instanceNames, context) }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest
 */
const se_AttachLoadBalancerTlsCertificateRequest = (
  input: AttachLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1AttachStaticIpRequest
 */
const se_AttachStaticIpRequest = (input: AttachStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

/**
 * serializeAws_json1_1AutoSnapshotAddOnRequest
 */
const se_AutoSnapshotAddOnRequest = (input: AutoSnapshotAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.snapshotTimeOfDay != null && { snapshotTimeOfDay: input.snapshotTimeOfDay }),
  };
};

/**
 * serializeAws_json1_1BucketAccessLogConfig
 */
const se_BucketAccessLogConfig = (input: BucketAccessLogConfig, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_json1_1CacheBehavior
 */
const se_CacheBehavior = (input: CacheBehavior, context: __SerdeContext): any => {
  return {
    ...(input.behavior != null && { behavior: input.behavior }),
  };
};

/**
 * serializeAws_json1_1CacheBehaviorList
 */
const se_CacheBehaviorList = (input: CacheBehaviorPerPath[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CacheBehaviorPerPath(entry, context);
    });
};

/**
 * serializeAws_json1_1CacheBehaviorPerPath
 */
const se_CacheBehaviorPerPath = (input: CacheBehaviorPerPath, context: __SerdeContext): any => {
  return {
    ...(input.behavior != null && { behavior: input.behavior }),
    ...(input.path != null && { path: input.path }),
  };
};

/**
 * serializeAws_json1_1CacheSettings
 */
const se_CacheSettings = (input: CacheSettings, context: __SerdeContext): any => {
  return {
    ...(input.allowedHTTPMethods != null && { allowedHTTPMethods: input.allowedHTTPMethods }),
    ...(input.cachedHTTPMethods != null && { cachedHTTPMethods: input.cachedHTTPMethods }),
    ...(input.defaultTTL != null && { defaultTTL: input.defaultTTL }),
    ...(input.forwardedCookies != null && { forwardedCookies: se_CookieObject(input.forwardedCookies, context) }),
    ...(input.forwardedHeaders != null && { forwardedHeaders: se_HeaderObject(input.forwardedHeaders, context) }),
    ...(input.forwardedQueryStrings != null && {
      forwardedQueryStrings: se_QueryStringObject(input.forwardedQueryStrings, context),
    }),
    ...(input.maximumTTL != null && { maximumTTL: input.maximumTTL }),
    ...(input.minimumTTL != null && { minimumTTL: input.minimumTTL }),
  };
};

/**
 * serializeAws_json1_1CertificateStatusList
 */
const se_CertificateStatusList = (input: (CertificateStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CloseInstancePublicPortsRequest
 */
const se_CloseInstancePublicPortsRequest = (input: CloseInstancePublicPortsRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.portInfo != null && { portInfo: se_PortInfo(input.portInfo, context) }),
  };
};

/**
 * serializeAws_json1_1ContactProtocolsList
 */
const se_ContactProtocolsList = (input: (ContactProtocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Container
 */
const se_Container = (input: Container, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_StringList(input.command, context) }),
    ...(input.environment != null && { environment: se_Environment(input.environment, context) }),
    ...(input.image != null && { image: input.image }),
    ...(input.ports != null && { ports: se_PortMap(input.ports, context) }),
  };
};

/**
 * serializeAws_json1_1ContainerMap
 */
const se_ContainerMap = (input: Record<string, Container>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Container(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ContainerServiceDeploymentRequest
 */
const se_ContainerServiceDeploymentRequest = (
  input: ContainerServiceDeploymentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.containers != null && { containers: se_ContainerMap(input.containers, context) }),
    ...(input.publicEndpoint != null && { publicEndpoint: se_EndpointRequest(input.publicEndpoint, context) }),
  };
};

/**
 * serializeAws_json1_1ContainerServiceECRImagePullerRoleRequest
 */
const se_ContainerServiceECRImagePullerRoleRequest = (
  input: ContainerServiceECRImagePullerRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.isActive != null && { isActive: input.isActive }),
  };
};

/**
 * serializeAws_json1_1ContainerServiceHealthCheckConfig
 */
const se_ContainerServiceHealthCheckConfig = (
  input: ContainerServiceHealthCheckConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.healthyThreshold != null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalSeconds != null && { intervalSeconds: input.intervalSeconds }),
    ...(input.path != null && { path: input.path }),
    ...(input.successCodes != null && { successCodes: input.successCodes }),
    ...(input.timeoutSeconds != null && { timeoutSeconds: input.timeoutSeconds }),
    ...(input.unhealthyThreshold != null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};

/**
 * serializeAws_json1_1ContainerServicePublicDomains
 */
const se_ContainerServicePublicDomains = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ContainerServicePublicDomainsList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ContainerServicePublicDomainsList
 */
const se_ContainerServicePublicDomainsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CookieObject
 */
const se_CookieObject = (input: CookieObject, context: __SerdeContext): any => {
  return {
    ...(input.cookiesAllowList != null && { cookiesAllowList: se_StringList(input.cookiesAllowList, context) }),
    ...(input.option != null && { option: input.option }),
  };
};

/**
 * serializeAws_json1_1CopySnapshotRequest
 */
const se_CopySnapshotRequest = (input: CopySnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.restoreDate != null && { restoreDate: input.restoreDate }),
    ...(input.sourceRegion != null && { sourceRegion: input.sourceRegion }),
    ...(input.sourceResourceName != null && { sourceResourceName: input.sourceResourceName }),
    ...(input.sourceSnapshotName != null && { sourceSnapshotName: input.sourceSnapshotName }),
    ...(input.targetSnapshotName != null && { targetSnapshotName: input.targetSnapshotName }),
    ...(input.useLatestRestorableAutoSnapshot != null && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
  };
};

/**
 * serializeAws_json1_1CreateBucketAccessKeyRequest
 */
const se_CreateBucketAccessKeyRequest = (input: CreateBucketAccessKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

/**
 * serializeAws_json1_1CreateBucketRequest
 */
const se_CreateBucketRequest = (input: CreateBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.enableObjectVersioning != null && { enableObjectVersioning: input.enableObjectVersioning }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateCertificateRequest
 */
const se_CreateCertificateRequest = (input: CreateCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: se_SubjectAlternativeNameList(input.subjectAlternativeNames, context),
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateCloudFormationStackRequest
 */
const se_CreateCloudFormationStackRequest = (input: CreateCloudFormationStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.instances != null && { instances: se_InstanceEntryList(input.instances, context) }),
  };
};

/**
 * serializeAws_json1_1CreateContactMethodRequest
 */
const se_CreateContactMethodRequest = (input: CreateContactMethodRequest, context: __SerdeContext): any => {
  return {
    ...(input.contactEndpoint != null && { contactEndpoint: input.contactEndpoint }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_json1_1CreateContainerServiceDeploymentRequest
 */
const se_CreateContainerServiceDeploymentRequest = (
  input: CreateContainerServiceDeploymentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.containers != null && { containers: se_ContainerMap(input.containers, context) }),
    ...(input.publicEndpoint != null && { publicEndpoint: se_EndpointRequest(input.publicEndpoint, context) }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1CreateContainerServiceRegistryLoginRequest
 */
const se_CreateContainerServiceRegistryLoginRequest = (
  input: CreateContainerServiceRegistryLoginRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1CreateContainerServiceRequest
 */
const se_CreateContainerServiceRequest = (input: CreateContainerServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.deployment != null && { deployment: se_ContainerServiceDeploymentRequest(input.deployment, context) }),
    ...(input.power != null && { power: input.power }),
    ...(input.privateRegistryAccess != null && {
      privateRegistryAccess: se_PrivateRegistryAccessRequest(input.privateRegistryAccess, context),
    }),
    ...(input.publicDomainNames != null && {
      publicDomainNames: se_ContainerServicePublicDomains(input.publicDomainNames, context),
    }),
    ...(input.scale != null && { scale: input.scale }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDiskFromSnapshotRequest
 */
const se_CreateDiskFromSnapshotRequest = (input: CreateDiskFromSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns != null && { addOns: se_AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
    ...(input.restoreDate != null && { restoreDate: input.restoreDate }),
    ...(input.sizeInGb != null && { sizeInGb: input.sizeInGb }),
    ...(input.sourceDiskName != null && { sourceDiskName: input.sourceDiskName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.useLatestRestorableAutoSnapshot != null && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
  };
};

/**
 * serializeAws_json1_1CreateDiskRequest
 */
const se_CreateDiskRequest = (input: CreateDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns != null && { addOns: se_AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.sizeInGb != null && { sizeInGb: input.sizeInGb }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDiskSnapshotRequest
 */
const se_CreateDiskSnapshotRequest = (input: CreateDiskSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDistributionRequest
 */
const se_CreateDistributionRequest = (input: CreateDistributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.cacheBehaviorSettings != null && {
      cacheBehaviorSettings: se_CacheSettings(input.cacheBehaviorSettings, context),
    }),
    ...(input.cacheBehaviors != null && { cacheBehaviors: se_CacheBehaviorList(input.cacheBehaviors, context) }),
    ...(input.defaultCacheBehavior != null && {
      defaultCacheBehavior: se_CacheBehavior(input.defaultCacheBehavior, context),
    }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.origin != null && { origin: se_InputOrigin(input.origin, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDomainEntryRequest
 */
const se_CreateDomainEntryRequest = (input: CreateDomainEntryRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainEntry != null && { domainEntry: se_DomainEntry(input.domainEntry, context) }),
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1CreateDomainRequest
 */
const se_CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateGUISessionAccessDetailsRequest
 */
const se_CreateGUISessionAccessDetailsRequest = (
  input: CreateGUISessionAccessDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1CreateInstancesFromSnapshotRequest
 */
const se_CreateInstancesFromSnapshotRequest = (
  input: CreateInstancesFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addOns != null && { addOns: se_AddOnRequestList(input.addOns, context) }),
    ...(input.attachedDiskMapping != null && {
      attachedDiskMapping: se_AttachedDiskMap(input.attachedDiskMapping, context),
    }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.instanceNames != null && { instanceNames: se_StringList(input.instanceNames, context) }),
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.restoreDate != null && { restoreDate: input.restoreDate }),
    ...(input.sourceInstanceName != null && { sourceInstanceName: input.sourceInstanceName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.useLatestRestorableAutoSnapshot != null && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
    ...(input.userData != null && { userData: input.userData }),
  };
};

/**
 * serializeAws_json1_1CreateInstanceSnapshotRequest
 */
const se_CreateInstanceSnapshotRequest = (input: CreateInstanceSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateInstancesRequest
 */
const se_CreateInstancesRequest = (input: CreateInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns != null && { addOns: se_AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.blueprintId != null && { blueprintId: input.blueprintId }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.customImageName != null && { customImageName: input.customImageName }),
    ...(input.instanceNames != null && { instanceNames: se_StringList(input.instanceNames, context) }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.userData != null && { userData: input.userData }),
  };
};

/**
 * serializeAws_json1_1CreateKeyPairRequest
 */
const se_CreateKeyPairRequest = (input: CreateKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLoadBalancerRequest
 */
const se_CreateLoadBalancerRequest = (input: CreateLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.certificateAlternativeNames != null && {
      certificateAlternativeNames: se_DomainNameList(input.certificateAlternativeNames, context),
    }),
    ...(input.certificateDomainName != null && { certificateDomainName: input.certificateDomainName }),
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.healthCheckPath != null && { healthCheckPath: input.healthCheckPath }),
    ...(input.instancePort != null && { instancePort: input.instancePort }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.tlsPolicyName != null && { tlsPolicyName: input.tlsPolicyName }),
  };
};

/**
 * serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest
 */
const se_CreateLoadBalancerTlsCertificateRequest = (
  input: CreateLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAlternativeNames != null && {
      certificateAlternativeNames: se_DomainNameList(input.certificateAlternativeNames, context),
    }),
    ...(input.certificateDomainName != null && { certificateDomainName: input.certificateDomainName }),
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest
 */
const se_CreateRelationalDatabaseFromSnapshotRequest = (
  input: CreateRelationalDatabaseFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.relationalDatabaseBundleId != null && { relationalDatabaseBundleId: input.relationalDatabaseBundleId }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
    ...(input.restoreTime != null && { restoreTime: Math.round(input.restoreTime.getTime() / 1000) }),
    ...(input.sourceRelationalDatabaseName != null && {
      sourceRelationalDatabaseName: input.sourceRelationalDatabaseName,
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.useLatestRestorableTime != null && { useLatestRestorableTime: input.useLatestRestorableTime }),
  };
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseRequest
 */
const se_CreateRelationalDatabaseRequest = (input: CreateRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.masterDatabaseName != null && { masterDatabaseName: input.masterDatabaseName }),
    ...(input.masterUserPassword != null && { masterUserPassword: input.masterUserPassword }),
    ...(input.masterUsername != null && { masterUsername: input.masterUsername }),
    ...(input.preferredBackupWindow != null && { preferredBackupWindow: input.preferredBackupWindow }),
    ...(input.preferredMaintenanceWindow != null && { preferredMaintenanceWindow: input.preferredMaintenanceWindow }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.relationalDatabaseBlueprintId != null && {
      relationalDatabaseBlueprintId: input.relationalDatabaseBlueprintId,
    }),
    ...(input.relationalDatabaseBundleId != null && { relationalDatabaseBundleId: input.relationalDatabaseBundleId }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest
 */
const se_CreateRelationalDatabaseSnapshotRequest = (
  input: CreateRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteAlarmRequest
 */
const se_DeleteAlarmRequest = (input: DeleteAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
  };
};

/**
 * serializeAws_json1_1DeleteAutoSnapshotRequest
 */
const se_DeleteAutoSnapshotRequest = (input: DeleteAutoSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.date != null && { date: input.date }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1DeleteBucketAccessKeyRequest
 */
const se_DeleteBucketAccessKeyRequest = (input: DeleteBucketAccessKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.accessKeyId != null && { accessKeyId: input.accessKeyId }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

/**
 * serializeAws_json1_1DeleteBucketRequest
 */
const se_DeleteBucketRequest = (input: DeleteBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.forceDelete != null && { forceDelete: input.forceDelete }),
  };
};

/**
 * serializeAws_json1_1DeleteCertificateRequest
 */
const se_DeleteCertificateRequest = (input: DeleteCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
  };
};

/**
 * serializeAws_json1_1DeleteContactMethodRequest
 */
const se_DeleteContactMethodRequest = (input: DeleteContactMethodRequest, context: __SerdeContext): any => {
  return {
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_json1_1DeleteContainerImageRequest
 */
const se_DeleteContainerImageRequest = (input: DeleteContainerImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.image != null && { image: input.image }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1DeleteContainerServiceRequest
 */
const se_DeleteContainerServiceRequest = (input: DeleteContainerServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1DeleteDiskRequest
 */
const se_DeleteDiskRequest = (input: DeleteDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.forceDeleteAddOns != null && { forceDeleteAddOns: input.forceDeleteAddOns }),
  };
};

/**
 * serializeAws_json1_1DeleteDiskSnapshotRequest
 */
const se_DeleteDiskSnapshotRequest = (input: DeleteDiskSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
  };
};

/**
 * serializeAws_json1_1DeleteDistributionRequest
 */
const se_DeleteDistributionRequest = (input: DeleteDistributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

/**
 * serializeAws_json1_1DeleteDomainEntryRequest
 */
const se_DeleteDomainEntryRequest = (input: DeleteDomainEntryRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainEntry != null && { domainEntry: se_DomainEntry(input.domainEntry, context) }),
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1DeleteDomainRequest
 */
const se_DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1DeleteInstanceRequest
 */
const se_DeleteInstanceRequest = (input: DeleteInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.forceDeleteAddOns != null && { forceDeleteAddOns: input.forceDeleteAddOns }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1DeleteInstanceSnapshotRequest
 */
const se_DeleteInstanceSnapshotRequest = (input: DeleteInstanceSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
  };
};

/**
 * serializeAws_json1_1DeleteKeyPairRequest
 */
const se_DeleteKeyPairRequest = (input: DeleteKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.expectedFingerprint != null && { expectedFingerprint: input.expectedFingerprint }),
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
  };
};

/**
 * serializeAws_json1_1DeleteKnownHostKeysRequest
 */
const se_DeleteKnownHostKeysRequest = (input: DeleteKnownHostKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1DeleteLoadBalancerRequest
 */
const se_DeleteLoadBalancerRequest = (input: DeleteLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest
 */
const se_DeleteLoadBalancerTlsCertificateRequest = (
  input: DeleteLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.force != null && { force: input.force }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1DeleteRelationalDatabaseRequest
 */
const se_DeleteRelationalDatabaseRequest = (input: DeleteRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.finalRelationalDatabaseSnapshotName != null && {
      finalRelationalDatabaseSnapshotName: input.finalRelationalDatabaseSnapshotName,
    }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.skipFinalSnapshot != null && { skipFinalSnapshot: input.skipFinalSnapshot }),
  };
};

/**
 * serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest
 */
const se_DeleteRelationalDatabaseSnapshotRequest = (
  input: DeleteRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

/**
 * serializeAws_json1_1DetachCertificateFromDistributionRequest
 */
const se_DetachCertificateFromDistributionRequest = (
  input: DetachCertificateFromDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

/**
 * serializeAws_json1_1DetachDiskRequest
 */
const se_DetachDiskRequest = (input: DetachDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
  };
};

/**
 * serializeAws_json1_1DetachInstancesFromLoadBalancerRequest
 */
const se_DetachInstancesFromLoadBalancerRequest = (
  input: DetachInstancesFromLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames != null && { instanceNames: se_ResourceNameList(input.instanceNames, context) }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1DetachStaticIpRequest
 */
const se_DetachStaticIpRequest = (input: DetachStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

/**
 * serializeAws_json1_1DisableAddOnRequest
 */
const se_DisableAddOnRequest = (input: DisableAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnType != null && { addOnType: input.addOnType }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1DiskMap
 */
const se_DiskMap = (input: DiskMap, context: __SerdeContext): any => {
  return {
    ...(input.newDiskName != null && { newDiskName: input.newDiskName }),
    ...(input.originalDiskPath != null && { originalDiskPath: input.originalDiskPath }),
  };
};

/**
 * serializeAws_json1_1DiskMapList
 */
const se_DiskMapList = (input: DiskMap[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DiskMap(entry, context);
    });
};

/**
 * serializeAws_json1_1DomainEntry
 */
const se_DomainEntry = (input: DomainEntry, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.isAlias != null && { isAlias: input.isAlias }),
    ...(input.name != null && { name: input.name }),
    ...(input.options != null && { options: se_DomainEntryOptions(input.options, context) }),
    ...(input.target != null && { target: input.target }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1DomainEntryOptions
 */
const se_DomainEntryOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1DomainNameList
 */
const se_DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DownloadDefaultKeyPairRequest
 */
const se_DownloadDefaultKeyPairRequest = (input: DownloadDefaultKeyPairRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1EnableAddOnRequest
 */
const se_EnableAddOnRequest = (input: EnableAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnRequest != null && { addOnRequest: se_AddOnRequest(input.addOnRequest, context) }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1EndpointRequest
 */
const se_EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.containerPort != null && { containerPort: input.containerPort }),
    ...(input.healthCheck != null && { healthCheck: se_ContainerServiceHealthCheckConfig(input.healthCheck, context) }),
  };
};

/**
 * serializeAws_json1_1Environment
 */
const se_Environment = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ExportSnapshotRequest
 */
const se_ExportSnapshotRequest = (input: ExportSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.sourceSnapshotName != null && { sourceSnapshotName: input.sourceSnapshotName }),
  };
};

/**
 * serializeAws_json1_1GetActiveNamesRequest
 */
const se_GetActiveNamesRequest = (input: GetActiveNamesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetAlarmsRequest
 */
const se_GetAlarmsRequest = (input: GetAlarmsRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
    ...(input.monitoredResourceName != null && { monitoredResourceName: input.monitoredResourceName }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetAutoSnapshotsRequest
 */
const se_GetAutoSnapshotsRequest = (input: GetAutoSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1GetBlueprintsRequest
 */
const se_GetBlueprintsRequest = (input: GetBlueprintsRequest, context: __SerdeContext): any => {
  return {
    ...(input.appCategory != null && { appCategory: input.appCategory }),
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetBucketAccessKeysRequest
 */
const se_GetBucketAccessKeysRequest = (input: GetBucketAccessKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

/**
 * serializeAws_json1_1GetBucketBundlesRequest
 */
const se_GetBucketBundlesRequest = (input: GetBucketBundlesRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
  };
};

/**
 * serializeAws_json1_1GetBucketMetricDataRequest
 */
const se_GetBucketMetricDataRequest = (input: GetBucketMetricDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: se_MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_1GetBucketsRequest
 */
const se_GetBucketsRequest = (input: GetBucketsRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.includeConnectedResources != null && { includeConnectedResources: input.includeConnectedResources }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetBundlesRequest
 */
const se_GetBundlesRequest = (input: GetBundlesRequest, context: __SerdeContext): any => {
  return {
    ...(input.appCategory != null && { appCategory: input.appCategory }),
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetCertificatesRequest
 */
const se_GetCertificatesRequest = (input: GetCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.certificateStatuses != null && {
      certificateStatuses: se_CertificateStatusList(input.certificateStatuses, context),
    }),
    ...(input.includeCertificateDetails != null && { includeCertificateDetails: input.includeCertificateDetails }),
  };
};

/**
 * serializeAws_json1_1GetCloudFormationStackRecordsRequest
 */
const se_GetCloudFormationStackRecordsRequest = (
  input: GetCloudFormationStackRecordsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetContactMethodsRequest
 */
const se_GetContactMethodsRequest = (input: GetContactMethodsRequest, context: __SerdeContext): any => {
  return {
    ...(input.protocols != null && { protocols: se_ContactProtocolsList(input.protocols, context) }),
  };
};

/**
 * serializeAws_json1_1GetContainerAPIMetadataRequest
 */
const se_GetContainerAPIMetadataRequest = (input: GetContainerAPIMetadataRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetContainerImagesRequest
 */
const se_GetContainerImagesRequest = (input: GetContainerImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1GetContainerLogRequest
 */
const se_GetContainerLogRequest = (input: GetContainerLogRequest, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1GetContainerServiceDeploymentsRequest
 */
const se_GetContainerServiceDeploymentsRequest = (
  input: GetContainerServiceDeploymentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1GetContainerServiceMetricDataRequest
 */
const se_GetContainerServiceMetricDataRequest = (
  input: GetContainerServiceMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: se_MetricStatisticList(input.statistics, context) }),
  };
};

/**
 * serializeAws_json1_1GetContainerServicePowersRequest
 */
const se_GetContainerServicePowersRequest = (input: GetContainerServicePowersRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetContainerServicesRequest
 */
const se_GetContainerServicesRequest = (input: GetContainerServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1GetCostEstimateRequest
 */
const se_GetCostEstimateRequest = (input: GetCostEstimateRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1GetDiskRequest
 */
const se_GetDiskRequest = (input: GetDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
  };
};

/**
 * serializeAws_json1_1GetDiskSnapshotRequest
 */
const se_GetDiskSnapshotRequest = (input: GetDiskSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
  };
};

/**
 * serializeAws_json1_1GetDiskSnapshotsRequest
 */
const se_GetDiskSnapshotsRequest = (input: GetDiskSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetDisksRequest
 */
const se_GetDisksRequest = (input: GetDisksRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetDistributionBundlesRequest
 */
const se_GetDistributionBundlesRequest = (input: GetDistributionBundlesRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetDistributionLatestCacheResetRequest
 */
const se_GetDistributionLatestCacheResetRequest = (
  input: GetDistributionLatestCacheResetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

/**
 * serializeAws_json1_1GetDistributionMetricDataRequest
 */
const se_GetDistributionMetricDataRequest = (input: GetDistributionMetricDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: se_MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_1GetDistributionsRequest
 */
const se_GetDistributionsRequest = (input: GetDistributionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetDomainRequest
 */
const se_GetDomainRequest = (input: GetDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1GetDomainsRequest
 */
const se_GetDomainsRequest = (input: GetDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetExportSnapshotRecordsRequest
 */
const se_GetExportSnapshotRecordsRequest = (input: GetExportSnapshotRecordsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetInstanceAccessDetailsRequest
 */
const se_GetInstanceAccessDetailsRequest = (input: GetInstanceAccessDetailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_json1_1GetInstanceMetricDataRequest
 */
const se_GetInstanceMetricDataRequest = (input: GetInstanceMetricDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: se_MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_1GetInstancePortStatesRequest
 */
const se_GetInstancePortStatesRequest = (input: GetInstancePortStatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1GetInstanceRequest
 */
const se_GetInstanceRequest = (input: GetInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1GetInstanceSnapshotRequest
 */
const se_GetInstanceSnapshotRequest = (input: GetInstanceSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
  };
};

/**
 * serializeAws_json1_1GetInstanceSnapshotsRequest
 */
const se_GetInstanceSnapshotsRequest = (input: GetInstanceSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetInstancesRequest
 */
const se_GetInstancesRequest = (input: GetInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetInstanceStateRequest
 */
const se_GetInstanceStateRequest = (input: GetInstanceStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1GetKeyPairRequest
 */
const se_GetKeyPairRequest = (input: GetKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
  };
};

/**
 * serializeAws_json1_1GetKeyPairsRequest
 */
const se_GetKeyPairsRequest = (input: GetKeyPairsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeDefaultKeyPair != null && { includeDefaultKeyPair: input.includeDefaultKeyPair }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetLoadBalancerMetricDataRequest
 */
const se_GetLoadBalancerMetricDataRequest = (input: GetLoadBalancerMetricDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: se_MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_1GetLoadBalancerRequest
 */
const se_GetLoadBalancerRequest = (input: GetLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1GetLoadBalancersRequest
 */
const se_GetLoadBalancersRequest = (input: GetLoadBalancersRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest
 */
const se_GetLoadBalancerTlsCertificatesRequest = (
  input: GetLoadBalancerTlsCertificatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1GetLoadBalancerTlsPoliciesRequest
 */
const se_GetLoadBalancerTlsPoliciesRequest = (
  input: GetLoadBalancerTlsPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetOperationRequest
 */
const se_GetOperationRequest = (input: GetOperationRequest, context: __SerdeContext): any => {
  return {
    ...(input.operationId != null && { operationId: input.operationId }),
  };
};

/**
 * serializeAws_json1_1GetOperationsForResourceRequest
 */
const se_GetOperationsForResourceRequest = (input: GetOperationsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1GetOperationsRequest
 */
const se_GetOperationsRequest = (input: GetOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetRegionsRequest
 */
const se_GetRegionsRequest = (input: GetRegionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeAvailabilityZones != null && { includeAvailabilityZones: input.includeAvailabilityZones }),
    ...(input.includeRelationalDatabaseAvailabilityZones != null && {
      includeRelationalDatabaseAvailabilityZones: input.includeRelationalDatabaseAvailabilityZones,
    }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest
 */
const se_GetRelationalDatabaseBlueprintsRequest = (
  input: GetRelationalDatabaseBlueprintsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseBundlesRequest
 */
const se_GetRelationalDatabaseBundlesRequest = (
  input: GetRelationalDatabaseBundlesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseEventsRequest
 */
const se_GetRelationalDatabaseEventsRequest = (
  input: GetRelationalDatabaseEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.durationInMinutes != null && { durationInMinutes: input.durationInMinutes }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseLogEventsRequest
 */
const se_GetRelationalDatabaseLogEventsRequest = (
  input: GetRelationalDatabaseLogEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.startFromHead != null && { startFromHead: input.startFromHead }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest
 */
const se_GetRelationalDatabaseLogStreamsRequest = (
  input: GetRelationalDatabaseLogStreamsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest
 */
const se_GetRelationalDatabaseMasterUserPasswordRequest = (
  input: GetRelationalDatabaseMasterUserPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.passwordVersion != null && { passwordVersion: input.passwordVersion }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseMetricDataRequest
 */
const se_GetRelationalDatabaseMetricDataRequest = (
  input: GetRelationalDatabaseMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: se_MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseParametersRequest
 */
const se_GetRelationalDatabaseParametersRequest = (
  input: GetRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseRequest
 */
const se_GetRelationalDatabaseRequest = (input: GetRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseSnapshotRequest
 */
const se_GetRelationalDatabaseSnapshotRequest = (
  input: GetRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest
 */
const se_GetRelationalDatabaseSnapshotsRequest = (
  input: GetRelationalDatabaseSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetRelationalDatabasesRequest
 */
const se_GetRelationalDatabasesRequest = (input: GetRelationalDatabasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1GetStaticIpRequest
 */
const se_GetStaticIpRequest = (input: GetStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

/**
 * serializeAws_json1_1GetStaticIpsRequest
 */
const se_GetStaticIpsRequest = (input: GetStaticIpsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

/**
 * serializeAws_json1_1HeaderForwardList
 */
const se_HeaderForwardList = (input: (HeaderEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1HeaderObject
 */
const se_HeaderObject = (input: HeaderObject, context: __SerdeContext): any => {
  return {
    ...(input.headersAllowList != null && { headersAllowList: se_HeaderForwardList(input.headersAllowList, context) }),
    ...(input.option != null && { option: input.option }),
  };
};

/**
 * serializeAws_json1_1ImportKeyPairRequest
 */
const se_ImportKeyPairRequest = (input: ImportKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.publicKeyBase64 != null && { publicKeyBase64: input.publicKeyBase64 }),
  };
};

/**
 * serializeAws_json1_1InputOrigin
 */
const se_InputOrigin = (input: InputOrigin, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.protocolPolicy != null && { protocolPolicy: input.protocolPolicy }),
    ...(input.regionName != null && { regionName: input.regionName }),
  };
};

/**
 * serializeAws_json1_1InstanceEntry
 */
const se_InstanceEntry = (input: InstanceEntry, context: __SerdeContext): any => {
  return {
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.portInfoSource != null && { portInfoSource: input.portInfoSource }),
    ...(input.sourceName != null && { sourceName: input.sourceName }),
    ...(input.userData != null && { userData: input.userData }),
  };
};

/**
 * serializeAws_json1_1InstanceEntryList
 */
const se_InstanceEntryList = (input: InstanceEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1IsVpcPeeredRequest
 */
const se_IsVpcPeeredRequest = (input: IsVpcPeeredRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1MetricStatisticList
 */
const se_MetricStatisticList = (input: (MetricStatistic | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1NotificationTriggerList
 */
const se_NotificationTriggerList = (input: (AlarmState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpenInstancePublicPortsRequest
 */
const se_OpenInstancePublicPortsRequest = (input: OpenInstancePublicPortsRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.portInfo != null && { portInfo: se_PortInfo(input.portInfo, context) }),
  };
};

/**
 * serializeAws_json1_1PartnerIdList
 */
const se_PartnerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PeerVpcRequest
 */
const se_PeerVpcRequest = (input: PeerVpcRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1PortInfo
 */
const se_PortInfo = (input: PortInfo, context: __SerdeContext): any => {
  return {
    ...(input.cidrListAliases != null && { cidrListAliases: se_StringList(input.cidrListAliases, context) }),
    ...(input.cidrs != null && { cidrs: se_StringList(input.cidrs, context) }),
    ...(input.fromPort != null && { fromPort: input.fromPort }),
    ...(input.ipv6Cidrs != null && { ipv6Cidrs: se_StringList(input.ipv6Cidrs, context) }),
    ...(input.protocol != null && { protocol: input.protocol }),
    ...(input.toPort != null && { toPort: input.toPort }),
  };
};

/**
 * serializeAws_json1_1PortInfoList
 */
const se_PortInfoList = (input: PortInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortInfo(entry, context);
    });
};

/**
 * serializeAws_json1_1PortMap
 */
const se_PortMap = (input: Record<string, ContainerServiceProtocol | string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1PrivateRegistryAccessRequest
 */
const se_PrivateRegistryAccessRequest = (input: PrivateRegistryAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ecrImagePullerRole != null && {
      ecrImagePullerRole: se_ContainerServiceECRImagePullerRoleRequest(input.ecrImagePullerRole, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutAlarmRequest
 */
const se_PutAlarmRequest = (input: PutAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.contactProtocols != null && {
      contactProtocols: se_ContactProtocolsList(input.contactProtocols, context),
    }),
    ...(input.datapointsToAlarm != null && { datapointsToAlarm: input.datapointsToAlarm }),
    ...(input.evaluationPeriods != null && { evaluationPeriods: input.evaluationPeriods }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.monitoredResourceName != null && { monitoredResourceName: input.monitoredResourceName }),
    ...(input.notificationEnabled != null && { notificationEnabled: input.notificationEnabled }),
    ...(input.notificationTriggers != null && {
      notificationTriggers: se_NotificationTriggerList(input.notificationTriggers, context),
    }),
    ...(input.threshold != null && { threshold: __serializeFloat(input.threshold) }),
    ...(input.treatMissingData != null && { treatMissingData: input.treatMissingData }),
  };
};

/**
 * serializeAws_json1_1PutInstancePublicPortsRequest
 */
const se_PutInstancePublicPortsRequest = (input: PutInstancePublicPortsRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.portInfos != null && { portInfos: se_PortInfoList(input.portInfos, context) }),
  };
};

/**
 * serializeAws_json1_1QueryStringObject
 */
const se_QueryStringObject = (input: QueryStringObject, context: __SerdeContext): any => {
  return {
    ...(input.option != null && { option: input.option }),
    ...(input.queryStringsAllowList != null && {
      queryStringsAllowList: se_StringList(input.queryStringsAllowList, context),
    }),
  };
};

/**
 * serializeAws_json1_1RebootInstanceRequest
 */
const se_RebootInstanceRequest = (input: RebootInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1RebootRelationalDatabaseRequest
 */
const se_RebootRelationalDatabaseRequest = (input: RebootRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1RegisterContainerImageRequest
 */
const se_RegisterContainerImageRequest = (input: RegisterContainerImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.digest != null && { digest: input.digest }),
    ...(input.label != null && { label: input.label }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1RelationalDatabaseParameter
 */
const se_RelationalDatabaseParameter = (input: RelationalDatabaseParameter, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && { allowedValues: input.allowedValues }),
    ...(input.applyMethod != null && { applyMethod: input.applyMethod }),
    ...(input.applyType != null && { applyType: input.applyType }),
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.description != null && { description: input.description }),
    ...(input.isModifiable != null && { isModifiable: input.isModifiable }),
    ...(input.parameterName != null && { parameterName: input.parameterName }),
    ...(input.parameterValue != null && { parameterValue: input.parameterValue }),
  };
};

/**
 * serializeAws_json1_1RelationalDatabaseParameterList
 */
const se_RelationalDatabaseParameterList = (input: RelationalDatabaseParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RelationalDatabaseParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1ReleaseStaticIpRequest
 */
const se_ReleaseStaticIpRequest = (input: ReleaseStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

/**
 * serializeAws_json1_1ResetDistributionCacheRequest
 */
const se_ResetDistributionCacheRequest = (input: ResetDistributionCacheRequest, context: __SerdeContext): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

/**
 * serializeAws_json1_1ResourceNameList
 */
const se_ResourceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SendContactMethodVerificationRequest
 */
const se_SendContactMethodVerificationRequest = (
  input: SendContactMethodVerificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_json1_1SetIpAddressTypeRequest
 */
const se_SetIpAddressTypeRequest = (input: SetIpAddressTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

/**
 * serializeAws_json1_1SetResourceAccessForBucketRequest
 */
const se_SetResourceAccessForBucketRequest = (
  input: SetResourceAccessForBucketRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.access != null && { access: input.access }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1StartGUISessionRequest
 */
const se_StartGUISessionRequest = (input: StartGUISessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1StartInstanceRequest
 */
const se_StartInstanceRequest = (input: StartInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1StartRelationalDatabaseRequest
 */
const se_StartRelationalDatabaseRequest = (input: StartRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1StopGUISessionRequest
 */
const se_StopGUISessionRequest = (input: StopGUISessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

/**
 * serializeAws_json1_1StopInstanceOnIdleRequest
 */
const se_StopInstanceOnIdleRequest = (input: StopInstanceOnIdleRequest, context: __SerdeContext): any => {
  return {
    ...(input.duration != null && { duration: input.duration }),
    ...(input.threshold != null && { threshold: input.threshold }),
  };
};

/**
 * serializeAws_json1_1StopInstanceRequest
 */
const se_StopInstanceRequest = (input: StopInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.force != null && { force: input.force }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1StopRelationalDatabaseRequest
 */
const se_StopRelationalDatabaseRequest = (input: StopRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubjectAlternativeNameList
 */
const se_SubjectAlternativeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1TestAlarmRequest
 */
const se_TestAlarmRequest = (input: TestAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
    ...(input.state != null && { state: input.state }),
  };
};

/**
 * serializeAws_json1_1UnpeerVpcRequest
 */
const se_UnpeerVpcRequest = (input: UnpeerVpcRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateBucketBundleRequest
 */
const se_UpdateBucketBundleRequest = (input: UpdateBucketBundleRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
  };
};

/**
 * serializeAws_json1_1UpdateBucketRequest
 */
const se_UpdateBucketRequest = (input: UpdateBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.accessLogConfig != null && { accessLogConfig: se_BucketAccessLogConfig(input.accessLogConfig, context) }),
    ...(input.accessRules != null && { accessRules: se_AccessRules(input.accessRules, context) }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.readonlyAccessAccounts != null && {
      readonlyAccessAccounts: se_PartnerIdList(input.readonlyAccessAccounts, context),
    }),
    ...(input.versioning != null && { versioning: input.versioning }),
  };
};

/**
 * serializeAws_json1_1UpdateContainerServiceRequest
 */
const se_UpdateContainerServiceRequest = (input: UpdateContainerServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.isDisabled != null && { isDisabled: input.isDisabled }),
    ...(input.power != null && { power: input.power }),
    ...(input.privateRegistryAccess != null && {
      privateRegistryAccess: se_PrivateRegistryAccessRequest(input.privateRegistryAccess, context),
    }),
    ...(input.publicDomainNames != null && {
      publicDomainNames: se_ContainerServicePublicDomains(input.publicDomainNames, context),
    }),
    ...(input.scale != null && { scale: input.scale }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1UpdateDistributionBundleRequest
 */
const se_UpdateDistributionBundleRequest = (input: UpdateDistributionBundleRequest, context: __SerdeContext): any => {
  return {
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

/**
 * serializeAws_json1_1UpdateDistributionRequest
 */
const se_UpdateDistributionRequest = (input: UpdateDistributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.cacheBehaviorSettings != null && {
      cacheBehaviorSettings: se_CacheSettings(input.cacheBehaviorSettings, context),
    }),
    ...(input.cacheBehaviors != null && { cacheBehaviors: se_CacheBehaviorList(input.cacheBehaviors, context) }),
    ...(input.defaultCacheBehavior != null && {
      defaultCacheBehavior: se_CacheBehavior(input.defaultCacheBehavior, context),
    }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.isEnabled != null && { isEnabled: input.isEnabled }),
    ...(input.origin != null && { origin: se_InputOrigin(input.origin, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDomainEntryRequest
 */
const se_UpdateDomainEntryRequest = (input: UpdateDomainEntryRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainEntry != null && { domainEntry: se_DomainEntry(input.domainEntry, context) }),
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1UpdateInstanceMetadataOptionsRequest
 */
const se_UpdateInstanceMetadataOptionsRequest = (
  input: UpdateInstanceMetadataOptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.httpEndpoint != null && { httpEndpoint: input.httpEndpoint }),
    ...(input.httpProtocolIpv6 != null && { httpProtocolIpv6: input.httpProtocolIpv6 }),
    ...(input.httpPutResponseHopLimit != null && { httpPutResponseHopLimit: input.httpPutResponseHopLimit }),
    ...(input.httpTokens != null && { httpTokens: input.httpTokens }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1UpdateLoadBalancerAttributeRequest
 */
const se_UpdateLoadBalancerAttributeRequest = (
  input: UpdateLoadBalancerAttributeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.attributeValue != null && { attributeValue: input.attributeValue }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

/**
 * serializeAws_json1_1UpdateRelationalDatabaseParametersRequest
 */
const se_UpdateRelationalDatabaseParametersRequest = (
  input: UpdateRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameters != null && { parameters: se_RelationalDatabaseParameterList(input.parameters, context) }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

/**
 * serializeAws_json1_1UpdateRelationalDatabaseRequest
 */
const se_UpdateRelationalDatabaseRequest = (input: UpdateRelationalDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.applyImmediately != null && { applyImmediately: input.applyImmediately }),
    ...(input.caCertificateIdentifier != null && { caCertificateIdentifier: input.caCertificateIdentifier }),
    ...(input.disableBackupRetention != null && { disableBackupRetention: input.disableBackupRetention }),
    ...(input.enableBackupRetention != null && { enableBackupRetention: input.enableBackupRetention }),
    ...(input.masterUserPassword != null && { masterUserPassword: input.masterUserPassword }),
    ...(input.preferredBackupWindow != null && { preferredBackupWindow: input.preferredBackupWindow }),
    ...(input.preferredMaintenanceWindow != null && { preferredMaintenanceWindow: input.preferredMaintenanceWindow }),
    ...(input.publiclyAccessible != null && { publiclyAccessible: input.publiclyAccessible }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.rotateMasterUserPassword != null && { rotateMasterUserPassword: input.rotateMasterUserPassword }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1AccessKey
 */
const de_AccessKey = (output: any, context: __SerdeContext): AccessKey => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUsed: output.lastUsed != null ? de_AccessKeyLastUsed(output.lastUsed, context) : undefined,
    secretAccessKey: __expectString(output.secretAccessKey),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1AccessKeyLastUsed
 */
const de_AccessKeyLastUsed = (output: any, context: __SerdeContext): AccessKeyLastUsed => {
  return {
    lastUsedDate:
      output.lastUsedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUsedDate)))
        : undefined,
    region: __expectString(output.region),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_json1_1AccessKeyList
 */
const de_AccessKeyList = (output: any, context: __SerdeContext): AccessKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessReceiverList
 */
const de_AccessReceiverList = (output: any, context: __SerdeContext): ResourceReceivingAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceReceivingAccess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessRules
 */
const de_AccessRules = (output: any, context: __SerdeContext): AccessRules => {
  return {
    allowPublicOverrides: __expectBoolean(output.allowPublicOverrides),
    getObject: __expectString(output.getObject),
  } as any;
};

/**
 * deserializeAws_json1_1AccountLevelBpaSync
 */
const de_AccountLevelBpaSync = (output: any, context: __SerdeContext): AccountLevelBpaSync => {
  return {
    bpaImpactsLightsail: __expectBoolean(output.bpaImpactsLightsail),
    lastSyncedAt:
      output.lastSyncedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastSyncedAt)))
        : undefined,
    message: __expectString(output.message),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1AccountSetupInProgressException
 */
const de_AccountSetupInProgressException = (output: any, context: __SerdeContext): AccountSetupInProgressException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1AddOn
 */
const de_AddOn = (output: any, context: __SerdeContext): AddOn => {
  return {
    duration: __expectString(output.duration),
    name: __expectString(output.name),
    nextSnapshotTimeOfDay: __expectString(output.nextSnapshotTimeOfDay),
    snapshotTimeOfDay: __expectString(output.snapshotTimeOfDay),
    status: __expectString(output.status),
    threshold: __expectString(output.threshold),
  } as any;
};

/**
 * deserializeAws_json1_1AddOnList
 */
const de_AddOnList = (output: any, context: __SerdeContext): AddOn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AddOn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    arn: __expectString(output.arn),
    comparisonOperator: __expectString(output.comparisonOperator),
    contactProtocols:
      output.contactProtocols != null ? de_ContactProtocolsList(output.contactProtocols, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    datapointsToAlarm: __expectInt32(output.datapointsToAlarm),
    evaluationPeriods: __expectInt32(output.evaluationPeriods),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    metricName: __expectString(output.metricName),
    monitoredResourceInfo:
      output.monitoredResourceInfo != null
        ? de_MonitoredResourceInfo(output.monitoredResourceInfo, context)
        : undefined,
    name: __expectString(output.name),
    notificationEnabled: __expectBoolean(output.notificationEnabled),
    notificationTriggers:
      output.notificationTriggers != null
        ? de_NotificationTriggerList(output.notificationTriggers, context)
        : undefined,
    period: __expectInt32(output.period),
    resourceType: __expectString(output.resourceType),
    state: __expectString(output.state),
    statistic: __expectString(output.statistic),
    supportCode: __expectString(output.supportCode),
    threshold: __limitedParseDouble(output.threshold),
    treatMissingData: __expectString(output.treatMissingData),
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_json1_1AlarmsList
 */
const de_AlarmsList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alarm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AllocateStaticIpResult
 */
const de_AllocateStaticIpResult = (output: any, context: __SerdeContext): AllocateStaticIpResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AppCategoryList
 */
const de_AppCategoryList = (output: any, context: __SerdeContext): (AppCategory | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttachCertificateToDistributionResult
 */
const de_AttachCertificateToDistributionResult = (
  output: any,
  context: __SerdeContext
): AttachCertificateToDistributionResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttachDiskResult
 */
const de_AttachDiskResult = (output: any, context: __SerdeContext): AttachDiskResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttachedDisk
 */
const de_AttachedDisk = (output: any, context: __SerdeContext): AttachedDisk => {
  return {
    path: __expectString(output.path),
    sizeInGb: __expectInt32(output.sizeInGb),
  } as any;
};

/**
 * deserializeAws_json1_1AttachedDiskList
 */
const de_AttachedDiskList = (output: any, context: __SerdeContext): AttachedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttachedDisk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttachInstancesToLoadBalancerResult
 */
const de_AttachInstancesToLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): AttachInstancesToLoadBalancerResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult
 */
const de_AttachLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTlsCertificateResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttachStaticIpResult
 */
const de_AttachStaticIpResult = (output: any, context: __SerdeContext): AttachStaticIpResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoSnapshotDetails
 */
const de_AutoSnapshotDetails = (output: any, context: __SerdeContext): AutoSnapshotDetails => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    date: __expectString(output.date),
    fromAttachedDisks:
      output.fromAttachedDisks != null ? de_AttachedDiskList(output.fromAttachedDisks, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1AutoSnapshotDetailsList
 */
const de_AutoSnapshotDetailsList = (output: any, context: __SerdeContext): AutoSnapshotDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutoSnapshotDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    state: __expectString(output.state),
    zoneName: __expectString(output.zoneName),
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityZoneList
 */
const de_AvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AvailabilityZone(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Blueprint
 */
const de_Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return {
    appCategory: __expectString(output.appCategory),
    blueprintId: __expectString(output.blueprintId),
    description: __expectString(output.description),
    group: __expectString(output.group),
    isActive: __expectBoolean(output.isActive),
    licenseUrl: __expectString(output.licenseUrl),
    minPower: __expectInt32(output.minPower),
    name: __expectString(output.name),
    platform: __expectString(output.platform),
    productUrl: __expectString(output.productUrl),
    type: __expectString(output.type),
    version: __expectString(output.version),
    versionCode: __expectString(output.versionCode),
  } as any;
};

/**
 * deserializeAws_json1_1BlueprintList
 */
const de_BlueprintList = (output: any, context: __SerdeContext): Blueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Blueprint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Bucket
 */
const de_Bucket = (output: any, context: __SerdeContext): Bucket => {
  return {
    ableToUpdateBundle: __expectBoolean(output.ableToUpdateBundle),
    accessLogConfig:
      output.accessLogConfig != null ? de_BucketAccessLogConfig(output.accessLogConfig, context) : undefined,
    accessRules: output.accessRules != null ? de_AccessRules(output.accessRules, context) : undefined,
    arn: __expectString(output.arn),
    bundleId: __expectString(output.bundleId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    objectVersioning: __expectString(output.objectVersioning),
    readonlyAccessAccounts:
      output.readonlyAccessAccounts != null ? de_PartnerIdList(output.readonlyAccessAccounts, context) : undefined,
    resourceType: __expectString(output.resourceType),
    resourcesReceivingAccess:
      output.resourcesReceivingAccess != null
        ? de_AccessReceiverList(output.resourcesReceivingAccess, context)
        : undefined,
    state: output.state != null ? de_BucketState(output.state, context) : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1BucketAccessLogConfig
 */
const de_BucketAccessLogConfig = (output: any, context: __SerdeContext): BucketAccessLogConfig => {
  return {
    destination: __expectString(output.destination),
    enabled: __expectBoolean(output.enabled),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_json1_1BucketBundle
 */
const de_BucketBundle = (output: any, context: __SerdeContext): BucketBundle => {
  return {
    bundleId: __expectString(output.bundleId),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    price: __limitedParseFloat32(output.price),
    storagePerMonthInGb: __expectInt32(output.storagePerMonthInGb),
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

/**
 * deserializeAws_json1_1BucketBundleList
 */
const de_BucketBundleList = (output: any, context: __SerdeContext): BucketBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BucketBundle(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BucketList
 */
const de_BucketList = (output: any, context: __SerdeContext): Bucket[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Bucket(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BucketState
 */
const de_BucketState = (output: any, context: __SerdeContext): BucketState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Bundle
 */
const de_Bundle = (output: any, context: __SerdeContext): Bundle => {
  return {
    bundleId: __expectString(output.bundleId),
    cpuCount: __expectInt32(output.cpuCount),
    diskSizeInGb: __expectInt32(output.diskSizeInGb),
    instanceType: __expectString(output.instanceType),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    power: __expectInt32(output.power),
    price: __limitedParseFloat32(output.price),
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
    supportedAppCategories:
      output.supportedAppCategories != null ? de_AppCategoryList(output.supportedAppCategories, context) : undefined,
    supportedPlatforms:
      output.supportedPlatforms != null ? de_InstancePlatformList(output.supportedPlatforms, context) : undefined,
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

/**
 * deserializeAws_json1_1BundleList
 */
const de_BundleList = (output: any, context: __SerdeContext): Bundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Bundle(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CacheBehavior
 */
const de_CacheBehavior = (output: any, context: __SerdeContext): CacheBehavior => {
  return {
    behavior: __expectString(output.behavior),
  } as any;
};

/**
 * deserializeAws_json1_1CacheBehaviorList
 */
const de_CacheBehaviorList = (output: any, context: __SerdeContext): CacheBehaviorPerPath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CacheBehaviorPerPath(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CacheBehaviorPerPath
 */
const de_CacheBehaviorPerPath = (output: any, context: __SerdeContext): CacheBehaviorPerPath => {
  return {
    behavior: __expectString(output.behavior),
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_json1_1CacheSettings
 */
const de_CacheSettings = (output: any, context: __SerdeContext): CacheSettings => {
  return {
    allowedHTTPMethods: __expectString(output.allowedHTTPMethods),
    cachedHTTPMethods: __expectString(output.cachedHTTPMethods),
    defaultTTL: __expectLong(output.defaultTTL),
    forwardedCookies: output.forwardedCookies != null ? de_CookieObject(output.forwardedCookies, context) : undefined,
    forwardedHeaders: output.forwardedHeaders != null ? de_HeaderObject(output.forwardedHeaders, context) : undefined,
    forwardedQueryStrings:
      output.forwardedQueryStrings != null ? de_QueryStringObject(output.forwardedQueryStrings, context) : undefined,
    maximumTTL: __expectLong(output.maximumTTL),
    minimumTTL: __expectLong(output.minimumTTL),
  } as any;
};

/**
 * deserializeAws_json1_1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    domainName: __expectString(output.domainName),
    domainValidationRecords:
      output.domainValidationRecords != null
        ? de_DomainValidationRecordList(output.domainValidationRecords, context)
        : undefined,
    eligibleToRenew: __expectString(output.eligibleToRenew),
    inUseResourceCount: __expectInt32(output.inUseResourceCount),
    issuedAt:
      output.issuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.issuedAt))) : undefined,
    issuerCA: __expectString(output.issuerCA),
    keyAlgorithm: __expectString(output.keyAlgorithm),
    name: __expectString(output.name),
    notAfter:
      output.notAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notAfter))) : undefined,
    notBefore:
      output.notBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notBefore))) : undefined,
    renewalSummary: output.renewalSummary != null ? de_RenewalSummary(output.renewalSummary, context) : undefined,
    requestFailureReason: __expectString(output.requestFailureReason),
    revocationReason: __expectString(output.revocationReason),
    revokedAt:
      output.revokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revokedAt))) : undefined,
    serialNumber: __expectString(output.serialNumber),
    status: __expectString(output.status),
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? de_SubjectAlternativeNameList(output.subjectAlternativeNames, context)
        : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CertificateSummary
 */
const de_CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return {
    certificateArn: __expectString(output.certificateArn),
    certificateDetail: output.certificateDetail != null ? de_Certificate(output.certificateDetail, context) : undefined,
    certificateName: __expectString(output.certificateName),
    domainName: __expectString(output.domainName),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CertificateSummaryList
 */
const de_CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CloseInstancePublicPortsResult
 */
const de_CloseInstancePublicPortsResult = (output: any, context: __SerdeContext): CloseInstancePublicPortsResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CloudFormationStackRecord
 */
const de_CloudFormationStackRecord = (output: any, context: __SerdeContext): CloudFormationStackRecord => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    destinationInfo: output.destinationInfo != null ? de_DestinationInfo(output.destinationInfo, context) : undefined,
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    sourceInfo:
      output.sourceInfo != null ? de_CloudFormationStackRecordSourceInfoList(output.sourceInfo, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_json1_1CloudFormationStackRecordList
 */
const de_CloudFormationStackRecordList = (output: any, context: __SerdeContext): CloudFormationStackRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudFormationStackRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CloudFormationStackRecordSourceInfo
 */
const de_CloudFormationStackRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1CloudFormationStackRecordSourceInfoList
 */
const de_CloudFormationStackRecordSourceInfoList = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudFormationStackRecordSourceInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContactMethod
 */
const de_ContactMethod = (output: any, context: __SerdeContext): ContactMethod => {
  return {
    arn: __expectString(output.arn),
    contactEndpoint: __expectString(output.contactEndpoint),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    protocol: __expectString(output.protocol),
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    supportCode: __expectString(output.supportCode),
  } as any;
};

/**
 * deserializeAws_json1_1ContactMethodsList
 */
const de_ContactMethodsList = (output: any, context: __SerdeContext): ContactMethod[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactMethod(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContactProtocolsList
 */
const de_ContactProtocolsList = (output: any, context: __SerdeContext): (ContactProtocol | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return {
    command: output.command != null ? de_StringList(output.command, context) : undefined,
    environment: output.environment != null ? de_Environment(output.environment, context) : undefined,
    image: __expectString(output.image),
    ports: output.ports != null ? de_PortMap(output.ports, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContainerImage
 */
const de_ContainerImage = (output: any, context: __SerdeContext): ContainerImage => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    digest: __expectString(output.digest),
    image: __expectString(output.image),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerImageList
 */
const de_ContainerImageList = (output: any, context: __SerdeContext): ContainerImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerMap
 */
const de_ContainerMap = (output: any, context: __SerdeContext): Record<string, Container> => {
  return Object.entries(output).reduce((acc: Record<string, Container>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Container(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ContainerService
 */
const de_ContainerService = (output: any, context: __SerdeContext): ContainerService => {
  return {
    arn: __expectString(output.arn),
    containerServiceName: __expectString(output.containerServiceName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    currentDeployment:
      output.currentDeployment != null ? de_ContainerServiceDeployment(output.currentDeployment, context) : undefined,
    isDisabled: __expectBoolean(output.isDisabled),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    nextDeployment:
      output.nextDeployment != null ? de_ContainerServiceDeployment(output.nextDeployment, context) : undefined,
    power: __expectString(output.power),
    powerId: __expectString(output.powerId),
    principalArn: __expectString(output.principalArn),
    privateDomainName: __expectString(output.privateDomainName),
    privateRegistryAccess:
      output.privateRegistryAccess != null
        ? de_PrivateRegistryAccess(output.privateRegistryAccess, context)
        : undefined,
    publicDomainNames:
      output.publicDomainNames != null
        ? de_ContainerServicePublicDomains(output.publicDomainNames, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    scale: __expectInt32(output.scale),
    state: __expectString(output.state),
    stateDetail: output.stateDetail != null ? de_ContainerServiceStateDetail(output.stateDetail, context) : undefined,
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceDeployment
 */
const de_ContainerServiceDeployment = (output: any, context: __SerdeContext): ContainerServiceDeployment => {
  return {
    containers: output.containers != null ? de_ContainerMap(output.containers, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    publicEndpoint:
      output.publicEndpoint != null ? de_ContainerServiceEndpoint(output.publicEndpoint, context) : undefined,
    state: __expectString(output.state),
    version: __expectInt32(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceDeploymentList
 */
const de_ContainerServiceDeploymentList = (output: any, context: __SerdeContext): ContainerServiceDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerServiceDeployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServiceECRImagePullerRole
 */
const de_ContainerServiceECRImagePullerRole = (
  output: any,
  context: __SerdeContext
): ContainerServiceECRImagePullerRole => {
  return {
    isActive: __expectBoolean(output.isActive),
    principalArn: __expectString(output.principalArn),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceEndpoint
 */
const de_ContainerServiceEndpoint = (output: any, context: __SerdeContext): ContainerServiceEndpoint => {
  return {
    containerName: __expectString(output.containerName),
    containerPort: __expectInt32(output.containerPort),
    healthCheck:
      output.healthCheck != null ? de_ContainerServiceHealthCheckConfig(output.healthCheck, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceHealthCheckConfig
 */
const de_ContainerServiceHealthCheckConfig = (
  output: any,
  context: __SerdeContext
): ContainerServiceHealthCheckConfig => {
  return {
    healthyThreshold: __expectInt32(output.healthyThreshold),
    intervalSeconds: __expectInt32(output.intervalSeconds),
    path: __expectString(output.path),
    successCodes: __expectString(output.successCodes),
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
    unhealthyThreshold: __expectInt32(output.unhealthyThreshold),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceList
 */
const de_ContainerServiceList = (output: any, context: __SerdeContext): ContainerService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServiceLogEvent
 */
const de_ContainerServiceLogEvent = (output: any, context: __SerdeContext): ContainerServiceLogEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceLogEventList
 */
const de_ContainerServiceLogEventList = (output: any, context: __SerdeContext): ContainerServiceLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerServiceLogEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServiceMetadataEntry
 */
const de_ContainerServiceMetadataEntry = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ContainerServiceMetadataEntryList
 */
const de_ContainerServiceMetadataEntryList = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerServiceMetadataEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServicePower
 */
const de_ContainerServicePower = (output: any, context: __SerdeContext): ContainerServicePower => {
  return {
    cpuCount: __limitedParseFloat32(output.cpuCount),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    powerId: __expectString(output.powerId),
    price: __limitedParseFloat32(output.price),
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServicePowerList
 */
const de_ContainerServicePowerList = (output: any, context: __SerdeContext): ContainerServicePower[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerServicePower(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServicePublicDomains
 */
const de_ContainerServicePublicDomains = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ContainerServicePublicDomainsList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ContainerServicePublicDomainsList
 */
const de_ContainerServicePublicDomainsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServiceRegistryLogin
 */
const de_ContainerServiceRegistryLogin = (output: any, context: __SerdeContext): ContainerServiceRegistryLogin => {
  return {
    expiresAt:
      output.expiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiresAt))) : undefined,
    password: __expectString(output.password),
    registry: __expectString(output.registry),
    username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServicesListResult
 */
const de_ContainerServicesListResult = (output: any, context: __SerdeContext): ContainerServicesListResult => {
  return {
    containerServices:
      output.containerServices != null ? de_ContainerServiceList(output.containerServices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContainerServiceStateDetail
 */
const de_ContainerServiceStateDetail = (output: any, context: __SerdeContext): ContainerServiceStateDetail => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CookieObject
 */
const de_CookieObject = (output: any, context: __SerdeContext): CookieObject => {
  return {
    cookiesAllowList: output.cookiesAllowList != null ? de_StringList(output.cookiesAllowList, context) : undefined,
    option: __expectString(output.option),
  } as any;
};

/**
 * deserializeAws_json1_1CopySnapshotResult
 */
const de_CopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostEstimate
 */
const de_CostEstimate = (output: any, context: __SerdeContext): CostEstimate => {
  return {
    resultsByTime: output.resultsByTime != null ? de_EstimatesByTime(output.resultsByTime, context) : undefined,
    usageType: __expectString(output.usageType),
  } as any;
};

/**
 * deserializeAws_json1_1CostEstimates
 */
const de_CostEstimates = (output: any, context: __SerdeContext): CostEstimate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostEstimate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateBucketAccessKeyResult
 */
const de_CreateBucketAccessKeyResult = (output: any, context: __SerdeContext): CreateBucketAccessKeyResult => {
  return {
    accessKey: output.accessKey != null ? de_AccessKey(output.accessKey, context) : undefined,
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateBucketResult
 */
const de_CreateBucketResult = (output: any, context: __SerdeContext): CreateBucketResult => {
  return {
    bucket: output.bucket != null ? de_Bucket(output.bucket, context) : undefined,
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateCertificateResult
 */
const de_CreateCertificateResult = (output: any, context: __SerdeContext): CreateCertificateResult => {
  return {
    certificate: output.certificate != null ? de_CertificateSummary(output.certificate, context) : undefined,
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateCloudFormationStackResult
 */
const de_CreateCloudFormationStackResult = (output: any, context: __SerdeContext): CreateCloudFormationStackResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateContactMethodResult
 */
const de_CreateContactMethodResult = (output: any, context: __SerdeContext): CreateContactMethodResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateContainerServiceDeploymentResult
 */
const de_CreateContainerServiceDeploymentResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceDeploymentResult => {
  return {
    containerService:
      output.containerService != null ? de_ContainerService(output.containerService, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateContainerServiceRegistryLoginResult
 */
const de_CreateContainerServiceRegistryLoginResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceRegistryLoginResult => {
  return {
    registryLogin:
      output.registryLogin != null ? de_ContainerServiceRegistryLogin(output.registryLogin, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateContainerServiceResult
 */
const de_CreateContainerServiceResult = (output: any, context: __SerdeContext): CreateContainerServiceResult => {
  return {
    containerService:
      output.containerService != null ? de_ContainerService(output.containerService, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDiskFromSnapshotResult
 */
const de_CreateDiskFromSnapshotResult = (output: any, context: __SerdeContext): CreateDiskFromSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDiskResult
 */
const de_CreateDiskResult = (output: any, context: __SerdeContext): CreateDiskResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDiskSnapshotResult
 */
const de_CreateDiskSnapshotResult = (output: any, context: __SerdeContext): CreateDiskSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDistributionResult
 */
const de_CreateDistributionResult = (output: any, context: __SerdeContext): CreateDistributionResult => {
  return {
    distribution: output.distribution != null ? de_LightsailDistribution(output.distribution, context) : undefined,
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDomainEntryResult
 */
const de_CreateDomainEntryResult = (output: any, context: __SerdeContext): CreateDomainEntryResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDomainResult
 */
const de_CreateDomainResult = (output: any, context: __SerdeContext): CreateDomainResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateGUISessionAccessDetailsResult
 */
const de_CreateGUISessionAccessDetailsResult = (
  output: any,
  context: __SerdeContext
): CreateGUISessionAccessDetailsResult => {
  return {
    failureReason: __expectString(output.failureReason),
    percentageComplete: __expectInt32(output.percentageComplete),
    resourceName: __expectString(output.resourceName),
    sessions: output.sessions != null ? de_Sessions(output.sessions, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1CreateInstancesFromSnapshotResult
 */
const de_CreateInstancesFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstancesFromSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateInstanceSnapshotResult
 */
const de_CreateInstanceSnapshotResult = (output: any, context: __SerdeContext): CreateInstanceSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateInstancesResult
 */
const de_CreateInstancesResult = (output: any, context: __SerdeContext): CreateInstancesResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateKeyPairResult
 */
const de_CreateKeyPairResult = (output: any, context: __SerdeContext): CreateKeyPairResult => {
  return {
    keyPair: output.keyPair != null ? de_KeyPair(output.keyPair, context) : undefined,
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
    privateKeyBase64: __expectString(output.privateKeyBase64),
    publicKeyBase64: __expectString(output.publicKeyBase64),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLoadBalancerResult
 */
const de_CreateLoadBalancerResult = (output: any, context: __SerdeContext): CreateLoadBalancerResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult
 */
const de_CreateLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerTlsCertificateResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult
 */
const de_CreateRelationalDatabaseFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseFromSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseResult
 */
const de_CreateRelationalDatabaseResult = (output: any, context: __SerdeContext): CreateRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult
 */
const de_CreateRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAlarmResult
 */
const de_DeleteAlarmResult = (output: any, context: __SerdeContext): DeleteAlarmResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAutoSnapshotResult
 */
const de_DeleteAutoSnapshotResult = (output: any, context: __SerdeContext): DeleteAutoSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBucketAccessKeyResult
 */
const de_DeleteBucketAccessKeyResult = (output: any, context: __SerdeContext): DeleteBucketAccessKeyResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBucketResult
 */
const de_DeleteBucketResult = (output: any, context: __SerdeContext): DeleteBucketResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCertificateResult
 */
const de_DeleteCertificateResult = (output: any, context: __SerdeContext): DeleteCertificateResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteContactMethodResult
 */
const de_DeleteContactMethodResult = (output: any, context: __SerdeContext): DeleteContactMethodResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteContainerImageResult
 */
const de_DeleteContainerImageResult = (output: any, context: __SerdeContext): DeleteContainerImageResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteContainerServiceResult
 */
const de_DeleteContainerServiceResult = (output: any, context: __SerdeContext): DeleteContainerServiceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDiskResult
 */
const de_DeleteDiskResult = (output: any, context: __SerdeContext): DeleteDiskResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDiskSnapshotResult
 */
const de_DeleteDiskSnapshotResult = (output: any, context: __SerdeContext): DeleteDiskSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDistributionResult
 */
const de_DeleteDistributionResult = (output: any, context: __SerdeContext): DeleteDistributionResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDomainEntryResult
 */
const de_DeleteDomainEntryResult = (output: any, context: __SerdeContext): DeleteDomainEntryResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDomainResult
 */
const de_DeleteDomainResult = (output: any, context: __SerdeContext): DeleteDomainResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteInstanceResult
 */
const de_DeleteInstanceResult = (output: any, context: __SerdeContext): DeleteInstanceResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteInstanceSnapshotResult
 */
const de_DeleteInstanceSnapshotResult = (output: any, context: __SerdeContext): DeleteInstanceSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteKeyPairResult
 */
const de_DeleteKeyPairResult = (output: any, context: __SerdeContext): DeleteKeyPairResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteKnownHostKeysResult
 */
const de_DeleteKnownHostKeysResult = (output: any, context: __SerdeContext): DeleteKnownHostKeysResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerResult
 */
const de_DeleteLoadBalancerResult = (output: any, context: __SerdeContext): DeleteLoadBalancerResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult
 */
const de_DeleteLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerTlsCertificateResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseResult
 */
const de_DeleteRelationalDatabaseResult = (output: any, context: __SerdeContext): DeleteRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult
 */
const de_DeleteRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationInfo
 */
const de_DestinationInfo = (output: any, context: __SerdeContext): DestinationInfo => {
  return {
    id: __expectString(output.id),
    service: __expectString(output.service),
  } as any;
};

/**
 * deserializeAws_json1_1DetachCertificateFromDistributionResult
 */
const de_DetachCertificateFromDistributionResult = (
  output: any,
  context: __SerdeContext
): DetachCertificateFromDistributionResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetachDiskResult
 */
const de_DetachDiskResult = (output: any, context: __SerdeContext): DetachDiskResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetachInstancesFromLoadBalancerResult
 */
const de_DetachInstancesFromLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DetachInstancesFromLoadBalancerResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetachStaticIpResult
 */
const de_DetachStaticIpResult = (output: any, context: __SerdeContext): DetachStaticIpResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisableAddOnResult
 */
const de_DisableAddOnResult = (output: any, context: __SerdeContext): DisableAddOnResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Disk
 */
const de_Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    addOns: output.addOns != null ? de_AddOnList(output.addOns, context) : undefined,
    arn: __expectString(output.arn),
    attachedTo: __expectString(output.attachedTo),
    attachmentState: __expectString(output.attachmentState),
    autoMountStatus: __expectString(output.autoMountStatus),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    gbInUse: __expectInt32(output.gbInUse),
    iops: __expectInt32(output.iops),
    isAttached: __expectBoolean(output.isAttached),
    isSystemDisk: __expectBoolean(output.isSystemDisk),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    path: __expectString(output.path),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DiskInfo
 */
const de_DiskInfo = (output: any, context: __SerdeContext): DiskInfo => {
  return {
    isSystemDisk: __expectBoolean(output.isSystemDisk),
    name: __expectString(output.name),
    path: __expectString(output.path),
    sizeInGb: __expectInt32(output.sizeInGb),
  } as any;
};

/**
 * deserializeAws_json1_1DiskInfoList
 */
const de_DiskInfoList = (output: any, context: __SerdeContext): DiskInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DiskInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DiskList
 */
const de_DiskList = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Disk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DiskSnapshot
 */
const de_DiskSnapshot = (output: any, context: __SerdeContext): DiskSnapshot => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fromDiskArn: __expectString(output.fromDiskArn),
    fromDiskName: __expectString(output.fromDiskName),
    fromInstanceArn: __expectString(output.fromInstanceArn),
    fromInstanceName: __expectString(output.fromInstanceName),
    isFromAutoSnapshot: __expectBoolean(output.isFromAutoSnapshot),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    progress: __expectString(output.progress),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DiskSnapshotInfo
 */
const de_DiskSnapshotInfo = (output: any, context: __SerdeContext): DiskSnapshotInfo => {
  return {
    sizeInGb: __expectInt32(output.sizeInGb),
  } as any;
};

/**
 * deserializeAws_json1_1DiskSnapshotList
 */
const de_DiskSnapshotList = (output: any, context: __SerdeContext): DiskSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DiskSnapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DistributionBundle
 */
const de_DistributionBundle = (output: any, context: __SerdeContext): DistributionBundle => {
  return {
    bundleId: __expectString(output.bundleId),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    price: __limitedParseFloat32(output.price),
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

/**
 * deserializeAws_json1_1DistributionBundleList
 */
const de_DistributionBundleList = (output: any, context: __SerdeContext): DistributionBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DistributionBundle(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DistributionList
 */
const de_DistributionList = (output: any, context: __SerdeContext): LightsailDistribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LightsailDistribution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DnsRecordCreationState
 */
const de_DnsRecordCreationState = (output: any, context: __SerdeContext): DnsRecordCreationState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Domain
 */
const de_Domain = (output: any, context: __SerdeContext): Domain => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    domainEntries: output.domainEntries != null ? de_DomainEntryList(output.domainEntries, context) : undefined,
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    registeredDomainDelegationInfo:
      output.registeredDomainDelegationInfo != null
        ? de_RegisteredDomainDelegationInfo(output.registeredDomainDelegationInfo, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DomainEntry
 */
const de_DomainEntry = (output: any, context: __SerdeContext): DomainEntry => {
  return {
    id: __expectString(output.id),
    isAlias: __expectBoolean(output.isAlias),
    name: __expectString(output.name),
    options: output.options != null ? de_DomainEntryOptions(output.options, context) : undefined,
    target: __expectString(output.target),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1DomainEntryList
 */
const de_DomainEntryList = (output: any, context: __SerdeContext): DomainEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainEntryOptions
 */
const de_DomainEntryOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): Domain[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Domain(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainValidationRecord
 */
const de_DomainValidationRecord = (output: any, context: __SerdeContext): DomainValidationRecord => {
  return {
    dnsRecordCreationState:
      output.dnsRecordCreationState != null
        ? de_DnsRecordCreationState(output.dnsRecordCreationState, context)
        : undefined,
    domainName: __expectString(output.domainName),
    resourceRecord: output.resourceRecord != null ? de_ResourceRecord(output.resourceRecord, context) : undefined,
    validationStatus: __expectString(output.validationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DomainValidationRecordList
 */
const de_DomainValidationRecordList = (output: any, context: __SerdeContext): DomainValidationRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainValidationRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DownloadDefaultKeyPairResult
 */
const de_DownloadDefaultKeyPairResult = (output: any, context: __SerdeContext): DownloadDefaultKeyPairResult => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    privateKeyBase64: __expectString(output.privateKeyBase64),
    publicKeyBase64: __expectString(output.publicKeyBase64),
  } as any;
};

/**
 * deserializeAws_json1_1EnableAddOnResult
 */
const de_EnableAddOnResult = (output: any, context: __SerdeContext): EnableAddOnResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1EstimateByTime
 */
const de_EstimateByTime = (output: any, context: __SerdeContext): EstimateByTime => {
  return {
    currency: __expectString(output.currency),
    pricingUnit: __expectString(output.pricingUnit),
    timePeriod: output.timePeriod != null ? de_TimePeriod(output.timePeriod, context) : undefined,
    unit: __limitedParseDouble(output.unit),
    usageCost: __limitedParseDouble(output.usageCost),
  } as any;
};

/**
 * deserializeAws_json1_1EstimatesByTime
 */
const de_EstimatesByTime = (output: any, context: __SerdeContext): EstimateByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EstimateByTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportSnapshotRecord
 */
const de_ExportSnapshotRecord = (output: any, context: __SerdeContext): ExportSnapshotRecord => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    destinationInfo: output.destinationInfo != null ? de_DestinationInfo(output.destinationInfo, context) : undefined,
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    sourceInfo: output.sourceInfo != null ? de_ExportSnapshotRecordSourceInfo(output.sourceInfo, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_json1_1ExportSnapshotRecordList
 */
const de_ExportSnapshotRecordList = (output: any, context: __SerdeContext): ExportSnapshotRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportSnapshotRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportSnapshotRecordSourceInfo
 */
const de_ExportSnapshotRecordSourceInfo = (output: any, context: __SerdeContext): ExportSnapshotRecordSourceInfo => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    diskSnapshotInfo:
      output.diskSnapshotInfo != null ? de_DiskSnapshotInfo(output.diskSnapshotInfo, context) : undefined,
    fromResourceArn: __expectString(output.fromResourceArn),
    fromResourceName: __expectString(output.fromResourceName),
    instanceSnapshotInfo:
      output.instanceSnapshotInfo != null ? de_InstanceSnapshotInfo(output.instanceSnapshotInfo, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ExportSnapshotResult
 */
const de_ExportSnapshotResult = (output: any, context: __SerdeContext): ExportSnapshotResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetActiveNamesResult
 */
const de_GetActiveNamesResult = (output: any, context: __SerdeContext): GetActiveNamesResult => {
  return {
    activeNames: output.activeNames != null ? de_StringList(output.activeNames, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAlarmsResult
 */
const de_GetAlarmsResult = (output: any, context: __SerdeContext): GetAlarmsResult => {
  return {
    alarms: output.alarms != null ? de_AlarmsList(output.alarms, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAutoSnapshotsResult
 */
const de_GetAutoSnapshotsResult = (output: any, context: __SerdeContext): GetAutoSnapshotsResult => {
  return {
    autoSnapshots: output.autoSnapshots != null ? de_AutoSnapshotDetailsList(output.autoSnapshots, context) : undefined,
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1GetBlueprintsResult
 */
const de_GetBlueprintsResult = (output: any, context: __SerdeContext): GetBlueprintsResult => {
  return {
    blueprints: output.blueprints != null ? de_BlueprintList(output.blueprints, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetBucketAccessKeysResult
 */
const de_GetBucketAccessKeysResult = (output: any, context: __SerdeContext): GetBucketAccessKeysResult => {
  return {
    accessKeys: output.accessKeys != null ? de_AccessKeyList(output.accessKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetBucketBundlesResult
 */
const de_GetBucketBundlesResult = (output: any, context: __SerdeContext): GetBucketBundlesResult => {
  return {
    bundles: output.bundles != null ? de_BucketBundleList(output.bundles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetBucketMetricDataResult
 */
const de_GetBucketMetricDataResult = (output: any, context: __SerdeContext): GetBucketMetricDataResult => {
  return {
    metricData: output.metricData != null ? de_MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1GetBucketsResult
 */
const de_GetBucketsResult = (output: any, context: __SerdeContext): GetBucketsResult => {
  return {
    accountLevelBpaSync:
      output.accountLevelBpaSync != null ? de_AccountLevelBpaSync(output.accountLevelBpaSync, context) : undefined,
    buckets: output.buckets != null ? de_BucketList(output.buckets, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetBundlesResult
 */
const de_GetBundlesResult = (output: any, context: __SerdeContext): GetBundlesResult => {
  return {
    bundles: output.bundles != null ? de_BundleList(output.bundles, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetCertificatesResult
 */
const de_GetCertificatesResult = (output: any, context: __SerdeContext): GetCertificatesResult => {
  return {
    certificates: output.certificates != null ? de_CertificateSummaryList(output.certificates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCloudFormationStackRecordsResult
 */
const de_GetCloudFormationStackRecordsResult = (
  output: any,
  context: __SerdeContext
): GetCloudFormationStackRecordsResult => {
  return {
    cloudFormationStackRecords:
      output.cloudFormationStackRecords != null
        ? de_CloudFormationStackRecordList(output.cloudFormationStackRecords, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetContactMethodsResult
 */
const de_GetContactMethodsResult = (output: any, context: __SerdeContext): GetContactMethodsResult => {
  return {
    contactMethods: output.contactMethods != null ? de_ContactMethodsList(output.contactMethods, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetContainerAPIMetadataResult
 */
const de_GetContainerAPIMetadataResult = (output: any, context: __SerdeContext): GetContainerAPIMetadataResult => {
  return {
    metadata: output.metadata != null ? de_ContainerServiceMetadataEntryList(output.metadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetContainerImagesResult
 */
const de_GetContainerImagesResult = (output: any, context: __SerdeContext): GetContainerImagesResult => {
  return {
    containerImages:
      output.containerImages != null ? de_ContainerImageList(output.containerImages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetContainerLogResult
 */
const de_GetContainerLogResult = (output: any, context: __SerdeContext): GetContainerLogResult => {
  return {
    logEvents: output.logEvents != null ? de_ContainerServiceLogEventList(output.logEvents, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetContainerServiceDeploymentsResult
 */
const de_GetContainerServiceDeploymentsResult = (
  output: any,
  context: __SerdeContext
): GetContainerServiceDeploymentsResult => {
  return {
    deployments:
      output.deployments != null ? de_ContainerServiceDeploymentList(output.deployments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetContainerServiceMetricDataResult
 */
const de_GetContainerServiceMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetContainerServiceMetricDataResult => {
  return {
    metricData: output.metricData != null ? de_MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1GetContainerServicePowersResult
 */
const de_GetContainerServicePowersResult = (output: any, context: __SerdeContext): GetContainerServicePowersResult => {
  return {
    powers: output.powers != null ? de_ContainerServicePowerList(output.powers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCostEstimateResult
 */
const de_GetCostEstimateResult = (output: any, context: __SerdeContext): GetCostEstimateResult => {
  return {
    resourcesBudgetEstimate:
      output.resourcesBudgetEstimate != null
        ? de_ResourcesBudgetEstimate(output.resourcesBudgetEstimate, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDiskResult
 */
const de_GetDiskResult = (output: any, context: __SerdeContext): GetDiskResult => {
  return {
    disk: output.disk != null ? de_Disk(output.disk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDiskSnapshotResult
 */
const de_GetDiskSnapshotResult = (output: any, context: __SerdeContext): GetDiskSnapshotResult => {
  return {
    diskSnapshot: output.diskSnapshot != null ? de_DiskSnapshot(output.diskSnapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDiskSnapshotsResult
 */
const de_GetDiskSnapshotsResult = (output: any, context: __SerdeContext): GetDiskSnapshotsResult => {
  return {
    diskSnapshots: output.diskSnapshots != null ? de_DiskSnapshotList(output.diskSnapshots, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetDisksResult
 */
const de_GetDisksResult = (output: any, context: __SerdeContext): GetDisksResult => {
  return {
    disks: output.disks != null ? de_DiskList(output.disks, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetDistributionBundlesResult
 */
const de_GetDistributionBundlesResult = (output: any, context: __SerdeContext): GetDistributionBundlesResult => {
  return {
    bundles: output.bundles != null ? de_DistributionBundleList(output.bundles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDistributionLatestCacheResetResult
 */
const de_GetDistributionLatestCacheResetResult = (
  output: any,
  context: __SerdeContext
): GetDistributionLatestCacheResetResult => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1GetDistributionMetricDataResult
 */
const de_GetDistributionMetricDataResult = (output: any, context: __SerdeContext): GetDistributionMetricDataResult => {
  return {
    metricData: output.metricData != null ? de_MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1GetDistributionsResult
 */
const de_GetDistributionsResult = (output: any, context: __SerdeContext): GetDistributionsResult => {
  return {
    distributions: output.distributions != null ? de_DistributionList(output.distributions, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetDomainResult
 */
const de_GetDomainResult = (output: any, context: __SerdeContext): GetDomainResult => {
  return {
    domain: output.domain != null ? de_Domain(output.domain, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDomainsResult
 */
const de_GetDomainsResult = (output: any, context: __SerdeContext): GetDomainsResult => {
  return {
    domains: output.domains != null ? de_DomainList(output.domains, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetExportSnapshotRecordsResult
 */
const de_GetExportSnapshotRecordsResult = (output: any, context: __SerdeContext): GetExportSnapshotRecordsResult => {
  return {
    exportSnapshotRecords:
      output.exportSnapshotRecords != null
        ? de_ExportSnapshotRecordList(output.exportSnapshotRecords, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceAccessDetailsResult
 */
const de_GetInstanceAccessDetailsResult = (output: any, context: __SerdeContext): GetInstanceAccessDetailsResult => {
  return {
    accessDetails: output.accessDetails != null ? de_InstanceAccessDetails(output.accessDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceMetricDataResult
 */
const de_GetInstanceMetricDataResult = (output: any, context: __SerdeContext): GetInstanceMetricDataResult => {
  return {
    metricData: output.metricData != null ? de_MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1GetInstancePortStatesResult
 */
const de_GetInstancePortStatesResult = (output: any, context: __SerdeContext): GetInstancePortStatesResult => {
  return {
    portStates: output.portStates != null ? de_InstancePortStateList(output.portStates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceResult
 */
const de_GetInstanceResult = (output: any, context: __SerdeContext): GetInstanceResult => {
  return {
    instance: output.instance != null ? de_Instance(output.instance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotResult
 */
const de_GetInstanceSnapshotResult = (output: any, context: __SerdeContext): GetInstanceSnapshotResult => {
  return {
    instanceSnapshot:
      output.instanceSnapshot != null ? de_InstanceSnapshot(output.instanceSnapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotsResult
 */
const de_GetInstanceSnapshotsResult = (output: any, context: __SerdeContext): GetInstanceSnapshotsResult => {
  return {
    instanceSnapshots:
      output.instanceSnapshots != null ? de_InstanceSnapshotList(output.instanceSnapshots, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetInstancesResult
 */
const de_GetInstancesResult = (output: any, context: __SerdeContext): GetInstancesResult => {
  return {
    instances: output.instances != null ? de_InstanceList(output.instances, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceStateResult
 */
const de_GetInstanceStateResult = (output: any, context: __SerdeContext): GetInstanceStateResult => {
  return {
    state: output.state != null ? de_InstanceState(output.state, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetKeyPairResult
 */
const de_GetKeyPairResult = (output: any, context: __SerdeContext): GetKeyPairResult => {
  return {
    keyPair: output.keyPair != null ? de_KeyPair(output.keyPair, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetKeyPairsResult
 */
const de_GetKeyPairsResult = (output: any, context: __SerdeContext): GetKeyPairsResult => {
  return {
    keyPairs: output.keyPairs != null ? de_KeyPairList(output.keyPairs, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerMetricDataResult
 */
const de_GetLoadBalancerMetricDataResult = (output: any, context: __SerdeContext): GetLoadBalancerMetricDataResult => {
  return {
    metricData: output.metricData != null ? de_MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerResult
 */
const de_GetLoadBalancerResult = (output: any, context: __SerdeContext): GetLoadBalancerResult => {
  return {
    loadBalancer: output.loadBalancer != null ? de_LoadBalancer(output.loadBalancer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancersResult
 */
const de_GetLoadBalancersResult = (output: any, context: __SerdeContext): GetLoadBalancersResult => {
  return {
    loadBalancers: output.loadBalancers != null ? de_LoadBalancerList(output.loadBalancers, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult
 */
const de_GetLoadBalancerTlsCertificatesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsCertificatesResult => {
  return {
    tlsCertificates:
      output.tlsCertificates != null ? de_LoadBalancerTlsCertificateList(output.tlsCertificates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsPoliciesResult
 */
const de_GetLoadBalancerTlsPoliciesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsPoliciesResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    tlsPolicies: output.tlsPolicies != null ? de_LoadBalancerTlsPolicyList(output.tlsPolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOperationResult
 */
const de_GetOperationResult = (output: any, context: __SerdeContext): GetOperationResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOperationsForResourceResult
 */
const de_GetOperationsForResourceResult = (output: any, context: __SerdeContext): GetOperationsForResourceResult => {
  return {
    nextPageCount: __expectString(output.nextPageCount),
    nextPageToken: __expectString(output.nextPageToken),
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOperationsResult
 */
const de_GetOperationsResult = (output: any, context: __SerdeContext): GetOperationsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRegionsResult
 */
const de_GetRegionsResult = (output: any, context: __SerdeContext): GetRegionsResult => {
  return {
    regions: output.regions != null ? de_RegionList(output.regions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult
 */
const de_GetRelationalDatabaseBlueprintsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBlueprintsResult => {
  return {
    blueprints: output.blueprints != null ? de_RelationalDatabaseBlueprintList(output.blueprints, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseBundlesResult
 */
const de_GetRelationalDatabaseBundlesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBundlesResult => {
  return {
    bundles: output.bundles != null ? de_RelationalDatabaseBundleList(output.bundles, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseEventsResult
 */
const de_GetRelationalDatabaseEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseEventsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    relationalDatabaseEvents:
      output.relationalDatabaseEvents != null
        ? de_RelationalDatabaseEventList(output.relationalDatabaseEvents, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogEventsResult
 */
const de_GetRelationalDatabaseLogEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogEventsResult => {
  return {
    nextBackwardToken: __expectString(output.nextBackwardToken),
    nextForwardToken: __expectString(output.nextForwardToken),
    resourceLogEvents:
      output.resourceLogEvents != null ? de_LogEventList(output.resourceLogEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult
 */
const de_GetRelationalDatabaseLogStreamsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogStreamsResult => {
  return {
    logStreams: output.logStreams != null ? de_StringList(output.logStreams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult
 */
const de_GetRelationalDatabaseMasterUserPasswordResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMasterUserPasswordResult => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    masterUserPassword: __expectString(output.masterUserPassword),
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMetricDataResult
 */
const de_GetRelationalDatabaseMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMetricDataResult => {
  return {
    metricData: output.metricData != null ? de_MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseParametersResult
 */
const de_GetRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseParametersResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    parameters: output.parameters != null ? de_RelationalDatabaseParameterList(output.parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseResult
 */
const de_GetRelationalDatabaseResult = (output: any, context: __SerdeContext): GetRelationalDatabaseResult => {
  return {
    relationalDatabase:
      output.relationalDatabase != null ? de_RelationalDatabase(output.relationalDatabase, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotResult
 */
const de_GetRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotResult => {
  return {
    relationalDatabaseSnapshot:
      output.relationalDatabaseSnapshot != null
        ? de_RelationalDatabaseSnapshot(output.relationalDatabaseSnapshot, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult
 */
const de_GetRelationalDatabaseSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    relationalDatabaseSnapshots:
      output.relationalDatabaseSnapshots != null
        ? de_RelationalDatabaseSnapshotList(output.relationalDatabaseSnapshots, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabasesResult
 */
const de_GetRelationalDatabasesResult = (output: any, context: __SerdeContext): GetRelationalDatabasesResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    relationalDatabases:
      output.relationalDatabases != null ? de_RelationalDatabaseList(output.relationalDatabases, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetStaticIpResult
 */
const de_GetStaticIpResult = (output: any, context: __SerdeContext): GetStaticIpResult => {
  return {
    staticIp: output.staticIp != null ? de_StaticIp(output.staticIp, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetStaticIpsResult
 */
const de_GetStaticIpsResult = (output: any, context: __SerdeContext): GetStaticIpsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    staticIps: output.staticIps != null ? de_StaticIpList(output.staticIps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HeaderForwardList
 */
const de_HeaderForwardList = (output: any, context: __SerdeContext): (HeaderEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HeaderObject
 */
const de_HeaderObject = (output: any, context: __SerdeContext): HeaderObject => {
  return {
    headersAllowList:
      output.headersAllowList != null ? de_HeaderForwardList(output.headersAllowList, context) : undefined,
    option: __expectString(output.option),
  } as any;
};

/**
 * deserializeAws_json1_1HostKeyAttributes
 */
const de_HostKeyAttributes = (output: any, context: __SerdeContext): HostKeyAttributes => {
  return {
    algorithm: __expectString(output.algorithm),
    fingerprintSHA1: __expectString(output.fingerprintSHA1),
    fingerprintSHA256: __expectString(output.fingerprintSHA256),
    notValidAfter:
      output.notValidAfter != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notValidAfter)))
        : undefined,
    notValidBefore:
      output.notValidBefore != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notValidBefore)))
        : undefined,
    publicKey: __expectString(output.publicKey),
    witnessedAt:
      output.witnessedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.witnessedAt)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HostKeysList
 */
const de_HostKeysList = (output: any, context: __SerdeContext): HostKeyAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HostKeyAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportKeyPairResult
 */
const de_ImportKeyPairResult = (output: any, context: __SerdeContext): ImportKeyPairResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    addOns: output.addOns != null ? de_AddOnList(output.addOns, context) : undefined,
    arn: __expectString(output.arn),
    blueprintId: __expectString(output.blueprintId),
    blueprintName: __expectString(output.blueprintName),
    bundleId: __expectString(output.bundleId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    hardware: output.hardware != null ? de_InstanceHardware(output.hardware, context) : undefined,
    ipAddressType: __expectString(output.ipAddressType),
    ipv6Addresses: output.ipv6Addresses != null ? de_Ipv6AddressList(output.ipv6Addresses, context) : undefined,
    isStaticIp: __expectBoolean(output.isStaticIp),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    metadataOptions:
      output.metadataOptions != null ? de_InstanceMetadataOptions(output.metadataOptions, context) : undefined,
    name: __expectString(output.name),
    networking: output.networking != null ? de_InstanceNetworking(output.networking, context) : undefined,
    privateIpAddress: __expectString(output.privateIpAddress),
    publicIpAddress: __expectString(output.publicIpAddress),
    resourceType: __expectString(output.resourceType),
    sshKeyName: __expectString(output.sshKeyName),
    state: output.state != null ? de_InstanceState(output.state, context) : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceAccessDetails
 */
const de_InstanceAccessDetails = (output: any, context: __SerdeContext): InstanceAccessDetails => {
  return {
    certKey: __expectString(output.certKey),
    expiresAt:
      output.expiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiresAt))) : undefined,
    hostKeys: output.hostKeys != null ? de_HostKeysList(output.hostKeys, context) : undefined,
    instanceName: __expectString(output.instanceName),
    ipAddress: __expectString(output.ipAddress),
    password: __expectString(output.password),
    passwordData: output.passwordData != null ? de_PasswordData(output.passwordData, context) : undefined,
    privateKey: __expectString(output.privateKey),
    protocol: __expectString(output.protocol),
    username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceHardware
 */
const de_InstanceHardware = (output: any, context: __SerdeContext): InstanceHardware => {
  return {
    cpuCount: __expectInt32(output.cpuCount),
    disks: output.disks != null ? de_DiskList(output.disks, context) : undefined,
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceHealthSummary
 */
const de_InstanceHealthSummary = (output: any, context: __SerdeContext): InstanceHealthSummary => {
  return {
    instanceHealth: __expectString(output.instanceHealth),
    instanceHealthReason: __expectString(output.instanceHealthReason),
    instanceName: __expectString(output.instanceName),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceHealthSummaryList
 */
const de_InstanceHealthSummaryList = (output: any, context: __SerdeContext): InstanceHealthSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceHealthSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Instance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceMetadataOptions
 */
const de_InstanceMetadataOptions = (output: any, context: __SerdeContext): InstanceMetadataOptions => {
  return {
    httpEndpoint: __expectString(output.httpEndpoint),
    httpProtocolIpv6: __expectString(output.httpProtocolIpv6),
    httpPutResponseHopLimit: __expectInt32(output.httpPutResponseHopLimit),
    httpTokens: __expectString(output.httpTokens),
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceNetworking
 */
const de_InstanceNetworking = (output: any, context: __SerdeContext): InstanceNetworking => {
  return {
    monthlyTransfer: output.monthlyTransfer != null ? de_MonthlyTransfer(output.monthlyTransfer, context) : undefined,
    ports: output.ports != null ? de_InstancePortInfoList(output.ports, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstancePlatformList
 */
const de_InstancePlatformList = (output: any, context: __SerdeContext): (InstancePlatform | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstancePortInfo
 */
const de_InstancePortInfo = (output: any, context: __SerdeContext): InstancePortInfo => {
  return {
    accessDirection: __expectString(output.accessDirection),
    accessFrom: __expectString(output.accessFrom),
    accessType: __expectString(output.accessType),
    cidrListAliases: output.cidrListAliases != null ? de_StringList(output.cidrListAliases, context) : undefined,
    cidrs: output.cidrs != null ? de_StringList(output.cidrs, context) : undefined,
    commonName: __expectString(output.commonName),
    fromPort: __expectInt32(output.fromPort),
    ipv6Cidrs: output.ipv6Cidrs != null ? de_StringList(output.ipv6Cidrs, context) : undefined,
    protocol: __expectString(output.protocol),
    toPort: __expectInt32(output.toPort),
  } as any;
};

/**
 * deserializeAws_json1_1InstancePortInfoList
 */
const de_InstancePortInfoList = (output: any, context: __SerdeContext): InstancePortInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstancePortInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstancePortState
 */
const de_InstancePortState = (output: any, context: __SerdeContext): InstancePortState => {
  return {
    cidrListAliases: output.cidrListAliases != null ? de_StringList(output.cidrListAliases, context) : undefined,
    cidrs: output.cidrs != null ? de_StringList(output.cidrs, context) : undefined,
    fromPort: __expectInt32(output.fromPort),
    ipv6Cidrs: output.ipv6Cidrs != null ? de_StringList(output.ipv6Cidrs, context) : undefined,
    protocol: __expectString(output.protocol),
    state: __expectString(output.state),
    toPort: __expectInt32(output.toPort),
  } as any;
};

/**
 * deserializeAws_json1_1InstancePortStateList
 */
const de_InstancePortStateList = (output: any, context: __SerdeContext): InstancePortState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstancePortState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceSnapshot
 */
const de_InstanceSnapshot = (output: any, context: __SerdeContext): InstanceSnapshot => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fromAttachedDisks: output.fromAttachedDisks != null ? de_DiskList(output.fromAttachedDisks, context) : undefined,
    fromBlueprintId: __expectString(output.fromBlueprintId),
    fromBundleId: __expectString(output.fromBundleId),
    fromInstanceArn: __expectString(output.fromInstanceArn),
    fromInstanceName: __expectString(output.fromInstanceName),
    isFromAutoSnapshot: __expectBoolean(output.isFromAutoSnapshot),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    progress: __expectString(output.progress),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceSnapshotInfo
 */
const de_InstanceSnapshotInfo = (output: any, context: __SerdeContext): InstanceSnapshotInfo => {
  return {
    fromBlueprintId: __expectString(output.fromBlueprintId),
    fromBundleId: __expectString(output.fromBundleId),
    fromDiskInfo: output.fromDiskInfo != null ? de_DiskInfoList(output.fromDiskInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceSnapshotList
 */
const de_InstanceSnapshotList = (output: any, context: __SerdeContext): InstanceSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceSnapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceState
 */
const de_InstanceState = (output: any, context: __SerdeContext): InstanceState => {
  return {
    code: __expectInt32(output.code),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1Ipv6AddressList
 */
const de_Ipv6AddressList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IsVpcPeeredResult
 */
const de_IsVpcPeeredResult = (output: any, context: __SerdeContext): IsVpcPeeredResult => {
  return {
    isPeered: __expectBoolean(output.isPeered),
  } as any;
};

/**
 * deserializeAws_json1_1KeyPair
 */
const de_KeyPair = (output: any, context: __SerdeContext): KeyPair => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fingerprint: __expectString(output.fingerprint),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1KeyPairList
 */
const de_KeyPairList = (output: any, context: __SerdeContext): KeyPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LightsailDistribution
 */
const de_LightsailDistribution = (output: any, context: __SerdeContext): LightsailDistribution => {
  return {
    ableToUpdateBundle: __expectBoolean(output.ableToUpdateBundle),
    alternativeDomainNames:
      output.alternativeDomainNames != null ? de_StringList(output.alternativeDomainNames, context) : undefined,
    arn: __expectString(output.arn),
    bundleId: __expectString(output.bundleId),
    cacheBehaviorSettings:
      output.cacheBehaviorSettings != null ? de_CacheSettings(output.cacheBehaviorSettings, context) : undefined,
    cacheBehaviors: output.cacheBehaviors != null ? de_CacheBehaviorList(output.cacheBehaviors, context) : undefined,
    certificateName: __expectString(output.certificateName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    defaultCacheBehavior:
      output.defaultCacheBehavior != null ? de_CacheBehavior(output.defaultCacheBehavior, context) : undefined,
    domainName: __expectString(output.domainName),
    ipAddressType: __expectString(output.ipAddressType),
    isEnabled: __expectBoolean(output.isEnabled),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    origin: output.origin != null ? de_Origin(output.origin, context) : undefined,
    originPublicDNS: __expectString(output.originPublicDNS),
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancer
 */
const de_LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  return {
    arn: __expectString(output.arn),
    configurationOptions:
      output.configurationOptions != null
        ? de_LoadBalancerConfigurationOptions(output.configurationOptions, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    dnsName: __expectString(output.dnsName),
    healthCheckPath: __expectString(output.healthCheckPath),
    httpsRedirectionEnabled: __expectBoolean(output.httpsRedirectionEnabled),
    instanceHealthSummary:
      output.instanceHealthSummary != null
        ? de_InstanceHealthSummaryList(output.instanceHealthSummary, context)
        : undefined,
    instancePort: __expectInt32(output.instancePort),
    ipAddressType: __expectString(output.ipAddressType),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    protocol: __expectString(output.protocol),
    publicPorts: output.publicPorts != null ? de_PortList(output.publicPorts, context) : undefined,
    resourceType: __expectString(output.resourceType),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    tlsCertificateSummaries:
      output.tlsCertificateSummaries != null
        ? de_LoadBalancerTlsCertificateSummaryList(output.tlsCertificateSummaries, context)
        : undefined,
    tlsPolicyName: __expectString(output.tlsPolicyName),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerConfigurationOptions
 */
const de_LoadBalancerConfigurationOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [LoadBalancerAttributeName | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1LoadBalancerList
 */
const de_LoadBalancerList = (output: any, context: __SerdeContext): LoadBalancer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificate
 */
const de_LoadBalancerTlsCertificate = (output: any, context: __SerdeContext): LoadBalancerTlsCertificate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    domainName: __expectString(output.domainName),
    domainValidationRecords:
      output.domainValidationRecords != null
        ? de_LoadBalancerTlsCertificateDomainValidationRecordList(output.domainValidationRecords, context)
        : undefined,
    failureReason: __expectString(output.failureReason),
    isAttached: __expectBoolean(output.isAttached),
    issuedAt:
      output.issuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.issuedAt))) : undefined,
    issuer: __expectString(output.issuer),
    keyAlgorithm: __expectString(output.keyAlgorithm),
    loadBalancerName: __expectString(output.loadBalancerName),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    notAfter:
      output.notAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notAfter))) : undefined,
    notBefore:
      output.notBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notBefore))) : undefined,
    renewalSummary:
      output.renewalSummary != null
        ? de_LoadBalancerTlsCertificateRenewalSummary(output.renewalSummary, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    revocationReason: __expectString(output.revocationReason),
    revokedAt:
      output.revokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revokedAt))) : undefined,
    serial: __expectString(output.serial),
    signatureAlgorithm: __expectString(output.signatureAlgorithm),
    status: __expectString(output.status),
    subject: __expectString(output.subject),
    subjectAlternativeNames:
      output.subjectAlternativeNames != null ? de_StringList(output.subjectAlternativeNames, context) : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateDnsRecordCreationState
 */
const de_LoadBalancerTlsCertificateDnsRecordCreationState = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDnsRecordCreationState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption
 */
const de_LoadBalancerTlsCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption => {
  return {
    domainName: __expectString(output.domainName),
    validationStatus: __expectString(output.validationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList
 */
const de_LoadBalancerTlsCertificateDomainValidationOptionList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancerTlsCertificateDomainValidationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord
 */
const de_LoadBalancerTlsCertificateDomainValidationRecord = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord => {
  return {
    dnsRecordCreationState:
      output.dnsRecordCreationState != null
        ? de_LoadBalancerTlsCertificateDnsRecordCreationState(output.dnsRecordCreationState, context)
        : undefined,
    domainName: __expectString(output.domainName),
    name: __expectString(output.name),
    type: __expectString(output.type),
    validationStatus: __expectString(output.validationStatus),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList
 */
const de_LoadBalancerTlsCertificateDomainValidationRecordList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancerTlsCertificateDomainValidationRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateList
 */
const de_LoadBalancerTlsCertificateList = (output: any, context: __SerdeContext): LoadBalancerTlsCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancerTlsCertificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary
 */
const de_LoadBalancerTlsCertificateRenewalSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateRenewalSummary => {
  return {
    domainValidationOptions:
      output.domainValidationOptions != null
        ? de_LoadBalancerTlsCertificateDomainValidationOptionList(output.domainValidationOptions, context)
        : undefined,
    renewalStatus: __expectString(output.renewalStatus),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateSummary
 */
const de_LoadBalancerTlsCertificateSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary => {
  return {
    isAttached: __expectBoolean(output.isAttached),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList
 */
const de_LoadBalancerTlsCertificateSummaryList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancerTlsCertificateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsPolicy
 */
const de_LoadBalancerTlsPolicy = (output: any, context: __SerdeContext): LoadBalancerTlsPolicy => {
  return {
    ciphers: output.ciphers != null ? de_StringList(output.ciphers, context) : undefined,
    description: __expectString(output.description),
    isDefault: __expectBoolean(output.isDefault),
    name: __expectString(output.name),
    protocols: output.protocols != null ? de_StringList(output.protocols, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsPolicyList
 */
const de_LoadBalancerTlsPolicyList = (output: any, context: __SerdeContext): LoadBalancerTlsPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoadBalancerTlsPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LogEvent
 */
const de_LogEvent = (output: any, context: __SerdeContext): LogEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LogEventList
 */
const de_LogEventList = (output: any, context: __SerdeContext): LogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricDatapoint
 */
const de_MetricDatapoint = (output: any, context: __SerdeContext): MetricDatapoint => {
  return {
    average: __limitedParseDouble(output.average),
    maximum: __limitedParseDouble(output.maximum),
    minimum: __limitedParseDouble(output.minimum),
    sampleCount: __limitedParseDouble(output.sampleCount),
    sum: __limitedParseDouble(output.sum),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_json1_1MetricDatapointList
 */
const de_MetricDatapointList = (output: any, context: __SerdeContext): MetricDatapoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDatapoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoredResourceInfo
 */
const de_MonitoredResourceInfo = (output: any, context: __SerdeContext): MonitoredResourceInfo => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1MonthlyTransfer
 */
const de_MonthlyTransfer = (output: any, context: __SerdeContext): MonthlyTransfer => {
  return {
    gbPerMonthAllocated: __expectInt32(output.gbPerMonthAllocated),
  } as any;
};

/**
 * deserializeAws_json1_1NameServersUpdateState
 */
const de_NameServersUpdateState = (output: any, context: __SerdeContext): NameServersUpdateState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1NotificationTriggerList
 */
const de_NotificationTriggerList = (output: any, context: __SerdeContext): (AlarmState | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpenInstancePublicPortsResult
 */
const de_OpenInstancePublicPortsResult = (output: any, context: __SerdeContext): OpenInstancePublicPortsResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Operation
 */
const de_Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    errorCode: __expectString(output.errorCode),
    errorDetails: __expectString(output.errorDetails),
    id: __expectString(output.id),
    isTerminal: __expectBoolean(output.isTerminal),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    operationDetails: __expectString(output.operationDetails),
    operationType: __expectString(output.operationType),
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    statusChangedAt:
      output.statusChangedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.statusChangedAt)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OperationFailureException
 */
const de_OperationFailureException = (output: any, context: __SerdeContext): OperationFailureException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1OperationList
 */
const de_OperationList = (output: any, context: __SerdeContext): Operation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Operation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Origin
 */
const de_Origin = (output: any, context: __SerdeContext): Origin => {
  return {
    name: __expectString(output.name),
    protocolPolicy: __expectString(output.protocolPolicy),
    regionName: __expectString(output.regionName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1PartnerIdList
 */
const de_PartnerIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PasswordData
 */
const de_PasswordData = (output: any, context: __SerdeContext): PasswordData => {
  return {
    ciphertext: __expectString(output.ciphertext),
    keyPairName: __expectString(output.keyPairName),
  } as any;
};

/**
 * deserializeAws_json1_1PeerVpcResult
 */
const de_PeerVpcResult = (output: any, context: __SerdeContext): PeerVpcResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PendingMaintenanceAction
 */
const de_PendingMaintenanceAction = (output: any, context: __SerdeContext): PendingMaintenanceAction => {
  return {
    action: __expectString(output.action),
    currentApplyDate:
      output.currentApplyDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.currentApplyDate)))
        : undefined,
    description: __expectString(output.description),
  } as any;
};

/**
 * deserializeAws_json1_1PendingMaintenanceActionList
 */
const de_PendingMaintenanceActionList = (output: any, context: __SerdeContext): PendingMaintenanceAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PendingMaintenanceAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PendingModifiedRelationalDatabaseValues
 */
const de_PendingModifiedRelationalDatabaseValues = (
  output: any,
  context: __SerdeContext
): PendingModifiedRelationalDatabaseValues => {
  return {
    backupRetentionEnabled: __expectBoolean(output.backupRetentionEnabled),
    engineVersion: __expectString(output.engineVersion),
    masterUserPassword: __expectString(output.masterUserPassword),
  } as any;
};

/**
 * deserializeAws_json1_1PortList
 */
const de_PortList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PortMap
 */
const de_PortMap = (output: any, context: __SerdeContext): Record<string, ContainerServiceProtocol | string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ContainerServiceProtocol | string>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1PrivateRegistryAccess
 */
const de_PrivateRegistryAccess = (output: any, context: __SerdeContext): PrivateRegistryAccess => {
  return {
    ecrImagePullerRole:
      output.ecrImagePullerRole != null
        ? de_ContainerServiceECRImagePullerRole(output.ecrImagePullerRole, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutAlarmResult
 */
const de_PutAlarmResult = (output: any, context: __SerdeContext): PutAlarmResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutInstancePublicPortsResult
 */
const de_PutInstancePublicPortsResult = (output: any, context: __SerdeContext): PutInstancePublicPortsResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryStringObject
 */
const de_QueryStringObject = (output: any, context: __SerdeContext): QueryStringObject => {
  return {
    option: __expectBoolean(output.option),
    queryStringsAllowList:
      output.queryStringsAllowList != null ? de_StringList(output.queryStringsAllowList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1R53HostedZoneDeletionState
 */
const de_R53HostedZoneDeletionState = (output: any, context: __SerdeContext): R53HostedZoneDeletionState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RebootInstanceResult
 */
const de_RebootInstanceResult = (output: any, context: __SerdeContext): RebootInstanceResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RebootRelationalDatabaseResult
 */
const de_RebootRelationalDatabaseResult = (output: any, context: __SerdeContext): RebootRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Region
 */
const de_Region = (output: any, context: __SerdeContext): Region => {
  return {
    availabilityZones:
      output.availabilityZones != null ? de_AvailabilityZoneList(output.availabilityZones, context) : undefined,
    continentCode: __expectString(output.continentCode),
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
    relationalDatabaseAvailabilityZones:
      output.relationalDatabaseAvailabilityZones != null
        ? de_AvailabilityZoneList(output.relationalDatabaseAvailabilityZones, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegionList
 */
const de_RegionList = (output: any, context: __SerdeContext): Region[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Region(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegisterContainerImageResult
 */
const de_RegisterContainerImageResult = (output: any, context: __SerdeContext): RegisterContainerImageResult => {
  return {
    containerImage: output.containerImage != null ? de_ContainerImage(output.containerImage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisteredDomainDelegationInfo
 */
const de_RegisteredDomainDelegationInfo = (output: any, context: __SerdeContext): RegisteredDomainDelegationInfo => {
  return {
    nameServersUpdateState:
      output.nameServersUpdateState != null
        ? de_NameServersUpdateState(output.nameServersUpdateState, context)
        : undefined,
    r53HostedZoneDeletionState:
      output.r53HostedZoneDeletionState != null
        ? de_R53HostedZoneDeletionState(output.r53HostedZoneDeletionState, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabase
 */
const de_RelationalDatabase = (output: any, context: __SerdeContext): RelationalDatabase => {
  return {
    arn: __expectString(output.arn),
    backupRetentionEnabled: __expectBoolean(output.backupRetentionEnabled),
    caCertificateIdentifier: __expectString(output.caCertificateIdentifier),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    engine: __expectString(output.engine),
    engineVersion: __expectString(output.engineVersion),
    hardware: output.hardware != null ? de_RelationalDatabaseHardware(output.hardware, context) : undefined,
    latestRestorableTime:
      output.latestRestorableTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestRestorableTime)))
        : undefined,
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    masterDatabaseName: __expectString(output.masterDatabaseName),
    masterEndpoint:
      output.masterEndpoint != null ? de_RelationalDatabaseEndpoint(output.masterEndpoint, context) : undefined,
    masterUsername: __expectString(output.masterUsername),
    name: __expectString(output.name),
    parameterApplyStatus: __expectString(output.parameterApplyStatus),
    pendingMaintenanceActions:
      output.pendingMaintenanceActions != null
        ? de_PendingMaintenanceActionList(output.pendingMaintenanceActions, context)
        : undefined,
    pendingModifiedValues:
      output.pendingModifiedValues != null
        ? de_PendingModifiedRelationalDatabaseValues(output.pendingModifiedValues, context)
        : undefined,
    preferredBackupWindow: __expectString(output.preferredBackupWindow),
    preferredMaintenanceWindow: __expectString(output.preferredMaintenanceWindow),
    publiclyAccessible: __expectBoolean(output.publiclyAccessible),
    relationalDatabaseBlueprintId: __expectString(output.relationalDatabaseBlueprintId),
    relationalDatabaseBundleId: __expectString(output.relationalDatabaseBundleId),
    resourceType: __expectString(output.resourceType),
    secondaryAvailabilityZone: __expectString(output.secondaryAvailabilityZone),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseBlueprint
 */
const de_RelationalDatabaseBlueprint = (output: any, context: __SerdeContext): RelationalDatabaseBlueprint => {
  return {
    blueprintId: __expectString(output.blueprintId),
    engine: __expectString(output.engine),
    engineDescription: __expectString(output.engineDescription),
    engineVersion: __expectString(output.engineVersion),
    engineVersionDescription: __expectString(output.engineVersionDescription),
    isEngineDefault: __expectBoolean(output.isEngineDefault),
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseBlueprintList
 */
const de_RelationalDatabaseBlueprintList = (output: any, context: __SerdeContext): RelationalDatabaseBlueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationalDatabaseBlueprint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelationalDatabaseBundle
 */
const de_RelationalDatabaseBundle = (output: any, context: __SerdeContext): RelationalDatabaseBundle => {
  return {
    bundleId: __expectString(output.bundleId),
    cpuCount: __expectInt32(output.cpuCount),
    diskSizeInGb: __expectInt32(output.diskSizeInGb),
    isActive: __expectBoolean(output.isActive),
    isEncrypted: __expectBoolean(output.isEncrypted),
    name: __expectString(output.name),
    price: __limitedParseFloat32(output.price),
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseBundleList
 */
const de_RelationalDatabaseBundleList = (output: any, context: __SerdeContext): RelationalDatabaseBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationalDatabaseBundle(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelationalDatabaseEndpoint
 */
const de_RelationalDatabaseEndpoint = (output: any, context: __SerdeContext): RelationalDatabaseEndpoint => {
  return {
    address: __expectString(output.address),
    port: __expectInt32(output.port),
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseEvent
 */
const de_RelationalDatabaseEvent = (output: any, context: __SerdeContext): RelationalDatabaseEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    eventCategories: output.eventCategories != null ? de_StringList(output.eventCategories, context) : undefined,
    message: __expectString(output.message),
    resource: __expectString(output.resource),
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseEventList
 */
const de_RelationalDatabaseEventList = (output: any, context: __SerdeContext): RelationalDatabaseEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationalDatabaseEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelationalDatabaseHardware
 */
const de_RelationalDatabaseHardware = (output: any, context: __SerdeContext): RelationalDatabaseHardware => {
  return {
    cpuCount: __expectInt32(output.cpuCount),
    diskSizeInGb: __expectInt32(output.diskSizeInGb),
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseList
 */
const de_RelationalDatabaseList = (output: any, context: __SerdeContext): RelationalDatabase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationalDatabase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelationalDatabaseParameter
 */
const de_RelationalDatabaseParameter = (output: any, context: __SerdeContext): RelationalDatabaseParameter => {
  return {
    allowedValues: __expectString(output.allowedValues),
    applyMethod: __expectString(output.applyMethod),
    applyType: __expectString(output.applyType),
    dataType: __expectString(output.dataType),
    description: __expectString(output.description),
    isModifiable: __expectBoolean(output.isModifiable),
    parameterName: __expectString(output.parameterName),
    parameterValue: __expectString(output.parameterValue),
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseParameterList
 */
const de_RelationalDatabaseParameterList = (output: any, context: __SerdeContext): RelationalDatabaseParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationalDatabaseParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelationalDatabaseSnapshot
 */
const de_RelationalDatabaseSnapshot = (output: any, context: __SerdeContext): RelationalDatabaseSnapshot => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    engine: __expectString(output.engine),
    engineVersion: __expectString(output.engineVersion),
    fromRelationalDatabaseArn: __expectString(output.fromRelationalDatabaseArn),
    fromRelationalDatabaseBlueprintId: __expectString(output.fromRelationalDatabaseBlueprintId),
    fromRelationalDatabaseBundleId: __expectString(output.fromRelationalDatabaseBundleId),
    fromRelationalDatabaseName: __expectString(output.fromRelationalDatabaseName),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseSnapshotList
 */
const de_RelationalDatabaseSnapshotList = (output: any, context: __SerdeContext): RelationalDatabaseSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelationalDatabaseSnapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReleaseStaticIpResult
 */
const de_ReleaseStaticIpResult = (output: any, context: __SerdeContext): ReleaseStaticIpResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RenewalSummary
 */
const de_RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return {
    domainValidationRecords:
      output.domainValidationRecords != null
        ? de_DomainValidationRecordList(output.domainValidationRecords, context)
        : undefined,
    renewalStatus: __expectString(output.renewalStatus),
    renewalStatusReason: __expectString(output.renewalStatusReason),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResetDistributionCacheResult
 */
const de_ResetDistributionCacheResult = (output: any, context: __SerdeContext): ResetDistributionCacheResult => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceBudgetEstimate
 */
const de_ResourceBudgetEstimate = (output: any, context: __SerdeContext): ResourceBudgetEstimate => {
  return {
    costEstimates: output.costEstimates != null ? de_CostEstimates(output.costEstimates, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceLocation
 */
const de_ResourceLocation = (output: any, context: __SerdeContext): ResourceLocation => {
  return {
    availabilityZone: __expectString(output.availabilityZone),
    regionName: __expectString(output.regionName),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceReceivingAccess
 */
const de_ResourceReceivingAccess = (output: any, context: __SerdeContext): ResourceReceivingAccess => {
  return {
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceRecord
 */
const de_ResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcesBudgetEstimate
 */
const de_ResourcesBudgetEstimate = (output: any, context: __SerdeContext): ResourceBudgetEstimate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceBudgetEstimate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SendContactMethodVerificationResult
 */
const de_SendContactMethodVerificationResult = (
  output: any,
  context: __SerdeContext
): SendContactMethodVerificationResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceException
 */
const de_ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return {
    isPrimary: __expectBoolean(output.isPrimary),
    name: __expectString(output.name),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1Sessions
 */
const de_Sessions = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Session(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SetIpAddressTypeResult
 */
const de_SetIpAddressTypeResult = (output: any, context: __SerdeContext): SetIpAddressTypeResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SetResourceAccessForBucketResult
 */
const de_SetResourceAccessForBucketResult = (
  output: any,
  context: __SerdeContext
): SetResourceAccessForBucketResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartGUISessionResult
 */
const de_StartGUISessionResult = (output: any, context: __SerdeContext): StartGUISessionResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartInstanceResult
 */
const de_StartInstanceResult = (output: any, context: __SerdeContext): StartInstanceResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartRelationalDatabaseResult
 */
const de_StartRelationalDatabaseResult = (output: any, context: __SerdeContext): StartRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StaticIp
 */
const de_StaticIp = (output: any, context: __SerdeContext): StaticIp => {
  return {
    arn: __expectString(output.arn),
    attachedTo: __expectString(output.attachedTo),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    ipAddress: __expectString(output.ipAddress),
    isAttached: __expectBoolean(output.isAttached),
    location: output.location != null ? de_ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    supportCode: __expectString(output.supportCode),
  } as any;
};

/**
 * deserializeAws_json1_1StaticIpList
 */
const de_StaticIpList = (output: any, context: __SerdeContext): StaticIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StaticIp(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StopGUISessionResult
 */
const de_StopGUISessionResult = (output: any, context: __SerdeContext): StopGUISessionResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopInstanceResult
 */
const de_StopInstanceResult = (output: any, context: __SerdeContext): StopInstanceResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopRelationalDatabaseResult
 */
const de_StopRelationalDatabaseResult = (output: any, context: __SerdeContext): StopRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubjectAlternativeNameList
 */
const de_SubjectAlternativeNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResult
 */
const de_TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TestAlarmResult
 */
const de_TestAlarmResult = (output: any, context: __SerdeContext): TestAlarmResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TimePeriod
 */
const de_TimePeriod = (output: any, context: __SerdeContext): TimePeriod => {
  return {
    end: output.end != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.end))) : undefined,
    start: output.start != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.start))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UnauthenticatedException
 */
const de_UnauthenticatedException = (output: any, context: __SerdeContext): UnauthenticatedException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

/**
 * deserializeAws_json1_1UnpeerVpcResult
 */
const de_UnpeerVpcResult = (output: any, context: __SerdeContext): UnpeerVpcResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResult
 */
const de_UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBucketBundleResult
 */
const de_UpdateBucketBundleResult = (output: any, context: __SerdeContext): UpdateBucketBundleResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBucketResult
 */
const de_UpdateBucketResult = (output: any, context: __SerdeContext): UpdateBucketResult => {
  return {
    bucket: output.bucket != null ? de_Bucket(output.bucket, context) : undefined,
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateContainerServiceResult
 */
const de_UpdateContainerServiceResult = (output: any, context: __SerdeContext): UpdateContainerServiceResult => {
  return {
    containerService:
      output.containerService != null ? de_ContainerService(output.containerService, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDistributionBundleResult
 */
const de_UpdateDistributionBundleResult = (output: any, context: __SerdeContext): UpdateDistributionBundleResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDistributionResult
 */
const de_UpdateDistributionResult = (output: any, context: __SerdeContext): UpdateDistributionResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDomainEntryResult
 */
const de_UpdateDomainEntryResult = (output: any, context: __SerdeContext): UpdateDomainEntryResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateInstanceMetadataOptionsResult
 */
const de_UpdateInstanceMetadataOptionsResult = (
  output: any,
  context: __SerdeContext
): UpdateInstanceMetadataOptionsResult => {
  return {
    operation: output.operation != null ? de_Operation(output.operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateLoadBalancerAttributeResult
 */
const de_UpdateLoadBalancerAttributeResult = (
  output: any,
  context: __SerdeContext
): UpdateLoadBalancerAttributeResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseParametersResult
 */
const de_UpdateRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseParametersResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseResult
 */
const de_UpdateRelationalDatabaseResult = (output: any, context: __SerdeContext): UpdateRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? de_OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};

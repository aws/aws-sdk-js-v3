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
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "../commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
} from "../commands/StartRelationalDatabaseCommand";
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
  Tag,
  UnauthenticatedException,
} from "../models/models_0";
import {
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
  SendContactMethodVerificationRequest,
  SendContactMethodVerificationResult,
  SetIpAddressTypeRequest,
  SetIpAddressTypeResult,
  SetResourceAccessForBucketRequest,
  SetResourceAccessForBucketResult,
  StartInstanceRequest,
  StartInstanceResult,
  StartRelationalDatabaseRequest,
  StartRelationalDatabaseResult,
  StaticIp,
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

export const serializeAws_json1_1AllocateStaticIpCommand = async (
  input: AllocateStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AllocateStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllocateStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachCertificateToDistributionCommand = async (
  input: AttachCertificateToDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachCertificateToDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachCertificateToDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachDiskCommand = async (
  input: AttachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachInstancesToLoadBalancerCommand = async (
  input: AttachInstancesToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachInstancesToLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachInstancesToLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = async (
  input: AttachLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachStaticIpCommand = async (
  input: AttachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.AttachStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CloseInstancePublicPortsCommand = async (
  input: CloseInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CloseInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CloseInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CopySnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopySnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateBucket",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBucketAccessKeyCommand = async (
  input: CreateBucketAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateBucketAccessKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBucketAccessKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCertificateCommand = async (
  input: CreateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCloudFormationStackCommand = async (
  input: CreateCloudFormationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateCloudFormationStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCloudFormationStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContactMethodCommand = async (
  input: CreateContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContactMethod",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContactMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContainerServiceCommand = async (
  input: CreateContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContainerService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContainerServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContainerServiceDeploymentCommand = async (
  input: CreateContainerServiceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContainerServiceDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContainerServiceDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContainerServiceRegistryLoginCommand = async (
  input: CreateContainerServiceRegistryLoginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateContainerServiceRegistryLogin",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContainerServiceRegistryLoginRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDiskCommand = async (
  input: CreateDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDiskFromSnapshotCommand = async (
  input: CreateDiskFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDiskFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDiskFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDiskSnapshotCommand = async (
  input: CreateDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDistributionCommand = async (
  input: CreateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDomainEntryCommand = async (
  input: CreateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateDomainEntry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstancesCommand = async (
  input: CreateInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstancesFromSnapshotCommand = async (
  input: CreateInstancesFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateInstancesFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstancesFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstanceSnapshotCommand = async (
  input: CreateInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateKeyPairCommand = async (
  input: CreateKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = async (
  input: CreateLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRelationalDatabaseCommand = async (
  input: CreateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = async (
  input: CreateRelationalDatabaseFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = async (
  input: CreateRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.CreateRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAlarmCommand = async (
  input: DeleteAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteAlarm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAutoSnapshotCommand = async (
  input: DeleteAutoSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteAutoSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAutoSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteBucket",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBucketAccessKeyCommand = async (
  input: DeleteBucketAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteBucketAccessKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBucketAccessKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContactMethodCommand = async (
  input: DeleteContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteContactMethod",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContactMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContainerImageCommand = async (
  input: DeleteContainerImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteContainerImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContainerImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContainerServiceCommand = async (
  input: DeleteContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteContainerService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContainerServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDiskCommand = async (
  input: DeleteDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDiskSnapshotCommand = async (
  input: DeleteDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDomainEntryCommand = async (
  input: DeleteDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteDomainEntry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceSnapshotCommand = async (
  input: DeleteInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteKeyPairCommand = async (
  input: DeleteKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteKnownHostKeysCommand = async (
  input: DeleteKnownHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteKnownHostKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteKnownHostKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = async (
  input: DeleteLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteLoadBalancerTlsCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRelationalDatabaseCommand = async (
  input: DeleteRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = async (
  input: DeleteRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DeleteRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachCertificateFromDistributionCommand = async (
  input: DetachCertificateFromDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachCertificateFromDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachCertificateFromDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachDiskCommand = async (
  input: DetachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachInstancesFromLoadBalancerCommand = async (
  input: DetachInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachInstancesFromLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachInstancesFromLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachStaticIpCommand = async (
  input: DetachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DetachStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableAddOnCommand = async (
  input: DisableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DisableAddOn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableAddOnRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DownloadDefaultKeyPairCommand = async (
  input: DownloadDefaultKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.DownloadDefaultKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DownloadDefaultKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableAddOnCommand = async (
  input: EnableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.EnableAddOn",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableAddOnRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportSnapshotCommand = async (
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ExportSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExportSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetActiveNamesCommand = async (
  input: GetActiveNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetActiveNames",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetActiveNamesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAlarmsCommand = async (
  input: GetAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetAlarms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAlarmsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAutoSnapshotsCommand = async (
  input: GetAutoSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetAutoSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAutoSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintsCommand = async (
  input: GetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBucketAccessKeysCommand = async (
  input: GetBucketAccessKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBucketAccessKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBucketAccessKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBucketBundlesCommand = async (
  input: GetBucketBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBucketBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBucketBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBucketMetricDataCommand = async (
  input: GetBucketMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBucketMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBucketMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBucketsCommand = async (
  input: GetBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBuckets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBucketsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBundlesCommand = async (
  input: GetBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificatesCommand = async (
  input: GetCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCloudFormationStackRecordsCommand = async (
  input: GetCloudFormationStackRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetCloudFormationStackRecords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCloudFormationStackRecordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactMethodsCommand = async (
  input: GetContactMethodsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContactMethods",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactMethodsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerAPIMetadataCommand = async (
  input: GetContainerAPIMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerAPIMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerAPIMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerImagesCommand = async (
  input: GetContainerImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerLogCommand = async (
  input: GetContainerLogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerLog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerLogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerServiceDeploymentsCommand = async (
  input: GetContainerServiceDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServiceDeployments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerServiceDeploymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerServiceMetricDataCommand = async (
  input: GetContainerServiceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServiceMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerServiceMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerServicePowersCommand = async (
  input: GetContainerServicePowersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServicePowers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerServicePowersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContainerServicesCommand = async (
  input: GetContainerServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetContainerServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContainerServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiskCommand = async (
  input: GetDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDisk",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDisksCommand = async (
  input: GetDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDisks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDisksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiskSnapshotCommand = async (
  input: GetDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDiskSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDiskSnapshotsCommand = async (
  input: GetDiskSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDiskSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionBundlesCommand = async (
  input: GetDistributionBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributionBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionLatestCacheResetCommand = async (
  input: GetDistributionLatestCacheResetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributionLatestCacheReset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionLatestCacheResetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionMetricDataCommand = async (
  input: GetDistributionMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributionMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDistributionsCommand = async (
  input: GetDistributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDistributions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDistributionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainsCommand = async (
  input: GetDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetExportSnapshotRecordsCommand = async (
  input: GetExportSnapshotRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetExportSnapshotRecords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetExportSnapshotRecordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceCommand = async (
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceAccessDetailsCommand = async (
  input: GetInstanceAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceAccessDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceAccessDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceMetricDataCommand = async (
  input: GetInstanceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstancePortStatesCommand = async (
  input: GetInstancePortStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstancePortStates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstancePortStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstancesCommand = async (
  input: GetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceSnapshotCommand = async (
  input: GetInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceSnapshotsCommand = async (
  input: GetInstanceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceStateCommand = async (
  input: GetInstanceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetInstanceState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKeyPairCommand = async (
  input: GetKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetKeyPairsCommand = async (
  input: GetKeyPairsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetKeyPairs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetKeyPairsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerCommand = async (
  input: GetLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerMetricDataCommand = async (
  input: GetLoadBalancerMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancerMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancersCommand = async (
  input: GetLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = async (
  input: GetLoadBalancerTlsCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancerTlsCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLoadBalancerTlsPoliciesCommand = async (
  input: GetLoadBalancerTlsPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetLoadBalancerTlsPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLoadBalancerTlsPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationsCommand = async (
  input: GetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationsForResourceCommand = async (
  input: GetOperationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetOperationsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegionsCommand = async (
  input: GetRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRegions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseCommand = async (
  input: GetRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = async (
  input: GetRelationalDatabaseBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseBundlesCommand = async (
  input: GetRelationalDatabaseBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseBundles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBundlesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseEventsCommand = async (
  input: GetRelationalDatabaseEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseLogEventsCommand = async (
  input: GetRelationalDatabaseLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseLogEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = async (
  input: GetRelationalDatabaseLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseLogStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = async (
  input: GetRelationalDatabaseMasterUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseMetricDataCommand = async (
  input: GetRelationalDatabaseMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseMetricData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMetricDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseParametersCommand = async (
  input: GetRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabasesCommand = async (
  input: GetRelationalDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseSnapshotCommand = async (
  input: GetRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = async (
  input: GetRelationalDatabaseSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStaticIpCommand = async (
  input: GetStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStaticIpsCommand = async (
  input: GetStaticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.GetStaticIps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStaticIpsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportKeyPairCommand = async (
  input: ImportKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ImportKeyPair",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportKeyPairRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IsVpcPeeredCommand = async (
  input: IsVpcPeeredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.IsVpcPeered",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IsVpcPeeredRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1OpenInstancePublicPortsCommand = async (
  input: OpenInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.OpenInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1OpenInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PeerVpcCommand = async (
  input: PeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.PeerVpc",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PeerVpcRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAlarmCommand = async (
  input: PutAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.PutAlarm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInstancePublicPortsCommand = async (
  input: PutInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.PutInstancePublicPorts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInstancePublicPortsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.RebootInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootRelationalDatabaseCommand = async (
  input: RebootRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.RebootRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterContainerImageCommand = async (
  input: RegisterContainerImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.RegisterContainerImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterContainerImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReleaseStaticIpCommand = async (
  input: ReleaseStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ReleaseStaticIp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReleaseStaticIpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetDistributionCacheCommand = async (
  input: ResetDistributionCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.ResetDistributionCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetDistributionCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendContactMethodVerificationCommand = async (
  input: SendContactMethodVerificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.SendContactMethodVerification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendContactMethodVerificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetIpAddressTypeCommand = async (
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.SetIpAddressType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetIpAddressTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetResourceAccessForBucketCommand = async (
  input: SetResourceAccessForBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.SetResourceAccessForBucket",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetResourceAccessForBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StartInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartRelationalDatabaseCommand = async (
  input: StartRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StartRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StopInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopRelationalDatabaseCommand = async (
  input: StopRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.StopRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestAlarmCommand = async (
  input: TestAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.TestAlarm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestAlarmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnpeerVpcCommand = async (
  input: UnpeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UnpeerVpc",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnpeerVpcRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBucketCommand = async (
  input: UpdateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateBucket",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBucketBundleCommand = async (
  input: UpdateBucketBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateBucketBundle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBucketBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContainerServiceCommand = async (
  input: UpdateContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateContainerService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateContainerServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateDistribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDistributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDistributionBundleCommand = async (
  input: UpdateDistributionBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateDistributionBundle",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDistributionBundleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainEntryCommand = async (
  input: UpdateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateDomainEntry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDomainEntryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateInstanceMetadataOptionsCommand = async (
  input: UpdateInstanceMetadataOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateInstanceMetadataOptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateInstanceMetadataOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLoadBalancerAttributeCommand = async (
  input: UpdateLoadBalancerAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateLoadBalancerAttribute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLoadBalancerAttributeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRelationalDatabaseCommand = async (
  input: UpdateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateRelationalDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRelationalDatabaseParametersCommand = async (
  input: UpdateRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Lightsail_20161128.UpdateRelationalDatabaseParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AllocateStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllocateStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AllocateStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AllocateStaticIpResult(data, context);
  const response: AllocateStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllocateStaticIpCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachCertificateToDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCertificateToDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachCertificateToDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachCertificateToDistributionResult(data, context);
  const response: AttachCertificateToDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachCertificateToDistributionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachDiskResult(data, context);
  const response: AttachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachDiskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachInstancesToLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesToLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachInstancesToLoadBalancerResult(data, context);
  const response: AttachInstancesToLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult(data, context);
  const response: AttachLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachStaticIpResult(data, context);
  const response: AttachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachStaticIpCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CloseInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CloseInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CloseInstancePublicPortsResult(data, context);
  const response: CloseInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CloseInstancePublicPortsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CopySnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopySnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopySnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopySnapshotResult(data, context);
  const response: CopySnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopySnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBucketResult(data, context);
  const response: CreateBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBucketCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBucketAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBucketAccessKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBucketAccessKeyResult(data, context);
  const response: CreateBucketAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBucketAccessKeyCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateResult(data, context);
  const response: CreateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCertificateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCloudFormationStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudFormationStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCloudFormationStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCloudFormationStackResult(data, context);
  const response: CreateCloudFormationStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCloudFormationStackCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateContactMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContactMethodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContactMethodResult(data, context);
  const response: CreateContactMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContactMethodCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateContainerServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContainerServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContainerServiceResult(data, context);
  const response: CreateContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContainerServiceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateContainerServiceDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContainerServiceDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContainerServiceDeploymentResult(data, context);
  const response: CreateContainerServiceDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContainerServiceDeploymentCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerServiceRegistryLoginCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContainerServiceRegistryLoginCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContainerServiceRegistryLoginResult(data, context);
  const response: CreateContainerServiceRegistryLoginCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContainerServiceRegistryLoginCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskResult(data, context);
  const response: CreateDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDiskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDiskFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDiskFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskFromSnapshotResult(data, context);
  const response: CreateDiskFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDiskFromSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDiskSnapshotResult(data, context);
  const response: CreateDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDiskSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDistributionResult(data, context);
  const response: CreateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDistributionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDomainResult(data, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDomainCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainEntryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDomainEntryResult(data, context);
  const response: CreateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDomainEntryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstancesResult(data, context);
  const response: CreateInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstancesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateInstancesFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstancesFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstancesFromSnapshotResult(data, context);
  const response: CreateInstancesFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstancesFromSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceSnapshotResult(data, context);
  const response: CreateInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstanceSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateKeyPairResult(data, context);
  const response: CreateKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateKeyPairCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLoadBalancerResult(data, context);
  const response: CreateLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLoadBalancerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult(data, context);
  const response: CreateLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseResult(data, context);
  const response: CreateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult(data, context);
  const response: CreateRelationalDatabaseFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult(data, context);
  const response: CreateRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAlarmResult(data, context);
  const response: DeleteAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAlarmCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAutoSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAutoSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAutoSnapshotResult(data, context);
  const response: DeleteAutoSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAutoSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBucketResult(data, context);
  const response: DeleteBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBucketCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBucketAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBucketAccessKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBucketAccessKeyResult(data, context);
  const response: DeleteBucketAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBucketAccessKeyCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCertificateResult(data, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteContactMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContactMethodCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContactMethodResult(data, context);
  const response: DeleteContactMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContactMethodCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteContainerImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContainerImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContainerImageResult(data, context);
  const response: DeleteContainerImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContainerImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteContainerServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContainerServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContainerServiceResult(data, context);
  const response: DeleteContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContainerServiceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDiskResult(data, context);
  const response: DeleteDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDiskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDiskSnapshotResult(data, context);
  const response: DeleteDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDiskSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDistributionResult(data, context);
  const response: DeleteDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDistributionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainResult(data, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDomainCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainEntryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainEntryResult(data, context);
  const response: DeleteDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDomainEntryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceResult(data, context);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceSnapshotResult(data, context);
  const response: DeleteInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteKeyPairResult(data, context);
  const response: DeleteKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteKeyPairCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteKnownHostKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnownHostKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteKnownHostKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteKnownHostKeysResult(data, context);
  const response: DeleteKnownHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteKnownHostKeysCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoadBalancerResult(data, context);
  const response: DeleteLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLoadBalancerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult(data, context);
  const response: DeleteLoadBalancerTlsCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRelationalDatabaseResult(data, context);
  const response: DeleteRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult(data, context);
  const response: DeleteRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachCertificateFromDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCertificateFromDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachCertificateFromDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachCertificateFromDistributionResult(data, context);
  const response: DetachCertificateFromDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachCertificateFromDistributionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachDiskResult(data, context);
  const response: DetachDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachDiskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesFromLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachInstancesFromLoadBalancerResult(data, context);
  const response: DetachInstancesFromLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachStaticIpResult(data, context);
  const response: DetachStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachStaticIpCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableAddOnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAddOnCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableAddOnResult(data, context);
  const response: DisableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableAddOnCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DownloadDefaultKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DownloadDefaultKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DownloadDefaultKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DownloadDefaultKeyPairResult(data, context);
  const response: DownloadDefaultKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DownloadDefaultKeyPairCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableAddOnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAddOnCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableAddOnCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableAddOnResult(data, context);
  const response: EnableAddOnCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableAddOnCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExportSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportSnapshotResult(data, context);
  const response: ExportSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetActiveNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActiveNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetActiveNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetActiveNamesResult(data, context);
  const response: GetActiveNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetActiveNamesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAlarmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAlarmsResult(data, context);
  const response: GetAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAlarmsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAutoSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAutoSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAutoSnapshotsResult(data, context);
  const response: GetAutoSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAutoSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintsResult(data, context);
  const response: GetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBucketAccessKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccessKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBucketAccessKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBucketAccessKeysResult(data, context);
  const response: GetBucketAccessKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBucketAccessKeysCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBucketBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBucketBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBucketBundlesResult(data, context);
  const response: GetBucketBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBucketBundlesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBucketMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBucketMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBucketMetricDataResult(data, context);
  const response: GetBucketMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBucketMetricDataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBucketsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBucketsResult(data, context);
  const response: GetBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBucketsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBundlesResult(data, context);
  const response: GetBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBundlesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificatesResult(data, context);
  const response: GetCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCertificatesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCloudFormationStackRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudFormationStackRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCloudFormationStackRecordsResult(data, context);
  const response: GetCloudFormationStackRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCloudFormationStackRecordsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContactMethodsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactMethodsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactMethodsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactMethodsResult(data, context);
  const response: GetContactMethodsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactMethodsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerAPIMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerAPIMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerAPIMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerAPIMetadataResult(data, context);
  const response: GetContainerAPIMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerAPIMetadataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerImagesResult(data, context);
  const response: GetContainerImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerImagesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerLogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerLogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerLogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerLogResult(data, context);
  const response: GetContainerLogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerLogCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerServiceDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServiceDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerServiceDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerServiceDeploymentsResult(data, context);
  const response: GetContainerServiceDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerServiceDeploymentsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerServiceMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServiceMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerServiceMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerServiceMetricDataResult(data, context);
  const response: GetContainerServiceMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerServiceMetricDataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerServicePowersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServicePowersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerServicePowersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContainerServicePowersResult(data, context);
  const response: GetContainerServicePowersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerServicePowersCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetContainerServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContainerServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ContainerServicesListResult(data, context);
  const response: GetContainerServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContainerServicesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDiskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDiskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskResult(data, context);
  const response: GetDiskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiskCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDisksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDisksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDisksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDisksResult(data, context);
  const response: GetDisksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDisksCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDiskSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDiskSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskSnapshotResult(data, context);
  const response: GetDiskSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiskSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDiskSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiskSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDiskSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiskSnapshotsResult(data, context);
  const response: GetDiskSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDiskSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDistributionBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDistributionBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionBundlesResult(data, context);
  const response: GetDistributionBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionBundlesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDistributionLatestCacheResetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionLatestCacheResetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDistributionLatestCacheResetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionLatestCacheResetResult(data, context);
  const response: GetDistributionLatestCacheResetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionLatestCacheResetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDistributionMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDistributionMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionMetricDataResult(data, context);
  const response: GetDistributionMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionMetricDataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDistributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDistributionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDistributionsResult(data, context);
  const response: GetDistributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDistributionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainResult(data, context);
  const response: GetDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainsResult(data, context);
  const response: GetDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetExportSnapshotRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportSnapshotRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetExportSnapshotRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExportSnapshotRecordsResult(data, context);
  const response: GetExportSnapshotRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetExportSnapshotRecordsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceResult(data, context);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceAccessDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceAccessDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceAccessDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceAccessDetailsResult(data, context);
  const response: GetInstanceAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceAccessDetailsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceMetricDataResult(data, context);
  const response: GetInstanceMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceMetricDataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstancePortStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancePortStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstancePortStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancePortStatesResult(data, context);
  const response: GetInstancePortStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstancePortStatesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancesResult(data, context);
  const response: GetInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstancesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceSnapshotResult(data, context);
  const response: GetInstanceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceSnapshotsResult(data, context);
  const response: GetInstanceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInstanceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceStateResult(data, context);
  const response: GetInstanceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceStateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPairResult(data, context);
  const response: GetKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKeyPairCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetKeyPairsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyPairsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetKeyPairsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetKeyPairsResult(data, context);
  const response: GetKeyPairsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetKeyPairsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLoadBalancerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLoadBalancerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerResult(data, context);
  const response: GetLoadBalancerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLoadBalancerMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerMetricDataResult(data, context);
  const response: GetLoadBalancerMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerMetricDataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancersResult(data, context);
  const response: GetLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancersCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult(data, context);
  const response: GetLoadBalancerTlsCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoadBalancerTlsPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLoadBalancerTlsPoliciesResult(data, context);
  const response: GetLoadBalancerTlsPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLoadBalancerTlsPoliciesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationResult(data, context);
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationsResult(data, context);
  const response: GetOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetOperationsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOperationsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationsForResourceResult(data, context);
  const response: GetOperationsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegionsResult(data, context);
  const response: GetRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseResult(data, context);
  const response: GetRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult(data, context);
  const response: GetRelationalDatabaseBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseBundlesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseBundlesResult(data, context);
  const response: GetRelationalDatabaseBundlesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseEventsResult(data, context);
  const response: GetRelationalDatabaseEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseEventsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseLogEventsResult(data, context);
  const response: GetRelationalDatabaseLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseLogStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult(data, context);
  const response: GetRelationalDatabaseLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult(data, context);
  const response: GetRelationalDatabaseMasterUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseMetricDataResult(data, context);
  const response: GetRelationalDatabaseMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseParametersResult(data, context);
  const response: GetRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseParametersCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabasesResult(data, context);
  const response: GetRelationalDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabasesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotResult(data, context);
  const response: GetRelationalDatabaseSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRelationalDatabaseSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult(data, context);
  const response: GetRelationalDatabaseSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStaticIpResult(data, context);
  const response: GetStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStaticIpCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetStaticIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStaticIpsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStaticIpsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStaticIpsResult(data, context);
  const response: GetStaticIpsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStaticIpsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyPairCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportKeyPairCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportKeyPairResult(data, context);
  const response: ImportKeyPairCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportKeyPairCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1IsVpcPeeredCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsVpcPeeredCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IsVpcPeeredCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IsVpcPeeredResult(data, context);
  const response: IsVpcPeeredCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IsVpcPeeredCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1OpenInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1OpenInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1OpenInstancePublicPortsResult(data, context);
  const response: OpenInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1OpenInstancePublicPortsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PeerVpcCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PeerVpcCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PeerVpcResult(data, context);
  const response: PeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PeerVpcCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAlarmResult(data, context);
  const response: PutAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAlarmCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutInstancePublicPortsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstancePublicPortsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInstancePublicPortsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInstancePublicPortsResult(data, context);
  const response: PutInstancePublicPortsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInstancePublicPortsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebootInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebootInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootInstanceResult(data, context);
  const response: RebootInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebootRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebootRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootRelationalDatabaseResult(data, context);
  const response: RebootRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterContainerImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterContainerImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterContainerImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterContainerImageResult(data, context);
  const response: RegisterContainerImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterContainerImageCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReleaseStaticIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseStaticIpCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReleaseStaticIpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReleaseStaticIpResult(data, context);
  const response: ReleaseStaticIpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReleaseStaticIpCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResetDistributionCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetDistributionCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetDistributionCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetDistributionCacheResult(data, context);
  const response: ResetDistributionCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetDistributionCacheCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendContactMethodVerificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendContactMethodVerificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendContactMethodVerificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendContactMethodVerificationResult(data, context);
  const response: SendContactMethodVerificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendContactMethodVerificationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetIpAddressTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIpAddressTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetIpAddressTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetIpAddressTypeResult(data, context);
  const response: SetIpAddressTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetIpAddressTypeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetResourceAccessForBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetResourceAccessForBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetResourceAccessForBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetResourceAccessForBucketResult(data, context);
  const response: SetResourceAccessForBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetResourceAccessForBucketCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartInstanceResult(data, context);
  const response: StartInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartRelationalDatabaseResult(data, context);
  const response: StartRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopInstanceResult(data, context);
  const response: StopInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopInstanceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRelationalDatabaseResult(data, context);
  const response: StopRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TestAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestAlarmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestAlarmResult(data, context);
  const response: TestAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestAlarmCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UnpeerVpcCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnpeerVpcCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UnpeerVpcCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnpeerVpcResult(data, context);
  const response: UnpeerVpcCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnpeerVpcCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBucketResult(data, context);
  const response: UpdateBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBucketCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateBucketBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBucketBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBucketBundleResult(data, context);
  const response: UpdateBucketBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBucketBundleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateContainerServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContainerServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContainerServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContainerServiceResult(data, context);
  const response: UpdateContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateContainerServiceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDistributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDistributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDistributionResult(data, context);
  const response: UpdateDistributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDistributionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDistributionBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionBundleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDistributionBundleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDistributionBundleResult(data, context);
  const response: UpdateDistributionBundleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDistributionBundleCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDomainEntryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEntryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDomainEntryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainEntryResult(data, context);
  const response: UpdateDomainEntryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainEntryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateInstanceMetadataOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceMetadataOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateInstanceMetadataOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateInstanceMetadataOptionsResult(data, context);
  const response: UpdateInstanceMetadataOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateInstanceMetadataOptionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLoadBalancerAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoadBalancerAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLoadBalancerAttributeResult(data, context);
  const response: UpdateLoadBalancerAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRelationalDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRelationalDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRelationalDatabaseResult(data, context);
  const response: UpdateRelationalDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRelationalDatabaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelationalDatabaseParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRelationalDatabaseParametersResult(data, context);
  const response: UpdateRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountSetupInProgressException":
    case "com.amazonaws.lightsail#AccountSetupInProgressException":
      throw await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lightsail#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lightsail#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "OperationFailureException":
    case "com.amazonaws.lightsail#OperationFailureException":
      throw await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lightsail#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "UnauthenticatedException":
    case "com.amazonaws.lightsail#UnauthenticatedException":
      throw await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AccountSetupInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSetupInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountSetupInProgressException(body, context);
  const exception = new AccountSetupInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationFailureException(body, context);
  const exception = new OperationFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(body, context);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnauthenticatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthenticatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthenticatedException(body, context);
  const exception = new UnauthenticatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccessRules = (input: AccessRules, context: __SerdeContext): any => {
  return {
    ...(input.allowPublicOverrides != null && { allowPublicOverrides: input.allowPublicOverrides }),
    ...(input.getObject != null && { getObject: input.getObject }),
  };
};

const serializeAws_json1_1AddOnRequest = (input: AddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnType != null && { addOnType: input.addOnType }),
    ...(input.autoSnapshotAddOnRequest != null && {
      autoSnapshotAddOnRequest: serializeAws_json1_1AutoSnapshotAddOnRequest(input.autoSnapshotAddOnRequest, context),
    }),
  };
};

const serializeAws_json1_1AddOnRequestList = (input: AddOnRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AddOnRequest(entry, context);
    });
};

const serializeAws_json1_1AllocateStaticIpRequest = (input: AllocateStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1AttachCertificateToDistributionRequest = (
  input: AttachCertificateToDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1AttachDiskRequest = (input: AttachDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.diskPath != null && { diskPath: input.diskPath }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1AttachedDiskMap = (input: Record<string, DiskMap[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1DiskMapList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1AttachInstancesToLoadBalancerRequest = (
  input: AttachInstancesToLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames != null && {
      instanceNames: serializeAws_json1_1ResourceNameList(input.instanceNames, context),
    }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest = (
  input: AttachLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1AttachStaticIpRequest = (input: AttachStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1AutoSnapshotAddOnRequest = (
  input: AutoSnapshotAddOnRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.snapshotTimeOfDay != null && { snapshotTimeOfDay: input.snapshotTimeOfDay }),
  };
};

const serializeAws_json1_1BucketAccessLogConfig = (input: BucketAccessLogConfig, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1CacheBehavior = (input: CacheBehavior, context: __SerdeContext): any => {
  return {
    ...(input.behavior != null && { behavior: input.behavior }),
  };
};

const serializeAws_json1_1CacheBehaviorList = (input: CacheBehaviorPerPath[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CacheBehaviorPerPath(entry, context);
    });
};

const serializeAws_json1_1CacheBehaviorPerPath = (input: CacheBehaviorPerPath, context: __SerdeContext): any => {
  return {
    ...(input.behavior != null && { behavior: input.behavior }),
    ...(input.path != null && { path: input.path }),
  };
};

const serializeAws_json1_1CacheSettings = (input: CacheSettings, context: __SerdeContext): any => {
  return {
    ...(input.allowedHTTPMethods != null && { allowedHTTPMethods: input.allowedHTTPMethods }),
    ...(input.cachedHTTPMethods != null && { cachedHTTPMethods: input.cachedHTTPMethods }),
    ...(input.defaultTTL != null && { defaultTTL: input.defaultTTL }),
    ...(input.forwardedCookies != null && {
      forwardedCookies: serializeAws_json1_1CookieObject(input.forwardedCookies, context),
    }),
    ...(input.forwardedHeaders != null && {
      forwardedHeaders: serializeAws_json1_1HeaderObject(input.forwardedHeaders, context),
    }),
    ...(input.forwardedQueryStrings != null && {
      forwardedQueryStrings: serializeAws_json1_1QueryStringObject(input.forwardedQueryStrings, context),
    }),
    ...(input.maximumTTL != null && { maximumTTL: input.maximumTTL }),
    ...(input.minimumTTL != null && { minimumTTL: input.minimumTTL }),
  };
};

const serializeAws_json1_1CertificateStatusList = (
  input: (CertificateStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CloseInstancePublicPortsRequest = (
  input: CloseInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.portInfo != null && { portInfo: serializeAws_json1_1PortInfo(input.portInfo, context) }),
  };
};

const serializeAws_json1_1ContactProtocolsList = (
  input: (ContactProtocol | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Container = (input: Container, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: serializeAws_json1_1StringList(input.command, context) }),
    ...(input.environment != null && { environment: serializeAws_json1_1Environment(input.environment, context) }),
    ...(input.image != null && { image: input.image }),
    ...(input.ports != null && { ports: serializeAws_json1_1PortMap(input.ports, context) }),
  };
};

const serializeAws_json1_1ContainerMap = (input: Record<string, Container>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1Container(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1ContainerServiceDeploymentRequest = (
  input: ContainerServiceDeploymentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.containers != null && { containers: serializeAws_json1_1ContainerMap(input.containers, context) }),
    ...(input.publicEndpoint != null && {
      publicEndpoint: serializeAws_json1_1EndpointRequest(input.publicEndpoint, context),
    }),
  };
};

const serializeAws_json1_1ContainerServiceECRImagePullerRoleRequest = (
  input: ContainerServiceECRImagePullerRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.isActive != null && { isActive: input.isActive }),
  };
};

const serializeAws_json1_1ContainerServiceHealthCheckConfig = (
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

const serializeAws_json1_1ContainerServicePublicDomains = (
  input: Record<string, string[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ContainerServicePublicDomainsList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1ContainerServicePublicDomainsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CookieObject = (input: CookieObject, context: __SerdeContext): any => {
  return {
    ...(input.cookiesAllowList != null && {
      cookiesAllowList: serializeAws_json1_1StringList(input.cookiesAllowList, context),
    }),
    ...(input.option != null && { option: input.option }),
  };
};

const serializeAws_json1_1CopySnapshotRequest = (input: CopySnapshotRequest, context: __SerdeContext): any => {
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

const serializeAws_json1_1CreateBucketAccessKeyRequest = (
  input: CreateBucketAccessKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

const serializeAws_json1_1CreateBucketRequest = (input: CreateBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.enableObjectVersioning != null && { enableObjectVersioning: input.enableObjectVersioning }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateCertificateRequest = (
  input: CreateCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: serializeAws_json1_1SubjectAlternativeNameList(input.subjectAlternativeNames, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateCloudFormationStackRequest = (
  input: CreateCloudFormationStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instances != null && { instances: serializeAws_json1_1InstanceEntryList(input.instances, context) }),
  };
};

const serializeAws_json1_1CreateContactMethodRequest = (
  input: CreateContactMethodRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.contactEndpoint != null && { contactEndpoint: input.contactEndpoint }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1CreateContainerServiceDeploymentRequest = (
  input: CreateContainerServiceDeploymentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.containers != null && { containers: serializeAws_json1_1ContainerMap(input.containers, context) }),
    ...(input.publicEndpoint != null && {
      publicEndpoint: serializeAws_json1_1EndpointRequest(input.publicEndpoint, context),
    }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1CreateContainerServiceRegistryLoginRequest = (
  input: CreateContainerServiceRegistryLoginRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1CreateContainerServiceRequest = (
  input: CreateContainerServiceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.deployment != null && {
      deployment: serializeAws_json1_1ContainerServiceDeploymentRequest(input.deployment, context),
    }),
    ...(input.power != null && { power: input.power }),
    ...(input.privateRegistryAccess != null && {
      privateRegistryAccess: serializeAws_json1_1PrivateRegistryAccessRequest(input.privateRegistryAccess, context),
    }),
    ...(input.publicDomainNames != null && {
      publicDomainNames: serializeAws_json1_1ContainerServicePublicDomains(input.publicDomainNames, context),
    }),
    ...(input.scale != null && { scale: input.scale }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDiskFromSnapshotRequest = (
  input: CreateDiskFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addOns != null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
    ...(input.restoreDate != null && { restoreDate: input.restoreDate }),
    ...(input.sizeInGb != null && { sizeInGb: input.sizeInGb }),
    ...(input.sourceDiskName != null && { sourceDiskName: input.sourceDiskName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.useLatestRestorableAutoSnapshot != null && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
  };
};

const serializeAws_json1_1CreateDiskRequest = (input: CreateDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns != null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.sizeInGb != null && { sizeInGb: input.sizeInGb }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDiskSnapshotRequest = (
  input: CreateDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDistributionRequest = (
  input: CreateDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.cacheBehaviorSettings != null && {
      cacheBehaviorSettings: serializeAws_json1_1CacheSettings(input.cacheBehaviorSettings, context),
    }),
    ...(input.cacheBehaviors != null && {
      cacheBehaviors: serializeAws_json1_1CacheBehaviorList(input.cacheBehaviors, context),
    }),
    ...(input.defaultCacheBehavior != null && {
      defaultCacheBehavior: serializeAws_json1_1CacheBehavior(input.defaultCacheBehavior, context),
    }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.origin != null && { origin: serializeAws_json1_1InputOrigin(input.origin, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDomainEntryRequest = (
  input: CreateDomainEntryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainEntry != null && { domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context) }),
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateInstancesFromSnapshotRequest = (
  input: CreateInstancesFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addOns != null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.attachedDiskMapping != null && {
      attachedDiskMapping: serializeAws_json1_1AttachedDiskMap(input.attachedDiskMapping, context),
    }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.instanceNames != null && { instanceNames: serializeAws_json1_1StringList(input.instanceNames, context) }),
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.restoreDate != null && { restoreDate: input.restoreDate }),
    ...(input.sourceInstanceName != null && { sourceInstanceName: input.sourceInstanceName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.useLatestRestorableAutoSnapshot != null && {
      useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
    }),
    ...(input.userData != null && { userData: input.userData }),
  };
};

const serializeAws_json1_1CreateInstanceSnapshotRequest = (
  input: CreateInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateInstancesRequest = (input: CreateInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOns != null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.blueprintId != null && { blueprintId: input.blueprintId }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.customImageName != null && { customImageName: input.customImageName }),
    ...(input.instanceNames != null && { instanceNames: serializeAws_json1_1StringList(input.instanceNames, context) }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.userData != null && { userData: input.userData }),
  };
};

const serializeAws_json1_1CreateKeyPairRequest = (input: CreateKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateLoadBalancerRequest = (
  input: CreateLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAlternativeNames != null && {
      certificateAlternativeNames: serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context),
    }),
    ...(input.certificateDomainName != null && { certificateDomainName: input.certificateDomainName }),
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.healthCheckPath != null && { healthCheckPath: input.healthCheckPath }),
    ...(input.instancePort != null && { instancePort: input.instancePort }),
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.tlsPolicyName != null && { tlsPolicyName: input.tlsPolicyName }),
  };
};

const serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest = (
  input: CreateLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAlternativeNames != null && {
      certificateAlternativeNames: serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context),
    }),
    ...(input.certificateDomainName != null && { certificateDomainName: input.certificateDomainName }),
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest = (
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
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.useLatestRestorableTime != null && { useLatestRestorableTime: input.useLatestRestorableTime }),
  };
};

const serializeAws_json1_1CreateRelationalDatabaseRequest = (
  input: CreateRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
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
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest = (
  input: CreateRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1DeleteAlarmRequest = (input: DeleteAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
  };
};

const serializeAws_json1_1DeleteAutoSnapshotRequest = (
  input: DeleteAutoSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.date != null && { date: input.date }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1DeleteBucketAccessKeyRequest = (
  input: DeleteBucketAccessKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessKeyId != null && { accessKeyId: input.accessKeyId }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

const serializeAws_json1_1DeleteBucketRequest = (input: DeleteBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.forceDelete != null && { forceDelete: input.forceDelete }),
  };
};

const serializeAws_json1_1DeleteCertificateRequest = (
  input: DeleteCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
  };
};

const serializeAws_json1_1DeleteContactMethodRequest = (
  input: DeleteContactMethodRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1DeleteContainerImageRequest = (
  input: DeleteContainerImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.image != null && { image: input.image }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1DeleteContainerServiceRequest = (
  input: DeleteContainerServiceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1DeleteDiskRequest = (input: DeleteDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
    ...(input.forceDeleteAddOns != null && { forceDeleteAddOns: input.forceDeleteAddOns }),
  };
};

const serializeAws_json1_1DeleteDiskSnapshotRequest = (
  input: DeleteDiskSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
  };
};

const serializeAws_json1_1DeleteDistributionRequest = (
  input: DeleteDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1DeleteDomainEntryRequest = (
  input: DeleteDomainEntryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainEntry != null && { domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context) }),
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1DeleteInstanceRequest = (input: DeleteInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.forceDeleteAddOns != null && { forceDeleteAddOns: input.forceDeleteAddOns }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1DeleteInstanceSnapshotRequest = (
  input: DeleteInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
  };
};

const serializeAws_json1_1DeleteKeyPairRequest = (input: DeleteKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.expectedFingerprint != null && { expectedFingerprint: input.expectedFingerprint }),
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
  };
};

const serializeAws_json1_1DeleteKnownHostKeysRequest = (
  input: DeleteKnownHostKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1DeleteLoadBalancerRequest = (
  input: DeleteLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest = (
  input: DeleteLoadBalancerTlsCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.force != null && { force: input.force }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1DeleteRelationalDatabaseRequest = (
  input: DeleteRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.finalRelationalDatabaseSnapshotName != null && {
      finalRelationalDatabaseSnapshotName: input.finalRelationalDatabaseSnapshotName,
    }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.skipFinalSnapshot != null && { skipFinalSnapshot: input.skipFinalSnapshot }),
  };
};

const serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest = (
  input: DeleteRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

const serializeAws_json1_1DetachCertificateFromDistributionRequest = (
  input: DetachCertificateFromDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1DetachDiskRequest = (input: DetachDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
  };
};

const serializeAws_json1_1DetachInstancesFromLoadBalancerRequest = (
  input: DetachInstancesFromLoadBalancerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames != null && {
      instanceNames: serializeAws_json1_1ResourceNameList(input.instanceNames, context),
    }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1DetachStaticIpRequest = (input: DetachStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1DisableAddOnRequest = (input: DisableAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnType != null && { addOnType: input.addOnType }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1DiskMap = (input: DiskMap, context: __SerdeContext): any => {
  return {
    ...(input.newDiskName != null && { newDiskName: input.newDiskName }),
    ...(input.originalDiskPath != null && { originalDiskPath: input.originalDiskPath }),
  };
};

const serializeAws_json1_1DiskMapList = (input: DiskMap[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DiskMap(entry, context);
    });
};

const serializeAws_json1_1DomainEntry = (input: DomainEntry, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.isAlias != null && { isAlias: input.isAlias }),
    ...(input.name != null && { name: input.name }),
    ...(input.options != null && { options: serializeAws_json1_1DomainEntryOptions(input.options, context) }),
    ...(input.target != null && { target: input.target }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1DomainEntryOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DownloadDefaultKeyPairRequest = (
  input: DownloadDefaultKeyPairRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1EnableAddOnRequest = (input: EnableAddOnRequest, context: __SerdeContext): any => {
  return {
    ...(input.addOnRequest != null && { addOnRequest: serializeAws_json1_1AddOnRequest(input.addOnRequest, context) }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.containerPort != null && { containerPort: input.containerPort }),
    ...(input.healthCheck != null && {
      healthCheck: serializeAws_json1_1ContainerServiceHealthCheckConfig(input.healthCheck, context),
    }),
  };
};

const serializeAws_json1_1Environment = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1ExportSnapshotRequest = (input: ExportSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.sourceSnapshotName != null && { sourceSnapshotName: input.sourceSnapshotName }),
  };
};

const serializeAws_json1_1GetActiveNamesRequest = (input: GetActiveNamesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetAlarmsRequest = (input: GetAlarmsRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
    ...(input.monitoredResourceName != null && { monitoredResourceName: input.monitoredResourceName }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetAutoSnapshotsRequest = (input: GetAutoSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1GetBlueprintsRequest = (input: GetBlueprintsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetBucketAccessKeysRequest = (
  input: GetBucketAccessKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

const serializeAws_json1_1GetBucketBundlesRequest = (input: GetBucketBundlesRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
  };
};

const serializeAws_json1_1GetBucketMetricDataRequest = (
  input: GetBucketMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetBucketsRequest = (input: GetBucketsRequest, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.includeConnectedResources != null && { includeConnectedResources: input.includeConnectedResources }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetBundlesRequest = (input: GetBundlesRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetCertificatesRequest = (input: GetCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.certificateName != null && { certificateName: input.certificateName }),
    ...(input.certificateStatuses != null && {
      certificateStatuses: serializeAws_json1_1CertificateStatusList(input.certificateStatuses, context),
    }),
    ...(input.includeCertificateDetails != null && { includeCertificateDetails: input.includeCertificateDetails }),
  };
};

const serializeAws_json1_1GetCloudFormationStackRecordsRequest = (
  input: GetCloudFormationStackRecordsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetContactMethodsRequest = (
  input: GetContactMethodsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocols != null && { protocols: serializeAws_json1_1ContactProtocolsList(input.protocols, context) }),
  };
};

const serializeAws_json1_1GetContainerAPIMetadataRequest = (
  input: GetContainerAPIMetadataRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetContainerImagesRequest = (
  input: GetContainerImagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1GetContainerLogRequest = (input: GetContainerLogRequest, context: __SerdeContext): any => {
  return {
    ...(input.containerName != null && { containerName: input.containerName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1GetContainerServiceDeploymentsRequest = (
  input: GetContainerServiceDeploymentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1GetContainerServiceMetricDataRequest = (
  input: GetContainerServiceMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
  };
};

const serializeAws_json1_1GetContainerServicePowersRequest = (
  input: GetContainerServicePowersRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetContainerServicesRequest = (
  input: GetContainerServicesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1GetDiskRequest = (input: GetDiskRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskName != null && { diskName: input.diskName }),
  };
};

const serializeAws_json1_1GetDiskSnapshotRequest = (input: GetDiskSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.diskSnapshotName != null && { diskSnapshotName: input.diskSnapshotName }),
  };
};

const serializeAws_json1_1GetDiskSnapshotsRequest = (input: GetDiskSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetDisksRequest = (input: GetDisksRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetDistributionBundlesRequest = (
  input: GetDistributionBundlesRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetDistributionLatestCacheResetRequest = (
  input: GetDistributionLatestCacheResetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1GetDistributionMetricDataRequest = (
  input: GetDistributionMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetDistributionsRequest = (input: GetDistributionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetDomainRequest = (input: GetDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1GetDomainsRequest = (input: GetDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetExportSnapshotRecordsRequest = (
  input: GetExportSnapshotRecordsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetInstanceAccessDetailsRequest = (
  input: GetInstanceAccessDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1GetInstanceMetricDataRequest = (
  input: GetInstanceMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetInstancePortStatesRequest = (
  input: GetInstancePortStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GetInstanceRequest = (input: GetInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GetInstanceSnapshotRequest = (
  input: GetInstanceSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceSnapshotName != null && { instanceSnapshotName: input.instanceSnapshotName }),
  };
};

const serializeAws_json1_1GetInstanceSnapshotsRequest = (
  input: GetInstanceSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetInstancesRequest = (input: GetInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetInstanceStateRequest = (input: GetInstanceStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GetKeyPairRequest = (input: GetKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
  };
};

const serializeAws_json1_1GetKeyPairsRequest = (input: GetKeyPairsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeDefaultKeyPair != null && { includeDefaultKeyPair: input.includeDefaultKeyPair }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetLoadBalancerMetricDataRequest = (
  input: GetLoadBalancerMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetLoadBalancerRequest = (input: GetLoadBalancerRequest, context: __SerdeContext): any => {
  return {
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1GetLoadBalancersRequest = (input: GetLoadBalancersRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest = (
  input: GetLoadBalancerTlsCertificatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1GetLoadBalancerTlsPoliciesRequest = (
  input: GetLoadBalancerTlsPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetOperationRequest = (input: GetOperationRequest, context: __SerdeContext): any => {
  return {
    ...(input.operationId != null && { operationId: input.operationId }),
  };
};

const serializeAws_json1_1GetOperationsForResourceRequest = (
  input: GetOperationsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1GetOperationsRequest = (input: GetOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRegionsRequest = (input: GetRegionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeAvailabilityZones != null && { includeAvailabilityZones: input.includeAvailabilityZones }),
    ...(input.includeRelationalDatabaseAvailabilityZones != null && {
      includeRelationalDatabaseAvailabilityZones: input.includeRelationalDatabaseAvailabilityZones,
    }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest = (
  input: GetRelationalDatabaseBlueprintsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseBundlesRequest = (
  input: GetRelationalDatabaseBundlesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.includeInactive != null && { includeInactive: input.includeInactive }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseEventsRequest = (
  input: GetRelationalDatabaseEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.durationInMinutes != null && { durationInMinutes: input.durationInMinutes }),
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseLogEventsRequest = (
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

const serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest = (
  input: GetRelationalDatabaseLogStreamsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest = (
  input: GetRelationalDatabaseMasterUserPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.passwordVersion != null && { passwordVersion: input.passwordVersion }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseMetricDataRequest = (
  input: GetRelationalDatabaseMetricDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.period != null && { period: input.period }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statistics != null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseParametersRequest = (
  input: GetRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseRequest = (
  input: GetRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseSnapshotRequest = (
  input: GetRelationalDatabaseSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

const serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest = (
  input: GetRelationalDatabaseSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetRelationalDatabasesRequest = (
  input: GetRelationalDatabasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1GetStaticIpRequest = (input: GetStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1GetStaticIpsRequest = (input: GetStaticIpsRequest, context: __SerdeContext): any => {
  return {
    ...(input.pageToken != null && { pageToken: input.pageToken }),
  };
};

const serializeAws_json1_1HeaderForwardList = (input: (HeaderEnum | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1HeaderObject = (input: HeaderObject, context: __SerdeContext): any => {
  return {
    ...(input.headersAllowList != null && {
      headersAllowList: serializeAws_json1_1HeaderForwardList(input.headersAllowList, context),
    }),
    ...(input.option != null && { option: input.option }),
  };
};

const serializeAws_json1_1ImportKeyPairRequest = (input: ImportKeyPairRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyPairName != null && { keyPairName: input.keyPairName }),
    ...(input.publicKeyBase64 != null && { publicKeyBase64: input.publicKeyBase64 }),
  };
};

const serializeAws_json1_1InputOrigin = (input: InputOrigin, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.protocolPolicy != null && { protocolPolicy: input.protocolPolicy }),
    ...(input.regionName != null && { regionName: input.regionName }),
  };
};

const serializeAws_json1_1InstanceEntry = (input: InstanceEntry, context: __SerdeContext): any => {
  return {
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.portInfoSource != null && { portInfoSource: input.portInfoSource }),
    ...(input.sourceName != null && { sourceName: input.sourceName }),
    ...(input.userData != null && { userData: input.userData }),
  };
};

const serializeAws_json1_1InstanceEntryList = (input: InstanceEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceEntry(entry, context);
    });
};

const serializeAws_json1_1IsVpcPeeredRequest = (input: IsVpcPeeredRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1MetricStatisticList = (input: (MetricStatistic | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1NotificationTriggerList = (input: (AlarmState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpenInstancePublicPortsRequest = (
  input: OpenInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.portInfo != null && { portInfo: serializeAws_json1_1PortInfo(input.portInfo, context) }),
  };
};

const serializeAws_json1_1PartnerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PeerVpcRequest = (input: PeerVpcRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1PortInfo = (input: PortInfo, context: __SerdeContext): any => {
  return {
    ...(input.cidrListAliases != null && {
      cidrListAliases: serializeAws_json1_1StringList(input.cidrListAliases, context),
    }),
    ...(input.cidrs != null && { cidrs: serializeAws_json1_1StringList(input.cidrs, context) }),
    ...(input.fromPort != null && { fromPort: input.fromPort }),
    ...(input.ipv6Cidrs != null && { ipv6Cidrs: serializeAws_json1_1StringList(input.ipv6Cidrs, context) }),
    ...(input.protocol != null && { protocol: input.protocol }),
    ...(input.toPort != null && { toPort: input.toPort }),
  };
};

const serializeAws_json1_1PortInfoList = (input: PortInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PortInfo(entry, context);
    });
};

const serializeAws_json1_1PortMap = (
  input: Record<string, ContainerServiceProtocol | string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1PrivateRegistryAccessRequest = (
  input: PrivateRegistryAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ecrImagePullerRole != null && {
      ecrImagePullerRole: serializeAws_json1_1ContainerServiceECRImagePullerRoleRequest(
        input.ecrImagePullerRole,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutAlarmRequest = (input: PutAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.contactProtocols != null && {
      contactProtocols: serializeAws_json1_1ContactProtocolsList(input.contactProtocols, context),
    }),
    ...(input.datapointsToAlarm != null && { datapointsToAlarm: input.datapointsToAlarm }),
    ...(input.evaluationPeriods != null && { evaluationPeriods: input.evaluationPeriods }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.monitoredResourceName != null && { monitoredResourceName: input.monitoredResourceName }),
    ...(input.notificationEnabled != null && { notificationEnabled: input.notificationEnabled }),
    ...(input.notificationTriggers != null && {
      notificationTriggers: serializeAws_json1_1NotificationTriggerList(input.notificationTriggers, context),
    }),
    ...(input.threshold != null && { threshold: __serializeFloat(input.threshold) }),
    ...(input.treatMissingData != null && { treatMissingData: input.treatMissingData }),
  };
};

const serializeAws_json1_1PutInstancePublicPortsRequest = (
  input: PutInstancePublicPortsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
    ...(input.portInfos != null && { portInfos: serializeAws_json1_1PortInfoList(input.portInfos, context) }),
  };
};

const serializeAws_json1_1QueryStringObject = (input: QueryStringObject, context: __SerdeContext): any => {
  return {
    ...(input.option != null && { option: input.option }),
    ...(input.queryStringsAllowList != null && {
      queryStringsAllowList: serializeAws_json1_1StringList(input.queryStringsAllowList, context),
    }),
  };
};

const serializeAws_json1_1RebootInstanceRequest = (input: RebootInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1RebootRelationalDatabaseRequest = (
  input: RebootRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1RegisterContainerImageRequest = (
  input: RegisterContainerImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.digest != null && { digest: input.digest }),
    ...(input.label != null && { label: input.label }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1RelationalDatabaseParameter = (
  input: RelationalDatabaseParameter,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1RelationalDatabaseParameterList = (
  input: RelationalDatabaseParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RelationalDatabaseParameter(entry, context);
    });
};

const serializeAws_json1_1ReleaseStaticIpRequest = (input: ReleaseStaticIpRequest, context: __SerdeContext): any => {
  return {
    ...(input.staticIpName != null && { staticIpName: input.staticIpName }),
  };
};

const serializeAws_json1_1ResetDistributionCacheRequest = (
  input: ResetDistributionCacheRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1ResourceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SendContactMethodVerificationRequest = (
  input: SendContactMethodVerificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

const serializeAws_json1_1SetIpAddressTypeRequest = (input: SetIpAddressTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ipAddressType != null && { ipAddressType: input.ipAddressType }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  };
};

const serializeAws_json1_1SetResourceAccessForBucketRequest = (
  input: SetResourceAccessForBucketRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.access != null && { access: input.access }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
  };
};

const serializeAws_json1_1StartInstanceRequest = (input: StartInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1StartRelationalDatabaseRequest = (
  input: StartRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1StopInstanceRequest = (input: StopInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.force != null && { force: input.force }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1StopRelationalDatabaseRequest = (
  input: StopRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
    ...(input.relationalDatabaseSnapshotName != null && {
      relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
    }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubjectAlternativeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1TestAlarmRequest = (input: TestAlarmRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmName != null && { alarmName: input.alarmName }),
    ...(input.state != null && { state: input.state }),
  };
};

const serializeAws_json1_1UnpeerVpcRequest = (input: UnpeerVpcRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateBucketBundleRequest = (
  input: UpdateBucketBundleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.bundleId != null && { bundleId: input.bundleId }),
  };
};

const serializeAws_json1_1UpdateBucketRequest = (input: UpdateBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.accessLogConfig != null && {
      accessLogConfig: serializeAws_json1_1BucketAccessLogConfig(input.accessLogConfig, context),
    }),
    ...(input.accessRules != null && { accessRules: serializeAws_json1_1AccessRules(input.accessRules, context) }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.readonlyAccessAccounts != null && {
      readonlyAccessAccounts: serializeAws_json1_1PartnerIdList(input.readonlyAccessAccounts, context),
    }),
    ...(input.versioning != null && { versioning: input.versioning }),
  };
};

const serializeAws_json1_1UpdateContainerServiceRequest = (
  input: UpdateContainerServiceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.isDisabled != null && { isDisabled: input.isDisabled }),
    ...(input.power != null && { power: input.power }),
    ...(input.privateRegistryAccess != null && {
      privateRegistryAccess: serializeAws_json1_1PrivateRegistryAccessRequest(input.privateRegistryAccess, context),
    }),
    ...(input.publicDomainNames != null && {
      publicDomainNames: serializeAws_json1_1ContainerServicePublicDomains(input.publicDomainNames, context),
    }),
    ...(input.scale != null && { scale: input.scale }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1UpdateDistributionBundleRequest = (
  input: UpdateDistributionBundleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.bundleId != null && { bundleId: input.bundleId }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
  };
};

const serializeAws_json1_1UpdateDistributionRequest = (
  input: UpdateDistributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.cacheBehaviorSettings != null && {
      cacheBehaviorSettings: serializeAws_json1_1CacheSettings(input.cacheBehaviorSettings, context),
    }),
    ...(input.cacheBehaviors != null && {
      cacheBehaviors: serializeAws_json1_1CacheBehaviorList(input.cacheBehaviors, context),
    }),
    ...(input.defaultCacheBehavior != null && {
      defaultCacheBehavior: serializeAws_json1_1CacheBehavior(input.defaultCacheBehavior, context),
    }),
    ...(input.distributionName != null && { distributionName: input.distributionName }),
    ...(input.isEnabled != null && { isEnabled: input.isEnabled }),
    ...(input.origin != null && { origin: serializeAws_json1_1InputOrigin(input.origin, context) }),
  };
};

const serializeAws_json1_1UpdateDomainEntryRequest = (
  input: UpdateDomainEntryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainEntry != null && { domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context) }),
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1UpdateInstanceMetadataOptionsRequest = (
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

const serializeAws_json1_1UpdateLoadBalancerAttributeRequest = (
  input: UpdateLoadBalancerAttributeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeName != null && { attributeName: input.attributeName }),
    ...(input.attributeValue != null && { attributeValue: input.attributeValue }),
    ...(input.loadBalancerName != null && { loadBalancerName: input.loadBalancerName }),
  };
};

const serializeAws_json1_1UpdateRelationalDatabaseParametersRequest = (
  input: UpdateRelationalDatabaseParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameters != null && {
      parameters: serializeAws_json1_1RelationalDatabaseParameterList(input.parameters, context),
    }),
    ...(input.relationalDatabaseName != null && { relationalDatabaseName: input.relationalDatabaseName }),
  };
};

const serializeAws_json1_1UpdateRelationalDatabaseRequest = (
  input: UpdateRelationalDatabaseRequest,
  context: __SerdeContext
): any => {
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

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1AccessKey = (output: any, context: __SerdeContext): AccessKey => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUsed: output.lastUsed != null ? deserializeAws_json1_1AccessKeyLastUsed(output.lastUsed, context) : undefined,
    secretAccessKey: __expectString(output.secretAccessKey),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1AccessKeyLastUsed = (output: any, context: __SerdeContext): AccessKeyLastUsed => {
  return {
    lastUsedDate:
      output.lastUsedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUsedDate)))
        : undefined,
    region: __expectString(output.region),
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_json1_1AccessKeyList = (output: any, context: __SerdeContext): AccessKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccessKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccessReceiverList = (output: any, context: __SerdeContext): ResourceReceivingAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceReceivingAccess(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccessRules = (output: any, context: __SerdeContext): AccessRules => {
  return {
    allowPublicOverrides: __expectBoolean(output.allowPublicOverrides),
    getObject: __expectString(output.getObject),
  } as any;
};

const deserializeAws_json1_1AccountLevelBpaSync = (output: any, context: __SerdeContext): AccountLevelBpaSync => {
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

const deserializeAws_json1_1AccountSetupInProgressException = (
  output: any,
  context: __SerdeContext
): AccountSetupInProgressException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1AddOn = (output: any, context: __SerdeContext): AddOn => {
  return {
    name: __expectString(output.name),
    nextSnapshotTimeOfDay: __expectString(output.nextSnapshotTimeOfDay),
    snapshotTimeOfDay: __expectString(output.snapshotTimeOfDay),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1AddOnList = (output: any, context: __SerdeContext): AddOn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AddOn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    arn: __expectString(output.arn),
    comparisonOperator: __expectString(output.comparisonOperator),
    contactProtocols:
      output.contactProtocols != null
        ? deserializeAws_json1_1ContactProtocolsList(output.contactProtocols, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    datapointsToAlarm: __expectInt32(output.datapointsToAlarm),
    evaluationPeriods: __expectInt32(output.evaluationPeriods),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    metricName: __expectString(output.metricName),
    monitoredResourceInfo:
      output.monitoredResourceInfo != null
        ? deserializeAws_json1_1MonitoredResourceInfo(output.monitoredResourceInfo, context)
        : undefined,
    name: __expectString(output.name),
    notificationEnabled: __expectBoolean(output.notificationEnabled),
    notificationTriggers:
      output.notificationTriggers != null
        ? deserializeAws_json1_1NotificationTriggerList(output.notificationTriggers, context)
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

const deserializeAws_json1_1AlarmsList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AllocateStaticIpResult = (output: any, context: __SerdeContext): AllocateStaticIpResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AttachCertificateToDistributionResult = (
  output: any,
  context: __SerdeContext
): AttachCertificateToDistributionResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AttachDiskResult = (output: any, context: __SerdeContext): AttachDiskResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AttachedDisk = (output: any, context: __SerdeContext): AttachedDisk => {
  return {
    path: __expectString(output.path),
    sizeInGb: __expectInt32(output.sizeInGb),
  } as any;
};

const deserializeAws_json1_1AttachedDiskList = (output: any, context: __SerdeContext): AttachedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttachedDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AttachInstancesToLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): AttachInstancesToLoadBalancerResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTlsCertificateResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AttachStaticIpResult = (output: any, context: __SerdeContext): AttachStaticIpResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AutoSnapshotDetails = (output: any, context: __SerdeContext): AutoSnapshotDetails => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    date: __expectString(output.date),
    fromAttachedDisks:
      output.fromAttachedDisks != null
        ? deserializeAws_json1_1AttachedDiskList(output.fromAttachedDisks, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1AutoSnapshotDetailsList = (output: any, context: __SerdeContext): AutoSnapshotDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AutoSnapshotDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    state: __expectString(output.state),
    zoneName: __expectString(output.zoneName),
  } as any;
};

const deserializeAws_json1_1AvailabilityZoneList = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AvailabilityZone(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return {
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

const deserializeAws_json1_1BlueprintList = (output: any, context: __SerdeContext): Blueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Blueprint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Bucket = (output: any, context: __SerdeContext): Bucket => {
  return {
    ableToUpdateBundle: __expectBoolean(output.ableToUpdateBundle),
    accessLogConfig:
      output.accessLogConfig != null
        ? deserializeAws_json1_1BucketAccessLogConfig(output.accessLogConfig, context)
        : undefined,
    accessRules:
      output.accessRules != null ? deserializeAws_json1_1AccessRules(output.accessRules, context) : undefined,
    arn: __expectString(output.arn),
    bundleId: __expectString(output.bundleId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    objectVersioning: __expectString(output.objectVersioning),
    readonlyAccessAccounts:
      output.readonlyAccessAccounts != null
        ? deserializeAws_json1_1PartnerIdList(output.readonlyAccessAccounts, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    resourcesReceivingAccess:
      output.resourcesReceivingAccess != null
        ? deserializeAws_json1_1AccessReceiverList(output.resourcesReceivingAccess, context)
        : undefined,
    state: output.state != null ? deserializeAws_json1_1BucketState(output.state, context) : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1BucketAccessLogConfig = (output: any, context: __SerdeContext): BucketAccessLogConfig => {
  return {
    destination: __expectString(output.destination),
    enabled: __expectBoolean(output.enabled),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_json1_1BucketBundle = (output: any, context: __SerdeContext): BucketBundle => {
  return {
    bundleId: __expectString(output.bundleId),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    price: __limitedParseFloat32(output.price),
    storagePerMonthInGb: __expectInt32(output.storagePerMonthInGb),
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

const deserializeAws_json1_1BucketBundleList = (output: any, context: __SerdeContext): BucketBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BucketBundle(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BucketList = (output: any, context: __SerdeContext): Bucket[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Bucket(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BucketState = (output: any, context: __SerdeContext): BucketState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Bundle = (output: any, context: __SerdeContext): Bundle => {
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
    supportedPlatforms:
      output.supportedPlatforms != null
        ? deserializeAws_json1_1InstancePlatformList(output.supportedPlatforms, context)
        : undefined,
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

const deserializeAws_json1_1BundleList = (output: any, context: __SerdeContext): Bundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Bundle(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CacheBehavior = (output: any, context: __SerdeContext): CacheBehavior => {
  return {
    behavior: __expectString(output.behavior),
  } as any;
};

const deserializeAws_json1_1CacheBehaviorList = (output: any, context: __SerdeContext): CacheBehaviorPerPath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CacheBehaviorPerPath(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CacheBehaviorPerPath = (output: any, context: __SerdeContext): CacheBehaviorPerPath => {
  return {
    behavior: __expectString(output.behavior),
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_json1_1CacheSettings = (output: any, context: __SerdeContext): CacheSettings => {
  return {
    allowedHTTPMethods: __expectString(output.allowedHTTPMethods),
    cachedHTTPMethods: __expectString(output.cachedHTTPMethods),
    defaultTTL: __expectLong(output.defaultTTL),
    forwardedCookies:
      output.forwardedCookies != null
        ? deserializeAws_json1_1CookieObject(output.forwardedCookies, context)
        : undefined,
    forwardedHeaders:
      output.forwardedHeaders != null
        ? deserializeAws_json1_1HeaderObject(output.forwardedHeaders, context)
        : undefined,
    forwardedQueryStrings:
      output.forwardedQueryStrings != null
        ? deserializeAws_json1_1QueryStringObject(output.forwardedQueryStrings, context)
        : undefined,
    maximumTTL: __expectLong(output.maximumTTL),
    minimumTTL: __expectLong(output.minimumTTL),
  } as any;
};

const deserializeAws_json1_1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    domainName: __expectString(output.domainName),
    domainValidationRecords:
      output.domainValidationRecords != null
        ? deserializeAws_json1_1DomainValidationRecordList(output.domainValidationRecords, context)
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
    renewalSummary:
      output.renewalSummary != null ? deserializeAws_json1_1RenewalSummary(output.renewalSummary, context) : undefined,
    requestFailureReason: __expectString(output.requestFailureReason),
    revocationReason: __expectString(output.revocationReason),
    revokedAt:
      output.revokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revokedAt))) : undefined,
    serialNumber: __expectString(output.serialNumber),
    status: __expectString(output.status),
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? deserializeAws_json1_1SubjectAlternativeNameList(output.subjectAlternativeNames, context)
        : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return {
    certificateArn: __expectString(output.certificateArn),
    certificateDetail:
      output.certificateDetail != null
        ? deserializeAws_json1_1Certificate(output.certificateDetail, context)
        : undefined,
    certificateName: __expectString(output.certificateName),
    domainName: __expectString(output.domainName),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CertificateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CloseInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): CloseInstancePublicPortsResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CloudFormationStackRecord = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecord => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    destinationInfo:
      output.destinationInfo != null
        ? deserializeAws_json1_1DestinationInfo(output.destinationInfo, context)
        : undefined,
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    sourceInfo:
      output.sourceInfo != null
        ? deserializeAws_json1_1CloudFormationStackRecordSourceInfoList(output.sourceInfo, context)
        : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_json1_1CloudFormationStackRecordList = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CloudFormationStackRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CloudFormationStackRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1CloudFormationStackRecordSourceInfoList = (
  output: any,
  context: __SerdeContext
): CloudFormationStackRecordSourceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CloudFormationStackRecordSourceInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContactMethod = (output: any, context: __SerdeContext): ContactMethod => {
  return {
    arn: __expectString(output.arn),
    contactEndpoint: __expectString(output.contactEndpoint),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    protocol: __expectString(output.protocol),
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    supportCode: __expectString(output.supportCode),
  } as any;
};

const deserializeAws_json1_1ContactMethodsList = (output: any, context: __SerdeContext): ContactMethod[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContactMethod(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContactProtocolsList = (
  output: any,
  context: __SerdeContext
): (ContactProtocol | string)[] => {
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

const deserializeAws_json1_1Container = (output: any, context: __SerdeContext): Container => {
  return {
    command: output.command != null ? deserializeAws_json1_1StringList(output.command, context) : undefined,
    environment:
      output.environment != null ? deserializeAws_json1_1Environment(output.environment, context) : undefined,
    image: __expectString(output.image),
    ports: output.ports != null ? deserializeAws_json1_1PortMap(output.ports, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerImage = (output: any, context: __SerdeContext): ContainerImage => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    digest: __expectString(output.digest),
    image: __expectString(output.image),
  } as any;
};

const deserializeAws_json1_1ContainerImageList = (output: any, context: __SerdeContext): ContainerImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerImage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContainerMap = (output: any, context: __SerdeContext): Record<string, Container> => {
  return Object.entries(output).reduce((acc: Record<string, Container>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1Container(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1ContainerService = (output: any, context: __SerdeContext): ContainerService => {
  return {
    arn: __expectString(output.arn),
    containerServiceName: __expectString(output.containerServiceName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    currentDeployment:
      output.currentDeployment != null
        ? deserializeAws_json1_1ContainerServiceDeployment(output.currentDeployment, context)
        : undefined,
    isDisabled: __expectBoolean(output.isDisabled),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    nextDeployment:
      output.nextDeployment != null
        ? deserializeAws_json1_1ContainerServiceDeployment(output.nextDeployment, context)
        : undefined,
    power: __expectString(output.power),
    powerId: __expectString(output.powerId),
    principalArn: __expectString(output.principalArn),
    privateDomainName: __expectString(output.privateDomainName),
    privateRegistryAccess:
      output.privateRegistryAccess != null
        ? deserializeAws_json1_1PrivateRegistryAccess(output.privateRegistryAccess, context)
        : undefined,
    publicDomainNames:
      output.publicDomainNames != null
        ? deserializeAws_json1_1ContainerServicePublicDomains(output.publicDomainNames, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    scale: __expectInt32(output.scale),
    state: __expectString(output.state),
    stateDetail:
      output.stateDetail != null
        ? deserializeAws_json1_1ContainerServiceStateDetail(output.stateDetail, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1ContainerServiceDeployment = (
  output: any,
  context: __SerdeContext
): ContainerServiceDeployment => {
  return {
    containers: output.containers != null ? deserializeAws_json1_1ContainerMap(output.containers, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    publicEndpoint:
      output.publicEndpoint != null
        ? deserializeAws_json1_1ContainerServiceEndpoint(output.publicEndpoint, context)
        : undefined,
    state: __expectString(output.state),
    version: __expectInt32(output.version),
  } as any;
};

const deserializeAws_json1_1ContainerServiceDeploymentList = (
  output: any,
  context: __SerdeContext
): ContainerServiceDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerServiceDeployment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContainerServiceECRImagePullerRole = (
  output: any,
  context: __SerdeContext
): ContainerServiceECRImagePullerRole => {
  return {
    isActive: __expectBoolean(output.isActive),
    principalArn: __expectString(output.principalArn),
  } as any;
};

const deserializeAws_json1_1ContainerServiceEndpoint = (
  output: any,
  context: __SerdeContext
): ContainerServiceEndpoint => {
  return {
    containerName: __expectString(output.containerName),
    containerPort: __expectInt32(output.containerPort),
    healthCheck:
      output.healthCheck != null
        ? deserializeAws_json1_1ContainerServiceHealthCheckConfig(output.healthCheck, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerServiceHealthCheckConfig = (
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

const deserializeAws_json1_1ContainerServiceList = (output: any, context: __SerdeContext): ContainerService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerService(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContainerServiceLogEvent = (
  output: any,
  context: __SerdeContext
): ContainerServiceLogEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ContainerServiceLogEventList = (
  output: any,
  context: __SerdeContext
): ContainerServiceLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerServiceLogEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContainerServiceMetadataEntry = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ContainerServiceMetadataEntryList = (
  output: any,
  context: __SerdeContext
): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerServiceMetadataEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContainerServicePower = (output: any, context: __SerdeContext): ContainerServicePower => {
  return {
    cpuCount: __limitedParseFloat32(output.cpuCount),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    powerId: __expectString(output.powerId),
    price: __limitedParseFloat32(output.price),
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
  } as any;
};

const deserializeAws_json1_1ContainerServicePowerList = (
  output: any,
  context: __SerdeContext
): ContainerServicePower[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContainerServicePower(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContainerServicePublicDomains = (
  output: any,
  context: __SerdeContext
): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1ContainerServicePublicDomainsList(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1ContainerServicePublicDomainsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ContainerServiceRegistryLogin = (
  output: any,
  context: __SerdeContext
): ContainerServiceRegistryLogin => {
  return {
    expiresAt:
      output.expiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiresAt))) : undefined,
    password: __expectString(output.password),
    registry: __expectString(output.registry),
    username: __expectString(output.username),
  } as any;
};

const deserializeAws_json1_1ContainerServicesListResult = (
  output: any,
  context: __SerdeContext
): ContainerServicesListResult => {
  return {
    containerServices:
      output.containerServices != null
        ? deserializeAws_json1_1ContainerServiceList(output.containerServices, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContainerServiceStateDetail = (
  output: any,
  context: __SerdeContext
): ContainerServiceStateDetail => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CookieObject = (output: any, context: __SerdeContext): CookieObject => {
  return {
    cookiesAllowList:
      output.cookiesAllowList != null ? deserializeAws_json1_1StringList(output.cookiesAllowList, context) : undefined,
    option: __expectString(output.option),
  } as any;
};

const deserializeAws_json1_1CopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBucketAccessKeyResult = (
  output: any,
  context: __SerdeContext
): CreateBucketAccessKeyResult => {
  return {
    accessKey: output.accessKey != null ? deserializeAws_json1_1AccessKey(output.accessKey, context) : undefined,
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBucketResult = (output: any, context: __SerdeContext): CreateBucketResult => {
  return {
    bucket: output.bucket != null ? deserializeAws_json1_1Bucket(output.bucket, context) : undefined,
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateCertificateResult => {
  return {
    certificate:
      output.certificate != null ? deserializeAws_json1_1CertificateSummary(output.certificate, context) : undefined,
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCloudFormationStackResult = (
  output: any,
  context: __SerdeContext
): CreateCloudFormationStackResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateContactMethodResult = (
  output: any,
  context: __SerdeContext
): CreateContactMethodResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateContainerServiceDeploymentResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceDeploymentResult => {
  return {
    containerService:
      output.containerService != null
        ? deserializeAws_json1_1ContainerService(output.containerService, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateContainerServiceRegistryLoginResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceRegistryLoginResult => {
  return {
    registryLogin:
      output.registryLogin != null
        ? deserializeAws_json1_1ContainerServiceRegistryLogin(output.registryLogin, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateContainerServiceResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceResult => {
  return {
    containerService:
      output.containerService != null
        ? deserializeAws_json1_1ContainerService(output.containerService, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDiskFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDiskFromSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDiskResult = (output: any, context: __SerdeContext): CreateDiskResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateDiskSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDistributionResult = (
  output: any,
  context: __SerdeContext
): CreateDistributionResult => {
  return {
    distribution:
      output.distribution != null
        ? deserializeAws_json1_1LightsailDistribution(output.distribution, context)
        : undefined,
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDomainEntryResult = (
  output: any,
  context: __SerdeContext
): CreateDomainEntryResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDomainResult = (output: any, context: __SerdeContext): CreateDomainResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstancesFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstancesFromSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstanceSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstancesResult = (output: any, context: __SerdeContext): CreateInstancesResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateKeyPairResult = (output: any, context: __SerdeContext): CreateKeyPairResult => {
  return {
    keyPair: output.keyPair != null ? deserializeAws_json1_1KeyPair(output.keyPair, context) : undefined,
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
    privateKeyBase64: __expectString(output.privateKeyBase64),
    publicKeyBase64: __expectString(output.publicKeyBase64),
  } as any;
};

const deserializeAws_json1_1CreateLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerTlsCertificateResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseFromSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAlarmResult = (output: any, context: __SerdeContext): DeleteAlarmResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAutoSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteAutoSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBucketAccessKeyResult = (
  output: any,
  context: __SerdeContext
): DeleteBucketAccessKeyResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBucketResult = (output: any, context: __SerdeContext): DeleteBucketResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteCertificateResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteContactMethodResult = (
  output: any,
  context: __SerdeContext
): DeleteContactMethodResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteContainerImageResult = (
  output: any,
  context: __SerdeContext
): DeleteContainerImageResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteContainerServiceResult = (
  output: any,
  context: __SerdeContext
): DeleteContainerServiceResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDiskResult = (output: any, context: __SerdeContext): DeleteDiskResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDiskSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteDiskSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDistributionResult = (
  output: any,
  context: __SerdeContext
): DeleteDistributionResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDomainEntryResult = (
  output: any,
  context: __SerdeContext
): DeleteDomainEntryResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDomainResult = (output: any, context: __SerdeContext): DeleteDomainResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteInstanceResult = (output: any, context: __SerdeContext): DeleteInstanceResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteInstanceSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteKeyPairResult = (output: any, context: __SerdeContext): DeleteKeyPairResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteKnownHostKeysResult = (
  output: any,
  context: __SerdeContext
): DeleteKnownHostKeysResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerTlsCertificateResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationInfo = (output: any, context: __SerdeContext): DestinationInfo => {
  return {
    id: __expectString(output.id),
    service: __expectString(output.service),
  } as any;
};

const deserializeAws_json1_1DetachCertificateFromDistributionResult = (
  output: any,
  context: __SerdeContext
): DetachCertificateFromDistributionResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetachDiskResult = (output: any, context: __SerdeContext): DetachDiskResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetachInstancesFromLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DetachInstancesFromLoadBalancerResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetachStaticIpResult = (output: any, context: __SerdeContext): DetachStaticIpResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DisableAddOnResult = (output: any, context: __SerdeContext): DisableAddOnResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    addOns: output.addOns != null ? deserializeAws_json1_1AddOnList(output.addOns, context) : undefined,
    arn: __expectString(output.arn),
    attachedTo: __expectString(output.attachedTo),
    attachmentState: __expectString(output.attachmentState),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    gbInUse: __expectInt32(output.gbInUse),
    iops: __expectInt32(output.iops),
    isAttached: __expectBoolean(output.isAttached),
    isSystemDisk: __expectBoolean(output.isSystemDisk),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    path: __expectString(output.path),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DiskInfo = (output: any, context: __SerdeContext): DiskInfo => {
  return {
    isSystemDisk: __expectBoolean(output.isSystemDisk),
    name: __expectString(output.name),
    path: __expectString(output.path),
    sizeInGb: __expectInt32(output.sizeInGb),
  } as any;
};

const deserializeAws_json1_1DiskInfoList = (output: any, context: __SerdeContext): DiskInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DiskInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DiskList = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Disk(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DiskSnapshot = (output: any, context: __SerdeContext): DiskSnapshot => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fromDiskArn: __expectString(output.fromDiskArn),
    fromDiskName: __expectString(output.fromDiskName),
    fromInstanceArn: __expectString(output.fromInstanceArn),
    fromInstanceName: __expectString(output.fromInstanceName),
    isFromAutoSnapshot: __expectBoolean(output.isFromAutoSnapshot),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    progress: __expectString(output.progress),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DiskSnapshotInfo = (output: any, context: __SerdeContext): DiskSnapshotInfo => {
  return {
    sizeInGb: __expectInt32(output.sizeInGb),
  } as any;
};

const deserializeAws_json1_1DiskSnapshotList = (output: any, context: __SerdeContext): DiskSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DiskSnapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DistributionBundle = (output: any, context: __SerdeContext): DistributionBundle => {
  return {
    bundleId: __expectString(output.bundleId),
    isActive: __expectBoolean(output.isActive),
    name: __expectString(output.name),
    price: __limitedParseFloat32(output.price),
    transferPerMonthInGb: __expectInt32(output.transferPerMonthInGb),
  } as any;
};

const deserializeAws_json1_1DistributionBundleList = (output: any, context: __SerdeContext): DistributionBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DistributionBundle(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DistributionList = (output: any, context: __SerdeContext): LightsailDistribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LightsailDistribution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DnsRecordCreationState = (output: any, context: __SerdeContext): DnsRecordCreationState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Domain = (output: any, context: __SerdeContext): Domain => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    domainEntries:
      output.domainEntries != null ? deserializeAws_json1_1DomainEntryList(output.domainEntries, context) : undefined,
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    registeredDomainDelegationInfo:
      output.registeredDomainDelegationInfo != null
        ? deserializeAws_json1_1RegisteredDomainDelegationInfo(output.registeredDomainDelegationInfo, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DomainEntry = (output: any, context: __SerdeContext): DomainEntry => {
  return {
    id: __expectString(output.id),
    isAlias: __expectBoolean(output.isAlias),
    name: __expectString(output.name),
    options: output.options != null ? deserializeAws_json1_1DomainEntryOptions(output.options, context) : undefined,
    target: __expectString(output.target),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1DomainEntryList = (output: any, context: __SerdeContext): DomainEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DomainEntryOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1DomainList = (output: any, context: __SerdeContext): Domain[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Domain(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DomainValidationRecord = (output: any, context: __SerdeContext): DomainValidationRecord => {
  return {
    dnsRecordCreationState:
      output.dnsRecordCreationState != null
        ? deserializeAws_json1_1DnsRecordCreationState(output.dnsRecordCreationState, context)
        : undefined,
    domainName: __expectString(output.domainName),
    resourceRecord:
      output.resourceRecord != null ? deserializeAws_json1_1ResourceRecord(output.resourceRecord, context) : undefined,
    validationStatus: __expectString(output.validationStatus),
  } as any;
};

const deserializeAws_json1_1DomainValidationRecordList = (
  output: any,
  context: __SerdeContext
): DomainValidationRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainValidationRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DownloadDefaultKeyPairResult = (
  output: any,
  context: __SerdeContext
): DownloadDefaultKeyPairResult => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    privateKeyBase64: __expectString(output.privateKeyBase64),
    publicKeyBase64: __expectString(output.publicKeyBase64),
  } as any;
};

const deserializeAws_json1_1EnableAddOnResult = (output: any, context: __SerdeContext): EnableAddOnResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Environment = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ExportSnapshotRecord = (output: any, context: __SerdeContext): ExportSnapshotRecord => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    destinationInfo:
      output.destinationInfo != null
        ? deserializeAws_json1_1DestinationInfo(output.destinationInfo, context)
        : undefined,
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    sourceInfo:
      output.sourceInfo != null
        ? deserializeAws_json1_1ExportSnapshotRecordSourceInfo(output.sourceInfo, context)
        : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_json1_1ExportSnapshotRecordList = (
  output: any,
  context: __SerdeContext
): ExportSnapshotRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExportSnapshotRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExportSnapshotRecordSourceInfo = (
  output: any,
  context: __SerdeContext
): ExportSnapshotRecordSourceInfo => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    diskSnapshotInfo:
      output.diskSnapshotInfo != null
        ? deserializeAws_json1_1DiskSnapshotInfo(output.diskSnapshotInfo, context)
        : undefined,
    fromResourceArn: __expectString(output.fromResourceArn),
    fromResourceName: __expectString(output.fromResourceName),
    instanceSnapshotInfo:
      output.instanceSnapshotInfo != null
        ? deserializeAws_json1_1InstanceSnapshotInfo(output.instanceSnapshotInfo, context)
        : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1ExportSnapshotResult = (output: any, context: __SerdeContext): ExportSnapshotResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetActiveNamesResult = (output: any, context: __SerdeContext): GetActiveNamesResult => {
  return {
    activeNames: output.activeNames != null ? deserializeAws_json1_1StringList(output.activeNames, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetAlarmsResult = (output: any, context: __SerdeContext): GetAlarmsResult => {
  return {
    alarms: output.alarms != null ? deserializeAws_json1_1AlarmsList(output.alarms, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetAutoSnapshotsResult = (output: any, context: __SerdeContext): GetAutoSnapshotsResult => {
  return {
    autoSnapshots:
      output.autoSnapshots != null
        ? deserializeAws_json1_1AutoSnapshotDetailsList(output.autoSnapshots, context)
        : undefined,
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1GetBlueprintsResult = (output: any, context: __SerdeContext): GetBlueprintsResult => {
  return {
    blueprints: output.blueprints != null ? deserializeAws_json1_1BlueprintList(output.blueprints, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetBucketAccessKeysResult = (
  output: any,
  context: __SerdeContext
): GetBucketAccessKeysResult => {
  return {
    accessKeys: output.accessKeys != null ? deserializeAws_json1_1AccessKeyList(output.accessKeys, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetBucketBundlesResult = (output: any, context: __SerdeContext): GetBucketBundlesResult => {
  return {
    bundles: output.bundles != null ? deserializeAws_json1_1BucketBundleList(output.bundles, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetBucketMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetBucketMetricDataResult => {
  return {
    metricData:
      output.metricData != null ? deserializeAws_json1_1MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1GetBucketsResult = (output: any, context: __SerdeContext): GetBucketsResult => {
  return {
    accountLevelBpaSync:
      output.accountLevelBpaSync != null
        ? deserializeAws_json1_1AccountLevelBpaSync(output.accountLevelBpaSync, context)
        : undefined,
    buckets: output.buckets != null ? deserializeAws_json1_1BucketList(output.buckets, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetBundlesResult = (output: any, context: __SerdeContext): GetBundlesResult => {
  return {
    bundles: output.bundles != null ? deserializeAws_json1_1BundleList(output.bundles, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetCertificatesResult = (output: any, context: __SerdeContext): GetCertificatesResult => {
  return {
    certificates:
      output.certificates != null
        ? deserializeAws_json1_1CertificateSummaryList(output.certificates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCloudFormationStackRecordsResult = (
  output: any,
  context: __SerdeContext
): GetCloudFormationStackRecordsResult => {
  return {
    cloudFormationStackRecords:
      output.cloudFormationStackRecords != null
        ? deserializeAws_json1_1CloudFormationStackRecordList(output.cloudFormationStackRecords, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetContactMethodsResult = (
  output: any,
  context: __SerdeContext
): GetContactMethodsResult => {
  return {
    contactMethods:
      output.contactMethods != null
        ? deserializeAws_json1_1ContactMethodsList(output.contactMethods, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetContainerAPIMetadataResult = (
  output: any,
  context: __SerdeContext
): GetContainerAPIMetadataResult => {
  return {
    metadata:
      output.metadata != null
        ? deserializeAws_json1_1ContainerServiceMetadataEntryList(output.metadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetContainerImagesResult = (
  output: any,
  context: __SerdeContext
): GetContainerImagesResult => {
  return {
    containerImages:
      output.containerImages != null
        ? deserializeAws_json1_1ContainerImageList(output.containerImages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetContainerLogResult = (output: any, context: __SerdeContext): GetContainerLogResult => {
  return {
    logEvents:
      output.logEvents != null
        ? deserializeAws_json1_1ContainerServiceLogEventList(output.logEvents, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetContainerServiceDeploymentsResult = (
  output: any,
  context: __SerdeContext
): GetContainerServiceDeploymentsResult => {
  return {
    deployments:
      output.deployments != null
        ? deserializeAws_json1_1ContainerServiceDeploymentList(output.deployments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetContainerServiceMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetContainerServiceMetricDataResult => {
  return {
    metricData:
      output.metricData != null ? deserializeAws_json1_1MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1GetContainerServicePowersResult = (
  output: any,
  context: __SerdeContext
): GetContainerServicePowersResult => {
  return {
    powers: output.powers != null ? deserializeAws_json1_1ContainerServicePowerList(output.powers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDiskResult = (output: any, context: __SerdeContext): GetDiskResult => {
  return {
    disk: output.disk != null ? deserializeAws_json1_1Disk(output.disk, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDiskSnapshotResult = (output: any, context: __SerdeContext): GetDiskSnapshotResult => {
  return {
    diskSnapshot:
      output.diskSnapshot != null ? deserializeAws_json1_1DiskSnapshot(output.diskSnapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDiskSnapshotsResult = (output: any, context: __SerdeContext): GetDiskSnapshotsResult => {
  return {
    diskSnapshots:
      output.diskSnapshots != null ? deserializeAws_json1_1DiskSnapshotList(output.diskSnapshots, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetDisksResult = (output: any, context: __SerdeContext): GetDisksResult => {
  return {
    disks: output.disks != null ? deserializeAws_json1_1DiskList(output.disks, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetDistributionBundlesResult = (
  output: any,
  context: __SerdeContext
): GetDistributionBundlesResult => {
  return {
    bundles: output.bundles != null ? deserializeAws_json1_1DistributionBundleList(output.bundles, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDistributionLatestCacheResetResult = (
  output: any,
  context: __SerdeContext
): GetDistributionLatestCacheResetResult => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1GetDistributionMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetDistributionMetricDataResult => {
  return {
    metricData:
      output.metricData != null ? deserializeAws_json1_1MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1GetDistributionsResult = (output: any, context: __SerdeContext): GetDistributionsResult => {
  return {
    distributions:
      output.distributions != null ? deserializeAws_json1_1DistributionList(output.distributions, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetDomainResult = (output: any, context: __SerdeContext): GetDomainResult => {
  return {
    domain: output.domain != null ? deserializeAws_json1_1Domain(output.domain, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDomainsResult = (output: any, context: __SerdeContext): GetDomainsResult => {
  return {
    domains: output.domains != null ? deserializeAws_json1_1DomainList(output.domains, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetExportSnapshotRecordsResult = (
  output: any,
  context: __SerdeContext
): GetExportSnapshotRecordsResult => {
  return {
    exportSnapshotRecords:
      output.exportSnapshotRecords != null
        ? deserializeAws_json1_1ExportSnapshotRecordList(output.exportSnapshotRecords, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetInstanceAccessDetailsResult = (
  output: any,
  context: __SerdeContext
): GetInstanceAccessDetailsResult => {
  return {
    accessDetails:
      output.accessDetails != null
        ? deserializeAws_json1_1InstanceAccessDetails(output.accessDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetInstanceMetricDataResult => {
  return {
    metricData:
      output.metricData != null ? deserializeAws_json1_1MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1GetInstancePortStatesResult = (
  output: any,
  context: __SerdeContext
): GetInstancePortStatesResult => {
  return {
    portStates:
      output.portStates != null ? deserializeAws_json1_1InstancePortStateList(output.portStates, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceResult = (output: any, context: __SerdeContext): GetInstanceResult => {
  return {
    instance: output.instance != null ? deserializeAws_json1_1Instance(output.instance, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetInstanceSnapshotResult => {
  return {
    instanceSnapshot:
      output.instanceSnapshot != null
        ? deserializeAws_json1_1InstanceSnapshot(output.instanceSnapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetInstanceSnapshotsResult => {
  return {
    instanceSnapshots:
      output.instanceSnapshots != null
        ? deserializeAws_json1_1InstanceSnapshotList(output.instanceSnapshots, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetInstancesResult = (output: any, context: __SerdeContext): GetInstancesResult => {
  return {
    instances: output.instances != null ? deserializeAws_json1_1InstanceList(output.instances, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetInstanceStateResult = (output: any, context: __SerdeContext): GetInstanceStateResult => {
  return {
    state: output.state != null ? deserializeAws_json1_1InstanceState(output.state, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyPairResult = (output: any, context: __SerdeContext): GetKeyPairResult => {
  return {
    keyPair: output.keyPair != null ? deserializeAws_json1_1KeyPair(output.keyPair, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetKeyPairsResult = (output: any, context: __SerdeContext): GetKeyPairsResult => {
  return {
    keyPairs: output.keyPairs != null ? deserializeAws_json1_1KeyPairList(output.keyPairs, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerMetricDataResult => {
  return {
    metricData:
      output.metricData != null ? deserializeAws_json1_1MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerResult = (output: any, context: __SerdeContext): GetLoadBalancerResult => {
  return {
    loadBalancer:
      output.loadBalancer != null ? deserializeAws_json1_1LoadBalancer(output.loadBalancer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetLoadBalancersResult = (output: any, context: __SerdeContext): GetLoadBalancersResult => {
  return {
    loadBalancers:
      output.loadBalancers != null ? deserializeAws_json1_1LoadBalancerList(output.loadBalancers, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsCertificatesResult => {
  return {
    tlsCertificates:
      output.tlsCertificates != null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateList(output.tlsCertificates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLoadBalancerTlsPoliciesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsPoliciesResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    tlsPolicies:
      output.tlsPolicies != null
        ? deserializeAws_json1_1LoadBalancerTlsPolicyList(output.tlsPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationResult = (output: any, context: __SerdeContext): GetOperationResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationsForResourceResult = (
  output: any,
  context: __SerdeContext
): GetOperationsForResourceResult => {
  return {
    nextPageCount: __expectString(output.nextPageCount),
    nextPageToken: __expectString(output.nextPageToken),
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationsResult = (output: any, context: __SerdeContext): GetOperationsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRegionsResult = (output: any, context: __SerdeContext): GetRegionsResult => {
  return {
    regions: output.regions != null ? deserializeAws_json1_1RegionList(output.regions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBlueprintsResult => {
  return {
    blueprints:
      output.blueprints != null
        ? deserializeAws_json1_1RelationalDatabaseBlueprintList(output.blueprints, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseBundlesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBundlesResult => {
  return {
    bundles:
      output.bundles != null ? deserializeAws_json1_1RelationalDatabaseBundleList(output.bundles, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseEventsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    relationalDatabaseEvents:
      output.relationalDatabaseEvents != null
        ? deserializeAws_json1_1RelationalDatabaseEventList(output.relationalDatabaseEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseLogEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogEventsResult => {
  return {
    nextBackwardToken: __expectString(output.nextBackwardToken),
    nextForwardToken: __expectString(output.nextForwardToken),
    resourceLogEvents:
      output.resourceLogEvents != null
        ? deserializeAws_json1_1LogEventList(output.resourceLogEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogStreamsResult => {
  return {
    logStreams: output.logStreams != null ? deserializeAws_json1_1StringList(output.logStreams, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMasterUserPasswordResult => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    masterUserPassword: __expectString(output.masterUserPassword),
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMetricDataResult => {
  return {
    metricData:
      output.metricData != null ? deserializeAws_json1_1MetricDatapointList(output.metricData, context) : undefined,
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseParametersResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    parameters:
      output.parameters != null
        ? deserializeAws_json1_1RelationalDatabaseParameterList(output.parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseResult => {
  return {
    relationalDatabase:
      output.relationalDatabase != null
        ? deserializeAws_json1_1RelationalDatabase(output.relationalDatabase, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotResult => {
  return {
    relationalDatabaseSnapshot:
      output.relationalDatabaseSnapshot != null
        ? deserializeAws_json1_1RelationalDatabaseSnapshot(output.relationalDatabaseSnapshot, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    relationalDatabaseSnapshots:
      output.relationalDatabaseSnapshots != null
        ? deserializeAws_json1_1RelationalDatabaseSnapshotList(output.relationalDatabaseSnapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRelationalDatabasesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabasesResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    relationalDatabases:
      output.relationalDatabases != null
        ? deserializeAws_json1_1RelationalDatabaseList(output.relationalDatabases, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetStaticIpResult = (output: any, context: __SerdeContext): GetStaticIpResult => {
  return {
    staticIp: output.staticIp != null ? deserializeAws_json1_1StaticIp(output.staticIp, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetStaticIpsResult = (output: any, context: __SerdeContext): GetStaticIpsResult => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    staticIps: output.staticIps != null ? deserializeAws_json1_1StaticIpList(output.staticIps, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HeaderForwardList = (output: any, context: __SerdeContext): (HeaderEnum | string)[] => {
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

const deserializeAws_json1_1HeaderObject = (output: any, context: __SerdeContext): HeaderObject => {
  return {
    headersAllowList:
      output.headersAllowList != null
        ? deserializeAws_json1_1HeaderForwardList(output.headersAllowList, context)
        : undefined,
    option: __expectString(output.option),
  } as any;
};

const deserializeAws_json1_1HostKeyAttributes = (output: any, context: __SerdeContext): HostKeyAttributes => {
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

const deserializeAws_json1_1HostKeysList = (output: any, context: __SerdeContext): HostKeyAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HostKeyAttributes(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImportKeyPairResult = (output: any, context: __SerdeContext): ImportKeyPairResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    addOns: output.addOns != null ? deserializeAws_json1_1AddOnList(output.addOns, context) : undefined,
    arn: __expectString(output.arn),
    blueprintId: __expectString(output.blueprintId),
    blueprintName: __expectString(output.blueprintName),
    bundleId: __expectString(output.bundleId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    hardware: output.hardware != null ? deserializeAws_json1_1InstanceHardware(output.hardware, context) : undefined,
    ipAddressType: __expectString(output.ipAddressType),
    ipv6Addresses:
      output.ipv6Addresses != null ? deserializeAws_json1_1Ipv6AddressList(output.ipv6Addresses, context) : undefined,
    isStaticIp: __expectBoolean(output.isStaticIp),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    metadataOptions:
      output.metadataOptions != null
        ? deserializeAws_json1_1InstanceMetadataOptions(output.metadataOptions, context)
        : undefined,
    name: __expectString(output.name),
    networking:
      output.networking != null ? deserializeAws_json1_1InstanceNetworking(output.networking, context) : undefined,
    privateIpAddress: __expectString(output.privateIpAddress),
    publicIpAddress: __expectString(output.publicIpAddress),
    resourceType: __expectString(output.resourceType),
    sshKeyName: __expectString(output.sshKeyName),
    state: output.state != null ? deserializeAws_json1_1InstanceState(output.state, context) : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    username: __expectString(output.username),
  } as any;
};

const deserializeAws_json1_1InstanceAccessDetails = (output: any, context: __SerdeContext): InstanceAccessDetails => {
  return {
    certKey: __expectString(output.certKey),
    expiresAt:
      output.expiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiresAt))) : undefined,
    hostKeys: output.hostKeys != null ? deserializeAws_json1_1HostKeysList(output.hostKeys, context) : undefined,
    instanceName: __expectString(output.instanceName),
    ipAddress: __expectString(output.ipAddress),
    password: __expectString(output.password),
    passwordData:
      output.passwordData != null ? deserializeAws_json1_1PasswordData(output.passwordData, context) : undefined,
    privateKey: __expectString(output.privateKey),
    protocol: __expectString(output.protocol),
    username: __expectString(output.username),
  } as any;
};

const deserializeAws_json1_1InstanceHardware = (output: any, context: __SerdeContext): InstanceHardware => {
  return {
    cpuCount: __expectInt32(output.cpuCount),
    disks: output.disks != null ? deserializeAws_json1_1DiskList(output.disks, context) : undefined,
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
  } as any;
};

const deserializeAws_json1_1InstanceHealthSummary = (output: any, context: __SerdeContext): InstanceHealthSummary => {
  return {
    instanceHealth: __expectString(output.instanceHealth),
    instanceHealthReason: __expectString(output.instanceHealthReason),
    instanceName: __expectString(output.instanceName),
  } as any;
};

const deserializeAws_json1_1InstanceHealthSummaryList = (
  output: any,
  context: __SerdeContext
): InstanceHealthSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceHealthSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Instance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceMetadataOptions = (
  output: any,
  context: __SerdeContext
): InstanceMetadataOptions => {
  return {
    httpEndpoint: __expectString(output.httpEndpoint),
    httpProtocolIpv6: __expectString(output.httpProtocolIpv6),
    httpPutResponseHopLimit: __expectInt32(output.httpPutResponseHopLimit),
    httpTokens: __expectString(output.httpTokens),
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_json1_1InstanceNetworking = (output: any, context: __SerdeContext): InstanceNetworking => {
  return {
    monthlyTransfer:
      output.monthlyTransfer != null
        ? deserializeAws_json1_1MonthlyTransfer(output.monthlyTransfer, context)
        : undefined,
    ports: output.ports != null ? deserializeAws_json1_1InstancePortInfoList(output.ports, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstancePlatformList = (
  output: any,
  context: __SerdeContext
): (InstancePlatform | string)[] => {
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

const deserializeAws_json1_1InstancePortInfo = (output: any, context: __SerdeContext): InstancePortInfo => {
  return {
    accessDirection: __expectString(output.accessDirection),
    accessFrom: __expectString(output.accessFrom),
    accessType: __expectString(output.accessType),
    cidrListAliases:
      output.cidrListAliases != null ? deserializeAws_json1_1StringList(output.cidrListAliases, context) : undefined,
    cidrs: output.cidrs != null ? deserializeAws_json1_1StringList(output.cidrs, context) : undefined,
    commonName: __expectString(output.commonName),
    fromPort: __expectInt32(output.fromPort),
    ipv6Cidrs: output.ipv6Cidrs != null ? deserializeAws_json1_1StringList(output.ipv6Cidrs, context) : undefined,
    protocol: __expectString(output.protocol),
    toPort: __expectInt32(output.toPort),
  } as any;
};

const deserializeAws_json1_1InstancePortInfoList = (output: any, context: __SerdeContext): InstancePortInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstancePortInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstancePortState = (output: any, context: __SerdeContext): InstancePortState => {
  return {
    cidrListAliases:
      output.cidrListAliases != null ? deserializeAws_json1_1StringList(output.cidrListAliases, context) : undefined,
    cidrs: output.cidrs != null ? deserializeAws_json1_1StringList(output.cidrs, context) : undefined,
    fromPort: __expectInt32(output.fromPort),
    ipv6Cidrs: output.ipv6Cidrs != null ? deserializeAws_json1_1StringList(output.ipv6Cidrs, context) : undefined,
    protocol: __expectString(output.protocol),
    state: __expectString(output.state),
    toPort: __expectInt32(output.toPort),
  } as any;
};

const deserializeAws_json1_1InstancePortStateList = (output: any, context: __SerdeContext): InstancePortState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstancePortState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceSnapshot = (output: any, context: __SerdeContext): InstanceSnapshot => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fromAttachedDisks:
      output.fromAttachedDisks != null ? deserializeAws_json1_1DiskList(output.fromAttachedDisks, context) : undefined,
    fromBlueprintId: __expectString(output.fromBlueprintId),
    fromBundleId: __expectString(output.fromBundleId),
    fromInstanceArn: __expectString(output.fromInstanceArn),
    fromInstanceName: __expectString(output.fromInstanceName),
    isFromAutoSnapshot: __expectBoolean(output.isFromAutoSnapshot),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    progress: __expectString(output.progress),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceSnapshotInfo = (output: any, context: __SerdeContext): InstanceSnapshotInfo => {
  return {
    fromBlueprintId: __expectString(output.fromBlueprintId),
    fromBundleId: __expectString(output.fromBundleId),
    fromDiskInfo:
      output.fromDiskInfo != null ? deserializeAws_json1_1DiskInfoList(output.fromDiskInfo, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceSnapshotList = (output: any, context: __SerdeContext): InstanceSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceSnapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceState = (output: any, context: __SerdeContext): InstanceState => {
  return {
    code: __expectInt32(output.code),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1Ipv6AddressList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1IsVpcPeeredResult = (output: any, context: __SerdeContext): IsVpcPeeredResult => {
  return {
    isPeered: __expectBoolean(output.isPeered),
  } as any;
};

const deserializeAws_json1_1KeyPair = (output: any, context: __SerdeContext): KeyPair => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fingerprint: __expectString(output.fingerprint),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1KeyPairList = (output: any, context: __SerdeContext): KeyPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyPair(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LightsailDistribution = (output: any, context: __SerdeContext): LightsailDistribution => {
  return {
    ableToUpdateBundle: __expectBoolean(output.ableToUpdateBundle),
    alternativeDomainNames:
      output.alternativeDomainNames != null
        ? deserializeAws_json1_1StringList(output.alternativeDomainNames, context)
        : undefined,
    arn: __expectString(output.arn),
    bundleId: __expectString(output.bundleId),
    cacheBehaviorSettings:
      output.cacheBehaviorSettings != null
        ? deserializeAws_json1_1CacheSettings(output.cacheBehaviorSettings, context)
        : undefined,
    cacheBehaviors:
      output.cacheBehaviors != null
        ? deserializeAws_json1_1CacheBehaviorList(output.cacheBehaviors, context)
        : undefined,
    certificateName: __expectString(output.certificateName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    defaultCacheBehavior:
      output.defaultCacheBehavior != null
        ? deserializeAws_json1_1CacheBehavior(output.defaultCacheBehavior, context)
        : undefined,
    domainName: __expectString(output.domainName),
    ipAddressType: __expectString(output.ipAddressType),
    isEnabled: __expectBoolean(output.isEnabled),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    origin: output.origin != null ? deserializeAws_json1_1Origin(output.origin, context) : undefined,
    originPublicDNS: __expectString(output.originPublicDNS),
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  return {
    arn: __expectString(output.arn),
    configurationOptions:
      output.configurationOptions != null
        ? deserializeAws_json1_1LoadBalancerConfigurationOptions(output.configurationOptions, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    dnsName: __expectString(output.dnsName),
    healthCheckPath: __expectString(output.healthCheckPath),
    httpsRedirectionEnabled: __expectBoolean(output.httpsRedirectionEnabled),
    instanceHealthSummary:
      output.instanceHealthSummary != null
        ? deserializeAws_json1_1InstanceHealthSummaryList(output.instanceHealthSummary, context)
        : undefined,
    instancePort: __expectInt32(output.instancePort),
    ipAddressType: __expectString(output.ipAddressType),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    protocol: __expectString(output.protocol),
    publicPorts: output.publicPorts != null ? deserializeAws_json1_1PortList(output.publicPorts, context) : undefined,
    resourceType: __expectString(output.resourceType),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    tlsCertificateSummaries:
      output.tlsCertificateSummaries != null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList(output.tlsCertificateSummaries, context)
        : undefined,
    tlsPolicyName: __expectString(output.tlsPolicyName),
  } as any;
};

const deserializeAws_json1_1LoadBalancerConfigurationOptions = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
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

const deserializeAws_json1_1LoadBalancerList = (output: any, context: __SerdeContext): LoadBalancer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LoadBalancerTlsCertificate = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    domainName: __expectString(output.domainName),
    domainValidationRecords:
      output.domainValidationRecords != null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList(
            output.domainValidationRecords,
            context
          )
        : undefined,
    failureReason: __expectString(output.failureReason),
    isAttached: __expectBoolean(output.isAttached),
    issuedAt:
      output.issuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.issuedAt))) : undefined,
    issuer: __expectString(output.issuer),
    keyAlgorithm: __expectString(output.keyAlgorithm),
    loadBalancerName: __expectString(output.loadBalancerName),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    notAfter:
      output.notAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notAfter))) : undefined,
    notBefore:
      output.notBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notBefore))) : undefined,
    renewalSummary:
      output.renewalSummary != null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary(output.renewalSummary, context)
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
      output.subjectAlternativeNames != null
        ? deserializeAws_json1_1StringList(output.subjectAlternativeNames, context)
        : undefined,
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDnsRecordCreationState = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDnsRecordCreationState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption => {
  return {
    domainName: __expectString(output.domainName),
    validationStatus: __expectString(output.validationStatus),
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord => {
  return {
    dnsRecordCreationState:
      output.dnsRecordCreationState != null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateDnsRecordCreationState(output.dnsRecordCreationState, context)
        : undefined,
    domainName: __expectString(output.domainName),
    name: __expectString(output.name),
    type: __expectString(output.type),
    validationStatus: __expectString(output.validationStatus),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateDomainValidationRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancerTlsCertificate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateRenewalSummary => {
  return {
    domainValidationOptions:
      output.domainValidationOptions != null
        ? deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList(
            output.domainValidationOptions,
            context
          )
        : undefined,
    renewalStatus: __expectString(output.renewalStatus),
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateSummary = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary => {
  return {
    isAttached: __expectBoolean(output.isAttached),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsCertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancerTlsCertificateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LoadBalancerTlsPolicy = (output: any, context: __SerdeContext): LoadBalancerTlsPolicy => {
  return {
    ciphers: output.ciphers != null ? deserializeAws_json1_1StringList(output.ciphers, context) : undefined,
    description: __expectString(output.description),
    isDefault: __expectBoolean(output.isDefault),
    name: __expectString(output.name),
    protocols: output.protocols != null ? deserializeAws_json1_1StringList(output.protocols, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerTlsPolicyList = (
  output: any,
  context: __SerdeContext
): LoadBalancerTlsPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LoadBalancerTlsPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LogEvent = (output: any, context: __SerdeContext): LogEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LogEventList = (output: any, context: __SerdeContext): LogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricDatapoint = (output: any, context: __SerdeContext): MetricDatapoint => {
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

const deserializeAws_json1_1MetricDatapointList = (output: any, context: __SerdeContext): MetricDatapoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDatapoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MonitoredResourceInfo = (output: any, context: __SerdeContext): MonitoredResourceInfo => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1MonthlyTransfer = (output: any, context: __SerdeContext): MonthlyTransfer => {
  return {
    gbPerMonthAllocated: __expectInt32(output.gbPerMonthAllocated),
  } as any;
};

const deserializeAws_json1_1NameServersUpdateState = (output: any, context: __SerdeContext): NameServersUpdateState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1NotificationTriggerList = (
  output: any,
  context: __SerdeContext
): (AlarmState | string)[] => {
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

const deserializeAws_json1_1OpenInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): OpenInstancePublicPortsResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    errorCode: __expectString(output.errorCode),
    errorDetails: __expectString(output.errorDetails),
    id: __expectString(output.id),
    isTerminal: __expectBoolean(output.isTerminal),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
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

const deserializeAws_json1_1OperationFailureException = (
  output: any,
  context: __SerdeContext
): OperationFailureException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1OperationList = (output: any, context: __SerdeContext): Operation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Operation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Origin = (output: any, context: __SerdeContext): Origin => {
  return {
    name: __expectString(output.name),
    protocolPolicy: __expectString(output.protocolPolicy),
    regionName: __expectString(output.regionName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1PartnerIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PasswordData = (output: any, context: __SerdeContext): PasswordData => {
  return {
    ciphertext: __expectString(output.ciphertext),
    keyPairName: __expectString(output.keyPairName),
  } as any;
};

const deserializeAws_json1_1PeerVpcResult = (output: any, context: __SerdeContext): PeerVpcResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PendingMaintenanceAction = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction => {
  return {
    action: __expectString(output.action),
    currentApplyDate:
      output.currentApplyDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.currentApplyDate)))
        : undefined,
    description: __expectString(output.description),
  } as any;
};

const deserializeAws_json1_1PendingMaintenanceActionList = (
  output: any,
  context: __SerdeContext
): PendingMaintenanceAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PendingMaintenanceAction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PendingModifiedRelationalDatabaseValues = (
  output: any,
  context: __SerdeContext
): PendingModifiedRelationalDatabaseValues => {
  return {
    backupRetentionEnabled: __expectBoolean(output.backupRetentionEnabled),
    engineVersion: __expectString(output.engineVersion),
    masterUserPassword: __expectString(output.masterUserPassword),
  } as any;
};

const deserializeAws_json1_1PortList = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_1PortMap = (
  output: any,
  context: __SerdeContext
): Record<string, ContainerServiceProtocol | string> => {
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

const deserializeAws_json1_1PrivateRegistryAccess = (output: any, context: __SerdeContext): PrivateRegistryAccess => {
  return {
    ecrImagePullerRole:
      output.ecrImagePullerRole != null
        ? deserializeAws_json1_1ContainerServiceECRImagePullerRole(output.ecrImagePullerRole, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutAlarmResult = (output: any, context: __SerdeContext): PutAlarmResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PutInstancePublicPortsResult = (
  output: any,
  context: __SerdeContext
): PutInstancePublicPortsResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1QueryStringObject = (output: any, context: __SerdeContext): QueryStringObject => {
  return {
    option: __expectBoolean(output.option),
    queryStringsAllowList:
      output.queryStringsAllowList != null
        ? deserializeAws_json1_1StringList(output.queryStringsAllowList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1R53HostedZoneDeletionState = (
  output: any,
  context: __SerdeContext
): R53HostedZoneDeletionState => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RebootInstanceResult = (output: any, context: __SerdeContext): RebootInstanceResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RebootRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): RebootRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Region = (output: any, context: __SerdeContext): Region => {
  return {
    availabilityZones:
      output.availabilityZones != null
        ? deserializeAws_json1_1AvailabilityZoneList(output.availabilityZones, context)
        : undefined,
    continentCode: __expectString(output.continentCode),
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
    relationalDatabaseAvailabilityZones:
      output.relationalDatabaseAvailabilityZones != null
        ? deserializeAws_json1_1AvailabilityZoneList(output.relationalDatabaseAvailabilityZones, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegionList = (output: any, context: __SerdeContext): Region[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Region(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RegisterContainerImageResult = (
  output: any,
  context: __SerdeContext
): RegisterContainerImageResult => {
  return {
    containerImage:
      output.containerImage != null ? deserializeAws_json1_1ContainerImage(output.containerImage, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RegisteredDomainDelegationInfo = (
  output: any,
  context: __SerdeContext
): RegisteredDomainDelegationInfo => {
  return {
    nameServersUpdateState:
      output.nameServersUpdateState != null
        ? deserializeAws_json1_1NameServersUpdateState(output.nameServersUpdateState, context)
        : undefined,
    r53HostedZoneDeletionState:
      output.r53HostedZoneDeletionState != null
        ? deserializeAws_json1_1R53HostedZoneDeletionState(output.r53HostedZoneDeletionState, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabase = (output: any, context: __SerdeContext): RelationalDatabase => {
  return {
    arn: __expectString(output.arn),
    backupRetentionEnabled: __expectBoolean(output.backupRetentionEnabled),
    caCertificateIdentifier: __expectString(output.caCertificateIdentifier),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    engine: __expectString(output.engine),
    engineVersion: __expectString(output.engineVersion),
    hardware:
      output.hardware != null ? deserializeAws_json1_1RelationalDatabaseHardware(output.hardware, context) : undefined,
    latestRestorableTime:
      output.latestRestorableTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestRestorableTime)))
        : undefined,
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    masterDatabaseName: __expectString(output.masterDatabaseName),
    masterEndpoint:
      output.masterEndpoint != null
        ? deserializeAws_json1_1RelationalDatabaseEndpoint(output.masterEndpoint, context)
        : undefined,
    masterUsername: __expectString(output.masterUsername),
    name: __expectString(output.name),
    parameterApplyStatus: __expectString(output.parameterApplyStatus),
    pendingMaintenanceActions:
      output.pendingMaintenanceActions != null
        ? deserializeAws_json1_1PendingMaintenanceActionList(output.pendingMaintenanceActions, context)
        : undefined,
    pendingModifiedValues:
      output.pendingModifiedValues != null
        ? deserializeAws_json1_1PendingModifiedRelationalDatabaseValues(output.pendingModifiedValues, context)
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
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseBlueprint = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBlueprint => {
  return {
    blueprintId: __expectString(output.blueprintId),
    engine: __expectString(output.engine),
    engineDescription: __expectString(output.engineDescription),
    engineVersion: __expectString(output.engineVersion),
    engineVersionDescription: __expectString(output.engineVersionDescription),
    isEngineDefault: __expectBoolean(output.isEngineDefault),
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseBlueprintList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBlueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationalDatabaseBlueprint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelationalDatabaseBundle = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBundle => {
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

const deserializeAws_json1_1RelationalDatabaseBundleList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationalDatabaseBundle(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelationalDatabaseEndpoint = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEndpoint => {
  return {
    address: __expectString(output.address),
    port: __expectInt32(output.port),
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseEvent = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEvent => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    eventCategories:
      output.eventCategories != null ? deserializeAws_json1_1StringList(output.eventCategories, context) : undefined,
    message: __expectString(output.message),
    resource: __expectString(output.resource),
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseEventList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationalDatabaseEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelationalDatabaseHardware = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseHardware => {
  return {
    cpuCount: __expectInt32(output.cpuCount),
    diskSizeInGb: __expectInt32(output.diskSizeInGb),
    ramSizeInGb: __limitedParseFloat32(output.ramSizeInGb),
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseList = (output: any, context: __SerdeContext): RelationalDatabase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationalDatabase(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelationalDatabaseParameter = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseParameter => {
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

const deserializeAws_json1_1RelationalDatabaseParameterList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationalDatabaseParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelationalDatabaseSnapshot = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseSnapshot => {
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
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    sizeInGb: __expectInt32(output.sizeInGb),
    state: __expectString(output.state),
    supportCode: __expectString(output.supportCode),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RelationalDatabaseSnapshotList = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RelationalDatabaseSnapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReleaseStaticIpResult = (output: any, context: __SerdeContext): ReleaseStaticIpResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return {
    domainValidationRecords:
      output.domainValidationRecords != null
        ? deserializeAws_json1_1DomainValidationRecordList(output.domainValidationRecords, context)
        : undefined,
    renewalStatus: __expectString(output.renewalStatus),
    renewalStatusReason: __expectString(output.renewalStatusReason),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1ResetDistributionCacheResult = (
  output: any,
  context: __SerdeContext
): ResetDistributionCacheResult => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1ResourceLocation = (output: any, context: __SerdeContext): ResourceLocation => {
  return {
    availabilityZone: __expectString(output.availabilityZone),
    regionName: __expectString(output.regionName),
  } as any;
};

const deserializeAws_json1_1ResourceReceivingAccess = (
  output: any,
  context: __SerdeContext
): ResourceReceivingAccess => {
  return {
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1ResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1SendContactMethodVerificationResult = (
  output: any,
  context: __SerdeContext
): SendContactMethodVerificationResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1SetIpAddressTypeResult = (output: any, context: __SerdeContext): SetIpAddressTypeResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SetResourceAccessForBucketResult = (
  output: any,
  context: __SerdeContext
): SetResourceAccessForBucketResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StartInstanceResult = (output: any, context: __SerdeContext): StartInstanceResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StartRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): StartRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StaticIp = (output: any, context: __SerdeContext): StaticIp => {
  return {
    arn: __expectString(output.arn),
    attachedTo: __expectString(output.attachedTo),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    ipAddress: __expectString(output.ipAddress),
    isAttached: __expectBoolean(output.isAttached),
    location: output.location != null ? deserializeAws_json1_1ResourceLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    supportCode: __expectString(output.supportCode),
  } as any;
};

const deserializeAws_json1_1StaticIpList = (output: any, context: __SerdeContext): StaticIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StaticIp(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StopInstanceResult = (output: any, context: __SerdeContext): StopInstanceResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StopRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): StopRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SubjectAlternativeNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TestAlarmResult = (output: any, context: __SerdeContext): TestAlarmResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UnauthenticatedException = (
  output: any,
  context: __SerdeContext
): UnauthenticatedException => {
  return {
    code: __expectString(output.code),
    docs: __expectString(output.docs),
    message: __expectString(output.message),
    tip: __expectString(output.tip),
  } as any;
};

const deserializeAws_json1_1UnpeerVpcResult = (output: any, context: __SerdeContext): UnpeerVpcResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBucketBundleResult = (
  output: any,
  context: __SerdeContext
): UpdateBucketBundleResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBucketResult = (output: any, context: __SerdeContext): UpdateBucketResult => {
  return {
    bucket: output.bucket != null ? deserializeAws_json1_1Bucket(output.bucket, context) : undefined,
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateContainerServiceResult = (
  output: any,
  context: __SerdeContext
): UpdateContainerServiceResult => {
  return {
    containerService:
      output.containerService != null
        ? deserializeAws_json1_1ContainerService(output.containerService, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDistributionBundleResult = (
  output: any,
  context: __SerdeContext
): UpdateDistributionBundleResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDistributionResult = (
  output: any,
  context: __SerdeContext
): UpdateDistributionResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDomainEntryResult = (
  output: any,
  context: __SerdeContext
): UpdateDomainEntryResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateInstanceMetadataOptionsResult = (
  output: any,
  context: __SerdeContext
): UpdateInstanceMetadataOptionsResult => {
  return {
    operation: output.operation != null ? deserializeAws_json1_1Operation(output.operation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateLoadBalancerAttributeResult = (
  output: any,
  context: __SerdeContext
): UpdateLoadBalancerAttributeResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseParametersResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateRelationalDatabaseResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseResult => {
  return {
    operations: output.operations != null ? deserializeAws_json1_1OperationList(output.operations, context) : undefined,
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

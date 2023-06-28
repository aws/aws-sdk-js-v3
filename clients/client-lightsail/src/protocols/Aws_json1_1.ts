// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AddOnRequest,
  Alarm,
  AlarmState,
  AllocateStaticIpRequest,
  AllocateStaticIpResult,
  AttachCertificateToDistributionRequest,
  AttachCertificateToDistributionResult,
  AttachDiskRequest,
  AttachDiskResult,
  AttachInstancesToLoadBalancerRequest,
  AttachInstancesToLoadBalancerResult,
  AttachLoadBalancerTlsCertificateRequest,
  AttachLoadBalancerTlsCertificateResult,
  AttachStaticIpRequest,
  AttachStaticIpResult,
  AutoSnapshotAddOnRequest,
  AutoSnapshotDetails,
  Bucket,
  BucketAccessLogConfig,
  BucketBundle,
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
  ContactMethod,
  ContactProtocol,
  Container,
  ContainerImage,
  ContainerService,
  ContainerServiceDeployment,
  ContainerServiceDeploymentRequest,
  ContainerServiceECRImagePullerRoleRequest,
  ContainerServiceHealthCheckConfig,
  ContainerServiceLogEvent,
  ContainerServicePower,
  ContainerServiceProtocol,
  ContainerServiceRegistryLogin,
  ContainerServicesListResult,
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
  DeleteContainerServiceRequest,
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
  DiskMap,
  DiskSnapshot,
  DistributionBundle,
  Domain,
  DomainEntry,
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
  GetAlarmsRequest,
  GetAlarmsResult,
  GetAutoSnapshotsRequest,
  GetAutoSnapshotsResult,
  GetBlueprintsRequest,
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
  InvalidInputException,
  KeyPair,
  LightsailDistribution,
  MetricDatapoint,
  MetricStatistic,
  NotFoundException,
  Operation,
  OperationFailureException,
  PortInfo,
  PrivateRegistryAccessRequest,
  QueryStringObject,
  RenewalSummary,
  ServiceException,
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
  GetInstanceRequest,
  GetInstanceResult,
  GetInstanceSnapshotRequest,
  GetInstanceSnapshotResult,
  GetInstanceSnapshotsRequest,
  GetInstanceSnapshotsResult,
  GetInstancesRequest,
  GetInstancesResult,
  GetInstanceStateRequest,
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
  GetOperationRequest,
  GetOperationResult,
  GetOperationsForResourceRequest,
  GetOperationsForResourceResult,
  GetOperationsRequest,
  GetOperationsResult,
  GetRegionsRequest,
  GetRelationalDatabaseBlueprintsRequest,
  GetRelationalDatabaseBundlesRequest,
  GetRelationalDatabaseBundlesResult,
  GetRelationalDatabaseEventsRequest,
  GetRelationalDatabaseEventsResult,
  GetRelationalDatabaseLogEventsRequest,
  GetRelationalDatabaseLogEventsResult,
  GetRelationalDatabaseLogStreamsRequest,
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
  GetRelationalDatabaseMetricDataRequest,
  GetRelationalDatabaseMetricDataResult,
  GetRelationalDatabaseParametersRequest,
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
  InstanceSnapshot,
  IsVpcPeeredRequest,
  LoadBalancer,
  LoadBalancerTlsCertificate,
  LogEvent,
  OpenInstancePublicPortsRequest,
  OpenInstancePublicPortsResult,
  PeerVpcRequest,
  PeerVpcResult,
  PendingMaintenanceAction,
  PutAlarmRequest,
  PutAlarmResult,
  PutInstancePublicPortsRequest,
  PutInstancePublicPortsResult,
  RebootInstanceRequest,
  RebootInstanceResult,
  RebootRelationalDatabaseRequest,
  RebootRelationalDatabaseResult,
  RegisterContainerImageRequest,
  RegisterContainerImageResult,
  RelationalDatabase,
  RelationalDatabaseBundle,
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
  const headers: __HeaderBag = sharedHeaders("AllocateStaticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachCertificateToDistributionCommand
 */
export const se_AttachCertificateToDistributionCommand = async (
  input: AttachCertificateToDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachCertificateToDistribution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachDiskCommand
 */
export const se_AttachDiskCommand = async (
  input: AttachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachDisk");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachInstancesToLoadBalancerCommand
 */
export const se_AttachInstancesToLoadBalancerCommand = async (
  input: AttachInstancesToLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachInstancesToLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand
 */
export const se_AttachLoadBalancerTlsCertificateCommand = async (
  input: AttachLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachLoadBalancerTlsCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachStaticIpCommand
 */
export const se_AttachStaticIpCommand = async (
  input: AttachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachStaticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CloseInstancePublicPortsCommand
 */
export const se_CloseInstancePublicPortsCommand = async (
  input: CloseInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CloseInstancePublicPorts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopySnapshotCommand
 */
export const se_CopySnapshotCommand = async (
  input: CopySnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopySnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBucketCommand
 */
export const se_CreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBucket");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBucketAccessKeyCommand
 */
export const se_CreateBucketAccessKeyCommand = async (
  input: CreateBucketAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBucketAccessKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCertificateCommand
 */
export const se_CreateCertificateCommand = async (
  input: CreateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCloudFormationStackCommand
 */
export const se_CreateCloudFormationStackCommand = async (
  input: CreateCloudFormationStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCloudFormationStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContactMethodCommand
 */
export const se_CreateContactMethodCommand = async (
  input: CreateContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContactMethod");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContainerServiceCommand
 */
export const se_CreateContainerServiceCommand = async (
  input: CreateContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContainerService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContainerServiceDeploymentCommand
 */
export const se_CreateContainerServiceDeploymentCommand = async (
  input: CreateContainerServiceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContainerServiceDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContainerServiceRegistryLoginCommand
 */
export const se_CreateContainerServiceRegistryLoginCommand = async (
  input: CreateContainerServiceRegistryLoginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContainerServiceRegistryLogin");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDiskCommand
 */
export const se_CreateDiskCommand = async (
  input: CreateDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDisk");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDiskFromSnapshotCommand
 */
export const se_CreateDiskFromSnapshotCommand = async (
  input: CreateDiskFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDiskFromSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDiskSnapshotCommand
 */
export const se_CreateDiskSnapshotCommand = async (
  input: CreateDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDiskSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDistributionCommand
 */
export const se_CreateDistributionCommand = async (
  input: CreateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDistribution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDomainEntryCommand
 */
export const se_CreateDomainEntryCommand = async (
  input: CreateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDomainEntry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGUISessionAccessDetailsCommand
 */
export const se_CreateGUISessionAccessDetailsCommand = async (
  input: CreateGUISessionAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGUISessionAccessDetails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstancesCommand
 */
export const se_CreateInstancesCommand = async (
  input: CreateInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstancesFromSnapshotCommand
 */
export const se_CreateInstancesFromSnapshotCommand = async (
  input: CreateInstancesFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstancesFromSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceSnapshotCommand
 */
export const se_CreateInstanceSnapshotCommand = async (
  input: CreateInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstanceSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateKeyPairCommand
 */
export const se_CreateKeyPairCommand = async (
  input: CreateKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateKeyPair");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLoadBalancerCommand
 */
export const se_CreateLoadBalancerCommand = async (
  input: CreateLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand
 */
export const se_CreateLoadBalancerTlsCertificateCommand = async (
  input: CreateLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLoadBalancerTlsCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseCommand
 */
export const se_CreateRelationalDatabaseCommand = async (
  input: CreateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand
 */
export const se_CreateRelationalDatabaseFromSnapshotCommand = async (
  input: CreateRelationalDatabaseFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRelationalDatabaseFromSnapshot");
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
  const headers: __HeaderBag = sharedHeaders("CreateRelationalDatabaseSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAlarmCommand
 */
export const se_DeleteAlarmCommand = async (
  input: DeleteAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlarm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAutoSnapshotCommand
 */
export const se_DeleteAutoSnapshotCommand = async (
  input: DeleteAutoSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAutoSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBucketCommand
 */
export const se_DeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBucket");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBucketAccessKeyCommand
 */
export const se_DeleteBucketAccessKeyCommand = async (
  input: DeleteBucketAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBucketAccessKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCertificateCommand
 */
export const se_DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactMethodCommand
 */
export const se_DeleteContactMethodCommand = async (
  input: DeleteContactMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContactMethod");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerImageCommand
 */
export const se_DeleteContainerImageCommand = async (
  input: DeleteContainerImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContainerImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerServiceCommand
 */
export const se_DeleteContainerServiceCommand = async (
  input: DeleteContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContainerService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDiskCommand
 */
export const se_DeleteDiskCommand = async (
  input: DeleteDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDisk");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDiskSnapshotCommand
 */
export const se_DeleteDiskSnapshotCommand = async (
  input: DeleteDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDiskSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDistributionCommand
 */
export const se_DeleteDistributionCommand = async (
  input: DeleteDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDistribution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainEntryCommand
 */
export const se_DeleteDomainEntryCommand = async (
  input: DeleteDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDomainEntry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceSnapshotCommand
 */
export const se_DeleteInstanceSnapshotCommand = async (
  input: DeleteInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstanceSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteKeyPairCommand
 */
export const se_DeleteKeyPairCommand = async (
  input: DeleteKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteKeyPair");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteKnownHostKeysCommand
 */
export const se_DeleteKnownHostKeysCommand = async (
  input: DeleteKnownHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteKnownHostKeys");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLoadBalancerCommand
 */
export const se_DeleteLoadBalancerCommand = async (
  input: DeleteLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand
 */
export const se_DeleteLoadBalancerTlsCertificateCommand = async (
  input: DeleteLoadBalancerTlsCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLoadBalancerTlsCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRelationalDatabaseCommand
 */
export const se_DeleteRelationalDatabaseCommand = async (
  input: DeleteRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand
 */
export const se_DeleteRelationalDatabaseSnapshotCommand = async (
  input: DeleteRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRelationalDatabaseSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachCertificateFromDistributionCommand
 */
export const se_DetachCertificateFromDistributionCommand = async (
  input: DetachCertificateFromDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachCertificateFromDistribution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachDiskCommand
 */
export const se_DetachDiskCommand = async (
  input: DetachDiskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachDisk");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachInstancesFromLoadBalancerCommand
 */
export const se_DetachInstancesFromLoadBalancerCommand = async (
  input: DetachInstancesFromLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachInstancesFromLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachStaticIpCommand
 */
export const se_DetachStaticIpCommand = async (
  input: DetachStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachStaticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableAddOnCommand
 */
export const se_DisableAddOnCommand = async (
  input: DisableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableAddOn");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DownloadDefaultKeyPairCommand
 */
export const se_DownloadDefaultKeyPairCommand = async (
  input: DownloadDefaultKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DownloadDefaultKeyPair");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAddOnCommand
 */
export const se_EnableAddOnCommand = async (
  input: EnableAddOnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableAddOn");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExportSnapshotCommand
 */
export const se_ExportSnapshotCommand = async (
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetActiveNamesCommand
 */
export const se_GetActiveNamesCommand = async (
  input: GetActiveNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetActiveNames");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAlarmsCommand
 */
export const se_GetAlarmsCommand = async (
  input: GetAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAlarms");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAutoSnapshotsCommand
 */
export const se_GetAutoSnapshotsCommand = async (
  input: GetAutoSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAutoSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlueprintsCommand
 */
export const se_GetBlueprintsCommand = async (
  input: GetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBlueprints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketAccessKeysCommand
 */
export const se_GetBucketAccessKeysCommand = async (
  input: GetBucketAccessKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBucketAccessKeys");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketBundlesCommand
 */
export const se_GetBucketBundlesCommand = async (
  input: GetBucketBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBucketBundles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBucketMetricDataCommand
 */
export const se_GetBucketMetricDataCommand = async (
  input: GetBucketMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBucketMetricData");
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
  const headers: __HeaderBag = sharedHeaders("GetBuckets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBundlesCommand
 */
export const se_GetBundlesCommand = async (
  input: GetBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBundles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCertificatesCommand
 */
export const se_GetCertificatesCommand = async (
  input: GetCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCertificates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCloudFormationStackRecordsCommand
 */
export const se_GetCloudFormationStackRecordsCommand = async (
  input: GetCloudFormationStackRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCloudFormationStackRecords");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactMethodsCommand
 */
export const se_GetContactMethodsCommand = async (
  input: GetContactMethodsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContactMethods");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerAPIMetadataCommand
 */
export const se_GetContainerAPIMetadataCommand = async (
  input: GetContainerAPIMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContainerAPIMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerImagesCommand
 */
export const se_GetContainerImagesCommand = async (
  input: GetContainerImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContainerImages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerLogCommand
 */
export const se_GetContainerLogCommand = async (
  input: GetContainerLogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContainerLog");
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
  const headers: __HeaderBag = sharedHeaders("GetContainerServiceDeployments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerServiceMetricDataCommand
 */
export const se_GetContainerServiceMetricDataCommand = async (
  input: GetContainerServiceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContainerServiceMetricData");
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
  const headers: __HeaderBag = sharedHeaders("GetContainerServicePowers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerServicesCommand
 */
export const se_GetContainerServicesCommand = async (
  input: GetContainerServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContainerServices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostEstimateCommand
 */
export const se_GetCostEstimateCommand = async (
  input: GetCostEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCostEstimate");
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
  const headers: __HeaderBag = sharedHeaders("GetDisk");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDisksCommand
 */
export const se_GetDisksCommand = async (
  input: GetDisksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDisks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiskSnapshotCommand
 */
export const se_GetDiskSnapshotCommand = async (
  input: GetDiskSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDiskSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDiskSnapshotsCommand
 */
export const se_GetDiskSnapshotsCommand = async (
  input: GetDiskSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDiskSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionBundlesCommand
 */
export const se_GetDistributionBundlesCommand = async (
  input: GetDistributionBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDistributionBundles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionLatestCacheResetCommand
 */
export const se_GetDistributionLatestCacheResetCommand = async (
  input: GetDistributionLatestCacheResetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDistributionLatestCacheReset");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDistributionMetricDataCommand
 */
export const se_GetDistributionMetricDataCommand = async (
  input: GetDistributionMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDistributionMetricData");
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
  const headers: __HeaderBag = sharedHeaders("GetDistributions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainsCommand
 */
export const se_GetDomainsCommand = async (
  input: GetDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExportSnapshotRecordsCommand
 */
export const se_GetExportSnapshotRecordsCommand = async (
  input: GetExportSnapshotRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExportSnapshotRecords");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceCommand
 */
export const se_GetInstanceCommand = async (
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceAccessDetailsCommand
 */
export const se_GetInstanceAccessDetailsCommand = async (
  input: GetInstanceAccessDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceAccessDetails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceMetricDataCommand
 */
export const se_GetInstanceMetricDataCommand = async (
  input: GetInstanceMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceMetricData");
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
  const headers: __HeaderBag = sharedHeaders("GetInstancePortStates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstancesCommand
 */
export const se_GetInstancesCommand = async (
  input: GetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceSnapshotCommand
 */
export const se_GetInstanceSnapshotCommand = async (
  input: GetInstanceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceSnapshotsCommand
 */
export const se_GetInstanceSnapshotsCommand = async (
  input: GetInstanceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceStateCommand
 */
export const se_GetInstanceStateCommand = async (
  input: GetInstanceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyPairCommand
 */
export const se_GetKeyPairCommand = async (
  input: GetKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKeyPair");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKeyPairsCommand
 */
export const se_GetKeyPairsCommand = async (
  input: GetKeyPairsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKeyPairs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerCommand
 */
export const se_GetLoadBalancerCommand = async (
  input: GetLoadBalancerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLoadBalancer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerMetricDataCommand
 */
export const se_GetLoadBalancerMetricDataCommand = async (
  input: GetLoadBalancerMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLoadBalancerMetricData");
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
  const headers: __HeaderBag = sharedHeaders("GetLoadBalancers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand
 */
export const se_GetLoadBalancerTlsCertificatesCommand = async (
  input: GetLoadBalancerTlsCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLoadBalancerTlsCertificates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLoadBalancerTlsPoliciesCommand
 */
export const se_GetLoadBalancerTlsPoliciesCommand = async (
  input: GetLoadBalancerTlsPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLoadBalancerTlsPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationCommand
 */
export const se_GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOperation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationsCommand
 */
export const se_GetOperationsCommand = async (
  input: GetOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOperations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationsForResourceCommand
 */
export const se_GetOperationsForResourceCommand = async (
  input: GetOperationsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOperationsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRegionsCommand
 */
export const se_GetRegionsCommand = async (
  input: GetRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRegions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseCommand
 */
export const se_GetRelationalDatabaseCommand = async (
  input: GetRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand
 */
export const se_GetRelationalDatabaseBlueprintsCommand = async (
  input: GetRelationalDatabaseBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseBlueprints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseBundlesCommand
 */
export const se_GetRelationalDatabaseBundlesCommand = async (
  input: GetRelationalDatabaseBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseBundles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseEventsCommand
 */
export const se_GetRelationalDatabaseEventsCommand = async (
  input: GetRelationalDatabaseEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseLogEventsCommand
 */
export const se_GetRelationalDatabaseLogEventsCommand = async (
  input: GetRelationalDatabaseLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseLogEvents");
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
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseLogStreams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand
 */
export const se_GetRelationalDatabaseMasterUserPasswordCommand = async (
  input: GetRelationalDatabaseMasterUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseMasterUserPassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseMetricDataCommand
 */
export const se_GetRelationalDatabaseMetricDataCommand = async (
  input: GetRelationalDatabaseMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseMetricData");
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
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseParameters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabasesCommand
 */
export const se_GetRelationalDatabasesCommand = async (
  input: GetRelationalDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseSnapshotCommand
 */
export const se_GetRelationalDatabaseSnapshotCommand = async (
  input: GetRelationalDatabaseSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand
 */
export const se_GetRelationalDatabaseSnapshotsCommand = async (
  input: GetRelationalDatabaseSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRelationalDatabaseSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStaticIpCommand
 */
export const se_GetStaticIpCommand = async (
  input: GetStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStaticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStaticIpsCommand
 */
export const se_GetStaticIpsCommand = async (
  input: GetStaticIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStaticIps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportKeyPairCommand
 */
export const se_ImportKeyPairCommand = async (
  input: ImportKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportKeyPair");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IsVpcPeeredCommand
 */
export const se_IsVpcPeeredCommand = async (
  input: IsVpcPeeredCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IsVpcPeered");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1OpenInstancePublicPortsCommand
 */
export const se_OpenInstancePublicPortsCommand = async (
  input: OpenInstancePublicPortsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OpenInstancePublicPorts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PeerVpcCommand
 */
export const se_PeerVpcCommand = async (
  input: PeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PeerVpc");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAlarmCommand
 */
export const se_PutAlarmCommand = async (
  input: PutAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAlarm");
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
  const headers: __HeaderBag = sharedHeaders("PutInstancePublicPorts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootInstanceCommand
 */
export const se_RebootInstanceCommand = async (
  input: RebootInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootRelationalDatabaseCommand
 */
export const se_RebootRelationalDatabaseCommand = async (
  input: RebootRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterContainerImageCommand
 */
export const se_RegisterContainerImageCommand = async (
  input: RegisterContainerImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterContainerImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReleaseStaticIpCommand
 */
export const se_ReleaseStaticIpCommand = async (
  input: ReleaseStaticIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReleaseStaticIp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetDistributionCacheCommand
 */
export const se_ResetDistributionCacheCommand = async (
  input: ResetDistributionCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetDistributionCache");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendContactMethodVerificationCommand
 */
export const se_SendContactMethodVerificationCommand = async (
  input: SendContactMethodVerificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendContactMethodVerification");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetIpAddressTypeCommand
 */
export const se_SetIpAddressTypeCommand = async (
  input: SetIpAddressTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetIpAddressType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetResourceAccessForBucketCommand
 */
export const se_SetResourceAccessForBucketCommand = async (
  input: SetResourceAccessForBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetResourceAccessForBucket");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartGUISessionCommand
 */
export const se_StartGUISessionCommand = async (
  input: StartGUISessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartGUISession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartInstanceCommand
 */
export const se_StartInstanceCommand = async (
  input: StartInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRelationalDatabaseCommand
 */
export const se_StartRelationalDatabaseCommand = async (
  input: StartRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopGUISessionCommand
 */
export const se_StopGUISessionCommand = async (
  input: StopGUISessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopGUISession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInstanceCommand
 */
export const se_StopInstanceCommand = async (
  input: StopInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopRelationalDatabaseCommand
 */
export const se_StopRelationalDatabaseCommand = async (
  input: StopRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestAlarmCommand
 */
export const se_TestAlarmCommand = async (
  input: TestAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestAlarm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnpeerVpcCommand
 */
export const se_UnpeerVpcCommand = async (
  input: UnpeerVpcCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnpeerVpc");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBucketCommand
 */
export const se_UpdateBucketCommand = async (
  input: UpdateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBucket");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBucketBundleCommand
 */
export const se_UpdateBucketBundleCommand = async (
  input: UpdateBucketBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBucketBundle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContainerServiceCommand
 */
export const se_UpdateContainerServiceCommand = async (
  input: UpdateContainerServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContainerService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDistributionCommand
 */
export const se_UpdateDistributionCommand = async (
  input: UpdateDistributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDistribution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDistributionBundleCommand
 */
export const se_UpdateDistributionBundleCommand = async (
  input: UpdateDistributionBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDistributionBundle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainEntryCommand
 */
export const se_UpdateDomainEntryCommand = async (
  input: UpdateDomainEntryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDomainEntry");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceMetadataOptionsCommand
 */
export const se_UpdateInstanceMetadataOptionsCommand = async (
  input: UpdateInstanceMetadataOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInstanceMetadataOptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLoadBalancerAttributeCommand
 */
export const se_UpdateLoadBalancerAttributeCommand = async (
  input: UpdateLoadBalancerAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLoadBalancerAttribute");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRelationalDatabaseCommand
 */
export const se_UpdateRelationalDatabaseCommand = async (
  input: UpdateRelationalDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRelationalDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRelationalDatabaseParametersCommand
 */
export const se_UpdateRelationalDatabaseParametersCommand = async (
  input: UpdateRelationalDatabaseParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRelationalDatabaseParameters");
  let body: any;
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGUISessionAccessDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteContainerImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteContainerServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetActiveNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetContainerAPIMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInstancePortStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInstanceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLoadBalancerTlsPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRelationalDatabaseBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRelationalDatabaseLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRelationalDatabaseParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: IsVpcPeeredCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnauthenticatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccessRules omitted.

// se_AddOnRequest omitted.

// se_AddOnRequestList omitted.

// se_AllocateStaticIpRequest omitted.

// se_AttachCertificateToDistributionRequest omitted.

// se_AttachDiskRequest omitted.

// se_AttachedDiskMap omitted.

// se_AttachInstancesToLoadBalancerRequest omitted.

// se_AttachLoadBalancerTlsCertificateRequest omitted.

// se_AttachStaticIpRequest omitted.

// se_AutoSnapshotAddOnRequest omitted.

// se_BucketAccessLogConfig omitted.

// se_CacheBehavior omitted.

// se_CacheBehaviorList omitted.

// se_CacheBehaviorPerPath omitted.

// se_CacheSettings omitted.

// se_CertificateStatusList omitted.

// se_CloseInstancePublicPortsRequest omitted.

// se_ContactProtocolsList omitted.

// se_Container omitted.

// se_ContainerMap omitted.

// se_ContainerServiceDeploymentRequest omitted.

// se_ContainerServiceECRImagePullerRoleRequest omitted.

// se_ContainerServiceHealthCheckConfig omitted.

// se_ContainerServicePublicDomains omitted.

// se_ContainerServicePublicDomainsList omitted.

// se_CookieObject omitted.

// se_CopySnapshotRequest omitted.

// se_CreateBucketAccessKeyRequest omitted.

// se_CreateBucketRequest omitted.

// se_CreateCertificateRequest omitted.

// se_CreateCloudFormationStackRequest omitted.

// se_CreateContactMethodRequest omitted.

// se_CreateContainerServiceDeploymentRequest omitted.

// se_CreateContainerServiceRegistryLoginRequest omitted.

// se_CreateContainerServiceRequest omitted.

// se_CreateDiskFromSnapshotRequest omitted.

// se_CreateDiskRequest omitted.

// se_CreateDiskSnapshotRequest omitted.

// se_CreateDistributionRequest omitted.

// se_CreateDomainEntryRequest omitted.

// se_CreateDomainRequest omitted.

// se_CreateGUISessionAccessDetailsRequest omitted.

// se_CreateInstancesFromSnapshotRequest omitted.

// se_CreateInstanceSnapshotRequest omitted.

// se_CreateInstancesRequest omitted.

// se_CreateKeyPairRequest omitted.

// se_CreateLoadBalancerRequest omitted.

// se_CreateLoadBalancerTlsCertificateRequest omitted.

/**
 * serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest
 */
const se_CreateRelationalDatabaseFromSnapshotRequest = (
  input: CreateRelationalDatabaseFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    availabilityZone: [],
    publiclyAccessible: [],
    relationalDatabaseBundleId: [],
    relationalDatabaseName: [],
    relationalDatabaseSnapshotName: [],
    restoreTime: (_) => Math.round(_.getTime() / 1000),
    sourceRelationalDatabaseName: [],
    tags: _json,
    useLatestRestorableTime: [],
  });
};

// se_CreateRelationalDatabaseRequest omitted.

// se_CreateRelationalDatabaseSnapshotRequest omitted.

// se_DeleteAlarmRequest omitted.

// se_DeleteAutoSnapshotRequest omitted.

// se_DeleteBucketAccessKeyRequest omitted.

// se_DeleteBucketRequest omitted.

// se_DeleteCertificateRequest omitted.

// se_DeleteContactMethodRequest omitted.

// se_DeleteContainerImageRequest omitted.

// se_DeleteContainerServiceRequest omitted.

// se_DeleteDiskRequest omitted.

// se_DeleteDiskSnapshotRequest omitted.

// se_DeleteDistributionRequest omitted.

// se_DeleteDomainEntryRequest omitted.

// se_DeleteDomainRequest omitted.

// se_DeleteInstanceRequest omitted.

// se_DeleteInstanceSnapshotRequest omitted.

// se_DeleteKeyPairRequest omitted.

// se_DeleteKnownHostKeysRequest omitted.

// se_DeleteLoadBalancerRequest omitted.

// se_DeleteLoadBalancerTlsCertificateRequest omitted.

// se_DeleteRelationalDatabaseRequest omitted.

// se_DeleteRelationalDatabaseSnapshotRequest omitted.

// se_DetachCertificateFromDistributionRequest omitted.

// se_DetachDiskRequest omitted.

// se_DetachInstancesFromLoadBalancerRequest omitted.

// se_DetachStaticIpRequest omitted.

// se_DisableAddOnRequest omitted.

// se_DiskMap omitted.

// se_DiskMapList omitted.

// se_DomainEntry omitted.

// se_DomainEntryOptions omitted.

// se_DomainNameList omitted.

// se_DownloadDefaultKeyPairRequest omitted.

// se_EnableAddOnRequest omitted.

// se_EndpointRequest omitted.

// se_Environment omitted.

// se_ExportSnapshotRequest omitted.

// se_GetActiveNamesRequest omitted.

// se_GetAlarmsRequest omitted.

// se_GetAutoSnapshotsRequest omitted.

// se_GetBlueprintsRequest omitted.

// se_GetBucketAccessKeysRequest omitted.

// se_GetBucketBundlesRequest omitted.

/**
 * serializeAws_json1_1GetBucketMetricDataRequest
 */
const se_GetBucketMetricDataRequest = (input: GetBucketMetricDataRequest, context: __SerdeContext): any => {
  return take(input, {
    bucketName: [],
    endTime: (_) => Math.round(_.getTime() / 1000),
    metricName: [],
    period: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    statistics: _json,
    unit: [],
  });
};

// se_GetBucketsRequest omitted.

// se_GetBundlesRequest omitted.

// se_GetCertificatesRequest omitted.

// se_GetCloudFormationStackRecordsRequest omitted.

// se_GetContactMethodsRequest omitted.

// se_GetContainerAPIMetadataRequest omitted.

// se_GetContainerImagesRequest omitted.

/**
 * serializeAws_json1_1GetContainerLogRequest
 */
const se_GetContainerLogRequest = (input: GetContainerLogRequest, context: __SerdeContext): any => {
  return take(input, {
    containerName: [],
    endTime: (_) => Math.round(_.getTime() / 1000),
    filterPattern: [],
    pageToken: [],
    serviceName: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_GetContainerServiceDeploymentsRequest omitted.

/**
 * serializeAws_json1_1GetContainerServiceMetricDataRequest
 */
const se_GetContainerServiceMetricDataRequest = (
  input: GetContainerServiceMetricDataRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    metricName: [],
    period: [],
    serviceName: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    statistics: _json,
  });
};

// se_GetContainerServicePowersRequest omitted.

// se_GetContainerServicesRequest omitted.

/**
 * serializeAws_json1_1GetCostEstimateRequest
 */
const se_GetCostEstimateRequest = (input: GetCostEstimateRequest, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    resourceName: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_GetDiskRequest omitted.

// se_GetDiskSnapshotRequest omitted.

// se_GetDiskSnapshotsRequest omitted.

// se_GetDisksRequest omitted.

// se_GetDistributionBundlesRequest omitted.

// se_GetDistributionLatestCacheResetRequest omitted.

/**
 * serializeAws_json1_1GetDistributionMetricDataRequest
 */
const se_GetDistributionMetricDataRequest = (input: GetDistributionMetricDataRequest, context: __SerdeContext): any => {
  return take(input, {
    distributionName: [],
    endTime: (_) => Math.round(_.getTime() / 1000),
    metricName: [],
    period: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    statistics: _json,
    unit: [],
  });
};

// se_GetDistributionsRequest omitted.

// se_GetDomainRequest omitted.

// se_GetDomainsRequest omitted.

// se_GetExportSnapshotRecordsRequest omitted.

// se_GetInstanceAccessDetailsRequest omitted.

/**
 * serializeAws_json1_1GetInstanceMetricDataRequest
 */
const se_GetInstanceMetricDataRequest = (input: GetInstanceMetricDataRequest, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    instanceName: [],
    metricName: [],
    period: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    statistics: _json,
    unit: [],
  });
};

// se_GetInstancePortStatesRequest omitted.

// se_GetInstanceRequest omitted.

// se_GetInstanceSnapshotRequest omitted.

// se_GetInstanceSnapshotsRequest omitted.

// se_GetInstancesRequest omitted.

// se_GetInstanceStateRequest omitted.

// se_GetKeyPairRequest omitted.

// se_GetKeyPairsRequest omitted.

/**
 * serializeAws_json1_1GetLoadBalancerMetricDataRequest
 */
const se_GetLoadBalancerMetricDataRequest = (input: GetLoadBalancerMetricDataRequest, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    loadBalancerName: [],
    metricName: [],
    period: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    statistics: _json,
    unit: [],
  });
};

// se_GetLoadBalancerRequest omitted.

// se_GetLoadBalancersRequest omitted.

// se_GetLoadBalancerTlsCertificatesRequest omitted.

// se_GetLoadBalancerTlsPoliciesRequest omitted.

// se_GetOperationRequest omitted.

// se_GetOperationsForResourceRequest omitted.

// se_GetOperationsRequest omitted.

// se_GetRegionsRequest omitted.

// se_GetRelationalDatabaseBlueprintsRequest omitted.

// se_GetRelationalDatabaseBundlesRequest omitted.

// se_GetRelationalDatabaseEventsRequest omitted.

/**
 * serializeAws_json1_1GetRelationalDatabaseLogEventsRequest
 */
const se_GetRelationalDatabaseLogEventsRequest = (
  input: GetRelationalDatabaseLogEventsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    logStreamName: [],
    pageToken: [],
    relationalDatabaseName: [],
    startFromHead: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_GetRelationalDatabaseLogStreamsRequest omitted.

// se_GetRelationalDatabaseMasterUserPasswordRequest omitted.

/**
 * serializeAws_json1_1GetRelationalDatabaseMetricDataRequest
 */
const se_GetRelationalDatabaseMetricDataRequest = (
  input: GetRelationalDatabaseMetricDataRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    metricName: [],
    period: [],
    relationalDatabaseName: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    statistics: _json,
    unit: [],
  });
};

// se_GetRelationalDatabaseParametersRequest omitted.

// se_GetRelationalDatabaseRequest omitted.

// se_GetRelationalDatabaseSnapshotRequest omitted.

// se_GetRelationalDatabaseSnapshotsRequest omitted.

// se_GetRelationalDatabasesRequest omitted.

// se_GetStaticIpRequest omitted.

// se_GetStaticIpsRequest omitted.

// se_HeaderForwardList omitted.

// se_HeaderObject omitted.

// se_ImportKeyPairRequest omitted.

// se_InputOrigin omitted.

// se_InstanceEntry omitted.

// se_InstanceEntryList omitted.

// se_IsVpcPeeredRequest omitted.

// se_MetricStatisticList omitted.

// se_NotificationTriggerList omitted.

// se_OpenInstancePublicPortsRequest omitted.

// se_PartnerIdList omitted.

// se_PeerVpcRequest omitted.

// se_PortInfo omitted.

// se_PortInfoList omitted.

// se_PortMap omitted.

// se_PrivateRegistryAccessRequest omitted.

/**
 * serializeAws_json1_1PutAlarmRequest
 */
const se_PutAlarmRequest = (input: PutAlarmRequest, context: __SerdeContext): any => {
  return take(input, {
    alarmName: [],
    comparisonOperator: [],
    contactProtocols: _json,
    datapointsToAlarm: [],
    evaluationPeriods: [],
    metricName: [],
    monitoredResourceName: [],
    notificationEnabled: [],
    notificationTriggers: _json,
    threshold: __serializeFloat,
    treatMissingData: [],
  });
};

// se_PutInstancePublicPortsRequest omitted.

// se_QueryStringObject omitted.

// se_RebootInstanceRequest omitted.

// se_RebootRelationalDatabaseRequest omitted.

// se_RegisterContainerImageRequest omitted.

// se_RelationalDatabaseParameter omitted.

// se_RelationalDatabaseParameterList omitted.

// se_ReleaseStaticIpRequest omitted.

// se_ResetDistributionCacheRequest omitted.

// se_ResourceNameList omitted.

// se_SendContactMethodVerificationRequest omitted.

// se_SetIpAddressTypeRequest omitted.

// se_SetResourceAccessForBucketRequest omitted.

// se_StartGUISessionRequest omitted.

// se_StartInstanceRequest omitted.

// se_StartRelationalDatabaseRequest omitted.

// se_StopGUISessionRequest omitted.

// se_StopInstanceOnIdleRequest omitted.

// se_StopInstanceRequest omitted.

// se_StopRelationalDatabaseRequest omitted.

// se_StringList omitted.

// se_SubjectAlternativeNameList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TestAlarmRequest omitted.

// se_UnpeerVpcRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateBucketBundleRequest omitted.

// se_UpdateBucketRequest omitted.

// se_UpdateContainerServiceRequest omitted.

// se_UpdateDistributionBundleRequest omitted.

// se_UpdateDistributionRequest omitted.

// se_UpdateDomainEntryRequest omitted.

// se_UpdateInstanceMetadataOptionsRequest omitted.

// se_UpdateLoadBalancerAttributeRequest omitted.

// se_UpdateRelationalDatabaseParametersRequest omitted.

// se_UpdateRelationalDatabaseRequest omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1AccessKey
 */
const de_AccessKey = (output: any, context: __SerdeContext): AccessKey => {
  return take(output, {
    accessKeyId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUsed: (_: any) => de_AccessKeyLastUsed(_, context),
    secretAccessKey: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AccessKeyLastUsed
 */
const de_AccessKeyLastUsed = (output: any, context: __SerdeContext): AccessKeyLastUsed => {
  return take(output, {
    lastUsedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    region: __expectString,
    serviceName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AccessKeyList
 */
const de_AccessKeyList = (output: any, context: __SerdeContext): AccessKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessKey(entry, context);
    });
  return retVal;
};

// de_AccessReceiverList omitted.

// de_AccessRules omitted.

/**
 * deserializeAws_json1_1AccountLevelBpaSync
 */
const de_AccountLevelBpaSync = (output: any, context: __SerdeContext): AccountLevelBpaSync => {
  return take(output, {
    bpaImpactsLightsail: __expectBoolean,
    lastSyncedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    status: __expectString,
  }) as any;
};

// de_AccountSetupInProgressException omitted.

// de_AddOn omitted.

// de_AddOnList omitted.

/**
 * deserializeAws_json1_1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return take(output, {
    arn: __expectString,
    comparisonOperator: __expectString,
    contactProtocols: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datapointsToAlarm: __expectInt32,
    evaluationPeriods: __expectInt32,
    location: _json,
    metricName: __expectString,
    monitoredResourceInfo: _json,
    name: __expectString,
    notificationEnabled: __expectBoolean,
    notificationTriggers: _json,
    period: __expectInt32,
    resourceType: __expectString,
    state: __expectString,
    statistic: __expectString,
    supportCode: __expectString,
    threshold: __limitedParseDouble,
    treatMissingData: __expectString,
    unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AlarmsList
 */
const de_AlarmsList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Alarm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AllocateStaticIpResult
 */
const de_AllocateStaticIpResult = (output: any, context: __SerdeContext): AllocateStaticIpResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_AppCategoryList omitted.

/**
 * deserializeAws_json1_1AttachCertificateToDistributionResult
 */
const de_AttachCertificateToDistributionResult = (
  output: any,
  context: __SerdeContext
): AttachCertificateToDistributionResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AttachDiskResult
 */
const de_AttachDiskResult = (output: any, context: __SerdeContext): AttachDiskResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_AttachedDisk omitted.

// de_AttachedDiskList omitted.

/**
 * deserializeAws_json1_1AttachInstancesToLoadBalancerResult
 */
const de_AttachInstancesToLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): AttachInstancesToLoadBalancerResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult
 */
const de_AttachLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTlsCertificateResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AttachStaticIpResult
 */
const de_AttachStaticIpResult = (output: any, context: __SerdeContext): AttachStaticIpResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AutoSnapshotDetails
 */
const de_AutoSnapshotDetails = (output: any, context: __SerdeContext): AutoSnapshotDetails => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    date: __expectString,
    fromAttachedDisks: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoSnapshotDetailsList
 */
const de_AutoSnapshotDetailsList = (output: any, context: __SerdeContext): AutoSnapshotDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoSnapshotDetails(entry, context);
    });
  return retVal;
};

// de_AvailabilityZone omitted.

// de_AvailabilityZoneList omitted.

// de_Blueprint omitted.

// de_BlueprintList omitted.

/**
 * deserializeAws_json1_1Bucket
 */
const de_Bucket = (output: any, context: __SerdeContext): Bucket => {
  return take(output, {
    ableToUpdateBundle: __expectBoolean,
    accessLogConfig: _json,
    accessRules: _json,
    arn: __expectString,
    bundleId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    location: _json,
    name: __expectString,
    objectVersioning: __expectString,
    readonlyAccessAccounts: _json,
    resourceType: __expectString,
    resourcesReceivingAccess: _json,
    state: _json,
    supportCode: __expectString,
    tags: _json,
    url: __expectString,
  }) as any;
};

// de_BucketAccessLogConfig omitted.

/**
 * deserializeAws_json1_1BucketBundle
 */
const de_BucketBundle = (output: any, context: __SerdeContext): BucketBundle => {
  return take(output, {
    bundleId: __expectString,
    isActive: __expectBoolean,
    name: __expectString,
    price: __limitedParseFloat32,
    storagePerMonthInGb: __expectInt32,
    transferPerMonthInGb: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1BucketBundleList
 */
const de_BucketBundleList = (output: any, context: __SerdeContext): BucketBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Bucket(entry, context);
    });
  return retVal;
};

// de_BucketState omitted.

/**
 * deserializeAws_json1_1Bundle
 */
const de_Bundle = (output: any, context: __SerdeContext): Bundle => {
  return take(output, {
    bundleId: __expectString,
    cpuCount: __expectInt32,
    diskSizeInGb: __expectInt32,
    instanceType: __expectString,
    isActive: __expectBoolean,
    name: __expectString,
    power: __expectInt32,
    price: __limitedParseFloat32,
    ramSizeInGb: __limitedParseFloat32,
    supportedAppCategories: _json,
    supportedPlatforms: _json,
    transferPerMonthInGb: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1BundleList
 */
const de_BundleList = (output: any, context: __SerdeContext): Bundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Bundle(entry, context);
    });
  return retVal;
};

// de_CacheBehavior omitted.

// de_CacheBehaviorList omitted.

// de_CacheBehaviorPerPath omitted.

// de_CacheSettings omitted.

/**
 * deserializeAws_json1_1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domainName: __expectString,
    domainValidationRecords: _json,
    eligibleToRenew: __expectString,
    inUseResourceCount: __expectInt32,
    issuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    issuerCA: __expectString,
    keyAlgorithm: __expectString,
    name: __expectString,
    notAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    renewalSummary: (_: any) => de_RenewalSummary(_, context),
    requestFailureReason: __expectString,
    revocationReason: __expectString,
    revokedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    serialNumber: __expectString,
    status: __expectString,
    subjectAlternativeNames: _json,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CertificateSummary
 */
const de_CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return take(output, {
    certificateArn: __expectString,
    certificateDetail: (_: any) => de_Certificate(_, context),
    certificateName: __expectString,
    domainName: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CertificateSummaryList
 */
const de_CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CertificateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CloseInstancePublicPortsResult
 */
const de_CloseInstancePublicPortsResult = (output: any, context: __SerdeContext): CloseInstancePublicPortsResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CloudFormationStackRecord
 */
const de_CloudFormationStackRecord = (output: any, context: __SerdeContext): CloudFormationStackRecord => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    destinationInfo: _json,
    location: _json,
    name: __expectString,
    resourceType: __expectString,
    sourceInfo: _json,
    state: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CloudFormationStackRecordList
 */
const de_CloudFormationStackRecordList = (output: any, context: __SerdeContext): CloudFormationStackRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudFormationStackRecord(entry, context);
    });
  return retVal;
};

// de_CloudFormationStackRecordSourceInfo omitted.

// de_CloudFormationStackRecordSourceInfoList omitted.

/**
 * deserializeAws_json1_1ContactMethod
 */
const de_ContactMethod = (output: any, context: __SerdeContext): ContactMethod => {
  return take(output, {
    arn: __expectString,
    contactEndpoint: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    location: _json,
    name: __expectString,
    protocol: __expectString,
    resourceType: __expectString,
    status: __expectString,
    supportCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContactMethodsList
 */
const de_ContactMethodsList = (output: any, context: __SerdeContext): ContactMethod[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContactMethod(entry, context);
    });
  return retVal;
};

// de_ContactProtocolsList omitted.

// de_Container omitted.

/**
 * deserializeAws_json1_1ContainerImage
 */
const de_ContainerImage = (output: any, context: __SerdeContext): ContainerImage => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    digest: __expectString,
    image: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerImageList
 */
const de_ContainerImageList = (output: any, context: __SerdeContext): ContainerImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerImage(entry, context);
    });
  return retVal;
};

// de_ContainerMap omitted.

/**
 * deserializeAws_json1_1ContainerService
 */
const de_ContainerService = (output: any, context: __SerdeContext): ContainerService => {
  return take(output, {
    arn: __expectString,
    containerServiceName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    currentDeployment: (_: any) => de_ContainerServiceDeployment(_, context),
    isDisabled: __expectBoolean,
    location: _json,
    nextDeployment: (_: any) => de_ContainerServiceDeployment(_, context),
    power: __expectString,
    powerId: __expectString,
    principalArn: __expectString,
    privateDomainName: __expectString,
    privateRegistryAccess: _json,
    publicDomainNames: _json,
    resourceType: __expectString,
    scale: __expectInt32,
    state: __expectString,
    stateDetail: _json,
    tags: _json,
    url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerServiceDeployment
 */
const de_ContainerServiceDeployment = (output: any, context: __SerdeContext): ContainerServiceDeployment => {
  return take(output, {
    containers: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    publicEndpoint: _json,
    state: __expectString,
    version: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerServiceDeploymentList
 */
const de_ContainerServiceDeploymentList = (output: any, context: __SerdeContext): ContainerServiceDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerServiceDeployment(entry, context);
    });
  return retVal;
};

// de_ContainerServiceECRImagePullerRole omitted.

// de_ContainerServiceEndpoint omitted.

// de_ContainerServiceHealthCheckConfig omitted.

/**
 * deserializeAws_json1_1ContainerServiceList
 */
const de_ContainerServiceList = (output: any, context: __SerdeContext): ContainerService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerServiceLogEvent
 */
const de_ContainerServiceLogEvent = (output: any, context: __SerdeContext): ContainerServiceLogEvent => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerServiceLogEventList
 */
const de_ContainerServiceLogEventList = (output: any, context: __SerdeContext): ContainerServiceLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerServiceLogEvent(entry, context);
    });
  return retVal;
};

// de_ContainerServiceMetadataEntry omitted.

// de_ContainerServiceMetadataEntryList omitted.

/**
 * deserializeAws_json1_1ContainerServicePower
 */
const de_ContainerServicePower = (output: any, context: __SerdeContext): ContainerServicePower => {
  return take(output, {
    cpuCount: __limitedParseFloat32,
    isActive: __expectBoolean,
    name: __expectString,
    powerId: __expectString,
    price: __limitedParseFloat32,
    ramSizeInGb: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerServicePowerList
 */
const de_ContainerServicePowerList = (output: any, context: __SerdeContext): ContainerServicePower[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContainerServicePower(entry, context);
    });
  return retVal;
};

// de_ContainerServicePublicDomains omitted.

// de_ContainerServicePublicDomainsList omitted.

/**
 * deserializeAws_json1_1ContainerServiceRegistryLogin
 */
const de_ContainerServiceRegistryLogin = (output: any, context: __SerdeContext): ContainerServiceRegistryLogin => {
  return take(output, {
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    password: __expectString,
    registry: __expectString,
    username: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContainerServicesListResult
 */
const de_ContainerServicesListResult = (output: any, context: __SerdeContext): ContainerServicesListResult => {
  return take(output, {
    containerServices: (_: any) => de_ContainerServiceList(_, context),
  }) as any;
};

// de_ContainerServiceStateDetail omitted.

// de_CookieObject omitted.

/**
 * deserializeAws_json1_1CopySnapshotResult
 */
const de_CopySnapshotResult = (output: any, context: __SerdeContext): CopySnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CostEstimate
 */
const de_CostEstimate = (output: any, context: __SerdeContext): CostEstimate => {
  return take(output, {
    resultsByTime: (_: any) => de_EstimatesByTime(_, context),
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CostEstimates
 */
const de_CostEstimates = (output: any, context: __SerdeContext): CostEstimate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CostEstimate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateBucketAccessKeyResult
 */
const de_CreateBucketAccessKeyResult = (output: any, context: __SerdeContext): CreateBucketAccessKeyResult => {
  return take(output, {
    accessKey: (_: any) => de_AccessKey(_, context),
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateBucketResult
 */
const de_CreateBucketResult = (output: any, context: __SerdeContext): CreateBucketResult => {
  return take(output, {
    bucket: (_: any) => de_Bucket(_, context),
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateCertificateResult
 */
const de_CreateCertificateResult = (output: any, context: __SerdeContext): CreateCertificateResult => {
  return take(output, {
    certificate: (_: any) => de_CertificateSummary(_, context),
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateCloudFormationStackResult
 */
const de_CreateCloudFormationStackResult = (output: any, context: __SerdeContext): CreateCloudFormationStackResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateContactMethodResult
 */
const de_CreateContactMethodResult = (output: any, context: __SerdeContext): CreateContactMethodResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateContainerServiceDeploymentResult
 */
const de_CreateContainerServiceDeploymentResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceDeploymentResult => {
  return take(output, {
    containerService: (_: any) => de_ContainerService(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateContainerServiceRegistryLoginResult
 */
const de_CreateContainerServiceRegistryLoginResult = (
  output: any,
  context: __SerdeContext
): CreateContainerServiceRegistryLoginResult => {
  return take(output, {
    registryLogin: (_: any) => de_ContainerServiceRegistryLogin(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateContainerServiceResult
 */
const de_CreateContainerServiceResult = (output: any, context: __SerdeContext): CreateContainerServiceResult => {
  return take(output, {
    containerService: (_: any) => de_ContainerService(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDiskFromSnapshotResult
 */
const de_CreateDiskFromSnapshotResult = (output: any, context: __SerdeContext): CreateDiskFromSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDiskResult
 */
const de_CreateDiskResult = (output: any, context: __SerdeContext): CreateDiskResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDiskSnapshotResult
 */
const de_CreateDiskSnapshotResult = (output: any, context: __SerdeContext): CreateDiskSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDistributionResult
 */
const de_CreateDistributionResult = (output: any, context: __SerdeContext): CreateDistributionResult => {
  return take(output, {
    distribution: (_: any) => de_LightsailDistribution(_, context),
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDomainEntryResult
 */
const de_CreateDomainEntryResult = (output: any, context: __SerdeContext): CreateDomainEntryResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDomainResult
 */
const de_CreateDomainResult = (output: any, context: __SerdeContext): CreateDomainResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

// de_CreateGUISessionAccessDetailsResult omitted.

/**
 * deserializeAws_json1_1CreateInstancesFromSnapshotResult
 */
const de_CreateInstancesFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateInstancesFromSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateInstanceSnapshotResult
 */
const de_CreateInstanceSnapshotResult = (output: any, context: __SerdeContext): CreateInstanceSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateInstancesResult
 */
const de_CreateInstancesResult = (output: any, context: __SerdeContext): CreateInstancesResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateKeyPairResult
 */
const de_CreateKeyPairResult = (output: any, context: __SerdeContext): CreateKeyPairResult => {
  return take(output, {
    keyPair: (_: any) => de_KeyPair(_, context),
    operation: (_: any) => de_Operation(_, context),
    privateKeyBase64: __expectString,
    publicKeyBase64: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateLoadBalancerResult
 */
const de_CreateLoadBalancerResult = (output: any, context: __SerdeContext): CreateLoadBalancerResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult
 */
const de_CreateLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): CreateLoadBalancerTlsCertificateResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult
 */
const de_CreateRelationalDatabaseFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseFromSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseResult
 */
const de_CreateRelationalDatabaseResult = (output: any, context: __SerdeContext): CreateRelationalDatabaseResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult
 */
const de_CreateRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): CreateRelationalDatabaseSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteAlarmResult
 */
const de_DeleteAlarmResult = (output: any, context: __SerdeContext): DeleteAlarmResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteAutoSnapshotResult
 */
const de_DeleteAutoSnapshotResult = (output: any, context: __SerdeContext): DeleteAutoSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteBucketAccessKeyResult
 */
const de_DeleteBucketAccessKeyResult = (output: any, context: __SerdeContext): DeleteBucketAccessKeyResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteBucketResult
 */
const de_DeleteBucketResult = (output: any, context: __SerdeContext): DeleteBucketResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteCertificateResult
 */
const de_DeleteCertificateResult = (output: any, context: __SerdeContext): DeleteCertificateResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteContactMethodResult
 */
const de_DeleteContactMethodResult = (output: any, context: __SerdeContext): DeleteContactMethodResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_DeleteContainerImageResult omitted.

// de_DeleteContainerServiceResult omitted.

/**
 * deserializeAws_json1_1DeleteDiskResult
 */
const de_DeleteDiskResult = (output: any, context: __SerdeContext): DeleteDiskResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteDiskSnapshotResult
 */
const de_DeleteDiskSnapshotResult = (output: any, context: __SerdeContext): DeleteDiskSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteDistributionResult
 */
const de_DeleteDistributionResult = (output: any, context: __SerdeContext): DeleteDistributionResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteDomainEntryResult
 */
const de_DeleteDomainEntryResult = (output: any, context: __SerdeContext): DeleteDomainEntryResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteDomainResult
 */
const de_DeleteDomainResult = (output: any, context: __SerdeContext): DeleteDomainResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteInstanceResult
 */
const de_DeleteInstanceResult = (output: any, context: __SerdeContext): DeleteInstanceResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteInstanceSnapshotResult
 */
const de_DeleteInstanceSnapshotResult = (output: any, context: __SerdeContext): DeleteInstanceSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteKeyPairResult
 */
const de_DeleteKeyPairResult = (output: any, context: __SerdeContext): DeleteKeyPairResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteKnownHostKeysResult
 */
const de_DeleteKnownHostKeysResult = (output: any, context: __SerdeContext): DeleteKnownHostKeysResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerResult
 */
const de_DeleteLoadBalancerResult = (output: any, context: __SerdeContext): DeleteLoadBalancerResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult
 */
const de_DeleteLoadBalancerTlsCertificateResult = (
  output: any,
  context: __SerdeContext
): DeleteLoadBalancerTlsCertificateResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseResult
 */
const de_DeleteRelationalDatabaseResult = (output: any, context: __SerdeContext): DeleteRelationalDatabaseResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult
 */
const de_DeleteRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): DeleteRelationalDatabaseSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_DestinationInfo omitted.

/**
 * deserializeAws_json1_1DetachCertificateFromDistributionResult
 */
const de_DetachCertificateFromDistributionResult = (
  output: any,
  context: __SerdeContext
): DetachCertificateFromDistributionResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetachDiskResult
 */
const de_DetachDiskResult = (output: any, context: __SerdeContext): DetachDiskResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetachInstancesFromLoadBalancerResult
 */
const de_DetachInstancesFromLoadBalancerResult = (
  output: any,
  context: __SerdeContext
): DetachInstancesFromLoadBalancerResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetachStaticIpResult
 */
const de_DetachStaticIpResult = (output: any, context: __SerdeContext): DetachStaticIpResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DisableAddOnResult
 */
const de_DisableAddOnResult = (output: any, context: __SerdeContext): DisableAddOnResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Disk
 */
const de_Disk = (output: any, context: __SerdeContext): Disk => {
  return take(output, {
    addOns: _json,
    arn: __expectString,
    attachedTo: __expectString,
    attachmentState: __expectString,
    autoMountStatus: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    gbInUse: __expectInt32,
    iops: __expectInt32,
    isAttached: __expectBoolean,
    isSystemDisk: __expectBoolean,
    location: _json,
    name: __expectString,
    path: __expectString,
    resourceType: __expectString,
    sizeInGb: __expectInt32,
    state: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

// de_DiskInfo omitted.

// de_DiskInfoList omitted.

/**
 * deserializeAws_json1_1DiskList
 */
const de_DiskList = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Disk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DiskSnapshot
 */
const de_DiskSnapshot = (output: any, context: __SerdeContext): DiskSnapshot => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fromDiskArn: __expectString,
    fromDiskName: __expectString,
    fromInstanceArn: __expectString,
    fromInstanceName: __expectString,
    isFromAutoSnapshot: __expectBoolean,
    location: _json,
    name: __expectString,
    progress: __expectString,
    resourceType: __expectString,
    sizeInGb: __expectInt32,
    state: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

// de_DiskSnapshotInfo omitted.

/**
 * deserializeAws_json1_1DiskSnapshotList
 */
const de_DiskSnapshotList = (output: any, context: __SerdeContext): DiskSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DiskSnapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DistributionBundle
 */
const de_DistributionBundle = (output: any, context: __SerdeContext): DistributionBundle => {
  return take(output, {
    bundleId: __expectString,
    isActive: __expectBoolean,
    name: __expectString,
    price: __limitedParseFloat32,
    transferPerMonthInGb: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DistributionBundleList
 */
const de_DistributionBundleList = (output: any, context: __SerdeContext): DistributionBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_LightsailDistribution(entry, context);
    });
  return retVal;
};

// de_DnsRecordCreationState omitted.

/**
 * deserializeAws_json1_1Domain
 */
const de_Domain = (output: any, context: __SerdeContext): Domain => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domainEntries: _json,
    location: _json,
    name: __expectString,
    registeredDomainDelegationInfo: _json,
    resourceType: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

// de_DomainEntry omitted.

// de_DomainEntryList omitted.

// de_DomainEntryOptions omitted.

/**
 * deserializeAws_json1_1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): Domain[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Domain(entry, context);
    });
  return retVal;
};

// de_DomainValidationRecord omitted.

// de_DomainValidationRecordList omitted.

/**
 * deserializeAws_json1_1DownloadDefaultKeyPairResult
 */
const de_DownloadDefaultKeyPairResult = (output: any, context: __SerdeContext): DownloadDefaultKeyPairResult => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    privateKeyBase64: __expectString,
    publicKeyBase64: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EnableAddOnResult
 */
const de_EnableAddOnResult = (output: any, context: __SerdeContext): EnableAddOnResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_Environment omitted.

/**
 * deserializeAws_json1_1EstimateByTime
 */
const de_EstimateByTime = (output: any, context: __SerdeContext): EstimateByTime => {
  return take(output, {
    currency: __expectString,
    pricingUnit: __expectString,
    timePeriod: (_: any) => de_TimePeriod(_, context),
    unit: __limitedParseDouble,
    usageCost: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1EstimatesByTime
 */
const de_EstimatesByTime = (output: any, context: __SerdeContext): EstimateByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EstimateByTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportSnapshotRecord
 */
const de_ExportSnapshotRecord = (output: any, context: __SerdeContext): ExportSnapshotRecord => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    destinationInfo: _json,
    location: _json,
    name: __expectString,
    resourceType: __expectString,
    sourceInfo: (_: any) => de_ExportSnapshotRecordSourceInfo(_, context),
    state: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExportSnapshotRecordList
 */
const de_ExportSnapshotRecordList = (output: any, context: __SerdeContext): ExportSnapshotRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportSnapshotRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportSnapshotRecordSourceInfo
 */
const de_ExportSnapshotRecordSourceInfo = (output: any, context: __SerdeContext): ExportSnapshotRecordSourceInfo => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    diskSnapshotInfo: _json,
    fromResourceArn: __expectString,
    fromResourceName: __expectString,
    instanceSnapshotInfo: _json,
    name: __expectString,
    resourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExportSnapshotResult
 */
const de_ExportSnapshotResult = (output: any, context: __SerdeContext): ExportSnapshotResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_GetActiveNamesResult omitted.

/**
 * deserializeAws_json1_1GetAlarmsResult
 */
const de_GetAlarmsResult = (output: any, context: __SerdeContext): GetAlarmsResult => {
  return take(output, {
    alarms: (_: any) => de_AlarmsList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetAutoSnapshotsResult
 */
const de_GetAutoSnapshotsResult = (output: any, context: __SerdeContext): GetAutoSnapshotsResult => {
  return take(output, {
    autoSnapshots: (_: any) => de_AutoSnapshotDetailsList(_, context),
    resourceName: __expectString,
    resourceType: __expectString,
  }) as any;
};

// de_GetBlueprintsResult omitted.

/**
 * deserializeAws_json1_1GetBucketAccessKeysResult
 */
const de_GetBucketAccessKeysResult = (output: any, context: __SerdeContext): GetBucketAccessKeysResult => {
  return take(output, {
    accessKeys: (_: any) => de_AccessKeyList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetBucketBundlesResult
 */
const de_GetBucketBundlesResult = (output: any, context: __SerdeContext): GetBucketBundlesResult => {
  return take(output, {
    bundles: (_: any) => de_BucketBundleList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetBucketMetricDataResult
 */
const de_GetBucketMetricDataResult = (output: any, context: __SerdeContext): GetBucketMetricDataResult => {
  return take(output, {
    metricData: (_: any) => de_MetricDatapointList(_, context),
    metricName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetBucketsResult
 */
const de_GetBucketsResult = (output: any, context: __SerdeContext): GetBucketsResult => {
  return take(output, {
    accountLevelBpaSync: (_: any) => de_AccountLevelBpaSync(_, context),
    buckets: (_: any) => de_BucketList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetBundlesResult
 */
const de_GetBundlesResult = (output: any, context: __SerdeContext): GetBundlesResult => {
  return take(output, {
    bundles: (_: any) => de_BundleList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCertificatesResult
 */
const de_GetCertificatesResult = (output: any, context: __SerdeContext): GetCertificatesResult => {
  return take(output, {
    certificates: (_: any) => de_CertificateSummaryList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCloudFormationStackRecordsResult
 */
const de_GetCloudFormationStackRecordsResult = (
  output: any,
  context: __SerdeContext
): GetCloudFormationStackRecordsResult => {
  return take(output, {
    cloudFormationStackRecords: (_: any) => de_CloudFormationStackRecordList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetContactMethodsResult
 */
const de_GetContactMethodsResult = (output: any, context: __SerdeContext): GetContactMethodsResult => {
  return take(output, {
    contactMethods: (_: any) => de_ContactMethodsList(_, context),
  }) as any;
};

// de_GetContainerAPIMetadataResult omitted.

/**
 * deserializeAws_json1_1GetContainerImagesResult
 */
const de_GetContainerImagesResult = (output: any, context: __SerdeContext): GetContainerImagesResult => {
  return take(output, {
    containerImages: (_: any) => de_ContainerImageList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetContainerLogResult
 */
const de_GetContainerLogResult = (output: any, context: __SerdeContext): GetContainerLogResult => {
  return take(output, {
    logEvents: (_: any) => de_ContainerServiceLogEventList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetContainerServiceDeploymentsResult
 */
const de_GetContainerServiceDeploymentsResult = (
  output: any,
  context: __SerdeContext
): GetContainerServiceDeploymentsResult => {
  return take(output, {
    deployments: (_: any) => de_ContainerServiceDeploymentList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetContainerServiceMetricDataResult
 */
const de_GetContainerServiceMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetContainerServiceMetricDataResult => {
  return take(output, {
    metricData: (_: any) => de_MetricDatapointList(_, context),
    metricName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetContainerServicePowersResult
 */
const de_GetContainerServicePowersResult = (output: any, context: __SerdeContext): GetContainerServicePowersResult => {
  return take(output, {
    powers: (_: any) => de_ContainerServicePowerList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetCostEstimateResult
 */
const de_GetCostEstimateResult = (output: any, context: __SerdeContext): GetCostEstimateResult => {
  return take(output, {
    resourcesBudgetEstimate: (_: any) => de_ResourcesBudgetEstimate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDiskResult
 */
const de_GetDiskResult = (output: any, context: __SerdeContext): GetDiskResult => {
  return take(output, {
    disk: (_: any) => de_Disk(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDiskSnapshotResult
 */
const de_GetDiskSnapshotResult = (output: any, context: __SerdeContext): GetDiskSnapshotResult => {
  return take(output, {
    diskSnapshot: (_: any) => de_DiskSnapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDiskSnapshotsResult
 */
const de_GetDiskSnapshotsResult = (output: any, context: __SerdeContext): GetDiskSnapshotsResult => {
  return take(output, {
    diskSnapshots: (_: any) => de_DiskSnapshotList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDisksResult
 */
const de_GetDisksResult = (output: any, context: __SerdeContext): GetDisksResult => {
  return take(output, {
    disks: (_: any) => de_DiskList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDistributionBundlesResult
 */
const de_GetDistributionBundlesResult = (output: any, context: __SerdeContext): GetDistributionBundlesResult => {
  return take(output, {
    bundles: (_: any) => de_DistributionBundleList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDistributionLatestCacheResetResult
 */
const de_GetDistributionLatestCacheResetResult = (
  output: any,
  context: __SerdeContext
): GetDistributionLatestCacheResetResult => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDistributionMetricDataResult
 */
const de_GetDistributionMetricDataResult = (output: any, context: __SerdeContext): GetDistributionMetricDataResult => {
  return take(output, {
    metricData: (_: any) => de_MetricDatapointList(_, context),
    metricName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDistributionsResult
 */
const de_GetDistributionsResult = (output: any, context: __SerdeContext): GetDistributionsResult => {
  return take(output, {
    distributions: (_: any) => de_DistributionList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDomainResult
 */
const de_GetDomainResult = (output: any, context: __SerdeContext): GetDomainResult => {
  return take(output, {
    domain: (_: any) => de_Domain(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDomainsResult
 */
const de_GetDomainsResult = (output: any, context: __SerdeContext): GetDomainsResult => {
  return take(output, {
    domains: (_: any) => de_DomainList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetExportSnapshotRecordsResult
 */
const de_GetExportSnapshotRecordsResult = (output: any, context: __SerdeContext): GetExportSnapshotRecordsResult => {
  return take(output, {
    exportSnapshotRecords: (_: any) => de_ExportSnapshotRecordList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetInstanceAccessDetailsResult
 */
const de_GetInstanceAccessDetailsResult = (output: any, context: __SerdeContext): GetInstanceAccessDetailsResult => {
  return take(output, {
    accessDetails: (_: any) => de_InstanceAccessDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetInstanceMetricDataResult
 */
const de_GetInstanceMetricDataResult = (output: any, context: __SerdeContext): GetInstanceMetricDataResult => {
  return take(output, {
    metricData: (_: any) => de_MetricDatapointList(_, context),
    metricName: __expectString,
  }) as any;
};

// de_GetInstancePortStatesResult omitted.

/**
 * deserializeAws_json1_1GetInstanceResult
 */
const de_GetInstanceResult = (output: any, context: __SerdeContext): GetInstanceResult => {
  return take(output, {
    instance: (_: any) => de_Instance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotResult
 */
const de_GetInstanceSnapshotResult = (output: any, context: __SerdeContext): GetInstanceSnapshotResult => {
  return take(output, {
    instanceSnapshot: (_: any) => de_InstanceSnapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetInstanceSnapshotsResult
 */
const de_GetInstanceSnapshotsResult = (output: any, context: __SerdeContext): GetInstanceSnapshotsResult => {
  return take(output, {
    instanceSnapshots: (_: any) => de_InstanceSnapshotList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetInstancesResult
 */
const de_GetInstancesResult = (output: any, context: __SerdeContext): GetInstancesResult => {
  return take(output, {
    instances: (_: any) => de_InstanceList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

// de_GetInstanceStateResult omitted.

/**
 * deserializeAws_json1_1GetKeyPairResult
 */
const de_GetKeyPairResult = (output: any, context: __SerdeContext): GetKeyPairResult => {
  return take(output, {
    keyPair: (_: any) => de_KeyPair(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetKeyPairsResult
 */
const de_GetKeyPairsResult = (output: any, context: __SerdeContext): GetKeyPairsResult => {
  return take(output, {
    keyPairs: (_: any) => de_KeyPairList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerMetricDataResult
 */
const de_GetLoadBalancerMetricDataResult = (output: any, context: __SerdeContext): GetLoadBalancerMetricDataResult => {
  return take(output, {
    metricData: (_: any) => de_MetricDatapointList(_, context),
    metricName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerResult
 */
const de_GetLoadBalancerResult = (output: any, context: __SerdeContext): GetLoadBalancerResult => {
  return take(output, {
    loadBalancer: (_: any) => de_LoadBalancer(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancersResult
 */
const de_GetLoadBalancersResult = (output: any, context: __SerdeContext): GetLoadBalancersResult => {
  return take(output, {
    loadBalancers: (_: any) => de_LoadBalancerList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult
 */
const de_GetLoadBalancerTlsCertificatesResult = (
  output: any,
  context: __SerdeContext
): GetLoadBalancerTlsCertificatesResult => {
  return take(output, {
    tlsCertificates: (_: any) => de_LoadBalancerTlsCertificateList(_, context),
  }) as any;
};

// de_GetLoadBalancerTlsPoliciesResult omitted.

/**
 * deserializeAws_json1_1GetOperationResult
 */
const de_GetOperationResult = (output: any, context: __SerdeContext): GetOperationResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetOperationsForResourceResult
 */
const de_GetOperationsForResourceResult = (output: any, context: __SerdeContext): GetOperationsForResourceResult => {
  return take(output, {
    nextPageCount: __expectString,
    nextPageToken: __expectString,
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetOperationsResult
 */
const de_GetOperationsResult = (output: any, context: __SerdeContext): GetOperationsResult => {
  return take(output, {
    nextPageToken: __expectString,
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_GetRegionsResult omitted.

// de_GetRelationalDatabaseBlueprintsResult omitted.

/**
 * deserializeAws_json1_1GetRelationalDatabaseBundlesResult
 */
const de_GetRelationalDatabaseBundlesResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseBundlesResult => {
  return take(output, {
    bundles: (_: any) => de_RelationalDatabaseBundleList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseEventsResult
 */
const de_GetRelationalDatabaseEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseEventsResult => {
  return take(output, {
    nextPageToken: __expectString,
    relationalDatabaseEvents: (_: any) => de_RelationalDatabaseEventList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseLogEventsResult
 */
const de_GetRelationalDatabaseLogEventsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseLogEventsResult => {
  return take(output, {
    nextBackwardToken: __expectString,
    nextForwardToken: __expectString,
    resourceLogEvents: (_: any) => de_LogEventList(_, context),
  }) as any;
};

// de_GetRelationalDatabaseLogStreamsResult omitted.

/**
 * deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult
 */
const de_GetRelationalDatabaseMasterUserPasswordResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMasterUserPasswordResult => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    masterUserPassword: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseMetricDataResult
 */
const de_GetRelationalDatabaseMetricDataResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseMetricDataResult => {
  return take(output, {
    metricData: (_: any) => de_MetricDatapointList(_, context),
    metricName: __expectString,
  }) as any;
};

// de_GetRelationalDatabaseParametersResult omitted.

/**
 * deserializeAws_json1_1GetRelationalDatabaseResult
 */
const de_GetRelationalDatabaseResult = (output: any, context: __SerdeContext): GetRelationalDatabaseResult => {
  return take(output, {
    relationalDatabase: (_: any) => de_RelationalDatabase(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotResult
 */
const de_GetRelationalDatabaseSnapshotResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotResult => {
  return take(output, {
    relationalDatabaseSnapshot: (_: any) => de_RelationalDatabaseSnapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult
 */
const de_GetRelationalDatabaseSnapshotsResult = (
  output: any,
  context: __SerdeContext
): GetRelationalDatabaseSnapshotsResult => {
  return take(output, {
    nextPageToken: __expectString,
    relationalDatabaseSnapshots: (_: any) => de_RelationalDatabaseSnapshotList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRelationalDatabasesResult
 */
const de_GetRelationalDatabasesResult = (output: any, context: __SerdeContext): GetRelationalDatabasesResult => {
  return take(output, {
    nextPageToken: __expectString,
    relationalDatabases: (_: any) => de_RelationalDatabaseList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetStaticIpResult
 */
const de_GetStaticIpResult = (output: any, context: __SerdeContext): GetStaticIpResult => {
  return take(output, {
    staticIp: (_: any) => de_StaticIp(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetStaticIpsResult
 */
const de_GetStaticIpsResult = (output: any, context: __SerdeContext): GetStaticIpsResult => {
  return take(output, {
    nextPageToken: __expectString,
    staticIps: (_: any) => de_StaticIpList(_, context),
  }) as any;
};

// de_HeaderForwardList omitted.

// de_HeaderObject omitted.

/**
 * deserializeAws_json1_1HostKeyAttributes
 */
const de_HostKeyAttributes = (output: any, context: __SerdeContext): HostKeyAttributes => {
  return take(output, {
    algorithm: __expectString,
    fingerprintSHA1: __expectString,
    fingerprintSHA256: __expectString,
    notValidAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notValidBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    publicKey: __expectString,
    witnessedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1HostKeysList
 */
const de_HostKeysList = (output: any, context: __SerdeContext): HostKeyAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HostKeyAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportKeyPairResult
 */
const de_ImportKeyPairResult = (output: any, context: __SerdeContext): ImportKeyPairResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return take(output, {
    addOns: _json,
    arn: __expectString,
    blueprintId: __expectString,
    blueprintName: __expectString,
    bundleId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    hardware: (_: any) => de_InstanceHardware(_, context),
    ipAddressType: __expectString,
    ipv6Addresses: _json,
    isStaticIp: __expectBoolean,
    location: _json,
    metadataOptions: _json,
    name: __expectString,
    networking: _json,
    privateIpAddress: __expectString,
    publicIpAddress: __expectString,
    resourceType: __expectString,
    sshKeyName: __expectString,
    state: _json,
    supportCode: __expectString,
    tags: _json,
    username: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceAccessDetails
 */
const de_InstanceAccessDetails = (output: any, context: __SerdeContext): InstanceAccessDetails => {
  return take(output, {
    certKey: __expectString,
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    hostKeys: (_: any) => de_HostKeysList(_, context),
    instanceName: __expectString,
    ipAddress: __expectString,
    password: __expectString,
    passwordData: _json,
    privateKey: __expectString,
    protocol: __expectString,
    username: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceHardware
 */
const de_InstanceHardware = (output: any, context: __SerdeContext): InstanceHardware => {
  return take(output, {
    cpuCount: __expectInt32,
    disks: (_: any) => de_DiskList(_, context),
    ramSizeInGb: __limitedParseFloat32,
  }) as any;
};

// de_InstanceHealthSummary omitted.

// de_InstanceHealthSummaryList omitted.

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
  return retVal;
};

// de_InstanceMetadataOptions omitted.

// de_InstanceNetworking omitted.

// de_InstancePlatformList omitted.

// de_InstancePortInfo omitted.

// de_InstancePortInfoList omitted.

// de_InstancePortState omitted.

// de_InstancePortStateList omitted.

/**
 * deserializeAws_json1_1InstanceSnapshot
 */
const de_InstanceSnapshot = (output: any, context: __SerdeContext): InstanceSnapshot => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fromAttachedDisks: (_: any) => de_DiskList(_, context),
    fromBlueprintId: __expectString,
    fromBundleId: __expectString,
    fromInstanceArn: __expectString,
    fromInstanceName: __expectString,
    isFromAutoSnapshot: __expectBoolean,
    location: _json,
    name: __expectString,
    progress: __expectString,
    resourceType: __expectString,
    sizeInGb: __expectInt32,
    state: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

// de_InstanceSnapshotInfo omitted.

/**
 * deserializeAws_json1_1InstanceSnapshotList
 */
const de_InstanceSnapshotList = (output: any, context: __SerdeContext): InstanceSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceSnapshot(entry, context);
    });
  return retVal;
};

// de_InstanceState omitted.

// de_InvalidInputException omitted.

// de_Ipv6AddressList omitted.

// de_IsVpcPeeredResult omitted.

/**
 * deserializeAws_json1_1KeyPair
 */
const de_KeyPair = (output: any, context: __SerdeContext): KeyPair => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fingerprint: __expectString,
    location: _json,
    name: __expectString,
    resourceType: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1KeyPairList
 */
const de_KeyPairList = (output: any, context: __SerdeContext): KeyPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LightsailDistribution
 */
const de_LightsailDistribution = (output: any, context: __SerdeContext): LightsailDistribution => {
  return take(output, {
    ableToUpdateBundle: __expectBoolean,
    alternativeDomainNames: _json,
    arn: __expectString,
    bundleId: __expectString,
    cacheBehaviorSettings: _json,
    cacheBehaviors: _json,
    certificateName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultCacheBehavior: _json,
    domainName: __expectString,
    ipAddressType: __expectString,
    isEnabled: __expectBoolean,
    location: _json,
    name: __expectString,
    origin: _json,
    originPublicDNS: __expectString,
    resourceType: __expectString,
    status: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1LoadBalancer
 */
const de_LoadBalancer = (output: any, context: __SerdeContext): LoadBalancer => {
  return take(output, {
    arn: __expectString,
    configurationOptions: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dnsName: __expectString,
    healthCheckPath: __expectString,
    httpsRedirectionEnabled: __expectBoolean,
    instanceHealthSummary: _json,
    instancePort: __expectInt32,
    ipAddressType: __expectString,
    location: _json,
    name: __expectString,
    protocol: __expectString,
    publicPorts: _json,
    resourceType: __expectString,
    state: __expectString,
    supportCode: __expectString,
    tags: _json,
    tlsCertificateSummaries: _json,
    tlsPolicyName: __expectString,
  }) as any;
};

// de_LoadBalancerConfigurationOptions omitted.

/**
 * deserializeAws_json1_1LoadBalancerList
 */
const de_LoadBalancerList = (output: any, context: __SerdeContext): LoadBalancer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificate
 */
const de_LoadBalancerTlsCertificate = (output: any, context: __SerdeContext): LoadBalancerTlsCertificate => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domainName: __expectString,
    domainValidationRecords: _json,
    failureReason: __expectString,
    isAttached: __expectBoolean,
    issuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    issuer: __expectString,
    keyAlgorithm: __expectString,
    loadBalancerName: __expectString,
    location: _json,
    name: __expectString,
    notAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    renewalSummary: _json,
    resourceType: __expectString,
    revocationReason: __expectString,
    revokedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    serial: __expectString,
    signatureAlgorithm: __expectString,
    status: __expectString,
    subject: __expectString,
    subjectAlternativeNames: _json,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

// de_LoadBalancerTlsCertificateDnsRecordCreationState omitted.

// de_LoadBalancerTlsCertificateDomainValidationOption omitted.

// de_LoadBalancerTlsCertificateDomainValidationOptionList omitted.

// de_LoadBalancerTlsCertificateDomainValidationRecord omitted.

// de_LoadBalancerTlsCertificateDomainValidationRecordList omitted.

/**
 * deserializeAws_json1_1LoadBalancerTlsCertificateList
 */
const de_LoadBalancerTlsCertificateList = (output: any, context: __SerdeContext): LoadBalancerTlsCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerTlsCertificate(entry, context);
    });
  return retVal;
};

// de_LoadBalancerTlsCertificateRenewalSummary omitted.

// de_LoadBalancerTlsCertificateSummary omitted.

// de_LoadBalancerTlsCertificateSummaryList omitted.

// de_LoadBalancerTlsPolicy omitted.

// de_LoadBalancerTlsPolicyList omitted.

/**
 * deserializeAws_json1_1LogEvent
 */
const de_LogEvent = (output: any, context: __SerdeContext): LogEvent => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LogEventList
 */
const de_LogEventList = (output: any, context: __SerdeContext): LogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LogEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricDatapoint
 */
const de_MetricDatapoint = (output: any, context: __SerdeContext): MetricDatapoint => {
  return take(output, {
    average: __limitedParseDouble,
    maximum: __limitedParseDouble,
    minimum: __limitedParseDouble,
    sampleCount: __limitedParseDouble,
    sum: __limitedParseDouble,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricDatapointList
 */
const de_MetricDatapointList = (output: any, context: __SerdeContext): MetricDatapoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDatapoint(entry, context);
    });
  return retVal;
};

// de_MonitoredResourceInfo omitted.

// de_MonthlyTransfer omitted.

// de_NameServersUpdateState omitted.

// de_NotFoundException omitted.

// de_NotificationTriggerList omitted.

/**
 * deserializeAws_json1_1OpenInstancePublicPortsResult
 */
const de_OpenInstancePublicPortsResult = (output: any, context: __SerdeContext): OpenInstancePublicPortsResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Operation
 */
const de_Operation = (output: any, context: __SerdeContext): Operation => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorCode: __expectString,
    errorDetails: __expectString,
    id: __expectString,
    isTerminal: __expectBoolean,
    location: _json,
    operationDetails: __expectString,
    operationType: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
    status: __expectString,
    statusChangedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_OperationFailureException omitted.

/**
 * deserializeAws_json1_1OperationList
 */
const de_OperationList = (output: any, context: __SerdeContext): Operation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Operation(entry, context);
    });
  return retVal;
};

// de_Origin omitted.

// de_PartnerIdList omitted.

// de_PasswordData omitted.

/**
 * deserializeAws_json1_1PeerVpcResult
 */
const de_PeerVpcResult = (output: any, context: __SerdeContext): PeerVpcResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PendingMaintenanceAction
 */
const de_PendingMaintenanceAction = (output: any, context: __SerdeContext): PendingMaintenanceAction => {
  return take(output, {
    action: __expectString,
    currentApplyDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PendingMaintenanceActionList
 */
const de_PendingMaintenanceActionList = (output: any, context: __SerdeContext): PendingMaintenanceAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PendingMaintenanceAction(entry, context);
    });
  return retVal;
};

// de_PendingModifiedRelationalDatabaseValues omitted.

// de_PortList omitted.

// de_PortMap omitted.

// de_PrivateRegistryAccess omitted.

/**
 * deserializeAws_json1_1PutAlarmResult
 */
const de_PutAlarmResult = (output: any, context: __SerdeContext): PutAlarmResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PutInstancePublicPortsResult
 */
const de_PutInstancePublicPortsResult = (output: any, context: __SerdeContext): PutInstancePublicPortsResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

// de_QueryStringObject omitted.

// de_R53HostedZoneDeletionState omitted.

/**
 * deserializeAws_json1_1RebootInstanceResult
 */
const de_RebootInstanceResult = (output: any, context: __SerdeContext): RebootInstanceResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RebootRelationalDatabaseResult
 */
const de_RebootRelationalDatabaseResult = (output: any, context: __SerdeContext): RebootRelationalDatabaseResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_Region omitted.

// de_RegionList omitted.

/**
 * deserializeAws_json1_1RegisterContainerImageResult
 */
const de_RegisterContainerImageResult = (output: any, context: __SerdeContext): RegisterContainerImageResult => {
  return take(output, {
    containerImage: (_: any) => de_ContainerImage(_, context),
  }) as any;
};

// de_RegisteredDomainDelegationInfo omitted.

/**
 * deserializeAws_json1_1RelationalDatabase
 */
const de_RelationalDatabase = (output: any, context: __SerdeContext): RelationalDatabase => {
  return take(output, {
    arn: __expectString,
    backupRetentionEnabled: __expectBoolean,
    caCertificateIdentifier: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    engine: __expectString,
    engineVersion: __expectString,
    hardware: (_: any) => de_RelationalDatabaseHardware(_, context),
    latestRestorableTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    location: _json,
    masterDatabaseName: __expectString,
    masterEndpoint: _json,
    masterUsername: __expectString,
    name: __expectString,
    parameterApplyStatus: __expectString,
    pendingMaintenanceActions: (_: any) => de_PendingMaintenanceActionList(_, context),
    pendingModifiedValues: _json,
    preferredBackupWindow: __expectString,
    preferredMaintenanceWindow: __expectString,
    publiclyAccessible: __expectBoolean,
    relationalDatabaseBlueprintId: __expectString,
    relationalDatabaseBundleId: __expectString,
    resourceType: __expectString,
    secondaryAvailabilityZone: __expectString,
    state: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

// de_RelationalDatabaseBlueprint omitted.

// de_RelationalDatabaseBlueprintList omitted.

/**
 * deserializeAws_json1_1RelationalDatabaseBundle
 */
const de_RelationalDatabaseBundle = (output: any, context: __SerdeContext): RelationalDatabaseBundle => {
  return take(output, {
    bundleId: __expectString,
    cpuCount: __expectInt32,
    diskSizeInGb: __expectInt32,
    isActive: __expectBoolean,
    isEncrypted: __expectBoolean,
    name: __expectString,
    price: __limitedParseFloat32,
    ramSizeInGb: __limitedParseFloat32,
    transferPerMonthInGb: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseBundleList
 */
const de_RelationalDatabaseBundleList = (output: any, context: __SerdeContext): RelationalDatabaseBundle[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelationalDatabaseBundle(entry, context);
    });
  return retVal;
};

// de_RelationalDatabaseEndpoint omitted.

/**
 * deserializeAws_json1_1RelationalDatabaseEvent
 */
const de_RelationalDatabaseEvent = (output: any, context: __SerdeContext): RelationalDatabaseEvent => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventCategories: _json,
    message: __expectString,
    resource: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseEventList
 */
const de_RelationalDatabaseEventList = (output: any, context: __SerdeContext): RelationalDatabaseEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelationalDatabaseEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelationalDatabaseHardware
 */
const de_RelationalDatabaseHardware = (output: any, context: __SerdeContext): RelationalDatabaseHardware => {
  return take(output, {
    cpuCount: __expectInt32,
    diskSizeInGb: __expectInt32,
    ramSizeInGb: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseList
 */
const de_RelationalDatabaseList = (output: any, context: __SerdeContext): RelationalDatabase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelationalDatabase(entry, context);
    });
  return retVal;
};

// de_RelationalDatabaseParameter omitted.

// de_RelationalDatabaseParameterList omitted.

/**
 * deserializeAws_json1_1RelationalDatabaseSnapshot
 */
const de_RelationalDatabaseSnapshot = (output: any, context: __SerdeContext): RelationalDatabaseSnapshot => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    engine: __expectString,
    engineVersion: __expectString,
    fromRelationalDatabaseArn: __expectString,
    fromRelationalDatabaseBlueprintId: __expectString,
    fromRelationalDatabaseBundleId: __expectString,
    fromRelationalDatabaseName: __expectString,
    location: _json,
    name: __expectString,
    resourceType: __expectString,
    sizeInGb: __expectInt32,
    state: __expectString,
    supportCode: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1RelationalDatabaseSnapshotList
 */
const de_RelationalDatabaseSnapshotList = (output: any, context: __SerdeContext): RelationalDatabaseSnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelationalDatabaseSnapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReleaseStaticIpResult
 */
const de_ReleaseStaticIpResult = (output: any, context: __SerdeContext): ReleaseStaticIpResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RenewalSummary
 */
const de_RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return take(output, {
    domainValidationRecords: _json,
    renewalStatus: __expectString,
    renewalStatusReason: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ResetDistributionCacheResult
 */
const de_ResetDistributionCacheResult = (output: any, context: __SerdeContext): ResetDistributionCacheResult => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    operation: (_: any) => de_Operation(_, context),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceBudgetEstimate
 */
const de_ResourceBudgetEstimate = (output: any, context: __SerdeContext): ResourceBudgetEstimate => {
  return take(output, {
    costEstimates: (_: any) => de_CostEstimates(_, context),
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceName: __expectString,
    resourceType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ResourceLocation omitted.

// de_ResourceReceivingAccess omitted.

// de_ResourceRecord omitted.

/**
 * deserializeAws_json1_1ResourcesBudgetEstimate
 */
const de_ResourcesBudgetEstimate = (output: any, context: __SerdeContext): ResourceBudgetEstimate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_ServiceException omitted.

// de_Session omitted.

// de_Sessions omitted.

/**
 * deserializeAws_json1_1SetIpAddressTypeResult
 */
const de_SetIpAddressTypeResult = (output: any, context: __SerdeContext): SetIpAddressTypeResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SetResourceAccessForBucketResult
 */
const de_SetResourceAccessForBucketResult = (
  output: any,
  context: __SerdeContext
): SetResourceAccessForBucketResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartGUISessionResult
 */
const de_StartGUISessionResult = (output: any, context: __SerdeContext): StartGUISessionResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartInstanceResult
 */
const de_StartInstanceResult = (output: any, context: __SerdeContext): StartInstanceResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartRelationalDatabaseResult
 */
const de_StartRelationalDatabaseResult = (output: any, context: __SerdeContext): StartRelationalDatabaseResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StaticIp
 */
const de_StaticIp = (output: any, context: __SerdeContext): StaticIp => {
  return take(output, {
    arn: __expectString,
    attachedTo: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ipAddress: __expectString,
    isAttached: __expectBoolean,
    location: _json,
    name: __expectString,
    resourceType: __expectString,
    supportCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StaticIpList
 */
const de_StaticIpList = (output: any, context: __SerdeContext): StaticIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StaticIp(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StopGUISessionResult
 */
const de_StopGUISessionResult = (output: any, context: __SerdeContext): StopGUISessionResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopInstanceResult
 */
const de_StopInstanceResult = (output: any, context: __SerdeContext): StopInstanceResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopRelationalDatabaseResult
 */
const de_StopRelationalDatabaseResult = (output: any, context: __SerdeContext): StopRelationalDatabaseResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

// de_StringList omitted.

// de_SubjectAlternativeNameList omitted.

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_json1_1TagResourceResult
 */
const de_TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TestAlarmResult
 */
const de_TestAlarmResult = (output: any, context: __SerdeContext): TestAlarmResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TimePeriod
 */
const de_TimePeriod = (output: any, context: __SerdeContext): TimePeriod => {
  return take(output, {
    end: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    start: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_UnauthenticatedException omitted.

/**
 * deserializeAws_json1_1UnpeerVpcResult
 */
const de_UnpeerVpcResult = (output: any, context: __SerdeContext): UnpeerVpcResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UntagResourceResult
 */
const de_UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateBucketBundleResult
 */
const de_UpdateBucketBundleResult = (output: any, context: __SerdeContext): UpdateBucketBundleResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateBucketResult
 */
const de_UpdateBucketResult = (output: any, context: __SerdeContext): UpdateBucketResult => {
  return take(output, {
    bucket: (_: any) => de_Bucket(_, context),
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateContainerServiceResult
 */
const de_UpdateContainerServiceResult = (output: any, context: __SerdeContext): UpdateContainerServiceResult => {
  return take(output, {
    containerService: (_: any) => de_ContainerService(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateDistributionBundleResult
 */
const de_UpdateDistributionBundleResult = (output: any, context: __SerdeContext): UpdateDistributionBundleResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateDistributionResult
 */
const de_UpdateDistributionResult = (output: any, context: __SerdeContext): UpdateDistributionResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateDomainEntryResult
 */
const de_UpdateDomainEntryResult = (output: any, context: __SerdeContext): UpdateDomainEntryResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateInstanceMetadataOptionsResult
 */
const de_UpdateInstanceMetadataOptionsResult = (
  output: any,
  context: __SerdeContext
): UpdateInstanceMetadataOptionsResult => {
  return take(output, {
    operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateLoadBalancerAttributeResult
 */
const de_UpdateLoadBalancerAttributeResult = (
  output: any,
  context: __SerdeContext
): UpdateLoadBalancerAttributeResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseParametersResult
 */
const de_UpdateRelationalDatabaseParametersResult = (
  output: any,
  context: __SerdeContext
): UpdateRelationalDatabaseParametersResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateRelationalDatabaseResult
 */
const de_UpdateRelationalDatabaseResult = (output: any, context: __SerdeContext): UpdateRelationalDatabaseResult => {
  return take(output, {
    operations: (_: any) => de_OperationList(_, context),
  }) as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Lightsail_20161128.${operation}`,
  };
}

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

// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultLightsailHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput } from "./commands/AllocateStaticIpCommand";
import type {
  AttachCertificateToDistributionCommandInput,
  AttachCertificateToDistributionCommandOutput,
} from "./commands/AttachCertificateToDistributionCommand";
import type { AttachDiskCommandInput, AttachDiskCommandOutput } from "./commands/AttachDiskCommand";
import type {
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
} from "./commands/AttachInstancesToLoadBalancerCommand";
import type {
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput,
} from "./commands/AttachLoadBalancerTlsCertificateCommand";
import type { AttachStaticIpCommandInput, AttachStaticIpCommandOutput } from "./commands/AttachStaticIpCommand";
import type {
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput,
} from "./commands/CloseInstancePublicPortsCommand";
import type { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import type {
  CreateBucketAccessKeyCommandInput,
  CreateBucketAccessKeyCommandOutput,
} from "./commands/CreateBucketAccessKeyCommand";
import type { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import type {
  CreateCertificateCommandInput,
  CreateCertificateCommandOutput,
} from "./commands/CreateCertificateCommand";
import type {
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
} from "./commands/CreateCloudFormationStackCommand";
import type {
  CreateContactMethodCommandInput,
  CreateContactMethodCommandOutput,
} from "./commands/CreateContactMethodCommand";
import type {
  CreateContainerServiceCommandInput,
  CreateContainerServiceCommandOutput,
} from "./commands/CreateContainerServiceCommand";
import type {
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
} from "./commands/CreateContainerServiceDeploymentCommand";
import type {
  CreateContainerServiceRegistryLoginCommandInput,
  CreateContainerServiceRegistryLoginCommandOutput,
} from "./commands/CreateContainerServiceRegistryLoginCommand";
import type { CreateDiskCommandInput, CreateDiskCommandOutput } from "./commands/CreateDiskCommand";
import type {
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
} from "./commands/CreateDiskFromSnapshotCommand";
import type {
  CreateDiskSnapshotCommandInput,
  CreateDiskSnapshotCommandOutput,
} from "./commands/CreateDiskSnapshotCommand";
import type {
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
} from "./commands/CreateDistributionCommand";
import type { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import type {
  CreateDomainEntryCommandInput,
  CreateDomainEntryCommandOutput,
} from "./commands/CreateDomainEntryCommand";
import type {
  CreateGUISessionAccessDetailsCommandInput,
  CreateGUISessionAccessDetailsCommandOutput,
} from "./commands/CreateGUISessionAccessDetailsCommand";
import type { CreateInstancesCommandInput, CreateInstancesCommandOutput } from "./commands/CreateInstancesCommand";
import type {
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput,
} from "./commands/CreateInstancesFromSnapshotCommand";
import type {
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput,
} from "./commands/CreateInstanceSnapshotCommand";
import type { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "./commands/CreateKeyPairCommand";
import type {
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
} from "./commands/CreateLoadBalancerCommand";
import type {
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
} from "./commands/CreateLoadBalancerTlsCertificateCommand";
import type {
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput,
} from "./commands/CreateRelationalDatabaseCommand";
import type {
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
} from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import type {
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput,
} from "./commands/CreateRelationalDatabaseSnapshotCommand";
import type { DeleteAlarmCommandInput, DeleteAlarmCommandOutput } from "./commands/DeleteAlarmCommand";
import type {
  DeleteAutoSnapshotCommandInput,
  DeleteAutoSnapshotCommandOutput,
} from "./commands/DeleteAutoSnapshotCommand";
import type {
  DeleteBucketAccessKeyCommandInput,
  DeleteBucketAccessKeyCommandOutput,
} from "./commands/DeleteBucketAccessKeyCommand";
import type { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import type {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import type {
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
} from "./commands/DeleteContactMethodCommand";
import type {
  DeleteContainerImageCommandInput,
  DeleteContainerImageCommandOutput,
} from "./commands/DeleteContainerImageCommand";
import type {
  DeleteContainerServiceCommandInput,
  DeleteContainerServiceCommandOutput,
} from "./commands/DeleteContainerServiceCommand";
import type { DeleteDiskCommandInput, DeleteDiskCommandOutput } from "./commands/DeleteDiskCommand";
import type {
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput,
} from "./commands/DeleteDiskSnapshotCommand";
import type {
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput,
} from "./commands/DeleteDistributionCommand";
import type { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import type {
  DeleteDomainEntryCommandInput,
  DeleteDomainEntryCommandOutput,
} from "./commands/DeleteDomainEntryCommand";
import type { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import type {
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
} from "./commands/DeleteInstanceSnapshotCommand";
import type { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "./commands/DeleteKeyPairCommand";
import type {
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
} from "./commands/DeleteKnownHostKeysCommand";
import type {
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
} from "./commands/DeleteLoadBalancerCommand";
import type {
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput,
} from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import type {
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput,
} from "./commands/DeleteRelationalDatabaseCommand";
import type {
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput,
} from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import type {
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
} from "./commands/DetachCertificateFromDistributionCommand";
import type { DetachDiskCommandInput, DetachDiskCommandOutput } from "./commands/DetachDiskCommand";
import type {
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput,
} from "./commands/DetachInstancesFromLoadBalancerCommand";
import type { DetachStaticIpCommandInput, DetachStaticIpCommandOutput } from "./commands/DetachStaticIpCommand";
import type { DisableAddOnCommandInput, DisableAddOnCommandOutput } from "./commands/DisableAddOnCommand";
import type {
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
} from "./commands/DownloadDefaultKeyPairCommand";
import type { EnableAddOnCommandInput, EnableAddOnCommandOutput } from "./commands/EnableAddOnCommand";
import type { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "./commands/ExportSnapshotCommand";
import type { GetActiveNamesCommandInput, GetActiveNamesCommandOutput } from "./commands/GetActiveNamesCommand";
import type { GetAlarmsCommandInput, GetAlarmsCommandOutput } from "./commands/GetAlarmsCommand";
import type { GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput } from "./commands/GetAutoSnapshotsCommand";
import type { GetBlueprintsCommandInput, GetBlueprintsCommandOutput } from "./commands/GetBlueprintsCommand";
import type {
  GetBucketAccessKeysCommandInput,
  GetBucketAccessKeysCommandOutput,
} from "./commands/GetBucketAccessKeysCommand";
import type { GetBucketBundlesCommandInput, GetBucketBundlesCommandOutput } from "./commands/GetBucketBundlesCommand";
import type {
  GetBucketMetricDataCommandInput,
  GetBucketMetricDataCommandOutput,
} from "./commands/GetBucketMetricDataCommand";
import type { GetBucketsCommandInput, GetBucketsCommandOutput } from "./commands/GetBucketsCommand";
import type { GetBundlesCommandInput, GetBundlesCommandOutput } from "./commands/GetBundlesCommand";
import type { GetCertificatesCommandInput, GetCertificatesCommandOutput } from "./commands/GetCertificatesCommand";
import type {
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
} from "./commands/GetCloudFormationStackRecordsCommand";
import type {
  GetContactMethodsCommandInput,
  GetContactMethodsCommandOutput,
} from "./commands/GetContactMethodsCommand";
import type {
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
} from "./commands/GetContainerAPIMetadataCommand";
import type {
  GetContainerImagesCommandInput,
  GetContainerImagesCommandOutput,
} from "./commands/GetContainerImagesCommand";
import type { GetContainerLogCommandInput, GetContainerLogCommandOutput } from "./commands/GetContainerLogCommand";
import type {
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
} from "./commands/GetContainerServiceDeploymentsCommand";
import type {
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
} from "./commands/GetContainerServiceMetricDataCommand";
import type {
  GetContainerServicePowersCommandInput,
  GetContainerServicePowersCommandOutput,
} from "./commands/GetContainerServicePowersCommand";
import type {
  GetContainerServicesCommandInput,
  GetContainerServicesCommandOutput,
} from "./commands/GetContainerServicesCommand";
import type { GetCostEstimateCommandInput, GetCostEstimateCommandOutput } from "./commands/GetCostEstimateCommand";
import type { GetDiskCommandInput, GetDiskCommandOutput } from "./commands/GetDiskCommand";
import type { GetDisksCommandInput, GetDisksCommandOutput } from "./commands/GetDisksCommand";
import type { GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput } from "./commands/GetDiskSnapshotCommand";
import type { GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput } from "./commands/GetDiskSnapshotsCommand";
import type {
  GetDistributionBundlesCommandInput,
  GetDistributionBundlesCommandOutput,
} from "./commands/GetDistributionBundlesCommand";
import type {
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
} from "./commands/GetDistributionLatestCacheResetCommand";
import type {
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
} from "./commands/GetDistributionMetricDataCommand";
import type { GetDistributionsCommandInput, GetDistributionsCommandOutput } from "./commands/GetDistributionsCommand";
import type { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import type { GetDomainsCommandInput, GetDomainsCommandOutput } from "./commands/GetDomainsCommand";
import type {
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
} from "./commands/GetExportSnapshotRecordsCommand";
import type {
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput,
} from "./commands/GetInstanceAccessDetailsCommand";
import type { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import type {
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
} from "./commands/GetInstanceMetricDataCommand";
import type {
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
} from "./commands/GetInstancePortStatesCommand";
import type { GetInstancesCommandInput, GetInstancesCommandOutput } from "./commands/GetInstancesCommand";
import type {
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput,
} from "./commands/GetInstanceSnapshotCommand";
import type {
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput,
} from "./commands/GetInstanceSnapshotsCommand";
import type { GetInstanceStateCommandInput, GetInstanceStateCommandOutput } from "./commands/GetInstanceStateCommand";
import type { GetKeyPairCommandInput, GetKeyPairCommandOutput } from "./commands/GetKeyPairCommand";
import type { GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "./commands/GetKeyPairsCommand";
import type { GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput } from "./commands/GetLoadBalancerCommand";
import type {
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput,
} from "./commands/GetLoadBalancerMetricDataCommand";
import type { GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput } from "./commands/GetLoadBalancersCommand";
import type {
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
} from "./commands/GetLoadBalancerTlsCertificatesCommand";
import type {
  GetLoadBalancerTlsPoliciesCommandInput,
  GetLoadBalancerTlsPoliciesCommandOutput,
} from "./commands/GetLoadBalancerTlsPoliciesCommand";
import type { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand";
import type { GetOperationsCommandInput, GetOperationsCommandOutput } from "./commands/GetOperationsCommand";
import type {
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput,
} from "./commands/GetOperationsForResourceCommand";
import type { GetRegionsCommandInput, GetRegionsCommandOutput } from "./commands/GetRegionsCommand";
import type {
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput,
} from "./commands/GetRelationalDatabaseBlueprintsCommand";
import type {
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput,
} from "./commands/GetRelationalDatabaseBundlesCommand";
import type {
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput,
} from "./commands/GetRelationalDatabaseCommand";
import type {
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
} from "./commands/GetRelationalDatabaseEventsCommand";
import type {
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput,
} from "./commands/GetRelationalDatabaseLogEventsCommand";
import type {
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput,
} from "./commands/GetRelationalDatabaseLogStreamsCommand";
import type {
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
} from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import type {
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput,
} from "./commands/GetRelationalDatabaseMetricDataCommand";
import type {
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput,
} from "./commands/GetRelationalDatabaseParametersCommand";
import type {
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
} from "./commands/GetRelationalDatabasesCommand";
import type {
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput,
} from "./commands/GetRelationalDatabaseSnapshotCommand";
import type {
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput,
} from "./commands/GetRelationalDatabaseSnapshotsCommand";
import type { GetSetupHistoryCommandInput, GetSetupHistoryCommandOutput } from "./commands/GetSetupHistoryCommand";
import type { GetStaticIpCommandInput, GetStaticIpCommandOutput } from "./commands/GetStaticIpCommand";
import type { GetStaticIpsCommandInput, GetStaticIpsCommandOutput } from "./commands/GetStaticIpsCommand";
import type { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "./commands/ImportKeyPairCommand";
import type { IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "./commands/IsVpcPeeredCommand";
import type {
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput,
} from "./commands/OpenInstancePublicPortsCommand";
import type { PeerVpcCommandInput, PeerVpcCommandOutput } from "./commands/PeerVpcCommand";
import type { PutAlarmCommandInput, PutAlarmCommandOutput } from "./commands/PutAlarmCommand";
import type {
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
} from "./commands/PutInstancePublicPortsCommand";
import type { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand";
import type {
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput,
} from "./commands/RebootRelationalDatabaseCommand";
import type {
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
} from "./commands/RegisterContainerImageCommand";
import type { ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput } from "./commands/ReleaseStaticIpCommand";
import type {
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
} from "./commands/ResetDistributionCacheCommand";
import type {
  SendContactMethodVerificationCommandInput,
  SendContactMethodVerificationCommandOutput,
} from "./commands/SendContactMethodVerificationCommand";
import type { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "./commands/SetIpAddressTypeCommand";
import type {
  SetResourceAccessForBucketCommandInput,
  SetResourceAccessForBucketCommandOutput,
} from "./commands/SetResourceAccessForBucketCommand";
import type {
  SetupInstanceHttpsCommandInput,
  SetupInstanceHttpsCommandOutput,
} from "./commands/SetupInstanceHttpsCommand";
import type { StartGUISessionCommandInput, StartGUISessionCommandOutput } from "./commands/StartGUISessionCommand";
import type { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand";
import type {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
} from "./commands/StartRelationalDatabaseCommand";
import type { StopGUISessionCommandInput, StopGUISessionCommandOutput } from "./commands/StopGUISessionCommand";
import type { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand";
import type {
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput,
} from "./commands/StopRelationalDatabaseCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TestAlarmCommandInput, TestAlarmCommandOutput } from "./commands/TestAlarmCommand";
import type { UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "./commands/UnpeerVpcCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateBucketBundleCommandInput,
  UpdateBucketBundleCommandOutput,
} from "./commands/UpdateBucketBundleCommand";
import type { UpdateBucketCommandInput, UpdateBucketCommandOutput } from "./commands/UpdateBucketCommand";
import type {
  UpdateContainerServiceCommandInput,
  UpdateContainerServiceCommandOutput,
} from "./commands/UpdateContainerServiceCommand";
import type {
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
} from "./commands/UpdateDistributionBundleCommand";
import type {
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
} from "./commands/UpdateDistributionCommand";
import type {
  UpdateDomainEntryCommandInput,
  UpdateDomainEntryCommandOutput,
} from "./commands/UpdateDomainEntryCommand";
import type {
  UpdateInstanceMetadataOptionsCommandInput,
  UpdateInstanceMetadataOptionsCommandOutput,
} from "./commands/UpdateInstanceMetadataOptionsCommand";
import type {
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
} from "./commands/UpdateLoadBalancerAttributeCommand";
import type {
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput,
} from "./commands/UpdateRelationalDatabaseCommand";
import type {
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
} from "./commands/UpdateRelationalDatabaseParametersCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AllocateStaticIpCommandInput
  | AttachCertificateToDistributionCommandInput
  | AttachDiskCommandInput
  | AttachInstancesToLoadBalancerCommandInput
  | AttachLoadBalancerTlsCertificateCommandInput
  | AttachStaticIpCommandInput
  | CloseInstancePublicPortsCommandInput
  | CopySnapshotCommandInput
  | CreateBucketAccessKeyCommandInput
  | CreateBucketCommandInput
  | CreateCertificateCommandInput
  | CreateCloudFormationStackCommandInput
  | CreateContactMethodCommandInput
  | CreateContainerServiceCommandInput
  | CreateContainerServiceDeploymentCommandInput
  | CreateContainerServiceRegistryLoginCommandInput
  | CreateDiskCommandInput
  | CreateDiskFromSnapshotCommandInput
  | CreateDiskSnapshotCommandInput
  | CreateDistributionCommandInput
  | CreateDomainCommandInput
  | CreateDomainEntryCommandInput
  | CreateGUISessionAccessDetailsCommandInput
  | CreateInstanceSnapshotCommandInput
  | CreateInstancesCommandInput
  | CreateInstancesFromSnapshotCommandInput
  | CreateKeyPairCommandInput
  | CreateLoadBalancerCommandInput
  | CreateLoadBalancerTlsCertificateCommandInput
  | CreateRelationalDatabaseCommandInput
  | CreateRelationalDatabaseFromSnapshotCommandInput
  | CreateRelationalDatabaseSnapshotCommandInput
  | DeleteAlarmCommandInput
  | DeleteAutoSnapshotCommandInput
  | DeleteBucketAccessKeyCommandInput
  | DeleteBucketCommandInput
  | DeleteCertificateCommandInput
  | DeleteContactMethodCommandInput
  | DeleteContainerImageCommandInput
  | DeleteContainerServiceCommandInput
  | DeleteDiskCommandInput
  | DeleteDiskSnapshotCommandInput
  | DeleteDistributionCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainEntryCommandInput
  | DeleteInstanceCommandInput
  | DeleteInstanceSnapshotCommandInput
  | DeleteKeyPairCommandInput
  | DeleteKnownHostKeysCommandInput
  | DeleteLoadBalancerCommandInput
  | DeleteLoadBalancerTlsCertificateCommandInput
  | DeleteRelationalDatabaseCommandInput
  | DeleteRelationalDatabaseSnapshotCommandInput
  | DetachCertificateFromDistributionCommandInput
  | DetachDiskCommandInput
  | DetachInstancesFromLoadBalancerCommandInput
  | DetachStaticIpCommandInput
  | DisableAddOnCommandInput
  | DownloadDefaultKeyPairCommandInput
  | EnableAddOnCommandInput
  | ExportSnapshotCommandInput
  | GetActiveNamesCommandInput
  | GetAlarmsCommandInput
  | GetAutoSnapshotsCommandInput
  | GetBlueprintsCommandInput
  | GetBucketAccessKeysCommandInput
  | GetBucketBundlesCommandInput
  | GetBucketMetricDataCommandInput
  | GetBucketsCommandInput
  | GetBundlesCommandInput
  | GetCertificatesCommandInput
  | GetCloudFormationStackRecordsCommandInput
  | GetContactMethodsCommandInput
  | GetContainerAPIMetadataCommandInput
  | GetContainerImagesCommandInput
  | GetContainerLogCommandInput
  | GetContainerServiceDeploymentsCommandInput
  | GetContainerServiceMetricDataCommandInput
  | GetContainerServicePowersCommandInput
  | GetContainerServicesCommandInput
  | GetCostEstimateCommandInput
  | GetDiskCommandInput
  | GetDiskSnapshotCommandInput
  | GetDiskSnapshotsCommandInput
  | GetDisksCommandInput
  | GetDistributionBundlesCommandInput
  | GetDistributionLatestCacheResetCommandInput
  | GetDistributionMetricDataCommandInput
  | GetDistributionsCommandInput
  | GetDomainCommandInput
  | GetDomainsCommandInput
  | GetExportSnapshotRecordsCommandInput
  | GetInstanceAccessDetailsCommandInput
  | GetInstanceCommandInput
  | GetInstanceMetricDataCommandInput
  | GetInstancePortStatesCommandInput
  | GetInstanceSnapshotCommandInput
  | GetInstanceSnapshotsCommandInput
  | GetInstanceStateCommandInput
  | GetInstancesCommandInput
  | GetKeyPairCommandInput
  | GetKeyPairsCommandInput
  | GetLoadBalancerCommandInput
  | GetLoadBalancerMetricDataCommandInput
  | GetLoadBalancerTlsCertificatesCommandInput
  | GetLoadBalancerTlsPoliciesCommandInput
  | GetLoadBalancersCommandInput
  | GetOperationCommandInput
  | GetOperationsCommandInput
  | GetOperationsForResourceCommandInput
  | GetRegionsCommandInput
  | GetRelationalDatabaseBlueprintsCommandInput
  | GetRelationalDatabaseBundlesCommandInput
  | GetRelationalDatabaseCommandInput
  | GetRelationalDatabaseEventsCommandInput
  | GetRelationalDatabaseLogEventsCommandInput
  | GetRelationalDatabaseLogStreamsCommandInput
  | GetRelationalDatabaseMasterUserPasswordCommandInput
  | GetRelationalDatabaseMetricDataCommandInput
  | GetRelationalDatabaseParametersCommandInput
  | GetRelationalDatabaseSnapshotCommandInput
  | GetRelationalDatabaseSnapshotsCommandInput
  | GetRelationalDatabasesCommandInput
  | GetSetupHistoryCommandInput
  | GetStaticIpCommandInput
  | GetStaticIpsCommandInput
  | ImportKeyPairCommandInput
  | IsVpcPeeredCommandInput
  | OpenInstancePublicPortsCommandInput
  | PeerVpcCommandInput
  | PutAlarmCommandInput
  | PutInstancePublicPortsCommandInput
  | RebootInstanceCommandInput
  | RebootRelationalDatabaseCommandInput
  | RegisterContainerImageCommandInput
  | ReleaseStaticIpCommandInput
  | ResetDistributionCacheCommandInput
  | SendContactMethodVerificationCommandInput
  | SetIpAddressTypeCommandInput
  | SetResourceAccessForBucketCommandInput
  | SetupInstanceHttpsCommandInput
  | StartGUISessionCommandInput
  | StartInstanceCommandInput
  | StartRelationalDatabaseCommandInput
  | StopGUISessionCommandInput
  | StopInstanceCommandInput
  | StopRelationalDatabaseCommandInput
  | TagResourceCommandInput
  | TestAlarmCommandInput
  | UnpeerVpcCommandInput
  | UntagResourceCommandInput
  | UpdateBucketBundleCommandInput
  | UpdateBucketCommandInput
  | UpdateContainerServiceCommandInput
  | UpdateDistributionBundleCommandInput
  | UpdateDistributionCommandInput
  | UpdateDomainEntryCommandInput
  | UpdateInstanceMetadataOptionsCommandInput
  | UpdateLoadBalancerAttributeCommandInput
  | UpdateRelationalDatabaseCommandInput
  | UpdateRelationalDatabaseParametersCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AllocateStaticIpCommandOutput
  | AttachCertificateToDistributionCommandOutput
  | AttachDiskCommandOutput
  | AttachInstancesToLoadBalancerCommandOutput
  | AttachLoadBalancerTlsCertificateCommandOutput
  | AttachStaticIpCommandOutput
  | CloseInstancePublicPortsCommandOutput
  | CopySnapshotCommandOutput
  | CreateBucketAccessKeyCommandOutput
  | CreateBucketCommandOutput
  | CreateCertificateCommandOutput
  | CreateCloudFormationStackCommandOutput
  | CreateContactMethodCommandOutput
  | CreateContainerServiceCommandOutput
  | CreateContainerServiceDeploymentCommandOutput
  | CreateContainerServiceRegistryLoginCommandOutput
  | CreateDiskCommandOutput
  | CreateDiskFromSnapshotCommandOutput
  | CreateDiskSnapshotCommandOutput
  | CreateDistributionCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainEntryCommandOutput
  | CreateGUISessionAccessDetailsCommandOutput
  | CreateInstanceSnapshotCommandOutput
  | CreateInstancesCommandOutput
  | CreateInstancesFromSnapshotCommandOutput
  | CreateKeyPairCommandOutput
  | CreateLoadBalancerCommandOutput
  | CreateLoadBalancerTlsCertificateCommandOutput
  | CreateRelationalDatabaseCommandOutput
  | CreateRelationalDatabaseFromSnapshotCommandOutput
  | CreateRelationalDatabaseSnapshotCommandOutput
  | DeleteAlarmCommandOutput
  | DeleteAutoSnapshotCommandOutput
  | DeleteBucketAccessKeyCommandOutput
  | DeleteBucketCommandOutput
  | DeleteCertificateCommandOutput
  | DeleteContactMethodCommandOutput
  | DeleteContainerImageCommandOutput
  | DeleteContainerServiceCommandOutput
  | DeleteDiskCommandOutput
  | DeleteDiskSnapshotCommandOutput
  | DeleteDistributionCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainEntryCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteInstanceSnapshotCommandOutput
  | DeleteKeyPairCommandOutput
  | DeleteKnownHostKeysCommandOutput
  | DeleteLoadBalancerCommandOutput
  | DeleteLoadBalancerTlsCertificateCommandOutput
  | DeleteRelationalDatabaseCommandOutput
  | DeleteRelationalDatabaseSnapshotCommandOutput
  | DetachCertificateFromDistributionCommandOutput
  | DetachDiskCommandOutput
  | DetachInstancesFromLoadBalancerCommandOutput
  | DetachStaticIpCommandOutput
  | DisableAddOnCommandOutput
  | DownloadDefaultKeyPairCommandOutput
  | EnableAddOnCommandOutput
  | ExportSnapshotCommandOutput
  | GetActiveNamesCommandOutput
  | GetAlarmsCommandOutput
  | GetAutoSnapshotsCommandOutput
  | GetBlueprintsCommandOutput
  | GetBucketAccessKeysCommandOutput
  | GetBucketBundlesCommandOutput
  | GetBucketMetricDataCommandOutput
  | GetBucketsCommandOutput
  | GetBundlesCommandOutput
  | GetCertificatesCommandOutput
  | GetCloudFormationStackRecordsCommandOutput
  | GetContactMethodsCommandOutput
  | GetContainerAPIMetadataCommandOutput
  | GetContainerImagesCommandOutput
  | GetContainerLogCommandOutput
  | GetContainerServiceDeploymentsCommandOutput
  | GetContainerServiceMetricDataCommandOutput
  | GetContainerServicePowersCommandOutput
  | GetContainerServicesCommandOutput
  | GetCostEstimateCommandOutput
  | GetDiskCommandOutput
  | GetDiskSnapshotCommandOutput
  | GetDiskSnapshotsCommandOutput
  | GetDisksCommandOutput
  | GetDistributionBundlesCommandOutput
  | GetDistributionLatestCacheResetCommandOutput
  | GetDistributionMetricDataCommandOutput
  | GetDistributionsCommandOutput
  | GetDomainCommandOutput
  | GetDomainsCommandOutput
  | GetExportSnapshotRecordsCommandOutput
  | GetInstanceAccessDetailsCommandOutput
  | GetInstanceCommandOutput
  | GetInstanceMetricDataCommandOutput
  | GetInstancePortStatesCommandOutput
  | GetInstanceSnapshotCommandOutput
  | GetInstanceSnapshotsCommandOutput
  | GetInstanceStateCommandOutput
  | GetInstancesCommandOutput
  | GetKeyPairCommandOutput
  | GetKeyPairsCommandOutput
  | GetLoadBalancerCommandOutput
  | GetLoadBalancerMetricDataCommandOutput
  | GetLoadBalancerTlsCertificatesCommandOutput
  | GetLoadBalancerTlsPoliciesCommandOutput
  | GetLoadBalancersCommandOutput
  | GetOperationCommandOutput
  | GetOperationsCommandOutput
  | GetOperationsForResourceCommandOutput
  | GetRegionsCommandOutput
  | GetRelationalDatabaseBlueprintsCommandOutput
  | GetRelationalDatabaseBundlesCommandOutput
  | GetRelationalDatabaseCommandOutput
  | GetRelationalDatabaseEventsCommandOutput
  | GetRelationalDatabaseLogEventsCommandOutput
  | GetRelationalDatabaseLogStreamsCommandOutput
  | GetRelationalDatabaseMasterUserPasswordCommandOutput
  | GetRelationalDatabaseMetricDataCommandOutput
  | GetRelationalDatabaseParametersCommandOutput
  | GetRelationalDatabaseSnapshotCommandOutput
  | GetRelationalDatabaseSnapshotsCommandOutput
  | GetRelationalDatabasesCommandOutput
  | GetSetupHistoryCommandOutput
  | GetStaticIpCommandOutput
  | GetStaticIpsCommandOutput
  | ImportKeyPairCommandOutput
  | IsVpcPeeredCommandOutput
  | OpenInstancePublicPortsCommandOutput
  | PeerVpcCommandOutput
  | PutAlarmCommandOutput
  | PutInstancePublicPortsCommandOutput
  | RebootInstanceCommandOutput
  | RebootRelationalDatabaseCommandOutput
  | RegisterContainerImageCommandOutput
  | ReleaseStaticIpCommandOutput
  | ResetDistributionCacheCommandOutput
  | SendContactMethodVerificationCommandOutput
  | SetIpAddressTypeCommandOutput
  | SetResourceAccessForBucketCommandOutput
  | SetupInstanceHttpsCommandOutput
  | StartGUISessionCommandOutput
  | StartInstanceCommandOutput
  | StartRelationalDatabaseCommandOutput
  | StopGUISessionCommandOutput
  | StopInstanceCommandOutput
  | StopRelationalDatabaseCommandOutput
  | TagResourceCommandOutput
  | TestAlarmCommandOutput
  | UnpeerVpcCommandOutput
  | UntagResourceCommandOutput
  | UpdateBucketBundleCommandOutput
  | UpdateBucketCommandOutput
  | UpdateContainerServiceCommandOutput
  | UpdateDistributionBundleCommandOutput
  | UpdateDistributionCommandOutput
  | UpdateDomainEntryCommandOutput
  | UpdateInstanceMetadataOptionsCommandOutput
  | UpdateLoadBalancerAttributeCommandOutput
  | UpdateRelationalDatabaseCommandOutput
  | UpdateRelationalDatabaseParametersCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type LightsailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of LightsailClient class constructor that set the region, credentials and other options.
 */
export interface LightsailClientConfig extends LightsailClientConfigType {}

/**
 * @public
 */
export type LightsailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of LightsailClient class. This is resolved and normalized from the {@link LightsailClientConfig | constructor configuration interface}.
 */
export interface LightsailClientResolvedConfig extends LightsailClientResolvedConfigType {}

/**
 * <p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes
 *       everything you need to launch your project quickly - instances (virtual private servers),
 *       container services, storage buckets, managed databases, SSD-based block storage, static IP
 *       addresses, load balancers, content delivery network (CDN) distributions, DNS management of
 *       registered domains, and resource snapshots (backups) - for a low, predictable monthly
 *       price.</p>
 *          <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API,
 *         Command Line Interface (CLI), or SDKs. For more information about Lightsail
 *       concepts and tasks, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-how-to-set-up-and-configure-aws-cli">Amazon Lightsail Developer Guide</a>.</p>
 *          <p>This API Reference provides detailed information about the actions, data types,
 *       parameters, and errors of the Lightsail service. For more information about the supported
 *         Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints
 *         and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class LightsailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LightsailClientResolvedConfig
> {
  /**
   * The resolved configuration of LightsailClient class. This is resolved and normalized from the {@link LightsailClientConfig | constructor configuration interface}.
   */
  readonly config: LightsailClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<LightsailClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultLightsailHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: LightsailClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

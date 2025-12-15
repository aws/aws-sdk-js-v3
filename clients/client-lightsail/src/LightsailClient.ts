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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultLightsailHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput } from "./commands/AllocateStaticIpCommand";
import {
  AttachCertificateToDistributionCommandInput,
  AttachCertificateToDistributionCommandOutput,
} from "./commands/AttachCertificateToDistributionCommand";
import { AttachDiskCommandInput, AttachDiskCommandOutput } from "./commands/AttachDiskCommand";
import {
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
} from "./commands/AttachInstancesToLoadBalancerCommand";
import {
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput,
} from "./commands/AttachLoadBalancerTlsCertificateCommand";
import { AttachStaticIpCommandInput, AttachStaticIpCommandOutput } from "./commands/AttachStaticIpCommand";
import {
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput,
} from "./commands/CloseInstancePublicPortsCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import {
  CreateBucketAccessKeyCommandInput,
  CreateBucketAccessKeyCommandOutput,
} from "./commands/CreateBucketAccessKeyCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import { CreateCertificateCommandInput, CreateCertificateCommandOutput } from "./commands/CreateCertificateCommand";
import {
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
} from "./commands/CreateCloudFormationStackCommand";
import {
  CreateContactMethodCommandInput,
  CreateContactMethodCommandOutput,
} from "./commands/CreateContactMethodCommand";
import {
  CreateContainerServiceCommandInput,
  CreateContainerServiceCommandOutput,
} from "./commands/CreateContainerServiceCommand";
import {
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
} from "./commands/CreateContainerServiceDeploymentCommand";
import {
  CreateContainerServiceRegistryLoginCommandInput,
  CreateContainerServiceRegistryLoginCommandOutput,
} from "./commands/CreateContainerServiceRegistryLoginCommand";
import { CreateDiskCommandInput, CreateDiskCommandOutput } from "./commands/CreateDiskCommand";
import {
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
} from "./commands/CreateDiskFromSnapshotCommand";
import { CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput } from "./commands/CreateDiskSnapshotCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "./commands/CreateDistributionCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput } from "./commands/CreateDomainEntryCommand";
import {
  CreateGUISessionAccessDetailsCommandInput,
  CreateGUISessionAccessDetailsCommandOutput,
} from "./commands/CreateGUISessionAccessDetailsCommand";
import { CreateInstancesCommandInput, CreateInstancesCommandOutput } from "./commands/CreateInstancesCommand";
import {
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput,
} from "./commands/CreateInstancesFromSnapshotCommand";
import {
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput,
} from "./commands/CreateInstanceSnapshotCommand";
import { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "./commands/CreateKeyPairCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "./commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
} from "./commands/CreateLoadBalancerTlsCertificateCommand";
import {
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput,
} from "./commands/CreateRelationalDatabaseCommand";
import {
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
} from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import {
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput,
} from "./commands/CreateRelationalDatabaseSnapshotCommand";
import { DeleteAlarmCommandInput, DeleteAlarmCommandOutput } from "./commands/DeleteAlarmCommand";
import { DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput } from "./commands/DeleteAutoSnapshotCommand";
import {
  DeleteBucketAccessKeyCommandInput,
  DeleteBucketAccessKeyCommandOutput,
} from "./commands/DeleteBucketAccessKeyCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import {
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
} from "./commands/DeleteContactMethodCommand";
import {
  DeleteContainerImageCommandInput,
  DeleteContainerImageCommandOutput,
} from "./commands/DeleteContainerImageCommand";
import {
  DeleteContainerServiceCommandInput,
  DeleteContainerServiceCommandOutput,
} from "./commands/DeleteContainerServiceCommand";
import { DeleteDiskCommandInput, DeleteDiskCommandOutput } from "./commands/DeleteDiskCommand";
import { DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput } from "./commands/DeleteDiskSnapshotCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "./commands/DeleteDistributionCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput } from "./commands/DeleteDomainEntryCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import {
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
} from "./commands/DeleteInstanceSnapshotCommand";
import { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "./commands/DeleteKeyPairCommand";
import {
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
} from "./commands/DeleteKnownHostKeysCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput,
} from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import {
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput,
} from "./commands/DeleteRelationalDatabaseCommand";
import {
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput,
} from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import {
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
} from "./commands/DetachCertificateFromDistributionCommand";
import { DetachDiskCommandInput, DetachDiskCommandOutput } from "./commands/DetachDiskCommand";
import {
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput,
} from "./commands/DetachInstancesFromLoadBalancerCommand";
import { DetachStaticIpCommandInput, DetachStaticIpCommandOutput } from "./commands/DetachStaticIpCommand";
import { DisableAddOnCommandInput, DisableAddOnCommandOutput } from "./commands/DisableAddOnCommand";
import {
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
} from "./commands/DownloadDefaultKeyPairCommand";
import { EnableAddOnCommandInput, EnableAddOnCommandOutput } from "./commands/EnableAddOnCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "./commands/ExportSnapshotCommand";
import { GetActiveNamesCommandInput, GetActiveNamesCommandOutput } from "./commands/GetActiveNamesCommand";
import { GetAlarmsCommandInput, GetAlarmsCommandOutput } from "./commands/GetAlarmsCommand";
import { GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput } from "./commands/GetAutoSnapshotsCommand";
import { GetBlueprintsCommandInput, GetBlueprintsCommandOutput } from "./commands/GetBlueprintsCommand";
import {
  GetBucketAccessKeysCommandInput,
  GetBucketAccessKeysCommandOutput,
} from "./commands/GetBucketAccessKeysCommand";
import { GetBucketBundlesCommandInput, GetBucketBundlesCommandOutput } from "./commands/GetBucketBundlesCommand";
import {
  GetBucketMetricDataCommandInput,
  GetBucketMetricDataCommandOutput,
} from "./commands/GetBucketMetricDataCommand";
import { GetBucketsCommandInput, GetBucketsCommandOutput } from "./commands/GetBucketsCommand";
import { GetBundlesCommandInput, GetBundlesCommandOutput } from "./commands/GetBundlesCommand";
import { GetCertificatesCommandInput, GetCertificatesCommandOutput } from "./commands/GetCertificatesCommand";
import {
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
} from "./commands/GetCloudFormationStackRecordsCommand";
import { GetContactMethodsCommandInput, GetContactMethodsCommandOutput } from "./commands/GetContactMethodsCommand";
import {
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
} from "./commands/GetContainerAPIMetadataCommand";
import { GetContainerImagesCommandInput, GetContainerImagesCommandOutput } from "./commands/GetContainerImagesCommand";
import { GetContainerLogCommandInput, GetContainerLogCommandOutput } from "./commands/GetContainerLogCommand";
import {
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
} from "./commands/GetContainerServiceDeploymentsCommand";
import {
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
} from "./commands/GetContainerServiceMetricDataCommand";
import {
  GetContainerServicePowersCommandInput,
  GetContainerServicePowersCommandOutput,
} from "./commands/GetContainerServicePowersCommand";
import {
  GetContainerServicesCommandInput,
  GetContainerServicesCommandOutput,
} from "./commands/GetContainerServicesCommand";
import { GetCostEstimateCommandInput, GetCostEstimateCommandOutput } from "./commands/GetCostEstimateCommand";
import { GetDiskCommandInput, GetDiskCommandOutput } from "./commands/GetDiskCommand";
import { GetDisksCommandInput, GetDisksCommandOutput } from "./commands/GetDisksCommand";
import { GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput } from "./commands/GetDiskSnapshotCommand";
import { GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput } from "./commands/GetDiskSnapshotsCommand";
import {
  GetDistributionBundlesCommandInput,
  GetDistributionBundlesCommandOutput,
} from "./commands/GetDistributionBundlesCommand";
import {
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
} from "./commands/GetDistributionLatestCacheResetCommand";
import {
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
} from "./commands/GetDistributionMetricDataCommand";
import { GetDistributionsCommandInput, GetDistributionsCommandOutput } from "./commands/GetDistributionsCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetDomainsCommandInput, GetDomainsCommandOutput } from "./commands/GetDomainsCommand";
import {
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
} from "./commands/GetExportSnapshotRecordsCommand";
import {
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput,
} from "./commands/GetInstanceAccessDetailsCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import {
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
} from "./commands/GetInstanceMetricDataCommand";
import {
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
} from "./commands/GetInstancePortStatesCommand";
import { GetInstancesCommandInput, GetInstancesCommandOutput } from "./commands/GetInstancesCommand";
import {
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput,
} from "./commands/GetInstanceSnapshotCommand";
import {
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput,
} from "./commands/GetInstanceSnapshotsCommand";
import { GetInstanceStateCommandInput, GetInstanceStateCommandOutput } from "./commands/GetInstanceStateCommand";
import { GetKeyPairCommandInput, GetKeyPairCommandOutput } from "./commands/GetKeyPairCommand";
import { GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "./commands/GetKeyPairsCommand";
import { GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput } from "./commands/GetLoadBalancerCommand";
import {
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput,
} from "./commands/GetLoadBalancerMetricDataCommand";
import { GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput } from "./commands/GetLoadBalancersCommand";
import {
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
} from "./commands/GetLoadBalancerTlsCertificatesCommand";
import {
  GetLoadBalancerTlsPoliciesCommandInput,
  GetLoadBalancerTlsPoliciesCommandOutput,
} from "./commands/GetLoadBalancerTlsPoliciesCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand";
import { GetOperationsCommandInput, GetOperationsCommandOutput } from "./commands/GetOperationsCommand";
import {
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput,
} from "./commands/GetOperationsForResourceCommand";
import { GetRegionsCommandInput, GetRegionsCommandOutput } from "./commands/GetRegionsCommand";
import {
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput,
} from "./commands/GetRelationalDatabaseBlueprintsCommand";
import {
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput,
} from "./commands/GetRelationalDatabaseBundlesCommand";
import {
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput,
} from "./commands/GetRelationalDatabaseCommand";
import {
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
} from "./commands/GetRelationalDatabaseEventsCommand";
import {
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput,
} from "./commands/GetRelationalDatabaseLogEventsCommand";
import {
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput,
} from "./commands/GetRelationalDatabaseLogStreamsCommand";
import {
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
} from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import {
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput,
} from "./commands/GetRelationalDatabaseMetricDataCommand";
import {
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput,
} from "./commands/GetRelationalDatabaseParametersCommand";
import {
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
} from "./commands/GetRelationalDatabasesCommand";
import {
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput,
} from "./commands/GetRelationalDatabaseSnapshotCommand";
import {
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput,
} from "./commands/GetRelationalDatabaseSnapshotsCommand";
import { GetSetupHistoryCommandInput, GetSetupHistoryCommandOutput } from "./commands/GetSetupHistoryCommand";
import { GetStaticIpCommandInput, GetStaticIpCommandOutput } from "./commands/GetStaticIpCommand";
import { GetStaticIpsCommandInput, GetStaticIpsCommandOutput } from "./commands/GetStaticIpsCommand";
import { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "./commands/ImportKeyPairCommand";
import { IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "./commands/IsVpcPeeredCommand";
import {
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput,
} from "./commands/OpenInstancePublicPortsCommand";
import { PeerVpcCommandInput, PeerVpcCommandOutput } from "./commands/PeerVpcCommand";
import { PutAlarmCommandInput, PutAlarmCommandOutput } from "./commands/PutAlarmCommand";
import {
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
} from "./commands/PutInstancePublicPortsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand";
import {
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput,
} from "./commands/RebootRelationalDatabaseCommand";
import {
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
} from "./commands/RegisterContainerImageCommand";
import { ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput } from "./commands/ReleaseStaticIpCommand";
import {
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
} from "./commands/ResetDistributionCacheCommand";
import {
  SendContactMethodVerificationCommandInput,
  SendContactMethodVerificationCommandOutput,
} from "./commands/SendContactMethodVerificationCommand";
import { SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput } from "./commands/SetIpAddressTypeCommand";
import {
  SetResourceAccessForBucketCommandInput,
  SetResourceAccessForBucketCommandOutput,
} from "./commands/SetResourceAccessForBucketCommand";
import { SetupInstanceHttpsCommandInput, SetupInstanceHttpsCommandOutput } from "./commands/SetupInstanceHttpsCommand";
import { StartGUISessionCommandInput, StartGUISessionCommandOutput } from "./commands/StartGUISessionCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
} from "./commands/StartRelationalDatabaseCommand";
import { StopGUISessionCommandInput, StopGUISessionCommandOutput } from "./commands/StopGUISessionCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand";
import {
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput,
} from "./commands/StopRelationalDatabaseCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestAlarmCommandInput, TestAlarmCommandOutput } from "./commands/TestAlarmCommand";
import { UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "./commands/UnpeerVpcCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBucketBundleCommandInput, UpdateBucketBundleCommandOutput } from "./commands/UpdateBucketBundleCommand";
import { UpdateBucketCommandInput, UpdateBucketCommandOutput } from "./commands/UpdateBucketCommand";
import {
  UpdateContainerServiceCommandInput,
  UpdateContainerServiceCommandOutput,
} from "./commands/UpdateContainerServiceCommand";
import {
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
} from "./commands/UpdateDistributionBundleCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "./commands/UpdateDistributionCommand";
import { UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput } from "./commands/UpdateDomainEntryCommand";
import {
  UpdateInstanceMetadataOptionsCommandInput,
  UpdateInstanceMetadataOptionsCommandOutput,
} from "./commands/UpdateInstanceMetadataOptionsCommand";
import {
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
} from "./commands/UpdateLoadBalancerAttributeCommand";
import {
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput,
} from "./commands/UpdateRelationalDatabaseCommand";
import {
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
} from "./commands/UpdateRelationalDatabaseParametersCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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

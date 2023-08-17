// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AllocateStaticIpCommand,
  AllocateStaticIpCommandInput,
  AllocateStaticIpCommandOutput,
} from "./commands/AllocateStaticIpCommand";
import {
  AttachCertificateToDistributionCommand,
  AttachCertificateToDistributionCommandInput,
  AttachCertificateToDistributionCommandOutput,
} from "./commands/AttachCertificateToDistributionCommand";
import { AttachDiskCommand, AttachDiskCommandInput, AttachDiskCommandOutput } from "./commands/AttachDiskCommand";
import {
  AttachInstancesToLoadBalancerCommand,
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
} from "./commands/AttachInstancesToLoadBalancerCommand";
import {
  AttachLoadBalancerTlsCertificateCommand,
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput,
} from "./commands/AttachLoadBalancerTlsCertificateCommand";
import {
  AttachStaticIpCommand,
  AttachStaticIpCommandInput,
  AttachStaticIpCommandOutput,
} from "./commands/AttachStaticIpCommand";
import {
  CloseInstancePublicPortsCommand,
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput,
} from "./commands/CloseInstancePublicPortsCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
} from "./commands/CopySnapshotCommand";
import {
  CreateBucketAccessKeyCommand,
  CreateBucketAccessKeyCommandInput,
  CreateBucketAccessKeyCommandOutput,
} from "./commands/CreateBucketAccessKeyCommand";
import {
  CreateBucketCommand,
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
} from "./commands/CreateBucketCommand";
import {
  CreateCertificateCommand,
  CreateCertificateCommandInput,
  CreateCertificateCommandOutput,
} from "./commands/CreateCertificateCommand";
import {
  CreateCloudFormationStackCommand,
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
} from "./commands/CreateCloudFormationStackCommand";
import {
  CreateContactMethodCommand,
  CreateContactMethodCommandInput,
  CreateContactMethodCommandOutput,
} from "./commands/CreateContactMethodCommand";
import {
  CreateContainerServiceCommand,
  CreateContainerServiceCommandInput,
  CreateContainerServiceCommandOutput,
} from "./commands/CreateContainerServiceCommand";
import {
  CreateContainerServiceDeploymentCommand,
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
} from "./commands/CreateContainerServiceDeploymentCommand";
import {
  CreateContainerServiceRegistryLoginCommand,
  CreateContainerServiceRegistryLoginCommandInput,
  CreateContainerServiceRegistryLoginCommandOutput,
} from "./commands/CreateContainerServiceRegistryLoginCommand";
import { CreateDiskCommand, CreateDiskCommandInput, CreateDiskCommandOutput } from "./commands/CreateDiskCommand";
import {
  CreateDiskFromSnapshotCommand,
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
} from "./commands/CreateDiskFromSnapshotCommand";
import {
  CreateDiskSnapshotCommand,
  CreateDiskSnapshotCommandInput,
  CreateDiskSnapshotCommandOutput,
} from "./commands/CreateDiskSnapshotCommand";
import {
  CreateDistributionCommand,
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
} from "./commands/CreateDistributionCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateDomainEntryCommand,
  CreateDomainEntryCommandInput,
  CreateDomainEntryCommandOutput,
} from "./commands/CreateDomainEntryCommand";
import {
  CreateGUISessionAccessDetailsCommand,
  CreateGUISessionAccessDetailsCommandInput,
  CreateGUISessionAccessDetailsCommandOutput,
} from "./commands/CreateGUISessionAccessDetailsCommand";
import {
  CreateInstancesCommand,
  CreateInstancesCommandInput,
  CreateInstancesCommandOutput,
} from "./commands/CreateInstancesCommand";
import {
  CreateInstancesFromSnapshotCommand,
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput,
} from "./commands/CreateInstancesFromSnapshotCommand";
import {
  CreateInstanceSnapshotCommand,
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput,
} from "./commands/CreateInstanceSnapshotCommand";
import {
  CreateKeyPairCommand,
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput,
} from "./commands/CreateKeyPairCommand";
import {
  CreateLoadBalancerCommand,
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
} from "./commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerTlsCertificateCommand,
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput,
} from "./commands/CreateLoadBalancerTlsCertificateCommand";
import {
  CreateRelationalDatabaseCommand,
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput,
} from "./commands/CreateRelationalDatabaseCommand";
import {
  CreateRelationalDatabaseFromSnapshotCommand,
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
} from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import {
  CreateRelationalDatabaseSnapshotCommand,
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput,
} from "./commands/CreateRelationalDatabaseSnapshotCommand";
import { DeleteAlarmCommand, DeleteAlarmCommandInput, DeleteAlarmCommandOutput } from "./commands/DeleteAlarmCommand";
import {
  DeleteAutoSnapshotCommand,
  DeleteAutoSnapshotCommandInput,
  DeleteAutoSnapshotCommandOutput,
} from "./commands/DeleteAutoSnapshotCommand";
import {
  DeleteBucketAccessKeyCommand,
  DeleteBucketAccessKeyCommandInput,
  DeleteBucketAccessKeyCommandOutput,
} from "./commands/DeleteBucketAccessKeyCommand";
import {
  DeleteBucketCommand,
  DeleteBucketCommandInput,
  DeleteBucketCommandOutput,
} from "./commands/DeleteBucketCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput,
} from "./commands/DeleteCertificateCommand";
import {
  DeleteContactMethodCommand,
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
} from "./commands/DeleteContactMethodCommand";
import {
  DeleteContainerImageCommand,
  DeleteContainerImageCommandInput,
  DeleteContainerImageCommandOutput,
} from "./commands/DeleteContainerImageCommand";
import {
  DeleteContainerServiceCommand,
  DeleteContainerServiceCommandInput,
  DeleteContainerServiceCommandOutput,
} from "./commands/DeleteContainerServiceCommand";
import { DeleteDiskCommand, DeleteDiskCommandInput, DeleteDiskCommandOutput } from "./commands/DeleteDiskCommand";
import {
  DeleteDiskSnapshotCommand,
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput,
} from "./commands/DeleteDiskSnapshotCommand";
import {
  DeleteDistributionCommand,
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput,
} from "./commands/DeleteDistributionCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainEntryCommand,
  DeleteDomainEntryCommandInput,
  DeleteDomainEntryCommandOutput,
} from "./commands/DeleteDomainEntryCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
import {
  DeleteInstanceSnapshotCommand,
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput,
} from "./commands/DeleteInstanceSnapshotCommand";
import {
  DeleteKeyPairCommand,
  DeleteKeyPairCommandInput,
  DeleteKeyPairCommandOutput,
} from "./commands/DeleteKeyPairCommand";
import {
  DeleteKnownHostKeysCommand,
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
} from "./commands/DeleteKnownHostKeysCommand";
import {
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
} from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerTlsCertificateCommand,
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput,
} from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import {
  DeleteRelationalDatabaseCommand,
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput,
} from "./commands/DeleteRelationalDatabaseCommand";
import {
  DeleteRelationalDatabaseSnapshotCommand,
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput,
} from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import {
  DetachCertificateFromDistributionCommand,
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
} from "./commands/DetachCertificateFromDistributionCommand";
import { DetachDiskCommand, DetachDiskCommandInput, DetachDiskCommandOutput } from "./commands/DetachDiskCommand";
import {
  DetachInstancesFromLoadBalancerCommand,
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput,
} from "./commands/DetachInstancesFromLoadBalancerCommand";
import {
  DetachStaticIpCommand,
  DetachStaticIpCommandInput,
  DetachStaticIpCommandOutput,
} from "./commands/DetachStaticIpCommand";
import {
  DisableAddOnCommand,
  DisableAddOnCommandInput,
  DisableAddOnCommandOutput,
} from "./commands/DisableAddOnCommand";
import {
  DownloadDefaultKeyPairCommand,
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
} from "./commands/DownloadDefaultKeyPairCommand";
import { EnableAddOnCommand, EnableAddOnCommandInput, EnableAddOnCommandOutput } from "./commands/EnableAddOnCommand";
import {
  ExportSnapshotCommand,
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput,
} from "./commands/ExportSnapshotCommand";
import {
  GetActiveNamesCommand,
  GetActiveNamesCommandInput,
  GetActiveNamesCommandOutput,
} from "./commands/GetActiveNamesCommand";
import { GetAlarmsCommand, GetAlarmsCommandInput, GetAlarmsCommandOutput } from "./commands/GetAlarmsCommand";
import {
  GetAutoSnapshotsCommand,
  GetAutoSnapshotsCommandInput,
  GetAutoSnapshotsCommandOutput,
} from "./commands/GetAutoSnapshotsCommand";
import {
  GetBlueprintsCommand,
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput,
} from "./commands/GetBlueprintsCommand";
import {
  GetBucketAccessKeysCommand,
  GetBucketAccessKeysCommandInput,
  GetBucketAccessKeysCommandOutput,
} from "./commands/GetBucketAccessKeysCommand";
import {
  GetBucketBundlesCommand,
  GetBucketBundlesCommandInput,
  GetBucketBundlesCommandOutput,
} from "./commands/GetBucketBundlesCommand";
import {
  GetBucketMetricDataCommand,
  GetBucketMetricDataCommandInput,
  GetBucketMetricDataCommandOutput,
} from "./commands/GetBucketMetricDataCommand";
import { GetBucketsCommand, GetBucketsCommandInput, GetBucketsCommandOutput } from "./commands/GetBucketsCommand";
import { GetBundlesCommand, GetBundlesCommandInput, GetBundlesCommandOutput } from "./commands/GetBundlesCommand";
import {
  GetCertificatesCommand,
  GetCertificatesCommandInput,
  GetCertificatesCommandOutput,
} from "./commands/GetCertificatesCommand";
import {
  GetCloudFormationStackRecordsCommand,
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput,
} from "./commands/GetCloudFormationStackRecordsCommand";
import {
  GetContactMethodsCommand,
  GetContactMethodsCommandInput,
  GetContactMethodsCommandOutput,
} from "./commands/GetContactMethodsCommand";
import {
  GetContainerAPIMetadataCommand,
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
} from "./commands/GetContainerAPIMetadataCommand";
import {
  GetContainerImagesCommand,
  GetContainerImagesCommandInput,
  GetContainerImagesCommandOutput,
} from "./commands/GetContainerImagesCommand";
import {
  GetContainerLogCommand,
  GetContainerLogCommandInput,
  GetContainerLogCommandOutput,
} from "./commands/GetContainerLogCommand";
import {
  GetContainerServiceDeploymentsCommand,
  GetContainerServiceDeploymentsCommandInput,
  GetContainerServiceDeploymentsCommandOutput,
} from "./commands/GetContainerServiceDeploymentsCommand";
import {
  GetContainerServiceMetricDataCommand,
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
} from "./commands/GetContainerServiceMetricDataCommand";
import {
  GetContainerServicePowersCommand,
  GetContainerServicePowersCommandInput,
  GetContainerServicePowersCommandOutput,
} from "./commands/GetContainerServicePowersCommand";
import {
  GetContainerServicesCommand,
  GetContainerServicesCommandInput,
  GetContainerServicesCommandOutput,
} from "./commands/GetContainerServicesCommand";
import {
  GetCostEstimateCommand,
  GetCostEstimateCommandInput,
  GetCostEstimateCommandOutput,
} from "./commands/GetCostEstimateCommand";
import { GetDiskCommand, GetDiskCommandInput, GetDiskCommandOutput } from "./commands/GetDiskCommand";
import { GetDisksCommand, GetDisksCommandInput, GetDisksCommandOutput } from "./commands/GetDisksCommand";
import {
  GetDiskSnapshotCommand,
  GetDiskSnapshotCommandInput,
  GetDiskSnapshotCommandOutput,
} from "./commands/GetDiskSnapshotCommand";
import {
  GetDiskSnapshotsCommand,
  GetDiskSnapshotsCommandInput,
  GetDiskSnapshotsCommandOutput,
} from "./commands/GetDiskSnapshotsCommand";
import {
  GetDistributionBundlesCommand,
  GetDistributionBundlesCommandInput,
  GetDistributionBundlesCommandOutput,
} from "./commands/GetDistributionBundlesCommand";
import {
  GetDistributionLatestCacheResetCommand,
  GetDistributionLatestCacheResetCommandInput,
  GetDistributionLatestCacheResetCommandOutput,
} from "./commands/GetDistributionLatestCacheResetCommand";
import {
  GetDistributionMetricDataCommand,
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
} from "./commands/GetDistributionMetricDataCommand";
import {
  GetDistributionsCommand,
  GetDistributionsCommandInput,
  GetDistributionsCommandOutput,
} from "./commands/GetDistributionsCommand";
import { GetDomainCommand, GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetDomainsCommand, GetDomainsCommandInput, GetDomainsCommandOutput } from "./commands/GetDomainsCommand";
import {
  GetExportSnapshotRecordsCommand,
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput,
} from "./commands/GetExportSnapshotRecordsCommand";
import {
  GetInstanceAccessDetailsCommand,
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput,
} from "./commands/GetInstanceAccessDetailsCommand";
import { GetInstanceCommand, GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import {
  GetInstanceMetricDataCommand,
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
} from "./commands/GetInstanceMetricDataCommand";
import {
  GetInstancePortStatesCommand,
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
} from "./commands/GetInstancePortStatesCommand";
import {
  GetInstancesCommand,
  GetInstancesCommandInput,
  GetInstancesCommandOutput,
} from "./commands/GetInstancesCommand";
import {
  GetInstanceSnapshotCommand,
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput,
} from "./commands/GetInstanceSnapshotCommand";
import {
  GetInstanceSnapshotsCommand,
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput,
} from "./commands/GetInstanceSnapshotsCommand";
import {
  GetInstanceStateCommand,
  GetInstanceStateCommandInput,
  GetInstanceStateCommandOutput,
} from "./commands/GetInstanceStateCommand";
import { GetKeyPairCommand, GetKeyPairCommandInput, GetKeyPairCommandOutput } from "./commands/GetKeyPairCommand";
import { GetKeyPairsCommand, GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "./commands/GetKeyPairsCommand";
import {
  GetLoadBalancerCommand,
  GetLoadBalancerCommandInput,
  GetLoadBalancerCommandOutput,
} from "./commands/GetLoadBalancerCommand";
import {
  GetLoadBalancerMetricDataCommand,
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput,
} from "./commands/GetLoadBalancerMetricDataCommand";
import {
  GetLoadBalancersCommand,
  GetLoadBalancersCommandInput,
  GetLoadBalancersCommandOutput,
} from "./commands/GetLoadBalancersCommand";
import {
  GetLoadBalancerTlsCertificatesCommand,
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
} from "./commands/GetLoadBalancerTlsCertificatesCommand";
import {
  GetLoadBalancerTlsPoliciesCommand,
  GetLoadBalancerTlsPoliciesCommandInput,
  GetLoadBalancerTlsPoliciesCommandOutput,
} from "./commands/GetLoadBalancerTlsPoliciesCommand";
import {
  GetOperationCommand,
  GetOperationCommandInput,
  GetOperationCommandOutput,
} from "./commands/GetOperationCommand";
import {
  GetOperationsCommand,
  GetOperationsCommandInput,
  GetOperationsCommandOutput,
} from "./commands/GetOperationsCommand";
import {
  GetOperationsForResourceCommand,
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput,
} from "./commands/GetOperationsForResourceCommand";
import { GetRegionsCommand, GetRegionsCommandInput, GetRegionsCommandOutput } from "./commands/GetRegionsCommand";
import {
  GetRelationalDatabaseBlueprintsCommand,
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput,
} from "./commands/GetRelationalDatabaseBlueprintsCommand";
import {
  GetRelationalDatabaseBundlesCommand,
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput,
} from "./commands/GetRelationalDatabaseBundlesCommand";
import {
  GetRelationalDatabaseCommand,
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput,
} from "./commands/GetRelationalDatabaseCommand";
import {
  GetRelationalDatabaseEventsCommand,
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
} from "./commands/GetRelationalDatabaseEventsCommand";
import {
  GetRelationalDatabaseLogEventsCommand,
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput,
} from "./commands/GetRelationalDatabaseLogEventsCommand";
import {
  GetRelationalDatabaseLogStreamsCommand,
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput,
} from "./commands/GetRelationalDatabaseLogStreamsCommand";
import {
  GetRelationalDatabaseMasterUserPasswordCommand,
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
} from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import {
  GetRelationalDatabaseMetricDataCommand,
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput,
} from "./commands/GetRelationalDatabaseMetricDataCommand";
import {
  GetRelationalDatabaseParametersCommand,
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput,
} from "./commands/GetRelationalDatabaseParametersCommand";
import {
  GetRelationalDatabasesCommand,
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput,
} from "./commands/GetRelationalDatabasesCommand";
import {
  GetRelationalDatabaseSnapshotCommand,
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput,
} from "./commands/GetRelationalDatabaseSnapshotCommand";
import {
  GetRelationalDatabaseSnapshotsCommand,
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput,
} from "./commands/GetRelationalDatabaseSnapshotsCommand";
import { GetStaticIpCommand, GetStaticIpCommandInput, GetStaticIpCommandOutput } from "./commands/GetStaticIpCommand";
import {
  GetStaticIpsCommand,
  GetStaticIpsCommandInput,
  GetStaticIpsCommandOutput,
} from "./commands/GetStaticIpsCommand";
import {
  ImportKeyPairCommand,
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput,
} from "./commands/ImportKeyPairCommand";
import { IsVpcPeeredCommand, IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "./commands/IsVpcPeeredCommand";
import {
  OpenInstancePublicPortsCommand,
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput,
} from "./commands/OpenInstancePublicPortsCommand";
import { PeerVpcCommand, PeerVpcCommandInput, PeerVpcCommandOutput } from "./commands/PeerVpcCommand";
import { PutAlarmCommand, PutAlarmCommandInput, PutAlarmCommandOutput } from "./commands/PutAlarmCommand";
import {
  PutInstancePublicPortsCommand,
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
} from "./commands/PutInstancePublicPortsCommand";
import {
  RebootInstanceCommand,
  RebootInstanceCommandInput,
  RebootInstanceCommandOutput,
} from "./commands/RebootInstanceCommand";
import {
  RebootRelationalDatabaseCommand,
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput,
} from "./commands/RebootRelationalDatabaseCommand";
import {
  RegisterContainerImageCommand,
  RegisterContainerImageCommandInput,
  RegisterContainerImageCommandOutput,
} from "./commands/RegisterContainerImageCommand";
import {
  ReleaseStaticIpCommand,
  ReleaseStaticIpCommandInput,
  ReleaseStaticIpCommandOutput,
} from "./commands/ReleaseStaticIpCommand";
import {
  ResetDistributionCacheCommand,
  ResetDistributionCacheCommandInput,
  ResetDistributionCacheCommandOutput,
} from "./commands/ResetDistributionCacheCommand";
import {
  SendContactMethodVerificationCommand,
  SendContactMethodVerificationCommandInput,
  SendContactMethodVerificationCommandOutput,
} from "./commands/SendContactMethodVerificationCommand";
import {
  SetIpAddressTypeCommand,
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput,
} from "./commands/SetIpAddressTypeCommand";
import {
  SetResourceAccessForBucketCommand,
  SetResourceAccessForBucketCommandInput,
  SetResourceAccessForBucketCommandOutput,
} from "./commands/SetResourceAccessForBucketCommand";
import {
  StartGUISessionCommand,
  StartGUISessionCommandInput,
  StartGUISessionCommandOutput,
} from "./commands/StartGUISessionCommand";
import {
  StartInstanceCommand,
  StartInstanceCommandInput,
  StartInstanceCommandOutput,
} from "./commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommand,
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput,
} from "./commands/StartRelationalDatabaseCommand";
import {
  StopGUISessionCommand,
  StopGUISessionCommandInput,
  StopGUISessionCommandOutput,
} from "./commands/StopGUISessionCommand";
import {
  StopInstanceCommand,
  StopInstanceCommandInput,
  StopInstanceCommandOutput,
} from "./commands/StopInstanceCommand";
import {
  StopRelationalDatabaseCommand,
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput,
} from "./commands/StopRelationalDatabaseCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestAlarmCommand, TestAlarmCommandInput, TestAlarmCommandOutput } from "./commands/TestAlarmCommand";
import { UnpeerVpcCommand, UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "./commands/UnpeerVpcCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBucketBundleCommand,
  UpdateBucketBundleCommandInput,
  UpdateBucketBundleCommandOutput,
} from "./commands/UpdateBucketBundleCommand";
import {
  UpdateBucketCommand,
  UpdateBucketCommandInput,
  UpdateBucketCommandOutput,
} from "./commands/UpdateBucketCommand";
import {
  UpdateContainerServiceCommand,
  UpdateContainerServiceCommandInput,
  UpdateContainerServiceCommandOutput,
} from "./commands/UpdateContainerServiceCommand";
import {
  UpdateDistributionBundleCommand,
  UpdateDistributionBundleCommandInput,
  UpdateDistributionBundleCommandOutput,
} from "./commands/UpdateDistributionBundleCommand";
import {
  UpdateDistributionCommand,
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
} from "./commands/UpdateDistributionCommand";
import {
  UpdateDomainEntryCommand,
  UpdateDomainEntryCommandInput,
  UpdateDomainEntryCommandOutput,
} from "./commands/UpdateDomainEntryCommand";
import {
  UpdateInstanceMetadataOptionsCommand,
  UpdateInstanceMetadataOptionsCommandInput,
  UpdateInstanceMetadataOptionsCommandOutput,
} from "./commands/UpdateInstanceMetadataOptionsCommand";
import {
  UpdateLoadBalancerAttributeCommand,
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput,
} from "./commands/UpdateLoadBalancerAttributeCommand";
import {
  UpdateRelationalDatabaseCommand,
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput,
} from "./commands/UpdateRelationalDatabaseCommand";
import {
  UpdateRelationalDatabaseParametersCommand,
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
} from "./commands/UpdateRelationalDatabaseParametersCommand";
import { LightsailClient, LightsailClientConfig } from "./LightsailClient";

const commands = {
  AllocateStaticIpCommand,
  AttachCertificateToDistributionCommand,
  AttachDiskCommand,
  AttachInstancesToLoadBalancerCommand,
  AttachLoadBalancerTlsCertificateCommand,
  AttachStaticIpCommand,
  CloseInstancePublicPortsCommand,
  CopySnapshotCommand,
  CreateBucketCommand,
  CreateBucketAccessKeyCommand,
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
  CreateInstancesCommand,
  CreateInstancesFromSnapshotCommand,
  CreateInstanceSnapshotCommand,
  CreateKeyPairCommand,
  CreateLoadBalancerCommand,
  CreateLoadBalancerTlsCertificateCommand,
  CreateRelationalDatabaseCommand,
  CreateRelationalDatabaseFromSnapshotCommand,
  CreateRelationalDatabaseSnapshotCommand,
  DeleteAlarmCommand,
  DeleteAutoSnapshotCommand,
  DeleteBucketCommand,
  DeleteBucketAccessKeyCommand,
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
  DownloadDefaultKeyPairCommand,
  EnableAddOnCommand,
  ExportSnapshotCommand,
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
  GetDisksCommand,
  GetDiskSnapshotCommand,
  GetDiskSnapshotsCommand,
  GetDistributionBundlesCommand,
  GetDistributionLatestCacheResetCommand,
  GetDistributionMetricDataCommand,
  GetDistributionsCommand,
  GetDomainCommand,
  GetDomainsCommand,
  GetExportSnapshotRecordsCommand,
  GetInstanceCommand,
  GetInstanceAccessDetailsCommand,
  GetInstanceMetricDataCommand,
  GetInstancePortStatesCommand,
  GetInstancesCommand,
  GetInstanceSnapshotCommand,
  GetInstanceSnapshotsCommand,
  GetInstanceStateCommand,
  GetKeyPairCommand,
  GetKeyPairsCommand,
  GetLoadBalancerCommand,
  GetLoadBalancerMetricDataCommand,
  GetLoadBalancersCommand,
  GetLoadBalancerTlsCertificatesCommand,
  GetLoadBalancerTlsPoliciesCommand,
  GetOperationCommand,
  GetOperationsCommand,
  GetOperationsForResourceCommand,
  GetRegionsCommand,
  GetRelationalDatabaseCommand,
  GetRelationalDatabaseBlueprintsCommand,
  GetRelationalDatabaseBundlesCommand,
  GetRelationalDatabaseEventsCommand,
  GetRelationalDatabaseLogEventsCommand,
  GetRelationalDatabaseLogStreamsCommand,
  GetRelationalDatabaseMasterUserPasswordCommand,
  GetRelationalDatabaseMetricDataCommand,
  GetRelationalDatabaseParametersCommand,
  GetRelationalDatabasesCommand,
  GetRelationalDatabaseSnapshotCommand,
  GetRelationalDatabaseSnapshotsCommand,
  GetStaticIpCommand,
  GetStaticIpsCommand,
  ImportKeyPairCommand,
  IsVpcPeeredCommand,
  OpenInstancePublicPortsCommand,
  PeerVpcCommand,
  PutAlarmCommand,
  PutInstancePublicPortsCommand,
  RebootInstanceCommand,
  RebootRelationalDatabaseCommand,
  RegisterContainerImageCommand,
  ReleaseStaticIpCommand,
  ResetDistributionCacheCommand,
  SendContactMethodVerificationCommand,
  SetIpAddressTypeCommand,
  SetResourceAccessForBucketCommand,
  StartGUISessionCommand,
  StartInstanceCommand,
  StartRelationalDatabaseCommand,
  StopGUISessionCommand,
  StopInstanceCommand,
  StopRelationalDatabaseCommand,
  TagResourceCommand,
  TestAlarmCommand,
  UnpeerVpcCommand,
  UntagResourceCommand,
  UpdateBucketCommand,
  UpdateBucketBundleCommand,
  UpdateContainerServiceCommand,
  UpdateDistributionCommand,
  UpdateDistributionBundleCommand,
  UpdateDomainEntryCommand,
  UpdateInstanceMetadataOptionsCommand,
  UpdateLoadBalancerAttributeCommand,
  UpdateRelationalDatabaseCommand,
  UpdateRelationalDatabaseParametersCommand,
};

export interface Lightsail {
  /**
   * @see {@link AllocateStaticIpCommand}
   */
  allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateStaticIpCommandOutput>;
  allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    cb: (err: any, data?: AllocateStaticIpCommandOutput) => void
  ): void;
  allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateStaticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachCertificateToDistributionCommand}
   */
  attachCertificateToDistribution(
    args: AttachCertificateToDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachCertificateToDistributionCommandOutput>;
  attachCertificateToDistribution(
    args: AttachCertificateToDistributionCommandInput,
    cb: (err: any, data?: AttachCertificateToDistributionCommandOutput) => void
  ): void;
  attachCertificateToDistribution(
    args: AttachCertificateToDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachCertificateToDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachDiskCommand}
   */
  attachDisk(args: AttachDiskCommandInput, options?: __HttpHandlerOptions): Promise<AttachDiskCommandOutput>;
  attachDisk(args: AttachDiskCommandInput, cb: (err: any, data?: AttachDiskCommandOutput) => void): void;
  attachDisk(
    args: AttachDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachDiskCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachInstancesToLoadBalancerCommand}
   */
  attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachInstancesToLoadBalancerCommandOutput>;
  attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void
  ): void;
  attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancerTlsCertificateCommand}
   */
  attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancerTlsCertificateCommandOutput>;
  attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachStaticIpCommand}
   */
  attachStaticIp(
    args: AttachStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachStaticIpCommandOutput>;
  attachStaticIp(args: AttachStaticIpCommandInput, cb: (err: any, data?: AttachStaticIpCommandOutput) => void): void;
  attachStaticIp(
    args: AttachStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachStaticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link CloseInstancePublicPortsCommand}
   */
  closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloseInstancePublicPortsCommandOutput>;
  closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void
  ): void;
  closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void
  ): void;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(args: CopySnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopySnapshotCommandOutput>;
  copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
  copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBucketCommand}
   */
  createBucket(args: CreateBucketCommandInput, options?: __HttpHandlerOptions): Promise<CreateBucketCommandOutput>;
  createBucket(args: CreateBucketCommandInput, cb: (err: any, data?: CreateBucketCommandOutput) => void): void;
  createBucket(
    args: CreateBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBucketAccessKeyCommand}
   */
  createBucketAccessKey(
    args: CreateBucketAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBucketAccessKeyCommandOutput>;
  createBucketAccessKey(
    args: CreateBucketAccessKeyCommandInput,
    cb: (err: any, data?: CreateBucketAccessKeyCommandOutput) => void
  ): void;
  createBucketAccessKey(
    args: CreateBucketAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketAccessKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCertificateCommand}
   */
  createCertificate(
    args: CreateCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCertificateCommandOutput>;
  createCertificate(
    args: CreateCertificateCommandInput,
    cb: (err: any, data?: CreateCertificateCommandOutput) => void
  ): void;
  createCertificate(
    args: CreateCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudFormationStackCommand}
   */
  createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFormationStackCommandOutput>;
  createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void
  ): void;
  createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactMethodCommand}
   */
  createContactMethod(
    args: CreateContactMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactMethodCommandOutput>;
  createContactMethod(
    args: CreateContactMethodCommandInput,
    cb: (err: any, data?: CreateContactMethodCommandOutput) => void
  ): void;
  createContactMethod(
    args: CreateContactMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContainerServiceCommand}
   */
  createContainerService(
    args: CreateContainerServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerServiceCommandOutput>;
  createContainerService(
    args: CreateContainerServiceCommandInput,
    cb: (err: any, data?: CreateContainerServiceCommandOutput) => void
  ): void;
  createContainerService(
    args: CreateContainerServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContainerServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContainerServiceDeploymentCommand}
   */
  createContainerServiceDeployment(
    args: CreateContainerServiceDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerServiceDeploymentCommandOutput>;
  createContainerServiceDeployment(
    args: CreateContainerServiceDeploymentCommandInput,
    cb: (err: any, data?: CreateContainerServiceDeploymentCommandOutput) => void
  ): void;
  createContainerServiceDeployment(
    args: CreateContainerServiceDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContainerServiceDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContainerServiceRegistryLoginCommand}
   */
  createContainerServiceRegistryLogin(
    args: CreateContainerServiceRegistryLoginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerServiceRegistryLoginCommandOutput>;
  createContainerServiceRegistryLogin(
    args: CreateContainerServiceRegistryLoginCommandInput,
    cb: (err: any, data?: CreateContainerServiceRegistryLoginCommandOutput) => void
  ): void;
  createContainerServiceRegistryLogin(
    args: CreateContainerServiceRegistryLoginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContainerServiceRegistryLoginCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDiskCommand}
   */
  createDisk(args: CreateDiskCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskCommandOutput>;
  createDisk(args: CreateDiskCommandInput, cb: (err: any, data?: CreateDiskCommandOutput) => void): void;
  createDisk(
    args: CreateDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDiskFromSnapshotCommand}
   */
  createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiskFromSnapshotCommandOutput>;
  createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void
  ): void;
  createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDiskSnapshotCommand}
   */
  createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiskSnapshotCommandOutput>;
  createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void
  ): void;
  createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionCommand}
   */
  createDistribution(
    args: CreateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionCommandOutput>;
  createDistribution(
    args: CreateDistributionCommandInput,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  createDistribution(
    args: CreateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainEntryCommand}
   */
  createDomainEntry(
    args: CreateDomainEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainEntryCommandOutput>;
  createDomainEntry(
    args: CreateDomainEntryCommandInput,
    cb: (err: any, data?: CreateDomainEntryCommandOutput) => void
  ): void;
  createDomainEntry(
    args: CreateDomainEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGUISessionAccessDetailsCommand}
   */
  createGUISessionAccessDetails(
    args: CreateGUISessionAccessDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGUISessionAccessDetailsCommandOutput>;
  createGUISessionAccessDetails(
    args: CreateGUISessionAccessDetailsCommandInput,
    cb: (err: any, data?: CreateGUISessionAccessDetailsCommandOutput) => void
  ): void;
  createGUISessionAccessDetails(
    args: CreateGUISessionAccessDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGUISessionAccessDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstancesCommand}
   */
  createInstances(
    args: CreateInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstancesCommandOutput>;
  createInstances(args: CreateInstancesCommandInput, cb: (err: any, data?: CreateInstancesCommandOutput) => void): void;
  createInstances(
    args: CreateInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstancesFromSnapshotCommand}
   */
  createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstancesFromSnapshotCommandOutput>;
  createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void
  ): void;
  createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceSnapshotCommand}
   */
  createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceSnapshotCommandOutput>;
  createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void
  ): void;
  createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyPairCommand}
   */
  createKeyPair(args: CreateKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyPairCommandOutput>;
  createKeyPair(args: CreateKeyPairCommandInput, cb: (err: any, data?: CreateKeyPairCommandOutput) => void): void;
  createKeyPair(
    args: CreateKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerCommand}
   */
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerCommandOutput>;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoadBalancerTlsCertificateCommand}
   */
  createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerTlsCertificateCommandOutput>;
  createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelationalDatabaseCommand}
   */
  createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationalDatabaseCommandOutput>;
  createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void
  ): void;
  createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelationalDatabaseFromSnapshotCommand}
   */
  createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput>;
  createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotCommandOutput) => void
  ): void;
  createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelationalDatabaseSnapshotCommand}
   */
  createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationalDatabaseSnapshotCommandOutput>;
  createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlarmCommand}
   */
  deleteAlarm(args: DeleteAlarmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlarmCommandOutput>;
  deleteAlarm(args: DeleteAlarmCommandInput, cb: (err: any, data?: DeleteAlarmCommandOutput) => void): void;
  deleteAlarm(
    args: DeleteAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAutoSnapshotCommand}
   */
  deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoSnapshotCommandOutput>;
  deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void
  ): void;
  deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketCommand}
   */
  deleteBucket(args: DeleteBucketCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketCommandOutput>;
  deleteBucket(args: DeleteBucketCommandInput, cb: (err: any, data?: DeleteBucketCommandOutput) => void): void;
  deleteBucket(
    args: DeleteBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketAccessKeyCommand}
   */
  deleteBucketAccessKey(
    args: DeleteBucketAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketAccessKeyCommandOutput>;
  deleteBucketAccessKey(
    args: DeleteBucketAccessKeyCommandInput,
    cb: (err: any, data?: DeleteBucketAccessKeyCommandOutput) => void
  ): void;
  deleteBucketAccessKey(
    args: DeleteBucketAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketAccessKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactMethodCommand}
   */
  deleteContactMethod(
    args: DeleteContactMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactMethodCommandOutput>;
  deleteContactMethod(
    args: DeleteContactMethodCommandInput,
    cb: (err: any, data?: DeleteContactMethodCommandOutput) => void
  ): void;
  deleteContactMethod(
    args: DeleteContactMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContainerImageCommand}
   */
  deleteContainerImage(
    args: DeleteContainerImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerImageCommandOutput>;
  deleteContainerImage(
    args: DeleteContainerImageCommandInput,
    cb: (err: any, data?: DeleteContainerImageCommandOutput) => void
  ): void;
  deleteContainerImage(
    args: DeleteContainerImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContainerServiceCommand}
   */
  deleteContainerService(
    args: DeleteContainerServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerServiceCommandOutput>;
  deleteContainerService(
    args: DeleteContainerServiceCommandInput,
    cb: (err: any, data?: DeleteContainerServiceCommandOutput) => void
  ): void;
  deleteContainerService(
    args: DeleteContainerServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDiskCommand}
   */
  deleteDisk(args: DeleteDiskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDiskCommandOutput>;
  deleteDisk(args: DeleteDiskCommandInput, cb: (err: any, data?: DeleteDiskCommandOutput) => void): void;
  deleteDisk(
    args: DeleteDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDiskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDiskSnapshotCommand}
   */
  deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDiskSnapshotCommandOutput>;
  deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void
  ): void;
  deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDistributionCommand}
   */
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionCommandOutput>;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainEntryCommand}
   */
  deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainEntryCommandOutput>;
  deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void
  ): void;
  deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceCommand}
   */
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceSnapshotCommand}
   */
  deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceSnapshotCommandOutput>;
  deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void
  ): void;
  deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyPairCommand}
   */
  deleteKeyPair(args: DeleteKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeyPairCommandOutput>;
  deleteKeyPair(args: DeleteKeyPairCommandInput, cb: (err: any, data?: DeleteKeyPairCommandOutput) => void): void;
  deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKnownHostKeysCommand}
   */
  deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnownHostKeysCommandOutput>;
  deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void
  ): void;
  deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerCommand}
   */
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerCommandOutput>;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoadBalancerTlsCertificateCommand}
   */
  deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerTlsCertificateCommandOutput>;
  deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRelationalDatabaseCommand}
   */
  deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelationalDatabaseCommandOutput>;
  deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void
  ): void;
  deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRelationalDatabaseSnapshotCommand}
   */
  deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelationalDatabaseSnapshotCommandOutput>;
  deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachCertificateFromDistributionCommand}
   */
  detachCertificateFromDistribution(
    args: DetachCertificateFromDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachCertificateFromDistributionCommandOutput>;
  detachCertificateFromDistribution(
    args: DetachCertificateFromDistributionCommandInput,
    cb: (err: any, data?: DetachCertificateFromDistributionCommandOutput) => void
  ): void;
  detachCertificateFromDistribution(
    args: DetachCertificateFromDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachCertificateFromDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachDiskCommand}
   */
  detachDisk(args: DetachDiskCommandInput, options?: __HttpHandlerOptions): Promise<DetachDiskCommandOutput>;
  detachDisk(args: DetachDiskCommandInput, cb: (err: any, data?: DetachDiskCommandOutput) => void): void;
  detachDisk(
    args: DetachDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachDiskCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachInstancesFromLoadBalancerCommand}
   */
  detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachInstancesFromLoadBalancerCommandOutput>;
  detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void
  ): void;
  detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachStaticIpCommand}
   */
  detachStaticIp(
    args: DetachStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachStaticIpCommandOutput>;
  detachStaticIp(args: DetachStaticIpCommandInput, cb: (err: any, data?: DetachStaticIpCommandOutput) => void): void;
  detachStaticIp(
    args: DetachStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachStaticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAddOnCommand}
   */
  disableAddOn(args: DisableAddOnCommandInput, options?: __HttpHandlerOptions): Promise<DisableAddOnCommandOutput>;
  disableAddOn(args: DisableAddOnCommandInput, cb: (err: any, data?: DisableAddOnCommandOutput) => void): void;
  disableAddOn(
    args: DisableAddOnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAddOnCommandOutput) => void
  ): void;

  /**
   * @see {@link DownloadDefaultKeyPairCommand}
   */
  downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DownloadDefaultKeyPairCommandOutput>;
  downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void
  ): void;
  downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAddOnCommand}
   */
  enableAddOn(args: EnableAddOnCommandInput, options?: __HttpHandlerOptions): Promise<EnableAddOnCommandOutput>;
  enableAddOn(args: EnableAddOnCommandInput, cb: (err: any, data?: EnableAddOnCommandOutput) => void): void;
  enableAddOn(
    args: EnableAddOnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAddOnCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportSnapshotCommand}
   */
  exportSnapshot(
    args: ExportSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportSnapshotCommandOutput>;
  exportSnapshot(args: ExportSnapshotCommandInput, cb: (err: any, data?: ExportSnapshotCommandOutput) => void): void;
  exportSnapshot(
    args: ExportSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActiveNamesCommand}
   */
  getActiveNames(
    args: GetActiveNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActiveNamesCommandOutput>;
  getActiveNames(args: GetActiveNamesCommandInput, cb: (err: any, data?: GetActiveNamesCommandOutput) => void): void;
  getActiveNames(
    args: GetActiveNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActiveNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAlarmsCommand}
   */
  getAlarms(args: GetAlarmsCommandInput, options?: __HttpHandlerOptions): Promise<GetAlarmsCommandOutput>;
  getAlarms(args: GetAlarmsCommandInput, cb: (err: any, data?: GetAlarmsCommandOutput) => void): void;
  getAlarms(
    args: GetAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAlarmsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoSnapshotsCommand}
   */
  getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoSnapshotsCommandOutput>;
  getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void
  ): void;
  getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintsCommand}
   */
  getBlueprints(args: GetBlueprintsCommandInput, options?: __HttpHandlerOptions): Promise<GetBlueprintsCommandOutput>;
  getBlueprints(args: GetBlueprintsCommandInput, cb: (err: any, data?: GetBlueprintsCommandOutput) => void): void;
  getBlueprints(
    args: GetBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketAccessKeysCommand}
   */
  getBucketAccessKeys(
    args: GetBucketAccessKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketAccessKeysCommandOutput>;
  getBucketAccessKeys(
    args: GetBucketAccessKeysCommandInput,
    cb: (err: any, data?: GetBucketAccessKeysCommandOutput) => void
  ): void;
  getBucketAccessKeys(
    args: GetBucketAccessKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketAccessKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketBundlesCommand}
   */
  getBucketBundles(
    args: GetBucketBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketBundlesCommandOutput>;
  getBucketBundles(
    args: GetBucketBundlesCommandInput,
    cb: (err: any, data?: GetBucketBundlesCommandOutput) => void
  ): void;
  getBucketBundles(
    args: GetBucketBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketMetricDataCommand}
   */
  getBucketMetricData(
    args: GetBucketMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketMetricDataCommandOutput>;
  getBucketMetricData(
    args: GetBucketMetricDataCommandInput,
    cb: (err: any, data?: GetBucketMetricDataCommandOutput) => void
  ): void;
  getBucketMetricData(
    args: GetBucketMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketsCommand}
   */
  getBuckets(args: GetBucketsCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketsCommandOutput>;
  getBuckets(args: GetBucketsCommandInput, cb: (err: any, data?: GetBucketsCommandOutput) => void): void;
  getBuckets(
    args: GetBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBundlesCommand}
   */
  getBundles(args: GetBundlesCommandInput, options?: __HttpHandlerOptions): Promise<GetBundlesCommandOutput>;
  getBundles(args: GetBundlesCommandInput, cb: (err: any, data?: GetBundlesCommandOutput) => void): void;
  getBundles(
    args: GetBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificatesCommand}
   */
  getCertificates(
    args: GetCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificatesCommandOutput>;
  getCertificates(args: GetCertificatesCommandInput, cb: (err: any, data?: GetCertificatesCommandOutput) => void): void;
  getCertificates(
    args: GetCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudFormationStackRecordsCommand}
   */
  getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFormationStackRecordsCommandOutput>;
  getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void
  ): void;
  getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactMethodsCommand}
   */
  getContactMethods(
    args: GetContactMethodsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactMethodsCommandOutput>;
  getContactMethods(
    args: GetContactMethodsCommandInput,
    cb: (err: any, data?: GetContactMethodsCommandOutput) => void
  ): void;
  getContactMethods(
    args: GetContactMethodsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactMethodsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerAPIMetadataCommand}
   */
  getContainerAPIMetadata(
    args: GetContainerAPIMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerAPIMetadataCommandOutput>;
  getContainerAPIMetadata(
    args: GetContainerAPIMetadataCommandInput,
    cb: (err: any, data?: GetContainerAPIMetadataCommandOutput) => void
  ): void;
  getContainerAPIMetadata(
    args: GetContainerAPIMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerAPIMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerImagesCommand}
   */
  getContainerImages(
    args: GetContainerImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerImagesCommandOutput>;
  getContainerImages(
    args: GetContainerImagesCommandInput,
    cb: (err: any, data?: GetContainerImagesCommandOutput) => void
  ): void;
  getContainerImages(
    args: GetContainerImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerLogCommand}
   */
  getContainerLog(
    args: GetContainerLogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerLogCommandOutput>;
  getContainerLog(args: GetContainerLogCommandInput, cb: (err: any, data?: GetContainerLogCommandOutput) => void): void;
  getContainerLog(
    args: GetContainerLogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerLogCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerServiceDeploymentsCommand}
   */
  getContainerServiceDeployments(
    args: GetContainerServiceDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerServiceDeploymentsCommandOutput>;
  getContainerServiceDeployments(
    args: GetContainerServiceDeploymentsCommandInput,
    cb: (err: any, data?: GetContainerServiceDeploymentsCommandOutput) => void
  ): void;
  getContainerServiceDeployments(
    args: GetContainerServiceDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerServiceDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerServiceMetricDataCommand}
   */
  getContainerServiceMetricData(
    args: GetContainerServiceMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerServiceMetricDataCommandOutput>;
  getContainerServiceMetricData(
    args: GetContainerServiceMetricDataCommandInput,
    cb: (err: any, data?: GetContainerServiceMetricDataCommandOutput) => void
  ): void;
  getContainerServiceMetricData(
    args: GetContainerServiceMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerServiceMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerServicePowersCommand}
   */
  getContainerServicePowers(
    args: GetContainerServicePowersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerServicePowersCommandOutput>;
  getContainerServicePowers(
    args: GetContainerServicePowersCommandInput,
    cb: (err: any, data?: GetContainerServicePowersCommandOutput) => void
  ): void;
  getContainerServicePowers(
    args: GetContainerServicePowersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerServicePowersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerServicesCommand}
   */
  getContainerServices(
    args: GetContainerServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerServicesCommandOutput>;
  getContainerServices(
    args: GetContainerServicesCommandInput,
    cb: (err: any, data?: GetContainerServicesCommandOutput) => void
  ): void;
  getContainerServices(
    args: GetContainerServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCostEstimateCommand}
   */
  getCostEstimate(
    args: GetCostEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostEstimateCommandOutput>;
  getCostEstimate(args: GetCostEstimateCommandInput, cb: (err: any, data?: GetCostEstimateCommandOutput) => void): void;
  getCostEstimate(
    args: GetCostEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiskCommand}
   */
  getDisk(args: GetDiskCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskCommandOutput>;
  getDisk(args: GetDiskCommandInput, cb: (err: any, data?: GetDiskCommandOutput) => void): void;
  getDisk(
    args: GetDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDisksCommand}
   */
  getDisks(args: GetDisksCommandInput, options?: __HttpHandlerOptions): Promise<GetDisksCommandOutput>;
  getDisks(args: GetDisksCommandInput, cb: (err: any, data?: GetDisksCommandOutput) => void): void;
  getDisks(
    args: GetDisksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDisksCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiskSnapshotCommand}
   */
  getDiskSnapshot(
    args: GetDiskSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiskSnapshotCommandOutput>;
  getDiskSnapshot(args: GetDiskSnapshotCommandInput, cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void): void;
  getDiskSnapshot(
    args: GetDiskSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiskSnapshotsCommand}
   */
  getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiskSnapshotsCommandOutput>;
  getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void
  ): void;
  getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionBundlesCommand}
   */
  getDistributionBundles(
    args: GetDistributionBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionBundlesCommandOutput>;
  getDistributionBundles(
    args: GetDistributionBundlesCommandInput,
    cb: (err: any, data?: GetDistributionBundlesCommandOutput) => void
  ): void;
  getDistributionBundles(
    args: GetDistributionBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionLatestCacheResetCommand}
   */
  getDistributionLatestCacheReset(
    args: GetDistributionLatestCacheResetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionLatestCacheResetCommandOutput>;
  getDistributionLatestCacheReset(
    args: GetDistributionLatestCacheResetCommandInput,
    cb: (err: any, data?: GetDistributionLatestCacheResetCommandOutput) => void
  ): void;
  getDistributionLatestCacheReset(
    args: GetDistributionLatestCacheResetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionLatestCacheResetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionMetricDataCommand}
   */
  getDistributionMetricData(
    args: GetDistributionMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionMetricDataCommandOutput>;
  getDistributionMetricData(
    args: GetDistributionMetricDataCommandInput,
    cb: (err: any, data?: GetDistributionMetricDataCommandOutput) => void
  ): void;
  getDistributionMetricData(
    args: GetDistributionMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionsCommand}
   */
  getDistributions(
    args: GetDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionsCommandOutput>;
  getDistributions(
    args: GetDistributionsCommandInput,
    cb: (err: any, data?: GetDistributionsCommandOutput) => void
  ): void;
  getDistributions(
    args: GetDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
  getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainsCommand}
   */
  getDomains(args: GetDomainsCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainsCommandOutput>;
  getDomains(args: GetDomainsCommandInput, cb: (err: any, data?: GetDomainsCommandOutput) => void): void;
  getDomains(
    args: GetDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportSnapshotRecordsCommand}
   */
  getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExportSnapshotRecordsCommandOutput>;
  getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void
  ): void;
  getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceCommand}
   */
  getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
  getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
  getInstance(
    args: GetInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceAccessDetailsCommand}
   */
  getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceAccessDetailsCommandOutput>;
  getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void
  ): void;
  getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceMetricDataCommand}
   */
  getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceMetricDataCommandOutput>;
  getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void
  ): void;
  getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstancePortStatesCommand}
   */
  getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstancePortStatesCommandOutput>;
  getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void
  ): void;
  getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstancesCommand}
   */
  getInstances(args: GetInstancesCommandInput, options?: __HttpHandlerOptions): Promise<GetInstancesCommandOutput>;
  getInstances(args: GetInstancesCommandInput, cb: (err: any, data?: GetInstancesCommandOutput) => void): void;
  getInstances(
    args: GetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceSnapshotCommand}
   */
  getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceSnapshotCommandOutput>;
  getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void
  ): void;
  getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceSnapshotsCommand}
   */
  getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceSnapshotsCommandOutput>;
  getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void
  ): void;
  getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceStateCommand}
   */
  getInstanceState(
    args: GetInstanceStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceStateCommandOutput>;
  getInstanceState(
    args: GetInstanceStateCommandInput,
    cb: (err: any, data?: GetInstanceStateCommandOutput) => void
  ): void;
  getInstanceState(
    args: GetInstanceStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyPairCommand}
   */
  getKeyPair(args: GetKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPairCommandOutput>;
  getKeyPair(args: GetKeyPairCommandInput, cb: (err: any, data?: GetKeyPairCommandOutput) => void): void;
  getKeyPair(
    args: GetKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyPairsCommand}
   */
  getKeyPairs(args: GetKeyPairsCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPairsCommandOutput>;
  getKeyPairs(args: GetKeyPairsCommandInput, cb: (err: any, data?: GetKeyPairsCommandOutput) => void): void;
  getKeyPairs(
    args: GetKeyPairsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyPairsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoadBalancerCommand}
   */
  getLoadBalancer(
    args: GetLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerCommandOutput>;
  getLoadBalancer(args: GetLoadBalancerCommandInput, cb: (err: any, data?: GetLoadBalancerCommandOutput) => void): void;
  getLoadBalancer(
    args: GetLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoadBalancerMetricDataCommand}
   */
  getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerMetricDataCommandOutput>;
  getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void
  ): void;
  getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoadBalancersCommand}
   */
  getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancersCommandOutput>;
  getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    cb: (err: any, data?: GetLoadBalancersCommandOutput) => void
  ): void;
  getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoadBalancerTlsCertificatesCommand}
   */
  getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerTlsCertificatesCommandOutput>;
  getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void
  ): void;
  getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoadBalancerTlsPoliciesCommand}
   */
  getLoadBalancerTlsPolicies(
    args: GetLoadBalancerTlsPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerTlsPoliciesCommandOutput>;
  getLoadBalancerTlsPolicies(
    args: GetLoadBalancerTlsPoliciesCommandInput,
    cb: (err: any, data?: GetLoadBalancerTlsPoliciesCommandOutput) => void
  ): void;
  getLoadBalancerTlsPolicies(
    args: GetLoadBalancerTlsPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerTlsPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationCommand}
   */
  getOperation(args: GetOperationCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationCommandOutput>;
  getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
  getOperation(
    args: GetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationsCommand}
   */
  getOperations(args: GetOperationsCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationsCommandOutput>;
  getOperations(args: GetOperationsCommandInput, cb: (err: any, data?: GetOperationsCommandOutput) => void): void;
  getOperations(
    args: GetOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperationsForResourceCommand}
   */
  getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationsForResourceCommandOutput>;
  getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void
  ): void;
  getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegionsCommand}
   */
  getRegions(args: GetRegionsCommandInput, options?: __HttpHandlerOptions): Promise<GetRegionsCommandOutput>;
  getRegions(args: GetRegionsCommandInput, cb: (err: any, data?: GetRegionsCommandOutput) => void): void;
  getRegions(
    args: GetRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseCommand}
   */
  getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseCommandOutput>;
  getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void
  ): void;
  getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseBlueprintsCommand}
   */
  getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseBlueprintsCommandOutput>;
  getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void
  ): void;
  getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseBundlesCommand}
   */
  getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseBundlesCommandOutput>;
  getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void
  ): void;
  getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseEventsCommand}
   */
  getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseEventsCommandOutput>;
  getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void
  ): void;
  getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseLogEventsCommand}
   */
  getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseLogEventsCommandOutput>;
  getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void
  ): void;
  getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseLogStreamsCommand}
   */
  getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseLogStreamsCommandOutput>;
  getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void
  ): void;
  getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseMasterUserPasswordCommand}
   */
  getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput>;
  getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordCommandOutput) => void
  ): void;
  getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseMetricDataCommand}
   */
  getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseMetricDataCommandOutput>;
  getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void
  ): void;
  getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseParametersCommand}
   */
  getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseParametersCommandOutput>;
  getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void
  ): void;
  getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabasesCommand}
   */
  getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabasesCommandOutput>;
  getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void
  ): void;
  getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseSnapshotCommand}
   */
  getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseSnapshotCommandOutput>;
  getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRelationalDatabaseSnapshotsCommand}
   */
  getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseSnapshotsCommandOutput>;
  getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void
  ): void;
  getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStaticIpCommand}
   */
  getStaticIp(args: GetStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticIpCommandOutput>;
  getStaticIp(args: GetStaticIpCommandInput, cb: (err: any, data?: GetStaticIpCommandOutput) => void): void;
  getStaticIp(
    args: GetStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStaticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStaticIpsCommand}
   */
  getStaticIps(args: GetStaticIpsCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticIpsCommandOutput>;
  getStaticIps(args: GetStaticIpsCommandInput, cb: (err: any, data?: GetStaticIpsCommandOutput) => void): void;
  getStaticIps(
    args: GetStaticIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStaticIpsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportKeyPairCommand}
   */
  importKeyPair(args: ImportKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<ImportKeyPairCommandOutput>;
  importKeyPair(args: ImportKeyPairCommandInput, cb: (err: any, data?: ImportKeyPairCommandOutput) => void): void;
  importKeyPair(
    args: ImportKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): void;

  /**
   * @see {@link IsVpcPeeredCommand}
   */
  isVpcPeered(args: IsVpcPeeredCommandInput, options?: __HttpHandlerOptions): Promise<IsVpcPeeredCommandOutput>;
  isVpcPeered(args: IsVpcPeeredCommandInput, cb: (err: any, data?: IsVpcPeeredCommandOutput) => void): void;
  isVpcPeered(
    args: IsVpcPeeredCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsVpcPeeredCommandOutput) => void
  ): void;

  /**
   * @see {@link OpenInstancePublicPortsCommand}
   */
  openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OpenInstancePublicPortsCommandOutput>;
  openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void
  ): void;
  openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void
  ): void;

  /**
   * @see {@link PeerVpcCommand}
   */
  peerVpc(args: PeerVpcCommandInput, options?: __HttpHandlerOptions): Promise<PeerVpcCommandOutput>;
  peerVpc(args: PeerVpcCommandInput, cb: (err: any, data?: PeerVpcCommandOutput) => void): void;
  peerVpc(
    args: PeerVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PeerVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAlarmCommand}
   */
  putAlarm(args: PutAlarmCommandInput, options?: __HttpHandlerOptions): Promise<PutAlarmCommandOutput>;
  putAlarm(args: PutAlarmCommandInput, cb: (err: any, data?: PutAlarmCommandOutput) => void): void;
  putAlarm(
    args: PutAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInstancePublicPortsCommand}
   */
  putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInstancePublicPortsCommandOutput>;
  putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void
  ): void;
  putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootInstanceCommand}
   */
  rebootInstance(
    args: RebootInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInstanceCommandOutput>;
  rebootInstance(args: RebootInstanceCommandInput, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
  rebootInstance(
    args: RebootInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootRelationalDatabaseCommand}
   */
  rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootRelationalDatabaseCommandOutput>;
  rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void
  ): void;
  rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterContainerImageCommand}
   */
  registerContainerImage(
    args: RegisterContainerImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterContainerImageCommandOutput>;
  registerContainerImage(
    args: RegisterContainerImageCommandInput,
    cb: (err: any, data?: RegisterContainerImageCommandOutput) => void
  ): void;
  registerContainerImage(
    args: RegisterContainerImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterContainerImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ReleaseStaticIpCommand}
   */
  releaseStaticIp(
    args: ReleaseStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseStaticIpCommandOutput>;
  releaseStaticIp(args: ReleaseStaticIpCommandInput, cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void): void;
  releaseStaticIp(
    args: ReleaseStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDistributionCacheCommand}
   */
  resetDistributionCache(
    args: ResetDistributionCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDistributionCacheCommandOutput>;
  resetDistributionCache(
    args: ResetDistributionCacheCommandInput,
    cb: (err: any, data?: ResetDistributionCacheCommandOutput) => void
  ): void;
  resetDistributionCache(
    args: ResetDistributionCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDistributionCacheCommandOutput) => void
  ): void;

  /**
   * @see {@link SendContactMethodVerificationCommand}
   */
  sendContactMethodVerification(
    args: SendContactMethodVerificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendContactMethodVerificationCommandOutput>;
  sendContactMethodVerification(
    args: SendContactMethodVerificationCommandInput,
    cb: (err: any, data?: SendContactMethodVerificationCommandOutput) => void
  ): void;
  sendContactMethodVerification(
    args: SendContactMethodVerificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendContactMethodVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link SetIpAddressTypeCommand}
   */
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIpAddressTypeCommandOutput>;
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;
  setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link SetResourceAccessForBucketCommand}
   */
  setResourceAccessForBucket(
    args: SetResourceAccessForBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetResourceAccessForBucketCommandOutput>;
  setResourceAccessForBucket(
    args: SetResourceAccessForBucketCommandInput,
    cb: (err: any, data?: SetResourceAccessForBucketCommandOutput) => void
  ): void;
  setResourceAccessForBucket(
    args: SetResourceAccessForBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetResourceAccessForBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link StartGUISessionCommand}
   */
  startGUISession(
    args: StartGUISessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGUISessionCommandOutput>;
  startGUISession(args: StartGUISessionCommandInput, cb: (err: any, data?: StartGUISessionCommandOutput) => void): void;
  startGUISession(
    args: StartGUISessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGUISessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInstanceCommand}
   */
  startInstance(args: StartInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartInstanceCommandOutput>;
  startInstance(args: StartInstanceCommandInput, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
  startInstance(
    args: StartInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRelationalDatabaseCommand}
   */
  startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRelationalDatabaseCommandOutput>;
  startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void
  ): void;
  startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link StopGUISessionCommand}
   */
  stopGUISession(
    args: StopGUISessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopGUISessionCommandOutput>;
  stopGUISession(args: StopGUISessionCommandInput, cb: (err: any, data?: StopGUISessionCommandOutput) => void): void;
  stopGUISession(
    args: StopGUISessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopGUISessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInstanceCommand}
   */
  stopInstance(args: StopInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopInstanceCommandOutput>;
  stopInstance(args: StopInstanceCommandInput, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
  stopInstance(
    args: StopInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRelationalDatabaseCommand}
   */
  stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRelationalDatabaseCommandOutput>;
  stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void
  ): void;
  stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestAlarmCommand}
   */
  testAlarm(args: TestAlarmCommandInput, options?: __HttpHandlerOptions): Promise<TestAlarmCommandOutput>;
  testAlarm(args: TestAlarmCommandInput, cb: (err: any, data?: TestAlarmCommandOutput) => void): void;
  testAlarm(
    args: TestAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link UnpeerVpcCommand}
   */
  unpeerVpc(args: UnpeerVpcCommandInput, options?: __HttpHandlerOptions): Promise<UnpeerVpcCommandOutput>;
  unpeerVpc(args: UnpeerVpcCommandInput, cb: (err: any, data?: UnpeerVpcCommandOutput) => void): void;
  unpeerVpc(
    args: UnpeerVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnpeerVpcCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBucketCommand}
   */
  updateBucket(args: UpdateBucketCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBucketCommandOutput>;
  updateBucket(args: UpdateBucketCommandInput, cb: (err: any, data?: UpdateBucketCommandOutput) => void): void;
  updateBucket(
    args: UpdateBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBucketBundleCommand}
   */
  updateBucketBundle(
    args: UpdateBucketBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBucketBundleCommandOutput>;
  updateBucketBundle(
    args: UpdateBucketBundleCommandInput,
    cb: (err: any, data?: UpdateBucketBundleCommandOutput) => void
  ): void;
  updateBucketBundle(
    args: UpdateBucketBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBucketBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContainerServiceCommand}
   */
  updateContainerService(
    args: UpdateContainerServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContainerServiceCommandOutput>;
  updateContainerService(
    args: UpdateContainerServiceCommandInput,
    cb: (err: any, data?: UpdateContainerServiceCommandOutput) => void
  ): void;
  updateContainerService(
    args: UpdateContainerServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContainerServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionCommand}
   */
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionCommandOutput>;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionBundleCommand}
   */
  updateDistributionBundle(
    args: UpdateDistributionBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionBundleCommandOutput>;
  updateDistributionBundle(
    args: UpdateDistributionBundleCommandInput,
    cb: (err: any, data?: UpdateDistributionBundleCommandOutput) => void
  ): void;
  updateDistributionBundle(
    args: UpdateDistributionBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainEntryCommand}
   */
  updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainEntryCommandOutput>;
  updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void
  ): void;
  updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceMetadataOptionsCommand}
   */
  updateInstanceMetadataOptions(
    args: UpdateInstanceMetadataOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceMetadataOptionsCommandOutput>;
  updateInstanceMetadataOptions(
    args: UpdateInstanceMetadataOptionsCommandInput,
    cb: (err: any, data?: UpdateInstanceMetadataOptionsCommandOutput) => void
  ): void;
  updateInstanceMetadataOptions(
    args: UpdateInstanceMetadataOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceMetadataOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLoadBalancerAttributeCommand}
   */
  updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoadBalancerAttributeCommandOutput>;
  updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void
  ): void;
  updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelationalDatabaseCommand}
   */
  updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelationalDatabaseCommandOutput>;
  updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void
  ): void;
  updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelationalDatabaseParametersCommand}
   */
  updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelationalDatabaseParametersCommandOutput>;
  updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    cb: (err: any, data?: UpdateRelationalDatabaseParametersCommandOutput) => void
  ): void;
  updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelationalDatabaseParametersCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes
 *       everything you need to launch your project quickly - instances (virtual private servers),
 *       container services, storage buckets, managed databases, SSD-based block storage, static IP
 *       addresses, load balancers, content delivery network (CDN) distributions, DNS management of
 *       registered domains, and resource snapshots (backups) - for a low, predictable monthly
 *       price.</p>
 *          <p>You can manage your Lightsail resources using the Lightsail console, Lightsail API,
 *         Command Line Interface (CLI), or SDKs. For more information about Lightsail
 *       concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Amazon Lightsail Developer Guide</a>.</p>
 *          <p>This API Reference provides detailed information about the actions, data types,
 *       parameters, and errors of the Lightsail service. For more information about the supported
 *         Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints
 *         and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export class Lightsail extends LightsailClient implements Lightsail {}
createAggregatedClient(commands, Lightsail);

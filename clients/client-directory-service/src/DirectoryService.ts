// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptSharedDirectoryCommand,
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "./commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommand, AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand";
import { AddRegionCommand, AddRegionCommandInput, AddRegionCommandOutput } from "./commands/AddRegionCommand";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  CancelSchemaExtensionCommand,
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "./commands/CancelSchemaExtensionCommand";
import {
  ConnectDirectoryCommand,
  ConnectDirectoryCommandInput,
  ConnectDirectoryCommandOutput,
} from "./commands/ConnectDirectoryCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateComputerCommand,
  CreateComputerCommandInput,
  CreateComputerCommandOutput,
} from "./commands/CreateComputerCommand";
import {
  CreateConditionalForwarderCommand,
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "./commands/CreateConditionalForwarderCommand";
import {
  CreateDirectoryCommand,
  CreateDirectoryCommandInput,
  CreateDirectoryCommandOutput,
} from "./commands/CreateDirectoryCommand";
import {
  CreateLogSubscriptionCommand,
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "./commands/CreateLogSubscriptionCommand";
import {
  CreateMicrosoftADCommand,
  CreateMicrosoftADCommandInput,
  CreateMicrosoftADCommandOutput,
} from "./commands/CreateMicrosoftADCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import { CreateTrustCommand, CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand";
import {
  DeleteConditionalForwarderCommand,
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "./commands/DeleteConditionalForwarderCommand";
import {
  DeleteDirectoryCommand,
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput,
} from "./commands/DeleteDirectoryCommand";
import {
  DeleteLogSubscriptionCommand,
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "./commands/DeleteLogSubscriptionCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import { DeleteTrustCommand, DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand";
import {
  DeregisterCertificateCommand,
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "./commands/DeregisterCertificateCommand";
import {
  DeregisterEventTopicCommand,
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "./commands/DeregisterEventTopicCommand";
import {
  DescribeCertificateCommand,
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeClientAuthenticationSettingsCommand,
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "./commands/DescribeClientAuthenticationSettingsCommand";
import {
  DescribeConditionalForwardersCommand,
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "./commands/DescribeConditionalForwardersCommand";
import {
  DescribeDirectoriesCommand,
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "./commands/DescribeDirectoriesCommand";
import {
  DescribeDomainControllersCommand,
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "./commands/DescribeDomainControllersCommand";
import {
  DescribeEventTopicsCommand,
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "./commands/DescribeEventTopicsCommand";
import {
  DescribeLDAPSSettingsCommand,
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "./commands/DescribeLDAPSSettingsCommand";
import {
  DescribeRegionsCommand,
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
} from "./commands/DescribeRegionsCommand";
import {
  DescribeSettingsCommand,
  DescribeSettingsCommandInput,
  DescribeSettingsCommandOutput,
} from "./commands/DescribeSettingsCommand";
import {
  DescribeSharedDirectoriesCommand,
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "./commands/DescribeSharedDirectoriesCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeTrustsCommand,
  DescribeTrustsCommandInput,
  DescribeTrustsCommandOutput,
} from "./commands/DescribeTrustsCommand";
import {
  DescribeUpdateDirectoryCommand,
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "./commands/DescribeUpdateDirectoryCommand";
import {
  DisableClientAuthenticationCommand,
  DisableClientAuthenticationCommandInput,
  DisableClientAuthenticationCommandOutput,
} from "./commands/DisableClientAuthenticationCommand";
import {
  DisableLDAPSCommand,
  DisableLDAPSCommandInput,
  DisableLDAPSCommandOutput,
} from "./commands/DisableLDAPSCommand";
import {
  DisableRadiusCommand,
  DisableRadiusCommandInput,
  DisableRadiusCommandOutput,
} from "./commands/DisableRadiusCommand";
import { DisableSsoCommand, DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand";
import {
  EnableClientAuthenticationCommand,
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
} from "./commands/EnableClientAuthenticationCommand";
import { EnableLDAPSCommand, EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand";
import {
  EnableRadiusCommand,
  EnableRadiusCommandInput,
  EnableRadiusCommandOutput,
} from "./commands/EnableRadiusCommand";
import { EnableSsoCommand, EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand";
import {
  GetDirectoryLimitsCommand,
  GetDirectoryLimitsCommandInput,
  GetDirectoryLimitsCommandOutput,
} from "./commands/GetDirectoryLimitsCommand";
import {
  GetSnapshotLimitsCommand,
  GetSnapshotLimitsCommandInput,
  GetSnapshotLimitsCommandOutput,
} from "./commands/GetSnapshotLimitsCommand";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "./commands/ListCertificatesCommand";
import {
  ListIpRoutesCommand,
  ListIpRoutesCommandInput,
  ListIpRoutesCommandOutput,
} from "./commands/ListIpRoutesCommand";
import {
  ListLogSubscriptionsCommand,
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "./commands/ListLogSubscriptionsCommand";
import {
  ListSchemaExtensionsCommand,
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "./commands/ListSchemaExtensionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterCertificateCommand,
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import {
  RegisterEventTopicCommand,
  RegisterEventTopicCommandInput,
  RegisterEventTopicCommandOutput,
} from "./commands/RegisterEventTopicCommand";
import {
  RejectSharedDirectoryCommand,
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "./commands/RejectSharedDirectoryCommand";
import {
  RemoveIpRoutesCommand,
  RemoveIpRoutesCommandInput,
  RemoveIpRoutesCommandOutput,
} from "./commands/RemoveIpRoutesCommand";
import {
  RemoveRegionCommand,
  RemoveRegionCommandInput,
  RemoveRegionCommandOutput,
} from "./commands/RemoveRegionCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetUserPasswordCommand,
  ResetUserPasswordCommandInput,
  ResetUserPasswordCommandOutput,
} from "./commands/ResetUserPasswordCommand";
import {
  RestoreFromSnapshotCommand,
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import {
  ShareDirectoryCommand,
  ShareDirectoryCommandInput,
  ShareDirectoryCommandOutput,
} from "./commands/ShareDirectoryCommand";
import {
  StartSchemaExtensionCommand,
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "./commands/StartSchemaExtensionCommand";
import {
  UnshareDirectoryCommand,
  UnshareDirectoryCommandInput,
  UnshareDirectoryCommandOutput,
} from "./commands/UnshareDirectoryCommand";
import {
  UpdateConditionalForwarderCommand,
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "./commands/UpdateConditionalForwarderCommand";
import {
  UpdateDirectorySetupCommand,
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
} from "./commands/UpdateDirectorySetupCommand";
import {
  UpdateNumberOfDomainControllersCommand,
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "./commands/UpdateNumberOfDomainControllersCommand";
import {
  UpdateRadiusCommand,
  UpdateRadiusCommandInput,
  UpdateRadiusCommandOutput,
} from "./commands/UpdateRadiusCommand";
import {
  UpdateSettingsCommand,
  UpdateSettingsCommandInput,
  UpdateSettingsCommandOutput,
} from "./commands/UpdateSettingsCommand";
import { UpdateTrustCommand, UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand";
import { VerifyTrustCommand, VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand";
import { DirectoryServiceClient, DirectoryServiceClientConfig } from "./DirectoryServiceClient";

const commands = {
  AcceptSharedDirectoryCommand,
  AddIpRoutesCommand,
  AddRegionCommand,
  AddTagsToResourceCommand,
  CancelSchemaExtensionCommand,
  ConnectDirectoryCommand,
  CreateAliasCommand,
  CreateComputerCommand,
  CreateConditionalForwarderCommand,
  CreateDirectoryCommand,
  CreateLogSubscriptionCommand,
  CreateMicrosoftADCommand,
  CreateSnapshotCommand,
  CreateTrustCommand,
  DeleteConditionalForwarderCommand,
  DeleteDirectoryCommand,
  DeleteLogSubscriptionCommand,
  DeleteSnapshotCommand,
  DeleteTrustCommand,
  DeregisterCertificateCommand,
  DeregisterEventTopicCommand,
  DescribeCertificateCommand,
  DescribeClientAuthenticationSettingsCommand,
  DescribeConditionalForwardersCommand,
  DescribeDirectoriesCommand,
  DescribeDomainControllersCommand,
  DescribeEventTopicsCommand,
  DescribeLDAPSSettingsCommand,
  DescribeRegionsCommand,
  DescribeSettingsCommand,
  DescribeSharedDirectoriesCommand,
  DescribeSnapshotsCommand,
  DescribeTrustsCommand,
  DescribeUpdateDirectoryCommand,
  DisableClientAuthenticationCommand,
  DisableLDAPSCommand,
  DisableRadiusCommand,
  DisableSsoCommand,
  EnableClientAuthenticationCommand,
  EnableLDAPSCommand,
  EnableRadiusCommand,
  EnableSsoCommand,
  GetDirectoryLimitsCommand,
  GetSnapshotLimitsCommand,
  ListCertificatesCommand,
  ListIpRoutesCommand,
  ListLogSubscriptionsCommand,
  ListSchemaExtensionsCommand,
  ListTagsForResourceCommand,
  RegisterCertificateCommand,
  RegisterEventTopicCommand,
  RejectSharedDirectoryCommand,
  RemoveIpRoutesCommand,
  RemoveRegionCommand,
  RemoveTagsFromResourceCommand,
  ResetUserPasswordCommand,
  RestoreFromSnapshotCommand,
  ShareDirectoryCommand,
  StartSchemaExtensionCommand,
  UnshareDirectoryCommand,
  UpdateConditionalForwarderCommand,
  UpdateDirectorySetupCommand,
  UpdateNumberOfDomainControllersCommand,
  UpdateRadiusCommand,
  UpdateSettingsCommand,
  UpdateTrustCommand,
  VerifyTrustCommand,
};

export interface DirectoryService {
  /**
   * @see {@link AcceptSharedDirectoryCommand}
   */
  acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptSharedDirectoryCommandOutput>;
  acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    cb: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void
  ): void;
  acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link AddIpRoutesCommand}
   */
  addIpRoutes(args: AddIpRoutesCommandInput, options?: __HttpHandlerOptions): Promise<AddIpRoutesCommandOutput>;
  addIpRoutes(args: AddIpRoutesCommandInput, cb: (err: any, data?: AddIpRoutesCommandOutput) => void): void;
  addIpRoutes(
    args: AddIpRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddIpRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link AddRegionCommand}
   */
  addRegion(args: AddRegionCommandInput, options?: __HttpHandlerOptions): Promise<AddRegionCommandOutput>;
  addRegion(args: AddRegionCommandInput, cb: (err: any, data?: AddRegionCommandOutput) => void): void;
  addRegion(
    args: AddRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSchemaExtensionCommand}
   */
  cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSchemaExtensionCommandOutput>;
  cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    cb: (err: any, data?: CancelSchemaExtensionCommandOutput) => void
  ): void;
  cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSchemaExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link ConnectDirectoryCommand}
   */
  connectDirectory(
    args: ConnectDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConnectDirectoryCommandOutput>;
  connectDirectory(
    args: ConnectDirectoryCommandInput,
    cb: (err: any, data?: ConnectDirectoryCommandOutput) => void
  ): void;
  connectDirectory(
    args: ConnectDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConnectDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComputerCommand}
   */
  createComputer(
    args: CreateComputerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputerCommandOutput>;
  createComputer(args: CreateComputerCommandInput, cb: (err: any, data?: CreateComputerCommandOutput) => void): void;
  createComputer(
    args: CreateComputerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConditionalForwarderCommand}
   */
  createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConditionalForwarderCommandOutput>;
  createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    cb: (err: any, data?: CreateConditionalForwarderCommandOutput) => void
  ): void;
  createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConditionalForwarderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectoryCommand}
   */
  createDirectory(
    args: CreateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryCommandOutput>;
  createDirectory(args: CreateDirectoryCommandInput, cb: (err: any, data?: CreateDirectoryCommandOutput) => void): void;
  createDirectory(
    args: CreateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogSubscriptionCommand}
   */
  createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogSubscriptionCommandOutput>;
  createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    cb: (err: any, data?: CreateLogSubscriptionCommandOutput) => void
  ): void;
  createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMicrosoftADCommand}
   */
  createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMicrosoftADCommandOutput>;
  createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    cb: (err: any, data?: CreateMicrosoftADCommandOutput) => void
  ): void;
  createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMicrosoftADCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustCommand}
   */
  createTrust(args: CreateTrustCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrustCommandOutput>;
  createTrust(args: CreateTrustCommandInput, cb: (err: any, data?: CreateTrustCommandOutput) => void): void;
  createTrust(
    args: CreateTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConditionalForwarderCommand}
   */
  deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConditionalForwarderCommandOutput>;
  deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    cb: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void
  ): void;
  deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectoryCommand}
   */
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryCommandOutput>;
  deleteDirectory(args: DeleteDirectoryCommandInput, cb: (err: any, data?: DeleteDirectoryCommandOutput) => void): void;
  deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLogSubscriptionCommand}
   */
  deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogSubscriptionCommandOutput>;
  deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    cb: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void
  ): void;
  deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustCommand}
   */
  deleteTrust(args: DeleteTrustCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrustCommandOutput>;
  deleteTrust(args: DeleteTrustCommandInput, cb: (err: any, data?: DeleteTrustCommandOutput) => void): void;
  deleteTrust(
    args: DeleteTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterCertificateCommand}
   */
  deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterCertificateCommandOutput>;
  deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    cb: (err: any, data?: DeregisterCertificateCommandOutput) => void
  ): void;
  deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterEventTopicCommand}
   */
  deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterEventTopicCommandOutput>;
  deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    cb: (err: any, data?: DeregisterEventTopicCommandOutput) => void
  ): void;
  deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterEventTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateCommand}
   */
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientAuthenticationSettingsCommand}
   */
  describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientAuthenticationSettingsCommandOutput>;
  describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    cb: (err: any, data?: DescribeClientAuthenticationSettingsCommandOutput) => void
  ): void;
  describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientAuthenticationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConditionalForwardersCommand}
   */
  describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConditionalForwardersCommandOutput>;
  describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    cb: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void
  ): void;
  describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectoriesCommand}
   */
  describeDirectories(
    args: DescribeDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectoriesCommandOutput>;
  describeDirectories(
    args: DescribeDirectoriesCommandInput,
    cb: (err: any, data?: DescribeDirectoriesCommandOutput) => void
  ): void;
  describeDirectories(
    args: DescribeDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainControllersCommand}
   */
  describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainControllersCommandOutput>;
  describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    cb: (err: any, data?: DescribeDomainControllersCommandOutput) => void
  ): void;
  describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainControllersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventTopicsCommand}
   */
  describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventTopicsCommandOutput>;
  describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    cb: (err: any, data?: DescribeEventTopicsCommandOutput) => void
  ): void;
  describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLDAPSSettingsCommand}
   */
  describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLDAPSSettingsCommandOutput>;
  describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    cb: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void
  ): void;
  describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegionsCommand}
   */
  describeRegions(
    args: DescribeRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionsCommandOutput>;
  describeRegions(args: DescribeRegionsCommandInput, cb: (err: any, data?: DescribeRegionsCommandOutput) => void): void;
  describeRegions(
    args: DescribeRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSettingsCommand}
   */
  describeSettings(
    args: DescribeSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSettingsCommandOutput>;
  describeSettings(
    args: DescribeSettingsCommandInput,
    cb: (err: any, data?: DescribeSettingsCommandOutput) => void
  ): void;
  describeSettings(
    args: DescribeSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSharedDirectoriesCommand}
   */
  describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSharedDirectoriesCommandOutput>;
  describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    cb: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void
  ): void;
  describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrustsCommand}
   */
  describeTrusts(
    args: DescribeTrustsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustsCommandOutput>;
  describeTrusts(args: DescribeTrustsCommandInput, cb: (err: any, data?: DescribeTrustsCommandOutput) => void): void;
  describeTrusts(
    args: DescribeTrustsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUpdateDirectoryCommand}
   */
  describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateDirectoryCommandOutput>;
  describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    cb: (err: any, data?: DescribeUpdateDirectoryCommandOutput) => void
  ): void;
  describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableClientAuthenticationCommand}
   */
  disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableClientAuthenticationCommandOutput>;
  disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    cb: (err: any, data?: DisableClientAuthenticationCommandOutput) => void
  ): void;
  disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableClientAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableLDAPSCommand}
   */
  disableLDAPS(args: DisableLDAPSCommandInput, options?: __HttpHandlerOptions): Promise<DisableLDAPSCommandOutput>;
  disableLDAPS(args: DisableLDAPSCommandInput, cb: (err: any, data?: DisableLDAPSCommandOutput) => void): void;
  disableLDAPS(
    args: DisableLDAPSCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableLDAPSCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableRadiusCommand}
   */
  disableRadius(args: DisableRadiusCommandInput, options?: __HttpHandlerOptions): Promise<DisableRadiusCommandOutput>;
  disableRadius(args: DisableRadiusCommandInput, cb: (err: any, data?: DisableRadiusCommandOutput) => void): void;
  disableRadius(
    args: DisableRadiusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRadiusCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSsoCommand}
   */
  disableSso(args: DisableSsoCommandInput, options?: __HttpHandlerOptions): Promise<DisableSsoCommandOutput>;
  disableSso(args: DisableSsoCommandInput, cb: (err: any, data?: DisableSsoCommandOutput) => void): void;
  disableSso(
    args: DisableSsoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSsoCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableClientAuthenticationCommand}
   */
  enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableClientAuthenticationCommandOutput>;
  enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    cb: (err: any, data?: EnableClientAuthenticationCommandOutput) => void
  ): void;
  enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableClientAuthenticationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableLDAPSCommand}
   */
  enableLDAPS(args: EnableLDAPSCommandInput, options?: __HttpHandlerOptions): Promise<EnableLDAPSCommandOutput>;
  enableLDAPS(args: EnableLDAPSCommandInput, cb: (err: any, data?: EnableLDAPSCommandOutput) => void): void;
  enableLDAPS(
    args: EnableLDAPSCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableLDAPSCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableRadiusCommand}
   */
  enableRadius(args: EnableRadiusCommandInput, options?: __HttpHandlerOptions): Promise<EnableRadiusCommandOutput>;
  enableRadius(args: EnableRadiusCommandInput, cb: (err: any, data?: EnableRadiusCommandOutput) => void): void;
  enableRadius(
    args: EnableRadiusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRadiusCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSsoCommand}
   */
  enableSso(args: EnableSsoCommandInput, options?: __HttpHandlerOptions): Promise<EnableSsoCommandOutput>;
  enableSso(args: EnableSsoCommandInput, cb: (err: any, data?: EnableSsoCommandOutput) => void): void;
  enableSso(
    args: EnableSsoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSsoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDirectoryLimitsCommand}
   */
  getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDirectoryLimitsCommandOutput>;
  getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    cb: (err: any, data?: GetDirectoryLimitsCommandOutput) => void
  ): void;
  getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectoryLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotLimitsCommand}
   */
  getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnapshotLimitsCommandOutput>;
  getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    cb: (err: any, data?: GetSnapshotLimitsCommandOutput) => void
  ): void;
  getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificatesCommand}
   */
  listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIpRoutesCommand}
   */
  listIpRoutes(args: ListIpRoutesCommandInput, options?: __HttpHandlerOptions): Promise<ListIpRoutesCommandOutput>;
  listIpRoutes(args: ListIpRoutesCommandInput, cb: (err: any, data?: ListIpRoutesCommandOutput) => void): void;
  listIpRoutes(
    args: ListIpRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIpRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogSubscriptionsCommand}
   */
  listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogSubscriptionsCommandOutput>;
  listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    cb: (err: any, data?: ListLogSubscriptionsCommandOutput) => void
  ): void;
  listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaExtensionsCommand}
   */
  listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaExtensionsCommandOutput>;
  listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    cb: (err: any, data?: ListSchemaExtensionsCommandOutput) => void
  ): void;
  listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaExtensionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCertificateCommand}
   */
  registerCertificate(
    args: RegisterCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCertificateCommandOutput>;
  registerCertificate(
    args: RegisterCertificateCommandInput,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;
  registerCertificate(
    args: RegisterCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterEventTopicCommand}
   */
  registerEventTopic(
    args: RegisterEventTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterEventTopicCommandOutput>;
  registerEventTopic(
    args: RegisterEventTopicCommandInput,
    cb: (err: any, data?: RegisterEventTopicCommandOutput) => void
  ): void;
  registerEventTopic(
    args: RegisterEventTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterEventTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectSharedDirectoryCommand}
   */
  rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectSharedDirectoryCommandOutput>;
  rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    cb: (err: any, data?: RejectSharedDirectoryCommandOutput) => void
  ): void;
  rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectSharedDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveIpRoutesCommand}
   */
  removeIpRoutes(
    args: RemoveIpRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveIpRoutesCommandOutput>;
  removeIpRoutes(args: RemoveIpRoutesCommandInput, cb: (err: any, data?: RemoveIpRoutesCommandOutput) => void): void;
  removeIpRoutes(
    args: RemoveIpRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveIpRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRegionCommand}
   */
  removeRegion(args: RemoveRegionCommandInput, options?: __HttpHandlerOptions): Promise<RemoveRegionCommandOutput>;
  removeRegion(args: RemoveRegionCommandInput, cb: (err: any, data?: RemoveRegionCommandOutput) => void): void;
  removeRegion(
    args: RemoveRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetUserPasswordCommand}
   */
  resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetUserPasswordCommandOutput>;
  resetUserPassword(
    args: ResetUserPasswordCommandInput,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;
  resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFromSnapshotCommand}
   */
  restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromSnapshotCommandOutput>;
  restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): void;
  restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ShareDirectoryCommand}
   */
  shareDirectory(
    args: ShareDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ShareDirectoryCommandOutput>;
  shareDirectory(args: ShareDirectoryCommandInput, cb: (err: any, data?: ShareDirectoryCommandOutput) => void): void;
  shareDirectory(
    args: ShareDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ShareDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSchemaExtensionCommand}
   */
  startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSchemaExtensionCommandOutput>;
  startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    cb: (err: any, data?: StartSchemaExtensionCommandOutput) => void
  ): void;
  startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSchemaExtensionCommandOutput) => void
  ): void;

  /**
   * @see {@link UnshareDirectoryCommand}
   */
  unshareDirectory(
    args: UnshareDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnshareDirectoryCommandOutput>;
  unshareDirectory(
    args: UnshareDirectoryCommandInput,
    cb: (err: any, data?: UnshareDirectoryCommandOutput) => void
  ): void;
  unshareDirectory(
    args: UnshareDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnshareDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConditionalForwarderCommand}
   */
  updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConditionalForwarderCommandOutput>;
  updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    cb: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void
  ): void;
  updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectorySetupCommand}
   */
  updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectorySetupCommandOutput>;
  updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    cb: (err: any, data?: UpdateDirectorySetupCommandOutput) => void
  ): void;
  updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectorySetupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNumberOfDomainControllersCommand}
   */
  updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNumberOfDomainControllersCommandOutput>;
  updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    cb: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void
  ): void;
  updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRadiusCommand}
   */
  updateRadius(args: UpdateRadiusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRadiusCommandOutput>;
  updateRadius(args: UpdateRadiusCommandInput, cb: (err: any, data?: UpdateRadiusCommandOutput) => void): void;
  updateRadius(
    args: UpdateRadiusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRadiusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSettingsCommand}
   */
  updateSettings(
    args: UpdateSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSettingsCommandOutput>;
  updateSettings(args: UpdateSettingsCommandInput, cb: (err: any, data?: UpdateSettingsCommandOutput) => void): void;
  updateSettings(
    args: UpdateSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustCommand}
   */
  updateTrust(args: UpdateTrustCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrustCommandOutput>;
  updateTrust(args: UpdateTrustCommandInput, cb: (err: any, data?: UpdateTrustCommandOutput) => void): void;
  updateTrust(
    args: UpdateTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyTrustCommand}
   */
  verifyTrust(args: VerifyTrustCommandInput, options?: __HttpHandlerOptions): Promise<VerifyTrustCommandOutput>;
  verifyTrust(args: VerifyTrustCommandInput, cb: (err: any, data?: VerifyTrustCommandOutput) => void): void;
  verifyTrust(
    args: VerifyTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyTrustCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Directory Service</fullname>
 *          <p>Directory Service is a web service that makes it easy for you to setup and run directories in the
 *          Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active
 *          Directory. This guide provides detailed information about Directory Service operations, data types,
 *          parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service
 *             Administration Guide</a>.</p>
 *          <note>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various
 *             programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs
 *             provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services
 *             services. For more information about the Amazon Web Services SDKs, including how to download and
 *             install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *                Services</a>.</p>
 *          </note>
 */
export class DirectoryService extends DirectoryServiceClient implements DirectoryService {}
createAggregatedClient(commands, DirectoryService);

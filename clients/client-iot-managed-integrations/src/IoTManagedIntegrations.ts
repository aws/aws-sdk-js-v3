// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateCredentialLockerCommand,
  CreateCredentialLockerCommandInput,
  CreateCredentialLockerCommandOutput,
} from "./commands/CreateCredentialLockerCommand";
import {
  CreateDestinationCommand,
  CreateDestinationCommandInput,
  CreateDestinationCommandOutput,
} from "./commands/CreateDestinationCommand";
import {
  CreateEventLogConfigurationCommand,
  CreateEventLogConfigurationCommandInput,
  CreateEventLogConfigurationCommandOutput,
} from "./commands/CreateEventLogConfigurationCommand";
import {
  CreateManagedThingCommand,
  CreateManagedThingCommandInput,
  CreateManagedThingCommandOutput,
} from "./commands/CreateManagedThingCommand";
import {
  CreateNotificationConfigurationCommand,
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "./commands/CreateNotificationConfigurationCommand";
import {
  CreateOtaTaskCommand,
  CreateOtaTaskCommandInput,
  CreateOtaTaskCommandOutput,
} from "./commands/CreateOtaTaskCommand";
import {
  CreateOtaTaskConfigurationCommand,
  CreateOtaTaskConfigurationCommandInput,
  CreateOtaTaskConfigurationCommandOutput,
} from "./commands/CreateOtaTaskConfigurationCommand";
import {
  CreateProvisioningProfileCommand,
  CreateProvisioningProfileCommandInput,
  CreateProvisioningProfileCommandOutput,
} from "./commands/CreateProvisioningProfileCommand";
import {
  DeleteCredentialLockerCommand,
  DeleteCredentialLockerCommandInput,
  DeleteCredentialLockerCommandOutput,
} from "./commands/DeleteCredentialLockerCommand";
import {
  DeleteDestinationCommand,
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import {
  DeleteEventLogConfigurationCommand,
  DeleteEventLogConfigurationCommandInput,
  DeleteEventLogConfigurationCommandOutput,
} from "./commands/DeleteEventLogConfigurationCommand";
import {
  DeleteManagedThingCommand,
  DeleteManagedThingCommandInput,
  DeleteManagedThingCommandOutput,
} from "./commands/DeleteManagedThingCommand";
import {
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  DeleteOtaTaskCommand,
  DeleteOtaTaskCommandInput,
  DeleteOtaTaskCommandOutput,
} from "./commands/DeleteOtaTaskCommand";
import {
  DeleteOtaTaskConfigurationCommand,
  DeleteOtaTaskConfigurationCommandInput,
  DeleteOtaTaskConfigurationCommandOutput,
} from "./commands/DeleteOtaTaskConfigurationCommand";
import {
  DeleteProvisioningProfileCommand,
  DeleteProvisioningProfileCommandInput,
  DeleteProvisioningProfileCommandOutput,
} from "./commands/DeleteProvisioningProfileCommand";
import {
  GetCredentialLockerCommand,
  GetCredentialLockerCommandInput,
  GetCredentialLockerCommandOutput,
} from "./commands/GetCredentialLockerCommand";
import {
  GetCustomEndpointCommand,
  GetCustomEndpointCommandInput,
  GetCustomEndpointCommandOutput,
} from "./commands/GetCustomEndpointCommand";
import {
  GetDefaultEncryptionConfigurationCommand,
  GetDefaultEncryptionConfigurationCommandInput,
  GetDefaultEncryptionConfigurationCommandOutput,
} from "./commands/GetDefaultEncryptionConfigurationCommand";
import {
  GetDestinationCommand,
  GetDestinationCommandInput,
  GetDestinationCommandOutput,
} from "./commands/GetDestinationCommand";
import {
  GetDeviceDiscoveryCommand,
  GetDeviceDiscoveryCommandInput,
  GetDeviceDiscoveryCommandOutput,
} from "./commands/GetDeviceDiscoveryCommand";
import {
  GetEventLogConfigurationCommand,
  GetEventLogConfigurationCommandInput,
  GetEventLogConfigurationCommandOutput,
} from "./commands/GetEventLogConfigurationCommand";
import {
  GetHubConfigurationCommand,
  GetHubConfigurationCommandInput,
  GetHubConfigurationCommandOutput,
} from "./commands/GetHubConfigurationCommand";
import {
  GetManagedThingCapabilitiesCommand,
  GetManagedThingCapabilitiesCommandInput,
  GetManagedThingCapabilitiesCommandOutput,
} from "./commands/GetManagedThingCapabilitiesCommand";
import {
  GetManagedThingCommand,
  GetManagedThingCommandInput,
  GetManagedThingCommandOutput,
} from "./commands/GetManagedThingCommand";
import {
  GetManagedThingConnectivityDataCommand,
  GetManagedThingConnectivityDataCommandInput,
  GetManagedThingConnectivityDataCommandOutput,
} from "./commands/GetManagedThingConnectivityDataCommand";
import {
  GetManagedThingMetaDataCommand,
  GetManagedThingMetaDataCommandInput,
  GetManagedThingMetaDataCommandOutput,
} from "./commands/GetManagedThingMetaDataCommand";
import {
  GetManagedThingStateCommand,
  GetManagedThingStateCommandInput,
  GetManagedThingStateCommandOutput,
} from "./commands/GetManagedThingStateCommand";
import {
  GetNotificationConfigurationCommand,
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import { GetOtaTaskCommand, GetOtaTaskCommandInput, GetOtaTaskCommandOutput } from "./commands/GetOtaTaskCommand";
import {
  GetOtaTaskConfigurationCommand,
  GetOtaTaskConfigurationCommandInput,
  GetOtaTaskConfigurationCommandOutput,
} from "./commands/GetOtaTaskConfigurationCommand";
import {
  GetProvisioningProfileCommand,
  GetProvisioningProfileCommandInput,
  GetProvisioningProfileCommandOutput,
} from "./commands/GetProvisioningProfileCommand";
import {
  GetRuntimeLogConfigurationCommand,
  GetRuntimeLogConfigurationCommandInput,
  GetRuntimeLogConfigurationCommandOutput,
} from "./commands/GetRuntimeLogConfigurationCommand";
import {
  GetSchemaVersionCommand,
  GetSchemaVersionCommandInput,
  GetSchemaVersionCommandOutput,
} from "./commands/GetSchemaVersionCommand";
import {
  ListCredentialLockersCommand,
  ListCredentialLockersCommandInput,
  ListCredentialLockersCommandOutput,
} from "./commands/ListCredentialLockersCommand";
import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "./commands/ListDestinationsCommand";
import {
  ListEventLogConfigurationsCommand,
  ListEventLogConfigurationsCommandInput,
  ListEventLogConfigurationsCommandOutput,
} from "./commands/ListEventLogConfigurationsCommand";
import {
  ListManagedThingSchemasCommand,
  ListManagedThingSchemasCommandInput,
  ListManagedThingSchemasCommandOutput,
} from "./commands/ListManagedThingSchemasCommand";
import {
  ListManagedThingsCommand,
  ListManagedThingsCommandInput,
  ListManagedThingsCommandOutput,
} from "./commands/ListManagedThingsCommand";
import {
  ListNotificationConfigurationsCommand,
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "./commands/ListNotificationConfigurationsCommand";
import {
  ListOtaTaskConfigurationsCommand,
  ListOtaTaskConfigurationsCommandInput,
  ListOtaTaskConfigurationsCommandOutput,
} from "./commands/ListOtaTaskConfigurationsCommand";
import {
  ListOtaTaskExecutionsCommand,
  ListOtaTaskExecutionsCommandInput,
  ListOtaTaskExecutionsCommandOutput,
} from "./commands/ListOtaTaskExecutionsCommand";
import {
  ListOtaTasksCommand,
  ListOtaTasksCommandInput,
  ListOtaTasksCommandOutput,
} from "./commands/ListOtaTasksCommand";
import {
  ListProvisioningProfilesCommand,
  ListProvisioningProfilesCommandInput,
  ListProvisioningProfilesCommandOutput,
} from "./commands/ListProvisioningProfilesCommand";
import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "./commands/ListSchemaVersionsCommand";
import {
  PutDefaultEncryptionConfigurationCommand,
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import {
  PutHubConfigurationCommand,
  PutHubConfigurationCommandInput,
  PutHubConfigurationCommandOutput,
} from "./commands/PutHubConfigurationCommand";
import {
  PutRuntimeLogConfigurationCommand,
  PutRuntimeLogConfigurationCommandInput,
  PutRuntimeLogConfigurationCommandOutput,
} from "./commands/PutRuntimeLogConfigurationCommand";
import {
  RegisterCustomEndpointCommand,
  RegisterCustomEndpointCommandInput,
  RegisterCustomEndpointCommandOutput,
} from "./commands/RegisterCustomEndpointCommand";
import {
  ResetRuntimeLogConfigurationCommand,
  ResetRuntimeLogConfigurationCommandInput,
  ResetRuntimeLogConfigurationCommandOutput,
} from "./commands/ResetRuntimeLogConfigurationCommand";
import {
  SendManagedThingCommandCommand,
  SendManagedThingCommandCommandInput,
  SendManagedThingCommandCommandOutput,
} from "./commands/SendManagedThingCommandCommand";
import {
  StartDeviceDiscoveryCommand,
  StartDeviceDiscoveryCommandInput,
  StartDeviceDiscoveryCommandOutput,
} from "./commands/StartDeviceDiscoveryCommand";
import {
  UpdateDestinationCommand,
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
} from "./commands/UpdateDestinationCommand";
import {
  UpdateEventLogConfigurationCommand,
  UpdateEventLogConfigurationCommandInput,
  UpdateEventLogConfigurationCommandOutput,
} from "./commands/UpdateEventLogConfigurationCommand";
import {
  UpdateManagedThingCommand,
  UpdateManagedThingCommandInput,
  UpdateManagedThingCommandOutput,
} from "./commands/UpdateManagedThingCommand";
import {
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
import {
  UpdateOtaTaskCommand,
  UpdateOtaTaskCommandInput,
  UpdateOtaTaskCommandOutput,
} from "./commands/UpdateOtaTaskCommand";
import { IoTManagedIntegrationsClient, IoTManagedIntegrationsClientConfig } from "./IoTManagedIntegrationsClient";

const commands = {
  CreateCredentialLockerCommand,
  CreateDestinationCommand,
  CreateEventLogConfigurationCommand,
  CreateManagedThingCommand,
  CreateNotificationConfigurationCommand,
  CreateOtaTaskCommand,
  CreateOtaTaskConfigurationCommand,
  CreateProvisioningProfileCommand,
  DeleteCredentialLockerCommand,
  DeleteDestinationCommand,
  DeleteEventLogConfigurationCommand,
  DeleteManagedThingCommand,
  DeleteNotificationConfigurationCommand,
  DeleteOtaTaskCommand,
  DeleteOtaTaskConfigurationCommand,
  DeleteProvisioningProfileCommand,
  GetCredentialLockerCommand,
  GetCustomEndpointCommand,
  GetDefaultEncryptionConfigurationCommand,
  GetDestinationCommand,
  GetDeviceDiscoveryCommand,
  GetEventLogConfigurationCommand,
  GetHubConfigurationCommand,
  GetManagedThingCommand,
  GetManagedThingCapabilitiesCommand,
  GetManagedThingConnectivityDataCommand,
  GetManagedThingMetaDataCommand,
  GetManagedThingStateCommand,
  GetNotificationConfigurationCommand,
  GetOtaTaskCommand,
  GetOtaTaskConfigurationCommand,
  GetProvisioningProfileCommand,
  GetRuntimeLogConfigurationCommand,
  GetSchemaVersionCommand,
  ListCredentialLockersCommand,
  ListDestinationsCommand,
  ListEventLogConfigurationsCommand,
  ListManagedThingsCommand,
  ListManagedThingSchemasCommand,
  ListNotificationConfigurationsCommand,
  ListOtaTaskConfigurationsCommand,
  ListOtaTaskExecutionsCommand,
  ListOtaTasksCommand,
  ListProvisioningProfilesCommand,
  ListSchemaVersionsCommand,
  PutDefaultEncryptionConfigurationCommand,
  PutHubConfigurationCommand,
  PutRuntimeLogConfigurationCommand,
  RegisterCustomEndpointCommand,
  ResetRuntimeLogConfigurationCommand,
  SendManagedThingCommandCommand,
  StartDeviceDiscoveryCommand,
  UpdateDestinationCommand,
  UpdateEventLogConfigurationCommand,
  UpdateManagedThingCommand,
  UpdateNotificationConfigurationCommand,
  UpdateOtaTaskCommand,
};

export interface IoTManagedIntegrations {
  /**
   * @see {@link CreateCredentialLockerCommand}
   */
  createCredentialLocker(): Promise<CreateCredentialLockerCommandOutput>;
  createCredentialLocker(
    args: CreateCredentialLockerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCredentialLockerCommandOutput>;
  createCredentialLocker(
    args: CreateCredentialLockerCommandInput,
    cb: (err: any, data?: CreateCredentialLockerCommandOutput) => void
  ): void;
  createCredentialLocker(
    args: CreateCredentialLockerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCredentialLockerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDestinationCommand}
   */
  createDestination(
    args: CreateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDestinationCommandOutput>;
  createDestination(
    args: CreateDestinationCommandInput,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  createDestination(
    args: CreateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventLogConfigurationCommand}
   */
  createEventLogConfiguration(
    args: CreateEventLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventLogConfigurationCommandOutput>;
  createEventLogConfiguration(
    args: CreateEventLogConfigurationCommandInput,
    cb: (err: any, data?: CreateEventLogConfigurationCommandOutput) => void
  ): void;
  createEventLogConfiguration(
    args: CreateEventLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateManagedThingCommand}
   */
  createManagedThing(
    args: CreateManagedThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateManagedThingCommandOutput>;
  createManagedThing(
    args: CreateManagedThingCommandInput,
    cb: (err: any, data?: CreateManagedThingCommandOutput) => void
  ): void;
  createManagedThing(
    args: CreateManagedThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateManagedThingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotificationConfigurationCommand}
   */
  createNotificationConfiguration(
    args: CreateNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationConfigurationCommandOutput>;
  createNotificationConfiguration(
    args: CreateNotificationConfigurationCommandInput,
    cb: (err: any, data?: CreateNotificationConfigurationCommandOutput) => void
  ): void;
  createNotificationConfiguration(
    args: CreateNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOtaTaskCommand}
   */
  createOtaTask(args: CreateOtaTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateOtaTaskCommandOutput>;
  createOtaTask(args: CreateOtaTaskCommandInput, cb: (err: any, data?: CreateOtaTaskCommandOutput) => void): void;
  createOtaTask(
    args: CreateOtaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOtaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOtaTaskConfigurationCommand}
   */
  createOtaTaskConfiguration(): Promise<CreateOtaTaskConfigurationCommandOutput>;
  createOtaTaskConfiguration(
    args: CreateOtaTaskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOtaTaskConfigurationCommandOutput>;
  createOtaTaskConfiguration(
    args: CreateOtaTaskConfigurationCommandInput,
    cb: (err: any, data?: CreateOtaTaskConfigurationCommandOutput) => void
  ): void;
  createOtaTaskConfiguration(
    args: CreateOtaTaskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOtaTaskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisioningProfileCommand}
   */
  createProvisioningProfile(
    args: CreateProvisioningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningProfileCommandOutput>;
  createProvisioningProfile(
    args: CreateProvisioningProfileCommandInput,
    cb: (err: any, data?: CreateProvisioningProfileCommandOutput) => void
  ): void;
  createProvisioningProfile(
    args: CreateProvisioningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCredentialLockerCommand}
   */
  deleteCredentialLocker(
    args: DeleteCredentialLockerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCredentialLockerCommandOutput>;
  deleteCredentialLocker(
    args: DeleteCredentialLockerCommandInput,
    cb: (err: any, data?: DeleteCredentialLockerCommandOutput) => void
  ): void;
  deleteCredentialLocker(
    args: DeleteCredentialLockerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCredentialLockerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventLogConfigurationCommand}
   */
  deleteEventLogConfiguration(
    args: DeleteEventLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventLogConfigurationCommandOutput>;
  deleteEventLogConfiguration(
    args: DeleteEventLogConfigurationCommandInput,
    cb: (err: any, data?: DeleteEventLogConfigurationCommandOutput) => void
  ): void;
  deleteEventLogConfiguration(
    args: DeleteEventLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteManagedThingCommand}
   */
  deleteManagedThing(
    args: DeleteManagedThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteManagedThingCommandOutput>;
  deleteManagedThing(
    args: DeleteManagedThingCommandInput,
    cb: (err: any, data?: DeleteManagedThingCommandOutput) => void
  ): void;
  deleteManagedThing(
    args: DeleteManagedThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteManagedThingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationConfigurationCommand}
   */
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationConfigurationCommandOutput>;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOtaTaskCommand}
   */
  deleteOtaTask(args: DeleteOtaTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOtaTaskCommandOutput>;
  deleteOtaTask(args: DeleteOtaTaskCommandInput, cb: (err: any, data?: DeleteOtaTaskCommandOutput) => void): void;
  deleteOtaTask(
    args: DeleteOtaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOtaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOtaTaskConfigurationCommand}
   */
  deleteOtaTaskConfiguration(
    args: DeleteOtaTaskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOtaTaskConfigurationCommandOutput>;
  deleteOtaTaskConfiguration(
    args: DeleteOtaTaskConfigurationCommandInput,
    cb: (err: any, data?: DeleteOtaTaskConfigurationCommandOutput) => void
  ): void;
  deleteOtaTaskConfiguration(
    args: DeleteOtaTaskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOtaTaskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisioningProfileCommand}
   */
  deleteProvisioningProfile(
    args: DeleteProvisioningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningProfileCommandOutput>;
  deleteProvisioningProfile(
    args: DeleteProvisioningProfileCommandInput,
    cb: (err: any, data?: DeleteProvisioningProfileCommandOutput) => void
  ): void;
  deleteProvisioningProfile(
    args: DeleteProvisioningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCredentialLockerCommand}
   */
  getCredentialLocker(
    args: GetCredentialLockerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCredentialLockerCommandOutput>;
  getCredentialLocker(
    args: GetCredentialLockerCommandInput,
    cb: (err: any, data?: GetCredentialLockerCommandOutput) => void
  ): void;
  getCredentialLocker(
    args: GetCredentialLockerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCredentialLockerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomEndpointCommand}
   */
  getCustomEndpoint(): Promise<GetCustomEndpointCommandOutput>;
  getCustomEndpoint(
    args: GetCustomEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomEndpointCommandOutput>;
  getCustomEndpoint(
    args: GetCustomEndpointCommandInput,
    cb: (err: any, data?: GetCustomEndpointCommandOutput) => void
  ): void;
  getCustomEndpoint(
    args: GetCustomEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultEncryptionConfigurationCommand}
   */
  getDefaultEncryptionConfiguration(): Promise<GetDefaultEncryptionConfigurationCommandOutput>;
  getDefaultEncryptionConfiguration(
    args: GetDefaultEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultEncryptionConfigurationCommandOutput>;
  getDefaultEncryptionConfiguration(
    args: GetDefaultEncryptionConfigurationCommandInput,
    cb: (err: any, data?: GetDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  getDefaultEncryptionConfiguration(
    args: GetDefaultEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultEncryptionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDestinationCommand}
   */
  getDestination(
    args: GetDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDestinationCommandOutput>;
  getDestination(args: GetDestinationCommandInput, cb: (err: any, data?: GetDestinationCommandOutput) => void): void;
  getDestination(
    args: GetDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceDiscoveryCommand}
   */
  getDeviceDiscovery(
    args: GetDeviceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceDiscoveryCommandOutput>;
  getDeviceDiscovery(
    args: GetDeviceDiscoveryCommandInput,
    cb: (err: any, data?: GetDeviceDiscoveryCommandOutput) => void
  ): void;
  getDeviceDiscovery(
    args: GetDeviceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventLogConfigurationCommand}
   */
  getEventLogConfiguration(
    args: GetEventLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventLogConfigurationCommandOutput>;
  getEventLogConfiguration(
    args: GetEventLogConfigurationCommandInput,
    cb: (err: any, data?: GetEventLogConfigurationCommandOutput) => void
  ): void;
  getEventLogConfiguration(
    args: GetEventLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHubConfigurationCommand}
   */
  getHubConfiguration(): Promise<GetHubConfigurationCommandOutput>;
  getHubConfiguration(
    args: GetHubConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHubConfigurationCommandOutput>;
  getHubConfiguration(
    args: GetHubConfigurationCommandInput,
    cb: (err: any, data?: GetHubConfigurationCommandOutput) => void
  ): void;
  getHubConfiguration(
    args: GetHubConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHubConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedThingCommand}
   */
  getManagedThing(
    args: GetManagedThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedThingCommandOutput>;
  getManagedThing(args: GetManagedThingCommandInput, cb: (err: any, data?: GetManagedThingCommandOutput) => void): void;
  getManagedThing(
    args: GetManagedThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedThingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedThingCapabilitiesCommand}
   */
  getManagedThingCapabilities(
    args: GetManagedThingCapabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedThingCapabilitiesCommandOutput>;
  getManagedThingCapabilities(
    args: GetManagedThingCapabilitiesCommandInput,
    cb: (err: any, data?: GetManagedThingCapabilitiesCommandOutput) => void
  ): void;
  getManagedThingCapabilities(
    args: GetManagedThingCapabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedThingCapabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedThingConnectivityDataCommand}
   */
  getManagedThingConnectivityData(
    args: GetManagedThingConnectivityDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedThingConnectivityDataCommandOutput>;
  getManagedThingConnectivityData(
    args: GetManagedThingConnectivityDataCommandInput,
    cb: (err: any, data?: GetManagedThingConnectivityDataCommandOutput) => void
  ): void;
  getManagedThingConnectivityData(
    args: GetManagedThingConnectivityDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedThingConnectivityDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedThingMetaDataCommand}
   */
  getManagedThingMetaData(
    args: GetManagedThingMetaDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedThingMetaDataCommandOutput>;
  getManagedThingMetaData(
    args: GetManagedThingMetaDataCommandInput,
    cb: (err: any, data?: GetManagedThingMetaDataCommandOutput) => void
  ): void;
  getManagedThingMetaData(
    args: GetManagedThingMetaDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedThingMetaDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedThingStateCommand}
   */
  getManagedThingState(
    args: GetManagedThingStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedThingStateCommandOutput>;
  getManagedThingState(
    args: GetManagedThingStateCommandInput,
    cb: (err: any, data?: GetManagedThingStateCommandOutput) => void
  ): void;
  getManagedThingState(
    args: GetManagedThingStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedThingStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotificationConfigurationCommand}
   */
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationConfigurationCommandOutput>;
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOtaTaskCommand}
   */
  getOtaTask(args: GetOtaTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetOtaTaskCommandOutput>;
  getOtaTask(args: GetOtaTaskCommandInput, cb: (err: any, data?: GetOtaTaskCommandOutput) => void): void;
  getOtaTask(
    args: GetOtaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOtaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOtaTaskConfigurationCommand}
   */
  getOtaTaskConfiguration(
    args: GetOtaTaskConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOtaTaskConfigurationCommandOutput>;
  getOtaTaskConfiguration(
    args: GetOtaTaskConfigurationCommandInput,
    cb: (err: any, data?: GetOtaTaskConfigurationCommandOutput) => void
  ): void;
  getOtaTaskConfiguration(
    args: GetOtaTaskConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOtaTaskConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProvisioningProfileCommand}
   */
  getProvisioningProfile(
    args: GetProvisioningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProvisioningProfileCommandOutput>;
  getProvisioningProfile(
    args: GetProvisioningProfileCommandInput,
    cb: (err: any, data?: GetProvisioningProfileCommandOutput) => void
  ): void;
  getProvisioningProfile(
    args: GetProvisioningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProvisioningProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuntimeLogConfigurationCommand}
   */
  getRuntimeLogConfiguration(
    args: GetRuntimeLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuntimeLogConfigurationCommandOutput>;
  getRuntimeLogConfiguration(
    args: GetRuntimeLogConfigurationCommandInput,
    cb: (err: any, data?: GetRuntimeLogConfigurationCommandOutput) => void
  ): void;
  getRuntimeLogConfiguration(
    args: GetRuntimeLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuntimeLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaVersionCommand}
   */
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaVersionCommandOutput>;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCredentialLockersCommand}
   */
  listCredentialLockers(): Promise<ListCredentialLockersCommandOutput>;
  listCredentialLockers(
    args: ListCredentialLockersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCredentialLockersCommandOutput>;
  listCredentialLockers(
    args: ListCredentialLockersCommandInput,
    cb: (err: any, data?: ListCredentialLockersCommandOutput) => void
  ): void;
  listCredentialLockers(
    args: ListCredentialLockersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCredentialLockersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDestinationsCommand}
   */
  listDestinations(): Promise<ListDestinationsCommandOutput>;
  listDestinations(
    args: ListDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDestinationsCommandOutput>;
  listDestinations(
    args: ListDestinationsCommandInput,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  listDestinations(
    args: ListDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventLogConfigurationsCommand}
   */
  listEventLogConfigurations(): Promise<ListEventLogConfigurationsCommandOutput>;
  listEventLogConfigurations(
    args: ListEventLogConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventLogConfigurationsCommandOutput>;
  listEventLogConfigurations(
    args: ListEventLogConfigurationsCommandInput,
    cb: (err: any, data?: ListEventLogConfigurationsCommandOutput) => void
  ): void;
  listEventLogConfigurations(
    args: ListEventLogConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventLogConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedThingsCommand}
   */
  listManagedThings(): Promise<ListManagedThingsCommandOutput>;
  listManagedThings(
    args: ListManagedThingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedThingsCommandOutput>;
  listManagedThings(
    args: ListManagedThingsCommandInput,
    cb: (err: any, data?: ListManagedThingsCommandOutput) => void
  ): void;
  listManagedThings(
    args: ListManagedThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedThingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedThingSchemasCommand}
   */
  listManagedThingSchemas(
    args: ListManagedThingSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedThingSchemasCommandOutput>;
  listManagedThingSchemas(
    args: ListManagedThingSchemasCommandInput,
    cb: (err: any, data?: ListManagedThingSchemasCommandOutput) => void
  ): void;
  listManagedThingSchemas(
    args: ListManagedThingSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedThingSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationConfigurationsCommand}
   */
  listNotificationConfigurations(): Promise<ListNotificationConfigurationsCommandOutput>;
  listNotificationConfigurations(
    args: ListNotificationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationConfigurationsCommandOutput>;
  listNotificationConfigurations(
    args: ListNotificationConfigurationsCommandInput,
    cb: (err: any, data?: ListNotificationConfigurationsCommandOutput) => void
  ): void;
  listNotificationConfigurations(
    args: ListNotificationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOtaTaskConfigurationsCommand}
   */
  listOtaTaskConfigurations(): Promise<ListOtaTaskConfigurationsCommandOutput>;
  listOtaTaskConfigurations(
    args: ListOtaTaskConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOtaTaskConfigurationsCommandOutput>;
  listOtaTaskConfigurations(
    args: ListOtaTaskConfigurationsCommandInput,
    cb: (err: any, data?: ListOtaTaskConfigurationsCommandOutput) => void
  ): void;
  listOtaTaskConfigurations(
    args: ListOtaTaskConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOtaTaskConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOtaTaskExecutionsCommand}
   */
  listOtaTaskExecutions(
    args: ListOtaTaskExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOtaTaskExecutionsCommandOutput>;
  listOtaTaskExecutions(
    args: ListOtaTaskExecutionsCommandInput,
    cb: (err: any, data?: ListOtaTaskExecutionsCommandOutput) => void
  ): void;
  listOtaTaskExecutions(
    args: ListOtaTaskExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOtaTaskExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOtaTasksCommand}
   */
  listOtaTasks(): Promise<ListOtaTasksCommandOutput>;
  listOtaTasks(args: ListOtaTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListOtaTasksCommandOutput>;
  listOtaTasks(args: ListOtaTasksCommandInput, cb: (err: any, data?: ListOtaTasksCommandOutput) => void): void;
  listOtaTasks(
    args: ListOtaTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOtaTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisioningProfilesCommand}
   */
  listProvisioningProfiles(): Promise<ListProvisioningProfilesCommandOutput>;
  listProvisioningProfiles(
    args: ListProvisioningProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningProfilesCommandOutput>;
  listProvisioningProfiles(
    args: ListProvisioningProfilesCommandInput,
    cb: (err: any, data?: ListProvisioningProfilesCommandOutput) => void
  ): void;
  listProvisioningProfiles(
    args: ListProvisioningProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaVersionsCommand}
   */
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaVersionsCommandOutput>;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDefaultEncryptionConfigurationCommand}
   */
  putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDefaultEncryptionConfigurationCommandOutput>;
  putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutHubConfigurationCommand}
   */
  putHubConfiguration(
    args: PutHubConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutHubConfigurationCommandOutput>;
  putHubConfiguration(
    args: PutHubConfigurationCommandInput,
    cb: (err: any, data?: PutHubConfigurationCommandOutput) => void
  ): void;
  putHubConfiguration(
    args: PutHubConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutHubConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRuntimeLogConfigurationCommand}
   */
  putRuntimeLogConfiguration(
    args: PutRuntimeLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuntimeLogConfigurationCommandOutput>;
  putRuntimeLogConfiguration(
    args: PutRuntimeLogConfigurationCommandInput,
    cb: (err: any, data?: PutRuntimeLogConfigurationCommandOutput) => void
  ): void;
  putRuntimeLogConfiguration(
    args: PutRuntimeLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuntimeLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCustomEndpointCommand}
   */
  registerCustomEndpoint(): Promise<RegisterCustomEndpointCommandOutput>;
  registerCustomEndpoint(
    args: RegisterCustomEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCustomEndpointCommandOutput>;
  registerCustomEndpoint(
    args: RegisterCustomEndpointCommandInput,
    cb: (err: any, data?: RegisterCustomEndpointCommandOutput) => void
  ): void;
  registerCustomEndpoint(
    args: RegisterCustomEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCustomEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetRuntimeLogConfigurationCommand}
   */
  resetRuntimeLogConfiguration(
    args: ResetRuntimeLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetRuntimeLogConfigurationCommandOutput>;
  resetRuntimeLogConfiguration(
    args: ResetRuntimeLogConfigurationCommandInput,
    cb: (err: any, data?: ResetRuntimeLogConfigurationCommandOutput) => void
  ): void;
  resetRuntimeLogConfiguration(
    args: ResetRuntimeLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetRuntimeLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SendManagedThingCommandCommand}
   */
  sendManagedThingCommand(
    args: SendManagedThingCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendManagedThingCommandCommandOutput>;
  sendManagedThingCommand(
    args: SendManagedThingCommandCommandInput,
    cb: (err: any, data?: SendManagedThingCommandCommandOutput) => void
  ): void;
  sendManagedThingCommand(
    args: SendManagedThingCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendManagedThingCommandCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeviceDiscoveryCommand}
   */
  startDeviceDiscovery(
    args: StartDeviceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeviceDiscoveryCommandOutput>;
  startDeviceDiscovery(
    args: StartDeviceDiscoveryCommandInput,
    cb: (err: any, data?: StartDeviceDiscoveryCommandOutput) => void
  ): void;
  startDeviceDiscovery(
    args: StartDeviceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeviceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDestinationCommand}
   */
  updateDestination(
    args: UpdateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDestinationCommandOutput>;
  updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  updateDestination(
    args: UpdateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventLogConfigurationCommand}
   */
  updateEventLogConfiguration(
    args: UpdateEventLogConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventLogConfigurationCommandOutput>;
  updateEventLogConfiguration(
    args: UpdateEventLogConfigurationCommandInput,
    cb: (err: any, data?: UpdateEventLogConfigurationCommandOutput) => void
  ): void;
  updateEventLogConfiguration(
    args: UpdateEventLogConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventLogConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateManagedThingCommand}
   */
  updateManagedThing(
    args: UpdateManagedThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateManagedThingCommandOutput>;
  updateManagedThing(
    args: UpdateManagedThingCommandInput,
    cb: (err: any, data?: UpdateManagedThingCommandOutput) => void
  ): void;
  updateManagedThing(
    args: UpdateManagedThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateManagedThingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotificationConfigurationCommand}
   */
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationConfigurationCommandOutput>;
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOtaTaskCommand}
   */
  updateOtaTask(args: UpdateOtaTaskCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOtaTaskCommandOutput>;
  updateOtaTask(args: UpdateOtaTaskCommandInput, cb: (err: any, data?: UpdateOtaTaskCommandOutput) => void): void;
  updateOtaTask(
    args: UpdateOtaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOtaTaskCommandOutput) => void
  ): void;
}

/**
 * Managed integrations is a feature of AWS IoT Device Management that enables developers to quickly build innovative IoT solutions. Customers can use managed integrations to automate device setup workflows and support interoperability across many devices, regardless of device vendor or connectivity protocol. This allows developers to use a single user-interface to control, manage, and operate a range of devices.
 * @public
 */
export class IoTManagedIntegrations extends IoTManagedIntegrationsClient implements IoTManagedIntegrations {}
createAggregatedClient(commands, IoTManagedIntegrations);

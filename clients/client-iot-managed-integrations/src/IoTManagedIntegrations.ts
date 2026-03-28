// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateAccountAssociationCommandInput,
  type CreateAccountAssociationCommandOutput,
  CreateAccountAssociationCommand,
} from "./commands/CreateAccountAssociationCommand";
import {
  type CreateCloudConnectorCommandInput,
  type CreateCloudConnectorCommandOutput,
  CreateCloudConnectorCommand,
} from "./commands/CreateCloudConnectorCommand";
import {
  type CreateConnectorDestinationCommandInput,
  type CreateConnectorDestinationCommandOutput,
  CreateConnectorDestinationCommand,
} from "./commands/CreateConnectorDestinationCommand";
import {
  type CreateCredentialLockerCommandInput,
  type CreateCredentialLockerCommandOutput,
  CreateCredentialLockerCommand,
} from "./commands/CreateCredentialLockerCommand";
import {
  type CreateDestinationCommandInput,
  type CreateDestinationCommandOutput,
  CreateDestinationCommand,
} from "./commands/CreateDestinationCommand";
import {
  type CreateEventLogConfigurationCommandInput,
  type CreateEventLogConfigurationCommandOutput,
  CreateEventLogConfigurationCommand,
} from "./commands/CreateEventLogConfigurationCommand";
import {
  type CreateManagedThingCommandInput,
  type CreateManagedThingCommandOutput,
  CreateManagedThingCommand,
} from "./commands/CreateManagedThingCommand";
import {
  type CreateNotificationConfigurationCommandInput,
  type CreateNotificationConfigurationCommandOutput,
  CreateNotificationConfigurationCommand,
} from "./commands/CreateNotificationConfigurationCommand";
import {
  type CreateOtaTaskCommandInput,
  type CreateOtaTaskCommandOutput,
  CreateOtaTaskCommand,
} from "./commands/CreateOtaTaskCommand";
import {
  type CreateOtaTaskConfigurationCommandInput,
  type CreateOtaTaskConfigurationCommandOutput,
  CreateOtaTaskConfigurationCommand,
} from "./commands/CreateOtaTaskConfigurationCommand";
import {
  type CreateProvisioningProfileCommandInput,
  type CreateProvisioningProfileCommandOutput,
  CreateProvisioningProfileCommand,
} from "./commands/CreateProvisioningProfileCommand";
import {
  type DeleteAccountAssociationCommandInput,
  type DeleteAccountAssociationCommandOutput,
  DeleteAccountAssociationCommand,
} from "./commands/DeleteAccountAssociationCommand";
import {
  type DeleteCloudConnectorCommandInput,
  type DeleteCloudConnectorCommandOutput,
  DeleteCloudConnectorCommand,
} from "./commands/DeleteCloudConnectorCommand";
import {
  type DeleteConnectorDestinationCommandInput,
  type DeleteConnectorDestinationCommandOutput,
  DeleteConnectorDestinationCommand,
} from "./commands/DeleteConnectorDestinationCommand";
import {
  type DeleteCredentialLockerCommandInput,
  type DeleteCredentialLockerCommandOutput,
  DeleteCredentialLockerCommand,
} from "./commands/DeleteCredentialLockerCommand";
import {
  type DeleteDestinationCommandInput,
  type DeleteDestinationCommandOutput,
  DeleteDestinationCommand,
} from "./commands/DeleteDestinationCommand";
import {
  type DeleteEventLogConfigurationCommandInput,
  type DeleteEventLogConfigurationCommandOutput,
  DeleteEventLogConfigurationCommand,
} from "./commands/DeleteEventLogConfigurationCommand";
import {
  type DeleteManagedThingCommandInput,
  type DeleteManagedThingCommandOutput,
  DeleteManagedThingCommand,
} from "./commands/DeleteManagedThingCommand";
import {
  type DeleteNotificationConfigurationCommandInput,
  type DeleteNotificationConfigurationCommandOutput,
  DeleteNotificationConfigurationCommand,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  type DeleteOtaTaskCommandInput,
  type DeleteOtaTaskCommandOutput,
  DeleteOtaTaskCommand,
} from "./commands/DeleteOtaTaskCommand";
import {
  type DeleteOtaTaskConfigurationCommandInput,
  type DeleteOtaTaskConfigurationCommandOutput,
  DeleteOtaTaskConfigurationCommand,
} from "./commands/DeleteOtaTaskConfigurationCommand";
import {
  type DeleteProvisioningProfileCommandInput,
  type DeleteProvisioningProfileCommandOutput,
  DeleteProvisioningProfileCommand,
} from "./commands/DeleteProvisioningProfileCommand";
import {
  type DeregisterAccountAssociationCommandInput,
  type DeregisterAccountAssociationCommandOutput,
  DeregisterAccountAssociationCommand,
} from "./commands/DeregisterAccountAssociationCommand";
import {
  type GetAccountAssociationCommandInput,
  type GetAccountAssociationCommandOutput,
  GetAccountAssociationCommand,
} from "./commands/GetAccountAssociationCommand";
import {
  type GetCloudConnectorCommandInput,
  type GetCloudConnectorCommandOutput,
  GetCloudConnectorCommand,
} from "./commands/GetCloudConnectorCommand";
import {
  type GetConnectorDestinationCommandInput,
  type GetConnectorDestinationCommandOutput,
  GetConnectorDestinationCommand,
} from "./commands/GetConnectorDestinationCommand";
import {
  type GetCredentialLockerCommandInput,
  type GetCredentialLockerCommandOutput,
  GetCredentialLockerCommand,
} from "./commands/GetCredentialLockerCommand";
import {
  type GetCustomEndpointCommandInput,
  type GetCustomEndpointCommandOutput,
  GetCustomEndpointCommand,
} from "./commands/GetCustomEndpointCommand";
import {
  type GetDefaultEncryptionConfigurationCommandInput,
  type GetDefaultEncryptionConfigurationCommandOutput,
  GetDefaultEncryptionConfigurationCommand,
} from "./commands/GetDefaultEncryptionConfigurationCommand";
import {
  type GetDestinationCommandInput,
  type GetDestinationCommandOutput,
  GetDestinationCommand,
} from "./commands/GetDestinationCommand";
import {
  type GetDeviceDiscoveryCommandInput,
  type GetDeviceDiscoveryCommandOutput,
  GetDeviceDiscoveryCommand,
} from "./commands/GetDeviceDiscoveryCommand";
import {
  type GetEventLogConfigurationCommandInput,
  type GetEventLogConfigurationCommandOutput,
  GetEventLogConfigurationCommand,
} from "./commands/GetEventLogConfigurationCommand";
import {
  type GetHubConfigurationCommandInput,
  type GetHubConfigurationCommandOutput,
  GetHubConfigurationCommand,
} from "./commands/GetHubConfigurationCommand";
import {
  type GetManagedThingCapabilitiesCommandInput,
  type GetManagedThingCapabilitiesCommandOutput,
  GetManagedThingCapabilitiesCommand,
} from "./commands/GetManagedThingCapabilitiesCommand";
import {
  type GetManagedThingCertificateCommandInput,
  type GetManagedThingCertificateCommandOutput,
  GetManagedThingCertificateCommand,
} from "./commands/GetManagedThingCertificateCommand";
import {
  type GetManagedThingCommandInput,
  type GetManagedThingCommandOutput,
  GetManagedThingCommand,
} from "./commands/GetManagedThingCommand";
import {
  type GetManagedThingConnectivityDataCommandInput,
  type GetManagedThingConnectivityDataCommandOutput,
  GetManagedThingConnectivityDataCommand,
} from "./commands/GetManagedThingConnectivityDataCommand";
import {
  type GetManagedThingMetaDataCommandInput,
  type GetManagedThingMetaDataCommandOutput,
  GetManagedThingMetaDataCommand,
} from "./commands/GetManagedThingMetaDataCommand";
import {
  type GetManagedThingStateCommandInput,
  type GetManagedThingStateCommandOutput,
  GetManagedThingStateCommand,
} from "./commands/GetManagedThingStateCommand";
import {
  type GetNotificationConfigurationCommandInput,
  type GetNotificationConfigurationCommandOutput,
  GetNotificationConfigurationCommand,
} from "./commands/GetNotificationConfigurationCommand";
import {
  type GetOtaTaskCommandInput,
  type GetOtaTaskCommandOutput,
  GetOtaTaskCommand,
} from "./commands/GetOtaTaskCommand";
import {
  type GetOtaTaskConfigurationCommandInput,
  type GetOtaTaskConfigurationCommandOutput,
  GetOtaTaskConfigurationCommand,
} from "./commands/GetOtaTaskConfigurationCommand";
import {
  type GetProvisioningProfileCommandInput,
  type GetProvisioningProfileCommandOutput,
  GetProvisioningProfileCommand,
} from "./commands/GetProvisioningProfileCommand";
import {
  type GetRuntimeLogConfigurationCommandInput,
  type GetRuntimeLogConfigurationCommandOutput,
  GetRuntimeLogConfigurationCommand,
} from "./commands/GetRuntimeLogConfigurationCommand";
import {
  type GetSchemaVersionCommandInput,
  type GetSchemaVersionCommandOutput,
  GetSchemaVersionCommand,
} from "./commands/GetSchemaVersionCommand";
import {
  type ListAccountAssociationsCommandInput,
  type ListAccountAssociationsCommandOutput,
  ListAccountAssociationsCommand,
} from "./commands/ListAccountAssociationsCommand";
import {
  type ListCloudConnectorsCommandInput,
  type ListCloudConnectorsCommandOutput,
  ListCloudConnectorsCommand,
} from "./commands/ListCloudConnectorsCommand";
import {
  type ListConnectorDestinationsCommandInput,
  type ListConnectorDestinationsCommandOutput,
  ListConnectorDestinationsCommand,
} from "./commands/ListConnectorDestinationsCommand";
import {
  type ListCredentialLockersCommandInput,
  type ListCredentialLockersCommandOutput,
  ListCredentialLockersCommand,
} from "./commands/ListCredentialLockersCommand";
import {
  type ListDestinationsCommandInput,
  type ListDestinationsCommandOutput,
  ListDestinationsCommand,
} from "./commands/ListDestinationsCommand";
import {
  type ListDeviceDiscoveriesCommandInput,
  type ListDeviceDiscoveriesCommandOutput,
  ListDeviceDiscoveriesCommand,
} from "./commands/ListDeviceDiscoveriesCommand";
import {
  type ListDiscoveredDevicesCommandInput,
  type ListDiscoveredDevicesCommandOutput,
  ListDiscoveredDevicesCommand,
} from "./commands/ListDiscoveredDevicesCommand";
import {
  type ListEventLogConfigurationsCommandInput,
  type ListEventLogConfigurationsCommandOutput,
  ListEventLogConfigurationsCommand,
} from "./commands/ListEventLogConfigurationsCommand";
import {
  type ListManagedThingAccountAssociationsCommandInput,
  type ListManagedThingAccountAssociationsCommandOutput,
  ListManagedThingAccountAssociationsCommand,
} from "./commands/ListManagedThingAccountAssociationsCommand";
import {
  type ListManagedThingSchemasCommandInput,
  type ListManagedThingSchemasCommandOutput,
  ListManagedThingSchemasCommand,
} from "./commands/ListManagedThingSchemasCommand";
import {
  type ListManagedThingsCommandInput,
  type ListManagedThingsCommandOutput,
  ListManagedThingsCommand,
} from "./commands/ListManagedThingsCommand";
import {
  type ListNotificationConfigurationsCommandInput,
  type ListNotificationConfigurationsCommandOutput,
  ListNotificationConfigurationsCommand,
} from "./commands/ListNotificationConfigurationsCommand";
import {
  type ListOtaTaskConfigurationsCommandInput,
  type ListOtaTaskConfigurationsCommandOutput,
  ListOtaTaskConfigurationsCommand,
} from "./commands/ListOtaTaskConfigurationsCommand";
import {
  type ListOtaTaskExecutionsCommandInput,
  type ListOtaTaskExecutionsCommandOutput,
  ListOtaTaskExecutionsCommand,
} from "./commands/ListOtaTaskExecutionsCommand";
import {
  type ListOtaTasksCommandInput,
  type ListOtaTasksCommandOutput,
  ListOtaTasksCommand,
} from "./commands/ListOtaTasksCommand";
import {
  type ListProvisioningProfilesCommandInput,
  type ListProvisioningProfilesCommandOutput,
  ListProvisioningProfilesCommand,
} from "./commands/ListProvisioningProfilesCommand";
import {
  type ListSchemaVersionsCommandInput,
  type ListSchemaVersionsCommandOutput,
  ListSchemaVersionsCommand,
} from "./commands/ListSchemaVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutDefaultEncryptionConfigurationCommandInput,
  type PutDefaultEncryptionConfigurationCommandOutput,
  PutDefaultEncryptionConfigurationCommand,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import {
  type PutHubConfigurationCommandInput,
  type PutHubConfigurationCommandOutput,
  PutHubConfigurationCommand,
} from "./commands/PutHubConfigurationCommand";
import {
  type PutRuntimeLogConfigurationCommandInput,
  type PutRuntimeLogConfigurationCommandOutput,
  PutRuntimeLogConfigurationCommand,
} from "./commands/PutRuntimeLogConfigurationCommand";
import {
  type RegisterAccountAssociationCommandInput,
  type RegisterAccountAssociationCommandOutput,
  RegisterAccountAssociationCommand,
} from "./commands/RegisterAccountAssociationCommand";
import {
  type RegisterCustomEndpointCommandInput,
  type RegisterCustomEndpointCommandOutput,
  RegisterCustomEndpointCommand,
} from "./commands/RegisterCustomEndpointCommand";
import {
  type ResetRuntimeLogConfigurationCommandInput,
  type ResetRuntimeLogConfigurationCommandOutput,
  ResetRuntimeLogConfigurationCommand,
} from "./commands/ResetRuntimeLogConfigurationCommand";
import {
  type SendConnectorEventCommandInput,
  type SendConnectorEventCommandOutput,
  SendConnectorEventCommand,
} from "./commands/SendConnectorEventCommand";
import {
  type SendManagedThingCommandCommandInput,
  type SendManagedThingCommandCommandOutput,
  SendManagedThingCommandCommand,
} from "./commands/SendManagedThingCommandCommand";
import {
  type StartAccountAssociationRefreshCommandInput,
  type StartAccountAssociationRefreshCommandOutput,
  StartAccountAssociationRefreshCommand,
} from "./commands/StartAccountAssociationRefreshCommand";
import {
  type StartDeviceDiscoveryCommandInput,
  type StartDeviceDiscoveryCommandOutput,
  StartDeviceDiscoveryCommand,
} from "./commands/StartDeviceDiscoveryCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccountAssociationCommandInput,
  type UpdateAccountAssociationCommandOutput,
  UpdateAccountAssociationCommand,
} from "./commands/UpdateAccountAssociationCommand";
import {
  type UpdateCloudConnectorCommandInput,
  type UpdateCloudConnectorCommandOutput,
  UpdateCloudConnectorCommand,
} from "./commands/UpdateCloudConnectorCommand";
import {
  type UpdateConnectorDestinationCommandInput,
  type UpdateConnectorDestinationCommandOutput,
  UpdateConnectorDestinationCommand,
} from "./commands/UpdateConnectorDestinationCommand";
import {
  type UpdateDestinationCommandInput,
  type UpdateDestinationCommandOutput,
  UpdateDestinationCommand,
} from "./commands/UpdateDestinationCommand";
import {
  type UpdateEventLogConfigurationCommandInput,
  type UpdateEventLogConfigurationCommandOutput,
  UpdateEventLogConfigurationCommand,
} from "./commands/UpdateEventLogConfigurationCommand";
import {
  type UpdateManagedThingCommandInput,
  type UpdateManagedThingCommandOutput,
  UpdateManagedThingCommand,
} from "./commands/UpdateManagedThingCommand";
import {
  type UpdateNotificationConfigurationCommandInput,
  type UpdateNotificationConfigurationCommandOutput,
  UpdateNotificationConfigurationCommand,
} from "./commands/UpdateNotificationConfigurationCommand";
import {
  type UpdateOtaTaskCommandInput,
  type UpdateOtaTaskCommandOutput,
  UpdateOtaTaskCommand,
} from "./commands/UpdateOtaTaskCommand";
import { IoTManagedIntegrationsClient } from "./IoTManagedIntegrationsClient";
import { paginateListAccountAssociations } from "./pagination/ListAccountAssociationsPaginator";
import { paginateListCloudConnectors } from "./pagination/ListCloudConnectorsPaginator";
import { paginateListConnectorDestinations } from "./pagination/ListConnectorDestinationsPaginator";
import { paginateListCredentialLockers } from "./pagination/ListCredentialLockersPaginator";
import { paginateListDestinations } from "./pagination/ListDestinationsPaginator";
import { paginateListDeviceDiscoveries } from "./pagination/ListDeviceDiscoveriesPaginator";
import { paginateListDiscoveredDevices } from "./pagination/ListDiscoveredDevicesPaginator";
import { paginateListEventLogConfigurations } from "./pagination/ListEventLogConfigurationsPaginator";
import { paginateListManagedThingAccountAssociations } from "./pagination/ListManagedThingAccountAssociationsPaginator";
import { paginateListManagedThingSchemas } from "./pagination/ListManagedThingSchemasPaginator";
import { paginateListManagedThings } from "./pagination/ListManagedThingsPaginator";
import { paginateListNotificationConfigurations } from "./pagination/ListNotificationConfigurationsPaginator";
import { paginateListOtaTaskConfigurations } from "./pagination/ListOtaTaskConfigurationsPaginator";
import { paginateListOtaTaskExecutions } from "./pagination/ListOtaTaskExecutionsPaginator";
import { paginateListOtaTasks } from "./pagination/ListOtaTasksPaginator";
import { paginateListProvisioningProfiles } from "./pagination/ListProvisioningProfilesPaginator";
import { paginateListSchemaVersions } from "./pagination/ListSchemaVersionsPaginator";

const commands = {
  CreateAccountAssociationCommand,
  CreateCloudConnectorCommand,
  CreateConnectorDestinationCommand,
  CreateCredentialLockerCommand,
  CreateDestinationCommand,
  CreateEventLogConfigurationCommand,
  CreateManagedThingCommand,
  CreateNotificationConfigurationCommand,
  CreateOtaTaskCommand,
  CreateOtaTaskConfigurationCommand,
  CreateProvisioningProfileCommand,
  DeleteAccountAssociationCommand,
  DeleteCloudConnectorCommand,
  DeleteConnectorDestinationCommand,
  DeleteCredentialLockerCommand,
  DeleteDestinationCommand,
  DeleteEventLogConfigurationCommand,
  DeleteManagedThingCommand,
  DeleteNotificationConfigurationCommand,
  DeleteOtaTaskCommand,
  DeleteOtaTaskConfigurationCommand,
  DeleteProvisioningProfileCommand,
  DeregisterAccountAssociationCommand,
  GetAccountAssociationCommand,
  GetCloudConnectorCommand,
  GetConnectorDestinationCommand,
  GetCredentialLockerCommand,
  GetCustomEndpointCommand,
  GetDefaultEncryptionConfigurationCommand,
  GetDestinationCommand,
  GetDeviceDiscoveryCommand,
  GetEventLogConfigurationCommand,
  GetHubConfigurationCommand,
  GetManagedThingCommand,
  GetManagedThingCapabilitiesCommand,
  GetManagedThingCertificateCommand,
  GetManagedThingConnectivityDataCommand,
  GetManagedThingMetaDataCommand,
  GetManagedThingStateCommand,
  GetNotificationConfigurationCommand,
  GetOtaTaskCommand,
  GetOtaTaskConfigurationCommand,
  GetProvisioningProfileCommand,
  GetRuntimeLogConfigurationCommand,
  GetSchemaVersionCommand,
  ListAccountAssociationsCommand,
  ListCloudConnectorsCommand,
  ListConnectorDestinationsCommand,
  ListCredentialLockersCommand,
  ListDestinationsCommand,
  ListDeviceDiscoveriesCommand,
  ListDiscoveredDevicesCommand,
  ListEventLogConfigurationsCommand,
  ListManagedThingAccountAssociationsCommand,
  ListManagedThingsCommand,
  ListManagedThingSchemasCommand,
  ListNotificationConfigurationsCommand,
  ListOtaTaskConfigurationsCommand,
  ListOtaTaskExecutionsCommand,
  ListOtaTasksCommand,
  ListProvisioningProfilesCommand,
  ListSchemaVersionsCommand,
  ListTagsForResourceCommand,
  PutDefaultEncryptionConfigurationCommand,
  PutHubConfigurationCommand,
  PutRuntimeLogConfigurationCommand,
  RegisterAccountAssociationCommand,
  RegisterCustomEndpointCommand,
  ResetRuntimeLogConfigurationCommand,
  SendConnectorEventCommand,
  SendManagedThingCommandCommand,
  StartAccountAssociationRefreshCommand,
  StartDeviceDiscoveryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountAssociationCommand,
  UpdateCloudConnectorCommand,
  UpdateConnectorDestinationCommand,
  UpdateDestinationCommand,
  UpdateEventLogConfigurationCommand,
  UpdateManagedThingCommand,
  UpdateNotificationConfigurationCommand,
  UpdateOtaTaskCommand,
};
const paginators = {
  paginateListAccountAssociations,
  paginateListCloudConnectors,
  paginateListConnectorDestinations,
  paginateListCredentialLockers,
  paginateListDestinations,
  paginateListDeviceDiscoveries,
  paginateListDiscoveredDevices,
  paginateListEventLogConfigurations,
  paginateListManagedThingAccountAssociations,
  paginateListManagedThings,
  paginateListManagedThingSchemas,
  paginateListNotificationConfigurations,
  paginateListOtaTaskConfigurations,
  paginateListOtaTaskExecutions,
  paginateListOtaTasks,
  paginateListProvisioningProfiles,
  paginateListSchemaVersions,
};

export interface IoTManagedIntegrations {
  /**
   * @see {@link CreateAccountAssociationCommand}
   */
  createAccountAssociation(
    args: CreateAccountAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountAssociationCommandOutput>;
  createAccountAssociation(
    args: CreateAccountAssociationCommandInput,
    cb: (err: any, data?: CreateAccountAssociationCommandOutput) => void
  ): void;
  createAccountAssociation(
    args: CreateAccountAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudConnectorCommand}
   */
  createCloudConnector(
    args: CreateCloudConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudConnectorCommandOutput>;
  createCloudConnector(
    args: CreateCloudConnectorCommandInput,
    cb: (err: any, data?: CreateCloudConnectorCommandOutput) => void
  ): void;
  createCloudConnector(
    args: CreateCloudConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorDestinationCommand}
   */
  createConnectorDestination(
    args: CreateConnectorDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorDestinationCommandOutput>;
  createConnectorDestination(
    args: CreateConnectorDestinationCommandInput,
    cb: (err: any, data?: CreateConnectorDestinationCommandOutput) => void
  ): void;
  createConnectorDestination(
    args: CreateConnectorDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorDestinationCommandOutput) => void
  ): void;

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
  createOtaTask(
    args: CreateOtaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOtaTaskCommandOutput>;
  createOtaTask(
    args: CreateOtaTaskCommandInput,
    cb: (err: any, data?: CreateOtaTaskCommandOutput) => void
  ): void;
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
   * @see {@link DeleteAccountAssociationCommand}
   */
  deleteAccountAssociation(
    args: DeleteAccountAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAssociationCommandOutput>;
  deleteAccountAssociation(
    args: DeleteAccountAssociationCommandInput,
    cb: (err: any, data?: DeleteAccountAssociationCommandOutput) => void
  ): void;
  deleteAccountAssociation(
    args: DeleteAccountAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudConnectorCommand}
   */
  deleteCloudConnector(
    args: DeleteCloudConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudConnectorCommandOutput>;
  deleteCloudConnector(
    args: DeleteCloudConnectorCommandInput,
    cb: (err: any, data?: DeleteCloudConnectorCommandOutput) => void
  ): void;
  deleteCloudConnector(
    args: DeleteCloudConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorDestinationCommand}
   */
  deleteConnectorDestination(
    args: DeleteConnectorDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorDestinationCommandOutput>;
  deleteConnectorDestination(
    args: DeleteConnectorDestinationCommandInput,
    cb: (err: any, data?: DeleteConnectorDestinationCommandOutput) => void
  ): void;
  deleteConnectorDestination(
    args: DeleteConnectorDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorDestinationCommandOutput) => void
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
  deleteOtaTask(
    args: DeleteOtaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOtaTaskCommandOutput>;
  deleteOtaTask(
    args: DeleteOtaTaskCommandInput,
    cb: (err: any, data?: DeleteOtaTaskCommandOutput) => void
  ): void;
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
   * @see {@link DeregisterAccountAssociationCommand}
   */
  deregisterAccountAssociation(
    args: DeregisterAccountAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAccountAssociationCommandOutput>;
  deregisterAccountAssociation(
    args: DeregisterAccountAssociationCommandInput,
    cb: (err: any, data?: DeregisterAccountAssociationCommandOutput) => void
  ): void;
  deregisterAccountAssociation(
    args: DeregisterAccountAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAccountAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountAssociationCommand}
   */
  getAccountAssociation(
    args: GetAccountAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountAssociationCommandOutput>;
  getAccountAssociation(
    args: GetAccountAssociationCommandInput,
    cb: (err: any, data?: GetAccountAssociationCommandOutput) => void
  ): void;
  getAccountAssociation(
    args: GetAccountAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudConnectorCommand}
   */
  getCloudConnector(
    args: GetCloudConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudConnectorCommandOutput>;
  getCloudConnector(
    args: GetCloudConnectorCommandInput,
    cb: (err: any, data?: GetCloudConnectorCommandOutput) => void
  ): void;
  getCloudConnector(
    args: GetCloudConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectorDestinationCommand}
   */
  getConnectorDestination(
    args: GetConnectorDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectorDestinationCommandOutput>;
  getConnectorDestination(
    args: GetConnectorDestinationCommandInput,
    cb: (err: any, data?: GetConnectorDestinationCommandOutput) => void
  ): void;
  getConnectorDestination(
    args: GetConnectorDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorDestinationCommandOutput) => void
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
  getDestination(
    args: GetDestinationCommandInput,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
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
  getManagedThing(
    args: GetManagedThingCommandInput,
    cb: (err: any, data?: GetManagedThingCommandOutput) => void
  ): void;
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
   * @see {@link GetManagedThingCertificateCommand}
   */
  getManagedThingCertificate(
    args: GetManagedThingCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedThingCertificateCommandOutput>;
  getManagedThingCertificate(
    args: GetManagedThingCertificateCommandInput,
    cb: (err: any, data?: GetManagedThingCertificateCommandOutput) => void
  ): void;
  getManagedThingCertificate(
    args: GetManagedThingCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedThingCertificateCommandOutput) => void
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
  getOtaTask(
    args: GetOtaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOtaTaskCommandOutput>;
  getOtaTask(
    args: GetOtaTaskCommandInput,
    cb: (err: any, data?: GetOtaTaskCommandOutput) => void
  ): void;
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
   * @see {@link ListAccountAssociationsCommand}
   */
  listAccountAssociations(): Promise<ListAccountAssociationsCommandOutput>;
  listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssociationsCommandOutput>;
  listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    cb: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): void;
  listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudConnectorsCommand}
   */
  listCloudConnectors(): Promise<ListCloudConnectorsCommandOutput>;
  listCloudConnectors(
    args: ListCloudConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudConnectorsCommandOutput>;
  listCloudConnectors(
    args: ListCloudConnectorsCommandInput,
    cb: (err: any, data?: ListCloudConnectorsCommandOutput) => void
  ): void;
  listCloudConnectors(
    args: ListCloudConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorDestinationsCommand}
   */
  listConnectorDestinations(): Promise<ListConnectorDestinationsCommandOutput>;
  listConnectorDestinations(
    args: ListConnectorDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorDestinationsCommandOutput>;
  listConnectorDestinations(
    args: ListConnectorDestinationsCommandInput,
    cb: (err: any, data?: ListConnectorDestinationsCommandOutput) => void
  ): void;
  listConnectorDestinations(
    args: ListConnectorDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorDestinationsCommandOutput) => void
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
   * @see {@link ListDeviceDiscoveriesCommand}
   */
  listDeviceDiscoveries(): Promise<ListDeviceDiscoveriesCommandOutput>;
  listDeviceDiscoveries(
    args: ListDeviceDiscoveriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceDiscoveriesCommandOutput>;
  listDeviceDiscoveries(
    args: ListDeviceDiscoveriesCommandInput,
    cb: (err: any, data?: ListDeviceDiscoveriesCommandOutput) => void
  ): void;
  listDeviceDiscoveries(
    args: ListDeviceDiscoveriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceDiscoveriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveredDevicesCommand}
   */
  listDiscoveredDevices(
    args: ListDiscoveredDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredDevicesCommandOutput>;
  listDiscoveredDevices(
    args: ListDiscoveredDevicesCommandInput,
    cb: (err: any, data?: ListDiscoveredDevicesCommandOutput) => void
  ): void;
  listDiscoveredDevices(
    args: ListDiscoveredDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredDevicesCommandOutput) => void
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
   * @see {@link ListManagedThingAccountAssociationsCommand}
   */
  listManagedThingAccountAssociations(): Promise<ListManagedThingAccountAssociationsCommandOutput>;
  listManagedThingAccountAssociations(
    args: ListManagedThingAccountAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedThingAccountAssociationsCommandOutput>;
  listManagedThingAccountAssociations(
    args: ListManagedThingAccountAssociationsCommandInput,
    cb: (err: any, data?: ListManagedThingAccountAssociationsCommandOutput) => void
  ): void;
  listManagedThingAccountAssociations(
    args: ListManagedThingAccountAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedThingAccountAssociationsCommandOutput) => void
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
  listOtaTasks(
    args: ListOtaTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOtaTasksCommandOutput>;
  listOtaTasks(
    args: ListOtaTasksCommandInput,
    cb: (err: any, data?: ListOtaTasksCommandOutput) => void
  ): void;
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
   * @see {@link RegisterAccountAssociationCommand}
   */
  registerAccountAssociation(
    args: RegisterAccountAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountAssociationCommandOutput>;
  registerAccountAssociation(
    args: RegisterAccountAssociationCommandInput,
    cb: (err: any, data?: RegisterAccountAssociationCommandOutput) => void
  ): void;
  registerAccountAssociation(
    args: RegisterAccountAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAccountAssociationCommandOutput) => void
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
   * @see {@link SendConnectorEventCommand}
   */
  sendConnectorEvent(
    args: SendConnectorEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendConnectorEventCommandOutput>;
  sendConnectorEvent(
    args: SendConnectorEventCommandInput,
    cb: (err: any, data?: SendConnectorEventCommandOutput) => void
  ): void;
  sendConnectorEvent(
    args: SendConnectorEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendConnectorEventCommandOutput) => void
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
   * @see {@link StartAccountAssociationRefreshCommand}
   */
  startAccountAssociationRefresh(
    args: StartAccountAssociationRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAccountAssociationRefreshCommandOutput>;
  startAccountAssociationRefresh(
    args: StartAccountAssociationRefreshCommandInput,
    cb: (err: any, data?: StartAccountAssociationRefreshCommandOutput) => void
  ): void;
  startAccountAssociationRefresh(
    args: StartAccountAssociationRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAccountAssociationRefreshCommandOutput) => void
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
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountAssociationCommand}
   */
  updateAccountAssociation(
    args: UpdateAccountAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountAssociationCommandOutput>;
  updateAccountAssociation(
    args: UpdateAccountAssociationCommandInput,
    cb: (err: any, data?: UpdateAccountAssociationCommandOutput) => void
  ): void;
  updateAccountAssociation(
    args: UpdateAccountAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudConnectorCommand}
   */
  updateCloudConnector(
    args: UpdateCloudConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudConnectorCommandOutput>;
  updateCloudConnector(
    args: UpdateCloudConnectorCommandInput,
    cb: (err: any, data?: UpdateCloudConnectorCommandOutput) => void
  ): void;
  updateCloudConnector(
    args: UpdateCloudConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorDestinationCommand}
   */
  updateConnectorDestination(
    args: UpdateConnectorDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorDestinationCommandOutput>;
  updateConnectorDestination(
    args: UpdateConnectorDestinationCommandInput,
    cb: (err: any, data?: UpdateConnectorDestinationCommandOutput) => void
  ): void;
  updateConnectorDestination(
    args: UpdateConnectorDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorDestinationCommandOutput) => void
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
  updateOtaTask(
    args: UpdateOtaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOtaTaskCommandOutput>;
  updateOtaTask(
    args: UpdateOtaTaskCommandInput,
    cb: (err: any, data?: UpdateOtaTaskCommandOutput) => void
  ): void;
  updateOtaTask(
    args: UpdateOtaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOtaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountAssociationsCommandOutput}.
   */
  paginateListAccountAssociations(
    args?: ListAccountAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountAssociationsCommandOutput>;

  /**
   * @see {@link ListCloudConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudConnectorsCommandOutput}.
   */
  paginateListCloudConnectors(
    args?: ListCloudConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudConnectorsCommandOutput>;

  /**
   * @see {@link ListConnectorDestinationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectorDestinationsCommandOutput}.
   */
  paginateListConnectorDestinations(
    args?: ListConnectorDestinationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectorDestinationsCommandOutput>;

  /**
   * @see {@link ListCredentialLockersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCredentialLockersCommandOutput}.
   */
  paginateListCredentialLockers(
    args?: ListCredentialLockersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCredentialLockersCommandOutput>;

  /**
   * @see {@link ListDestinationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDestinationsCommandOutput}.
   */
  paginateListDestinations(
    args?: ListDestinationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDestinationsCommandOutput>;

  /**
   * @see {@link ListDeviceDiscoveriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeviceDiscoveriesCommandOutput}.
   */
  paginateListDeviceDiscoveries(
    args?: ListDeviceDiscoveriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeviceDiscoveriesCommandOutput>;

  /**
   * @see {@link ListDiscoveredDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDiscoveredDevicesCommandOutput}.
   */
  paginateListDiscoveredDevices(
    args: ListDiscoveredDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDiscoveredDevicesCommandOutput>;

  /**
   * @see {@link ListEventLogConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventLogConfigurationsCommandOutput}.
   */
  paginateListEventLogConfigurations(
    args?: ListEventLogConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventLogConfigurationsCommandOutput>;

  /**
   * @see {@link ListManagedThingAccountAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedThingAccountAssociationsCommandOutput}.
   */
  paginateListManagedThingAccountAssociations(
    args?: ListManagedThingAccountAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedThingAccountAssociationsCommandOutput>;

  /**
   * @see {@link ListManagedThingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedThingsCommandOutput}.
   */
  paginateListManagedThings(
    args?: ListManagedThingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedThingsCommandOutput>;

  /**
   * @see {@link ListManagedThingSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedThingSchemasCommandOutput}.
   */
  paginateListManagedThingSchemas(
    args: ListManagedThingSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedThingSchemasCommandOutput>;

  /**
   * @see {@link ListNotificationConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationConfigurationsCommandOutput}.
   */
  paginateListNotificationConfigurations(
    args?: ListNotificationConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationConfigurationsCommandOutput>;

  /**
   * @see {@link ListOtaTaskConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOtaTaskConfigurationsCommandOutput}.
   */
  paginateListOtaTaskConfigurations(
    args?: ListOtaTaskConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOtaTaskConfigurationsCommandOutput>;

  /**
   * @see {@link ListOtaTaskExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOtaTaskExecutionsCommandOutput}.
   */
  paginateListOtaTaskExecutions(
    args: ListOtaTaskExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOtaTaskExecutionsCommandOutput>;

  /**
   * @see {@link ListOtaTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOtaTasksCommandOutput}.
   */
  paginateListOtaTasks(
    args?: ListOtaTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOtaTasksCommandOutput>;

  /**
   * @see {@link ListProvisioningProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProvisioningProfilesCommandOutput}.
   */
  paginateListProvisioningProfiles(
    args?: ListProvisioningProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProvisioningProfilesCommandOutput>;

  /**
   * @see {@link ListSchemaVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemaVersionsCommandOutput}.
   */
  paginateListSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemaVersionsCommandOutput>;
}

/**
 * Managed integrations is a feature of AWS IoT Device Management that enables developers to quickly build innovative IoT solutions. Customers can use managed integrations to automate device setup workflows and support interoperability across many devices, regardless of device vendor or connectivity protocol. This allows developers to use a single user-interface to control, manage, and operate a range of devices.
 * @public
 */
export class IoTManagedIntegrations extends IoTManagedIntegrationsClient implements IoTManagedIntegrations {}
createAggregatedClient(commands, IoTManagedIntegrations, { paginators });

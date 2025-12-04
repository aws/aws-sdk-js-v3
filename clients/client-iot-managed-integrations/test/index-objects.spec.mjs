import {
  AbortCriteriaAction,
  AbortCriteriaFailureType,
  AssociationState,
  AuthMaterialType,
  AuthType,
  CloudConnectorType,
  ConfigurationState,
  ConnectorEventOperation,
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
  DeliveryDestinationType,
  DeregisterAccountAssociationCommand,
  DeviceDiscoveryStatus,
  DisconnectReasonValue,
  DiscoveryAuthMaterialType,
  DiscoveryModification,
  DiscoveryType,
  EncryptionType,
  EndpointType,
  EventType,
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
  GetManagedThingCapabilitiesCommand,
  GetManagedThingCertificateCommand,
  GetManagedThingCommand,
  GetManagedThingConnectivityDataCommand,
  GetManagedThingMetaDataCommand,
  GetManagedThingStateCommand,
  GetNotificationConfigurationCommand,
  GetOtaTaskCommand,
  GetOtaTaskConfigurationCommand,
  GetProvisioningProfileCommand,
  GetRuntimeLogConfigurationCommand,
  GetSchemaVersionCommand,
  HubNetworkMode,
  IoTManagedIntegrations,
  IoTManagedIntegrationsClient,
  IoTManagedIntegrationsServiceException,
  ListAccountAssociationsCommand,
  ListCloudConnectorsCommand,
  ListConnectorDestinationsCommand,
  ListCredentialLockersCommand,
  ListDestinationsCommand,
  ListDeviceDiscoveriesCommand,
  ListDiscoveredDevicesCommand,
  ListEventLogConfigurationsCommand,
  ListManagedThingAccountAssociationsCommand,
  ListManagedThingSchemasCommand,
  ListManagedThingsCommand,
  ListNotificationConfigurationsCommand,
  ListOtaTaskConfigurationsCommand,
  ListOtaTaskExecutionsCommand,
  ListOtaTasksCommand,
  ListProvisioningProfilesCommand,
  ListSchemaVersionsCommand,
  ListTagsForResourceCommand,
  LogLevel,
  OtaMechanism,
  OtaProtocol,
  OtaStatus,
  OtaTaskExecutionStatus,
  OtaType,
  ProvisioningStatus,
  ProvisioningType,
  PutDefaultEncryptionConfigurationCommand,
  PutHubConfigurationCommand,
  PutRuntimeLogConfigurationCommand,
  RegisterAccountAssociationCommand,
  RegisterCustomEndpointCommand,
  ResetRuntimeLogConfigurationCommand,
  RetryCriteriaFailureType,
  Role,
  SchedulingConfigEndBehavior,
  SchemaVersionFormat,
  SchemaVersionType,
  SchemaVersionVisibility,
  SendConnectorEventCommand,
  SendManagedThingCommandCommand,
  StartAccountAssociationRefreshCommand,
  StartDeviceDiscoveryCommand,
  TagResourceCommand,
  TokenEndpointAuthenticationScheme,
  UntagResourceCommand,
  UpdateAccountAssociationCommand,
  UpdateCloudConnectorCommand,
  UpdateConnectorDestinationCommand,
  UpdateDestinationCommand,
  UpdateEventLogConfigurationCommand,
  UpdateManagedThingCommand,
  UpdateNotificationConfigurationCommand,
  UpdateOtaTaskCommand,
  paginateListAccountAssociations,
  paginateListCloudConnectors,
  paginateListConnectorDestinations,
  paginateListCredentialLockers,
  paginateListDestinations,
  paginateListDeviceDiscoveries,
  paginateListDiscoveredDevices,
  paginateListEventLogConfigurations,
  paginateListManagedThingAccountAssociations,
  paginateListManagedThingSchemas,
  paginateListManagedThings,
  paginateListNotificationConfigurations,
  paginateListOtaTaskConfigurations,
  paginateListOtaTaskExecutions,
  paginateListOtaTasks,
  paginateListProvisioningProfiles,
  paginateListSchemaVersions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTManagedIntegrationsClient === "function");
assert(typeof IoTManagedIntegrations === "function");
// commands
assert(typeof CreateAccountAssociationCommand === "function");
assert(typeof CreateCloudConnectorCommand === "function");
assert(typeof CreateConnectorDestinationCommand === "function");
assert(typeof CreateCredentialLockerCommand === "function");
assert(typeof CreateDestinationCommand === "function");
assert(typeof CreateEventLogConfigurationCommand === "function");
assert(typeof CreateManagedThingCommand === "function");
assert(typeof CreateNotificationConfigurationCommand === "function");
assert(typeof CreateOtaTaskCommand === "function");
assert(typeof CreateOtaTaskConfigurationCommand === "function");
assert(typeof CreateProvisioningProfileCommand === "function");
assert(typeof DeleteAccountAssociationCommand === "function");
assert(typeof DeleteCloudConnectorCommand === "function");
assert(typeof DeleteConnectorDestinationCommand === "function");
assert(typeof DeleteCredentialLockerCommand === "function");
assert(typeof DeleteDestinationCommand === "function");
assert(typeof DeleteEventLogConfigurationCommand === "function");
assert(typeof DeleteManagedThingCommand === "function");
assert(typeof DeleteNotificationConfigurationCommand === "function");
assert(typeof DeleteOtaTaskCommand === "function");
assert(typeof DeleteOtaTaskConfigurationCommand === "function");
assert(typeof DeleteProvisioningProfileCommand === "function");
assert(typeof DeregisterAccountAssociationCommand === "function");
assert(typeof GetAccountAssociationCommand === "function");
assert(typeof GetCloudConnectorCommand === "function");
assert(typeof GetConnectorDestinationCommand === "function");
assert(typeof GetCredentialLockerCommand === "function");
assert(typeof GetCustomEndpointCommand === "function");
assert(typeof GetDefaultEncryptionConfigurationCommand === "function");
assert(typeof GetDestinationCommand === "function");
assert(typeof GetDeviceDiscoveryCommand === "function");
assert(typeof GetEventLogConfigurationCommand === "function");
assert(typeof GetHubConfigurationCommand === "function");
assert(typeof GetManagedThingCommand === "function");
assert(typeof GetManagedThingCapabilitiesCommand === "function");
assert(typeof GetManagedThingCertificateCommand === "function");
assert(typeof GetManagedThingConnectivityDataCommand === "function");
assert(typeof GetManagedThingMetaDataCommand === "function");
assert(typeof GetManagedThingStateCommand === "function");
assert(typeof GetNotificationConfigurationCommand === "function");
assert(typeof GetOtaTaskCommand === "function");
assert(typeof GetOtaTaskConfigurationCommand === "function");
assert(typeof GetProvisioningProfileCommand === "function");
assert(typeof GetRuntimeLogConfigurationCommand === "function");
assert(typeof GetSchemaVersionCommand === "function");
assert(typeof ListAccountAssociationsCommand === "function");
assert(typeof ListCloudConnectorsCommand === "function");
assert(typeof ListConnectorDestinationsCommand === "function");
assert(typeof ListCredentialLockersCommand === "function");
assert(typeof ListDestinationsCommand === "function");
assert(typeof ListDeviceDiscoveriesCommand === "function");
assert(typeof ListDiscoveredDevicesCommand === "function");
assert(typeof ListEventLogConfigurationsCommand === "function");
assert(typeof ListManagedThingAccountAssociationsCommand === "function");
assert(typeof ListManagedThingsCommand === "function");
assert(typeof ListManagedThingSchemasCommand === "function");
assert(typeof ListNotificationConfigurationsCommand === "function");
assert(typeof ListOtaTaskConfigurationsCommand === "function");
assert(typeof ListOtaTaskExecutionsCommand === "function");
assert(typeof ListOtaTasksCommand === "function");
assert(typeof ListProvisioningProfilesCommand === "function");
assert(typeof ListSchemaVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutDefaultEncryptionConfigurationCommand === "function");
assert(typeof PutHubConfigurationCommand === "function");
assert(typeof PutRuntimeLogConfigurationCommand === "function");
assert(typeof RegisterAccountAssociationCommand === "function");
assert(typeof RegisterCustomEndpointCommand === "function");
assert(typeof ResetRuntimeLogConfigurationCommand === "function");
assert(typeof SendConnectorEventCommand === "function");
assert(typeof SendManagedThingCommandCommand === "function");
assert(typeof StartAccountAssociationRefreshCommand === "function");
assert(typeof StartDeviceDiscoveryCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountAssociationCommand === "function");
assert(typeof UpdateCloudConnectorCommand === "function");
assert(typeof UpdateConnectorDestinationCommand === "function");
assert(typeof UpdateDestinationCommand === "function");
assert(typeof UpdateEventLogConfigurationCommand === "function");
assert(typeof UpdateManagedThingCommand === "function");
assert(typeof UpdateNotificationConfigurationCommand === "function");
assert(typeof UpdateOtaTaskCommand === "function");
// enums
assert(typeof AbortCriteriaAction === "object");
assert(typeof AbortCriteriaFailureType === "object");
assert(typeof AssociationState === "object");
assert(typeof AuthMaterialType === "object");
assert(typeof AuthType === "object");
assert(typeof CloudConnectorType === "object");
assert(typeof ConfigurationState === "object");
assert(typeof ConnectorEventOperation === "object");
assert(typeof DeliveryDestinationType === "object");
assert(typeof DeviceDiscoveryStatus === "object");
assert(typeof DisconnectReasonValue === "object");
assert(typeof DiscoveryAuthMaterialType === "object");
assert(typeof DiscoveryModification === "object");
assert(typeof DiscoveryType === "object");
assert(typeof EncryptionType === "object");
assert(typeof EndpointType === "object");
assert(typeof EventType === "object");
assert(typeof HubNetworkMode === "object");
assert(typeof LogLevel === "object");
assert(typeof OtaMechanism === "object");
assert(typeof OtaProtocol === "object");
assert(typeof OtaStatus === "object");
assert(typeof OtaTaskExecutionStatus === "object");
assert(typeof OtaType === "object");
assert(typeof ProvisioningStatus === "object");
assert(typeof ProvisioningType === "object");
assert(typeof RetryCriteriaFailureType === "object");
assert(typeof Role === "object");
assert(typeof SchedulingConfigEndBehavior === "object");
assert(typeof SchemaVersionFormat === "object");
assert(typeof SchemaVersionType === "object");
assert(typeof SchemaVersionVisibility === "object");
assert(typeof TokenEndpointAuthenticationScheme === "object");
// errors
assert(IoTManagedIntegrationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccountAssociations === "function");
assert(typeof paginateListCloudConnectors === "function");
assert(typeof paginateListConnectorDestinations === "function");
assert(typeof paginateListCredentialLockers === "function");
assert(typeof paginateListDestinations === "function");
assert(typeof paginateListDeviceDiscoveries === "function");
assert(typeof paginateListDiscoveredDevices === "function");
assert(typeof paginateListEventLogConfigurations === "function");
assert(typeof paginateListManagedThingAccountAssociations === "function");
assert(typeof paginateListManagedThingSchemas === "function");
assert(typeof paginateListManagedThings === "function");
assert(typeof paginateListNotificationConfigurations === "function");
assert(typeof paginateListOtaTaskConfigurations === "function");
assert(typeof paginateListOtaTaskExecutions === "function");
assert(typeof paginateListOtaTasks === "function");
assert(typeof paginateListProvisioningProfiles === "function");
assert(typeof paginateListSchemaVersions === "function");
console.log(`IoTManagedIntegrations index test passed.`);

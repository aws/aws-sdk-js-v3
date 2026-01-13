import {
  AbortConfigCriteria$,
  AbortCriteriaAction,
  AbortCriteriaFailureType,
  AccessDeniedException,
  AccessDeniedException$,
  AccountAssociationItem$,
  AssociationState,
  AuthConfig$,
  AuthConfigUpdate$,
  AuthMaterialType,
  AuthType,
  CapabilityAction$,
  CapabilityReport$,
  CapabilityReportCapability$,
  CapabilityReportEndpoint$,
  CapabilitySchemaItem$,
  CloudConnectorType,
  CommandCapability$,
  CommandEndpoint$,
  ConfigurationError$,
  ConfigurationState,
  ConfigurationStatus$,
  ConflictException,
  ConflictException$,
  ConnectorDestinationSummary$,
  ConnectorEventOperation,
  ConnectorItem$,
  CreateAccountAssociation$,
  CreateAccountAssociationCommand,
  CreateAccountAssociationRequest$,
  CreateAccountAssociationResponse$,
  CreateCloudConnector$,
  CreateCloudConnectorCommand,
  CreateCloudConnectorRequest$,
  CreateCloudConnectorResponse$,
  CreateConnectorDestination$,
  CreateConnectorDestinationCommand,
  CreateConnectorDestinationRequest$,
  CreateConnectorDestinationResponse$,
  CreateCredentialLocker$,
  CreateCredentialLockerCommand,
  CreateCredentialLockerRequest$,
  CreateCredentialLockerResponse$,
  CreateDestination$,
  CreateDestinationCommand,
  CreateDestinationRequest$,
  CreateDestinationResponse$,
  CreateEventLogConfiguration$,
  CreateEventLogConfigurationCommand,
  CreateEventLogConfigurationRequest$,
  CreateEventLogConfigurationResponse$,
  CreateManagedThing$,
  CreateManagedThingCommand,
  CreateManagedThingRequest$,
  CreateManagedThingResponse$,
  CreateNotificationConfiguration$,
  CreateNotificationConfigurationCommand,
  CreateNotificationConfigurationRequest$,
  CreateNotificationConfigurationResponse$,
  CreateOtaTask$,
  CreateOtaTaskCommand,
  CreateOtaTaskConfiguration$,
  CreateOtaTaskConfigurationCommand,
  CreateOtaTaskConfigurationRequest$,
  CreateOtaTaskConfigurationResponse$,
  CreateOtaTaskRequest$,
  CreateOtaTaskResponse$,
  CreateProvisioningProfile$,
  CreateProvisioningProfileCommand,
  CreateProvisioningProfileRequest$,
  CreateProvisioningProfileResponse$,
  CredentialLockerSummary$,
  DeleteAccountAssociation$,
  DeleteAccountAssociationCommand,
  DeleteAccountAssociationRequest$,
  DeleteCloudConnector$,
  DeleteCloudConnectorCommand,
  DeleteCloudConnectorRequest$,
  DeleteConnectorDestination$,
  DeleteConnectorDestinationCommand,
  DeleteConnectorDestinationRequest$,
  DeleteCredentialLocker$,
  DeleteCredentialLockerCommand,
  DeleteCredentialLockerRequest$,
  DeleteDestination$,
  DeleteDestinationCommand,
  DeleteDestinationRequest$,
  DeleteEventLogConfiguration$,
  DeleteEventLogConfigurationCommand,
  DeleteEventLogConfigurationRequest$,
  DeleteManagedThing$,
  DeleteManagedThingCommand,
  DeleteManagedThingRequest$,
  DeleteNotificationConfiguration$,
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationRequest$,
  DeleteOtaTask$,
  DeleteOtaTaskCommand,
  DeleteOtaTaskConfiguration$,
  DeleteOtaTaskConfigurationCommand,
  DeleteOtaTaskConfigurationRequest$,
  DeleteOtaTaskRequest$,
  DeleteProvisioningProfile$,
  DeleteProvisioningProfileCommand,
  DeleteProvisioningProfileRequest$,
  DeliveryDestinationType,
  DeregisterAccountAssociation$,
  DeregisterAccountAssociationCommand,
  DeregisterAccountAssociationRequest$,
  DestinationSummary$,
  Device$,
  DeviceDiscoveryStatus,
  DeviceDiscoverySummary$,
  DisconnectReasonValue,
  DiscoveredDeviceSummary$,
  DiscoveryAuthMaterialType,
  DiscoveryModification,
  DiscoveryType,
  EncryptionType,
  EndpointConfig$,
  EndpointType,
  EventLogConfigurationSummary$,
  EventType,
  ExponentialRolloutRate$,
  GetAccountAssociation$,
  GetAccountAssociationCommand,
  GetAccountAssociationRequest$,
  GetAccountAssociationResponse$,
  GetCloudConnector$,
  GetCloudConnectorCommand,
  GetCloudConnectorRequest$,
  GetCloudConnectorResponse$,
  GetConnectorDestination$,
  GetConnectorDestinationCommand,
  GetConnectorDestinationRequest$,
  GetConnectorDestinationResponse$,
  GetCredentialLocker$,
  GetCredentialLockerCommand,
  GetCredentialLockerRequest$,
  GetCredentialLockerResponse$,
  GetCustomEndpoint$,
  GetCustomEndpointCommand,
  GetCustomEndpointRequest$,
  GetCustomEndpointResponse$,
  GetDefaultEncryptionConfiguration$,
  GetDefaultEncryptionConfigurationCommand,
  GetDefaultEncryptionConfigurationRequest$,
  GetDefaultEncryptionConfigurationResponse$,
  GetDestination$,
  GetDestinationCommand,
  GetDestinationRequest$,
  GetDestinationResponse$,
  GetDeviceDiscovery$,
  GetDeviceDiscoveryCommand,
  GetDeviceDiscoveryRequest$,
  GetDeviceDiscoveryResponse$,
  GetEventLogConfiguration$,
  GetEventLogConfigurationCommand,
  GetEventLogConfigurationRequest$,
  GetEventLogConfigurationResponse$,
  GetHubConfiguration$,
  GetHubConfigurationCommand,
  GetHubConfigurationRequest$,
  GetHubConfigurationResponse$,
  GetManagedThing$,
  GetManagedThingCapabilities$,
  GetManagedThingCapabilitiesCommand,
  GetManagedThingCapabilitiesRequest$,
  GetManagedThingCapabilitiesResponse$,
  GetManagedThingCertificate$,
  GetManagedThingCertificateCommand,
  GetManagedThingCertificateRequest$,
  GetManagedThingCertificateResponse$,
  GetManagedThingCommand,
  GetManagedThingConnectivityData$,
  GetManagedThingConnectivityDataCommand,
  GetManagedThingConnectivityDataRequest$,
  GetManagedThingConnectivityDataResponse$,
  GetManagedThingMetaData$,
  GetManagedThingMetaDataCommand,
  GetManagedThingMetaDataRequest$,
  GetManagedThingMetaDataResponse$,
  GetManagedThingRequest$,
  GetManagedThingResponse$,
  GetManagedThingState$,
  GetManagedThingStateCommand,
  GetManagedThingStateRequest$,
  GetManagedThingStateResponse$,
  GetNotificationConfiguration$,
  GetNotificationConfigurationCommand,
  GetNotificationConfigurationRequest$,
  GetNotificationConfigurationResponse$,
  GetOtaTask$,
  GetOtaTaskCommand,
  GetOtaTaskConfiguration$,
  GetOtaTaskConfigurationCommand,
  GetOtaTaskConfigurationRequest$,
  GetOtaTaskConfigurationResponse$,
  GetOtaTaskRequest$,
  GetOtaTaskResponse$,
  GetProvisioningProfile$,
  GetProvisioningProfileCommand,
  GetProvisioningProfileRequest$,
  GetProvisioningProfileResponse$,
  GetRuntimeLogConfiguration$,
  GetRuntimeLogConfigurationCommand,
  GetRuntimeLogConfigurationRequest$,
  GetRuntimeLogConfigurationResponse$,
  GetSchemaVersion$,
  GetSchemaVersionCommand,
  GetSchemaVersionRequest$,
  GetSchemaVersionResponse$,
  HubNetworkMode,
  InternalFailureException,
  InternalFailureException$,
  InternalServerException,
  InternalServerException$,
  InvalidRequestException,
  InvalidRequestException$,
  IoTManagedIntegrations,
  IoTManagedIntegrationsClient,
  IoTManagedIntegrationsServiceException,
  LambdaConfig$,
  LimitExceededException,
  LimitExceededException$,
  ListAccountAssociations$,
  ListAccountAssociationsCommand,
  ListAccountAssociationsRequest$,
  ListAccountAssociationsResponse$,
  ListCloudConnectors$,
  ListCloudConnectorsCommand,
  ListCloudConnectorsRequest$,
  ListCloudConnectorsResponse$,
  ListConnectorDestinations$,
  ListConnectorDestinationsCommand,
  ListConnectorDestinationsRequest$,
  ListConnectorDestinationsResponse$,
  ListCredentialLockers$,
  ListCredentialLockersCommand,
  ListCredentialLockersRequest$,
  ListCredentialLockersResponse$,
  ListDestinations$,
  ListDestinationsCommand,
  ListDestinationsRequest$,
  ListDestinationsResponse$,
  ListDeviceDiscoveries$,
  ListDeviceDiscoveriesCommand,
  ListDeviceDiscoveriesRequest$,
  ListDeviceDiscoveriesResponse$,
  ListDiscoveredDevices$,
  ListDiscoveredDevicesCommand,
  ListDiscoveredDevicesRequest$,
  ListDiscoveredDevicesResponse$,
  ListEventLogConfigurations$,
  ListEventLogConfigurationsCommand,
  ListEventLogConfigurationsRequest$,
  ListEventLogConfigurationsResponse$,
  ListManagedThingAccountAssociations$,
  ListManagedThingAccountAssociationsCommand,
  ListManagedThingAccountAssociationsRequest$,
  ListManagedThingAccountAssociationsResponse$,
  ListManagedThings$,
  ListManagedThingSchemas$,
  ListManagedThingSchemasCommand,
  ListManagedThingSchemasRequest$,
  ListManagedThingSchemasResponse$,
  ListManagedThingsCommand,
  ListManagedThingsRequest$,
  ListManagedThingsResponse$,
  ListNotificationConfigurations$,
  ListNotificationConfigurationsCommand,
  ListNotificationConfigurationsRequest$,
  ListNotificationConfigurationsResponse$,
  ListOtaTaskConfigurations$,
  ListOtaTaskConfigurationsCommand,
  ListOtaTaskConfigurationsRequest$,
  ListOtaTaskConfigurationsResponse$,
  ListOtaTaskExecutions$,
  ListOtaTaskExecutionsCommand,
  ListOtaTaskExecutionsRequest$,
  ListOtaTaskExecutionsResponse$,
  ListOtaTasks$,
  ListOtaTasksCommand,
  ListOtaTasksRequest$,
  ListOtaTasksResponse$,
  ListProvisioningProfiles$,
  ListProvisioningProfilesCommand,
  ListProvisioningProfilesRequest$,
  ListProvisioningProfilesResponse$,
  ListSchemaVersions$,
  ListSchemaVersionsCommand,
  ListSchemaVersionsRequest$,
  ListSchemaVersionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogLevel,
  ManagedThingAssociation$,
  ManagedThingSchemaListItem$,
  ManagedThingSummary$,
  MatterCapabilityReport$,
  MatterCapabilityReportAttribute$,
  MatterCapabilityReportCluster$,
  MatterCapabilityReportEndpoint$,
  MatterCluster$,
  MatterEndpoint$,
  NotificationConfigurationSummary$,
  OAuthConfig$,
  OAuthUpdate$,
  OtaMechanism,
  OtaProtocol,
  OtaStatus,
  OtaTaskAbortConfig$,
  OtaTaskConfigurationSummary$,
  OtaTaskExecutionRetryConfig$,
  OtaTaskExecutionRolloutConfig$,
  OtaTaskExecutionStatus,
  OtaTaskExecutionSummaries$,
  OtaTaskExecutionSummary$,
  OtaTaskSchedulingConfig$,
  OtaTaskSummary$,
  OtaTaskTimeoutConfig$,
  OtaType,
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
  ProactiveRefreshTokenRenewal$,
  ProtocolType,
  ProvisioningProfileSummary$,
  ProvisioningStatus,
  ProvisioningType,
  PushConfig$,
  PutDefaultEncryptionConfiguration$,
  PutDefaultEncryptionConfigurationCommand,
  PutDefaultEncryptionConfigurationRequest$,
  PutDefaultEncryptionConfigurationResponse$,
  PutHubConfiguration$,
  PutHubConfigurationCommand,
  PutHubConfigurationRequest$,
  PutHubConfigurationResponse$,
  PutRuntimeLogConfiguration$,
  PutRuntimeLogConfigurationCommand,
  PutRuntimeLogConfigurationRequest$,
  RegisterAccountAssociation$,
  RegisterAccountAssociationCommand,
  RegisterAccountAssociationRequest$,
  RegisterAccountAssociationResponse$,
  RegisterCustomEndpoint$,
  RegisterCustomEndpointCommand,
  RegisterCustomEndpointRequest$,
  RegisterCustomEndpointResponse$,
  ResetRuntimeLogConfiguration$,
  ResetRuntimeLogConfigurationCommand,
  ResetRuntimeLogConfigurationRequest$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryConfigCriteria$,
  RetryCriteriaFailureType,
  Role,
  RolloutRateIncreaseCriteria$,
  RuntimeLogConfigurations$,
  ScheduleMaintenanceWindow$,
  SchedulingConfigEndBehavior,
  SchemaVersionFormat,
  SchemaVersionListItem$,
  SchemaVersionType,
  SchemaVersionVisibility,
  SecretsManager$,
  SendConnectorEvent$,
  SendConnectorEventCommand,
  SendConnectorEventRequest$,
  SendConnectorEventResponse$,
  SendManagedThingCommand$,
  SendManagedThingCommandCommand,
  SendManagedThingCommandRequest$,
  SendManagedThingCommandResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartAccountAssociationRefresh$,
  StartAccountAssociationRefreshCommand,
  StartAccountAssociationRefreshRequest$,
  StartAccountAssociationRefreshResponse$,
  StartDeviceDiscovery$,
  StartDeviceDiscoveryCommand,
  StartDeviceDiscoveryRequest$,
  StartDeviceDiscoveryResponse$,
  StateCapability$,
  StateEndpoint$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskProcessingDetails$,
  ThrottlingException,
  ThrottlingException$,
  TokenEndpointAuthenticationScheme,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccountAssociation$,
  UpdateAccountAssociationCommand,
  UpdateAccountAssociationRequest$,
  UpdateCloudConnector$,
  UpdateCloudConnectorCommand,
  UpdateCloudConnectorRequest$,
  UpdateConnectorDestination$,
  UpdateConnectorDestinationCommand,
  UpdateConnectorDestinationRequest$,
  UpdateDestination$,
  UpdateDestinationCommand,
  UpdateDestinationRequest$,
  UpdateEventLogConfiguration$,
  UpdateEventLogConfigurationCommand,
  UpdateEventLogConfigurationRequest$,
  UpdateManagedThing$,
  UpdateManagedThingCommand,
  UpdateManagedThingRequest$,
  UpdateNotificationConfiguration$,
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationRequest$,
  UpdateOtaTask$,
  UpdateOtaTaskCommand,
  UpdateOtaTaskRequest$,
  ValidationException,
  ValidationException$,
  WiFiSimpleSetupConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTManagedIntegrationsClient === "function");
assert(typeof IoTManagedIntegrations === "function");
// commands
assert(typeof CreateAccountAssociationCommand === "function");
assert(typeof CreateAccountAssociation$ === "object");
assert(typeof CreateCloudConnectorCommand === "function");
assert(typeof CreateCloudConnector$ === "object");
assert(typeof CreateConnectorDestinationCommand === "function");
assert(typeof CreateConnectorDestination$ === "object");
assert(typeof CreateCredentialLockerCommand === "function");
assert(typeof CreateCredentialLocker$ === "object");
assert(typeof CreateDestinationCommand === "function");
assert(typeof CreateDestination$ === "object");
assert(typeof CreateEventLogConfigurationCommand === "function");
assert(typeof CreateEventLogConfiguration$ === "object");
assert(typeof CreateManagedThingCommand === "function");
assert(typeof CreateManagedThing$ === "object");
assert(typeof CreateNotificationConfigurationCommand === "function");
assert(typeof CreateNotificationConfiguration$ === "object");
assert(typeof CreateOtaTaskCommand === "function");
assert(typeof CreateOtaTask$ === "object");
assert(typeof CreateOtaTaskConfigurationCommand === "function");
assert(typeof CreateOtaTaskConfiguration$ === "object");
assert(typeof CreateProvisioningProfileCommand === "function");
assert(typeof CreateProvisioningProfile$ === "object");
assert(typeof DeleteAccountAssociationCommand === "function");
assert(typeof DeleteAccountAssociation$ === "object");
assert(typeof DeleteCloudConnectorCommand === "function");
assert(typeof DeleteCloudConnector$ === "object");
assert(typeof DeleteConnectorDestinationCommand === "function");
assert(typeof DeleteConnectorDestination$ === "object");
assert(typeof DeleteCredentialLockerCommand === "function");
assert(typeof DeleteCredentialLocker$ === "object");
assert(typeof DeleteDestinationCommand === "function");
assert(typeof DeleteDestination$ === "object");
assert(typeof DeleteEventLogConfigurationCommand === "function");
assert(typeof DeleteEventLogConfiguration$ === "object");
assert(typeof DeleteManagedThingCommand === "function");
assert(typeof DeleteManagedThing$ === "object");
assert(typeof DeleteNotificationConfigurationCommand === "function");
assert(typeof DeleteNotificationConfiguration$ === "object");
assert(typeof DeleteOtaTaskCommand === "function");
assert(typeof DeleteOtaTask$ === "object");
assert(typeof DeleteOtaTaskConfigurationCommand === "function");
assert(typeof DeleteOtaTaskConfiguration$ === "object");
assert(typeof DeleteProvisioningProfileCommand === "function");
assert(typeof DeleteProvisioningProfile$ === "object");
assert(typeof DeregisterAccountAssociationCommand === "function");
assert(typeof DeregisterAccountAssociation$ === "object");
assert(typeof GetAccountAssociationCommand === "function");
assert(typeof GetAccountAssociation$ === "object");
assert(typeof GetCloudConnectorCommand === "function");
assert(typeof GetCloudConnector$ === "object");
assert(typeof GetConnectorDestinationCommand === "function");
assert(typeof GetConnectorDestination$ === "object");
assert(typeof GetCredentialLockerCommand === "function");
assert(typeof GetCredentialLocker$ === "object");
assert(typeof GetCustomEndpointCommand === "function");
assert(typeof GetCustomEndpoint$ === "object");
assert(typeof GetDefaultEncryptionConfigurationCommand === "function");
assert(typeof GetDefaultEncryptionConfiguration$ === "object");
assert(typeof GetDestinationCommand === "function");
assert(typeof GetDestination$ === "object");
assert(typeof GetDeviceDiscoveryCommand === "function");
assert(typeof GetDeviceDiscovery$ === "object");
assert(typeof GetEventLogConfigurationCommand === "function");
assert(typeof GetEventLogConfiguration$ === "object");
assert(typeof GetHubConfigurationCommand === "function");
assert(typeof GetHubConfiguration$ === "object");
assert(typeof GetManagedThingCommand === "function");
assert(typeof GetManagedThing$ === "object");
assert(typeof GetManagedThingCapabilitiesCommand === "function");
assert(typeof GetManagedThingCapabilities$ === "object");
assert(typeof GetManagedThingCertificateCommand === "function");
assert(typeof GetManagedThingCertificate$ === "object");
assert(typeof GetManagedThingConnectivityDataCommand === "function");
assert(typeof GetManagedThingConnectivityData$ === "object");
assert(typeof GetManagedThingMetaDataCommand === "function");
assert(typeof GetManagedThingMetaData$ === "object");
assert(typeof GetManagedThingStateCommand === "function");
assert(typeof GetManagedThingState$ === "object");
assert(typeof GetNotificationConfigurationCommand === "function");
assert(typeof GetNotificationConfiguration$ === "object");
assert(typeof GetOtaTaskCommand === "function");
assert(typeof GetOtaTask$ === "object");
assert(typeof GetOtaTaskConfigurationCommand === "function");
assert(typeof GetOtaTaskConfiguration$ === "object");
assert(typeof GetProvisioningProfileCommand === "function");
assert(typeof GetProvisioningProfile$ === "object");
assert(typeof GetRuntimeLogConfigurationCommand === "function");
assert(typeof GetRuntimeLogConfiguration$ === "object");
assert(typeof GetSchemaVersionCommand === "function");
assert(typeof GetSchemaVersion$ === "object");
assert(typeof ListAccountAssociationsCommand === "function");
assert(typeof ListAccountAssociations$ === "object");
assert(typeof ListCloudConnectorsCommand === "function");
assert(typeof ListCloudConnectors$ === "object");
assert(typeof ListConnectorDestinationsCommand === "function");
assert(typeof ListConnectorDestinations$ === "object");
assert(typeof ListCredentialLockersCommand === "function");
assert(typeof ListCredentialLockers$ === "object");
assert(typeof ListDestinationsCommand === "function");
assert(typeof ListDestinations$ === "object");
assert(typeof ListDeviceDiscoveriesCommand === "function");
assert(typeof ListDeviceDiscoveries$ === "object");
assert(typeof ListDiscoveredDevicesCommand === "function");
assert(typeof ListDiscoveredDevices$ === "object");
assert(typeof ListEventLogConfigurationsCommand === "function");
assert(typeof ListEventLogConfigurations$ === "object");
assert(typeof ListManagedThingAccountAssociationsCommand === "function");
assert(typeof ListManagedThingAccountAssociations$ === "object");
assert(typeof ListManagedThingsCommand === "function");
assert(typeof ListManagedThings$ === "object");
assert(typeof ListManagedThingSchemasCommand === "function");
assert(typeof ListManagedThingSchemas$ === "object");
assert(typeof ListNotificationConfigurationsCommand === "function");
assert(typeof ListNotificationConfigurations$ === "object");
assert(typeof ListOtaTaskConfigurationsCommand === "function");
assert(typeof ListOtaTaskConfigurations$ === "object");
assert(typeof ListOtaTaskExecutionsCommand === "function");
assert(typeof ListOtaTaskExecutions$ === "object");
assert(typeof ListOtaTasksCommand === "function");
assert(typeof ListOtaTasks$ === "object");
assert(typeof ListProvisioningProfilesCommand === "function");
assert(typeof ListProvisioningProfiles$ === "object");
assert(typeof ListSchemaVersionsCommand === "function");
assert(typeof ListSchemaVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutDefaultEncryptionConfigurationCommand === "function");
assert(typeof PutDefaultEncryptionConfiguration$ === "object");
assert(typeof PutHubConfigurationCommand === "function");
assert(typeof PutHubConfiguration$ === "object");
assert(typeof PutRuntimeLogConfigurationCommand === "function");
assert(typeof PutRuntimeLogConfiguration$ === "object");
assert(typeof RegisterAccountAssociationCommand === "function");
assert(typeof RegisterAccountAssociation$ === "object");
assert(typeof RegisterCustomEndpointCommand === "function");
assert(typeof RegisterCustomEndpoint$ === "object");
assert(typeof ResetRuntimeLogConfigurationCommand === "function");
assert(typeof ResetRuntimeLogConfiguration$ === "object");
assert(typeof SendConnectorEventCommand === "function");
assert(typeof SendConnectorEvent$ === "object");
assert(typeof SendManagedThingCommandCommand === "function");
assert(typeof SendManagedThingCommand$ === "object");
assert(typeof StartAccountAssociationRefreshCommand === "function");
assert(typeof StartAccountAssociationRefresh$ === "object");
assert(typeof StartDeviceDiscoveryCommand === "function");
assert(typeof StartDeviceDiscovery$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountAssociationCommand === "function");
assert(typeof UpdateAccountAssociation$ === "object");
assert(typeof UpdateCloudConnectorCommand === "function");
assert(typeof UpdateCloudConnector$ === "object");
assert(typeof UpdateConnectorDestinationCommand === "function");
assert(typeof UpdateConnectorDestination$ === "object");
assert(typeof UpdateDestinationCommand === "function");
assert(typeof UpdateDestination$ === "object");
assert(typeof UpdateEventLogConfigurationCommand === "function");
assert(typeof UpdateEventLogConfiguration$ === "object");
assert(typeof UpdateManagedThingCommand === "function");
assert(typeof UpdateManagedThing$ === "object");
assert(typeof UpdateNotificationConfigurationCommand === "function");
assert(typeof UpdateNotificationConfiguration$ === "object");
assert(typeof UpdateOtaTaskCommand === "function");
assert(typeof UpdateOtaTask$ === "object");
// structural schemas
assert(typeof AbortConfigCriteria$ === "object");
assert(typeof AccountAssociationItem$ === "object");
assert(typeof AuthConfig$ === "object");
assert(typeof AuthConfigUpdate$ === "object");
assert(typeof CapabilityAction$ === "object");
assert(typeof CapabilityReport$ === "object");
assert(typeof CapabilityReportCapability$ === "object");
assert(typeof CapabilityReportEndpoint$ === "object");
assert(typeof CapabilitySchemaItem$ === "object");
assert(typeof CommandCapability$ === "object");
assert(typeof CommandEndpoint$ === "object");
assert(typeof ConfigurationError$ === "object");
assert(typeof ConfigurationStatus$ === "object");
assert(typeof ConnectorDestinationSummary$ === "object");
assert(typeof ConnectorItem$ === "object");
assert(typeof CreateAccountAssociationRequest$ === "object");
assert(typeof CreateAccountAssociationResponse$ === "object");
assert(typeof CreateCloudConnectorRequest$ === "object");
assert(typeof CreateCloudConnectorResponse$ === "object");
assert(typeof CreateConnectorDestinationRequest$ === "object");
assert(typeof CreateConnectorDestinationResponse$ === "object");
assert(typeof CreateCredentialLockerRequest$ === "object");
assert(typeof CreateCredentialLockerResponse$ === "object");
assert(typeof CreateDestinationRequest$ === "object");
assert(typeof CreateDestinationResponse$ === "object");
assert(typeof CreateEventLogConfigurationRequest$ === "object");
assert(typeof CreateEventLogConfigurationResponse$ === "object");
assert(typeof CreateManagedThingRequest$ === "object");
assert(typeof CreateManagedThingResponse$ === "object");
assert(typeof CreateNotificationConfigurationRequest$ === "object");
assert(typeof CreateNotificationConfigurationResponse$ === "object");
assert(typeof CreateOtaTaskConfigurationRequest$ === "object");
assert(typeof CreateOtaTaskConfigurationResponse$ === "object");
assert(typeof CreateOtaTaskRequest$ === "object");
assert(typeof CreateOtaTaskResponse$ === "object");
assert(typeof CreateProvisioningProfileRequest$ === "object");
assert(typeof CreateProvisioningProfileResponse$ === "object");
assert(typeof CredentialLockerSummary$ === "object");
assert(typeof DeleteAccountAssociationRequest$ === "object");
assert(typeof DeleteCloudConnectorRequest$ === "object");
assert(typeof DeleteConnectorDestinationRequest$ === "object");
assert(typeof DeleteCredentialLockerRequest$ === "object");
assert(typeof DeleteDestinationRequest$ === "object");
assert(typeof DeleteEventLogConfigurationRequest$ === "object");
assert(typeof DeleteManagedThingRequest$ === "object");
assert(typeof DeleteNotificationConfigurationRequest$ === "object");
assert(typeof DeleteOtaTaskConfigurationRequest$ === "object");
assert(typeof DeleteOtaTaskRequest$ === "object");
assert(typeof DeleteProvisioningProfileRequest$ === "object");
assert(typeof DeregisterAccountAssociationRequest$ === "object");
assert(typeof DestinationSummary$ === "object");
assert(typeof Device$ === "object");
assert(typeof DeviceDiscoverySummary$ === "object");
assert(typeof DiscoveredDeviceSummary$ === "object");
assert(typeof EndpointConfig$ === "object");
assert(typeof EventLogConfigurationSummary$ === "object");
assert(typeof ExponentialRolloutRate$ === "object");
assert(typeof GetAccountAssociationRequest$ === "object");
assert(typeof GetAccountAssociationResponse$ === "object");
assert(typeof GetCloudConnectorRequest$ === "object");
assert(typeof GetCloudConnectorResponse$ === "object");
assert(typeof GetConnectorDestinationRequest$ === "object");
assert(typeof GetConnectorDestinationResponse$ === "object");
assert(typeof GetCredentialLockerRequest$ === "object");
assert(typeof GetCredentialLockerResponse$ === "object");
assert(typeof GetCustomEndpointRequest$ === "object");
assert(typeof GetCustomEndpointResponse$ === "object");
assert(typeof GetDefaultEncryptionConfigurationRequest$ === "object");
assert(typeof GetDefaultEncryptionConfigurationResponse$ === "object");
assert(typeof GetDestinationRequest$ === "object");
assert(typeof GetDestinationResponse$ === "object");
assert(typeof GetDeviceDiscoveryRequest$ === "object");
assert(typeof GetDeviceDiscoveryResponse$ === "object");
assert(typeof GetEventLogConfigurationRequest$ === "object");
assert(typeof GetEventLogConfigurationResponse$ === "object");
assert(typeof GetHubConfigurationRequest$ === "object");
assert(typeof GetHubConfigurationResponse$ === "object");
assert(typeof GetManagedThingCapabilitiesRequest$ === "object");
assert(typeof GetManagedThingCapabilitiesResponse$ === "object");
assert(typeof GetManagedThingCertificateRequest$ === "object");
assert(typeof GetManagedThingCertificateResponse$ === "object");
assert(typeof GetManagedThingConnectivityDataRequest$ === "object");
assert(typeof GetManagedThingConnectivityDataResponse$ === "object");
assert(typeof GetManagedThingMetaDataRequest$ === "object");
assert(typeof GetManagedThingMetaDataResponse$ === "object");
assert(typeof GetManagedThingRequest$ === "object");
assert(typeof GetManagedThingResponse$ === "object");
assert(typeof GetManagedThingStateRequest$ === "object");
assert(typeof GetManagedThingStateResponse$ === "object");
assert(typeof GetNotificationConfigurationRequest$ === "object");
assert(typeof GetNotificationConfigurationResponse$ === "object");
assert(typeof GetOtaTaskConfigurationRequest$ === "object");
assert(typeof GetOtaTaskConfigurationResponse$ === "object");
assert(typeof GetOtaTaskRequest$ === "object");
assert(typeof GetOtaTaskResponse$ === "object");
assert(typeof GetProvisioningProfileRequest$ === "object");
assert(typeof GetProvisioningProfileResponse$ === "object");
assert(typeof GetRuntimeLogConfigurationRequest$ === "object");
assert(typeof GetRuntimeLogConfigurationResponse$ === "object");
assert(typeof GetSchemaVersionRequest$ === "object");
assert(typeof GetSchemaVersionResponse$ === "object");
assert(typeof LambdaConfig$ === "object");
assert(typeof ListAccountAssociationsRequest$ === "object");
assert(typeof ListAccountAssociationsResponse$ === "object");
assert(typeof ListCloudConnectorsRequest$ === "object");
assert(typeof ListCloudConnectorsResponse$ === "object");
assert(typeof ListConnectorDestinationsRequest$ === "object");
assert(typeof ListConnectorDestinationsResponse$ === "object");
assert(typeof ListCredentialLockersRequest$ === "object");
assert(typeof ListCredentialLockersResponse$ === "object");
assert(typeof ListDestinationsRequest$ === "object");
assert(typeof ListDestinationsResponse$ === "object");
assert(typeof ListDeviceDiscoveriesRequest$ === "object");
assert(typeof ListDeviceDiscoveriesResponse$ === "object");
assert(typeof ListDiscoveredDevicesRequest$ === "object");
assert(typeof ListDiscoveredDevicesResponse$ === "object");
assert(typeof ListEventLogConfigurationsRequest$ === "object");
assert(typeof ListEventLogConfigurationsResponse$ === "object");
assert(typeof ListManagedThingAccountAssociationsRequest$ === "object");
assert(typeof ListManagedThingAccountAssociationsResponse$ === "object");
assert(typeof ListManagedThingSchemasRequest$ === "object");
assert(typeof ListManagedThingSchemasResponse$ === "object");
assert(typeof ListManagedThingsRequest$ === "object");
assert(typeof ListManagedThingsResponse$ === "object");
assert(typeof ListNotificationConfigurationsRequest$ === "object");
assert(typeof ListNotificationConfigurationsResponse$ === "object");
assert(typeof ListOtaTaskConfigurationsRequest$ === "object");
assert(typeof ListOtaTaskConfigurationsResponse$ === "object");
assert(typeof ListOtaTaskExecutionsRequest$ === "object");
assert(typeof ListOtaTaskExecutionsResponse$ === "object");
assert(typeof ListOtaTasksRequest$ === "object");
assert(typeof ListOtaTasksResponse$ === "object");
assert(typeof ListProvisioningProfilesRequest$ === "object");
assert(typeof ListProvisioningProfilesResponse$ === "object");
assert(typeof ListSchemaVersionsRequest$ === "object");
assert(typeof ListSchemaVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedThingAssociation$ === "object");
assert(typeof ManagedThingSchemaListItem$ === "object");
assert(typeof ManagedThingSummary$ === "object");
assert(typeof MatterCapabilityReport$ === "object");
assert(typeof MatterCapabilityReportAttribute$ === "object");
assert(typeof MatterCapabilityReportCluster$ === "object");
assert(typeof MatterCapabilityReportEndpoint$ === "object");
assert(typeof MatterCluster$ === "object");
assert(typeof MatterEndpoint$ === "object");
assert(typeof NotificationConfigurationSummary$ === "object");
assert(typeof OAuthConfig$ === "object");
assert(typeof OAuthUpdate$ === "object");
assert(typeof OtaTaskAbortConfig$ === "object");
assert(typeof OtaTaskConfigurationSummary$ === "object");
assert(typeof OtaTaskExecutionRetryConfig$ === "object");
assert(typeof OtaTaskExecutionRolloutConfig$ === "object");
assert(typeof OtaTaskExecutionSummaries$ === "object");
assert(typeof OtaTaskExecutionSummary$ === "object");
assert(typeof OtaTaskSchedulingConfig$ === "object");
assert(typeof OtaTaskSummary$ === "object");
assert(typeof OtaTaskTimeoutConfig$ === "object");
assert(typeof ProactiveRefreshTokenRenewal$ === "object");
assert(typeof ProvisioningProfileSummary$ === "object");
assert(typeof PushConfig$ === "object");
assert(typeof PutDefaultEncryptionConfigurationRequest$ === "object");
assert(typeof PutDefaultEncryptionConfigurationResponse$ === "object");
assert(typeof PutHubConfigurationRequest$ === "object");
assert(typeof PutHubConfigurationResponse$ === "object");
assert(typeof PutRuntimeLogConfigurationRequest$ === "object");
assert(typeof RegisterAccountAssociationRequest$ === "object");
assert(typeof RegisterAccountAssociationResponse$ === "object");
assert(typeof RegisterCustomEndpointRequest$ === "object");
assert(typeof RegisterCustomEndpointResponse$ === "object");
assert(typeof ResetRuntimeLogConfigurationRequest$ === "object");
assert(typeof RetryConfigCriteria$ === "object");
assert(typeof RolloutRateIncreaseCriteria$ === "object");
assert(typeof RuntimeLogConfigurations$ === "object");
assert(typeof ScheduleMaintenanceWindow$ === "object");
assert(typeof SchemaVersionListItem$ === "object");
assert(typeof SecretsManager$ === "object");
assert(typeof SendConnectorEventRequest$ === "object");
assert(typeof SendConnectorEventResponse$ === "object");
assert(typeof SendManagedThingCommandRequest$ === "object");
assert(typeof SendManagedThingCommandResponse$ === "object");
assert(typeof StartAccountAssociationRefreshRequest$ === "object");
assert(typeof StartAccountAssociationRefreshResponse$ === "object");
assert(typeof StartDeviceDiscoveryRequest$ === "object");
assert(typeof StartDeviceDiscoveryResponse$ === "object");
assert(typeof StateCapability$ === "object");
assert(typeof StateEndpoint$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskProcessingDetails$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountAssociationRequest$ === "object");
assert(typeof UpdateCloudConnectorRequest$ === "object");
assert(typeof UpdateConnectorDestinationRequest$ === "object");
assert(typeof UpdateDestinationRequest$ === "object");
assert(typeof UpdateEventLogConfigurationRequest$ === "object");
assert(typeof UpdateManagedThingRequest$ === "object");
assert(typeof UpdateNotificationConfigurationRequest$ === "object");
assert(typeof UpdateOtaTaskRequest$ === "object");
assert(typeof WiFiSimpleSetupConfiguration$ === "object");
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
assert(typeof ProtocolType === "object");
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
assert(AccessDeniedException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalFailureException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InternalServerException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof IoTManagedIntegrationsServiceException);
assert(typeof ValidationException$ === "object");
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

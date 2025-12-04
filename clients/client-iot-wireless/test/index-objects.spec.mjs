import {
  AggregationPeriod,
  ApplicationConfigType,
  AssociateAwsAccountWithPartnerAccountCommand,
  AssociateMulticastGroupWithFuotaTaskCommand,
  AssociateWirelessDeviceWithFuotaTaskCommand,
  AssociateWirelessDeviceWithMulticastGroupCommand,
  AssociateWirelessDeviceWithThingCommand,
  AssociateWirelessGatewayWithCertificateCommand,
  AssociateWirelessGatewayWithThingCommand,
  BatteryLevel,
  CancelMulticastGroupSessionCommand,
  ConnectionStatus,
  CreateDestinationCommand,
  CreateDeviceProfileCommand,
  CreateFuotaTaskCommand,
  CreateMulticastGroupCommand,
  CreateNetworkAnalyzerConfigurationCommand,
  CreateServiceProfileCommand,
  CreateWirelessDeviceCommand,
  CreateWirelessGatewayCommand,
  CreateWirelessGatewayTaskCommand,
  CreateWirelessGatewayTaskDefinitionCommand,
  DeleteDestinationCommand,
  DeleteDeviceProfileCommand,
  DeleteFuotaTaskCommand,
  DeleteMulticastGroupCommand,
  DeleteNetworkAnalyzerConfigurationCommand,
  DeleteQueuedMessagesCommand,
  DeleteServiceProfileCommand,
  DeleteWirelessDeviceCommand,
  DeleteWirelessDeviceImportTaskCommand,
  DeleteWirelessGatewayCommand,
  DeleteWirelessGatewayTaskCommand,
  DeleteWirelessGatewayTaskDefinitionCommand,
  DeregisterWirelessDeviceCommand,
  DeviceProfileType,
  DeviceState,
  DimensionName,
  DisassociateAwsAccountFromPartnerAccountCommand,
  DisassociateMulticastGroupFromFuotaTaskCommand,
  DisassociateWirelessDeviceFromFuotaTaskCommand,
  DisassociateWirelessDeviceFromMulticastGroupCommand,
  DisassociateWirelessDeviceFromThingCommand,
  DisassociateWirelessGatewayFromCertificateCommand,
  DisassociateWirelessGatewayFromThingCommand,
  DlClass,
  DownlinkMode,
  Event,
  EventNotificationPartnerType,
  EventNotificationResourceType,
  EventNotificationTopicStatus,
  ExpressionType,
  FuotaDeviceStatus,
  FuotaTaskEvent,
  FuotaTaskStatus,
  FuotaTaskType,
  GetDestinationCommand,
  GetDeviceProfileCommand,
  GetEventConfigurationByResourceTypesCommand,
  GetFuotaTaskCommand,
  GetLogLevelsByResourceTypesCommand,
  GetMetricConfigurationCommand,
  GetMetricsCommand,
  GetMulticastGroupCommand,
  GetMulticastGroupSessionCommand,
  GetNetworkAnalyzerConfigurationCommand,
  GetPartnerAccountCommand,
  GetPositionCommand,
  GetPositionConfigurationCommand,
  GetPositionEstimateCommand,
  GetResourceEventConfigurationCommand,
  GetResourceLogLevelCommand,
  GetResourcePositionCommand,
  GetServiceEndpointCommand,
  GetServiceProfileCommand,
  GetWirelessDeviceCommand,
  GetWirelessDeviceImportTaskCommand,
  GetWirelessDeviceStatisticsCommand,
  GetWirelessGatewayCertificateCommand,
  GetWirelessGatewayCommand,
  GetWirelessGatewayFirmwareInformationCommand,
  GetWirelessGatewayStatisticsCommand,
  GetWirelessGatewayTaskCommand,
  GetWirelessGatewayTaskDefinitionCommand,
  IdentifierType,
  ImportTaskStatus,
  IoTWireless,
  IoTWirelessClient,
  IoTWirelessServiceException,
  ListDestinationsCommand,
  ListDeviceProfilesCommand,
  ListDevicesForWirelessDeviceImportTaskCommand,
  ListEventConfigurationsCommand,
  ListFuotaTasksCommand,
  ListMulticastGroupsByFuotaTaskCommand,
  ListMulticastGroupsCommand,
  ListNetworkAnalyzerConfigurationsCommand,
  ListPartnerAccountsCommand,
  ListPositionConfigurationsCommand,
  ListQueuedMessagesCommand,
  ListServiceProfilesCommand,
  ListTagsForResourceCommand,
  ListWirelessDeviceImportTasksCommand,
  ListWirelessDevicesCommand,
  ListWirelessGatewayTaskDefinitionsCommand,
  ListWirelessGatewaysCommand,
  LogLevel,
  MessageType,
  MetricName,
  MetricQueryStatus,
  MulticastFrameInfo,
  OnboardStatus,
  PartnerType,
  PositionConfigurationFec,
  PositionConfigurationStatus,
  PositionResourceType,
  PositionSolverProvider,
  PositionSolverType,
  PositioningConfigStatus,
  PutPositionConfigurationCommand,
  PutResourceLogLevelCommand,
  ResetAllResourceLogLevelsCommand,
  ResetResourceLogLevelCommand,
  SendDataToMulticastGroupCommand,
  SendDataToWirelessDeviceCommand,
  SigningAlg,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommand,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
  StartFuotaTaskCommand,
  StartMulticastGroupSessionCommand,
  StartSingleWirelessDeviceImportTaskCommand,
  StartWirelessDeviceImportTaskCommand,
  SummaryMetricConfigurationStatus,
  SupportedRfRegion,
  TagResourceCommand,
  TestWirelessDeviceCommand,
  UntagResourceCommand,
  UpdateDestinationCommand,
  UpdateEventConfigurationByResourceTypesCommand,
  UpdateFuotaTaskCommand,
  UpdateLogLevelsByResourceTypesCommand,
  UpdateMetricConfigurationCommand,
  UpdateMulticastGroupCommand,
  UpdateNetworkAnalyzerConfigurationCommand,
  UpdatePartnerAccountCommand,
  UpdatePositionCommand,
  UpdateResourceEventConfigurationCommand,
  UpdateResourcePositionCommand,
  UpdateWirelessDeviceCommand,
  UpdateWirelessDeviceImportTaskCommand,
  UpdateWirelessGatewayCommand,
  WirelessDeviceEvent,
  WirelessDeviceFrameInfo,
  WirelessDeviceIdType,
  WirelessDeviceSidewalkStatus,
  WirelessDeviceType,
  WirelessGatewayEvent,
  WirelessGatewayIdType,
  WirelessGatewayServiceType,
  WirelessGatewayTaskDefinitionType,
  WirelessGatewayTaskStatus,
  WirelessGatewayType,
  paginateListDestinations,
  paginateListDeviceProfiles,
  paginateListFuotaTasks,
  paginateListMulticastGroups,
  paginateListMulticastGroupsByFuotaTask,
  paginateListNetworkAnalyzerConfigurations,
  paginateListPositionConfigurations,
  paginateListQueuedMessages,
  paginateListServiceProfiles,
  paginateListWirelessDevices,
  paginateListWirelessGateways,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTWirelessClient === "function")
assert(typeof IoTWireless === "function")
// commands
assert(typeof AssociateAwsAccountWithPartnerAccountCommand === "function")
assert(typeof AssociateMulticastGroupWithFuotaTaskCommand === "function")
assert(typeof AssociateWirelessDeviceWithFuotaTaskCommand === "function")
assert(typeof AssociateWirelessDeviceWithMulticastGroupCommand === "function")
assert(typeof AssociateWirelessDeviceWithThingCommand === "function")
assert(typeof AssociateWirelessGatewayWithCertificateCommand === "function")
assert(typeof AssociateWirelessGatewayWithThingCommand === "function")
assert(typeof CancelMulticastGroupSessionCommand === "function")
assert(typeof CreateDestinationCommand === "function")
assert(typeof CreateDeviceProfileCommand === "function")
assert(typeof CreateFuotaTaskCommand === "function")
assert(typeof CreateMulticastGroupCommand === "function")
assert(typeof CreateNetworkAnalyzerConfigurationCommand === "function")
assert(typeof CreateServiceProfileCommand === "function")
assert(typeof CreateWirelessDeviceCommand === "function")
assert(typeof CreateWirelessGatewayCommand === "function")
assert(typeof CreateWirelessGatewayTaskCommand === "function")
assert(typeof CreateWirelessGatewayTaskDefinitionCommand === "function")
assert(typeof DeleteDestinationCommand === "function")
assert(typeof DeleteDeviceProfileCommand === "function")
assert(typeof DeleteFuotaTaskCommand === "function")
assert(typeof DeleteMulticastGroupCommand === "function")
assert(typeof DeleteNetworkAnalyzerConfigurationCommand === "function")
assert(typeof DeleteQueuedMessagesCommand === "function")
assert(typeof DeleteServiceProfileCommand === "function")
assert(typeof DeleteWirelessDeviceCommand === "function")
assert(typeof DeleteWirelessDeviceImportTaskCommand === "function")
assert(typeof DeleteWirelessGatewayCommand === "function")
assert(typeof DeleteWirelessGatewayTaskCommand === "function")
assert(typeof DeleteWirelessGatewayTaskDefinitionCommand === "function")
assert(typeof DeregisterWirelessDeviceCommand === "function")
assert(typeof DisassociateAwsAccountFromPartnerAccountCommand === "function")
assert(typeof DisassociateMulticastGroupFromFuotaTaskCommand === "function")
assert(typeof DisassociateWirelessDeviceFromFuotaTaskCommand === "function")
assert(typeof DisassociateWirelessDeviceFromMulticastGroupCommand === "function")
assert(typeof DisassociateWirelessDeviceFromThingCommand === "function")
assert(typeof DisassociateWirelessGatewayFromCertificateCommand === "function")
assert(typeof DisassociateWirelessGatewayFromThingCommand === "function")
assert(typeof GetDestinationCommand === "function")
assert(typeof GetDeviceProfileCommand === "function")
assert(typeof GetEventConfigurationByResourceTypesCommand === "function")
assert(typeof GetFuotaTaskCommand === "function")
assert(typeof GetLogLevelsByResourceTypesCommand === "function")
assert(typeof GetMetricConfigurationCommand === "function")
assert(typeof GetMetricsCommand === "function")
assert(typeof GetMulticastGroupCommand === "function")
assert(typeof GetMulticastGroupSessionCommand === "function")
assert(typeof GetNetworkAnalyzerConfigurationCommand === "function")
assert(typeof GetPartnerAccountCommand === "function")
assert(typeof GetPositionCommand === "function")
assert(typeof GetPositionConfigurationCommand === "function")
assert(typeof GetPositionEstimateCommand === "function")
assert(typeof GetResourceEventConfigurationCommand === "function")
assert(typeof GetResourceLogLevelCommand === "function")
assert(typeof GetResourcePositionCommand === "function")
assert(typeof GetServiceEndpointCommand === "function")
assert(typeof GetServiceProfileCommand === "function")
assert(typeof GetWirelessDeviceCommand === "function")
assert(typeof GetWirelessDeviceImportTaskCommand === "function")
assert(typeof GetWirelessDeviceStatisticsCommand === "function")
assert(typeof GetWirelessGatewayCommand === "function")
assert(typeof GetWirelessGatewayCertificateCommand === "function")
assert(typeof GetWirelessGatewayFirmwareInformationCommand === "function")
assert(typeof GetWirelessGatewayStatisticsCommand === "function")
assert(typeof GetWirelessGatewayTaskCommand === "function")
assert(typeof GetWirelessGatewayTaskDefinitionCommand === "function")
assert(typeof ListDestinationsCommand === "function")
assert(typeof ListDeviceProfilesCommand === "function")
assert(typeof ListDevicesForWirelessDeviceImportTaskCommand === "function")
assert(typeof ListEventConfigurationsCommand === "function")
assert(typeof ListFuotaTasksCommand === "function")
assert(typeof ListMulticastGroupsCommand === "function")
assert(typeof ListMulticastGroupsByFuotaTaskCommand === "function")
assert(typeof ListNetworkAnalyzerConfigurationsCommand === "function")
assert(typeof ListPartnerAccountsCommand === "function")
assert(typeof ListPositionConfigurationsCommand === "function")
assert(typeof ListQueuedMessagesCommand === "function")
assert(typeof ListServiceProfilesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWirelessDeviceImportTasksCommand === "function")
assert(typeof ListWirelessDevicesCommand === "function")
assert(typeof ListWirelessGatewaysCommand === "function")
assert(typeof ListWirelessGatewayTaskDefinitionsCommand === "function")
assert(typeof PutPositionConfigurationCommand === "function")
assert(typeof PutResourceLogLevelCommand === "function")
assert(typeof ResetAllResourceLogLevelsCommand === "function")
assert(typeof ResetResourceLogLevelCommand === "function")
assert(typeof SendDataToMulticastGroupCommand === "function")
assert(typeof SendDataToWirelessDeviceCommand === "function")
assert(typeof StartBulkAssociateWirelessDeviceWithMulticastGroupCommand === "function")
assert(typeof StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand === "function")
assert(typeof StartFuotaTaskCommand === "function")
assert(typeof StartMulticastGroupSessionCommand === "function")
assert(typeof StartSingleWirelessDeviceImportTaskCommand === "function")
assert(typeof StartWirelessDeviceImportTaskCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestWirelessDeviceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDestinationCommand === "function")
assert(typeof UpdateEventConfigurationByResourceTypesCommand === "function")
assert(typeof UpdateFuotaTaskCommand === "function")
assert(typeof UpdateLogLevelsByResourceTypesCommand === "function")
assert(typeof UpdateMetricConfigurationCommand === "function")
assert(typeof UpdateMulticastGroupCommand === "function")
assert(typeof UpdateNetworkAnalyzerConfigurationCommand === "function")
assert(typeof UpdatePartnerAccountCommand === "function")
assert(typeof UpdatePositionCommand === "function")
assert(typeof UpdateResourceEventConfigurationCommand === "function")
assert(typeof UpdateResourcePositionCommand === "function")
assert(typeof UpdateWirelessDeviceCommand === "function")
assert(typeof UpdateWirelessDeviceImportTaskCommand === "function")
assert(typeof UpdateWirelessGatewayCommand === "function")
// enums
assert(typeof AggregationPeriod === "object");
assert(typeof ApplicationConfigType === "object");
assert(typeof BatteryLevel === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof DeviceProfileType === "object");
assert(typeof DeviceState === "object");
assert(typeof DimensionName === "object");
assert(typeof DlClass === "object");
assert(typeof DownlinkMode === "object");
assert(typeof Event === "object");
assert(typeof EventNotificationPartnerType === "object");
assert(typeof EventNotificationResourceType === "object");
assert(typeof EventNotificationTopicStatus === "object");
assert(typeof ExpressionType === "object");
assert(typeof FuotaDeviceStatus === "object");
assert(typeof FuotaTaskEvent === "object");
assert(typeof FuotaTaskStatus === "object");
assert(typeof FuotaTaskType === "object");
assert(typeof IdentifierType === "object");
assert(typeof ImportTaskStatus === "object");
assert(typeof LogLevel === "object");
assert(typeof MessageType === "object");
assert(typeof MetricName === "object");
assert(typeof MetricQueryStatus === "object");
assert(typeof MulticastFrameInfo === "object");
assert(typeof OnboardStatus === "object");
assert(typeof PartnerType === "object");
assert(typeof PositionConfigurationFec === "object");
assert(typeof PositionConfigurationStatus === "object");
assert(typeof PositioningConfigStatus === "object");
assert(typeof PositionResourceType === "object");
assert(typeof PositionSolverProvider === "object");
assert(typeof PositionSolverType === "object");
assert(typeof SigningAlg === "object");
assert(typeof SummaryMetricConfigurationStatus === "object");
assert(typeof SupportedRfRegion === "object");
assert(typeof WirelessDeviceEvent === "object");
assert(typeof WirelessDeviceFrameInfo === "object");
assert(typeof WirelessDeviceIdType === "object");
assert(typeof WirelessDeviceSidewalkStatus === "object");
assert(typeof WirelessDeviceType === "object");
assert(typeof WirelessGatewayEvent === "object");
assert(typeof WirelessGatewayIdType === "object");
assert(typeof WirelessGatewayServiceType === "object");
assert(typeof WirelessGatewayTaskDefinitionType === "object");
assert(typeof WirelessGatewayTaskStatus === "object");
assert(typeof WirelessGatewayType === "object");
// errors
assert(IoTWirelessServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListDestinations === "function")
assert(typeof paginateListDeviceProfiles === "function")
assert(typeof paginateListFuotaTasks === "function")
assert(typeof paginateListMulticastGroups === "function")
assert(typeof paginateListMulticastGroupsByFuotaTask === "function")
assert(typeof paginateListNetworkAnalyzerConfigurations === "function")
assert(typeof paginateListPositionConfigurations === "function")
assert(typeof paginateListQueuedMessages === "function")
assert(typeof paginateListServiceProfiles === "function")
assert(typeof paginateListWirelessDevices === "function")
assert(typeof paginateListWirelessGateways === "function")
console.log(`IoTWireless index test passed.`);

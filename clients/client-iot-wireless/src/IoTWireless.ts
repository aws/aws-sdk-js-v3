// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateAwsAccountWithPartnerAccountCommandInput,
  type AssociateAwsAccountWithPartnerAccountCommandOutput,
  AssociateAwsAccountWithPartnerAccountCommand,
} from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import {
  type AssociateMulticastGroupWithFuotaTaskCommandInput,
  type AssociateMulticastGroupWithFuotaTaskCommandOutput,
  AssociateMulticastGroupWithFuotaTaskCommand,
} from "./commands/AssociateMulticastGroupWithFuotaTaskCommand";
import {
  type AssociateWirelessDeviceWithFuotaTaskCommandInput,
  type AssociateWirelessDeviceWithFuotaTaskCommandOutput,
  AssociateWirelessDeviceWithFuotaTaskCommand,
} from "./commands/AssociateWirelessDeviceWithFuotaTaskCommand";
import {
  type AssociateWirelessDeviceWithMulticastGroupCommandInput,
  type AssociateWirelessDeviceWithMulticastGroupCommandOutput,
  AssociateWirelessDeviceWithMulticastGroupCommand,
} from "./commands/AssociateWirelessDeviceWithMulticastGroupCommand";
import {
  type AssociateWirelessDeviceWithThingCommandInput,
  type AssociateWirelessDeviceWithThingCommandOutput,
  AssociateWirelessDeviceWithThingCommand,
} from "./commands/AssociateWirelessDeviceWithThingCommand";
import {
  type AssociateWirelessGatewayWithCertificateCommandInput,
  type AssociateWirelessGatewayWithCertificateCommandOutput,
  AssociateWirelessGatewayWithCertificateCommand,
} from "./commands/AssociateWirelessGatewayWithCertificateCommand";
import {
  type AssociateWirelessGatewayWithThingCommandInput,
  type AssociateWirelessGatewayWithThingCommandOutput,
  AssociateWirelessGatewayWithThingCommand,
} from "./commands/AssociateWirelessGatewayWithThingCommand";
import {
  type CancelMulticastGroupSessionCommandInput,
  type CancelMulticastGroupSessionCommandOutput,
  CancelMulticastGroupSessionCommand,
} from "./commands/CancelMulticastGroupSessionCommand";
import {
  type CreateDestinationCommandInput,
  type CreateDestinationCommandOutput,
  CreateDestinationCommand,
} from "./commands/CreateDestinationCommand";
import {
  type CreateDeviceProfileCommandInput,
  type CreateDeviceProfileCommandOutput,
  CreateDeviceProfileCommand,
} from "./commands/CreateDeviceProfileCommand";
import {
  type CreateFuotaTaskCommandInput,
  type CreateFuotaTaskCommandOutput,
  CreateFuotaTaskCommand,
} from "./commands/CreateFuotaTaskCommand";
import {
  type CreateMulticastGroupCommandInput,
  type CreateMulticastGroupCommandOutput,
  CreateMulticastGroupCommand,
} from "./commands/CreateMulticastGroupCommand";
import {
  type CreateNetworkAnalyzerConfigurationCommandInput,
  type CreateNetworkAnalyzerConfigurationCommandOutput,
  CreateNetworkAnalyzerConfigurationCommand,
} from "./commands/CreateNetworkAnalyzerConfigurationCommand";
import {
  type CreateServiceProfileCommandInput,
  type CreateServiceProfileCommandOutput,
  CreateServiceProfileCommand,
} from "./commands/CreateServiceProfileCommand";
import {
  type CreateWirelessDeviceCommandInput,
  type CreateWirelessDeviceCommandOutput,
  CreateWirelessDeviceCommand,
} from "./commands/CreateWirelessDeviceCommand";
import {
  type CreateWirelessGatewayCommandInput,
  type CreateWirelessGatewayCommandOutput,
  CreateWirelessGatewayCommand,
} from "./commands/CreateWirelessGatewayCommand";
import {
  type CreateWirelessGatewayTaskCommandInput,
  type CreateWirelessGatewayTaskCommandOutput,
  CreateWirelessGatewayTaskCommand,
} from "./commands/CreateWirelessGatewayTaskCommand";
import {
  type CreateWirelessGatewayTaskDefinitionCommandInput,
  type CreateWirelessGatewayTaskDefinitionCommandOutput,
  CreateWirelessGatewayTaskDefinitionCommand,
} from "./commands/CreateWirelessGatewayTaskDefinitionCommand";
import {
  type DeleteDestinationCommandInput,
  type DeleteDestinationCommandOutput,
  DeleteDestinationCommand,
} from "./commands/DeleteDestinationCommand";
import {
  type DeleteDeviceProfileCommandInput,
  type DeleteDeviceProfileCommandOutput,
  DeleteDeviceProfileCommand,
} from "./commands/DeleteDeviceProfileCommand";
import {
  type DeleteFuotaTaskCommandInput,
  type DeleteFuotaTaskCommandOutput,
  DeleteFuotaTaskCommand,
} from "./commands/DeleteFuotaTaskCommand";
import {
  type DeleteMulticastGroupCommandInput,
  type DeleteMulticastGroupCommandOutput,
  DeleteMulticastGroupCommand,
} from "./commands/DeleteMulticastGroupCommand";
import {
  type DeleteNetworkAnalyzerConfigurationCommandInput,
  type DeleteNetworkAnalyzerConfigurationCommandOutput,
  DeleteNetworkAnalyzerConfigurationCommand,
} from "./commands/DeleteNetworkAnalyzerConfigurationCommand";
import {
  type DeleteQueuedMessagesCommandInput,
  type DeleteQueuedMessagesCommandOutput,
  DeleteQueuedMessagesCommand,
} from "./commands/DeleteQueuedMessagesCommand";
import {
  type DeleteServiceProfileCommandInput,
  type DeleteServiceProfileCommandOutput,
  DeleteServiceProfileCommand,
} from "./commands/DeleteServiceProfileCommand";
import {
  type DeleteWirelessDeviceCommandInput,
  type DeleteWirelessDeviceCommandOutput,
  DeleteWirelessDeviceCommand,
} from "./commands/DeleteWirelessDeviceCommand";
import {
  type DeleteWirelessDeviceImportTaskCommandInput,
  type DeleteWirelessDeviceImportTaskCommandOutput,
  DeleteWirelessDeviceImportTaskCommand,
} from "./commands/DeleteWirelessDeviceImportTaskCommand";
import {
  type DeleteWirelessGatewayCommandInput,
  type DeleteWirelessGatewayCommandOutput,
  DeleteWirelessGatewayCommand,
} from "./commands/DeleteWirelessGatewayCommand";
import {
  type DeleteWirelessGatewayTaskCommandInput,
  type DeleteWirelessGatewayTaskCommandOutput,
  DeleteWirelessGatewayTaskCommand,
} from "./commands/DeleteWirelessGatewayTaskCommand";
import {
  type DeleteWirelessGatewayTaskDefinitionCommandInput,
  type DeleteWirelessGatewayTaskDefinitionCommandOutput,
  DeleteWirelessGatewayTaskDefinitionCommand,
} from "./commands/DeleteWirelessGatewayTaskDefinitionCommand";
import {
  type DeregisterWirelessDeviceCommandInput,
  type DeregisterWirelessDeviceCommandOutput,
  DeregisterWirelessDeviceCommand,
} from "./commands/DeregisterWirelessDeviceCommand";
import {
  type DisassociateAwsAccountFromPartnerAccountCommandInput,
  type DisassociateAwsAccountFromPartnerAccountCommandOutput,
  DisassociateAwsAccountFromPartnerAccountCommand,
} from "./commands/DisassociateAwsAccountFromPartnerAccountCommand";
import {
  type DisassociateMulticastGroupFromFuotaTaskCommandInput,
  type DisassociateMulticastGroupFromFuotaTaskCommandOutput,
  DisassociateMulticastGroupFromFuotaTaskCommand,
} from "./commands/DisassociateMulticastGroupFromFuotaTaskCommand";
import {
  type DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  type DisassociateWirelessDeviceFromFuotaTaskCommandOutput,
  DisassociateWirelessDeviceFromFuotaTaskCommand,
} from "./commands/DisassociateWirelessDeviceFromFuotaTaskCommand";
import {
  type DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  type DisassociateWirelessDeviceFromMulticastGroupCommandOutput,
  DisassociateWirelessDeviceFromMulticastGroupCommand,
} from "./commands/DisassociateWirelessDeviceFromMulticastGroupCommand";
import {
  type DisassociateWirelessDeviceFromThingCommandInput,
  type DisassociateWirelessDeviceFromThingCommandOutput,
  DisassociateWirelessDeviceFromThingCommand,
} from "./commands/DisassociateWirelessDeviceFromThingCommand";
import {
  type DisassociateWirelessGatewayFromCertificateCommandInput,
  type DisassociateWirelessGatewayFromCertificateCommandOutput,
  DisassociateWirelessGatewayFromCertificateCommand,
} from "./commands/DisassociateWirelessGatewayFromCertificateCommand";
import {
  type DisassociateWirelessGatewayFromThingCommandInput,
  type DisassociateWirelessGatewayFromThingCommandOutput,
  DisassociateWirelessGatewayFromThingCommand,
} from "./commands/DisassociateWirelessGatewayFromThingCommand";
import {
  type GetDestinationCommandInput,
  type GetDestinationCommandOutput,
  GetDestinationCommand,
} from "./commands/GetDestinationCommand";
import {
  type GetDeviceProfileCommandInput,
  type GetDeviceProfileCommandOutput,
  GetDeviceProfileCommand,
} from "./commands/GetDeviceProfileCommand";
import {
  type GetEventConfigurationByResourceTypesCommandInput,
  type GetEventConfigurationByResourceTypesCommandOutput,
  GetEventConfigurationByResourceTypesCommand,
} from "./commands/GetEventConfigurationByResourceTypesCommand";
import {
  type GetFuotaTaskCommandInput,
  type GetFuotaTaskCommandOutput,
  GetFuotaTaskCommand,
} from "./commands/GetFuotaTaskCommand";
import {
  type GetLogLevelsByResourceTypesCommandInput,
  type GetLogLevelsByResourceTypesCommandOutput,
  GetLogLevelsByResourceTypesCommand,
} from "./commands/GetLogLevelsByResourceTypesCommand";
import {
  type GetMetricConfigurationCommandInput,
  type GetMetricConfigurationCommandOutput,
  GetMetricConfigurationCommand,
} from "./commands/GetMetricConfigurationCommand";
import {
  type GetMetricsCommandInput,
  type GetMetricsCommandOutput,
  GetMetricsCommand,
} from "./commands/GetMetricsCommand";
import {
  type GetMulticastGroupCommandInput,
  type GetMulticastGroupCommandOutput,
  GetMulticastGroupCommand,
} from "./commands/GetMulticastGroupCommand";
import {
  type GetMulticastGroupSessionCommandInput,
  type GetMulticastGroupSessionCommandOutput,
  GetMulticastGroupSessionCommand,
} from "./commands/GetMulticastGroupSessionCommand";
import {
  type GetNetworkAnalyzerConfigurationCommandInput,
  type GetNetworkAnalyzerConfigurationCommandOutput,
  GetNetworkAnalyzerConfigurationCommand,
} from "./commands/GetNetworkAnalyzerConfigurationCommand";
import {
  type GetPartnerAccountCommandInput,
  type GetPartnerAccountCommandOutput,
  GetPartnerAccountCommand,
} from "./commands/GetPartnerAccountCommand";
import {
  type GetPositionCommandInput,
  type GetPositionCommandOutput,
  GetPositionCommand,
} from "./commands/GetPositionCommand";
import {
  type GetPositionConfigurationCommandInput,
  type GetPositionConfigurationCommandOutput,
  GetPositionConfigurationCommand,
} from "./commands/GetPositionConfigurationCommand";
import {
  type GetPositionEstimateCommandInput,
  type GetPositionEstimateCommandOutput,
  GetPositionEstimateCommand,
} from "./commands/GetPositionEstimateCommand";
import {
  type GetResourceEventConfigurationCommandInput,
  type GetResourceEventConfigurationCommandOutput,
  GetResourceEventConfigurationCommand,
} from "./commands/GetResourceEventConfigurationCommand";
import {
  type GetResourceLogLevelCommandInput,
  type GetResourceLogLevelCommandOutput,
  GetResourceLogLevelCommand,
} from "./commands/GetResourceLogLevelCommand";
import {
  type GetResourcePositionCommandInput,
  type GetResourcePositionCommandOutput,
  GetResourcePositionCommand,
} from "./commands/GetResourcePositionCommand";
import {
  type GetServiceEndpointCommandInput,
  type GetServiceEndpointCommandOutput,
  GetServiceEndpointCommand,
} from "./commands/GetServiceEndpointCommand";
import {
  type GetServiceProfileCommandInput,
  type GetServiceProfileCommandOutput,
  GetServiceProfileCommand,
} from "./commands/GetServiceProfileCommand";
import {
  type GetWirelessDeviceCommandInput,
  type GetWirelessDeviceCommandOutput,
  GetWirelessDeviceCommand,
} from "./commands/GetWirelessDeviceCommand";
import {
  type GetWirelessDeviceImportTaskCommandInput,
  type GetWirelessDeviceImportTaskCommandOutput,
  GetWirelessDeviceImportTaskCommand,
} from "./commands/GetWirelessDeviceImportTaskCommand";
import {
  type GetWirelessDeviceStatisticsCommandInput,
  type GetWirelessDeviceStatisticsCommandOutput,
  GetWirelessDeviceStatisticsCommand,
} from "./commands/GetWirelessDeviceStatisticsCommand";
import {
  type GetWirelessGatewayCertificateCommandInput,
  type GetWirelessGatewayCertificateCommandOutput,
  GetWirelessGatewayCertificateCommand,
} from "./commands/GetWirelessGatewayCertificateCommand";
import {
  type GetWirelessGatewayCommandInput,
  type GetWirelessGatewayCommandOutput,
  GetWirelessGatewayCommand,
} from "./commands/GetWirelessGatewayCommand";
import {
  type GetWirelessGatewayFirmwareInformationCommandInput,
  type GetWirelessGatewayFirmwareInformationCommandOutput,
  GetWirelessGatewayFirmwareInformationCommand,
} from "./commands/GetWirelessGatewayFirmwareInformationCommand";
import {
  type GetWirelessGatewayStatisticsCommandInput,
  type GetWirelessGatewayStatisticsCommandOutput,
  GetWirelessGatewayStatisticsCommand,
} from "./commands/GetWirelessGatewayStatisticsCommand";
import {
  type GetWirelessGatewayTaskCommandInput,
  type GetWirelessGatewayTaskCommandOutput,
  GetWirelessGatewayTaskCommand,
} from "./commands/GetWirelessGatewayTaskCommand";
import {
  type GetWirelessGatewayTaskDefinitionCommandInput,
  type GetWirelessGatewayTaskDefinitionCommandOutput,
  GetWirelessGatewayTaskDefinitionCommand,
} from "./commands/GetWirelessGatewayTaskDefinitionCommand";
import {
  type ListDestinationsCommandInput,
  type ListDestinationsCommandOutput,
  ListDestinationsCommand,
} from "./commands/ListDestinationsCommand";
import {
  type ListDeviceProfilesCommandInput,
  type ListDeviceProfilesCommandOutput,
  ListDeviceProfilesCommand,
} from "./commands/ListDeviceProfilesCommand";
import {
  type ListDevicesForWirelessDeviceImportTaskCommandInput,
  type ListDevicesForWirelessDeviceImportTaskCommandOutput,
  ListDevicesForWirelessDeviceImportTaskCommand,
} from "./commands/ListDevicesForWirelessDeviceImportTaskCommand";
import {
  type ListEventConfigurationsCommandInput,
  type ListEventConfigurationsCommandOutput,
  ListEventConfigurationsCommand,
} from "./commands/ListEventConfigurationsCommand";
import {
  type ListFuotaTasksCommandInput,
  type ListFuotaTasksCommandOutput,
  ListFuotaTasksCommand,
} from "./commands/ListFuotaTasksCommand";
import {
  type ListMulticastGroupsByFuotaTaskCommandInput,
  type ListMulticastGroupsByFuotaTaskCommandOutput,
  ListMulticastGroupsByFuotaTaskCommand,
} from "./commands/ListMulticastGroupsByFuotaTaskCommand";
import {
  type ListMulticastGroupsCommandInput,
  type ListMulticastGroupsCommandOutput,
  ListMulticastGroupsCommand,
} from "./commands/ListMulticastGroupsCommand";
import {
  type ListNetworkAnalyzerConfigurationsCommandInput,
  type ListNetworkAnalyzerConfigurationsCommandOutput,
  ListNetworkAnalyzerConfigurationsCommand,
} from "./commands/ListNetworkAnalyzerConfigurationsCommand";
import {
  type ListPartnerAccountsCommandInput,
  type ListPartnerAccountsCommandOutput,
  ListPartnerAccountsCommand,
} from "./commands/ListPartnerAccountsCommand";
import {
  type ListPositionConfigurationsCommandInput,
  type ListPositionConfigurationsCommandOutput,
  ListPositionConfigurationsCommand,
} from "./commands/ListPositionConfigurationsCommand";
import {
  type ListQueuedMessagesCommandInput,
  type ListQueuedMessagesCommandOutput,
  ListQueuedMessagesCommand,
} from "./commands/ListQueuedMessagesCommand";
import {
  type ListServiceProfilesCommandInput,
  type ListServiceProfilesCommandOutput,
  ListServiceProfilesCommand,
} from "./commands/ListServiceProfilesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWirelessDeviceImportTasksCommandInput,
  type ListWirelessDeviceImportTasksCommandOutput,
  ListWirelessDeviceImportTasksCommand,
} from "./commands/ListWirelessDeviceImportTasksCommand";
import {
  type ListWirelessDevicesCommandInput,
  type ListWirelessDevicesCommandOutput,
  ListWirelessDevicesCommand,
} from "./commands/ListWirelessDevicesCommand";
import {
  type ListWirelessGatewaysCommandInput,
  type ListWirelessGatewaysCommandOutput,
  ListWirelessGatewaysCommand,
} from "./commands/ListWirelessGatewaysCommand";
import {
  type ListWirelessGatewayTaskDefinitionsCommandInput,
  type ListWirelessGatewayTaskDefinitionsCommandOutput,
  ListWirelessGatewayTaskDefinitionsCommand,
} from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import {
  type PutPositionConfigurationCommandInput,
  type PutPositionConfigurationCommandOutput,
  PutPositionConfigurationCommand,
} from "./commands/PutPositionConfigurationCommand";
import {
  type PutResourceLogLevelCommandInput,
  type PutResourceLogLevelCommandOutput,
  PutResourceLogLevelCommand,
} from "./commands/PutResourceLogLevelCommand";
import {
  type ResetAllResourceLogLevelsCommandInput,
  type ResetAllResourceLogLevelsCommandOutput,
  ResetAllResourceLogLevelsCommand,
} from "./commands/ResetAllResourceLogLevelsCommand";
import {
  type ResetResourceLogLevelCommandInput,
  type ResetResourceLogLevelCommandOutput,
  ResetResourceLogLevelCommand,
} from "./commands/ResetResourceLogLevelCommand";
import {
  type SendDataToMulticastGroupCommandInput,
  type SendDataToMulticastGroupCommandOutput,
  SendDataToMulticastGroupCommand,
} from "./commands/SendDataToMulticastGroupCommand";
import {
  type SendDataToWirelessDeviceCommandInput,
  type SendDataToWirelessDeviceCommandOutput,
  SendDataToWirelessDeviceCommand,
} from "./commands/SendDataToWirelessDeviceCommand";
import {
  type StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  type StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommand,
} from "./commands/StartBulkAssociateWirelessDeviceWithMulticastGroupCommand";
import {
  type StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  type StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
} from "./commands/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand";
import {
  type StartFuotaTaskCommandInput,
  type StartFuotaTaskCommandOutput,
  StartFuotaTaskCommand,
} from "./commands/StartFuotaTaskCommand";
import {
  type StartMulticastGroupSessionCommandInput,
  type StartMulticastGroupSessionCommandOutput,
  StartMulticastGroupSessionCommand,
} from "./commands/StartMulticastGroupSessionCommand";
import {
  type StartSingleWirelessDeviceImportTaskCommandInput,
  type StartSingleWirelessDeviceImportTaskCommandOutput,
  StartSingleWirelessDeviceImportTaskCommand,
} from "./commands/StartSingleWirelessDeviceImportTaskCommand";
import {
  type StartWirelessDeviceImportTaskCommandInput,
  type StartWirelessDeviceImportTaskCommandOutput,
  StartWirelessDeviceImportTaskCommand,
} from "./commands/StartWirelessDeviceImportTaskCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestWirelessDeviceCommandInput,
  type TestWirelessDeviceCommandOutput,
  TestWirelessDeviceCommand,
} from "./commands/TestWirelessDeviceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDestinationCommandInput,
  type UpdateDestinationCommandOutput,
  UpdateDestinationCommand,
} from "./commands/UpdateDestinationCommand";
import {
  type UpdateEventConfigurationByResourceTypesCommandInput,
  type UpdateEventConfigurationByResourceTypesCommandOutput,
  UpdateEventConfigurationByResourceTypesCommand,
} from "./commands/UpdateEventConfigurationByResourceTypesCommand";
import {
  type UpdateFuotaTaskCommandInput,
  type UpdateFuotaTaskCommandOutput,
  UpdateFuotaTaskCommand,
} from "./commands/UpdateFuotaTaskCommand";
import {
  type UpdateLogLevelsByResourceTypesCommandInput,
  type UpdateLogLevelsByResourceTypesCommandOutput,
  UpdateLogLevelsByResourceTypesCommand,
} from "./commands/UpdateLogLevelsByResourceTypesCommand";
import {
  type UpdateMetricConfigurationCommandInput,
  type UpdateMetricConfigurationCommandOutput,
  UpdateMetricConfigurationCommand,
} from "./commands/UpdateMetricConfigurationCommand";
import {
  type UpdateMulticastGroupCommandInput,
  type UpdateMulticastGroupCommandOutput,
  UpdateMulticastGroupCommand,
} from "./commands/UpdateMulticastGroupCommand";
import {
  type UpdateNetworkAnalyzerConfigurationCommandInput,
  type UpdateNetworkAnalyzerConfigurationCommandOutput,
  UpdateNetworkAnalyzerConfigurationCommand,
} from "./commands/UpdateNetworkAnalyzerConfigurationCommand";
import {
  type UpdatePartnerAccountCommandInput,
  type UpdatePartnerAccountCommandOutput,
  UpdatePartnerAccountCommand,
} from "./commands/UpdatePartnerAccountCommand";
import {
  type UpdatePositionCommandInput,
  type UpdatePositionCommandOutput,
  UpdatePositionCommand,
} from "./commands/UpdatePositionCommand";
import {
  type UpdateResourceEventConfigurationCommandInput,
  type UpdateResourceEventConfigurationCommandOutput,
  UpdateResourceEventConfigurationCommand,
} from "./commands/UpdateResourceEventConfigurationCommand";
import {
  type UpdateResourcePositionCommandInput,
  type UpdateResourcePositionCommandOutput,
  UpdateResourcePositionCommand,
} from "./commands/UpdateResourcePositionCommand";
import {
  type UpdateWirelessDeviceCommandInput,
  type UpdateWirelessDeviceCommandOutput,
  UpdateWirelessDeviceCommand,
} from "./commands/UpdateWirelessDeviceCommand";
import {
  type UpdateWirelessDeviceImportTaskCommandInput,
  type UpdateWirelessDeviceImportTaskCommandOutput,
  UpdateWirelessDeviceImportTaskCommand,
} from "./commands/UpdateWirelessDeviceImportTaskCommand";
import {
  type UpdateWirelessGatewayCommandInput,
  type UpdateWirelessGatewayCommandOutput,
  UpdateWirelessGatewayCommand,
} from "./commands/UpdateWirelessGatewayCommand";
import { IoTWirelessClient } from "./IoTWirelessClient";
import { paginateListDestinations } from "./pagination/ListDestinationsPaginator";
import { paginateListDeviceProfiles } from "./pagination/ListDeviceProfilesPaginator";
import { paginateListFuotaTasks } from "./pagination/ListFuotaTasksPaginator";
import { paginateListMulticastGroupsByFuotaTask } from "./pagination/ListMulticastGroupsByFuotaTaskPaginator";
import { paginateListMulticastGroups } from "./pagination/ListMulticastGroupsPaginator";
import { paginateListNetworkAnalyzerConfigurations } from "./pagination/ListNetworkAnalyzerConfigurationsPaginator";
import { paginateListPositionConfigurations } from "./pagination/ListPositionConfigurationsPaginator";
import { paginateListQueuedMessages } from "./pagination/ListQueuedMessagesPaginator";
import { paginateListServiceProfiles } from "./pagination/ListServiceProfilesPaginator";
import { paginateListWirelessDevices } from "./pagination/ListWirelessDevicesPaginator";
import { paginateListWirelessGateways } from "./pagination/ListWirelessGatewaysPaginator";

const commands = {
  AssociateAwsAccountWithPartnerAccountCommand,
  AssociateMulticastGroupWithFuotaTaskCommand,
  AssociateWirelessDeviceWithFuotaTaskCommand,
  AssociateWirelessDeviceWithMulticastGroupCommand,
  AssociateWirelessDeviceWithThingCommand,
  AssociateWirelessGatewayWithCertificateCommand,
  AssociateWirelessGatewayWithThingCommand,
  CancelMulticastGroupSessionCommand,
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
  DisassociateAwsAccountFromPartnerAccountCommand,
  DisassociateMulticastGroupFromFuotaTaskCommand,
  DisassociateWirelessDeviceFromFuotaTaskCommand,
  DisassociateWirelessDeviceFromMulticastGroupCommand,
  DisassociateWirelessDeviceFromThingCommand,
  DisassociateWirelessGatewayFromCertificateCommand,
  DisassociateWirelessGatewayFromThingCommand,
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
  GetWirelessGatewayCommand,
  GetWirelessGatewayCertificateCommand,
  GetWirelessGatewayFirmwareInformationCommand,
  GetWirelessGatewayStatisticsCommand,
  GetWirelessGatewayTaskCommand,
  GetWirelessGatewayTaskDefinitionCommand,
  ListDestinationsCommand,
  ListDeviceProfilesCommand,
  ListDevicesForWirelessDeviceImportTaskCommand,
  ListEventConfigurationsCommand,
  ListFuotaTasksCommand,
  ListMulticastGroupsCommand,
  ListMulticastGroupsByFuotaTaskCommand,
  ListNetworkAnalyzerConfigurationsCommand,
  ListPartnerAccountsCommand,
  ListPositionConfigurationsCommand,
  ListQueuedMessagesCommand,
  ListServiceProfilesCommand,
  ListTagsForResourceCommand,
  ListWirelessDeviceImportTasksCommand,
  ListWirelessDevicesCommand,
  ListWirelessGatewaysCommand,
  ListWirelessGatewayTaskDefinitionsCommand,
  PutPositionConfigurationCommand,
  PutResourceLogLevelCommand,
  ResetAllResourceLogLevelsCommand,
  ResetResourceLogLevelCommand,
  SendDataToMulticastGroupCommand,
  SendDataToWirelessDeviceCommand,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommand,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
  StartFuotaTaskCommand,
  StartMulticastGroupSessionCommand,
  StartSingleWirelessDeviceImportTaskCommand,
  StartWirelessDeviceImportTaskCommand,
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
};
const paginators = {
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
};

/**
 * @public
 */
export interface IoTWirelessRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface IoTWireless {
  /**
   * @see {@link AssociateAwsAccountWithPartnerAccountCommand}
   */
  associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput>;
  associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;
  associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMulticastGroupWithFuotaTaskCommand}
   */
  associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput>;
  associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    cb: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): void;
  associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessDeviceWithFuotaTaskCommand}
   */
  associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput>;
  associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): void;
  associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessDeviceWithMulticastGroupCommand}
   */
  associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput>;
  associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessDeviceWithThingCommand}
   */
  associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput>;
  associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;
  associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessGatewayWithCertificateCommand}
   */
  associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput>;
  associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;
  associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessGatewayWithThingCommand}
   */
  associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput>;
  associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;
  associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMulticastGroupSessionCommand}
   */
  cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CancelMulticastGroupSessionCommandOutput>;
  cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    cb: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
  ): void;
  cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDestinationCommand}
   */
  createDestination(
    args: CreateDestinationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateDestinationCommandOutput>;
  createDestination(
    args: CreateDestinationCommandInput,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  createDestination(
    args: CreateDestinationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeviceProfileCommand}
   */
  createDeviceProfile(): Promise<CreateDeviceProfileCommandOutput>;
  createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateDeviceProfileCommandOutput>;
  createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;
  createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFuotaTaskCommand}
   */
  createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateFuotaTaskCommandOutput>;
  createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    cb: (err: any, data?: CreateFuotaTaskCommandOutput) => void
  ): void;
  createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMulticastGroupCommand}
   */
  createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateMulticastGroupCommandOutput>;
  createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    cb: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): void;
  createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkAnalyzerConfigurationCommand}
   */
  createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateNetworkAnalyzerConfigurationCommandOutput>;
  createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceProfileCommand}
   */
  createServiceProfile(): Promise<CreateServiceProfileCommandOutput>;
  createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateServiceProfileCommandOutput>;
  createServiceProfile(
    args: CreateServiceProfileCommandInput,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;
  createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessDeviceCommand}
   */
  createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateWirelessDeviceCommandOutput>;
  createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;
  createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessGatewayCommand}
   */
  createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateWirelessGatewayCommandOutput>;
  createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;
  createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessGatewayTaskCommand}
   */
  createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateWirelessGatewayTaskCommandOutput>;
  createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;
  createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessGatewayTaskDefinitionCommand}
   */
  createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput>;
  createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDestinationCommand}
   */
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteDestinationCommandOutput>;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  deleteDestination(
    args: DeleteDestinationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceProfileCommand}
   */
  deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteDeviceProfileCommandOutput>;
  deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;
  deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFuotaTaskCommand}
   */
  deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteFuotaTaskCommandOutput>;
  deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    cb: (err: any, data?: DeleteFuotaTaskCommandOutput) => void
  ): void;
  deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMulticastGroupCommand}
   */
  deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteMulticastGroupCommandOutput>;
  deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    cb: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): void;
  deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkAnalyzerConfigurationCommand}
   */
  deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput>;
  deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueuedMessagesCommand}
   */
  deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteQueuedMessagesCommandOutput>;
  deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    cb: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): void;
  deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceProfileCommand}
   */
  deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteServiceProfileCommandOutput>;
  deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;
  deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessDeviceCommand}
   */
  deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteWirelessDeviceCommandOutput>;
  deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;
  deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessDeviceImportTaskCommand}
   */
  deleteWirelessDeviceImportTask(
    args: DeleteWirelessDeviceImportTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteWirelessDeviceImportTaskCommandOutput>;
  deleteWirelessDeviceImportTask(
    args: DeleteWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: DeleteWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  deleteWirelessDeviceImportTask(
    args: DeleteWirelessDeviceImportTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessGatewayCommand}
   */
  deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteWirelessGatewayCommandOutput>;
  deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;
  deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessGatewayTaskCommand}
   */
  deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteWirelessGatewayTaskCommandOutput>;
  deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;
  deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessGatewayTaskDefinitionCommand}
   */
  deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput>;
  deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterWirelessDeviceCommand}
   */
  deregisterWirelessDevice(
    args: DeregisterWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DeregisterWirelessDeviceCommandOutput>;
  deregisterWirelessDevice(
    args: DeregisterWirelessDeviceCommandInput,
    cb: (err: any, data?: DeregisterWirelessDeviceCommandOutput) => void
  ): void;
  deregisterWirelessDevice(
    args: DeregisterWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DeregisterWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAwsAccountFromPartnerAccountCommand}
   */
  disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput>;
  disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;
  disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMulticastGroupFromFuotaTaskCommand}
   */
  disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput>;
  disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    cb: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): void;
  disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessDeviceFromFuotaTaskCommand}
   */
  disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput>;
  disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): void;
  disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessDeviceFromMulticastGroupCommand}
   */
  disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput>;
  disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessDeviceFromThingCommand}
   */
  disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput>;
  disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;
  disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessGatewayFromCertificateCommand}
   */
  disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput>;
  disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;
  disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessGatewayFromThingCommand}
   */
  disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput>;
  disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;
  disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDestinationCommand}
   */
  getDestination(
    args: GetDestinationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetDestinationCommandOutput>;
  getDestination(
    args: GetDestinationCommandInput,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  getDestination(
    args: GetDestinationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceProfileCommand}
   */
  getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetDeviceProfileCommandOutput>;
  getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;
  getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventConfigurationByResourceTypesCommand}
   */
  getEventConfigurationByResourceTypes(): Promise<GetEventConfigurationByResourceTypesCommandOutput>;
  getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetEventConfigurationByResourceTypesCommandOutput>;
  getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    cb: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFuotaTaskCommand}
   */
  getFuotaTask(
    args: GetFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetFuotaTaskCommandOutput>;
  getFuotaTask(
    args: GetFuotaTaskCommandInput,
    cb: (err: any, data?: GetFuotaTaskCommandOutput) => void
  ): void;
  getFuotaTask(
    args: GetFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogLevelsByResourceTypesCommand}
   */
  getLogLevelsByResourceTypes(): Promise<GetLogLevelsByResourceTypesCommandOutput>;
  getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetLogLevelsByResourceTypesCommandOutput>;
  getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricConfigurationCommand}
   */
  getMetricConfiguration(): Promise<GetMetricConfigurationCommandOutput>;
  getMetricConfiguration(
    args: GetMetricConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetMetricConfigurationCommandOutput>;
  getMetricConfiguration(
    args: GetMetricConfigurationCommandInput,
    cb: (err: any, data?: GetMetricConfigurationCommandOutput) => void
  ): void;
  getMetricConfiguration(
    args: GetMetricConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetMetricConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricsCommand}
   */
  getMetrics(): Promise<GetMetricsCommandOutput>;
  getMetrics(
    args: GetMetricsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetMetricsCommandOutput>;
  getMetrics(
    args: GetMetricsCommandInput,
    cb: (err: any, data?: GetMetricsCommandOutput) => void
  ): void;
  getMetrics(
    args: GetMetricsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMulticastGroupCommand}
   */
  getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetMulticastGroupCommandOutput>;
  getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    cb: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): void;
  getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMulticastGroupSessionCommand}
   */
  getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetMulticastGroupSessionCommandOutput>;
  getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    cb: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): void;
  getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkAnalyzerConfigurationCommand}
   */
  getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetNetworkAnalyzerConfigurationCommandOutput>;
  getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartnerAccountCommand}
   */
  getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetPartnerAccountCommandOutput>;
  getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;
  getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPositionCommand}
   */
  getPosition(
    args: GetPositionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetPositionCommandOutput>;
  getPosition(
    args: GetPositionCommandInput,
    cb: (err: any, data?: GetPositionCommandOutput) => void
  ): void;
  getPosition(
    args: GetPositionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetPositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPositionConfigurationCommand}
   */
  getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetPositionConfigurationCommandOutput>;
  getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    cb: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): void;
  getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPositionEstimateCommand}
   */
  getPositionEstimate(): Promise<GetPositionEstimateCommandOutput>;
  getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetPositionEstimateCommandOutput>;
  getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    cb: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): void;
  getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceEventConfigurationCommand}
   */
  getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetResourceEventConfigurationCommandOutput>;
  getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    cb: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): void;
  getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceLogLevelCommand}
   */
  getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetResourceLogLevelCommandOutput>;
  getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): void;
  getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePositionCommand}
   */
  getResourcePosition(
    args: GetResourcePositionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetResourcePositionCommandOutput>;
  getResourcePosition(
    args: GetResourcePositionCommandInput,
    cb: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): void;
  getResourcePosition(
    args: GetResourcePositionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceEndpointCommand}
   */
  getServiceEndpoint(): Promise<GetServiceEndpointCommandOutput>;
  getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetServiceEndpointCommandOutput>;
  getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;
  getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceProfileCommand}
   */
  getServiceProfile(
    args: GetServiceProfileCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetServiceProfileCommandOutput>;
  getServiceProfile(
    args: GetServiceProfileCommandInput,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;
  getServiceProfile(
    args: GetServiceProfileCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessDeviceCommand}
   */
  getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessDeviceCommandOutput>;
  getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;
  getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessDeviceImportTaskCommand}
   */
  getWirelessDeviceImportTask(
    args: GetWirelessDeviceImportTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessDeviceImportTaskCommandOutput>;
  getWirelessDeviceImportTask(
    args: GetWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: GetWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  getWirelessDeviceImportTask(
    args: GetWirelessDeviceImportTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessDeviceStatisticsCommand}
   */
  getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessDeviceStatisticsCommandOutput>;
  getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;
  getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayCommand}
   */
  getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessGatewayCommandOutput>;
  getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;
  getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayCertificateCommand}
   */
  getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessGatewayCertificateCommandOutput>;
  getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;
  getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayFirmwareInformationCommand}
   */
  getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput>;
  getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;
  getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayStatisticsCommand}
   */
  getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessGatewayStatisticsCommandOutput>;
  getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;
  getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayTaskCommand}
   */
  getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessGatewayTaskCommandOutput>;
  getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;
  getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayTaskDefinitionCommand}
   */
  getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput>;
  getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDestinationsCommand}
   */
  listDestinations(): Promise<ListDestinationsCommandOutput>;
  listDestinations(
    args: ListDestinationsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListDestinationsCommandOutput>;
  listDestinations(
    args: ListDestinationsCommandInput,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  listDestinations(
    args: ListDestinationsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceProfilesCommand}
   */
  listDeviceProfiles(): Promise<ListDeviceProfilesCommandOutput>;
  listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListDeviceProfilesCommandOutput>;
  listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;
  listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesForWirelessDeviceImportTaskCommand}
   */
  listDevicesForWirelessDeviceImportTask(
    args: ListDevicesForWirelessDeviceImportTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListDevicesForWirelessDeviceImportTaskCommandOutput>;
  listDevicesForWirelessDeviceImportTask(
    args: ListDevicesForWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: ListDevicesForWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  listDevicesForWirelessDeviceImportTask(
    args: ListDevicesForWirelessDeviceImportTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListDevicesForWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventConfigurationsCommand}
   */
  listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListEventConfigurationsCommandOutput>;
  listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    cb: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): void;
  listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFuotaTasksCommand}
   */
  listFuotaTasks(): Promise<ListFuotaTasksCommandOutput>;
  listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListFuotaTasksCommandOutput>;
  listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    cb: (err: any, data?: ListFuotaTasksCommandOutput) => void
  ): void;
  listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListFuotaTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMulticastGroupsCommand}
   */
  listMulticastGroups(): Promise<ListMulticastGroupsCommandOutput>;
  listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListMulticastGroupsCommandOutput>;
  listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    cb: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): void;
  listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMulticastGroupsByFuotaTaskCommand}
   */
  listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListMulticastGroupsByFuotaTaskCommandOutput>;
  listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    cb: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): void;
  listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkAnalyzerConfigurationsCommand}
   */
  listNetworkAnalyzerConfigurations(): Promise<ListNetworkAnalyzerConfigurationsCommandOutput>;
  listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListNetworkAnalyzerConfigurationsCommandOutput>;
  listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    cb: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): void;
  listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnerAccountsCommand}
   */
  listPartnerAccounts(): Promise<ListPartnerAccountsCommandOutput>;
  listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListPartnerAccountsCommandOutput>;
  listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;
  listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPositionConfigurationsCommand}
   */
  listPositionConfigurations(): Promise<ListPositionConfigurationsCommandOutput>;
  listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListPositionConfigurationsCommandOutput>;
  listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    cb: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): void;
  listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuedMessagesCommand}
   */
  listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListQueuedMessagesCommandOutput>;
  listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    cb: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): void;
  listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceProfilesCommand}
   */
  listServiceProfiles(): Promise<ListServiceProfilesCommandOutput>;
  listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListServiceProfilesCommandOutput>;
  listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;
  listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessDeviceImportTasksCommand}
   */
  listWirelessDeviceImportTasks(): Promise<ListWirelessDeviceImportTasksCommandOutput>;
  listWirelessDeviceImportTasks(
    args: ListWirelessDeviceImportTasksCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListWirelessDeviceImportTasksCommandOutput>;
  listWirelessDeviceImportTasks(
    args: ListWirelessDeviceImportTasksCommandInput,
    cb: (err: any, data?: ListWirelessDeviceImportTasksCommandOutput) => void
  ): void;
  listWirelessDeviceImportTasks(
    args: ListWirelessDeviceImportTasksCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListWirelessDeviceImportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessDevicesCommand}
   */
  listWirelessDevices(): Promise<ListWirelessDevicesCommandOutput>;
  listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListWirelessDevicesCommandOutput>;
  listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;
  listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessGatewaysCommand}
   */
  listWirelessGateways(): Promise<ListWirelessGatewaysCommandOutput>;
  listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListWirelessGatewaysCommandOutput>;
  listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;
  listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessGatewayTaskDefinitionsCommand}
   */
  listWirelessGatewayTaskDefinitions(): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput>;
  listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput>;
  listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;
  listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPositionConfigurationCommand}
   */
  putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<PutPositionConfigurationCommandOutput>;
  putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    cb: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): void;
  putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourceLogLevelCommand}
   */
  putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<PutResourceLogLevelCommandOutput>;
  putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): void;
  putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetAllResourceLogLevelsCommand}
   */
  resetAllResourceLogLevels(): Promise<ResetAllResourceLogLevelsCommandOutput>;
  resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ResetAllResourceLogLevelsCommandOutput>;
  resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): void;
  resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetResourceLogLevelCommand}
   */
  resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<ResetResourceLogLevelCommandOutput>;
  resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): void;
  resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDataToMulticastGroupCommand}
   */
  sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<SendDataToMulticastGroupCommandOutput>;
  sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    cb: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): void;
  sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDataToWirelessDeviceCommand}
   */
  sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<SendDataToWirelessDeviceCommandOutput>;
  sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;
  sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommand}
   */
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput>;
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    cb: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand}
   */
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput>;
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    cb: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFuotaTaskCommand}
   */
  startFuotaTask(
    args: StartFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<StartFuotaTaskCommandOutput>;
  startFuotaTask(
    args: StartFuotaTaskCommandInput,
    cb: (err: any, data?: StartFuotaTaskCommandOutput) => void
  ): void;
  startFuotaTask(
    args: StartFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: StartFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMulticastGroupSessionCommand}
   */
  startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<StartMulticastGroupSessionCommandOutput>;
  startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    cb: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): void;
  startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSingleWirelessDeviceImportTaskCommand}
   */
  startSingleWirelessDeviceImportTask(
    args: StartSingleWirelessDeviceImportTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<StartSingleWirelessDeviceImportTaskCommandOutput>;
  startSingleWirelessDeviceImportTask(
    args: StartSingleWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: StartSingleWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  startSingleWirelessDeviceImportTask(
    args: StartSingleWirelessDeviceImportTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: StartSingleWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWirelessDeviceImportTaskCommand}
   */
  startWirelessDeviceImportTask(
    args: StartWirelessDeviceImportTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<StartWirelessDeviceImportTaskCommandOutput>;
  startWirelessDeviceImportTask(
    args: StartWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: StartWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  startWirelessDeviceImportTask(
    args: StartWirelessDeviceImportTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: StartWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestWirelessDeviceCommand}
   */
  testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<TestWirelessDeviceCommandOutput>;
  testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;
  testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDestinationCommand}
   */
  updateDestination(
    args: UpdateDestinationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateDestinationCommandOutput>;
  updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  updateDestination(
    args: UpdateDestinationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventConfigurationByResourceTypesCommand}
   */
  updateEventConfigurationByResourceTypes(): Promise<UpdateEventConfigurationByResourceTypesCommandOutput>;
  updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateEventConfigurationByResourceTypesCommandOutput>;
  updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    cb: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFuotaTaskCommand}
   */
  updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateFuotaTaskCommandOutput>;
  updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    cb: (err: any, data?: UpdateFuotaTaskCommandOutput) => void
  ): void;
  updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLogLevelsByResourceTypesCommand}
   */
  updateLogLevelsByResourceTypes(): Promise<UpdateLogLevelsByResourceTypesCommandOutput>;
  updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateLogLevelsByResourceTypesCommandOutput>;
  updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMetricConfigurationCommand}
   */
  updateMetricConfiguration(): Promise<UpdateMetricConfigurationCommandOutput>;
  updateMetricConfiguration(
    args: UpdateMetricConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateMetricConfigurationCommandOutput>;
  updateMetricConfiguration(
    args: UpdateMetricConfigurationCommandInput,
    cb: (err: any, data?: UpdateMetricConfigurationCommandOutput) => void
  ): void;
  updateMetricConfiguration(
    args: UpdateMetricConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateMetricConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMulticastGroupCommand}
   */
  updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateMulticastGroupCommandOutput>;
  updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    cb: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): void;
  updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkAnalyzerConfigurationCommand}
   */
  updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput>;
  updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartnerAccountCommand}
   */
  updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdatePartnerAccountCommandOutput>;
  updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;
  updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePositionCommand}
   */
  updatePosition(
    args: UpdatePositionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdatePositionCommandOutput>;
  updatePosition(
    args: UpdatePositionCommandInput,
    cb: (err: any, data?: UpdatePositionCommandOutput) => void
  ): void;
  updatePosition(
    args: UpdatePositionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdatePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceEventConfigurationCommand}
   */
  updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateResourceEventConfigurationCommandOutput>;
  updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    cb: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): void;
  updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourcePositionCommand}
   */
  updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateResourcePositionCommandOutput>;
  updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    cb: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): void;
  updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWirelessDeviceCommand}
   */
  updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateWirelessDeviceCommandOutput>;
  updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;
  updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWirelessDeviceImportTaskCommand}
   */
  updateWirelessDeviceImportTask(
    args: UpdateWirelessDeviceImportTaskCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateWirelessDeviceImportTaskCommandOutput>;
  updateWirelessDeviceImportTask(
    args: UpdateWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: UpdateWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  updateWirelessDeviceImportTask(
    args: UpdateWirelessDeviceImportTaskCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWirelessGatewayCommand}
   */
  updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options?: IoTWirelessRequestOptions
  ): Promise<UpdateWirelessGatewayCommandOutput>;
  updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
  updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options: IoTWirelessRequestOptions,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;

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
   * @see {@link ListDeviceProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDeviceProfilesCommandOutput}.
   */
  paginateListDeviceProfiles(
    args?: ListDeviceProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDeviceProfilesCommandOutput>;

  /**
   * @see {@link ListFuotaTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFuotaTasksCommandOutput}.
   */
  paginateListFuotaTasks(
    args?: ListFuotaTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFuotaTasksCommandOutput>;

  /**
   * @see {@link ListMulticastGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMulticastGroupsCommandOutput}.
   */
  paginateListMulticastGroups(
    args?: ListMulticastGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMulticastGroupsCommandOutput>;

  /**
   * @see {@link ListMulticastGroupsByFuotaTaskCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMulticastGroupsByFuotaTaskCommandOutput}.
   */
  paginateListMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMulticastGroupsByFuotaTaskCommandOutput>;

  /**
   * @see {@link ListNetworkAnalyzerConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkAnalyzerConfigurationsCommandOutput}.
   */
  paginateListNetworkAnalyzerConfigurations(
    args?: ListNetworkAnalyzerConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkAnalyzerConfigurationsCommandOutput>;

  /**
   * @see {@link ListPositionConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPositionConfigurationsCommandOutput}.
   */
  paginateListPositionConfigurations(
    args?: ListPositionConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPositionConfigurationsCommandOutput>;

  /**
   * @see {@link ListQueuedMessagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueuedMessagesCommandOutput}.
   */
  paginateListQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueuedMessagesCommandOutput>;

  /**
   * @see {@link ListServiceProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceProfilesCommandOutput}.
   */
  paginateListServiceProfiles(
    args?: ListServiceProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceProfilesCommandOutput>;

  /**
   * @see {@link ListWirelessDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWirelessDevicesCommandOutput}.
   */
  paginateListWirelessDevices(
    args?: ListWirelessDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWirelessDevicesCommandOutput>;

  /**
   * @see {@link ListWirelessGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWirelessGatewaysCommandOutput}.
   */
  paginateListWirelessGateways(
    args?: ListWirelessGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWirelessGatewaysCommandOutput>;
}

/**
 * <p>AWS IoT Wireless provides bi-directional communication between internet-connected
 *             wireless devices and the AWS Cloud. To onboard both <a href="https://docs.aws.amazon.com/iot-wireless/latest/developerguide/iot-lorawan.html">LoRaWAN</a> and <a href="https://docs.aws.amazon.com/iot-wireless/latest/developerguide/iot-sidewalk.html">Sidewalk</a> devices to AWS IoT, use the IoT Wireless API. These wireless
 *             devices use the Low Power Wide Area Networking (LPWAN) communication protocol to
 *             communicate with AWS IoT. </p>
 *          <p>Using the API, you can perform create, read, update, and delete operations for your
 *             wireless devices, gateways, destinations, and profiles. After onboarding your devices,
 *             you can use the API operations to set log levels and monitor your devices with
 *             CloudWatch.</p>
 *          <p>You can also use the API operations to create multicast groups and schedule a
 *             multicast session for sending a downlink message to devices in the group. By using
 *             Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and
 *             schedule a session to update the firmware of individual devices or an entire group of
 *             devices in a multicast group.</p>
 *          <p>To connect to the AWS IoT Wireless Service, use the Service endpoints as described in
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/iot-lorawan.html#iot-wireless_region">IoT
 *             Wireless Service endpoints</a>. You can use both IPv4 and IPv6 protocols to connect
 *             to the endpoints and send requests to the AWS IoT Wireless service. For more information,
 *             see <a href="https://docs.aws.amazon.com/iot-wireless/latest/developerguide/wireless-ipv6-access.html">Using
 * 			IPv6 with AWS IoT Wireless</a>.</p>
 * @public
 */
export class IoTWireless extends IoTWirelessClient implements IoTWireless {}
createAggregatedClient(commands, IoTWireless, { paginators });

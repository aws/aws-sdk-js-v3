// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateAwsAccountWithPartnerAccountCommand,
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
} from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import {
  AssociateMulticastGroupWithFuotaTaskCommand,
  AssociateMulticastGroupWithFuotaTaskCommandInput,
  AssociateMulticastGroupWithFuotaTaskCommandOutput,
} from "./commands/AssociateMulticastGroupWithFuotaTaskCommand";
import {
  AssociateWirelessDeviceWithFuotaTaskCommand,
  AssociateWirelessDeviceWithFuotaTaskCommandInput,
  AssociateWirelessDeviceWithFuotaTaskCommandOutput,
} from "./commands/AssociateWirelessDeviceWithFuotaTaskCommand";
import {
  AssociateWirelessDeviceWithMulticastGroupCommand,
  AssociateWirelessDeviceWithMulticastGroupCommandInput,
  AssociateWirelessDeviceWithMulticastGroupCommandOutput,
} from "./commands/AssociateWirelessDeviceWithMulticastGroupCommand";
import {
  AssociateWirelessDeviceWithThingCommand,
  AssociateWirelessDeviceWithThingCommandInput,
  AssociateWirelessDeviceWithThingCommandOutput,
} from "./commands/AssociateWirelessDeviceWithThingCommand";
import {
  AssociateWirelessGatewayWithCertificateCommand,
  AssociateWirelessGatewayWithCertificateCommandInput,
  AssociateWirelessGatewayWithCertificateCommandOutput,
} from "./commands/AssociateWirelessGatewayWithCertificateCommand";
import {
  AssociateWirelessGatewayWithThingCommand,
  AssociateWirelessGatewayWithThingCommandInput,
  AssociateWirelessGatewayWithThingCommandOutput,
} from "./commands/AssociateWirelessGatewayWithThingCommand";
import {
  CancelMulticastGroupSessionCommand,
  CancelMulticastGroupSessionCommandInput,
  CancelMulticastGroupSessionCommandOutput,
} from "./commands/CancelMulticastGroupSessionCommand";
import {
  CreateDestinationCommand,
  CreateDestinationCommandInput,
  CreateDestinationCommandOutput,
} from "./commands/CreateDestinationCommand";
import {
  CreateDeviceProfileCommand,
  CreateDeviceProfileCommandInput,
  CreateDeviceProfileCommandOutput,
} from "./commands/CreateDeviceProfileCommand";
import {
  CreateFuotaTaskCommand,
  CreateFuotaTaskCommandInput,
  CreateFuotaTaskCommandOutput,
} from "./commands/CreateFuotaTaskCommand";
import {
  CreateMulticastGroupCommand,
  CreateMulticastGroupCommandInput,
  CreateMulticastGroupCommandOutput,
} from "./commands/CreateMulticastGroupCommand";
import {
  CreateNetworkAnalyzerConfigurationCommand,
  CreateNetworkAnalyzerConfigurationCommandInput,
  CreateNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/CreateNetworkAnalyzerConfigurationCommand";
import {
  CreateServiceProfileCommand,
  CreateServiceProfileCommandInput,
  CreateServiceProfileCommandOutput,
} from "./commands/CreateServiceProfileCommand";
import {
  CreateWirelessDeviceCommand,
  CreateWirelessDeviceCommandInput,
  CreateWirelessDeviceCommandOutput,
} from "./commands/CreateWirelessDeviceCommand";
import {
  CreateWirelessGatewayCommand,
  CreateWirelessGatewayCommandInput,
  CreateWirelessGatewayCommandOutput,
} from "./commands/CreateWirelessGatewayCommand";
import {
  CreateWirelessGatewayTaskCommand,
  CreateWirelessGatewayTaskCommandInput,
  CreateWirelessGatewayTaskCommandOutput,
} from "./commands/CreateWirelessGatewayTaskCommand";
import {
  CreateWirelessGatewayTaskDefinitionCommand,
  CreateWirelessGatewayTaskDefinitionCommandInput,
  CreateWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/CreateWirelessGatewayTaskDefinitionCommand";
import {
  DeleteDestinationCommand,
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import {
  DeleteDeviceProfileCommand,
  DeleteDeviceProfileCommandInput,
  DeleteDeviceProfileCommandOutput,
} from "./commands/DeleteDeviceProfileCommand";
import {
  DeleteFuotaTaskCommand,
  DeleteFuotaTaskCommandInput,
  DeleteFuotaTaskCommandOutput,
} from "./commands/DeleteFuotaTaskCommand";
import {
  DeleteMulticastGroupCommand,
  DeleteMulticastGroupCommandInput,
  DeleteMulticastGroupCommandOutput,
} from "./commands/DeleteMulticastGroupCommand";
import {
  DeleteNetworkAnalyzerConfigurationCommand,
  DeleteNetworkAnalyzerConfigurationCommandInput,
  DeleteNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/DeleteNetworkAnalyzerConfigurationCommand";
import {
  DeleteQueuedMessagesCommand,
  DeleteQueuedMessagesCommandInput,
  DeleteQueuedMessagesCommandOutput,
} from "./commands/DeleteQueuedMessagesCommand";
import {
  DeleteServiceProfileCommand,
  DeleteServiceProfileCommandInput,
  DeleteServiceProfileCommandOutput,
} from "./commands/DeleteServiceProfileCommand";
import {
  DeleteWirelessDeviceCommand,
  DeleteWirelessDeviceCommandInput,
  DeleteWirelessDeviceCommandOutput,
} from "./commands/DeleteWirelessDeviceCommand";
import {
  DeleteWirelessDeviceImportTaskCommand,
  DeleteWirelessDeviceImportTaskCommandInput,
  DeleteWirelessDeviceImportTaskCommandOutput,
} from "./commands/DeleteWirelessDeviceImportTaskCommand";
import {
  DeleteWirelessGatewayCommand,
  DeleteWirelessGatewayCommandInput,
  DeleteWirelessGatewayCommandOutput,
} from "./commands/DeleteWirelessGatewayCommand";
import {
  DeleteWirelessGatewayTaskCommand,
  DeleteWirelessGatewayTaskCommandInput,
  DeleteWirelessGatewayTaskCommandOutput,
} from "./commands/DeleteWirelessGatewayTaskCommand";
import {
  DeleteWirelessGatewayTaskDefinitionCommand,
  DeleteWirelessGatewayTaskDefinitionCommandInput,
  DeleteWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/DeleteWirelessGatewayTaskDefinitionCommand";
import {
  DeregisterWirelessDeviceCommand,
  DeregisterWirelessDeviceCommandInput,
  DeregisterWirelessDeviceCommandOutput,
} from "./commands/DeregisterWirelessDeviceCommand";
import {
  DisassociateAwsAccountFromPartnerAccountCommand,
  DisassociateAwsAccountFromPartnerAccountCommandInput,
  DisassociateAwsAccountFromPartnerAccountCommandOutput,
} from "./commands/DisassociateAwsAccountFromPartnerAccountCommand";
import {
  DisassociateMulticastGroupFromFuotaTaskCommand,
  DisassociateMulticastGroupFromFuotaTaskCommandInput,
  DisassociateMulticastGroupFromFuotaTaskCommandOutput,
} from "./commands/DisassociateMulticastGroupFromFuotaTaskCommand";
import {
  DisassociateWirelessDeviceFromFuotaTaskCommand,
  DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  DisassociateWirelessDeviceFromFuotaTaskCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromFuotaTaskCommand";
import {
  DisassociateWirelessDeviceFromMulticastGroupCommand,
  DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  DisassociateWirelessDeviceFromMulticastGroupCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromMulticastGroupCommand";
import {
  DisassociateWirelessDeviceFromThingCommand,
  DisassociateWirelessDeviceFromThingCommandInput,
  DisassociateWirelessDeviceFromThingCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromThingCommand";
import {
  DisassociateWirelessGatewayFromCertificateCommand,
  DisassociateWirelessGatewayFromCertificateCommandInput,
  DisassociateWirelessGatewayFromCertificateCommandOutput,
} from "./commands/DisassociateWirelessGatewayFromCertificateCommand";
import {
  DisassociateWirelessGatewayFromThingCommand,
  DisassociateWirelessGatewayFromThingCommandInput,
  DisassociateWirelessGatewayFromThingCommandOutput,
} from "./commands/DisassociateWirelessGatewayFromThingCommand";
import {
  GetDestinationCommand,
  GetDestinationCommandInput,
  GetDestinationCommandOutput,
} from "./commands/GetDestinationCommand";
import {
  GetDeviceProfileCommand,
  GetDeviceProfileCommandInput,
  GetDeviceProfileCommandOutput,
} from "./commands/GetDeviceProfileCommand";
import {
  GetEventConfigurationByResourceTypesCommand,
  GetEventConfigurationByResourceTypesCommandInput,
  GetEventConfigurationByResourceTypesCommandOutput,
} from "./commands/GetEventConfigurationByResourceTypesCommand";
import {
  GetFuotaTaskCommand,
  GetFuotaTaskCommandInput,
  GetFuotaTaskCommandOutput,
} from "./commands/GetFuotaTaskCommand";
import {
  GetLogLevelsByResourceTypesCommand,
  GetLogLevelsByResourceTypesCommandInput,
  GetLogLevelsByResourceTypesCommandOutput,
} from "./commands/GetLogLevelsByResourceTypesCommand";
import {
  GetMulticastGroupCommand,
  GetMulticastGroupCommandInput,
  GetMulticastGroupCommandOutput,
} from "./commands/GetMulticastGroupCommand";
import {
  GetMulticastGroupSessionCommand,
  GetMulticastGroupSessionCommandInput,
  GetMulticastGroupSessionCommandOutput,
} from "./commands/GetMulticastGroupSessionCommand";
import {
  GetNetworkAnalyzerConfigurationCommand,
  GetNetworkAnalyzerConfigurationCommandInput,
  GetNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/GetNetworkAnalyzerConfigurationCommand";
import {
  GetPartnerAccountCommand,
  GetPartnerAccountCommandInput,
  GetPartnerAccountCommandOutput,
} from "./commands/GetPartnerAccountCommand";
import { GetPositionCommand, GetPositionCommandInput, GetPositionCommandOutput } from "./commands/GetPositionCommand";
import {
  GetPositionConfigurationCommand,
  GetPositionConfigurationCommandInput,
  GetPositionConfigurationCommandOutput,
} from "./commands/GetPositionConfigurationCommand";
import {
  GetPositionEstimateCommand,
  GetPositionEstimateCommandInput,
  GetPositionEstimateCommandOutput,
} from "./commands/GetPositionEstimateCommand";
import {
  GetResourceEventConfigurationCommand,
  GetResourceEventConfigurationCommandInput,
  GetResourceEventConfigurationCommandOutput,
} from "./commands/GetResourceEventConfigurationCommand";
import {
  GetResourceLogLevelCommand,
  GetResourceLogLevelCommandInput,
  GetResourceLogLevelCommandOutput,
} from "./commands/GetResourceLogLevelCommand";
import {
  GetResourcePositionCommand,
  GetResourcePositionCommandInput,
  GetResourcePositionCommandOutput,
} from "./commands/GetResourcePositionCommand";
import {
  GetServiceEndpointCommand,
  GetServiceEndpointCommandInput,
  GetServiceEndpointCommandOutput,
} from "./commands/GetServiceEndpointCommand";
import {
  GetServiceProfileCommand,
  GetServiceProfileCommandInput,
  GetServiceProfileCommandOutput,
} from "./commands/GetServiceProfileCommand";
import {
  GetWirelessDeviceCommand,
  GetWirelessDeviceCommandInput,
  GetWirelessDeviceCommandOutput,
} from "./commands/GetWirelessDeviceCommand";
import {
  GetWirelessDeviceImportTaskCommand,
  GetWirelessDeviceImportTaskCommandInput,
  GetWirelessDeviceImportTaskCommandOutput,
} from "./commands/GetWirelessDeviceImportTaskCommand";
import {
  GetWirelessDeviceStatisticsCommand,
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
} from "./commands/GetWirelessDeviceStatisticsCommand";
import {
  GetWirelessGatewayCertificateCommand,
  GetWirelessGatewayCertificateCommandInput,
  GetWirelessGatewayCertificateCommandOutput,
} from "./commands/GetWirelessGatewayCertificateCommand";
import {
  GetWirelessGatewayCommand,
  GetWirelessGatewayCommandInput,
  GetWirelessGatewayCommandOutput,
} from "./commands/GetWirelessGatewayCommand";
import {
  GetWirelessGatewayFirmwareInformationCommand,
  GetWirelessGatewayFirmwareInformationCommandInput,
  GetWirelessGatewayFirmwareInformationCommandOutput,
} from "./commands/GetWirelessGatewayFirmwareInformationCommand";
import {
  GetWirelessGatewayStatisticsCommand,
  GetWirelessGatewayStatisticsCommandInput,
  GetWirelessGatewayStatisticsCommandOutput,
} from "./commands/GetWirelessGatewayStatisticsCommand";
import {
  GetWirelessGatewayTaskCommand,
  GetWirelessGatewayTaskCommandInput,
  GetWirelessGatewayTaskCommandOutput,
} from "./commands/GetWirelessGatewayTaskCommand";
import {
  GetWirelessGatewayTaskDefinitionCommand,
  GetWirelessGatewayTaskDefinitionCommandInput,
  GetWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/GetWirelessGatewayTaskDefinitionCommand";
import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "./commands/ListDestinationsCommand";
import {
  ListDeviceProfilesCommand,
  ListDeviceProfilesCommandInput,
  ListDeviceProfilesCommandOutput,
} from "./commands/ListDeviceProfilesCommand";
import {
  ListDevicesForWirelessDeviceImportTaskCommand,
  ListDevicesForWirelessDeviceImportTaskCommandInput,
  ListDevicesForWirelessDeviceImportTaskCommandOutput,
} from "./commands/ListDevicesForWirelessDeviceImportTaskCommand";
import {
  ListEventConfigurationsCommand,
  ListEventConfigurationsCommandInput,
  ListEventConfigurationsCommandOutput,
} from "./commands/ListEventConfigurationsCommand";
import {
  ListFuotaTasksCommand,
  ListFuotaTasksCommandInput,
  ListFuotaTasksCommandOutput,
} from "./commands/ListFuotaTasksCommand";
import {
  ListMulticastGroupsByFuotaTaskCommand,
  ListMulticastGroupsByFuotaTaskCommandInput,
  ListMulticastGroupsByFuotaTaskCommandOutput,
} from "./commands/ListMulticastGroupsByFuotaTaskCommand";
import {
  ListMulticastGroupsCommand,
  ListMulticastGroupsCommandInput,
  ListMulticastGroupsCommandOutput,
} from "./commands/ListMulticastGroupsCommand";
import {
  ListNetworkAnalyzerConfigurationsCommand,
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput,
} from "./commands/ListNetworkAnalyzerConfigurationsCommand";
import {
  ListPartnerAccountsCommand,
  ListPartnerAccountsCommandInput,
  ListPartnerAccountsCommandOutput,
} from "./commands/ListPartnerAccountsCommand";
import {
  ListPositionConfigurationsCommand,
  ListPositionConfigurationsCommandInput,
  ListPositionConfigurationsCommandOutput,
} from "./commands/ListPositionConfigurationsCommand";
import {
  ListQueuedMessagesCommand,
  ListQueuedMessagesCommandInput,
  ListQueuedMessagesCommandOutput,
} from "./commands/ListQueuedMessagesCommand";
import {
  ListServiceProfilesCommand,
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput,
} from "./commands/ListServiceProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWirelessDeviceImportTasksCommand,
  ListWirelessDeviceImportTasksCommandInput,
  ListWirelessDeviceImportTasksCommandOutput,
} from "./commands/ListWirelessDeviceImportTasksCommand";
import {
  ListWirelessDevicesCommand,
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "./commands/ListWirelessDevicesCommand";
import {
  ListWirelessGatewaysCommand,
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "./commands/ListWirelessGatewaysCommand";
import {
  ListWirelessGatewayTaskDefinitionsCommand,
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
} from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import {
  PutPositionConfigurationCommand,
  PutPositionConfigurationCommandInput,
  PutPositionConfigurationCommandOutput,
} from "./commands/PutPositionConfigurationCommand";
import {
  PutResourceLogLevelCommand,
  PutResourceLogLevelCommandInput,
  PutResourceLogLevelCommandOutput,
} from "./commands/PutResourceLogLevelCommand";
import {
  ResetAllResourceLogLevelsCommand,
  ResetAllResourceLogLevelsCommandInput,
  ResetAllResourceLogLevelsCommandOutput,
} from "./commands/ResetAllResourceLogLevelsCommand";
import {
  ResetResourceLogLevelCommand,
  ResetResourceLogLevelCommandInput,
  ResetResourceLogLevelCommandOutput,
} from "./commands/ResetResourceLogLevelCommand";
import {
  SendDataToMulticastGroupCommand,
  SendDataToMulticastGroupCommandInput,
  SendDataToMulticastGroupCommandOutput,
} from "./commands/SendDataToMulticastGroupCommand";
import {
  SendDataToWirelessDeviceCommand,
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
} from "./commands/SendDataToWirelessDeviceCommand";
import {
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommand,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput,
} from "./commands/StartBulkAssociateWirelessDeviceWithMulticastGroupCommand";
import {
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
} from "./commands/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand";
import {
  StartFuotaTaskCommand,
  StartFuotaTaskCommandInput,
  StartFuotaTaskCommandOutput,
} from "./commands/StartFuotaTaskCommand";
import {
  StartMulticastGroupSessionCommand,
  StartMulticastGroupSessionCommandInput,
  StartMulticastGroupSessionCommandOutput,
} from "./commands/StartMulticastGroupSessionCommand";
import {
  StartSingleWirelessDeviceImportTaskCommand,
  StartSingleWirelessDeviceImportTaskCommandInput,
  StartSingleWirelessDeviceImportTaskCommandOutput,
} from "./commands/StartSingleWirelessDeviceImportTaskCommand";
import {
  StartWirelessDeviceImportTaskCommand,
  StartWirelessDeviceImportTaskCommandInput,
  StartWirelessDeviceImportTaskCommandOutput,
} from "./commands/StartWirelessDeviceImportTaskCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestWirelessDeviceCommand,
  TestWirelessDeviceCommandInput,
  TestWirelessDeviceCommandOutput,
} from "./commands/TestWirelessDeviceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDestinationCommand,
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
} from "./commands/UpdateDestinationCommand";
import {
  UpdateEventConfigurationByResourceTypesCommand,
  UpdateEventConfigurationByResourceTypesCommandInput,
  UpdateEventConfigurationByResourceTypesCommandOutput,
} from "./commands/UpdateEventConfigurationByResourceTypesCommand";
import {
  UpdateFuotaTaskCommand,
  UpdateFuotaTaskCommandInput,
  UpdateFuotaTaskCommandOutput,
} from "./commands/UpdateFuotaTaskCommand";
import {
  UpdateLogLevelsByResourceTypesCommand,
  UpdateLogLevelsByResourceTypesCommandInput,
  UpdateLogLevelsByResourceTypesCommandOutput,
} from "./commands/UpdateLogLevelsByResourceTypesCommand";
import {
  UpdateMulticastGroupCommand,
  UpdateMulticastGroupCommandInput,
  UpdateMulticastGroupCommandOutput,
} from "./commands/UpdateMulticastGroupCommand";
import {
  UpdateNetworkAnalyzerConfigurationCommand,
  UpdateNetworkAnalyzerConfigurationCommandInput,
  UpdateNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/UpdateNetworkAnalyzerConfigurationCommand";
import {
  UpdatePartnerAccountCommand,
  UpdatePartnerAccountCommandInput,
  UpdatePartnerAccountCommandOutput,
} from "./commands/UpdatePartnerAccountCommand";
import {
  UpdatePositionCommand,
  UpdatePositionCommandInput,
  UpdatePositionCommandOutput,
} from "./commands/UpdatePositionCommand";
import {
  UpdateResourceEventConfigurationCommand,
  UpdateResourceEventConfigurationCommandInput,
  UpdateResourceEventConfigurationCommandOutput,
} from "./commands/UpdateResourceEventConfigurationCommand";
import {
  UpdateResourcePositionCommand,
  UpdateResourcePositionCommandInput,
  UpdateResourcePositionCommandOutput,
} from "./commands/UpdateResourcePositionCommand";
import {
  UpdateWirelessDeviceCommand,
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
} from "./commands/UpdateWirelessDeviceCommand";
import {
  UpdateWirelessDeviceImportTaskCommand,
  UpdateWirelessDeviceImportTaskCommandInput,
  UpdateWirelessDeviceImportTaskCommandOutput,
} from "./commands/UpdateWirelessDeviceImportTaskCommand";
import {
  UpdateWirelessGatewayCommand,
  UpdateWirelessGatewayCommandInput,
  UpdateWirelessGatewayCommandOutput,
} from "./commands/UpdateWirelessGatewayCommand";
import { IoTWirelessClient, IoTWirelessClientConfig } from "./IoTWirelessClient";

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

export interface IoTWireless {
  /**
   * @see {@link AssociateAwsAccountWithPartnerAccountCommand}
   */
  associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput>;
  associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;
  associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMulticastGroupWithFuotaTaskCommand}
   */
  associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput>;
  associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    cb: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): void;
  associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessDeviceWithFuotaTaskCommand}
   */
  associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput>;
  associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): void;
  associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessDeviceWithMulticastGroupCommand}
   */
  associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput>;
  associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessDeviceWithThingCommand}
   */
  associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput>;
  associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;
  associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessGatewayWithCertificateCommand}
   */
  associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput>;
  associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;
  associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWirelessGatewayWithThingCommand}
   */
  associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput>;
  associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;
  associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMulticastGroupSessionCommand}
   */
  cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMulticastGroupSessionCommandOutput>;
  cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    cb: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
  ): void;
  cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
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
   * @see {@link CreateDeviceProfileCommand}
   */
  createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceProfileCommandOutput>;
  createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;
  createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFuotaTaskCommand}
   */
  createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFuotaTaskCommandOutput>;
  createFuotaTask(args: CreateFuotaTaskCommandInput, cb: (err: any, data?: CreateFuotaTaskCommandOutput) => void): void;
  createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMulticastGroupCommand}
   */
  createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMulticastGroupCommandOutput>;
  createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    cb: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): void;
  createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkAnalyzerConfigurationCommand}
   */
  createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkAnalyzerConfigurationCommandOutput>;
  createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceProfileCommand}
   */
  createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceProfileCommandOutput>;
  createServiceProfile(
    args: CreateServiceProfileCommandInput,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;
  createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessDeviceCommand}
   */
  createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessDeviceCommandOutput>;
  createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;
  createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessGatewayCommand}
   */
  createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayCommandOutput>;
  createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;
  createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessGatewayTaskCommand}
   */
  createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayTaskCommandOutput>;
  createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;
  createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWirelessGatewayTaskDefinitionCommand}
   */
  createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput>;
  createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
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
   * @see {@link DeleteDeviceProfileCommand}
   */
  deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceProfileCommandOutput>;
  deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;
  deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFuotaTaskCommand}
   */
  deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFuotaTaskCommandOutput>;
  deleteFuotaTask(args: DeleteFuotaTaskCommandInput, cb: (err: any, data?: DeleteFuotaTaskCommandOutput) => void): void;
  deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMulticastGroupCommand}
   */
  deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMulticastGroupCommandOutput>;
  deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    cb: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): void;
  deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkAnalyzerConfigurationCommand}
   */
  deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput>;
  deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueuedMessagesCommand}
   */
  deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueuedMessagesCommandOutput>;
  deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    cb: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): void;
  deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceProfileCommand}
   */
  deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceProfileCommandOutput>;
  deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;
  deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessDeviceCommand}
   */
  deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessDeviceCommandOutput>;
  deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;
  deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessDeviceImportTaskCommand}
   */
  deleteWirelessDeviceImportTask(
    args: DeleteWirelessDeviceImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessDeviceImportTaskCommandOutput>;
  deleteWirelessDeviceImportTask(
    args: DeleteWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: DeleteWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  deleteWirelessDeviceImportTask(
    args: DeleteWirelessDeviceImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessGatewayCommand}
   */
  deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayCommandOutput>;
  deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;
  deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessGatewayTaskCommand}
   */
  deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayTaskCommandOutput>;
  deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;
  deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWirelessGatewayTaskDefinitionCommand}
   */
  deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput>;
  deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterWirelessDeviceCommand}
   */
  deregisterWirelessDevice(
    args: DeregisterWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterWirelessDeviceCommandOutput>;
  deregisterWirelessDevice(
    args: DeregisterWirelessDeviceCommandInput,
    cb: (err: any, data?: DeregisterWirelessDeviceCommandOutput) => void
  ): void;
  deregisterWirelessDevice(
    args: DeregisterWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAwsAccountFromPartnerAccountCommand}
   */
  disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput>;
  disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;
  disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMulticastGroupFromFuotaTaskCommand}
   */
  disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput>;
  disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    cb: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): void;
  disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessDeviceFromFuotaTaskCommand}
   */
  disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput>;
  disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): void;
  disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessDeviceFromMulticastGroupCommand}
   */
  disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput>;
  disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessDeviceFromThingCommand}
   */
  disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput>;
  disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;
  disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessGatewayFromCertificateCommand}
   */
  disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput>;
  disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;
  disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWirelessGatewayFromThingCommand}
   */
  disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput>;
  disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;
  disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
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
   * @see {@link GetDeviceProfileCommand}
   */
  getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceProfileCommandOutput>;
  getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;
  getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventConfigurationByResourceTypesCommand}
   */
  getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventConfigurationByResourceTypesCommandOutput>;
  getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    cb: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFuotaTaskCommand}
   */
  getFuotaTask(args: GetFuotaTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetFuotaTaskCommandOutput>;
  getFuotaTask(args: GetFuotaTaskCommandInput, cb: (err: any, data?: GetFuotaTaskCommandOutput) => void): void;
  getFuotaTask(
    args: GetFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLogLevelsByResourceTypesCommand}
   */
  getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogLevelsByResourceTypesCommandOutput>;
  getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMulticastGroupCommand}
   */
  getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMulticastGroupCommandOutput>;
  getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    cb: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): void;
  getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMulticastGroupSessionCommand}
   */
  getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMulticastGroupSessionCommandOutput>;
  getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    cb: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): void;
  getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkAnalyzerConfigurationCommand}
   */
  getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkAnalyzerConfigurationCommandOutput>;
  getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPartnerAccountCommand}
   */
  getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartnerAccountCommandOutput>;
  getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;
  getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPositionCommand}
   */
  getPosition(args: GetPositionCommandInput, options?: __HttpHandlerOptions): Promise<GetPositionCommandOutput>;
  getPosition(args: GetPositionCommandInput, cb: (err: any, data?: GetPositionCommandOutput) => void): void;
  getPosition(
    args: GetPositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPositionConfigurationCommand}
   */
  getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPositionConfigurationCommandOutput>;
  getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    cb: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): void;
  getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPositionEstimateCommand}
   */
  getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPositionEstimateCommandOutput>;
  getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    cb: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): void;
  getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceEventConfigurationCommand}
   */
  getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceEventConfigurationCommandOutput>;
  getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    cb: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): void;
  getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceLogLevelCommand}
   */
  getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceLogLevelCommandOutput>;
  getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): void;
  getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePositionCommand}
   */
  getResourcePosition(
    args: GetResourcePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePositionCommandOutput>;
  getResourcePosition(
    args: GetResourcePositionCommandInput,
    cb: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): void;
  getResourcePosition(
    args: GetResourcePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceEndpointCommand}
   */
  getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceEndpointCommandOutput>;
  getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;
  getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceProfileCommand}
   */
  getServiceProfile(
    args: GetServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceProfileCommandOutput>;
  getServiceProfile(
    args: GetServiceProfileCommandInput,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;
  getServiceProfile(
    args: GetServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessDeviceCommand}
   */
  getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceCommandOutput>;
  getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;
  getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessDeviceImportTaskCommand}
   */
  getWirelessDeviceImportTask(
    args: GetWirelessDeviceImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceImportTaskCommandOutput>;
  getWirelessDeviceImportTask(
    args: GetWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: GetWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  getWirelessDeviceImportTask(
    args: GetWirelessDeviceImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessDeviceStatisticsCommand}
   */
  getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceStatisticsCommandOutput>;
  getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;
  getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayCommand}
   */
  getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayCommandOutput>;
  getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;
  getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayCertificateCommand}
   */
  getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayCertificateCommandOutput>;
  getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;
  getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayFirmwareInformationCommand}
   */
  getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput>;
  getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;
  getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayStatisticsCommand}
   */
  getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayStatisticsCommandOutput>;
  getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;
  getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayTaskCommand}
   */
  getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayTaskCommandOutput>;
  getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;
  getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWirelessGatewayTaskDefinitionCommand}
   */
  getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput>;
  getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDestinationsCommand}
   */
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
   * @see {@link ListDeviceProfilesCommand}
   */
  listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceProfilesCommandOutput>;
  listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;
  listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesForWirelessDeviceImportTaskCommand}
   */
  listDevicesForWirelessDeviceImportTask(
    args: ListDevicesForWirelessDeviceImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicesForWirelessDeviceImportTaskCommandOutput>;
  listDevicesForWirelessDeviceImportTask(
    args: ListDevicesForWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: ListDevicesForWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  listDevicesForWirelessDeviceImportTask(
    args: ListDevicesForWirelessDeviceImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesForWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventConfigurationsCommand}
   */
  listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventConfigurationsCommandOutput>;
  listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    cb: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): void;
  listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFuotaTasksCommand}
   */
  listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFuotaTasksCommandOutput>;
  listFuotaTasks(args: ListFuotaTasksCommandInput, cb: (err: any, data?: ListFuotaTasksCommandOutput) => void): void;
  listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFuotaTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMulticastGroupsCommand}
   */
  listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMulticastGroupsCommandOutput>;
  listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    cb: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): void;
  listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMulticastGroupsByFuotaTaskCommand}
   */
  listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMulticastGroupsByFuotaTaskCommandOutput>;
  listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    cb: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): void;
  listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkAnalyzerConfigurationsCommand}
   */
  listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkAnalyzerConfigurationsCommandOutput>;
  listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    cb: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): void;
  listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnerAccountsCommand}
   */
  listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerAccountsCommandOutput>;
  listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;
  listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPositionConfigurationsCommand}
   */
  listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPositionConfigurationsCommandOutput>;
  listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    cb: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): void;
  listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuedMessagesCommand}
   */
  listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueuedMessagesCommandOutput>;
  listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    cb: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): void;
  listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceProfilesCommand}
   */
  listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceProfilesCommandOutput>;
  listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;
  listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
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
   * @see {@link ListWirelessDeviceImportTasksCommand}
   */
  listWirelessDeviceImportTasks(
    args: ListWirelessDeviceImportTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessDeviceImportTasksCommandOutput>;
  listWirelessDeviceImportTasks(
    args: ListWirelessDeviceImportTasksCommandInput,
    cb: (err: any, data?: ListWirelessDeviceImportTasksCommandOutput) => void
  ): void;
  listWirelessDeviceImportTasks(
    args: ListWirelessDeviceImportTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessDeviceImportTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessDevicesCommand}
   */
  listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessDevicesCommandOutput>;
  listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;
  listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessGatewaysCommand}
   */
  listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessGatewaysCommandOutput>;
  listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;
  listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWirelessGatewayTaskDefinitionsCommand}
   */
  listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput>;
  listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;
  listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPositionConfigurationCommand}
   */
  putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPositionConfigurationCommandOutput>;
  putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    cb: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): void;
  putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourceLogLevelCommand}
   */
  putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceLogLevelCommandOutput>;
  putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): void;
  putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetAllResourceLogLevelsCommand}
   */
  resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAllResourceLogLevelsCommandOutput>;
  resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): void;
  resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetResourceLogLevelCommand}
   */
  resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetResourceLogLevelCommandOutput>;
  resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): void;
  resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDataToMulticastGroupCommand}
   */
  sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataToMulticastGroupCommandOutput>;
  sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    cb: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): void;
  sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link SendDataToWirelessDeviceCommand}
   */
  sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataToWirelessDeviceCommandOutput>;
  sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;
  sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBulkAssociateWirelessDeviceWithMulticastGroupCommand}
   */
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput>;
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    cb: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand}
   */
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput>;
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    cb: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFuotaTaskCommand}
   */
  startFuotaTask(
    args: StartFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFuotaTaskCommandOutput>;
  startFuotaTask(args: StartFuotaTaskCommandInput, cb: (err: any, data?: StartFuotaTaskCommandOutput) => void): void;
  startFuotaTask(
    args: StartFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMulticastGroupSessionCommand}
   */
  startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMulticastGroupSessionCommandOutput>;
  startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    cb: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): void;
  startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSingleWirelessDeviceImportTaskCommand}
   */
  startSingleWirelessDeviceImportTask(
    args: StartSingleWirelessDeviceImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSingleWirelessDeviceImportTaskCommandOutput>;
  startSingleWirelessDeviceImportTask(
    args: StartSingleWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: StartSingleWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  startSingleWirelessDeviceImportTask(
    args: StartSingleWirelessDeviceImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSingleWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWirelessDeviceImportTaskCommand}
   */
  startWirelessDeviceImportTask(
    args: StartWirelessDeviceImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWirelessDeviceImportTaskCommandOutput>;
  startWirelessDeviceImportTask(
    args: StartWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: StartWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  startWirelessDeviceImportTask(
    args: StartWirelessDeviceImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWirelessDeviceImportTaskCommandOutput) => void
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
   * @see {@link TestWirelessDeviceCommand}
   */
  testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestWirelessDeviceCommandOutput>;
  testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;
  testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
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
   * @see {@link UpdateEventConfigurationByResourceTypesCommand}
   */
  updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventConfigurationByResourceTypesCommandOutput>;
  updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    cb: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFuotaTaskCommand}
   */
  updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFuotaTaskCommandOutput>;
  updateFuotaTask(args: UpdateFuotaTaskCommandInput, cb: (err: any, data?: UpdateFuotaTaskCommandOutput) => void): void;
  updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFuotaTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLogLevelsByResourceTypesCommand}
   */
  updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLogLevelsByResourceTypesCommandOutput>;
  updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMulticastGroupCommand}
   */
  updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMulticastGroupCommandOutput>;
  updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    cb: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): void;
  updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkAnalyzerConfigurationCommand}
   */
  updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput>;
  updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePartnerAccountCommand}
   */
  updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartnerAccountCommandOutput>;
  updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;
  updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePositionCommand}
   */
  updatePosition(
    args: UpdatePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePositionCommandOutput>;
  updatePosition(args: UpdatePositionCommandInput, cb: (err: any, data?: UpdatePositionCommandOutput) => void): void;
  updatePosition(
    args: UpdatePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceEventConfigurationCommand}
   */
  updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceEventConfigurationCommandOutput>;
  updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    cb: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): void;
  updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourcePositionCommand}
   */
  updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourcePositionCommandOutput>;
  updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    cb: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): void;
  updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWirelessDeviceCommand}
   */
  updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessDeviceCommandOutput>;
  updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;
  updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWirelessDeviceImportTaskCommand}
   */
  updateWirelessDeviceImportTask(
    args: UpdateWirelessDeviceImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessDeviceImportTaskCommandOutput>;
  updateWirelessDeviceImportTask(
    args: UpdateWirelessDeviceImportTaskCommandInput,
    cb: (err: any, data?: UpdateWirelessDeviceImportTaskCommandOutput) => void
  ): void;
  updateWirelessDeviceImportTask(
    args: UpdateWirelessDeviceImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessDeviceImportTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWirelessGatewayCommand}
   */
  updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessGatewayCommandOutput>;
  updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
  updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AWS IoT Wireless provides bi-directional communication between internet-connected
 *             wireless devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS
 *             IoT, use the IoT Wireless API. These wireless devices use the Low Power Wide Area
 *             Networking (LPWAN) communication protocol to communicate with AWS IoT.</p>
 *          <p>Using the API, you can perform create, read, update, and delete operations for your
 *             wireless devices, gateways, destinations, and profiles. After onboarding your devices,
 *             you can use the API operations to set log levels and monitor your devices with
 *             CloudWatch.</p>
 *          <p>You can also use the API operations to create multicast groups and schedule a
 *             multicast session for sending a downlink message to devices in the group. By using
 *             Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and
 *             schedule a session to update the firmware of individual devices or an entire group of
 *             devices in a multicast group.</p>
 */
export class IoTWireless extends IoTWirelessClient implements IoTWireless {}
createAggregatedClient(commands, IoTWireless);

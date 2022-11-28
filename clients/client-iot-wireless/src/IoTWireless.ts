// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  UpdateWirelessGatewayCommand,
  UpdateWirelessGatewayCommandInput,
  UpdateWirelessGatewayCommandOutput,
} from "./commands/UpdateWirelessGatewayCommand";
import { IoTWirelessClient } from "./IoTWirelessClient";

/**
 * <p>AWS IoT Wireless provides bi-directional communication between internet-connected wireless
 * 	        devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS IoT, use the
 * 	        IoT Wireless API. These wireless devices use the Low Power Wide Area Networking (LPWAN)
 * 	        communication protocol to communicate with AWS IoT.</p>
 * 	        <p>Using the API, you can perform create, read, update, and delete operations for your wireless
 * 	        devices, gateways, destinations, and profiles. After onboarding your devices, you
 * 	        can use the API operations to set log levels and monitor your devices with CloudWatch.</p>
 * 	        <p>You can also use the API operations to create multicast groups and schedule a multicast session for
 * 	        sending a downlink message to devices in the group. By using Firmware Updates Over-The-Air
 * 	        (FUOTA) API operations, you can create a FUOTA task and schedule a session to update the firmware
 * 	        of individual devices or an entire group of devices in a multicast group.</p>
 */
export class IoTWireless extends IoTWirelessClient {
  /**
   * <p>Associates a partner account with your AWS account.</p>
   */
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput>;
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> | void {
    const command = new AssociateAwsAccountWithPartnerAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate a multicast group with a FUOTA task.</p>
   */
  public associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput>;
  public associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    cb: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): void;
  public associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): void;
  public associateMulticastGroupWithFuotaTask(
    args: AssociateMulticastGroupWithFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: AssociateMulticastGroupWithFuotaTaskCommandOutput) => void
  ): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput> | void {
    const command = new AssociateMulticastGroupWithFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate a wireless device with a FUOTA task.</p>
   */
  public associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput>;
  public associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithFuotaTask(
    args: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessDeviceWithFuotaTaskCommandOutput) => void
  ): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput> | void {
    const command = new AssociateWirelessDeviceWithFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a wireless device with a multicast group.</p>
   */
  public associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput>;
  public associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithMulticastGroup(
    args: AssociateWirelessDeviceWithMulticastGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput> | void {
    const command = new AssociateWirelessDeviceWithMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a wireless device with a thing.</p>
   */
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput>;
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput> | void {
    const command = new AssociateWirelessDeviceWithThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a wireless gateway with a certificate.</p>
   */
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput>;
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> | void {
    const command = new AssociateWirelessGatewayWithCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a wireless gateway with a thing.</p>
   */
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput>;
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput> | void {
    const command = new AssociateWirelessGatewayWithThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an existing multicast group session.</p>
   */
  public cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMulticastGroupSessionCommandOutput>;
  public cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    cb: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
  ): void;
  public cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
  ): void;
  public cancelMulticastGroupSession(
    args: CancelMulticastGroupSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelMulticastGroupSessionCommandOutput) => void),
    cb?: (err: any, data?: CancelMulticastGroupSessionCommandOutput) => void
  ): Promise<CancelMulticastGroupSessionCommandOutput> | void {
    const command = new CancelMulticastGroupSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new destination that maps a device message to an AWS IoT rule.</p>
   */
  public createDestination(
    args: CreateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDestinationCommandOutput>;
  public createDestination(
    args: CreateDestinationCommandInput,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  public createDestination(
    args: CreateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  public createDestination(
    args: CreateDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateDestinationCommandOutput) => void
  ): Promise<CreateDestinationCommandOutput> | void {
    const command = new CreateDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new device profile.</p>
   */
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceProfileCommandOutput>;
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeviceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): Promise<CreateDeviceProfileCommandOutput> | void {
    const command = new CreateDeviceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a FUOTA task.</p>
   */
  public createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFuotaTaskCommandOutput>;
  public createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    cb: (err: any, data?: CreateFuotaTaskCommandOutput) => void
  ): void;
  public createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFuotaTaskCommandOutput) => void
  ): void;
  public createFuotaTask(
    args: CreateFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateFuotaTaskCommandOutput) => void
  ): Promise<CreateFuotaTaskCommandOutput> | void {
    const command = new CreateFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a multicast group.</p>
   */
  public createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMulticastGroupCommandOutput>;
  public createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    cb: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): void;
  public createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): void;
  public createMulticastGroup(
    args: CreateMulticastGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateMulticastGroupCommandOutput) => void
  ): Promise<CreateMulticastGroupCommandOutput> | void {
    const command = new CreateMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new network analyzer configuration.</p>
   */
  public createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkAnalyzerConfigurationCommandOutput>;
  public createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public createNetworkAnalyzerConfiguration(
    args: CreateNetworkAnalyzerConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkAnalyzerConfigurationCommandOutput) => void
  ): Promise<CreateNetworkAnalyzerConfigurationCommandOutput> | void {
    const command = new CreateNetworkAnalyzerConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new service profile.</p>
   */
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceProfileCommandOutput>;
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): Promise<CreateServiceProfileCommandOutput> | void {
    const command = new CreateServiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provisions a wireless device.</p>
   */
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessDeviceCommandOutput>;
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): Promise<CreateWirelessDeviceCommandOutput> | void {
    const command = new CreateWirelessDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provisions a wireless gateway.</p>
   */
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayCommandOutput>;
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): Promise<CreateWirelessGatewayCommandOutput> | void {
    const command = new CreateWirelessGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a task for a wireless gateway.</p>
   */
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayTaskCommandOutput>;
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): Promise<CreateWirelessGatewayTaskCommandOutput> | void {
    const command = new CreateWirelessGatewayTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a gateway task definition.</p>
   */
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput>;
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput> | void {
    const command = new CreateWirelessGatewayTaskDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a destination.</p>
   */
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): Promise<DeleteDestinationCommandOutput> | void {
    const command = new DeleteDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a device profile.</p>
   */
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceProfileCommandOutput>;
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): Promise<DeleteDeviceProfileCommandOutput> | void {
    const command = new DeleteDeviceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a FUOTA task.</p>
   */
  public deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFuotaTaskCommandOutput>;
  public deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    cb: (err: any, data?: DeleteFuotaTaskCommandOutput) => void
  ): void;
  public deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFuotaTaskCommandOutput) => void
  ): void;
  public deleteFuotaTask(
    args: DeleteFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteFuotaTaskCommandOutput) => void
  ): Promise<DeleteFuotaTaskCommandOutput> | void {
    const command = new DeleteFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a multicast group if it is not in use by a fuota task.</p>
   */
  public deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMulticastGroupCommandOutput>;
  public deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    cb: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): void;
  public deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): void;
  public deleteMulticastGroup(
    args: DeleteMulticastGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteMulticastGroupCommandOutput) => void
  ): Promise<DeleteMulticastGroupCommandOutput> | void {
    const command = new DeleteMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a network analyzer configuration.</p>
   */
  public deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput>;
  public deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public deleteNetworkAnalyzerConfiguration(
    args: DeleteNetworkAnalyzerConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkAnalyzerConfigurationCommandOutput) => void
  ): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput> | void {
    const command = new DeleteNetworkAnalyzerConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove queued messages from the downlink queue.</p>
   */
  public deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQueuedMessagesCommandOutput>;
  public deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    cb: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): void;
  public deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): void;
  public deleteQueuedMessages(
    args: DeleteQueuedMessagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQueuedMessagesCommandOutput) => void),
    cb?: (err: any, data?: DeleteQueuedMessagesCommandOutput) => void
  ): Promise<DeleteQueuedMessagesCommandOutput> | void {
    const command = new DeleteQueuedMessagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a service profile.</p>
   */
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceProfileCommandOutput>;
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): Promise<DeleteServiceProfileCommandOutput> | void {
    const command = new DeleteServiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a wireless device.</p>
   */
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessDeviceCommandOutput>;
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): Promise<DeleteWirelessDeviceCommandOutput> | void {
    const command = new DeleteWirelessDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a wireless gateway.</p>
   */
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayCommandOutput>;
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): Promise<DeleteWirelessGatewayCommandOutput> | void {
    const command = new DeleteWirelessGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a wireless gateway task.</p>
   */
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayTaskCommandOutput>;
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): Promise<DeleteWirelessGatewayTaskCommandOutput> | void {
    const command = new DeleteWirelessGatewayTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.</p>
   */
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput>;
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> | void {
    const command = new DeleteWirelessGatewayTaskDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.</p>
   */
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput>;
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> | void {
    const command = new DisassociateAwsAccountFromPartnerAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a multicast group from a fuota task.</p>
   */
  public disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput>;
  public disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    cb: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): void;
  public disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): void;
  public disassociateMulticastGroupFromFuotaTask(
    args: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMulticastGroupFromFuotaTaskCommandOutput) => void
  ): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput> | void {
    const command = new DisassociateMulticastGroupFromFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a wireless device from a FUOTA task.</p>
   */
  public disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput>;
  public disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromFuotaTask(
    args: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessDeviceFromFuotaTaskCommandOutput) => void
  ): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput> | void {
    const command = new DisassociateWirelessDeviceFromFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a wireless device from a multicast group.</p>
   */
  public disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput>;
  public disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromMulticastGroup(
    args: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput> | void {
    const command = new DisassociateWirelessDeviceFromMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a wireless device from its currently associated thing.</p>
   */
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput>;
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput> | void {
    const command = new DisassociateWirelessDeviceFromThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
   */
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput>;
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> | void {
    const command = new DisassociateWirelessGatewayFromCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a wireless gateway from its currently associated thing.</p>
   */
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput>;
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput> | void {
    const command = new DisassociateWirelessGatewayFromThingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a destination.</p>
   */
  public getDestination(
    args: GetDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDestinationCommandOutput>;
  public getDestination(
    args: GetDestinationCommandInput,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  public getDestination(
    args: GetDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  public getDestination(
    args: GetDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDestinationCommandOutput) => void),
    cb?: (err: any, data?: GetDestinationCommandOutput) => void
  ): Promise<GetDestinationCommandOutput> | void {
    const command = new GetDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a device profile.</p>
   */
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceProfileCommandOutput>;
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): Promise<GetDeviceProfileCommandOutput> | void {
    const command = new GetDeviceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the event configuration based on resource types.</p>
   */
  public getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventConfigurationByResourceTypesCommandOutput>;
  public getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    cb: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  public getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  public getEventConfigurationByResourceTypes(
    args: GetEventConfigurationByResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: GetEventConfigurationByResourceTypesCommandOutput) => void
  ): Promise<GetEventConfigurationByResourceTypesCommandOutput> | void {
    const command = new GetEventConfigurationByResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a FUOTA task.</p>
   */
  public getFuotaTask(
    args: GetFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFuotaTaskCommandOutput>;
  public getFuotaTask(args: GetFuotaTaskCommandInput, cb: (err: any, data?: GetFuotaTaskCommandOutput) => void): void;
  public getFuotaTask(
    args: GetFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFuotaTaskCommandOutput) => void
  ): void;
  public getFuotaTask(
    args: GetFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: GetFuotaTaskCommandOutput) => void
  ): Promise<GetFuotaTaskCommandOutput> | void {
    const command = new GetFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns current default log levels or log levels by resource types. Based on resource types, log levels can be
   *             for wireless device log options or wireless gateway log options.</p>
   */
  public getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLogLevelsByResourceTypesCommandOutput>;
  public getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  public getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  public getLogLevelsByResourceTypes(
    args: GetLogLevelsByResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: GetLogLevelsByResourceTypesCommandOutput) => void
  ): Promise<GetLogLevelsByResourceTypesCommandOutput> | void {
    const command = new GetLogLevelsByResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a multicast group.</p>
   */
  public getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMulticastGroupCommandOutput>;
  public getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    cb: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): void;
  public getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): void;
  public getMulticastGroup(
    args: GetMulticastGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: GetMulticastGroupCommandOutput) => void
  ): Promise<GetMulticastGroupCommandOutput> | void {
    const command = new GetMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a multicast group session.</p>
   */
  public getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMulticastGroupSessionCommandOutput>;
  public getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    cb: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): void;
  public getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): void;
  public getMulticastGroupSession(
    args: GetMulticastGroupSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMulticastGroupSessionCommandOutput) => void),
    cb?: (err: any, data?: GetMulticastGroupSessionCommandOutput) => void
  ): Promise<GetMulticastGroupSessionCommandOutput> | void {
    const command = new GetMulticastGroupSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get network analyzer configuration.</p>
   */
  public getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkAnalyzerConfigurationCommandOutput>;
  public getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public getNetworkAnalyzerConfiguration(
    args: GetNetworkAnalyzerConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkAnalyzerConfigurationCommandOutput) => void
  ): Promise<GetNetworkAnalyzerConfigurationCommandOutput> | void {
    const command = new GetNetworkAnalyzerConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
   */
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartnerAccountCommandOutput>;
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): Promise<GetPartnerAccountCommandOutput> | void {
    const command = new GetPartnerAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Get the position information for a given resource.</p>
   *         <important>
   *             <p>This action is no longer supported. Calls to retrieve the position information
   *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a>
   *                 API operation instead.</p>
   *         </important>
   */
  public getPosition(args: GetPositionCommandInput, options?: __HttpHandlerOptions): Promise<GetPositionCommandOutput>;
  public getPosition(args: GetPositionCommandInput, cb: (err: any, data?: GetPositionCommandOutput) => void): void;
  public getPosition(
    args: GetPositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPositionCommandOutput) => void
  ): void;
  public getPosition(
    args: GetPositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPositionCommandOutput) => void),
    cb?: (err: any, data?: GetPositionCommandOutput) => void
  ): Promise<GetPositionCommandOutput> | void {
    const command = new GetPositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Get position configuration for a given resource.</p>
   *         <important>
   *             <p>This action is no longer supported. Calls to retrieve the position configuration
   *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a>
   *                 API operation instead.</p>
   *         </important>
   */
  public getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPositionConfigurationCommandOutput>;
  public getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    cb: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): void;
  public getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): void;
  public getPositionConfiguration(
    args: GetPositionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPositionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetPositionConfigurationCommandOutput) => void
  ): Promise<GetPositionConfigurationCommandOutput> | void {
    const command = new GetPositionConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get estimated position information as a payload in GeoJSON format. The payload measurement data is
   *           resolved using solvers that are provided by third-party vendors.</p>
   */
  public getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPositionEstimateCommandOutput>;
  public getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    cb: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): void;
  public getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): void;
  public getPositionEstimate(
    args: GetPositionEstimateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPositionEstimateCommandOutput) => void),
    cb?: (err: any, data?: GetPositionEstimateCommandOutput) => void
  ): Promise<GetPositionEstimateCommandOutput> | void {
    const command = new GetPositionEstimateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the event configuration for a particular resource identifier.</p>
   */
  public getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceEventConfigurationCommandOutput>;
  public getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    cb: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): void;
  public getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): void;
  public getResourceEventConfiguration(
    args: GetResourceEventConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceEventConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetResourceEventConfigurationCommandOutput) => void
  ): Promise<GetResourceEventConfigurationCommandOutput> | void {
    const command = new GetResourceEventConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Fetches the log-level override, if any, for a given resource-ID and resource-type. It can be used for
   *             a wireless device or a wireless gateway.</p>
   */
  public getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceLogLevelCommandOutput>;
  public getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): void;
  public getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): void;
  public getResourceLogLevel(
    args: GetResourceLogLevelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceLogLevelCommandOutput) => void),
    cb?: (err: any, data?: GetResourceLogLevelCommandOutput) => void
  ): Promise<GetResourceLogLevelCommandOutput> | void {
    const command = new GetResourceLogLevelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the position information for a given wireless device or a wireless gateway resource. The postion
   *           information uses the <a href="https://gisgeography.com/wgs84-world-geodetic-system/">
   *           World Geodetic System (WGS84)</a>.</p>
   */
  public getResourcePosition(
    args: GetResourcePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePositionCommandOutput>;
  public getResourcePosition(
    args: GetResourcePositionCommandInput,
    cb: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): void;
  public getResourcePosition(
    args: GetResourcePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): void;
  public getResourcePosition(
    args: GetResourcePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePositionCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePositionCommandOutput) => void
  ): Promise<GetResourcePositionCommandOutput> | void {
    const command = new GetResourcePositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.</p>
   */
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceEndpointCommandOutput>;
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): Promise<GetServiceEndpointCommandOutput> | void {
    const command = new GetServiceEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a service profile.</p>
   */
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceProfileCommandOutput>;
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): Promise<GetServiceProfileCommandOutput> | void {
    const command = new GetServiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a wireless device.</p>
   */
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceCommandOutput>;
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): Promise<GetWirelessDeviceCommandOutput> | void {
    const command = new GetWirelessDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets operating information about a wireless device.</p>
   */
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceStatisticsCommandOutput>;
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): Promise<GetWirelessDeviceStatisticsCommandOutput> | void {
    const command = new GetWirelessDeviceStatisticsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a wireless gateway.</p>
   */
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayCommandOutput>;
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): Promise<GetWirelessGatewayCommandOutput> | void {
    const command = new GetWirelessGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the ID of the certificate that is currently associated with a wireless gateway.</p>
   */
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayCertificateCommandOutput>;
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): Promise<GetWirelessGatewayCertificateCommandOutput> | void {
    const command = new GetWirelessGatewayCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the firmware version and other information about a wireless gateway.</p>
   */
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput>;
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> | void {
    const command = new GetWirelessGatewayFirmwareInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets operating information about a wireless gateway.</p>
   */
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayStatisticsCommandOutput>;
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): Promise<GetWirelessGatewayStatisticsCommandOutput> | void {
    const command = new GetWirelessGatewayStatisticsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a wireless gateway task.</p>
   */
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayTaskCommandOutput>;
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayTaskCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): Promise<GetWirelessGatewayTaskCommandOutput> | void {
    const command = new GetWirelessGatewayTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a wireless gateway task definition.</p>
   */
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput>;
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> | void {
    const command = new GetWirelessGatewayTaskDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the destinations registered to your AWS account.</p>
   */
  public listDestinations(
    args: ListDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDestinationsCommandOutput>;
  public listDestinations(
    args: ListDestinationsCommandInput,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  public listDestinations(
    args: ListDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  public listDestinations(
    args: ListDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListDestinationsCommandOutput) => void
  ): Promise<ListDestinationsCommandOutput> | void {
    const command = new ListDestinationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the device profiles registered to your AWS account.</p>
   */
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceProfilesCommandOutput>;
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): Promise<ListDeviceProfilesCommandOutput> | void {
    const command = new ListDeviceProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List event configurations where at least one event topic has been enabled.</p>
   */
  public listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventConfigurationsCommandOutput>;
  public listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    cb: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): void;
  public listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): void;
  public listEventConfigurations(
    args: ListEventConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListEventConfigurationsCommandOutput) => void
  ): Promise<ListEventConfigurationsCommandOutput> | void {
    const command = new ListEventConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the FUOTA tasks registered to your AWS account.</p>
   */
  public listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFuotaTasksCommandOutput>;
  public listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    cb: (err: any, data?: ListFuotaTasksCommandOutput) => void
  ): void;
  public listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFuotaTasksCommandOutput) => void
  ): void;
  public listFuotaTasks(
    args: ListFuotaTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFuotaTasksCommandOutput) => void),
    cb?: (err: any, data?: ListFuotaTasksCommandOutput) => void
  ): Promise<ListFuotaTasksCommandOutput> | void {
    const command = new ListFuotaTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the multicast groups registered to your AWS account.</p>
   */
  public listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMulticastGroupsCommandOutput>;
  public listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    cb: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): void;
  public listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): void;
  public listMulticastGroups(
    args: ListMulticastGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMulticastGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListMulticastGroupsCommandOutput) => void
  ): Promise<ListMulticastGroupsCommandOutput> | void {
    const command = new ListMulticastGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List all multicast groups associated with a fuota task.</p>
   */
  public listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMulticastGroupsByFuotaTaskCommandOutput>;
  public listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    cb: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): void;
  public listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): void;
  public listMulticastGroupsByFuotaTask(
    args: ListMulticastGroupsByFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: ListMulticastGroupsByFuotaTaskCommandOutput) => void
  ): Promise<ListMulticastGroupsByFuotaTaskCommandOutput> | void {
    const command = new ListMulticastGroupsByFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the network analyzer configurations.</p>
   */
  public listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkAnalyzerConfigurationsCommandOutput>;
  public listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    cb: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): void;
  public listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): void;
  public listNetworkAnalyzerConfigurations(
    args: ListNetworkAnalyzerConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListNetworkAnalyzerConfigurationsCommandOutput) => void
  ): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> | void {
    const command = new ListNetworkAnalyzerConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the partner accounts associated with your AWS account.</p>
   */
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerAccountsCommandOutput>;
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPartnerAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): Promise<ListPartnerAccountsCommandOutput> | void {
    const command = new ListPartnerAccountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>List position configurations for a given resource, such as positioning solvers.</p>
   *         <important>
   *             <p>This action is no longer supported. Calls to retrieve position information
   *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourcePosition.html">GetResourcePosition</a>
   *                 API operation instead.</p>
   *         </important>
   */
  public listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPositionConfigurationsCommandOutput>;
  public listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    cb: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): void;
  public listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): void;
  public listPositionConfigurations(
    args: ListPositionConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPositionConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListPositionConfigurationsCommandOutput) => void
  ): Promise<ListPositionConfigurationsCommandOutput> | void {
    const command = new ListPositionConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List queued messages in the downlink queue.</p>
   */
  public listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueuedMessagesCommandOutput>;
  public listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    cb: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): void;
  public listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): void;
  public listQueuedMessages(
    args: ListQueuedMessagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQueuedMessagesCommandOutput) => void),
    cb?: (err: any, data?: ListQueuedMessagesCommandOutput) => void
  ): Promise<ListQueuedMessagesCommandOutput> | void {
    const command = new ListQueuedMessagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the service profiles registered to your AWS account.</p>
   */
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceProfilesCommandOutput>;
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): Promise<ListServiceProfilesCommandOutput> | void {
    const command = new ListServiceProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the wireless devices registered to your AWS account.</p>
   */
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessDevicesCommandOutput>;
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWirelessDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): Promise<ListWirelessDevicesCommandOutput> | void {
    const command = new ListWirelessDevicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the wireless gateways registered to your AWS account.</p>
   */
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessGatewaysCommandOutput>;
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWirelessGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): Promise<ListWirelessGatewaysCommandOutput> | void {
    const command = new ListWirelessGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
   */
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput>;
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> | void {
    const command = new ListWirelessGatewayTaskDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Put position configuration for a given resource.</p>
   *         <important>
   *             <p>This action is no longer supported. Calls to update the position configuration
   *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p>
   *         </important>
   */
  public putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPositionConfigurationCommandOutput>;
  public putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    cb: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): void;
  public putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): void;
  public putPositionConfiguration(
    args: PutPositionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPositionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutPositionConfigurationCommandOutput) => void
  ): Promise<PutPositionConfigurationCommandOutput> | void {
    const command = new PutPositionConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the log-level override for a resource-ID and resource-type. This option can be specified for a wireless gateway
   *             or a wireless device. A limit of 200 log level override can be set per account.</p>
   */
  public putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceLogLevelCommandOutput>;
  public putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): void;
  public putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): void;
  public putResourceLogLevel(
    args: PutResourceLogLevelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourceLogLevelCommandOutput) => void),
    cb?: (err: any, data?: PutResourceLogLevelCommandOutput) => void
  ): Promise<PutResourceLogLevelCommandOutput> | void {
    const command = new PutResourceLogLevelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the log-level overrides for all resources; both wireless devices and wireless gateways.</p>
   */
  public resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAllResourceLogLevelsCommandOutput>;
  public resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): void;
  public resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): void;
  public resetAllResourceLogLevels(
    args: ResetAllResourceLogLevelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void),
    cb?: (err: any, data?: ResetAllResourceLogLevelsCommandOutput) => void
  ): Promise<ResetAllResourceLogLevelsCommandOutput> | void {
    const command = new ResetAllResourceLogLevelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the log-level override, if any, for a specific resource-ID and resource-type. It can be used for
   *             a wireless device or a wireless gateway.</p>
   */
  public resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetResourceLogLevelCommandOutput>;
  public resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): void;
  public resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): void;
  public resetResourceLogLevel(
    args: ResetResourceLogLevelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetResourceLogLevelCommandOutput) => void),
    cb?: (err: any, data?: ResetResourceLogLevelCommandOutput) => void
  ): Promise<ResetResourceLogLevelCommandOutput> | void {
    const command = new ResetResourceLogLevelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends the specified data to a multicast group.</p>
   */
  public sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataToMulticastGroupCommandOutput>;
  public sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    cb: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): void;
  public sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): void;
  public sendDataToMulticastGroup(
    args: SendDataToMulticastGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendDataToMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: SendDataToMulticastGroupCommandOutput) => void
  ): Promise<SendDataToMulticastGroupCommandOutput> | void {
    const command = new SendDataToMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends a decrypted application data frame to a device.</p>
   */
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataToWirelessDeviceCommandOutput>;
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendDataToWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): Promise<SendDataToWirelessDeviceCommandOutput> | void {
    const command = new SendDataToWirelessDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a bulk association of all qualifying wireless devices with a multicast group.</p>
   */
  public startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput>;
  public startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    cb: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  public startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): void;
  public startBulkAssociateWirelessDeviceWithMulticastGroup(
    args: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput) => void
  ): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput> | void {
    const command = new StartBulkAssociateWirelessDeviceWithMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.</p>
   */
  public startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput>;
  public startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    cb: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  public startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): void;
  public startBulkDisassociateWirelessDeviceFromMulticastGroup(
    args: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput) => void
  ): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> | void {
    const command = new StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a FUOTA task.</p>
   */
  public startFuotaTask(
    args: StartFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFuotaTaskCommandOutput>;
  public startFuotaTask(
    args: StartFuotaTaskCommandInput,
    cb: (err: any, data?: StartFuotaTaskCommandOutput) => void
  ): void;
  public startFuotaTask(
    args: StartFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFuotaTaskCommandOutput) => void
  ): void;
  public startFuotaTask(
    args: StartFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: StartFuotaTaskCommandOutput) => void
  ): Promise<StartFuotaTaskCommandOutput> | void {
    const command = new StartFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a multicast group session.</p>
   */
  public startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMulticastGroupSessionCommandOutput>;
  public startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    cb: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): void;
  public startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): void;
  public startMulticastGroupSession(
    args: StartMulticastGroupSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMulticastGroupSessionCommandOutput) => void),
    cb?: (err: any, data?: StartMulticastGroupSessionCommandOutput) => void
  ): Promise<StartMulticastGroupSessionCommandOutput> | void {
    const command = new StartMulticastGroupSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a tag to a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.</p>
   */
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestWirelessDeviceCommandOutput>;
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): Promise<TestWirelessDeviceCommandOutput> | void {
    const command = new TestWirelessDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties of a destination.</p>
   */
  public updateDestination(
    args: UpdateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDestinationCommandOutput>;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): Promise<UpdateDestinationCommandOutput> | void {
    const command = new UpdateDestinationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the event configuration based on resource types.</p>
   */
  public updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventConfigurationByResourceTypesCommandOutput>;
  public updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    cb: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  public updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): void;
  public updateEventConfigurationByResourceTypes(
    args: UpdateEventConfigurationByResourceTypesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventConfigurationByResourceTypesCommandOutput) => void
  ): Promise<UpdateEventConfigurationByResourceTypesCommandOutput> | void {
    const command = new UpdateEventConfigurationByResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties of a FUOTA task.</p>
   */
  public updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFuotaTaskCommandOutput>;
  public updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    cb: (err: any, data?: UpdateFuotaTaskCommandOutput) => void
  ): void;
  public updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFuotaTaskCommandOutput) => void
  ): void;
  public updateFuotaTask(
    args: UpdateFuotaTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFuotaTaskCommandOutput) => void),
    cb?: (err: any, data?: UpdateFuotaTaskCommandOutput) => void
  ): Promise<UpdateFuotaTaskCommandOutput> | void {
    const command = new UpdateFuotaTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Set default log level, or log levels by resource types. This can be for wireless device log options or
   *             wireless gateways log options and is used to control the log messages that'll be displayed in CloudWatch.</p>
   */
  public updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLogLevelsByResourceTypesCommandOutput>;
  public updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  public updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): void;
  public updateLogLevelsByResourceTypes(
    args: UpdateLogLevelsByResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: UpdateLogLevelsByResourceTypesCommandOutput) => void
  ): Promise<UpdateLogLevelsByResourceTypesCommandOutput> | void {
    const command = new UpdateLogLevelsByResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties of a multicast group session.</p>
   */
  public updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMulticastGroupCommandOutput>;
  public updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    cb: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): void;
  public updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): void;
  public updateMulticastGroup(
    args: UpdateMulticastGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMulticastGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateMulticastGroupCommandOutput) => void
  ): Promise<UpdateMulticastGroupCommandOutput> | void {
    const command = new UpdateMulticastGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update network analyzer configuration.</p>
   */
  public updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput>;
  public updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    cb: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): void;
  public updateNetworkAnalyzerConfiguration(
    args: UpdateNetworkAnalyzerConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkAnalyzerConfigurationCommandOutput) => void
  ): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput> | void {
    const command = new UpdateNetworkAnalyzerConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties of a partner account.</p>
   */
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartnerAccountCommandOutput>;
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): Promise<UpdatePartnerAccountCommandOutput> | void {
    const command = new UpdatePartnerAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Update the position information of a resource.</p>
   *         <important>
   *             <p>This action is no longer supported. Calls to update the position information
   *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourcePosition.html">UpdateResourcePosition</a> API operation instead.</p>
   *         </important>
   */
  public updatePosition(
    args: UpdatePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePositionCommandOutput>;
  public updatePosition(
    args: UpdatePositionCommandInput,
    cb: (err: any, data?: UpdatePositionCommandOutput) => void
  ): void;
  public updatePosition(
    args: UpdatePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePositionCommandOutput) => void
  ): void;
  public updatePosition(
    args: UpdatePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePositionCommandOutput) => void),
    cb?: (err: any, data?: UpdatePositionCommandOutput) => void
  ): Promise<UpdatePositionCommandOutput> | void {
    const command = new UpdatePositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the event configuration for a particular resource identifier.</p>
   */
  public updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceEventConfigurationCommandOutput>;
  public updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    cb: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): void;
  public updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): void;
  public updateResourceEventConfiguration(
    args: UpdateResourceEventConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceEventConfigurationCommandOutput) => void
  ): Promise<UpdateResourceEventConfigurationCommandOutput> | void {
    const command = new UpdateResourceEventConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Update the position information of a given wireless device or a wireless gateway resource. The postion
   *            coordinates are based on the <a href="https://gisgeography.com/wgs84-world-geodetic-system/">
   *            World Geodetic System (WGS84)</a>.</p>
   */
  public updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourcePositionCommandOutput>;
  public updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    cb: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): void;
  public updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): void;
  public updateResourcePosition(
    args: UpdateResourcePositionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourcePositionCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourcePositionCommandOutput) => void
  ): Promise<UpdateResourcePositionCommandOutput> | void {
    const command = new UpdateResourcePositionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties of a wireless device.</p>
   */
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessDeviceCommandOutput>;
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): Promise<UpdateWirelessDeviceCommandOutput> | void {
    const command = new UpdateWirelessDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties of a wireless gateway.</p>
   */
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessGatewayCommandOutput>;
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): Promise<UpdateWirelessGatewayCommandOutput> | void {
    const command = new UpdateWirelessGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}

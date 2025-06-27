// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptInputDeviceTransferCommand,
  AcceptInputDeviceTransferCommandInput,
  AcceptInputDeviceTransferCommandOutput,
} from "./commands/AcceptInputDeviceTransferCommand";
import { BatchDeleteCommand, BatchDeleteCommandInput, BatchDeleteCommandOutput } from "./commands/BatchDeleteCommand";
import { BatchStartCommand, BatchStartCommandInput, BatchStartCommandOutput } from "./commands/BatchStartCommand";
import { BatchStopCommand, BatchStopCommandInput, BatchStopCommandOutput } from "./commands/BatchStopCommand";
import {
  BatchUpdateScheduleCommand,
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
} from "./commands/BatchUpdateScheduleCommand";
import {
  CancelInputDeviceTransferCommand,
  CancelInputDeviceTransferCommandInput,
  CancelInputDeviceTransferCommandOutput,
} from "./commands/CancelInputDeviceTransferCommand";
import { ClaimDeviceCommand, ClaimDeviceCommandInput, ClaimDeviceCommandOutput } from "./commands/ClaimDeviceCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateChannelPlacementGroupCommand,
  CreateChannelPlacementGroupCommandInput,
  CreateChannelPlacementGroupCommandOutput,
} from "./commands/CreateChannelPlacementGroupCommand";
import {
  CreateCloudWatchAlarmTemplateCommand,
  CreateCloudWatchAlarmTemplateCommandInput,
  CreateCloudWatchAlarmTemplateCommandOutput,
} from "./commands/CreateCloudWatchAlarmTemplateCommand";
import {
  CreateCloudWatchAlarmTemplateGroupCommand,
  CreateCloudWatchAlarmTemplateGroupCommandInput,
  CreateCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/CreateCloudWatchAlarmTemplateGroupCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateEventBridgeRuleTemplateCommand,
  CreateEventBridgeRuleTemplateCommandInput,
  CreateEventBridgeRuleTemplateCommandOutput,
} from "./commands/CreateEventBridgeRuleTemplateCommand";
import {
  CreateEventBridgeRuleTemplateGroupCommand,
  CreateEventBridgeRuleTemplateGroupCommandInput,
  CreateEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/CreateEventBridgeRuleTemplateGroupCommand";
import { CreateInputCommand, CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import {
  CreateInputSecurityGroupCommand,
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput,
} from "./commands/CreateInputSecurityGroupCommand";
import {
  CreateMultiplexCommand,
  CreateMultiplexCommandInput,
  CreateMultiplexCommandOutput,
} from "./commands/CreateMultiplexCommand";
import {
  CreateMultiplexProgramCommand,
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput,
} from "./commands/CreateMultiplexProgramCommand";
import {
  CreateNetworkCommand,
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput,
} from "./commands/CreateNetworkCommand";
import { CreateNodeCommand, CreateNodeCommandInput, CreateNodeCommandOutput } from "./commands/CreateNodeCommand";
import {
  CreateNodeRegistrationScriptCommand,
  CreateNodeRegistrationScriptCommandInput,
  CreateNodeRegistrationScriptCommandOutput,
} from "./commands/CreateNodeRegistrationScriptCommand";
import {
  CreatePartnerInputCommand,
  CreatePartnerInputCommandInput,
  CreatePartnerInputCommandOutput,
} from "./commands/CreatePartnerInputCommand";
import {
  CreateSdiSourceCommand,
  CreateSdiSourceCommandInput,
  CreateSdiSourceCommandOutput,
} from "./commands/CreateSdiSourceCommand";
import {
  CreateSignalMapCommand,
  CreateSignalMapCommandInput,
  CreateSignalMapCommandOutput,
} from "./commands/CreateSignalMapCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteChannelPlacementGroupCommand,
  DeleteChannelPlacementGroupCommandInput,
  DeleteChannelPlacementGroupCommandOutput,
} from "./commands/DeleteChannelPlacementGroupCommand";
import {
  DeleteCloudWatchAlarmTemplateCommand,
  DeleteCloudWatchAlarmTemplateCommandInput,
  DeleteCloudWatchAlarmTemplateCommandOutput,
} from "./commands/DeleteCloudWatchAlarmTemplateCommand";
import {
  DeleteCloudWatchAlarmTemplateGroupCommand,
  DeleteCloudWatchAlarmTemplateGroupCommandInput,
  DeleteCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/DeleteCloudWatchAlarmTemplateGroupCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteEventBridgeRuleTemplateCommand,
  DeleteEventBridgeRuleTemplateCommandInput,
  DeleteEventBridgeRuleTemplateCommandOutput,
} from "./commands/DeleteEventBridgeRuleTemplateCommand";
import {
  DeleteEventBridgeRuleTemplateGroupCommand,
  DeleteEventBridgeRuleTemplateGroupCommandInput,
  DeleteEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/DeleteEventBridgeRuleTemplateGroupCommand";
import { DeleteInputCommand, DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import {
  DeleteInputSecurityGroupCommand,
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput,
} from "./commands/DeleteInputSecurityGroupCommand";
import {
  DeleteMultiplexCommand,
  DeleteMultiplexCommandInput,
  DeleteMultiplexCommandOutput,
} from "./commands/DeleteMultiplexCommand";
import {
  DeleteMultiplexProgramCommand,
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput,
} from "./commands/DeleteMultiplexProgramCommand";
import {
  DeleteNetworkCommand,
  DeleteNetworkCommandInput,
  DeleteNetworkCommandOutput,
} from "./commands/DeleteNetworkCommand";
import { DeleteNodeCommand, DeleteNodeCommandInput, DeleteNodeCommandOutput } from "./commands/DeleteNodeCommand";
import {
  DeleteReservationCommand,
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput,
} from "./commands/DeleteReservationCommand";
import {
  DeleteScheduleCommand,
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput,
} from "./commands/DeleteScheduleCommand";
import {
  DeleteSdiSourceCommand,
  DeleteSdiSourceCommandInput,
  DeleteSdiSourceCommandOutput,
} from "./commands/DeleteSdiSourceCommand";
import {
  DeleteSignalMapCommand,
  DeleteSignalMapCommandInput,
  DeleteSignalMapCommandOutput,
} from "./commands/DeleteSignalMapCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAccountConfigurationCommand,
  DescribeAccountConfigurationCommandInput,
  DescribeAccountConfigurationCommandOutput,
} from "./commands/DescribeAccountConfigurationCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeChannelPlacementGroupCommand,
  DescribeChannelPlacementGroupCommandInput,
  DescribeChannelPlacementGroupCommandOutput,
} from "./commands/DescribeChannelPlacementGroupCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeInputCommand,
  DescribeInputCommandInput,
  DescribeInputCommandOutput,
} from "./commands/DescribeInputCommand";
import {
  DescribeInputDeviceCommand,
  DescribeInputDeviceCommandInput,
  DescribeInputDeviceCommandOutput,
} from "./commands/DescribeInputDeviceCommand";
import {
  DescribeInputDeviceThumbnailCommand,
  DescribeInputDeviceThumbnailCommandInput,
  DescribeInputDeviceThumbnailCommandOutput,
} from "./commands/DescribeInputDeviceThumbnailCommand";
import {
  DescribeInputSecurityGroupCommand,
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput,
} from "./commands/DescribeInputSecurityGroupCommand";
import {
  DescribeMultiplexCommand,
  DescribeMultiplexCommandInput,
  DescribeMultiplexCommandOutput,
} from "./commands/DescribeMultiplexCommand";
import {
  DescribeMultiplexProgramCommand,
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput,
} from "./commands/DescribeMultiplexProgramCommand";
import {
  DescribeNetworkCommand,
  DescribeNetworkCommandInput,
  DescribeNetworkCommandOutput,
} from "./commands/DescribeNetworkCommand";
import {
  DescribeNodeCommand,
  DescribeNodeCommandInput,
  DescribeNodeCommandOutput,
} from "./commands/DescribeNodeCommand";
import {
  DescribeOfferingCommand,
  DescribeOfferingCommandInput,
  DescribeOfferingCommandOutput,
} from "./commands/DescribeOfferingCommand";
import {
  DescribeReservationCommand,
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "./commands/DescribeReservationCommand";
import {
  DescribeScheduleCommand,
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput,
} from "./commands/DescribeScheduleCommand";
import {
  DescribeSdiSourceCommand,
  DescribeSdiSourceCommandInput,
  DescribeSdiSourceCommandOutput,
} from "./commands/DescribeSdiSourceCommand";
import {
  DescribeThumbnailsCommand,
  DescribeThumbnailsCommandInput,
  DescribeThumbnailsCommandOutput,
} from "./commands/DescribeThumbnailsCommand";
import {
  GetCloudWatchAlarmTemplateCommand,
  GetCloudWatchAlarmTemplateCommandInput,
  GetCloudWatchAlarmTemplateCommandOutput,
} from "./commands/GetCloudWatchAlarmTemplateCommand";
import {
  GetCloudWatchAlarmTemplateGroupCommand,
  GetCloudWatchAlarmTemplateGroupCommandInput,
  GetCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/GetCloudWatchAlarmTemplateGroupCommand";
import {
  GetEventBridgeRuleTemplateCommand,
  GetEventBridgeRuleTemplateCommandInput,
  GetEventBridgeRuleTemplateCommandOutput,
} from "./commands/GetEventBridgeRuleTemplateCommand";
import {
  GetEventBridgeRuleTemplateGroupCommand,
  GetEventBridgeRuleTemplateGroupCommandInput,
  GetEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/GetEventBridgeRuleTemplateGroupCommand";
import {
  GetSignalMapCommand,
  GetSignalMapCommandInput,
  GetSignalMapCommandOutput,
} from "./commands/GetSignalMapCommand";
import {
  ListChannelPlacementGroupsCommand,
  ListChannelPlacementGroupsCommandInput,
  ListChannelPlacementGroupsCommandOutput,
} from "./commands/ListChannelPlacementGroupsCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListCloudWatchAlarmTemplateGroupsCommand,
  ListCloudWatchAlarmTemplateGroupsCommandInput,
  ListCloudWatchAlarmTemplateGroupsCommandOutput,
} from "./commands/ListCloudWatchAlarmTemplateGroupsCommand";
import {
  ListCloudWatchAlarmTemplatesCommand,
  ListCloudWatchAlarmTemplatesCommandInput,
  ListCloudWatchAlarmTemplatesCommandOutput,
} from "./commands/ListCloudWatchAlarmTemplatesCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListEventBridgeRuleTemplateGroupsCommand,
  ListEventBridgeRuleTemplateGroupsCommandInput,
  ListEventBridgeRuleTemplateGroupsCommandOutput,
} from "./commands/ListEventBridgeRuleTemplateGroupsCommand";
import {
  ListEventBridgeRuleTemplatesCommand,
  ListEventBridgeRuleTemplatesCommandInput,
  ListEventBridgeRuleTemplatesCommandOutput,
} from "./commands/ListEventBridgeRuleTemplatesCommand";
import {
  ListInputDevicesCommand,
  ListInputDevicesCommandInput,
  ListInputDevicesCommandOutput,
} from "./commands/ListInputDevicesCommand";
import {
  ListInputDeviceTransfersCommand,
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "./commands/ListInputDeviceTransfersCommand";
import { ListInputsCommand, ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import {
  ListInputSecurityGroupsCommand,
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "./commands/ListInputSecurityGroupsCommand";
import {
  ListMultiplexesCommand,
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput,
} from "./commands/ListMultiplexesCommand";
import {
  ListMultiplexProgramsCommand,
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "./commands/ListMultiplexProgramsCommand";
import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "./commands/ListNetworksCommand";
import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "./commands/ListOfferingsCommand";
import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "./commands/ListReservationsCommand";
import {
  ListSdiSourcesCommand,
  ListSdiSourcesCommandInput,
  ListSdiSourcesCommandOutput,
} from "./commands/ListSdiSourcesCommand";
import {
  ListSignalMapsCommand,
  ListSignalMapsCommandInput,
  ListSignalMapsCommandOutput,
} from "./commands/ListSignalMapsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "./commands/ListVersionsCommand";
import {
  PurchaseOfferingCommand,
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
} from "./commands/PurchaseOfferingCommand";
import {
  RebootInputDeviceCommand,
  RebootInputDeviceCommandInput,
  RebootInputDeviceCommandOutput,
} from "./commands/RebootInputDeviceCommand";
import {
  RejectInputDeviceTransferCommand,
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
} from "./commands/RejectInputDeviceTransferCommand";
import {
  RestartChannelPipelinesCommand,
  RestartChannelPipelinesCommandInput,
  RestartChannelPipelinesCommandOutput,
} from "./commands/RestartChannelPipelinesCommand";
import {
  StartChannelCommand,
  StartChannelCommandInput,
  StartChannelCommandOutput,
} from "./commands/StartChannelCommand";
import {
  StartDeleteMonitorDeploymentCommand,
  StartDeleteMonitorDeploymentCommandInput,
  StartDeleteMonitorDeploymentCommandOutput,
} from "./commands/StartDeleteMonitorDeploymentCommand";
import {
  StartInputDeviceCommand,
  StartInputDeviceCommandInput,
  StartInputDeviceCommandOutput,
} from "./commands/StartInputDeviceCommand";
import {
  StartInputDeviceMaintenanceWindowCommand,
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "./commands/StartInputDeviceMaintenanceWindowCommand";
import {
  StartMonitorDeploymentCommand,
  StartMonitorDeploymentCommandInput,
  StartMonitorDeploymentCommandOutput,
} from "./commands/StartMonitorDeploymentCommand";
import {
  StartMultiplexCommand,
  StartMultiplexCommandInput,
  StartMultiplexCommandOutput,
} from "./commands/StartMultiplexCommand";
import {
  StartUpdateSignalMapCommand,
  StartUpdateSignalMapCommandInput,
  StartUpdateSignalMapCommandOutput,
} from "./commands/StartUpdateSignalMapCommand";
import { StopChannelCommand, StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import {
  StopInputDeviceCommand,
  StopInputDeviceCommandInput,
  StopInputDeviceCommandOutput,
} from "./commands/StopInputDeviceCommand";
import {
  StopMultiplexCommand,
  StopMultiplexCommandInput,
  StopMultiplexCommandOutput,
} from "./commands/StopMultiplexCommand";
import {
  TransferInputDeviceCommand,
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
} from "./commands/TransferInputDeviceCommand";
import {
  UpdateAccountConfigurationCommand,
  UpdateAccountConfigurationCommandInput,
  UpdateAccountConfigurationCommandOutput,
} from "./commands/UpdateAccountConfigurationCommand";
import {
  UpdateChannelClassCommand,
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput,
} from "./commands/UpdateChannelClassCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateChannelPlacementGroupCommand,
  UpdateChannelPlacementGroupCommandInput,
  UpdateChannelPlacementGroupCommandOutput,
} from "./commands/UpdateChannelPlacementGroupCommand";
import {
  UpdateCloudWatchAlarmTemplateCommand,
  UpdateCloudWatchAlarmTemplateCommandInput,
  UpdateCloudWatchAlarmTemplateCommandOutput,
} from "./commands/UpdateCloudWatchAlarmTemplateCommand";
import {
  UpdateCloudWatchAlarmTemplateGroupCommand,
  UpdateCloudWatchAlarmTemplateGroupCommandInput,
  UpdateCloudWatchAlarmTemplateGroupCommandOutput,
} from "./commands/UpdateCloudWatchAlarmTemplateGroupCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import {
  UpdateEventBridgeRuleTemplateCommand,
  UpdateEventBridgeRuleTemplateCommandInput,
  UpdateEventBridgeRuleTemplateCommandOutput,
} from "./commands/UpdateEventBridgeRuleTemplateCommand";
import {
  UpdateEventBridgeRuleTemplateGroupCommand,
  UpdateEventBridgeRuleTemplateGroupCommandInput,
  UpdateEventBridgeRuleTemplateGroupCommandOutput,
} from "./commands/UpdateEventBridgeRuleTemplateGroupCommand";
import { UpdateInputCommand, UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import {
  UpdateInputDeviceCommand,
  UpdateInputDeviceCommandInput,
  UpdateInputDeviceCommandOutput,
} from "./commands/UpdateInputDeviceCommand";
import {
  UpdateInputSecurityGroupCommand,
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput,
} from "./commands/UpdateInputSecurityGroupCommand";
import {
  UpdateMultiplexCommand,
  UpdateMultiplexCommandInput,
  UpdateMultiplexCommandOutput,
} from "./commands/UpdateMultiplexCommand";
import {
  UpdateMultiplexProgramCommand,
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput,
} from "./commands/UpdateMultiplexProgramCommand";
import {
  UpdateNetworkCommand,
  UpdateNetworkCommandInput,
  UpdateNetworkCommandOutput,
} from "./commands/UpdateNetworkCommand";
import { UpdateNodeCommand, UpdateNodeCommandInput, UpdateNodeCommandOutput } from "./commands/UpdateNodeCommand";
import {
  UpdateNodeStateCommand,
  UpdateNodeStateCommandInput,
  UpdateNodeStateCommandOutput,
} from "./commands/UpdateNodeStateCommand";
import {
  UpdateReservationCommand,
  UpdateReservationCommandInput,
  UpdateReservationCommandOutput,
} from "./commands/UpdateReservationCommand";
import {
  UpdateSdiSourceCommand,
  UpdateSdiSourceCommandInput,
  UpdateSdiSourceCommandOutput,
} from "./commands/UpdateSdiSourceCommand";
import { MediaLiveClient, MediaLiveClientConfig } from "./MediaLiveClient";

const commands = {
  AcceptInputDeviceTransferCommand,
  BatchDeleteCommand,
  BatchStartCommand,
  BatchStopCommand,
  BatchUpdateScheduleCommand,
  CancelInputDeviceTransferCommand,
  ClaimDeviceCommand,
  CreateChannelCommand,
  CreateChannelPlacementGroupCommand,
  CreateCloudWatchAlarmTemplateCommand,
  CreateCloudWatchAlarmTemplateGroupCommand,
  CreateClusterCommand,
  CreateEventBridgeRuleTemplateCommand,
  CreateEventBridgeRuleTemplateGroupCommand,
  CreateInputCommand,
  CreateInputSecurityGroupCommand,
  CreateMultiplexCommand,
  CreateMultiplexProgramCommand,
  CreateNetworkCommand,
  CreateNodeCommand,
  CreateNodeRegistrationScriptCommand,
  CreatePartnerInputCommand,
  CreateSdiSourceCommand,
  CreateSignalMapCommand,
  CreateTagsCommand,
  DeleteChannelCommand,
  DeleteChannelPlacementGroupCommand,
  DeleteCloudWatchAlarmTemplateCommand,
  DeleteCloudWatchAlarmTemplateGroupCommand,
  DeleteClusterCommand,
  DeleteEventBridgeRuleTemplateCommand,
  DeleteEventBridgeRuleTemplateGroupCommand,
  DeleteInputCommand,
  DeleteInputSecurityGroupCommand,
  DeleteMultiplexCommand,
  DeleteMultiplexProgramCommand,
  DeleteNetworkCommand,
  DeleteNodeCommand,
  DeleteReservationCommand,
  DeleteScheduleCommand,
  DeleteSdiSourceCommand,
  DeleteSignalMapCommand,
  DeleteTagsCommand,
  DescribeAccountConfigurationCommand,
  DescribeChannelCommand,
  DescribeChannelPlacementGroupCommand,
  DescribeClusterCommand,
  DescribeInputCommand,
  DescribeInputDeviceCommand,
  DescribeInputDeviceThumbnailCommand,
  DescribeInputSecurityGroupCommand,
  DescribeMultiplexCommand,
  DescribeMultiplexProgramCommand,
  DescribeNetworkCommand,
  DescribeNodeCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  DescribeScheduleCommand,
  DescribeSdiSourceCommand,
  DescribeThumbnailsCommand,
  GetCloudWatchAlarmTemplateCommand,
  GetCloudWatchAlarmTemplateGroupCommand,
  GetEventBridgeRuleTemplateCommand,
  GetEventBridgeRuleTemplateGroupCommand,
  GetSignalMapCommand,
  ListChannelPlacementGroupsCommand,
  ListChannelsCommand,
  ListCloudWatchAlarmTemplateGroupsCommand,
  ListCloudWatchAlarmTemplatesCommand,
  ListClustersCommand,
  ListEventBridgeRuleTemplateGroupsCommand,
  ListEventBridgeRuleTemplatesCommand,
  ListInputDevicesCommand,
  ListInputDeviceTransfersCommand,
  ListInputsCommand,
  ListInputSecurityGroupsCommand,
  ListMultiplexesCommand,
  ListMultiplexProgramsCommand,
  ListNetworksCommand,
  ListNodesCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListSdiSourcesCommand,
  ListSignalMapsCommand,
  ListTagsForResourceCommand,
  ListVersionsCommand,
  PurchaseOfferingCommand,
  RebootInputDeviceCommand,
  RejectInputDeviceTransferCommand,
  RestartChannelPipelinesCommand,
  StartChannelCommand,
  StartDeleteMonitorDeploymentCommand,
  StartInputDeviceCommand,
  StartInputDeviceMaintenanceWindowCommand,
  StartMonitorDeploymentCommand,
  StartMultiplexCommand,
  StartUpdateSignalMapCommand,
  StopChannelCommand,
  StopInputDeviceCommand,
  StopMultiplexCommand,
  TransferInputDeviceCommand,
  UpdateAccountConfigurationCommand,
  UpdateChannelCommand,
  UpdateChannelClassCommand,
  UpdateChannelPlacementGroupCommand,
  UpdateCloudWatchAlarmTemplateCommand,
  UpdateCloudWatchAlarmTemplateGroupCommand,
  UpdateClusterCommand,
  UpdateEventBridgeRuleTemplateCommand,
  UpdateEventBridgeRuleTemplateGroupCommand,
  UpdateInputCommand,
  UpdateInputDeviceCommand,
  UpdateInputSecurityGroupCommand,
  UpdateMultiplexCommand,
  UpdateMultiplexProgramCommand,
  UpdateNetworkCommand,
  UpdateNodeCommand,
  UpdateNodeStateCommand,
  UpdateReservationCommand,
  UpdateSdiSourceCommand,
};

export interface MediaLive {
  /**
   * @see {@link AcceptInputDeviceTransferCommand}
   */
  acceptInputDeviceTransfer(
    args: AcceptInputDeviceTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInputDeviceTransferCommandOutput>;
  acceptInputDeviceTransfer(
    args: AcceptInputDeviceTransferCommandInput,
    cb: (err: any, data?: AcceptInputDeviceTransferCommandOutput) => void
  ): void;
  acceptInputDeviceTransfer(
    args: AcceptInputDeviceTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInputDeviceTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteCommand}
   */
  batchDelete(): Promise<BatchDeleteCommandOutput>;
  batchDelete(args: BatchDeleteCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteCommandOutput>;
  batchDelete(args: BatchDeleteCommandInput, cb: (err: any, data?: BatchDeleteCommandOutput) => void): void;
  batchDelete(
    args: BatchDeleteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStartCommand}
   */
  batchStart(): Promise<BatchStartCommandOutput>;
  batchStart(args: BatchStartCommandInput, options?: __HttpHandlerOptions): Promise<BatchStartCommandOutput>;
  batchStart(args: BatchStartCommandInput, cb: (err: any, data?: BatchStartCommandOutput) => void): void;
  batchStart(
    args: BatchStartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStartCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStopCommand}
   */
  batchStop(): Promise<BatchStopCommandOutput>;
  batchStop(args: BatchStopCommandInput, options?: __HttpHandlerOptions): Promise<BatchStopCommandOutput>;
  batchStop(args: BatchStopCommandInput, cb: (err: any, data?: BatchStopCommandOutput) => void): void;
  batchStop(
    args: BatchStopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStopCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateScheduleCommand}
   */
  batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateScheduleCommandOutput>;
  batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): void;
  batchUpdateSchedule(
    args: BatchUpdateScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelInputDeviceTransferCommand}
   */
  cancelInputDeviceTransfer(
    args: CancelInputDeviceTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelInputDeviceTransferCommandOutput>;
  cancelInputDeviceTransfer(
    args: CancelInputDeviceTransferCommandInput,
    cb: (err: any, data?: CancelInputDeviceTransferCommandOutput) => void
  ): void;
  cancelInputDeviceTransfer(
    args: CancelInputDeviceTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelInputDeviceTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link ClaimDeviceCommand}
   */
  claimDevice(): Promise<ClaimDeviceCommandOutput>;
  claimDevice(args: ClaimDeviceCommandInput, options?: __HttpHandlerOptions): Promise<ClaimDeviceCommandOutput>;
  claimDevice(args: ClaimDeviceCommandInput, cb: (err: any, data?: ClaimDeviceCommandOutput) => void): void;
  claimDevice(
    args: ClaimDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClaimDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelPlacementGroupCommand}
   */
  createChannelPlacementGroup(
    args: CreateChannelPlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelPlacementGroupCommandOutput>;
  createChannelPlacementGroup(
    args: CreateChannelPlacementGroupCommandInput,
    cb: (err: any, data?: CreateChannelPlacementGroupCommandOutput) => void
  ): void;
  createChannelPlacementGroup(
    args: CreateChannelPlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudWatchAlarmTemplateCommand}
   */
  createCloudWatchAlarmTemplate(
    args: CreateCloudWatchAlarmTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudWatchAlarmTemplateCommandOutput>;
  createCloudWatchAlarmTemplate(
    args: CreateCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  createCloudWatchAlarmTemplate(
    args: CreateCloudWatchAlarmTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudWatchAlarmTemplateGroupCommand}
   */
  createCloudWatchAlarmTemplateGroup(
    args: CreateCloudWatchAlarmTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudWatchAlarmTemplateGroupCommandOutput>;
  createCloudWatchAlarmTemplateGroup(
    args: CreateCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  createCloudWatchAlarmTemplateGroup(
    args: CreateCloudWatchAlarmTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventBridgeRuleTemplateCommand}
   */
  createEventBridgeRuleTemplate(
    args: CreateEventBridgeRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventBridgeRuleTemplateCommandOutput>;
  createEventBridgeRuleTemplate(
    args: CreateEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  createEventBridgeRuleTemplate(
    args: CreateEventBridgeRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventBridgeRuleTemplateGroupCommand}
   */
  createEventBridgeRuleTemplateGroup(
    args: CreateEventBridgeRuleTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventBridgeRuleTemplateGroupCommandOutput>;
  createEventBridgeRuleTemplateGroup(
    args: CreateEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  createEventBridgeRuleTemplateGroup(
    args: CreateEventBridgeRuleTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputCommand}
   */
  createInput(): Promise<CreateInputCommandOutput>;
  createInput(args: CreateInputCommandInput, options?: __HttpHandlerOptions): Promise<CreateInputCommandOutput>;
  createInput(args: CreateInputCommandInput, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
  createInput(
    args: CreateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputSecurityGroupCommand}
   */
  createInputSecurityGroup(): Promise<CreateInputSecurityGroupCommandOutput>;
  createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInputSecurityGroupCommandOutput>;
  createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): void;
  createInputSecurityGroup(
    args: CreateInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiplexCommand}
   */
  createMultiplex(
    args: CreateMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiplexCommandOutput>;
  createMultiplex(args: CreateMultiplexCommandInput, cb: (err: any, data?: CreateMultiplexCommandOutput) => void): void;
  createMultiplex(
    args: CreateMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiplexProgramCommand}
   */
  createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiplexProgramCommandOutput>;
  createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): void;
  createMultiplexProgram(
    args: CreateMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkCommand}
   */
  createNetwork(): Promise<CreateNetworkCommandOutput>;
  createNetwork(args: CreateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkCommandOutput>;
  createNetwork(args: CreateNetworkCommandInput, cb: (err: any, data?: CreateNetworkCommandOutput) => void): void;
  createNetwork(
    args: CreateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodeCommand}
   */
  createNode(args: CreateNodeCommandInput, options?: __HttpHandlerOptions): Promise<CreateNodeCommandOutput>;
  createNode(args: CreateNodeCommandInput, cb: (err: any, data?: CreateNodeCommandOutput) => void): void;
  createNode(
    args: CreateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNodeRegistrationScriptCommand}
   */
  createNodeRegistrationScript(
    args: CreateNodeRegistrationScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNodeRegistrationScriptCommandOutput>;
  createNodeRegistrationScript(
    args: CreateNodeRegistrationScriptCommandInput,
    cb: (err: any, data?: CreateNodeRegistrationScriptCommandOutput) => void
  ): void;
  createNodeRegistrationScript(
    args: CreateNodeRegistrationScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNodeRegistrationScriptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnerInputCommand}
   */
  createPartnerInput(
    args: CreatePartnerInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartnerInputCommandOutput>;
  createPartnerInput(
    args: CreatePartnerInputCommandInput,
    cb: (err: any, data?: CreatePartnerInputCommandOutput) => void
  ): void;
  createPartnerInput(
    args: CreatePartnerInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartnerInputCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSdiSourceCommand}
   */
  createSdiSource(): Promise<CreateSdiSourceCommandOutput>;
  createSdiSource(
    args: CreateSdiSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSdiSourceCommandOutput>;
  createSdiSource(args: CreateSdiSourceCommandInput, cb: (err: any, data?: CreateSdiSourceCommandOutput) => void): void;
  createSdiSource(
    args: CreateSdiSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSignalMapCommand}
   */
  createSignalMap(
    args: CreateSignalMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSignalMapCommandOutput>;
  createSignalMap(args: CreateSignalMapCommandInput, cb: (err: any, data?: CreateSignalMapCommandOutput) => void): void;
  createSignalMap(
    args: CreateSignalMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelPlacementGroupCommand}
   */
  deleteChannelPlacementGroup(
    args: DeleteChannelPlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelPlacementGroupCommandOutput>;
  deleteChannelPlacementGroup(
    args: DeleteChannelPlacementGroupCommandInput,
    cb: (err: any, data?: DeleteChannelPlacementGroupCommandOutput) => void
  ): void;
  deleteChannelPlacementGroup(
    args: DeleteChannelPlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudWatchAlarmTemplateCommand}
   */
  deleteCloudWatchAlarmTemplate(
    args: DeleteCloudWatchAlarmTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudWatchAlarmTemplateCommandOutput>;
  deleteCloudWatchAlarmTemplate(
    args: DeleteCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  deleteCloudWatchAlarmTemplate(
    args: DeleteCloudWatchAlarmTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudWatchAlarmTemplateGroupCommand}
   */
  deleteCloudWatchAlarmTemplateGroup(
    args: DeleteCloudWatchAlarmTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudWatchAlarmTemplateGroupCommandOutput>;
  deleteCloudWatchAlarmTemplateGroup(
    args: DeleteCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  deleteCloudWatchAlarmTemplateGroup(
    args: DeleteCloudWatchAlarmTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBridgeRuleTemplateCommand}
   */
  deleteEventBridgeRuleTemplate(
    args: DeleteEventBridgeRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventBridgeRuleTemplateCommandOutput>;
  deleteEventBridgeRuleTemplate(
    args: DeleteEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  deleteEventBridgeRuleTemplate(
    args: DeleteEventBridgeRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBridgeRuleTemplateGroupCommand}
   */
  deleteEventBridgeRuleTemplateGroup(
    args: DeleteEventBridgeRuleTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventBridgeRuleTemplateGroupCommandOutput>;
  deleteEventBridgeRuleTemplateGroup(
    args: DeleteEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  deleteEventBridgeRuleTemplateGroup(
    args: DeleteEventBridgeRuleTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInputCommand}
   */
  deleteInput(args: DeleteInputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInputCommandOutput>;
  deleteInput(args: DeleteInputCommandInput, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
  deleteInput(
    args: DeleteInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInputSecurityGroupCommand}
   */
  deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInputSecurityGroupCommandOutput>;
  deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): void;
  deleteInputSecurityGroup(
    args: DeleteInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiplexCommand}
   */
  deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiplexCommandOutput>;
  deleteMultiplex(args: DeleteMultiplexCommandInput, cb: (err: any, data?: DeleteMultiplexCommandOutput) => void): void;
  deleteMultiplex(
    args: DeleteMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiplexProgramCommand}
   */
  deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiplexProgramCommandOutput>;
  deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): void;
  deleteMultiplexProgram(
    args: DeleteMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkCommand}
   */
  deleteNetwork(args: DeleteNetworkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNetworkCommandOutput>;
  deleteNetwork(args: DeleteNetworkCommandInput, cb: (err: any, data?: DeleteNetworkCommandOutput) => void): void;
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNodeCommand}
   */
  deleteNode(args: DeleteNodeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNodeCommandOutput>;
  deleteNode(args: DeleteNodeCommandInput, cb: (err: any, data?: DeleteNodeCommandOutput) => void): void;
  deleteNode(
    args: DeleteNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReservationCommand}
   */
  deleteReservation(
    args: DeleteReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReservationCommandOutput>;
  deleteReservation(
    args: DeleteReservationCommandInput,
    cb: (err: any, data?: DeleteReservationCommandOutput) => void
  ): void;
  deleteReservation(
    args: DeleteReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduleCommand}
   */
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduleCommandOutput>;
  deleteSchedule(args: DeleteScheduleCommandInput, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
  deleteSchedule(
    args: DeleteScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSdiSourceCommand}
   */
  deleteSdiSource(
    args: DeleteSdiSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSdiSourceCommandOutput>;
  deleteSdiSource(args: DeleteSdiSourceCommandInput, cb: (err: any, data?: DeleteSdiSourceCommandOutput) => void): void;
  deleteSdiSource(
    args: DeleteSdiSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSignalMapCommand}
   */
  deleteSignalMap(
    args: DeleteSignalMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSignalMapCommandOutput>;
  deleteSignalMap(args: DeleteSignalMapCommandInput, cb: (err: any, data?: DeleteSignalMapCommandOutput) => void): void;
  deleteSignalMap(
    args: DeleteSignalMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountConfigurationCommand}
   */
  describeAccountConfiguration(): Promise<DescribeAccountConfigurationCommandOutput>;
  describeAccountConfiguration(
    args: DescribeAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountConfigurationCommandOutput>;
  describeAccountConfiguration(
    args: DescribeAccountConfigurationCommandInput,
    cb: (err: any, data?: DescribeAccountConfigurationCommandOutput) => void
  ): void;
  describeAccountConfiguration(
    args: DescribeAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelPlacementGroupCommand}
   */
  describeChannelPlacementGroup(
    args: DescribeChannelPlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelPlacementGroupCommandOutput>;
  describeChannelPlacementGroup(
    args: DescribeChannelPlacementGroupCommandInput,
    cb: (err: any, data?: DescribeChannelPlacementGroupCommandOutput) => void
  ): void;
  describeChannelPlacementGroup(
    args: DescribeChannelPlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputCommand}
   */
  describeInput(args: DescribeInputCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputCommandOutput>;
  describeInput(args: DescribeInputCommandInput, cb: (err: any, data?: DescribeInputCommandOutput) => void): void;
  describeInput(
    args: DescribeInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputDeviceCommand}
   */
  describeInputDevice(
    args: DescribeInputDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInputDeviceCommandOutput>;
  describeInputDevice(
    args: DescribeInputDeviceCommandInput,
    cb: (err: any, data?: DescribeInputDeviceCommandOutput) => void
  ): void;
  describeInputDevice(
    args: DescribeInputDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputDeviceThumbnailCommand}
   */
  describeInputDeviceThumbnail(
    args: DescribeInputDeviceThumbnailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInputDeviceThumbnailCommandOutput>;
  describeInputDeviceThumbnail(
    args: DescribeInputDeviceThumbnailCommandInput,
    cb: (err: any, data?: DescribeInputDeviceThumbnailCommandOutput) => void
  ): void;
  describeInputDeviceThumbnail(
    args: DescribeInputDeviceThumbnailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputDeviceThumbnailCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInputSecurityGroupCommand}
   */
  describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInputSecurityGroupCommandOutput>;
  describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): void;
  describeInputSecurityGroup(
    args: DescribeInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiplexCommand}
   */
  describeMultiplex(
    args: DescribeMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiplexCommandOutput>;
  describeMultiplex(
    args: DescribeMultiplexCommandInput,
    cb: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): void;
  describeMultiplex(
    args: DescribeMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiplexProgramCommand}
   */
  describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiplexProgramCommandOutput>;
  describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): void;
  describeMultiplexProgram(
    args: DescribeMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNetworkCommand}
   */
  describeNetwork(
    args: DescribeNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNetworkCommandOutput>;
  describeNetwork(args: DescribeNetworkCommandInput, cb: (err: any, data?: DescribeNetworkCommandOutput) => void): void;
  describeNetwork(
    args: DescribeNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNodeCommand}
   */
  describeNode(args: DescribeNodeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNodeCommandOutput>;
  describeNode(args: DescribeNodeCommandInput, cb: (err: any, data?: DescribeNodeCommandOutput) => void): void;
  describeNode(
    args: DescribeNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOfferingCommand}
   */
  describeOffering(
    args: DescribeOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOfferingCommandOutput>;
  describeOffering(
    args: DescribeOfferingCommandInput,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;
  describeOffering(
    args: DescribeOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservationCommand}
   */
  describeReservation(
    args: DescribeReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservationCommandOutput>;
  describeReservation(
    args: DescribeReservationCommandInput,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;
  describeReservation(
    args: DescribeReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduleCommand}
   */
  describeSchedule(
    args: DescribeScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduleCommandOutput>;
  describeSchedule(
    args: DescribeScheduleCommandInput,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;
  describeSchedule(
    args: DescribeScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSdiSourceCommand}
   */
  describeSdiSource(
    args: DescribeSdiSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSdiSourceCommandOutput>;
  describeSdiSource(
    args: DescribeSdiSourceCommandInput,
    cb: (err: any, data?: DescribeSdiSourceCommandOutput) => void
  ): void;
  describeSdiSource(
    args: DescribeSdiSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSdiSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThumbnailsCommand}
   */
  describeThumbnails(
    args: DescribeThumbnailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThumbnailsCommandOutput>;
  describeThumbnails(
    args: DescribeThumbnailsCommandInput,
    cb: (err: any, data?: DescribeThumbnailsCommandOutput) => void
  ): void;
  describeThumbnails(
    args: DescribeThumbnailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThumbnailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudWatchAlarmTemplateCommand}
   */
  getCloudWatchAlarmTemplate(
    args: GetCloudWatchAlarmTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudWatchAlarmTemplateCommandOutput>;
  getCloudWatchAlarmTemplate(
    args: GetCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  getCloudWatchAlarmTemplate(
    args: GetCloudWatchAlarmTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudWatchAlarmTemplateGroupCommand}
   */
  getCloudWatchAlarmTemplateGroup(
    args: GetCloudWatchAlarmTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudWatchAlarmTemplateGroupCommandOutput>;
  getCloudWatchAlarmTemplateGroup(
    args: GetCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  getCloudWatchAlarmTemplateGroup(
    args: GetCloudWatchAlarmTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventBridgeRuleTemplateCommand}
   */
  getEventBridgeRuleTemplate(
    args: GetEventBridgeRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventBridgeRuleTemplateCommandOutput>;
  getEventBridgeRuleTemplate(
    args: GetEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: GetEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  getEventBridgeRuleTemplate(
    args: GetEventBridgeRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventBridgeRuleTemplateGroupCommand}
   */
  getEventBridgeRuleTemplateGroup(
    args: GetEventBridgeRuleTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventBridgeRuleTemplateGroupCommandOutput>;
  getEventBridgeRuleTemplateGroup(
    args: GetEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: GetEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  getEventBridgeRuleTemplateGroup(
    args: GetEventBridgeRuleTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSignalMapCommand}
   */
  getSignalMap(args: GetSignalMapCommandInput, options?: __HttpHandlerOptions): Promise<GetSignalMapCommandOutput>;
  getSignalMap(args: GetSignalMapCommandInput, cb: (err: any, data?: GetSignalMapCommandOutput) => void): void;
  getSignalMap(
    args: GetSignalMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelPlacementGroupsCommand}
   */
  listChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelPlacementGroupsCommandOutput>;
  listChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    cb: (err: any, data?: ListChannelPlacementGroupsCommandOutput) => void
  ): void;
  listChannelPlacementGroups(
    args: ListChannelPlacementGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelPlacementGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudWatchAlarmTemplateGroupsCommand}
   */
  listCloudWatchAlarmTemplateGroups(): Promise<ListCloudWatchAlarmTemplateGroupsCommandOutput>;
  listCloudWatchAlarmTemplateGroups(
    args: ListCloudWatchAlarmTemplateGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudWatchAlarmTemplateGroupsCommandOutput>;
  listCloudWatchAlarmTemplateGroups(
    args: ListCloudWatchAlarmTemplateGroupsCommandInput,
    cb: (err: any, data?: ListCloudWatchAlarmTemplateGroupsCommandOutput) => void
  ): void;
  listCloudWatchAlarmTemplateGroups(
    args: ListCloudWatchAlarmTemplateGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudWatchAlarmTemplateGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudWatchAlarmTemplatesCommand}
   */
  listCloudWatchAlarmTemplates(): Promise<ListCloudWatchAlarmTemplatesCommandOutput>;
  listCloudWatchAlarmTemplates(
    args: ListCloudWatchAlarmTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudWatchAlarmTemplatesCommandOutput>;
  listCloudWatchAlarmTemplates(
    args: ListCloudWatchAlarmTemplatesCommandInput,
    cb: (err: any, data?: ListCloudWatchAlarmTemplatesCommandOutput) => void
  ): void;
  listCloudWatchAlarmTemplates(
    args: ListCloudWatchAlarmTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudWatchAlarmTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBridgeRuleTemplateGroupsCommand}
   */
  listEventBridgeRuleTemplateGroups(): Promise<ListEventBridgeRuleTemplateGroupsCommandOutput>;
  listEventBridgeRuleTemplateGroups(
    args: ListEventBridgeRuleTemplateGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventBridgeRuleTemplateGroupsCommandOutput>;
  listEventBridgeRuleTemplateGroups(
    args: ListEventBridgeRuleTemplateGroupsCommandInput,
    cb: (err: any, data?: ListEventBridgeRuleTemplateGroupsCommandOutput) => void
  ): void;
  listEventBridgeRuleTemplateGroups(
    args: ListEventBridgeRuleTemplateGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventBridgeRuleTemplateGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBridgeRuleTemplatesCommand}
   */
  listEventBridgeRuleTemplates(): Promise<ListEventBridgeRuleTemplatesCommandOutput>;
  listEventBridgeRuleTemplates(
    args: ListEventBridgeRuleTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventBridgeRuleTemplatesCommandOutput>;
  listEventBridgeRuleTemplates(
    args: ListEventBridgeRuleTemplatesCommandInput,
    cb: (err: any, data?: ListEventBridgeRuleTemplatesCommandOutput) => void
  ): void;
  listEventBridgeRuleTemplates(
    args: ListEventBridgeRuleTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventBridgeRuleTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputDevicesCommand}
   */
  listInputDevices(): Promise<ListInputDevicesCommandOutput>;
  listInputDevices(
    args: ListInputDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputDevicesCommandOutput>;
  listInputDevices(
    args: ListInputDevicesCommandInput,
    cb: (err: any, data?: ListInputDevicesCommandOutput) => void
  ): void;
  listInputDevices(
    args: ListInputDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputDeviceTransfersCommand}
   */
  listInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputDeviceTransfersCommandOutput>;
  listInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    cb: (err: any, data?: ListInputDeviceTransfersCommandOutput) => void
  ): void;
  listInputDeviceTransfers(
    args: ListInputDeviceTransfersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputDeviceTransfersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputsCommand}
   */
  listInputs(): Promise<ListInputsCommandOutput>;
  listInputs(args: ListInputsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputsCommandOutput>;
  listInputs(args: ListInputsCommandInput, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
  listInputs(
    args: ListInputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputSecurityGroupsCommand}
   */
  listInputSecurityGroups(): Promise<ListInputSecurityGroupsCommandOutput>;
  listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInputSecurityGroupsCommandOutput>;
  listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): void;
  listInputSecurityGroups(
    args: ListInputSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInputSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultiplexesCommand}
   */
  listMultiplexes(): Promise<ListMultiplexesCommandOutput>;
  listMultiplexes(
    args: ListMultiplexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultiplexesCommandOutput>;
  listMultiplexes(args: ListMultiplexesCommandInput, cb: (err: any, data?: ListMultiplexesCommandOutput) => void): void;
  listMultiplexes(
    args: ListMultiplexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultiplexesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultiplexProgramsCommand}
   */
  listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultiplexProgramsCommandOutput>;
  listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): void;
  listMultiplexPrograms(
    args: ListMultiplexProgramsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultiplexProgramsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworksCommand}
   */
  listNetworks(): Promise<ListNetworksCommandOutput>;
  listNetworks(args: ListNetworksCommandInput, options?: __HttpHandlerOptions): Promise<ListNetworksCommandOutput>;
  listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
  listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNodesCommand}
   */
  listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
  listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
  listNodes(
    args: ListNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingsCommand}
   */
  listOfferings(): Promise<ListOfferingsCommandOutput>;
  listOfferings(args: ListOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingsCommandOutput>;
  listOfferings(args: ListOfferingsCommandInput, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
  listOfferings(
    args: ListOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReservationsCommand}
   */
  listReservations(): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReservationsCommandOutput>;
  listReservations(
    args: ListReservationsCommandInput,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;
  listReservations(
    args: ListReservationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReservationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSdiSourcesCommand}
   */
  listSdiSources(): Promise<ListSdiSourcesCommandOutput>;
  listSdiSources(
    args: ListSdiSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSdiSourcesCommandOutput>;
  listSdiSources(args: ListSdiSourcesCommandInput, cb: (err: any, data?: ListSdiSourcesCommandOutput) => void): void;
  listSdiSources(
    args: ListSdiSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSdiSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSignalMapsCommand}
   */
  listSignalMaps(): Promise<ListSignalMapsCommandOutput>;
  listSignalMaps(
    args: ListSignalMapsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSignalMapsCommandOutput>;
  listSignalMaps(args: ListSignalMapsCommandInput, cb: (err: any, data?: ListSignalMapsCommandOutput) => void): void;
  listSignalMaps(
    args: ListSignalMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSignalMapsCommandOutput) => void
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
   * @see {@link ListVersionsCommand}
   */
  listVersions(): Promise<ListVersionsCommandOutput>;
  listVersions(args: ListVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListVersionsCommandOutput>;
  listVersions(args: ListVersionsCommandInput, cb: (err: any, data?: ListVersionsCommandOutput) => void): void;
  listVersions(
    args: ListVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseOfferingCommand}
   */
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootInputDeviceCommand}
   */
  rebootInputDevice(
    args: RebootInputDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInputDeviceCommandOutput>;
  rebootInputDevice(
    args: RebootInputDeviceCommandInput,
    cb: (err: any, data?: RebootInputDeviceCommandOutput) => void
  ): void;
  rebootInputDevice(
    args: RebootInputDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectInputDeviceTransferCommand}
   */
  rejectInputDeviceTransfer(
    args: RejectInputDeviceTransferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectInputDeviceTransferCommandOutput>;
  rejectInputDeviceTransfer(
    args: RejectInputDeviceTransferCommandInput,
    cb: (err: any, data?: RejectInputDeviceTransferCommandOutput) => void
  ): void;
  rejectInputDeviceTransfer(
    args: RejectInputDeviceTransferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectInputDeviceTransferCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartChannelPipelinesCommand}
   */
  restartChannelPipelines(
    args: RestartChannelPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartChannelPipelinesCommandOutput>;
  restartChannelPipelines(
    args: RestartChannelPipelinesCommandInput,
    cb: (err: any, data?: RestartChannelPipelinesCommandOutput) => void
  ): void;
  restartChannelPipelines(
    args: RestartChannelPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartChannelPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChannelCommand}
   */
  startChannel(args: StartChannelCommandInput, options?: __HttpHandlerOptions): Promise<StartChannelCommandOutput>;
  startChannel(args: StartChannelCommandInput, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
  startChannel(
    args: StartChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeleteMonitorDeploymentCommand}
   */
  startDeleteMonitorDeployment(
    args: StartDeleteMonitorDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeleteMonitorDeploymentCommandOutput>;
  startDeleteMonitorDeployment(
    args: StartDeleteMonitorDeploymentCommandInput,
    cb: (err: any, data?: StartDeleteMonitorDeploymentCommandOutput) => void
  ): void;
  startDeleteMonitorDeployment(
    args: StartDeleteMonitorDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeleteMonitorDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInputDeviceCommand}
   */
  startInputDevice(
    args: StartInputDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInputDeviceCommandOutput>;
  startInputDevice(
    args: StartInputDeviceCommandInput,
    cb: (err: any, data?: StartInputDeviceCommandOutput) => void
  ): void;
  startInputDevice(
    args: StartInputDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInputDeviceMaintenanceWindowCommand}
   */
  startInputDeviceMaintenanceWindow(
    args: StartInputDeviceMaintenanceWindowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInputDeviceMaintenanceWindowCommandOutput>;
  startInputDeviceMaintenanceWindow(
    args: StartInputDeviceMaintenanceWindowCommandInput,
    cb: (err: any, data?: StartInputDeviceMaintenanceWindowCommandOutput) => void
  ): void;
  startInputDeviceMaintenanceWindow(
    args: StartInputDeviceMaintenanceWindowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInputDeviceMaintenanceWindowCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMonitorDeploymentCommand}
   */
  startMonitorDeployment(
    args: StartMonitorDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitorDeploymentCommandOutput>;
  startMonitorDeployment(
    args: StartMonitorDeploymentCommandInput,
    cb: (err: any, data?: StartMonitorDeploymentCommandOutput) => void
  ): void;
  startMonitorDeployment(
    args: StartMonitorDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitorDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMultiplexCommand}
   */
  startMultiplex(
    args: StartMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMultiplexCommandOutput>;
  startMultiplex(args: StartMultiplexCommandInput, cb: (err: any, data?: StartMultiplexCommandOutput) => void): void;
  startMultiplex(
    args: StartMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link StartUpdateSignalMapCommand}
   */
  startUpdateSignalMap(
    args: StartUpdateSignalMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartUpdateSignalMapCommandOutput>;
  startUpdateSignalMap(
    args: StartUpdateSignalMapCommandInput,
    cb: (err: any, data?: StartUpdateSignalMapCommandOutput) => void
  ): void;
  startUpdateSignalMap(
    args: StartUpdateSignalMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartUpdateSignalMapCommandOutput) => void
  ): void;

  /**
   * @see {@link StopChannelCommand}
   */
  stopChannel(args: StopChannelCommandInput, options?: __HttpHandlerOptions): Promise<StopChannelCommandOutput>;
  stopChannel(args: StopChannelCommandInput, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
  stopChannel(
    args: StopChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInputDeviceCommand}
   */
  stopInputDevice(
    args: StopInputDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInputDeviceCommandOutput>;
  stopInputDevice(args: StopInputDeviceCommandInput, cb: (err: any, data?: StopInputDeviceCommandOutput) => void): void;
  stopInputDevice(
    args: StopInputDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMultiplexCommand}
   */
  stopMultiplex(args: StopMultiplexCommandInput, options?: __HttpHandlerOptions): Promise<StopMultiplexCommandOutput>;
  stopMultiplex(args: StopMultiplexCommandInput, cb: (err: any, data?: StopMultiplexCommandOutput) => void): void;
  stopMultiplex(
    args: StopMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link TransferInputDeviceCommand}
   */
  transferInputDevice(
    args: TransferInputDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TransferInputDeviceCommandOutput>;
  transferInputDevice(
    args: TransferInputDeviceCommandInput,
    cb: (err: any, data?: TransferInputDeviceCommandOutput) => void
  ): void;
  transferInputDevice(
    args: TransferInputDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountConfigurationCommand}
   */
  updateAccountConfiguration(): Promise<UpdateAccountConfigurationCommandOutput>;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountConfigurationCommandOutput>;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    cb: (err: any, data?: UpdateAccountConfigurationCommandOutput) => void
  ): void;
  updateAccountConfiguration(
    args: UpdateAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelClassCommand}
   */
  updateChannelClass(
    args: UpdateChannelClassCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelClassCommandOutput>;
  updateChannelClass(
    args: UpdateChannelClassCommandInput,
    cb: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): void;
  updateChannelClass(
    args: UpdateChannelClassCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelClassCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelPlacementGroupCommand}
   */
  updateChannelPlacementGroup(
    args: UpdateChannelPlacementGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelPlacementGroupCommandOutput>;
  updateChannelPlacementGroup(
    args: UpdateChannelPlacementGroupCommandInput,
    cb: (err: any, data?: UpdateChannelPlacementGroupCommandOutput) => void
  ): void;
  updateChannelPlacementGroup(
    args: UpdateChannelPlacementGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelPlacementGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudWatchAlarmTemplateCommand}
   */
  updateCloudWatchAlarmTemplate(
    args: UpdateCloudWatchAlarmTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudWatchAlarmTemplateCommandOutput>;
  updateCloudWatchAlarmTemplate(
    args: UpdateCloudWatchAlarmTemplateCommandInput,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;
  updateCloudWatchAlarmTemplate(
    args: UpdateCloudWatchAlarmTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudWatchAlarmTemplateGroupCommand}
   */
  updateCloudWatchAlarmTemplateGroup(
    args: UpdateCloudWatchAlarmTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudWatchAlarmTemplateGroupCommandOutput>;
  updateCloudWatchAlarmTemplateGroup(
    args: UpdateCloudWatchAlarmTemplateGroupCommandInput,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;
  updateCloudWatchAlarmTemplateGroup(
    args: UpdateCloudWatchAlarmTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudWatchAlarmTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
  updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventBridgeRuleTemplateCommand}
   */
  updateEventBridgeRuleTemplate(
    args: UpdateEventBridgeRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventBridgeRuleTemplateCommandOutput>;
  updateEventBridgeRuleTemplate(
    args: UpdateEventBridgeRuleTemplateCommandInput,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateCommandOutput) => void
  ): void;
  updateEventBridgeRuleTemplate(
    args: UpdateEventBridgeRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventBridgeRuleTemplateGroupCommand}
   */
  updateEventBridgeRuleTemplateGroup(
    args: UpdateEventBridgeRuleTemplateGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventBridgeRuleTemplateGroupCommandOutput>;
  updateEventBridgeRuleTemplateGroup(
    args: UpdateEventBridgeRuleTemplateGroupCommandInput,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;
  updateEventBridgeRuleTemplateGroup(
    args: UpdateEventBridgeRuleTemplateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventBridgeRuleTemplateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputCommand}
   */
  updateInput(args: UpdateInputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputCommandOutput>;
  updateInput(args: UpdateInputCommandInput, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
  updateInput(
    args: UpdateInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputDeviceCommand}
   */
  updateInputDevice(
    args: UpdateInputDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInputDeviceCommandOutput>;
  updateInputDevice(
    args: UpdateInputDeviceCommandInput,
    cb: (err: any, data?: UpdateInputDeviceCommandOutput) => void
  ): void;
  updateInputDevice(
    args: UpdateInputDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInputSecurityGroupCommand}
   */
  updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInputSecurityGroupCommandOutput>;
  updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): void;
  updateInputSecurityGroup(
    args: UpdateInputSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInputSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMultiplexCommand}
   */
  updateMultiplex(
    args: UpdateMultiplexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMultiplexCommandOutput>;
  updateMultiplex(args: UpdateMultiplexCommandInput, cb: (err: any, data?: UpdateMultiplexCommandOutput) => void): void;
  updateMultiplex(
    args: UpdateMultiplexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMultiplexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMultiplexProgramCommand}
   */
  updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMultiplexProgramCommandOutput>;
  updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): void;
  updateMultiplexProgram(
    args: UpdateMultiplexProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMultiplexProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkCommand}
   */
  updateNetwork(args: UpdateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNetworkCommandOutput>;
  updateNetwork(args: UpdateNetworkCommandInput, cb: (err: any, data?: UpdateNetworkCommandOutput) => void): void;
  updateNetwork(
    args: UpdateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodeCommand}
   */
  updateNode(args: UpdateNodeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNodeCommandOutput>;
  updateNode(args: UpdateNodeCommandInput, cb: (err: any, data?: UpdateNodeCommandOutput) => void): void;
  updateNode(
    args: UpdateNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNodeStateCommand}
   */
  updateNodeState(
    args: UpdateNodeStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNodeStateCommandOutput>;
  updateNodeState(args: UpdateNodeStateCommandInput, cb: (err: any, data?: UpdateNodeStateCommandOutput) => void): void;
  updateNodeState(
    args: UpdateNodeStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNodeStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReservationCommand}
   */
  updateReservation(
    args: UpdateReservationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReservationCommandOutput>;
  updateReservation(
    args: UpdateReservationCommandInput,
    cb: (err: any, data?: UpdateReservationCommandOutput) => void
  ): void;
  updateReservation(
    args: UpdateReservationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReservationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSdiSourceCommand}
   */
  updateSdiSource(
    args: UpdateSdiSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSdiSourceCommandOutput>;
  updateSdiSource(args: UpdateSdiSourceCommandInput, cb: (err: any, data?: UpdateSdiSourceCommandOutput) => void): void;
  updateSdiSource(
    args: UpdateSdiSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSdiSourceCommandOutput) => void
  ): void;
}

/**
 * API for AWS Elemental MediaLive
 * @public
 */
export class MediaLive extends MediaLiveClient implements MediaLive {}
createAggregatedClient(commands, MediaLive);

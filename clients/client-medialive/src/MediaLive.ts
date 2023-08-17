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
  CreatePartnerInputCommand,
  CreatePartnerInputCommandInput,
  CreatePartnerInputCommandOutput,
} from "./commands/CreatePartnerInputCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
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
  DeleteReservationCommand,
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput,
} from "./commands/DeleteReservationCommand";
import {
  DeleteScheduleCommand,
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput,
} from "./commands/DeleteScheduleCommand";
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
  DescribeThumbnailsCommand,
  DescribeThumbnailsCommandInput,
  DescribeThumbnailsCommandOutput,
} from "./commands/DescribeThumbnailsCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
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
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
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
  StartChannelCommand,
  StartChannelCommandInput,
  StartChannelCommandOutput,
} from "./commands/StartChannelCommand";
import {
  StartInputDeviceMaintenanceWindowCommand,
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "./commands/StartInputDeviceMaintenanceWindowCommand";
import {
  StartMultiplexCommand,
  StartMultiplexCommandInput,
  StartMultiplexCommandOutput,
} from "./commands/StartMultiplexCommand";
import { StopChannelCommand, StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
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
  UpdateReservationCommand,
  UpdateReservationCommandInput,
  UpdateReservationCommandOutput,
} from "./commands/UpdateReservationCommand";
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
  CreateInputCommand,
  CreateInputSecurityGroupCommand,
  CreateMultiplexCommand,
  CreateMultiplexProgramCommand,
  CreatePartnerInputCommand,
  CreateTagsCommand,
  DeleteChannelCommand,
  DeleteInputCommand,
  DeleteInputSecurityGroupCommand,
  DeleteMultiplexCommand,
  DeleteMultiplexProgramCommand,
  DeleteReservationCommand,
  DeleteScheduleCommand,
  DeleteTagsCommand,
  DescribeAccountConfigurationCommand,
  DescribeChannelCommand,
  DescribeInputCommand,
  DescribeInputDeviceCommand,
  DescribeInputDeviceThumbnailCommand,
  DescribeInputSecurityGroupCommand,
  DescribeMultiplexCommand,
  DescribeMultiplexProgramCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  DescribeScheduleCommand,
  DescribeThumbnailsCommand,
  ListChannelsCommand,
  ListInputDevicesCommand,
  ListInputDeviceTransfersCommand,
  ListInputsCommand,
  ListInputSecurityGroupsCommand,
  ListMultiplexesCommand,
  ListMultiplexProgramsCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListTagsForResourceCommand,
  PurchaseOfferingCommand,
  RebootInputDeviceCommand,
  RejectInputDeviceTransferCommand,
  StartChannelCommand,
  StartInputDeviceMaintenanceWindowCommand,
  StartMultiplexCommand,
  StopChannelCommand,
  StopMultiplexCommand,
  TransferInputDeviceCommand,
  UpdateAccountConfigurationCommand,
  UpdateChannelCommand,
  UpdateChannelClassCommand,
  UpdateInputCommand,
  UpdateInputDeviceCommand,
  UpdateInputSecurityGroupCommand,
  UpdateMultiplexCommand,
  UpdateMultiplexProgramCommand,
  UpdateReservationCommand,
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
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInputCommand}
   */
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
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInputDevicesCommand}
   */
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
   * @see {@link ListOfferingsCommand}
   */
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
}

/**
 * @public
 * API for AWS Elemental MediaLive
 */
export class MediaLive extends MediaLiveClient implements MediaLive {}
createAggregatedClient(commands, MediaLive);

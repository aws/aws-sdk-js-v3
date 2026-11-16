// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type ApproveTimeOffCommandInput,
  type ApproveTimeOffCommandOutput,
  ApproveTimeOffCommand,
} from "./commands/ApproveTimeOffCommand";
import {
  type CancelTimeOffCommandInput,
  type CancelTimeOffCommandOutput,
  CancelTimeOffCommand,
} from "./commands/CancelTimeOffCommand";
import {
  type CreateTimeOffCommandInput,
  type CreateTimeOffCommandOutput,
  CreateTimeOffCommand,
} from "./commands/CreateTimeOffCommand";
import {
  type GetTimeOffCommandInput,
  type GetTimeOffCommandOutput,
  GetTimeOffCommand,
} from "./commands/GetTimeOffCommand";
import {
  type PutTimeOffBalanceCommandInput,
  type PutTimeOffBalanceCommandOutput,
  PutTimeOffBalanceCommand,
} from "./commands/PutTimeOffBalanceCommand";
import {
  type RejectTimeOffCommandInput,
  type RejectTimeOffCommandOutput,
  RejectTimeOffCommand,
} from "./commands/RejectTimeOffCommand";
import { ConnectSchedulingClient } from "./ConnectSchedulingClient";

const commands = {
  ApproveTimeOffCommand,
  CancelTimeOffCommand,
  CreateTimeOffCommand,
  GetTimeOffCommand,
  PutTimeOffBalanceCommand,
  RejectTimeOffCommand,
};

/**
 * @public
 */
export interface ConnectSchedulingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ConnectScheduling {
  /**
   * @see {@link ApproveTimeOffCommand}
   */
  approveTimeOff(
    args: ApproveTimeOffCommandInput,
    options?: ConnectSchedulingRequestOptions
  ): Promise<ApproveTimeOffCommandOutput>;
  approveTimeOff(
    args: ApproveTimeOffCommandInput,
    cb: (err: any, data?: ApproveTimeOffCommandOutput) => void
  ): void;
  approveTimeOff(
    args: ApproveTimeOffCommandInput,
    options: ConnectSchedulingRequestOptions,
    cb: (err: any, data?: ApproveTimeOffCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelTimeOffCommand}
   */
  cancelTimeOff(
    args: CancelTimeOffCommandInput,
    options?: ConnectSchedulingRequestOptions
  ): Promise<CancelTimeOffCommandOutput>;
  cancelTimeOff(
    args: CancelTimeOffCommandInput,
    cb: (err: any, data?: CancelTimeOffCommandOutput) => void
  ): void;
  cancelTimeOff(
    args: CancelTimeOffCommandInput,
    options: ConnectSchedulingRequestOptions,
    cb: (err: any, data?: CancelTimeOffCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTimeOffCommand}
   */
  createTimeOff(
    args: CreateTimeOffCommandInput,
    options?: ConnectSchedulingRequestOptions
  ): Promise<CreateTimeOffCommandOutput>;
  createTimeOff(
    args: CreateTimeOffCommandInput,
    cb: (err: any, data?: CreateTimeOffCommandOutput) => void
  ): void;
  createTimeOff(
    args: CreateTimeOffCommandInput,
    options: ConnectSchedulingRequestOptions,
    cb: (err: any, data?: CreateTimeOffCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimeOffCommand}
   */
  getTimeOff(
    args: GetTimeOffCommandInput,
    options?: ConnectSchedulingRequestOptions
  ): Promise<GetTimeOffCommandOutput>;
  getTimeOff(
    args: GetTimeOffCommandInput,
    cb: (err: any, data?: GetTimeOffCommandOutput) => void
  ): void;
  getTimeOff(
    args: GetTimeOffCommandInput,
    options: ConnectSchedulingRequestOptions,
    cb: (err: any, data?: GetTimeOffCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTimeOffBalanceCommand}
   */
  putTimeOffBalance(
    args: PutTimeOffBalanceCommandInput,
    options?: ConnectSchedulingRequestOptions
  ): Promise<PutTimeOffBalanceCommandOutput>;
  putTimeOffBalance(
    args: PutTimeOffBalanceCommandInput,
    cb: (err: any, data?: PutTimeOffBalanceCommandOutput) => void
  ): void;
  putTimeOffBalance(
    args: PutTimeOffBalanceCommandInput,
    options: ConnectSchedulingRequestOptions,
    cb: (err: any, data?: PutTimeOffBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectTimeOffCommand}
   */
  rejectTimeOff(
    args: RejectTimeOffCommandInput,
    options?: ConnectSchedulingRequestOptions
  ): Promise<RejectTimeOffCommandOutput>;
  rejectTimeOff(
    args: RejectTimeOffCommandInput,
    cb: (err: any, data?: RejectTimeOffCommandOutput) => void
  ): void;
  rejectTimeOff(
    args: RejectTimeOffCommandInput,
    options: ConnectSchedulingRequestOptions,
    cb: (err: any, data?: RejectTimeOffCommandOutput) => void
  ): void;
}

/**
 * <ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Scheduling.html">Scheduling actions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Scheduling.html">Scheduling data types</a> </p> </li> </ul> <p>Use the Amazon Connect Scheduling API to work programmatically with Connect Customer forecasting, capacity planning, and scheduling, and to integrate these capabilities with your own systems. In the Connect Customer admin website, you use them to forecast contact volume, plan capacity, and create and manage agent schedules.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/forecasting-capacity-planning-scheduling.html">Forecasting &amp; agent scheduling</a> in the <i>Connect Customer Administrator Guide</i>.</p>
 * @public
 */
export class ConnectScheduling extends ConnectSchedulingClient implements ConnectScheduling {}
createAggregatedClient(commands, ConnectScheduling);

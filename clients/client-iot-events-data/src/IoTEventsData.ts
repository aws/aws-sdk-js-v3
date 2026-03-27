// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type BatchAcknowledgeAlarmCommandInput,
  type BatchAcknowledgeAlarmCommandOutput,
  BatchAcknowledgeAlarmCommand,
} from "./commands/BatchAcknowledgeAlarmCommand";
import {
  type BatchDeleteDetectorCommandInput,
  type BatchDeleteDetectorCommandOutput,
  BatchDeleteDetectorCommand,
} from "./commands/BatchDeleteDetectorCommand";
import {
  type BatchDisableAlarmCommandInput,
  type BatchDisableAlarmCommandOutput,
  BatchDisableAlarmCommand,
} from "./commands/BatchDisableAlarmCommand";
import {
  type BatchEnableAlarmCommandInput,
  type BatchEnableAlarmCommandOutput,
  BatchEnableAlarmCommand,
} from "./commands/BatchEnableAlarmCommand";
import {
  type BatchPutMessageCommandInput,
  type BatchPutMessageCommandOutput,
  BatchPutMessageCommand,
} from "./commands/BatchPutMessageCommand";
import {
  type BatchResetAlarmCommandInput,
  type BatchResetAlarmCommandOutput,
  BatchResetAlarmCommand,
} from "./commands/BatchResetAlarmCommand";
import {
  type BatchSnoozeAlarmCommandInput,
  type BatchSnoozeAlarmCommandOutput,
  BatchSnoozeAlarmCommand,
} from "./commands/BatchSnoozeAlarmCommand";
import {
  type BatchUpdateDetectorCommandInput,
  type BatchUpdateDetectorCommandOutput,
  BatchUpdateDetectorCommand,
} from "./commands/BatchUpdateDetectorCommand";
import {
  type DescribeAlarmCommandInput,
  type DescribeAlarmCommandOutput,
  DescribeAlarmCommand,
} from "./commands/DescribeAlarmCommand";
import {
  type DescribeDetectorCommandInput,
  type DescribeDetectorCommandOutput,
  DescribeDetectorCommand,
} from "./commands/DescribeDetectorCommand";
import {
  type ListAlarmsCommandInput,
  type ListAlarmsCommandOutput,
  ListAlarmsCommand,
} from "./commands/ListAlarmsCommand";
import {
  type ListDetectorsCommandInput,
  type ListDetectorsCommandOutput,
  ListDetectorsCommand,
} from "./commands/ListDetectorsCommand";
import { IoTEventsDataClient } from "./IoTEventsDataClient";

const commands = {
  BatchAcknowledgeAlarmCommand,
  BatchDeleteDetectorCommand,
  BatchDisableAlarmCommand,
  BatchEnableAlarmCommand,
  BatchPutMessageCommand,
  BatchResetAlarmCommand,
  BatchSnoozeAlarmCommand,
  BatchUpdateDetectorCommand,
  DescribeAlarmCommand,
  DescribeDetectorCommand,
  ListAlarmsCommand,
  ListDetectorsCommand,
};

export interface IoTEventsData {
  /**
   * @see {@link BatchAcknowledgeAlarmCommand}
   */
  batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAcknowledgeAlarmCommandOutput>;
  batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    cb: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void
  ): void;
  batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDetectorCommand}
   */
  batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDetectorCommandOutput>;
  batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    cb: (err: any, data?: BatchDeleteDetectorCommandOutput) => void
  ): void;
  batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisableAlarmCommand}
   */
  batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisableAlarmCommandOutput>;
  batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    cb: (err: any, data?: BatchDisableAlarmCommandOutput) => void
  ): void;
  batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisableAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchEnableAlarmCommand}
   */
  batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEnableAlarmCommandOutput>;
  batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    cb: (err: any, data?: BatchEnableAlarmCommandOutput) => void
  ): void;
  batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEnableAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutMessageCommand}
   */
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutMessageCommandOutput>;
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;
  batchPutMessage(
    args: BatchPutMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchResetAlarmCommand}
   */
  batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchResetAlarmCommandOutput>;
  batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    cb: (err: any, data?: BatchResetAlarmCommandOutput) => void
  ): void;
  batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchResetAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchSnoozeAlarmCommand}
   */
  batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchSnoozeAlarmCommandOutput>;
  batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    cb: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void
  ): void;
  batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateDetectorCommand}
   */
  batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateDetectorCommandOutput>;
  batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    cb: (err: any, data?: BatchUpdateDetectorCommandOutput) => void
  ): void;
  batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlarmCommand}
   */
  describeAlarm(
    args: DescribeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmCommandOutput>;
  describeAlarm(
    args: DescribeAlarmCommandInput,
    cb: (err: any, data?: DescribeAlarmCommandOutput) => void
  ): void;
  describeAlarm(
    args: DescribeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDetectorCommand}
   */
  describeDetector(
    args: DescribeDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorCommandOutput>;
  describeDetector(
    args: DescribeDetectorCommandInput,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  describeDetector(
    args: DescribeDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlarmsCommand}
   */
  listAlarms(
    args: ListAlarmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlarmsCommandOutput>;
  listAlarms(
    args: ListAlarmsCommandInput,
    cb: (err: any, data?: ListAlarmsCommandOutput) => void
  ): void;
  listAlarms(
    args: ListAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectorsCommand}
   */
  listDetectors(
    args: ListDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorsCommandOutput>;
  listDetectors(
    args: ListDetectorsCommandInput,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
  listDetectors(
    args: ListDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
}

/**
 * <p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to
 *       detectors, list detectors, and view or update a detector's status.</p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the
 *         <i>IoT Events Developer Guide</i>.</p>
 * @public
 */
export class IoTEventsData extends IoTEventsDataClient implements IoTEventsData {}
createAggregatedClient(commands, IoTEventsData);

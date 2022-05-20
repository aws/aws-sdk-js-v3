// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchAcknowledgeAlarmCommand,
  BatchAcknowledgeAlarmCommandInput,
  BatchAcknowledgeAlarmCommandOutput,
} from "./commands/BatchAcknowledgeAlarmCommand";
import {
  BatchDeleteDetectorCommand,
  BatchDeleteDetectorCommandInput,
  BatchDeleteDetectorCommandOutput,
} from "./commands/BatchDeleteDetectorCommand";
import {
  BatchDisableAlarmCommand,
  BatchDisableAlarmCommandInput,
  BatchDisableAlarmCommandOutput,
} from "./commands/BatchDisableAlarmCommand";
import {
  BatchEnableAlarmCommand,
  BatchEnableAlarmCommandInput,
  BatchEnableAlarmCommandOutput,
} from "./commands/BatchEnableAlarmCommand";
import {
  BatchPutMessageCommand,
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput,
} from "./commands/BatchPutMessageCommand";
import {
  BatchResetAlarmCommand,
  BatchResetAlarmCommandInput,
  BatchResetAlarmCommandOutput,
} from "./commands/BatchResetAlarmCommand";
import {
  BatchSnoozeAlarmCommand,
  BatchSnoozeAlarmCommandInput,
  BatchSnoozeAlarmCommandOutput,
} from "./commands/BatchSnoozeAlarmCommand";
import {
  BatchUpdateDetectorCommand,
  BatchUpdateDetectorCommandInput,
  BatchUpdateDetectorCommandOutput,
} from "./commands/BatchUpdateDetectorCommand";
import {
  DescribeAlarmCommand,
  DescribeAlarmCommandInput,
  DescribeAlarmCommandOutput,
} from "./commands/DescribeAlarmCommand";
import {
  DescribeDetectorCommand,
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput,
} from "./commands/DescribeDetectorCommand";
import { ListAlarmsCommand, ListAlarmsCommandInput, ListAlarmsCommandOutput } from "./commands/ListAlarmsCommand";
import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "./commands/ListDetectorsCommand";
import { IoTEventsDataClient } from "./IoTEventsDataClient";

/**
 * <p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to
 *       detectors, list detectors, and view or update a detector's status.</p>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the
 *         <i>IoT Events Developer Guide</i>.</p>
 */
export class IoTEventsData extends IoTEventsDataClient {
  /**
   * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
   *       after you acknowledge them.</p>
   */
  public batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAcknowledgeAlarmCommandOutput>;
  public batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    cb: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void
  ): void;
  public batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void
  ): void;
  public batchAcknowledgeAlarm(
    args: BatchAcknowledgeAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void),
    cb?: (err: any, data?: BatchAcknowledgeAlarmCommandOutput) => void
  ): Promise<BatchAcknowledgeAlarmCommandOutput> | void {
    const command = new BatchAcknowledgeAlarmCommand(args);
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
   * <p>Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.</p>
   */
  public batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDetectorCommandOutput>;
  public batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    cb: (err: any, data?: BatchDeleteDetectorCommandOutput) => void
  ): void;
  public batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDetectorCommandOutput) => void
  ): void;
  public batchDeleteDetector(
    args: BatchDeleteDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteDetectorCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteDetectorCommandOutput) => void
  ): Promise<BatchDeleteDetectorCommandOutput> | void {
    const command = new BatchDeleteDetectorCommand(args);
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
   * <p>Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after
   *       you disable them.</p>
   */
  public batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisableAlarmCommandOutput>;
  public batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    cb: (err: any, data?: BatchDisableAlarmCommandOutput) => void
  ): void;
  public batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisableAlarmCommandOutput) => void
  ): void;
  public batchDisableAlarm(
    args: BatchDisableAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDisableAlarmCommandOutput) => void),
    cb?: (err: any, data?: BatchDisableAlarmCommandOutput) => void
  ): Promise<BatchDisableAlarmCommandOutput> | void {
    const command = new BatchDisableAlarmCommand(args);
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
   * <p>Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you
   *       enable them.</p>
   */
  public batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchEnableAlarmCommandOutput>;
  public batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    cb: (err: any, data?: BatchEnableAlarmCommandOutput) => void
  ): void;
  public batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchEnableAlarmCommandOutput) => void
  ): void;
  public batchEnableAlarm(
    args: BatchEnableAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchEnableAlarmCommandOutput) => void),
    cb?: (err: any, data?: BatchEnableAlarmCommandOutput) => void
  ): Promise<BatchEnableAlarmCommandOutput> | void {
    const command = new BatchEnableAlarmCommand(args);
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
   * <p>Sends a set of messages to the IoT Events system. Each message payload is transformed into
   *       the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
   *       that input. If multiple messages are sent, the order in which the messages are processed isn't
   *       guaranteed. To guarantee ordering, you must send messages one at a time and wait for a
   *       successful response.</p>
   */
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutMessageCommandOutput>;
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): void;
  public batchPutMessage(
    args: BatchPutMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutMessageCommandOutput) => void),
    cb?: (err: any, data?: BatchPutMessageCommandOutput) => void
  ): Promise<BatchPutMessageCommandOutput> | void {
    const command = new BatchPutMessageCommand(args);
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
   * <p>Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you
   *       reset them.</p>
   */
  public batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchResetAlarmCommandOutput>;
  public batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    cb: (err: any, data?: BatchResetAlarmCommandOutput) => void
  ): void;
  public batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchResetAlarmCommandOutput) => void
  ): void;
  public batchResetAlarm(
    args: BatchResetAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchResetAlarmCommandOutput) => void),
    cb?: (err: any, data?: BatchResetAlarmCommandOutput) => void
  ): Promise<BatchResetAlarmCommandOutput> | void {
    const command = new BatchResetAlarmCommand(args);
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
   * <p>Changes one or more alarms to the snooze mode. The alarms change to the
   *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
   */
  public batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchSnoozeAlarmCommandOutput>;
  public batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    cb: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void
  ): void;
  public batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void
  ): void;
  public batchSnoozeAlarm(
    args: BatchSnoozeAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchSnoozeAlarmCommandOutput) => void),
    cb?: (err: any, data?: BatchSnoozeAlarmCommandOutput) => void
  ): Promise<BatchSnoozeAlarmCommandOutput> | void {
    const command = new BatchSnoozeAlarmCommand(args);
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
   * <p>Updates the state, variable values, and timer settings of one or more detectors
   *       (instances) of a specified detector model.</p>
   */
  public batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateDetectorCommandOutput>;
  public batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    cb: (err: any, data?: BatchUpdateDetectorCommandOutput) => void
  ): void;
  public batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateDetectorCommandOutput) => void
  ): void;
  public batchUpdateDetector(
    args: BatchUpdateDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateDetectorCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateDetectorCommandOutput) => void
  ): Promise<BatchUpdateDetectorCommandOutput> | void {
    const command = new BatchUpdateDetectorCommand(args);
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
   * <p>Retrieves information about an alarm.</p>
   */
  public describeAlarm(
    args: DescribeAlarmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlarmCommandOutput>;
  public describeAlarm(
    args: DescribeAlarmCommandInput,
    cb: (err: any, data?: DescribeAlarmCommandOutput) => void
  ): void;
  public describeAlarm(
    args: DescribeAlarmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlarmCommandOutput) => void
  ): void;
  public describeAlarm(
    args: DescribeAlarmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAlarmCommandOutput) => void),
    cb?: (err: any, data?: DescribeAlarmCommandOutput) => void
  ): Promise<DescribeAlarmCommandOutput> | void {
    const command = new DescribeAlarmCommand(args);
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
   * <p>Returns information about the specified detector (instance).</p>
   */
  public describeDetector(
    args: DescribeDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDetectorCommandOutput>;
  public describeDetector(
    args: DescribeDetectorCommandInput,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  public describeDetector(
    args: DescribeDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): void;
  public describeDetector(
    args: DescribeDetectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDetectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeDetectorCommandOutput) => void
  ): Promise<DescribeDetectorCommandOutput> | void {
    const command = new DescribeDetectorCommand(args);
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
   * <p>Lists one or more alarms. The operation returns only the metadata associated with each
   *       alarm.</p>
   */
  public listAlarms(args: ListAlarmsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlarmsCommandOutput>;
  public listAlarms(args: ListAlarmsCommandInput, cb: (err: any, data?: ListAlarmsCommandOutput) => void): void;
  public listAlarms(
    args: ListAlarmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlarmsCommandOutput) => void
  ): void;
  public listAlarms(
    args: ListAlarmsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAlarmsCommandOutput) => void),
    cb?: (err: any, data?: ListAlarmsCommandOutput) => void
  ): Promise<ListAlarmsCommandOutput> | void {
    const command = new ListAlarmsCommand(args);
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
   * <p>Lists detectors (the instances of a detector model).</p>
   */
  public listDetectors(
    args: ListDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorsCommandOutput>;
  public listDetectors(
    args: ListDetectorsCommandInput,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
  public listDetectors(
    args: ListDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
  public listDetectors(
    args: ListDetectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDetectorsCommandOutput) => void),
    cb?: (err: any, data?: ListDetectorsCommandOutput) => void
  ): Promise<ListDetectorsCommandOutput> | void {
    const command = new ListDetectorsCommand(args);
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

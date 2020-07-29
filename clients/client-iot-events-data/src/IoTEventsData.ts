import { IoTEventsDataClient } from "./IoTEventsDataClient";
import {
  BatchPutMessageCommand,
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput,
} from "./commands/BatchPutMessageCommand";
import {
  BatchUpdateDetectorCommand,
  BatchUpdateDetectorCommandInput,
  BatchUpdateDetectorCommandOutput,
} from "./commands/BatchUpdateDetectorCommand";
import {
  DescribeDetectorCommand,
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput,
} from "./commands/DescribeDetectorCommand";
import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "./commands/ListDetectorsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation,
 *         and triggers actions when such events occur. AWS IoT Events Data API commands enable you to send
 *         inputs to detectors, list detectors, and view or update a detector's status.</p>
 */
export class IoTEventsData extends IoTEventsDataClient {
  /**
   * <p>Sends a set of messages to the AWS IoT Events system. Each message payload is transformed
   *        into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
   *        that input. If multiple messages are sent, the order in which the messages are processed isn't
   *        guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful
   *        response.</p>
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
   * <p>Updates the state, variable values, and timer settings of one or more detectors (instances)
   *         of a specified detector model.</p>
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

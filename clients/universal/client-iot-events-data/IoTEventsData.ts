import { IoTEventsDataClient } from "./IoTEventsDataClient";
import { BatchPutMessageInput } from "./types/BatchPutMessageInput";
import { BatchPutMessageOutput } from "./types/BatchPutMessageOutput";
import { BatchUpdateDetectorInput } from "./types/BatchUpdateDetectorInput";
import { BatchUpdateDetectorOutput } from "./types/BatchUpdateDetectorOutput";
import { DescribeDetectorInput } from "./types/DescribeDetectorInput";
import { DescribeDetectorOutput } from "./types/DescribeDetectorOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListDetectorsInput } from "./types/ListDetectorsInput";
import { ListDetectorsOutput } from "./types/ListDetectorsOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { ThrottlingException } from "./types/ThrottlingException";
import { BatchPutMessageCommand } from "./commands/BatchPutMessageCommand";
import { BatchUpdateDetectorCommand } from "./commands/BatchUpdateDetectorCommand";
import { DescribeDetectorCommand } from "./commands/DescribeDetectorCommand";
import { ListDetectorsCommand } from "./commands/ListDetectorsCommand";

export class IoTEventsData extends IoTEventsDataClient {
  /**
   * <p>Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {InternalFailureException} <p>An internal failure occured.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchPutMessage(
    args: BatchPutMessageInput
  ): Promise<BatchPutMessageOutput>;
  public batchPutMessage(
    args: BatchPutMessageInput,
    cb: (err: any, data?: BatchPutMessageOutput) => void
  ): void;
  public batchPutMessage(
    args: BatchPutMessageInput,
    cb?: (err: any, data?: BatchPutMessageOutput) => void
  ): Promise<BatchPutMessageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchPutMessageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {InternalFailureException} <p>An internal failure occured.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchUpdateDetector(
    args: BatchUpdateDetectorInput
  ): Promise<BatchUpdateDetectorOutput>;
  public batchUpdateDetector(
    args: BatchUpdateDetectorInput,
    cb: (err: any, data?: BatchUpdateDetectorOutput) => void
  ): void;
  public batchUpdateDetector(
    args: BatchUpdateDetectorInput,
    cb?: (err: any, data?: BatchUpdateDetectorOutput) => void
  ): Promise<BatchUpdateDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchUpdateDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified detector (instance).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occured.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDetector(
    args: DescribeDetectorInput
  ): Promise<DescribeDetectorOutput>;
  public describeDetector(
    args: DescribeDetectorInput,
    cb: (err: any, data?: DescribeDetectorOutput) => void
  ): void;
  public describeDetector(
    args: DescribeDetectorInput,
    cb?: (err: any, data?: DescribeDetectorOutput) => void
  ): Promise<DescribeDetectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDetectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists detectors (the instances of a detector model).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request was invalid.</p>
   *   - {ResourceNotFoundException} <p>The resource was not found.</p>
   *   - {ThrottlingException} <p>The request could not be completed due to throttling.</p>
   *   - {InternalFailureException} <p>An internal failure occured.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDetectors(args: ListDetectorsInput): Promise<ListDetectorsOutput>;
  public listDetectors(
    args: ListDetectorsInput,
    cb: (err: any, data?: ListDetectorsOutput) => void
  ): void;
  public listDetectors(
    args: ListDetectorsInput,
    cb?: (err: any, data?: ListDetectorsOutput) => void
  ): Promise<ListDetectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDetectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}

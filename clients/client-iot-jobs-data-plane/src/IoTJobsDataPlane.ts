// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeJobExecutionCommand,
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "./commands/DescribeJobExecutionCommand";
import {
  GetPendingJobExecutionsCommand,
  GetPendingJobExecutionsCommandInput,
  GetPendingJobExecutionsCommandOutput,
} from "./commands/GetPendingJobExecutionsCommand";
import {
  StartNextPendingJobExecutionCommand,
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput,
} from "./commands/StartNextPendingJobExecutionCommand";
import {
  UpdateJobExecutionCommand,
  UpdateJobExecutionCommandInput,
  UpdateJobExecutionCommandOutput,
} from "./commands/UpdateJobExecutionCommand";
import { IoTJobsDataPlaneClient } from "./IoTJobsDataPlaneClient";

/**
 * <p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to
 *          and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a
 *          set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform
 *          remote troubleshooting operations.</p>
 *          <p> To create a job, you make a job document which is a description of the remote operations to be
 *          performed, and you specify a list of targets that should perform the operations. The targets can be individual
 *          things, thing groups or both.</p>
 *          <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the
 *          execution of the job by downloading the job document, performing the operations it specifies, and reporting its
 *          progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and
 *          for all the targets of the job</p>
 */
export class IoTJobsDataPlane extends IoTJobsDataPlaneClient {
  /**
   * <p>Gets details of a job execution.</p>
   */
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobExecutionCommandOutput>;
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  public describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): Promise<DescribeJobExecutionCommandOutput> | void {
    const command = new DescribeJobExecutionCommand(args);
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
   * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
   */
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPendingJobExecutionsCommandOutput>;
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): void;
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): void;
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPendingJobExecutionsCommandOutput) => void),
    cb?: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): Promise<GetPendingJobExecutionsCommandOutput> | void {
    const command = new GetPendingJobExecutionsCommand(args);
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
   * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
   */
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNextPendingJobExecutionCommandOutput>;
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): void;
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): void;
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartNextPendingJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): Promise<StartNextPendingJobExecutionCommandOutput> | void {
    const command = new StartNextPendingJobExecutionCommand(args);
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
   * <p>Updates the status of a job execution.</p>
   */
  public updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobExecutionCommandOutput>;
  public updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): void;
  public updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): void;
  public updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): Promise<UpdateJobExecutionCommandOutput> | void {
    const command = new UpdateJobExecutionCommand(args);
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

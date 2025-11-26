// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  StartCommandExecutionCommand,
  StartCommandExecutionCommandInput,
  StartCommandExecutionCommandOutput,
} from "./commands/StartCommandExecutionCommand";
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

const commands = {
  DescribeJobExecutionCommand,
  GetPendingJobExecutionsCommand,
  StartCommandExecutionCommand,
  StartNextPendingJobExecutionCommand,
  UpdateJobExecutionCommand,
};

export interface IoTJobsDataPlane {
  /**
   * @see {@link DescribeJobExecutionCommand}
   */
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobExecutionCommandOutput>;
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPendingJobExecutionsCommand}
   */
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPendingJobExecutionsCommandOutput>;
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): void;
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCommandExecutionCommand}
   */
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCommandExecutionCommandOutput>;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNextPendingJobExecutionCommand}
   */
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNextPendingJobExecutionCommandOutput>;
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): void;
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobExecutionCommand}
   */
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobExecutionCommandOutput>;
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): void;
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): void;
}

/**
 * <p>IoT Jobs is a service that allows you to define a set of jobs — remote operations
 *          that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example,
 *          you can define a job that instructs a set of devices to download and install application or
 *          firmware updates, reboot, rotate certificates, or perform remote troubleshooting
 *          operations.</p>
 *          <p>Find the endpoint address for actions in the IoT jobs data plane by running this
 *          CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Jobs</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
 *             Signature Version 4</a> to sign requests is:
 *          <i>iot-jobs-data</i>.</p>
 *          <p> To create a job, you make a job document which is a description of the remote
 *          operations to be performed, and you specify a list of targets that should perform the
 *          operations. The targets can be individual things, thing groups or both.</p>
 *          <p> IoT Jobs sends a message to inform the targets that a job is available. The target
 *          starts the execution of the job by downloading the job document, performing the operations
 *          it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands
 *          to track the progress of a job on a specific target and for all the targets of the
 *          job</p>
 * @public
 */
export class IoTJobsDataPlane extends IoTJobsDataPlaneClient implements IoTJobsDataPlane {}
createAggregatedClient(commands, IoTJobsDataPlane);

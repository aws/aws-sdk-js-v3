// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type DescribeJobExecutionCommandInput,
  type DescribeJobExecutionCommandOutput,
  DescribeJobExecutionCommand,
} from "./commands/DescribeJobExecutionCommand";
import {
  type GetPendingJobExecutionsCommandInput,
  type GetPendingJobExecutionsCommandOutput,
  GetPendingJobExecutionsCommand,
} from "./commands/GetPendingJobExecutionsCommand";
import {
  type StartCommandExecutionCommandInput,
  type StartCommandExecutionCommandOutput,
  StartCommandExecutionCommand,
} from "./commands/StartCommandExecutionCommand";
import {
  type StartNextPendingJobExecutionCommandInput,
  type StartNextPendingJobExecutionCommandOutput,
  StartNextPendingJobExecutionCommand,
} from "./commands/StartNextPendingJobExecutionCommand";
import {
  type UpdateJobExecutionCommandInput,
  type UpdateJobExecutionCommandOutput,
  UpdateJobExecutionCommand,
} from "./commands/UpdateJobExecutionCommand";
import { IoTJobsDataPlaneClient } from "./IoTJobsDataPlaneClient";

const commands = {
  DescribeJobExecutionCommand,
  GetPendingJobExecutionsCommand,
  StartCommandExecutionCommand,
  StartNextPendingJobExecutionCommand,
  UpdateJobExecutionCommand,
};

/**
 * @public
 */
export interface IoTJobsDataPlaneRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface IoTJobsDataPlane {
  /**
   * @see {@link DescribeJobExecutionCommand}
   */
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: IoTJobsDataPlaneRequestOptions
  ): Promise<DescribeJobExecutionCommandOutput>;
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options: IoTJobsDataPlaneRequestOptions,
    cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPendingJobExecutionsCommand}
   */
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options?: IoTJobsDataPlaneRequestOptions
  ): Promise<GetPendingJobExecutionsCommandOutput>;
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): void;
  getPendingJobExecutions(
    args: GetPendingJobExecutionsCommandInput,
    options: IoTJobsDataPlaneRequestOptions,
    cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCommandExecutionCommand}
   */
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options?: IoTJobsDataPlaneRequestOptions
  ): Promise<StartCommandExecutionCommandOutput>;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;
  startCommandExecution(
    args: StartCommandExecutionCommandInput,
    options: IoTJobsDataPlaneRequestOptions,
    cb: (err: any, data?: StartCommandExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNextPendingJobExecutionCommand}
   */
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options?: IoTJobsDataPlaneRequestOptions
  ): Promise<StartNextPendingJobExecutionCommandOutput>;
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): void;
  startNextPendingJobExecution(
    args: StartNextPendingJobExecutionCommandInput,
    options: IoTJobsDataPlaneRequestOptions,
    cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJobExecutionCommand}
   */
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options?: IoTJobsDataPlaneRequestOptions
  ): Promise<UpdateJobExecutionCommandOutput>;
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): void;
  updateJobExecution(
    args: UpdateJobExecutionCommandInput,
    options: IoTJobsDataPlaneRequestOptions,
    cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void
  ): void;
}

/**
 * IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.
 *
 * Find the endpoint address for actions in the IoT jobs data plane by running this CLI command:
 *
 * `aws iot describe-endpoint --endpoint-type iot:Jobs`
 *
 * The service name used by [Amazon Web Services Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) to sign requests is: *iot-jobs-data*.
 *
 * To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.
 *
 * IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job
 *
 * @public
 */
export class IoTJobsDataPlane extends IoTJobsDataPlaneClient implements IoTJobsDataPlane {}
createAggregatedClient(commands, IoTJobsDataPlane);

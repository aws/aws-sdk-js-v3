import { IoTJobsDataPlaneClient } from "./IoTJobsDataPlaneClient";
import { CertificateValidationException } from "./types/CertificateValidationException";
import { DescribeJobExecutionInput } from "./types/DescribeJobExecutionInput";
import { DescribeJobExecutionOutput } from "./types/DescribeJobExecutionOutput";
import { GetPendingJobExecutionsInput } from "./types/GetPendingJobExecutionsInput";
import { GetPendingJobExecutionsOutput } from "./types/GetPendingJobExecutionsOutput";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { InvalidStateTransitionException } from "./types/InvalidStateTransitionException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartNextPendingJobExecutionInput } from "./types/StartNextPendingJobExecutionInput";
import { StartNextPendingJobExecutionOutput } from "./types/StartNextPendingJobExecutionOutput";
import { TerminalStateException } from "./types/TerminalStateException";
import { ThrottlingException } from "./types/ThrottlingException";
import { UpdateJobExecutionInput } from "./types/UpdateJobExecutionInput";
import { UpdateJobExecutionOutput } from "./types/UpdateJobExecutionOutput";
import { DescribeJobExecutionCommand } from "./commands/DescribeJobExecutionCommand";
import { GetPendingJobExecutionsCommand } from "./commands/GetPendingJobExecutionsCommand";
import { StartNextPendingJobExecutionCommand } from "./commands/StartNextPendingJobExecutionCommand";
import { UpdateJobExecutionCommand } from "./commands/UpdateJobExecutionCommand";

export class IoTJobsDataPlane extends IoTJobsDataPlaneClient {
  /**
   * <p>Gets details of a job execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {CertificateValidationException} <p>The certificate is invalid.</p>
   *   - {TerminalStateException} <p>The job is in a terminal state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJobExecution(
    args: DescribeJobExecutionInput
  ): Promise<DescribeJobExecutionOutput>;
  public describeJobExecution(
    args: DescribeJobExecutionInput,
    cb: (err: any, data?: DescribeJobExecutionOutput) => void
  ): void;
  public describeJobExecution(
    args: DescribeJobExecutionInput,
    cb?: (err: any, data?: DescribeJobExecutionOutput) => void
  ): Promise<DescribeJobExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {CertificateValidationException} <p>The certificate is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsInput
  ): Promise<GetPendingJobExecutionsOutput>;
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsInput,
    cb: (err: any, data?: GetPendingJobExecutionsOutput) => void
  ): void;
  public getPendingJobExecutions(
    args: GetPendingJobExecutionsInput,
    cb?: (err: any, data?: GetPendingJobExecutionsOutput) => void
  ): Promise<GetPendingJobExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPendingJobExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {CertificateValidationException} <p>The certificate is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionInput
  ): Promise<StartNextPendingJobExecutionOutput>;
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionInput,
    cb: (err: any, data?: StartNextPendingJobExecutionOutput) => void
  ): void;
  public startNextPendingJobExecution(
    args: StartNextPendingJobExecutionInput,
    cb?: (err: any, data?: StartNextPendingJobExecutionOutput) => void
  ): Promise<StartNextPendingJobExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartNextPendingJobExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status of a job execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>The rate exceeds the limit.</p>
   *   - {ServiceUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {CertificateValidationException} <p>The certificate is invalid.</p>
   *   - {InvalidStateTransitionException} <p>An update attempted to change the job execution to a state that is invalid because of the job execution's current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this case, the body of the error message also contains the executionState field.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJobExecution(
    args: UpdateJobExecutionInput
  ): Promise<UpdateJobExecutionOutput>;
  public updateJobExecution(
    args: UpdateJobExecutionInput,
    cb: (err: any, data?: UpdateJobExecutionOutput) => void
  ): void;
  public updateJobExecution(
    args: UpdateJobExecutionInput,
    cb?: (err: any, data?: UpdateJobExecutionOutput) => void
  ): Promise<UpdateJobExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}

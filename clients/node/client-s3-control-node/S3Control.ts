import { S3ControlClient } from "./S3ControlClient";
import { BadRequestException } from "./types/BadRequestException";
import { CreateJobInput } from "./types/CreateJobInput";
import { CreateJobOutput } from "./types/CreateJobOutput";
import { DeletePublicAccessBlockInput } from "./types/DeletePublicAccessBlockInput";
import { DeletePublicAccessBlockOutput } from "./types/DeletePublicAccessBlockOutput";
import { DescribeJobInput } from "./types/DescribeJobInput";
import { DescribeJobOutput } from "./types/DescribeJobOutput";
import { GetPublicAccessBlockInput } from "./types/GetPublicAccessBlockInput";
import { GetPublicAccessBlockOutput } from "./types/GetPublicAccessBlockOutput";
import { IdempotencyException } from "./types/IdempotencyException";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { JobStatusException } from "./types/JobStatusException";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { NoSuchPublicAccessBlockConfiguration } from "./types/NoSuchPublicAccessBlockConfiguration";
import { NotFoundException } from "./types/NotFoundException";
import { PutPublicAccessBlockInput } from "./types/PutPublicAccessBlockInput";
import { PutPublicAccessBlockOutput } from "./types/PutPublicAccessBlockOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UpdateJobPriorityInput } from "./types/UpdateJobPriorityInput";
import { UpdateJobPriorityOutput } from "./types/UpdateJobPriorityOutput";
import { UpdateJobStatusInput } from "./types/UpdateJobStatusInput";
import { UpdateJobStatusOutput } from "./types/UpdateJobStatusOutput";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { DeletePublicAccessBlockCommand } from "./commands/DeletePublicAccessBlockCommand";
import { DescribeJobCommand } from "./commands/DescribeJobCommand";
import { GetPublicAccessBlockCommand } from "./commands/GetPublicAccessBlockCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { PutPublicAccessBlockCommand } from "./commands/PutPublicAccessBlockCommand";
import { UpdateJobPriorityCommand } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommand } from "./commands/UpdateJobStatusCommand";

export class S3Control extends S3ControlClient {
  /**
   * <p>Creates an Amazon S3 batch operations job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p/>
   *   - {BadRequestException} <p/>
   *   - {IdempotencyException} <p/>
   *   - {InternalServiceException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJob(args: CreateJobInput): Promise<CreateJobOutput>;
  public createJob(
    args: CreateJobInput,
    cb: (err: any, data?: CreateJobOutput) => void
  ): void;
  public createJob(
    args: CreateJobInput,
    cb?: (err: any, data?: CreateJobOutput) => void
  ): Promise<CreateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the block public access configuration for the specified account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockInput
  ): Promise<DeletePublicAccessBlockOutput>;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockInput,
    cb: (err: any, data?: DeletePublicAccessBlockOutput) => void
  ): void;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockInput,
    cb?: (err: any, data?: DeletePublicAccessBlockOutput) => void
  ): Promise<DeletePublicAccessBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePublicAccessBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the configuration parameters and status for a batch operations job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {NotFoundException} <p/>
   *   - {InternalServiceException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJob(args: DescribeJobInput): Promise<DescribeJobOutput>;
  public describeJob(
    args: DescribeJobInput,
    cb: (err: any, data?: DescribeJobOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobInput,
    cb?: (err: any, data?: DescribeJobOutput) => void
  ): Promise<DescribeJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchPublicAccessBlockConfiguration} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPublicAccessBlock(
    args: GetPublicAccessBlockInput
  ): Promise<GetPublicAccessBlockOutput>;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockInput,
    cb: (err: any, data?: GetPublicAccessBlockOutput) => void
  ): void;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockInput,
    cb?: (err: any, data?: GetPublicAccessBlockOutput) => void
  ): Promise<GetPublicAccessBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPublicAccessBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists current jobs and jobs that have ended within the last 30 days for the AWS account making the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {InternalServiceException} <p/>
   *   - {InvalidNextTokenException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPublicAccessBlock(
    args: PutPublicAccessBlockInput
  ): Promise<PutPublicAccessBlockOutput>;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockInput,
    cb: (err: any, data?: PutPublicAccessBlockOutput) => void
  ): void;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockInput,
    cb?: (err: any, data?: PutPublicAccessBlockOutput) => void
  ): Promise<PutPublicAccessBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPublicAccessBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing job's priority.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {NotFoundException} <p/>
   *   - {InternalServiceException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJobPriority(
    args: UpdateJobPriorityInput
  ): Promise<UpdateJobPriorityOutput>;
  public updateJobPriority(
    args: UpdateJobPriorityInput,
    cb: (err: any, data?: UpdateJobPriorityOutput) => void
  ): void;
  public updateJobPriority(
    args: UpdateJobPriorityInput,
    cb?: (err: any, data?: UpdateJobPriorityOutput) => void
  ): Promise<UpdateJobPriorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobPriorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p/>
   *   - {TooManyRequestsException} <p/>
   *   - {NotFoundException} <p/>
   *   - {JobStatusException} <p/>
   *   - {InternalServiceException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJobStatus(
    args: UpdateJobStatusInput
  ): Promise<UpdateJobStatusOutput>;
  public updateJobStatus(
    args: UpdateJobStatusInput,
    cb: (err: any, data?: UpdateJobStatusOutput) => void
  ): void;
  public updateJobStatus(
    args: UpdateJobStatusInput,
    cb?: (err: any, data?: UpdateJobStatusOutput) => void
  ): Promise<UpdateJobStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}

import { S3ControlClient } from "./S3ControlClient";
import {
  CreateAccessPointCommand,
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput
} from "./commands/CreateAccessPointCommand";
import {
  CreateJobCommand,
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "./commands/CreateJobCommand";
import {
  DeleteAccessPointCommand,
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput
} from "./commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointPolicyCommand,
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput
} from "./commands/DeleteAccessPointPolicyCommand";
import {
  DeletePublicAccessBlockCommand,
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput
} from "./commands/DeletePublicAccessBlockCommand";
import {
  DescribeJobCommand,
  DescribeJobCommandInput,
  DescribeJobCommandOutput
} from "./commands/DescribeJobCommand";
import {
  GetAccessPointCommand,
  GetAccessPointCommandInput,
  GetAccessPointCommandOutput
} from "./commands/GetAccessPointCommand";
import {
  GetAccessPointPolicyCommand,
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput
} from "./commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyStatusCommand,
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput
} from "./commands/GetAccessPointPolicyStatusCommand";
import {
  GetPublicAccessBlockCommand,
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput
} from "./commands/GetPublicAccessBlockCommand";
import {
  ListAccessPointsCommand,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput
} from "./commands/ListAccessPointsCommand";
import {
  ListJobsCommand,
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "./commands/ListJobsCommand";
import {
  PutAccessPointPolicyCommand,
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput
} from "./commands/PutAccessPointPolicyCommand";
import {
  PutPublicAccessBlockCommand,
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput
} from "./commands/PutPublicAccessBlockCommand";
import {
  UpdateJobPriorityCommand,
  UpdateJobPriorityCommandInput,
  UpdateJobPriorityCommandOutput
} from "./commands/UpdateJobPriorityCommand";
import {
  UpdateJobStatusCommand,
  UpdateJobStatusCommandInput,
  UpdateJobStatusCommandOutput
} from "./commands/UpdateJobStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *       </p>
 */
export class S3Control extends S3ControlClient {
  /**
   * <p>Creates an access point and associates it with the specified bucket.</p>
   */
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointCommandOutput>;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAccessPointCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): Promise<CreateAccessPointCommandOutput> | void {
    const command = new CreateAccessPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon S3 batch operations job.</p>
   */
  public createJob(
    args: CreateJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobCommandOutput>;
  public createJob(
    args: CreateJobCommandInput,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified access point.</p>
   */
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointCommandOutput>;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAccessPointCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): Promise<DeleteAccessPointCommandOutput> | void {
    const command = new DeleteAccessPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the access point policy for the specified access point.</p>
   */
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointPolicyCommandOutput>;
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): void;
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): void;
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAccessPointPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): Promise<DeleteAccessPointPolicyCommandOutput> | void {
    const command = new DeleteAccessPointPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon Web Services
   *       account.</p>
   */
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicAccessBlockCommandOutput>;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePublicAccessBlockCommandOutput) => void),
    cb?: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): Promise<DeletePublicAccessBlockCommandOutput> | void {
    const command = new DeletePublicAccessBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the configuration parameters and status for a batch operations job.</p>
   */
  public describeJob(
    args: DescribeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobCommandOutput>;
  public describeJob(
    args: DescribeJobCommandInput,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobCommandOutput) => void
  ): Promise<DescribeJobCommandOutput> | void {
    const command = new DescribeJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns configuration information about the specified access point.</p>
   */
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointCommandOutput>;
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAccessPointCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPointCommandOutput) => void
  ): Promise<GetAccessPointCommandOutput> | void {
    const command = new GetAccessPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the access point policy associated with the specified access point.</p>
   */
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyCommandOutput>;
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): void;
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): void;
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAccessPointPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): Promise<GetAccessPointPolicyCommandOutput> | void {
    const command = new GetAccessPointPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyStatusCommandOutput>;
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): void;
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): void;
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): Promise<GetAccessPointPolicyStatusCommandOutput> | void {
    const command = new GetAccessPointPolicyStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account.</p>
   */
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicAccessBlockCommandOutput>;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPublicAccessBlockCommandOutput) => void),
    cb?: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): Promise<GetPublicAccessBlockCommandOutput> | void {
    const command = new GetPublicAccessBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the access points currently associated with the specified bucket. You can
   * 		   retrieve up to 1000 access points per call. If the specified bucket has more than 1000 access points (or the number specified in <code>maxResults</code>, whichever is less), then the response will include a continuation token that you can use to list the additional access points.</p>
   */
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPointsCommandOutput>;
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAccessPointsCommandOutput) => void),
    cb?: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): Promise<ListAccessPointsCommandOutput> | void {
    const command = new ListAccessPointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists current jobs and jobs that have ended within the last 30 days for the AWS account making the request.</p>
   */
  public listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  public listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.</p>
   */
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessPointPolicyCommandOutput>;
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): void;
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): void;
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutAccessPointPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): Promise<PutAccessPointPolicyCommandOutput> | void {
    const command = new PutAccessPointPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon Web Services
   *       account.</p>
   */
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPublicAccessBlockCommandOutput>;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutPublicAccessBlockCommandOutput) => void),
    cb?: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): Promise<PutPublicAccessBlockCommandOutput> | void {
    const command = new PutPublicAccessBlockCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing job's priority.</p>
   */
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobPriorityCommandOutput>;
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): void;
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): void;
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateJobPriorityCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): Promise<UpdateJobPriorityCommandOutput> | void {
    const command = new UpdateJobPriorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job.</p>
   */
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobStatusCommandOutput>;
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    cb: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): void;
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): void;
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateJobStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): Promise<UpdateJobStatusCommandOutput> | void {
    const command = new UpdateJobStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}

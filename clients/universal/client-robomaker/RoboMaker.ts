import { RoboMakerClient } from "./RoboMakerClient";
import { BatchDescribeSimulationJobInput } from "./types/BatchDescribeSimulationJobInput";
import { BatchDescribeSimulationJobOutput } from "./types/BatchDescribeSimulationJobOutput";
import { CancelDeploymentJobInput } from "./types/CancelDeploymentJobInput";
import { CancelDeploymentJobOutput } from "./types/CancelDeploymentJobOutput";
import { CancelSimulationJobInput } from "./types/CancelSimulationJobInput";
import { CancelSimulationJobOutput } from "./types/CancelSimulationJobOutput";
import { ConcurrentDeploymentException } from "./types/ConcurrentDeploymentException";
import { CreateDeploymentJobInput } from "./types/CreateDeploymentJobInput";
import { CreateDeploymentJobOutput } from "./types/CreateDeploymentJobOutput";
import { CreateFleetInput } from "./types/CreateFleetInput";
import { CreateFleetOutput } from "./types/CreateFleetOutput";
import { CreateRobotApplicationInput } from "./types/CreateRobotApplicationInput";
import { CreateRobotApplicationOutput } from "./types/CreateRobotApplicationOutput";
import { CreateRobotApplicationVersionInput } from "./types/CreateRobotApplicationVersionInput";
import { CreateRobotApplicationVersionOutput } from "./types/CreateRobotApplicationVersionOutput";
import { CreateRobotInput } from "./types/CreateRobotInput";
import { CreateRobotOutput } from "./types/CreateRobotOutput";
import { CreateSimulationApplicationInput } from "./types/CreateSimulationApplicationInput";
import { CreateSimulationApplicationOutput } from "./types/CreateSimulationApplicationOutput";
import { CreateSimulationApplicationVersionInput } from "./types/CreateSimulationApplicationVersionInput";
import { CreateSimulationApplicationVersionOutput } from "./types/CreateSimulationApplicationVersionOutput";
import { CreateSimulationJobInput } from "./types/CreateSimulationJobInput";
import { CreateSimulationJobOutput } from "./types/CreateSimulationJobOutput";
import { DeleteFleetInput } from "./types/DeleteFleetInput";
import { DeleteFleetOutput } from "./types/DeleteFleetOutput";
import { DeleteRobotApplicationInput } from "./types/DeleteRobotApplicationInput";
import { DeleteRobotApplicationOutput } from "./types/DeleteRobotApplicationOutput";
import { DeleteRobotInput } from "./types/DeleteRobotInput";
import { DeleteRobotOutput } from "./types/DeleteRobotOutput";
import { DeleteSimulationApplicationInput } from "./types/DeleteSimulationApplicationInput";
import { DeleteSimulationApplicationOutput } from "./types/DeleteSimulationApplicationOutput";
import { DeregisterRobotInput } from "./types/DeregisterRobotInput";
import { DeregisterRobotOutput } from "./types/DeregisterRobotOutput";
import { DescribeDeploymentJobInput } from "./types/DescribeDeploymentJobInput";
import { DescribeDeploymentJobOutput } from "./types/DescribeDeploymentJobOutput";
import { DescribeFleetInput } from "./types/DescribeFleetInput";
import { DescribeFleetOutput } from "./types/DescribeFleetOutput";
import { DescribeRobotApplicationInput } from "./types/DescribeRobotApplicationInput";
import { DescribeRobotApplicationOutput } from "./types/DescribeRobotApplicationOutput";
import { DescribeRobotInput } from "./types/DescribeRobotInput";
import { DescribeRobotOutput } from "./types/DescribeRobotOutput";
import { DescribeSimulationApplicationInput } from "./types/DescribeSimulationApplicationInput";
import { DescribeSimulationApplicationOutput } from "./types/DescribeSimulationApplicationOutput";
import { DescribeSimulationJobInput } from "./types/DescribeSimulationJobInput";
import { DescribeSimulationJobOutput } from "./types/DescribeSimulationJobOutput";
import { IdempotentParameterMismatchException } from "./types/IdempotentParameterMismatchException";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListDeploymentJobsInput } from "./types/ListDeploymentJobsInput";
import { ListDeploymentJobsOutput } from "./types/ListDeploymentJobsOutput";
import { ListFleetsInput } from "./types/ListFleetsInput";
import { ListFleetsOutput } from "./types/ListFleetsOutput";
import { ListRobotApplicationsInput } from "./types/ListRobotApplicationsInput";
import { ListRobotApplicationsOutput } from "./types/ListRobotApplicationsOutput";
import { ListRobotsInput } from "./types/ListRobotsInput";
import { ListRobotsOutput } from "./types/ListRobotsOutput";
import { ListSimulationApplicationsInput } from "./types/ListSimulationApplicationsInput";
import { ListSimulationApplicationsOutput } from "./types/ListSimulationApplicationsOutput";
import { ListSimulationJobsInput } from "./types/ListSimulationJobsInput";
import { ListSimulationJobsOutput } from "./types/ListSimulationJobsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { RegisterRobotInput } from "./types/RegisterRobotInput";
import { RegisterRobotOutput } from "./types/RegisterRobotOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RestartSimulationJobInput } from "./types/RestartSimulationJobInput";
import { RestartSimulationJobOutput } from "./types/RestartSimulationJobOutput";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { SyncDeploymentJobInput } from "./types/SyncDeploymentJobInput";
import { SyncDeploymentJobOutput } from "./types/SyncDeploymentJobOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateRobotApplicationInput } from "./types/UpdateRobotApplicationInput";
import { UpdateRobotApplicationOutput } from "./types/UpdateRobotApplicationOutput";
import { UpdateSimulationApplicationInput } from "./types/UpdateSimulationApplicationInput";
import { UpdateSimulationApplicationOutput } from "./types/UpdateSimulationApplicationOutput";
import { BatchDescribeSimulationJobCommand } from "./commands/BatchDescribeSimulationJobCommand";
import { CancelDeploymentJobCommand } from "./commands/CancelDeploymentJobCommand";
import { CancelSimulationJobCommand } from "./commands/CancelSimulationJobCommand";
import { CreateDeploymentJobCommand } from "./commands/CreateDeploymentJobCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateRobotApplicationCommand } from "./commands/CreateRobotApplicationCommand";
import { CreateRobotApplicationVersionCommand } from "./commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommand } from "./commands/CreateRobotCommand";
import { CreateSimulationApplicationCommand } from "./commands/CreateSimulationApplicationCommand";
import { CreateSimulationApplicationVersionCommand } from "./commands/CreateSimulationApplicationVersionCommand";
import { CreateSimulationJobCommand } from "./commands/CreateSimulationJobCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DeleteRobotApplicationCommand } from "./commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommand } from "./commands/DeleteRobotCommand";
import { DeleteSimulationApplicationCommand } from "./commands/DeleteSimulationApplicationCommand";
import { DeregisterRobotCommand } from "./commands/DeregisterRobotCommand";
import { DescribeDeploymentJobCommand } from "./commands/DescribeDeploymentJobCommand";
import { DescribeFleetCommand } from "./commands/DescribeFleetCommand";
import { DescribeRobotApplicationCommand } from "./commands/DescribeRobotApplicationCommand";
import { DescribeRobotCommand } from "./commands/DescribeRobotCommand";
import { DescribeSimulationApplicationCommand } from "./commands/DescribeSimulationApplicationCommand";
import { DescribeSimulationJobCommand } from "./commands/DescribeSimulationJobCommand";
import { ListDeploymentJobsCommand } from "./commands/ListDeploymentJobsCommand";
import { ListFleetsCommand } from "./commands/ListFleetsCommand";
import { ListRobotApplicationsCommand } from "./commands/ListRobotApplicationsCommand";
import { ListRobotsCommand } from "./commands/ListRobotsCommand";
import { ListSimulationApplicationsCommand } from "./commands/ListSimulationApplicationsCommand";
import { ListSimulationJobsCommand } from "./commands/ListSimulationJobsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RegisterRobotCommand } from "./commands/RegisterRobotCommand";
import { RestartSimulationJobCommand } from "./commands/RestartSimulationJobCommand";
import { SyncDeploymentJobCommand } from "./commands/SyncDeploymentJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateRobotApplicationCommand } from "./commands/UpdateRobotApplicationCommand";
import { UpdateSimulationApplicationCommand } from "./commands/UpdateSimulationApplicationCommand";

export class RoboMaker extends RoboMakerClient {
  /**
   * <p>Describes one or more simulation jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobInput
  ): Promise<BatchDescribeSimulationJobOutput>;
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobInput,
    cb: (err: any, data?: BatchDescribeSimulationJobOutput) => void
  ): void;
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobInput,
    cb?: (err: any, data?: BatchDescribeSimulationJobOutput) => void
  ): Promise<BatchDescribeSimulationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDescribeSimulationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified deployment job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelDeploymentJob(
    args: CancelDeploymentJobInput
  ): Promise<CancelDeploymentJobOutput>;
  public cancelDeploymentJob(
    args: CancelDeploymentJobInput,
    cb: (err: any, data?: CancelDeploymentJobOutput) => void
  ): void;
  public cancelDeploymentJob(
    args: CancelDeploymentJobInput,
    cb?: (err: any, data?: CancelDeploymentJobOutput) => void
  ): Promise<CancelDeploymentJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelDeploymentJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified simulation job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelSimulationJob(
    args: CancelSimulationJobInput
  ): Promise<CancelSimulationJobOutput>;
  public cancelSimulationJob(
    args: CancelSimulationJobInput,
    cb: (err: any, data?: CancelSimulationJobOutput) => void
  ): void;
  public cancelSimulationJob(
    args: CancelSimulationJobInput,
    cb?: (err: any, data?: CancelSimulationJobOutput) => void
  ): Promise<CancelSimulationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelSimulationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ConcurrentDeploymentException} <p>The failure percentage threshold percentage was met.</p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeploymentJob(
    args: CreateDeploymentJobInput
  ): Promise<CreateDeploymentJobOutput>;
  public createDeploymentJob(
    args: CreateDeploymentJobInput,
    cb: (err: any, data?: CreateDeploymentJobOutput) => void
  ): void;
  public createDeploymentJob(
    args: CreateDeploymentJobInput,
    cb?: (err: any, data?: CreateDeploymentJobOutput) => void
  ): Promise<CreateDeploymentJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a fleet, a logical group of robots running the same robot application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFleet(args: CreateFleetInput): Promise<CreateFleetOutput>;
  public createFleet(
    args: CreateFleetInput,
    cb: (err: any, data?: CreateFleetOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetInput,
    cb?: (err: any, data?: CreateFleetOutput) => void
  ): Promise<CreateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a robot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRobot(args: CreateRobotInput): Promise<CreateRobotOutput>;
  public createRobot(
    args: CreateRobotInput,
    cb: (err: any, data?: CreateRobotOutput) => void
  ): void;
  public createRobot(
    args: CreateRobotInput,
    cb?: (err: any, data?: CreateRobotOutput) => void
  ): Promise<CreateRobotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRobotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a robot application. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRobotApplication(
    args: CreateRobotApplicationInput
  ): Promise<CreateRobotApplicationOutput>;
  public createRobotApplication(
    args: CreateRobotApplicationInput,
    cb: (err: any, data?: CreateRobotApplicationOutput) => void
  ): void;
  public createRobotApplication(
    args: CreateRobotApplicationInput,
    cb?: (err: any, data?: CreateRobotApplicationOutput) => void
  ): Promise<CreateRobotApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRobotApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a version of a robot application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionInput
  ): Promise<CreateRobotApplicationVersionOutput>;
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionInput,
    cb: (err: any, data?: CreateRobotApplicationVersionOutput) => void
  ): void;
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionInput,
    cb?: (err: any, data?: CreateRobotApplicationVersionOutput) => void
  ): Promise<CreateRobotApplicationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRobotApplicationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a simulation application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSimulationApplication(
    args: CreateSimulationApplicationInput
  ): Promise<CreateSimulationApplicationOutput>;
  public createSimulationApplication(
    args: CreateSimulationApplicationInput,
    cb: (err: any, data?: CreateSimulationApplicationOutput) => void
  ): void;
  public createSimulationApplication(
    args: CreateSimulationApplicationInput,
    cb?: (err: any, data?: CreateSimulationApplicationOutput) => void
  ): Promise<CreateSimulationApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSimulationApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a simulation application with a specific revision id.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionInput
  ): Promise<CreateSimulationApplicationVersionOutput>;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionInput,
    cb: (err: any, data?: CreateSimulationApplicationVersionOutput) => void
  ): void;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionInput,
    cb?: (err: any, data?: CreateSimulationApplicationVersionOutput) => void
  ): Promise<CreateSimulationApplicationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSimulationApplicationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {ServiceUnavailableException} <p>The request has failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSimulationJob(
    args: CreateSimulationJobInput
  ): Promise<CreateSimulationJobOutput>;
  public createSimulationJob(
    args: CreateSimulationJobInput,
    cb: (err: any, data?: CreateSimulationJobOutput) => void
  ): void;
  public createSimulationJob(
    args: CreateSimulationJobInput,
    cb?: (err: any, data?: CreateSimulationJobOutput) => void
  ): Promise<CreateSimulationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSimulationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFleet(args: DeleteFleetInput): Promise<DeleteFleetOutput>;
  public deleteFleet(
    args: DeleteFleetInput,
    cb: (err: any, data?: DeleteFleetOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetInput,
    cb?: (err: any, data?: DeleteFleetOutput) => void
  ): Promise<DeleteFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a robot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRobot(args: DeleteRobotInput): Promise<DeleteRobotOutput>;
  public deleteRobot(
    args: DeleteRobotInput,
    cb: (err: any, data?: DeleteRobotOutput) => void
  ): void;
  public deleteRobot(
    args: DeleteRobotInput,
    cb?: (err: any, data?: DeleteRobotOutput) => void
  ): Promise<DeleteRobotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRobotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a robot application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRobotApplication(
    args: DeleteRobotApplicationInput
  ): Promise<DeleteRobotApplicationOutput>;
  public deleteRobotApplication(
    args: DeleteRobotApplicationInput,
    cb: (err: any, data?: DeleteRobotApplicationOutput) => void
  ): void;
  public deleteRobotApplication(
    args: DeleteRobotApplicationInput,
    cb?: (err: any, data?: DeleteRobotApplicationOutput) => void
  ): Promise<DeleteRobotApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRobotApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a simulation application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationInput
  ): Promise<DeleteSimulationApplicationOutput>;
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationInput,
    cb: (err: any, data?: DeleteSimulationApplicationOutput) => void
  ): void;
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationInput,
    cb?: (err: any, data?: DeleteSimulationApplicationOutput) => void
  ): Promise<DeleteSimulationApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSimulationApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters a robot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterRobot(
    args: DeregisterRobotInput
  ): Promise<DeregisterRobotOutput>;
  public deregisterRobot(
    args: DeregisterRobotInput,
    cb: (err: any, data?: DeregisterRobotOutput) => void
  ): void;
  public deregisterRobot(
    args: DeregisterRobotInput,
    cb?: (err: any, data?: DeregisterRobotOutput) => void
  ): Promise<DeregisterRobotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterRobotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a deployment job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDeploymentJob(
    args: DescribeDeploymentJobInput
  ): Promise<DescribeDeploymentJobOutput>;
  public describeDeploymentJob(
    args: DescribeDeploymentJobInput,
    cb: (err: any, data?: DescribeDeploymentJobOutput) => void
  ): void;
  public describeDeploymentJob(
    args: DescribeDeploymentJobInput,
    cb?: (err: any, data?: DescribeDeploymentJobOutput) => void
  ): Promise<DescribeDeploymentJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDeploymentJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFleet(args: DescribeFleetInput): Promise<DescribeFleetOutput>;
  public describeFleet(
    args: DescribeFleetInput,
    cb: (err: any, data?: DescribeFleetOutput) => void
  ): void;
  public describeFleet(
    args: DescribeFleetInput,
    cb?: (err: any, data?: DescribeFleetOutput) => void
  ): Promise<DescribeFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a robot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRobot(args: DescribeRobotInput): Promise<DescribeRobotOutput>;
  public describeRobot(
    args: DescribeRobotInput,
    cb: (err: any, data?: DescribeRobotOutput) => void
  ): void;
  public describeRobot(
    args: DescribeRobotInput,
    cb?: (err: any, data?: DescribeRobotOutput) => void
  ): Promise<DescribeRobotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRobotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a robot application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRobotApplication(
    args: DescribeRobotApplicationInput
  ): Promise<DescribeRobotApplicationOutput>;
  public describeRobotApplication(
    args: DescribeRobotApplicationInput,
    cb: (err: any, data?: DescribeRobotApplicationOutput) => void
  ): void;
  public describeRobotApplication(
    args: DescribeRobotApplicationInput,
    cb?: (err: any, data?: DescribeRobotApplicationOutput) => void
  ): Promise<DescribeRobotApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRobotApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a simulation application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSimulationApplication(
    args: DescribeSimulationApplicationInput
  ): Promise<DescribeSimulationApplicationOutput>;
  public describeSimulationApplication(
    args: DescribeSimulationApplicationInput,
    cb: (err: any, data?: DescribeSimulationApplicationOutput) => void
  ): void;
  public describeSimulationApplication(
    args: DescribeSimulationApplicationInput,
    cb?: (err: any, data?: DescribeSimulationApplicationOutput) => void
  ): Promise<DescribeSimulationApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSimulationApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a simulation job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSimulationJob(
    args: DescribeSimulationJobInput
  ): Promise<DescribeSimulationJobOutput>;
  public describeSimulationJob(
    args: DescribeSimulationJobInput,
    cb: (err: any, data?: DescribeSimulationJobOutput) => void
  ): void;
  public describeSimulationJob(
    args: DescribeSimulationJobInput,
    cb?: (err: any, data?: DescribeSimulationJobOutput) => void
  ): Promise<DescribeSimulationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSimulationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs. </p> <note> <p> </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeploymentJobs(
    args: ListDeploymentJobsInput
  ): Promise<ListDeploymentJobsOutput>;
  public listDeploymentJobs(
    args: ListDeploymentJobsInput,
    cb: (err: any, data?: ListDeploymentJobsOutput) => void
  ): void;
  public listDeploymentJobs(
    args: ListDeploymentJobsInput,
    cb?: (err: any, data?: ListDeploymentJobsOutput) => void
  ): Promise<ListDeploymentJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeploymentJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFleets(args: ListFleetsInput): Promise<ListFleetsOutput>;
  public listFleets(
    args: ListFleetsInput,
    cb: (err: any, data?: ListFleetsOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsInput,
    cb?: (err: any, data?: ListFleetsOutput) => void
  ): Promise<ListFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRobotApplications(
    args: ListRobotApplicationsInput
  ): Promise<ListRobotApplicationsOutput>;
  public listRobotApplications(
    args: ListRobotApplicationsInput,
    cb: (err: any, data?: ListRobotApplicationsOutput) => void
  ): void;
  public listRobotApplications(
    args: ListRobotApplicationsInput,
    cb?: (err: any, data?: ListRobotApplicationsOutput) => void
  ): Promise<ListRobotApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRobotApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRobots(args: ListRobotsInput): Promise<ListRobotsOutput>;
  public listRobots(
    args: ListRobotsInput,
    cb: (err: any, data?: ListRobotsOutput) => void
  ): void;
  public listRobots(
    args: ListRobotsInput,
    cb?: (err: any, data?: ListRobotsOutput) => void
  ): Promise<ListRobotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRobotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSimulationApplications(
    args: ListSimulationApplicationsInput
  ): Promise<ListSimulationApplicationsOutput>;
  public listSimulationApplications(
    args: ListSimulationApplicationsInput,
    cb: (err: any, data?: ListSimulationApplicationsOutput) => void
  ): void;
  public listSimulationApplications(
    args: ListSimulationApplicationsInput,
    cb?: (err: any, data?: ListSimulationApplicationsOutput) => void
  ): Promise<ListSimulationApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSimulationApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSimulationJobs(
    args: ListSimulationJobsInput
  ): Promise<ListSimulationJobsOutput>;
  public listSimulationJobs(
    args: ListSimulationJobsInput,
    cb: (err: any, data?: ListSimulationJobsOutput) => void
  ): void;
  public listSimulationJobs(
    args: ListSimulationJobsInput,
    cb?: (err: any, data?: ListSimulationJobsOutput) => void
  ): Promise<ListSimulationJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSimulationJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags on a AWS RoboMaker resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a robot with a fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerRobot(args: RegisterRobotInput): Promise<RegisterRobotOutput>;
  public registerRobot(
    args: RegisterRobotInput,
    cb: (err: any, data?: RegisterRobotOutput) => void
  ): void;
  public registerRobot(
    args: RegisterRobotInput,
    cb?: (err: any, data?: RegisterRobotOutput) => void
  ): Promise<RegisterRobotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterRobotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restarts a running simulation job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restartSimulationJob(
    args: RestartSimulationJobInput
  ): Promise<RestartSimulationJobOutput>;
  public restartSimulationJob(
    args: RestartSimulationJobInput,
    cb: (err: any, data?: RestartSimulationJobOutput) => void
  ): void;
  public restartSimulationJob(
    args: RestartSimulationJobInput,
    cb?: (err: any, data?: RestartSimulationJobOutput) => void
  ): Promise<RestartSimulationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestartSimulationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ConcurrentDeploymentException} <p>The failure percentage threshold percentage was met.</p>
   *   - {IdempotentParameterMismatchException} <p>The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public syncDeploymentJob(
    args: SyncDeploymentJobInput
  ): Promise<SyncDeploymentJobOutput>;
  public syncDeploymentJob(
    args: SyncDeploymentJobInput,
    cb: (err: any, data?: SyncDeploymentJobOutput) => void
  ): void;
  public syncDeploymentJob(
    args: SyncDeploymentJobInput,
    cb?: (err: any, data?: SyncDeploymentJobOutput) => void
  ): Promise<SyncDeploymentJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SyncDeploymentJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a robot application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRobotApplication(
    args: UpdateRobotApplicationInput
  ): Promise<UpdateRobotApplicationOutput>;
  public updateRobotApplication(
    args: UpdateRobotApplicationInput,
    cb: (err: any, data?: UpdateRobotApplicationOutput) => void
  ): void;
  public updateRobotApplication(
    args: UpdateRobotApplicationInput,
    cb?: (err: any, data?: UpdateRobotApplicationOutput) => void
  ): Promise<UpdateRobotApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRobotApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a simulation application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {LimitExceededException} <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
   *   - {ThrottlingException} <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
   *   - {InternalServerException} <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSimulationApplication(
    args: UpdateSimulationApplicationInput
  ): Promise<UpdateSimulationApplicationOutput>;
  public updateSimulationApplication(
    args: UpdateSimulationApplicationInput,
    cb: (err: any, data?: UpdateSimulationApplicationOutput) => void
  ): void;
  public updateSimulationApplication(
    args: UpdateSimulationApplicationInput,
    cb?: (err: any, data?: UpdateSimulationApplicationOutput) => void
  ): Promise<UpdateSimulationApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSimulationApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}

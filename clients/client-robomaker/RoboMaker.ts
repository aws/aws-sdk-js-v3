import { RoboMakerClient } from "./RoboMakerClient";
import {
  BatchDescribeSimulationJobCommand,
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput
} from "./commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommand,
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput
} from "./commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobCommand,
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput
} from "./commands/CancelSimulationJobCommand";
import {
  CreateDeploymentJobCommand,
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput
} from "./commands/CreateDeploymentJobCommand";
import {
  CreateFleetCommand,
  CreateFleetCommandInput,
  CreateFleetCommandOutput
} from "./commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommand,
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput
} from "./commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommand,
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput
} from "./commands/CreateRobotApplicationVersionCommand";
import {
  CreateRobotCommand,
  CreateRobotCommandInput,
  CreateRobotCommandOutput
} from "./commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommand,
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput
} from "./commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommand,
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput
} from "./commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommand,
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput
} from "./commands/CreateSimulationJobCommand";
import {
  DeleteFleetCommand,
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput
} from "./commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommand,
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput
} from "./commands/DeleteRobotApplicationCommand";
import {
  DeleteRobotCommand,
  DeleteRobotCommandInput,
  DeleteRobotCommandOutput
} from "./commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommand,
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput
} from "./commands/DeleteSimulationApplicationCommand";
import {
  DeregisterRobotCommand,
  DeregisterRobotCommandInput,
  DeregisterRobotCommandOutput
} from "./commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommand,
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput
} from "./commands/DescribeDeploymentJobCommand";
import {
  DescribeFleetCommand,
  DescribeFleetCommandInput,
  DescribeFleetCommandOutput
} from "./commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommand,
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput
} from "./commands/DescribeRobotApplicationCommand";
import {
  DescribeRobotCommand,
  DescribeRobotCommandInput,
  DescribeRobotCommandOutput
} from "./commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommand,
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput
} from "./commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobCommand,
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput
} from "./commands/DescribeSimulationJobCommand";
import {
  ListDeploymentJobsCommand,
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput
} from "./commands/ListDeploymentJobsCommand";
import {
  ListFleetsCommand,
  ListFleetsCommandInput,
  ListFleetsCommandOutput
} from "./commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommand,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput
} from "./commands/ListRobotApplicationsCommand";
import {
  ListRobotsCommand,
  ListRobotsCommandInput,
  ListRobotsCommandOutput
} from "./commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput
} from "./commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobsCommand,
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput
} from "./commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterRobotCommand,
  RegisterRobotCommandInput,
  RegisterRobotCommandOutput
} from "./commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommand,
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput
} from "./commands/RestartSimulationJobCommand";
import {
  SyncDeploymentJobCommand,
  SyncDeploymentJobCommandInput,
  SyncDeploymentJobCommandOutput
} from "./commands/SyncDeploymentJobCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommand,
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput
} from "./commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommand,
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput
} from "./commands/UpdateSimulationApplicationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export class RoboMaker extends RoboMakerClient {
  /**
   * <p>Describes one or more simulation jobs.</p>
   */
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeSimulationJobCommandOutput>;
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    cb: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void
  ): void;
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void
  ): void;
  public batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDescribeSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void
  ): Promise<BatchDescribeSimulationJobCommandOutput> | void {
    const command = new BatchDescribeSimulationJobCommand(args);
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
   * <p>Cancels the specified deployment job.</p>
   */
  public cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDeploymentJobCommandOutput>;
  public cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    cb: (err: any, data?: CancelDeploymentJobCommandOutput) => void
  ): void;
  public cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDeploymentJobCommandOutput) => void
  ): void;
  public cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: CancelDeploymentJobCommandOutput) => void
  ): Promise<CancelDeploymentJobCommandOutput> | void {
    const command = new CancelDeploymentJobCommand(args);
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
   * <p>Cancels the specified simulation job.</p>
   */
  public cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSimulationJobCommandOutput>;
  public cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    cb: (err: any, data?: CancelSimulationJobCommandOutput) => void
  ): void;
  public cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSimulationJobCommandOutput) => void
  ): void;
  public cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: CancelSimulationJobCommandOutput) => void
  ): Promise<CancelSimulationJobCommandOutput> | void {
    const command = new CancelSimulationJobCommand(args);
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
   * <p>Deploys a specific version of a robot application to robots in a fleet.</p>
   *          <p>The robot application must have a numbered <code>applicationVersion</code>
   *          for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code>
   *          or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>.
   *       </p>
   *          <note>
   *             <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible.
   *          </p>
   *          </note>
   */
  public createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentJobCommandOutput>;
  public createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    cb: (err: any, data?: CreateDeploymentJobCommandOutput) => void
  ): void;
  public createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentJobCommandOutput) => void
  ): void;
  public createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentJobCommandOutput) => void
  ): Promise<CreateDeploymentJobCommandOutput> | void {
    const command = new CreateDeploymentJobCommand(args);
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
   * <p>Creates a fleet, a logical group of robots running the same robot application.</p>
   */
  public createFleet(
    args: CreateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFleetCommandOutput>;
  public createFleet(
    args: CreateFleetCommandInput,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
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
   * <p>Creates a robot.</p>
   */
  public createRobot(
    args: CreateRobotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRobotCommandOutput>;
  public createRobot(
    args: CreateRobotCommandInput,
    cb: (err: any, data?: CreateRobotCommandOutput) => void
  ): void;
  public createRobot(
    args: CreateRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotCommandOutput) => void
  ): void;
  public createRobot(
    args: CreateRobotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRobotCommandOutput) => void),
    cb?: (err: any, data?: CreateRobotCommandOutput) => void
  ): Promise<CreateRobotCommandOutput> | void {
    const command = new CreateRobotCommand(args);
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
   * <p>Creates a robot application.
   *       </p>
   */
  public createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRobotApplicationCommandOutput>;
  public createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    cb: (err: any, data?: CreateRobotApplicationCommandOutput) => void
  ): void;
  public createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotApplicationCommandOutput) => void
  ): void;
  public createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateRobotApplicationCommandOutput) => void
  ): Promise<CreateRobotApplicationCommandOutput> | void {
    const command = new CreateRobotApplicationCommand(args);
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
   * <p>Creates a version of a robot application.</p>
   */
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRobotApplicationVersionCommandOutput>;
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    cb: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void
  ): void;
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void
  ): void;
  public createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRobotApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void
  ): Promise<CreateRobotApplicationVersionCommandOutput> | void {
    const command = new CreateRobotApplicationVersionCommand(args);
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
   * <p>Creates a simulation application.</p>
   */
  public createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationApplicationCommandOutput>;
  public createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    cb: (err: any, data?: CreateSimulationApplicationCommandOutput) => void
  ): void;
  public createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSimulationApplicationCommandOutput) => void
  ): void;
  public createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateSimulationApplicationCommandOutput) => void
  ): Promise<CreateSimulationApplicationCommandOutput> | void {
    const command = new CreateSimulationApplicationCommand(args);
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
   * <p>Creates a simulation application with a specific revision id.</p>
   */
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationApplicationVersionCommandOutput>;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    cb: (
      err: any,
      data?: CreateSimulationApplicationVersionCommandOutput
    ) => void
  ): void;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateSimulationApplicationVersionCommandOutput
    ) => void
  ): void;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateSimulationApplicationVersionCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateSimulationApplicationVersionCommandOutput
    ) => void
  ): Promise<CreateSimulationApplicationVersionCommandOutput> | void {
    const command = new CreateSimulationApplicationVersionCommand(args);
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
   * <p>Creates a simulation job.</p>
   *          <note>
   *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible.
   *          </p>
   *          </note>
   */
  public createSimulationJob(
    args: CreateSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationJobCommandOutput>;
  public createSimulationJob(
    args: CreateSimulationJobCommandInput,
    cb: (err: any, data?: CreateSimulationJobCommandOutput) => void
  ): void;
  public createSimulationJob(
    args: CreateSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSimulationJobCommandOutput) => void
  ): void;
  public createSimulationJob(
    args: CreateSimulationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: CreateSimulationJobCommandOutput) => void
  ): Promise<CreateSimulationJobCommandOutput> | void {
    const command = new CreateSimulationJobCommand(args);
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
   * <p>Deletes a fleet.</p>
   */
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFleetCommandOutput>;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetCommandOutput) => void
  ): Promise<DeleteFleetCommandOutput> | void {
    const command = new DeleteFleetCommand(args);
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
   * <p>Deletes a robot.</p>
   */
  public deleteRobot(
    args: DeleteRobotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRobotCommandOutput>;
  public deleteRobot(
    args: DeleteRobotCommandInput,
    cb: (err: any, data?: DeleteRobotCommandOutput) => void
  ): void;
  public deleteRobot(
    args: DeleteRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRobotCommandOutput) => void
  ): void;
  public deleteRobot(
    args: DeleteRobotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRobotCommandOutput) => void),
    cb?: (err: any, data?: DeleteRobotCommandOutput) => void
  ): Promise<DeleteRobotCommandOutput> | void {
    const command = new DeleteRobotCommand(args);
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
   * <p>Deletes a robot application.</p>
   */
  public deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRobotApplicationCommandOutput>;
  public deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    cb: (err: any, data?: DeleteRobotApplicationCommandOutput) => void
  ): void;
  public deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRobotApplicationCommandOutput) => void
  ): void;
  public deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteRobotApplicationCommandOutput) => void
  ): Promise<DeleteRobotApplicationCommandOutput> | void {
    const command = new DeleteRobotApplicationCommand(args);
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
   * <p>Deletes a simulation application.</p>
   */
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSimulationApplicationCommandOutput>;
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    cb: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void
  ): void;
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void
  ): void;
  public deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void
  ): Promise<DeleteSimulationApplicationCommandOutput> | void {
    const command = new DeleteSimulationApplicationCommand(args);
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
   * <p>Deregisters a robot.</p>
   */
  public deregisterRobot(
    args: DeregisterRobotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterRobotCommandOutput>;
  public deregisterRobot(
    args: DeregisterRobotCommandInput,
    cb: (err: any, data?: DeregisterRobotCommandOutput) => void
  ): void;
  public deregisterRobot(
    args: DeregisterRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterRobotCommandOutput) => void
  ): void;
  public deregisterRobot(
    args: DeregisterRobotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterRobotCommandOutput) => void),
    cb?: (err: any, data?: DeregisterRobotCommandOutput) => void
  ): Promise<DeregisterRobotCommandOutput> | void {
    const command = new DeregisterRobotCommand(args);
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
   * <p>Describes a deployment job.</p>
   */
  public describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeploymentJobCommandOutput>;
  public describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    cb: (err: any, data?: DescribeDeploymentJobCommandOutput) => void
  ): void;
  public describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeploymentJobCommandOutput) => void
  ): void;
  public describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeploymentJobCommandOutput) => void
  ): Promise<DescribeDeploymentJobCommandOutput> | void {
    const command = new DescribeDeploymentJobCommand(args);
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
   * <p>Describes a fleet.</p>
   */
  public describeFleet(
    args: DescribeFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetCommandOutput>;
  public describeFleet(
    args: DescribeFleetCommandInput,
    cb: (err: any, data?: DescribeFleetCommandOutput) => void
  ): void;
  public describeFleet(
    args: DescribeFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetCommandOutput) => void
  ): void;
  public describeFleet(
    args: DescribeFleetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeFleetCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetCommandOutput) => void
  ): Promise<DescribeFleetCommandOutput> | void {
    const command = new DescribeFleetCommand(args);
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
   * <p>Describes a robot.</p>
   */
  public describeRobot(
    args: DescribeRobotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRobotCommandOutput>;
  public describeRobot(
    args: DescribeRobotCommandInput,
    cb: (err: any, data?: DescribeRobotCommandOutput) => void
  ): void;
  public describeRobot(
    args: DescribeRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRobotCommandOutput) => void
  ): void;
  public describeRobot(
    args: DescribeRobotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRobotCommandOutput) => void),
    cb?: (err: any, data?: DescribeRobotCommandOutput) => void
  ): Promise<DescribeRobotCommandOutput> | void {
    const command = new DescribeRobotCommand(args);
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
   * <p>Describes a robot application.</p>
   */
  public describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRobotApplicationCommandOutput>;
  public describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    cb: (err: any, data?: DescribeRobotApplicationCommandOutput) => void
  ): void;
  public describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRobotApplicationCommandOutput) => void
  ): void;
  public describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRobotApplicationCommandOutput) => void
  ): Promise<DescribeRobotApplicationCommandOutput> | void {
    const command = new DescribeRobotApplicationCommand(args);
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
   * <p>Describes a simulation application.</p>
   */
  public describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationApplicationCommandOutput>;
  public describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    cb: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void
  ): void;
  public describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void
  ): void;
  public describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void
  ): Promise<DescribeSimulationApplicationCommandOutput> | void {
    const command = new DescribeSimulationApplicationCommand(args);
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
   * <p>Describes a simulation job.</p>
   */
  public describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationJobCommandOutput>;
  public describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    cb: (err: any, data?: DescribeSimulationJobCommandOutput) => void
  ): void;
  public describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationJobCommandOutput) => void
  ): void;
  public describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeSimulationJobCommandOutput) => void
  ): Promise<DescribeSimulationJobCommandOutput> | void {
    const command = new DescribeSimulationJobCommand(args);
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
   * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve
   *          specific deployment jobs.
   *          </p>
   *          <note>
   *             <p> </p>
   *          </note>
   */
  public listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentJobsCommandOutput>;
  public listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    cb: (err: any, data?: ListDeploymentJobsCommandOutput) => void
  ): void;
  public listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentJobsCommandOutput) => void
  ): void;
  public listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDeploymentJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentJobsCommandOutput) => void
  ): Promise<ListDeploymentJobsCommandOutput> | void {
    const command = new ListDeploymentJobsCommand(args);
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
   * <p>Returns a list of fleets. You can optionally provide filters to retrieve
   *          specific fleets. </p>
   */
  public listFleets(
    args: ListFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFleetsCommandOutput>;
  public listFleets(
    args: ListFleetsCommandInput,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListFleetsCommandOutput) => void
  ): Promise<ListFleetsCommandOutput> | void {
    const command = new ListFleetsCommand(args);
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
   * <p>Returns a list of robot application. You can optionally provide filters to retrieve
   *          specific robot applications.</p>
   */
  public listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRobotApplicationsCommandOutput>;
  public listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    cb: (err: any, data?: ListRobotApplicationsCommandOutput) => void
  ): void;
  public listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRobotApplicationsCommandOutput) => void
  ): void;
  public listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRobotApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListRobotApplicationsCommandOutput) => void
  ): Promise<ListRobotApplicationsCommandOutput> | void {
    const command = new ListRobotApplicationsCommand(args);
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
   * <p>Returns a list of robots. You can optionally provide filters to retrieve
   *          specific robots.</p>
   */
  public listRobots(
    args: ListRobotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRobotsCommandOutput>;
  public listRobots(
    args: ListRobotsCommandInput,
    cb: (err: any, data?: ListRobotsCommandOutput) => void
  ): void;
  public listRobots(
    args: ListRobotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRobotsCommandOutput) => void
  ): void;
  public listRobots(
    args: ListRobotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRobotsCommandOutput) => void),
    cb?: (err: any, data?: ListRobotsCommandOutput) => void
  ): Promise<ListRobotsCommandOutput> | void {
    const command = new ListRobotsCommand(args);
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
   * <p>Returns a list of simulation applications. You can optionally provide filters to retrieve
   *          specific simulation applications. </p>
   */
  public listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationApplicationsCommandOutput>;
  public listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    cb: (err: any, data?: ListSimulationApplicationsCommandOutput) => void
  ): void;
  public listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationApplicationsCommandOutput) => void
  ): void;
  public listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSimulationApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListSimulationApplicationsCommandOutput) => void
  ): Promise<ListSimulationApplicationsCommandOutput> | void {
    const command = new ListSimulationApplicationsCommand(args);
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
   * <p>Returns a list of simulation jobs. You can optionally provide filters to retrieve
   *          specific simulation jobs. </p>
   */
  public listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationJobsCommandOutput>;
  public listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    cb: (err: any, data?: ListSimulationJobsCommandOutput) => void
  ): void;
  public listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationJobsCommandOutput) => void
  ): void;
  public listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSimulationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListSimulationJobsCommandOutput) => void
  ): Promise<ListSimulationJobsCommandOutput> | void {
    const command = new ListSimulationJobsCommand(args);
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
   * <p>Lists all tags on a AWS RoboMaker resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Registers a robot with a fleet.</p>
   */
  public registerRobot(
    args: RegisterRobotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterRobotCommandOutput>;
  public registerRobot(
    args: RegisterRobotCommandInput,
    cb: (err: any, data?: RegisterRobotCommandOutput) => void
  ): void;
  public registerRobot(
    args: RegisterRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterRobotCommandOutput) => void
  ): void;
  public registerRobot(
    args: RegisterRobotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterRobotCommandOutput) => void),
    cb?: (err: any, data?: RegisterRobotCommandOutput) => void
  ): Promise<RegisterRobotCommandOutput> | void {
    const command = new RegisterRobotCommand(args);
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
   * <p>Restarts a running simulation job.</p>
   */
  public restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartSimulationJobCommandOutput>;
  public restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    cb: (err: any, data?: RestartSimulationJobCommandOutput) => void
  ): void;
  public restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartSimulationJobCommandOutput) => void
  ): void;
  public restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RestartSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: RestartSimulationJobCommandOutput) => void
  ): Promise<RestartSimulationJobCommandOutput> | void {
    const command = new RestartSimulationJobCommand(args);
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
   * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p>
   */
  public syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SyncDeploymentJobCommandOutput>;
  public syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    cb: (err: any, data?: SyncDeploymentJobCommandOutput) => void
  ): void;
  public syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SyncDeploymentJobCommandOutput) => void
  ): void;
  public syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SyncDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: SyncDeploymentJobCommandOutput) => void
  ): Promise<SyncDeploymentJobCommandOutput> | void {
    const command = new SyncDeploymentJobCommand(args);
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
   * <p>Adds or edits tags for a AWS RoboMaker resource.</p>
   *          <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p>
   *          <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p>
   *          <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use
   *          <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html">
   *                <code>TagResource</code>
   *             </a>.
   *       </p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates a robot application.</p>
   */
  public updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRobotApplicationCommandOutput>;
  public updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    cb: (err: any, data?: UpdateRobotApplicationCommandOutput) => void
  ): void;
  public updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRobotApplicationCommandOutput) => void
  ): void;
  public updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateRobotApplicationCommandOutput) => void
  ): Promise<UpdateRobotApplicationCommandOutput> | void {
    const command = new UpdateRobotApplicationCommand(args);
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
   * <p>Updates a simulation application.</p>
   */
  public updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSimulationApplicationCommandOutput>;
  public updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    cb: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void
  ): void;
  public updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void
  ): void;
  public updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void
  ): Promise<UpdateSimulationApplicationCommandOutput> | void {
    const command = new UpdateSimulationApplicationCommand(args);
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

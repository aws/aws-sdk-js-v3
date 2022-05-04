// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchDeleteWorldsCommand,
  BatchDeleteWorldsCommandInput,
  BatchDeleteWorldsCommandOutput,
} from "./commands/BatchDeleteWorldsCommand";
import {
  BatchDescribeSimulationJobCommand,
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
} from "./commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommand,
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput,
} from "./commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobBatchCommand,
  CancelSimulationJobBatchCommandInput,
  CancelSimulationJobBatchCommandOutput,
} from "./commands/CancelSimulationJobBatchCommand";
import {
  CancelSimulationJobCommand,
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput,
} from "./commands/CancelSimulationJobCommand";
import {
  CancelWorldExportJobCommand,
  CancelWorldExportJobCommandInput,
  CancelWorldExportJobCommandOutput,
} from "./commands/CancelWorldExportJobCommand";
import {
  CancelWorldGenerationJobCommand,
  CancelWorldGenerationJobCommandInput,
  CancelWorldGenerationJobCommandOutput,
} from "./commands/CancelWorldGenerationJobCommand";
import {
  CreateDeploymentJobCommand,
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput,
} from "./commands/CreateDeploymentJobCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommand,
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput,
} from "./commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommand,
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput,
} from "./commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommand, CreateRobotCommandInput, CreateRobotCommandOutput } from "./commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommand,
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput,
} from "./commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommand,
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput,
} from "./commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommand,
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
} from "./commands/CreateSimulationJobCommand";
import {
  CreateWorldExportJobCommand,
  CreateWorldExportJobCommandInput,
  CreateWorldExportJobCommandOutput,
} from "./commands/CreateWorldExportJobCommand";
import {
  CreateWorldGenerationJobCommand,
  CreateWorldGenerationJobCommandInput,
  CreateWorldGenerationJobCommandOutput,
} from "./commands/CreateWorldGenerationJobCommand";
import {
  CreateWorldTemplateCommand,
  CreateWorldTemplateCommandInput,
  CreateWorldTemplateCommandOutput,
} from "./commands/CreateWorldTemplateCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommand,
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput,
} from "./commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommand, DeleteRobotCommandInput, DeleteRobotCommandOutput } from "./commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommand,
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
} from "./commands/DeleteSimulationApplicationCommand";
import {
  DeleteWorldTemplateCommand,
  DeleteWorldTemplateCommandInput,
  DeleteWorldTemplateCommandOutput,
} from "./commands/DeleteWorldTemplateCommand";
import {
  DeregisterRobotCommand,
  DeregisterRobotCommandInput,
  DeregisterRobotCommandOutput,
} from "./commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommand,
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
} from "./commands/DescribeDeploymentJobCommand";
import {
  DescribeFleetCommand,
  DescribeFleetCommandInput,
  DescribeFleetCommandOutput,
} from "./commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommand,
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput,
} from "./commands/DescribeRobotApplicationCommand";
import {
  DescribeRobotCommand,
  DescribeRobotCommandInput,
  DescribeRobotCommandOutput,
} from "./commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommand,
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput,
} from "./commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobBatchCommand,
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
} from "./commands/DescribeSimulationJobBatchCommand";
import {
  DescribeSimulationJobCommand,
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
} from "./commands/DescribeSimulationJobCommand";
import {
  DescribeWorldCommand,
  DescribeWorldCommandInput,
  DescribeWorldCommandOutput,
} from "./commands/DescribeWorldCommand";
import {
  DescribeWorldExportJobCommand,
  DescribeWorldExportJobCommandInput,
  DescribeWorldExportJobCommandOutput,
} from "./commands/DescribeWorldExportJobCommand";
import {
  DescribeWorldGenerationJobCommand,
  DescribeWorldGenerationJobCommandInput,
  DescribeWorldGenerationJobCommandOutput,
} from "./commands/DescribeWorldGenerationJobCommand";
import {
  DescribeWorldTemplateCommand,
  DescribeWorldTemplateCommandInput,
  DescribeWorldTemplateCommandOutput,
} from "./commands/DescribeWorldTemplateCommand";
import {
  GetWorldTemplateBodyCommand,
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
} from "./commands/GetWorldTemplateBodyCommand";
import {
  ListDeploymentJobsCommand,
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
} from "./commands/ListDeploymentJobsCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommand,
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "./commands/ListRobotApplicationsCommand";
import { ListRobotsCommand, ListRobotsCommandInput, ListRobotsCommandOutput } from "./commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "./commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobBatchesCommand,
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "./commands/ListSimulationJobBatchesCommand";
import {
  ListSimulationJobsCommand,
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput,
} from "./commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorldExportJobsCommand,
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "./commands/ListWorldExportJobsCommand";
import {
  ListWorldGenerationJobsCommand,
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "./commands/ListWorldGenerationJobsCommand";
import { ListWorldsCommand, ListWorldsCommandInput, ListWorldsCommandOutput } from "./commands/ListWorldsCommand";
import {
  ListWorldTemplatesCommand,
  ListWorldTemplatesCommandInput,
  ListWorldTemplatesCommandOutput,
} from "./commands/ListWorldTemplatesCommand";
import {
  RegisterRobotCommand,
  RegisterRobotCommandInput,
  RegisterRobotCommandOutput,
} from "./commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommand,
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput,
} from "./commands/RestartSimulationJobCommand";
import {
  StartSimulationJobBatchCommand,
  StartSimulationJobBatchCommandInput,
  StartSimulationJobBatchCommandOutput,
} from "./commands/StartSimulationJobBatchCommand";
import {
  SyncDeploymentJobCommand,
  SyncDeploymentJobCommandInput,
  SyncDeploymentJobCommandOutput,
} from "./commands/SyncDeploymentJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommand,
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput,
} from "./commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommand,
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput,
} from "./commands/UpdateSimulationApplicationCommand";
import {
  UpdateWorldTemplateCommand,
  UpdateWorldTemplateCommandInput,
  UpdateWorldTemplateCommandOutput,
} from "./commands/UpdateWorldTemplateCommand";
import { RoboMakerClient } from "./RoboMakerClient";

/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export class RoboMaker extends RoboMakerClient {
  /**
   * <p>Deletes one or more worlds in a batch operation.</p>
   */
  public batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteWorldsCommandOutput>;
  public batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    cb: (err: any, data?: BatchDeleteWorldsCommandOutput) => void
  ): void;
  public batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteWorldsCommandOutput) => void
  ): void;
  public batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteWorldsCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteWorldsCommandOutput) => void
  ): Promise<BatchDeleteWorldsCommandOutput> | void {
    const command = new BatchDeleteWorldsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDescribeSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void
  ): Promise<BatchDescribeSimulationJobCommandOutput> | void {
    const command = new BatchDescribeSimulationJobCommand(args);
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
   * @deprecated
   *
   * <p>Cancels the specified deployment job.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: CancelDeploymentJobCommandOutput) => void
  ): Promise<CancelDeploymentJobCommandOutput> | void {
    const command = new CancelDeploymentJobCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: CancelSimulationJobCommandOutput) => void
  ): Promise<CancelSimulationJobCommandOutput> | void {
    const command = new CancelSimulationJobCommand(args);
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
   * <p>Cancels a simulation job batch. When you cancel a simulation job batch, you are also
   *          cancelling all of the active simulation jobs created as part of the batch. </p>
   */
  public cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSimulationJobBatchCommandOutput>;
  public cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    cb: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void
  ): void;
  public cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void
  ): void;
  public cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSimulationJobBatchCommandOutput) => void),
    cb?: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void
  ): Promise<CancelSimulationJobBatchCommandOutput> | void {
    const command = new CancelSimulationJobBatchCommand(args);
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
   * <p>Cancels the specified export job.</p>
   */
  public cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelWorldExportJobCommandOutput>;
  public cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    cb: (err: any, data?: CancelWorldExportJobCommandOutput) => void
  ): void;
  public cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelWorldExportJobCommandOutput) => void
  ): void;
  public cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelWorldExportJobCommandOutput) => void),
    cb?: (err: any, data?: CancelWorldExportJobCommandOutput) => void
  ): Promise<CancelWorldExportJobCommandOutput> | void {
    const command = new CancelWorldExportJobCommand(args);
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
   * <p>Cancels the specified world generator job.</p>
   */
  public cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelWorldGenerationJobCommandOutput>;
  public cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    cb: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void
  ): void;
  public cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void
  ): void;
  public cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelWorldGenerationJobCommandOutput) => void),
    cb?: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void
  ): Promise<CancelWorldGenerationJobCommandOutput> | void {
    const command = new CancelWorldGenerationJobCommand(args);
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
   * @deprecated
   *
   * <p>Deploys a specific version of a robot application to robots in a fleet.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   *          <p>The robot application must have a numbered <code>applicationVersion</code> for
   *          consistency reasons. To create a new version, use
   *             <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p>
   *          <note>
   *             <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be
   *             accessible. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentJobCommandOutput) => void
  ): Promise<CreateDeploymentJobCommandOutput> | void {
    const command = new CreateDeploymentJobCommand(args);
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
   * @deprecated
   *
   * <p>Creates a fleet, a logical group of robots running the same robot application.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  public createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  public createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
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
   * @deprecated
   *
   * <p>Creates a robot.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
   */
  public createRobot(args: CreateRobotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRobotCommandOutput>;
  public createRobot(args: CreateRobotCommandInput, cb: (err: any, data?: CreateRobotCommandOutput) => void): void;
  public createRobot(
    args: CreateRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotCommandOutput) => void
  ): void;
  public createRobot(
    args: CreateRobotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRobotCommandOutput) => void),
    cb?: (err: any, data?: CreateRobotCommandOutput) => void
  ): Promise<CreateRobotCommandOutput> | void {
    const command = new CreateRobotCommand(args);
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
   * <p>Creates a robot application. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateRobotApplicationCommandOutput) => void
  ): Promise<CreateRobotApplicationCommandOutput> | void {
    const command = new CreateRobotApplicationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRobotApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void
  ): Promise<CreateRobotApplicationVersionCommandOutput> | void {
    const command = new CreateRobotApplicationVersionCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateSimulationApplicationCommandOutput) => void
  ): Promise<CreateSimulationApplicationCommandOutput> | void {
    const command = new CreateSimulationApplicationCommand(args);
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
   * <p>Creates a simulation application with a specific revision id.</p>
   */
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationApplicationVersionCommandOutput>;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    cb: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void
  ): void;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void
  ): void;
  public createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void
  ): Promise<CreateSimulationApplicationVersionCommandOutput> | void {
    const command = new CreateSimulationApplicationVersionCommand(args);
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
   * <p>Creates a simulation job.</p>
   *          <note>
   *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be
   *             accessible. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: CreateSimulationJobCommandOutput) => void
  ): Promise<CreateSimulationJobCommandOutput> | void {
    const command = new CreateSimulationJobCommand(args);
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
   * <p>Creates a world export job.</p>
   */
  public createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorldExportJobCommandOutput>;
  public createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    cb: (err: any, data?: CreateWorldExportJobCommandOutput) => void
  ): void;
  public createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorldExportJobCommandOutput) => void
  ): void;
  public createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorldExportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateWorldExportJobCommandOutput) => void
  ): Promise<CreateWorldExportJobCommandOutput> | void {
    const command = new CreateWorldExportJobCommand(args);
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
   * <p>Creates worlds using the specified template.</p>
   */
  public createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorldGenerationJobCommandOutput>;
  public createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    cb: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void
  ): void;
  public createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void
  ): void;
  public createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorldGenerationJobCommandOutput) => void),
    cb?: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void
  ): Promise<CreateWorldGenerationJobCommandOutput> | void {
    const command = new CreateWorldGenerationJobCommand(args);
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
   * <p>Creates a world template.</p>
   */
  public createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorldTemplateCommandOutput>;
  public createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    cb: (err: any, data?: CreateWorldTemplateCommandOutput) => void
  ): void;
  public createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorldTemplateCommandOutput) => void
  ): void;
  public createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorldTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateWorldTemplateCommandOutput) => void
  ): Promise<CreateWorldTemplateCommandOutput> | void {
    const command = new CreateWorldTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Deletes a fleet.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
   */
  public deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  public deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetCommandOutput) => void
  ): Promise<DeleteFleetCommandOutput> | void {
    const command = new DeleteFleetCommand(args);
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
   * @deprecated
   *
   * <p>Deletes a robot.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
   */
  public deleteRobot(args: DeleteRobotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRobotCommandOutput>;
  public deleteRobot(args: DeleteRobotCommandInput, cb: (err: any, data?: DeleteRobotCommandOutput) => void): void;
  public deleteRobot(
    args: DeleteRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRobotCommandOutput) => void
  ): void;
  public deleteRobot(
    args: DeleteRobotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRobotCommandOutput) => void),
    cb?: (err: any, data?: DeleteRobotCommandOutput) => void
  ): Promise<DeleteRobotCommandOutput> | void {
    const command = new DeleteRobotCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteRobotApplicationCommandOutput) => void
  ): Promise<DeleteRobotApplicationCommandOutput> | void {
    const command = new DeleteRobotApplicationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void
  ): Promise<DeleteSimulationApplicationCommandOutput> | void {
    const command = new DeleteSimulationApplicationCommand(args);
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
   * <p>Deletes a world template.</p>
   */
  public deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorldTemplateCommandOutput>;
  public deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    cb: (err: any, data?: DeleteWorldTemplateCommandOutput) => void
  ): void;
  public deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorldTemplateCommandOutput) => void
  ): void;
  public deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorldTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorldTemplateCommandOutput) => void
  ): Promise<DeleteWorldTemplateCommandOutput> | void {
    const command = new DeleteWorldTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Deregisters a robot.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterRobotCommandOutput) => void),
    cb?: (err: any, data?: DeregisterRobotCommandOutput) => void
  ): Promise<DeregisterRobotCommandOutput> | void {
    const command = new DeregisterRobotCommand(args);
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
   * @deprecated
   *
   * <p>Describes a deployment job.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeploymentJobCommandOutput) => void
  ): Promise<DescribeDeploymentJobCommandOutput> | void {
    const command = new DescribeDeploymentJobCommand(args);
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
   * @deprecated
   *
   * <p>Describes a fleet.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetCommandOutput) => void
  ): Promise<DescribeFleetCommandOutput> | void {
    const command = new DescribeFleetCommand(args);
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
   * @deprecated
   *
   * <p>Describes a robot.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRobotCommandOutput) => void),
    cb?: (err: any, data?: DescribeRobotCommandOutput) => void
  ): Promise<DescribeRobotCommandOutput> | void {
    const command = new DescribeRobotCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRobotApplicationCommandOutput) => void
  ): Promise<DescribeRobotApplicationCommandOutput> | void {
    const command = new DescribeRobotApplicationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void
  ): Promise<DescribeSimulationApplicationCommandOutput> | void {
    const command = new DescribeSimulationApplicationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeSimulationJobCommandOutput) => void
  ): Promise<DescribeSimulationJobCommandOutput> | void {
    const command = new DescribeSimulationJobCommand(args);
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
   * <p>Describes a simulation job batch.</p>
   */
  public describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationJobBatchCommandOutput>;
  public describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    cb: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void
  ): void;
  public describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void
  ): void;
  public describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSimulationJobBatchCommandOutput) => void),
    cb?: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void
  ): Promise<DescribeSimulationJobBatchCommandOutput> | void {
    const command = new DescribeSimulationJobBatchCommand(args);
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
   * <p>Describes a world.</p>
   */
  public describeWorld(
    args: DescribeWorldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldCommandOutput>;
  public describeWorld(
    args: DescribeWorldCommandInput,
    cb: (err: any, data?: DescribeWorldCommandOutput) => void
  ): void;
  public describeWorld(
    args: DescribeWorldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldCommandOutput) => void
  ): void;
  public describeWorld(
    args: DescribeWorldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorldCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorldCommandOutput) => void
  ): Promise<DescribeWorldCommandOutput> | void {
    const command = new DescribeWorldCommand(args);
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
   * <p>Describes a world export job.</p>
   */
  public describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldExportJobCommandOutput>;
  public describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    cb: (err: any, data?: DescribeWorldExportJobCommandOutput) => void
  ): void;
  public describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldExportJobCommandOutput) => void
  ): void;
  public describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorldExportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorldExportJobCommandOutput) => void
  ): Promise<DescribeWorldExportJobCommandOutput> | void {
    const command = new DescribeWorldExportJobCommand(args);
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
   * <p>Describes a world generation job.</p>
   */
  public describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldGenerationJobCommandOutput>;
  public describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    cb: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void
  ): void;
  public describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void
  ): void;
  public describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorldGenerationJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void
  ): Promise<DescribeWorldGenerationJobCommandOutput> | void {
    const command = new DescribeWorldGenerationJobCommand(args);
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
   * <p>Describes a world template.</p>
   */
  public describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldTemplateCommandOutput>;
  public describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    cb: (err: any, data?: DescribeWorldTemplateCommandOutput) => void
  ): void;
  public describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldTemplateCommandOutput) => void
  ): void;
  public describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorldTemplateCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorldTemplateCommandOutput) => void
  ): Promise<DescribeWorldTemplateCommandOutput> | void {
    const command = new DescribeWorldTemplateCommand(args);
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
   * <p>Gets the world template body.</p>
   */
  public getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorldTemplateBodyCommandOutput>;
  public getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    cb: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void
  ): void;
  public getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void
  ): void;
  public getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorldTemplateBodyCommandOutput) => void),
    cb?: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void
  ): Promise<GetWorldTemplateBodyCommandOutput> | void {
    const command = new GetWorldTemplateBodyCommand(args);
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
   * @deprecated
   *
   * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentJobsCommandOutput) => void
  ): Promise<ListDeploymentJobsCommandOutput> | void {
    const command = new ListDeploymentJobsCommand(args);
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
   * @deprecated
   *
   * <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
   */
  public listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  public listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  public listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListFleetsCommandOutput) => void
  ): Promise<ListFleetsCommandOutput> | void {
    const command = new ListFleetsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRobotApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListRobotApplicationsCommandOutput) => void
  ): Promise<ListRobotApplicationsCommandOutput> | void {
    const command = new ListRobotApplicationsCommand(args);
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
   * @deprecated
   *
   * <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
   */
  public listRobots(args: ListRobotsCommandInput, options?: __HttpHandlerOptions): Promise<ListRobotsCommandOutput>;
  public listRobots(args: ListRobotsCommandInput, cb: (err: any, data?: ListRobotsCommandOutput) => void): void;
  public listRobots(
    args: ListRobotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRobotsCommandOutput) => void
  ): void;
  public listRobots(
    args: ListRobotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRobotsCommandOutput) => void),
    cb?: (err: any, data?: ListRobotsCommandOutput) => void
  ): Promise<ListRobotsCommandOutput> | void {
    const command = new ListRobotsCommand(args);
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
   * <p>Returns a list of simulation applications. You can optionally provide filters to
   *          retrieve specific simulation applications. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSimulationApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListSimulationApplicationsCommandOutput) => void
  ): Promise<ListSimulationApplicationsCommandOutput> | void {
    const command = new ListSimulationApplicationsCommand(args);
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
   * <p>Returns a list simulation job batches. You can optionally provide filters to retrieve
   *          specific simulation batch jobs. </p>
   */
  public listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationJobBatchesCommandOutput>;
  public listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    cb: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void
  ): void;
  public listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void
  ): void;
  public listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSimulationJobBatchesCommandOutput) => void),
    cb?: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void
  ): Promise<ListSimulationJobBatchesCommandOutput> | void {
    const command = new ListSimulationJobBatchesCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSimulationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListSimulationJobsCommandOutput) => void
  ): Promise<ListSimulationJobsCommandOutput> | void {
    const command = new ListSimulationJobsCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Lists world export jobs.</p>
   */
  public listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorldExportJobsCommandOutput>;
  public listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    cb: (err: any, data?: ListWorldExportJobsCommandOutput) => void
  ): void;
  public listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldExportJobsCommandOutput) => void
  ): void;
  public listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorldExportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListWorldExportJobsCommandOutput) => void
  ): Promise<ListWorldExportJobsCommandOutput> | void {
    const command = new ListWorldExportJobsCommand(args);
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
   * <p>Lists world generator jobs.</p>
   */
  public listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorldGenerationJobsCommandOutput>;
  public listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    cb: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void
  ): void;
  public listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void
  ): void;
  public listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorldGenerationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void
  ): Promise<ListWorldGenerationJobsCommandOutput> | void {
    const command = new ListWorldGenerationJobsCommand(args);
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
   * <p>Lists worlds.</p>
   */
  public listWorlds(args: ListWorldsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorldsCommandOutput>;
  public listWorlds(args: ListWorldsCommandInput, cb: (err: any, data?: ListWorldsCommandOutput) => void): void;
  public listWorlds(
    args: ListWorldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldsCommandOutput) => void
  ): void;
  public listWorlds(
    args: ListWorldsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorldsCommandOutput) => void),
    cb?: (err: any, data?: ListWorldsCommandOutput) => void
  ): Promise<ListWorldsCommandOutput> | void {
    const command = new ListWorldsCommand(args);
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
   * <p>Lists world templates.</p>
   */
  public listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorldTemplatesCommandOutput>;
  public listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    cb: (err: any, data?: ListWorldTemplatesCommandOutput) => void
  ): void;
  public listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldTemplatesCommandOutput) => void
  ): void;
  public listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorldTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListWorldTemplatesCommandOutput) => void
  ): Promise<ListWorldTemplatesCommandOutput> | void {
    const command = new ListWorldTemplatesCommand(args);
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
   * @deprecated
   *
   * <p>Registers a robot with a fleet.</p>
   *          <important>
   *             <p>This API is no longer supported and will throw an error if used.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterRobotCommandOutput) => void),
    cb?: (err: any, data?: RegisterRobotCommandOutput) => void
  ): Promise<RegisterRobotCommandOutput> | void {
    const command = new RegisterRobotCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestartSimulationJobCommandOutput) => void),
    cb?: (err: any, data?: RestartSimulationJobCommandOutput) => void
  ): Promise<RestartSimulationJobCommandOutput> | void {
    const command = new RestartSimulationJobCommand(args);
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
   * <p>Starts a new simulation job batch. The batch is defined using one or more
   *             <code>SimulationJobRequest</code> objects. </p>
   */
  public startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSimulationJobBatchCommandOutput>;
  public startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    cb: (err: any, data?: StartSimulationJobBatchCommandOutput) => void
  ): void;
  public startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSimulationJobBatchCommandOutput) => void
  ): void;
  public startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSimulationJobBatchCommandOutput) => void),
    cb?: (err: any, data?: StartSimulationJobBatchCommandOutput) => void
  ): Promise<StartSimulationJobBatchCommandOutput> | void {
    const command = new StartSimulationJobBatchCommand(args);
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
   * @deprecated
   *
   * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p>
   *          <important>
   *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
   *          </important>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SyncDeploymentJobCommandOutput) => void),
    cb?: (err: any, data?: SyncDeploymentJobCommandOutput) => void
  ): Promise<SyncDeploymentJobCommandOutput> | void {
    const command = new SyncDeploymentJobCommand(args);
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
   * <p>Adds or edits tags for a AWS RoboMaker resource.</p>
   *          <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both
   *          required, but tag values can be empty strings. </p>
   *          <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management
   *             User Guide</i>. </p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p>
   *          <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key,
   *          use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html">
   *                <code>TagResource</code>
   *             </a>. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRobotApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateRobotApplicationCommandOutput) => void
  ): Promise<UpdateRobotApplicationCommandOutput> | void {
    const command = new UpdateRobotApplicationCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSimulationApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void
  ): Promise<UpdateSimulationApplicationCommandOutput> | void {
    const command = new UpdateSimulationApplicationCommand(args);
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
   * <p>Updates a world template.</p>
   */
  public updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorldTemplateCommandOutput>;
  public updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    cb: (err: any, data?: UpdateWorldTemplateCommandOutput) => void
  ): void;
  public updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorldTemplateCommandOutput) => void
  ): void;
  public updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorldTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorldTemplateCommandOutput) => void
  ): Promise<UpdateWorldTemplateCommandOutput> | void {
    const command = new UpdateWorldTemplateCommand(args);
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

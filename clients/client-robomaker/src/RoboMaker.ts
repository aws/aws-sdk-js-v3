// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { RoboMakerClient, RoboMakerClientConfig } from "./RoboMakerClient";

const commands = {
  BatchDeleteWorldsCommand,
  BatchDescribeSimulationJobCommand,
  CancelDeploymentJobCommand,
  CancelSimulationJobCommand,
  CancelSimulationJobBatchCommand,
  CancelWorldExportJobCommand,
  CancelWorldGenerationJobCommand,
  CreateDeploymentJobCommand,
  CreateFleetCommand,
  CreateRobotCommand,
  CreateRobotApplicationCommand,
  CreateRobotApplicationVersionCommand,
  CreateSimulationApplicationCommand,
  CreateSimulationApplicationVersionCommand,
  CreateSimulationJobCommand,
  CreateWorldExportJobCommand,
  CreateWorldGenerationJobCommand,
  CreateWorldTemplateCommand,
  DeleteFleetCommand,
  DeleteRobotCommand,
  DeleteRobotApplicationCommand,
  DeleteSimulationApplicationCommand,
  DeleteWorldTemplateCommand,
  DeregisterRobotCommand,
  DescribeDeploymentJobCommand,
  DescribeFleetCommand,
  DescribeRobotCommand,
  DescribeRobotApplicationCommand,
  DescribeSimulationApplicationCommand,
  DescribeSimulationJobCommand,
  DescribeSimulationJobBatchCommand,
  DescribeWorldCommand,
  DescribeWorldExportJobCommand,
  DescribeWorldGenerationJobCommand,
  DescribeWorldTemplateCommand,
  GetWorldTemplateBodyCommand,
  ListDeploymentJobsCommand,
  ListFleetsCommand,
  ListRobotApplicationsCommand,
  ListRobotsCommand,
  ListSimulationApplicationsCommand,
  ListSimulationJobBatchesCommand,
  ListSimulationJobsCommand,
  ListTagsForResourceCommand,
  ListWorldExportJobsCommand,
  ListWorldGenerationJobsCommand,
  ListWorldsCommand,
  ListWorldTemplatesCommand,
  RegisterRobotCommand,
  RestartSimulationJobCommand,
  StartSimulationJobBatchCommand,
  SyncDeploymentJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateRobotApplicationCommand,
  UpdateSimulationApplicationCommand,
  UpdateWorldTemplateCommand,
};

export interface RoboMaker {
  /**
   * @see {@link BatchDeleteWorldsCommand}
   */
  batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteWorldsCommandOutput>;
  batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    cb: (err: any, data?: BatchDeleteWorldsCommandOutput) => void
  ): void;
  batchDeleteWorlds(
    args: BatchDeleteWorldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteWorldsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDescribeSimulationJobCommand}
   */
  batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeSimulationJobCommandOutput>;
  batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    cb: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void
  ): void;
  batchDescribeSimulationJob(
    args: BatchDescribeSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDeploymentJobCommand}
   */
  cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDeploymentJobCommandOutput>;
  cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    cb: (err: any, data?: CancelDeploymentJobCommandOutput) => void
  ): void;
  cancelDeploymentJob(
    args: CancelDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDeploymentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSimulationJobCommand}
   */
  cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSimulationJobCommandOutput>;
  cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    cb: (err: any, data?: CancelSimulationJobCommandOutput) => void
  ): void;
  cancelSimulationJob(
    args: CancelSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSimulationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSimulationJobBatchCommand}
   */
  cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSimulationJobBatchCommandOutput>;
  cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    cb: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void
  ): void;
  cancelSimulationJobBatch(
    args: CancelSimulationJobBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelWorldExportJobCommand}
   */
  cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelWorldExportJobCommandOutput>;
  cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    cb: (err: any, data?: CancelWorldExportJobCommandOutput) => void
  ): void;
  cancelWorldExportJob(
    args: CancelWorldExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelWorldExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelWorldGenerationJobCommand}
   */
  cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelWorldGenerationJobCommandOutput>;
  cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    cb: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void
  ): void;
  cancelWorldGenerationJob(
    args: CancelWorldGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeploymentJobCommand}
   */
  createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentJobCommandOutput>;
  createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    cb: (err: any, data?: CreateDeploymentJobCommandOutput) => void
  ): void;
  createDeploymentJob(
    args: CreateDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRobotCommand}
   */
  createRobot(args: CreateRobotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRobotCommandOutput>;
  createRobot(args: CreateRobotCommandInput, cb: (err: any, data?: CreateRobotCommandOutput) => void): void;
  createRobot(
    args: CreateRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRobotApplicationCommand}
   */
  createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRobotApplicationCommandOutput>;
  createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    cb: (err: any, data?: CreateRobotApplicationCommandOutput) => void
  ): void;
  createRobotApplication(
    args: CreateRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRobotApplicationVersionCommand}
   */
  createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRobotApplicationVersionCommandOutput>;
  createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    cb: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void
  ): void;
  createRobotApplicationVersion(
    args: CreateRobotApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSimulationApplicationCommand}
   */
  createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationApplicationCommandOutput>;
  createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    cb: (err: any, data?: CreateSimulationApplicationCommandOutput) => void
  ): void;
  createSimulationApplication(
    args: CreateSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSimulationApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSimulationApplicationVersionCommand}
   */
  createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationApplicationVersionCommandOutput>;
  createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    cb: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void
  ): void;
  createSimulationApplicationVersion(
    args: CreateSimulationApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSimulationJobCommand}
   */
  createSimulationJob(
    args: CreateSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSimulationJobCommandOutput>;
  createSimulationJob(
    args: CreateSimulationJobCommandInput,
    cb: (err: any, data?: CreateSimulationJobCommandOutput) => void
  ): void;
  createSimulationJob(
    args: CreateSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSimulationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorldExportJobCommand}
   */
  createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorldExportJobCommandOutput>;
  createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    cb: (err: any, data?: CreateWorldExportJobCommandOutput) => void
  ): void;
  createWorldExportJob(
    args: CreateWorldExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorldExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorldGenerationJobCommand}
   */
  createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorldGenerationJobCommandOutput>;
  createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    cb: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void
  ): void;
  createWorldGenerationJob(
    args: CreateWorldGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorldTemplateCommand}
   */
  createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorldTemplateCommandOutput>;
  createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    cb: (err: any, data?: CreateWorldTemplateCommandOutput) => void
  ): void;
  createWorldTemplate(
    args: CreateWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorldTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRobotCommand}
   */
  deleteRobot(args: DeleteRobotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRobotCommandOutput>;
  deleteRobot(args: DeleteRobotCommandInput, cb: (err: any, data?: DeleteRobotCommandOutput) => void): void;
  deleteRobot(
    args: DeleteRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRobotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRobotApplicationCommand}
   */
  deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRobotApplicationCommandOutput>;
  deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    cb: (err: any, data?: DeleteRobotApplicationCommandOutput) => void
  ): void;
  deleteRobotApplication(
    args: DeleteRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRobotApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSimulationApplicationCommand}
   */
  deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSimulationApplicationCommandOutput>;
  deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    cb: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void
  ): void;
  deleteSimulationApplication(
    args: DeleteSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorldTemplateCommand}
   */
  deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorldTemplateCommandOutput>;
  deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    cb: (err: any, data?: DeleteWorldTemplateCommandOutput) => void
  ): void;
  deleteWorldTemplate(
    args: DeleteWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorldTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterRobotCommand}
   */
  deregisterRobot(
    args: DeregisterRobotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterRobotCommandOutput>;
  deregisterRobot(args: DeregisterRobotCommandInput, cb: (err: any, data?: DeregisterRobotCommandOutput) => void): void;
  deregisterRobot(
    args: DeregisterRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterRobotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeploymentJobCommand}
   */
  describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeploymentJobCommandOutput>;
  describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    cb: (err: any, data?: DescribeDeploymentJobCommandOutput) => void
  ): void;
  describeDeploymentJob(
    args: DescribeDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeploymentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetCommand}
   */
  describeFleet(args: DescribeFleetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFleetCommandOutput>;
  describeFleet(args: DescribeFleetCommandInput, cb: (err: any, data?: DescribeFleetCommandOutput) => void): void;
  describeFleet(
    args: DescribeFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRobotCommand}
   */
  describeRobot(args: DescribeRobotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRobotCommandOutput>;
  describeRobot(args: DescribeRobotCommandInput, cb: (err: any, data?: DescribeRobotCommandOutput) => void): void;
  describeRobot(
    args: DescribeRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRobotCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRobotApplicationCommand}
   */
  describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRobotApplicationCommandOutput>;
  describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    cb: (err: any, data?: DescribeRobotApplicationCommandOutput) => void
  ): void;
  describeRobotApplication(
    args: DescribeRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRobotApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSimulationApplicationCommand}
   */
  describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationApplicationCommandOutput>;
  describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    cb: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void
  ): void;
  describeSimulationApplication(
    args: DescribeSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSimulationJobCommand}
   */
  describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationJobCommandOutput>;
  describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    cb: (err: any, data?: DescribeSimulationJobCommandOutput) => void
  ): void;
  describeSimulationJob(
    args: DescribeSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSimulationJobBatchCommand}
   */
  describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationJobBatchCommandOutput>;
  describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    cb: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void
  ): void;
  describeSimulationJobBatch(
    args: DescribeSimulationJobBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorldCommand}
   */
  describeWorld(args: DescribeWorldCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorldCommandOutput>;
  describeWorld(args: DescribeWorldCommandInput, cb: (err: any, data?: DescribeWorldCommandOutput) => void): void;
  describeWorld(
    args: DescribeWorldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorldExportJobCommand}
   */
  describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldExportJobCommandOutput>;
  describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    cb: (err: any, data?: DescribeWorldExportJobCommandOutput) => void
  ): void;
  describeWorldExportJob(
    args: DescribeWorldExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorldGenerationJobCommand}
   */
  describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldGenerationJobCommandOutput>;
  describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    cb: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void
  ): void;
  describeWorldGenerationJob(
    args: DescribeWorldGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorldTemplateCommand}
   */
  describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorldTemplateCommandOutput>;
  describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    cb: (err: any, data?: DescribeWorldTemplateCommandOutput) => void
  ): void;
  describeWorldTemplate(
    args: DescribeWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorldTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorldTemplateBodyCommand}
   */
  getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorldTemplateBodyCommandOutput>;
  getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    cb: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void
  ): void;
  getWorldTemplateBody(
    args: GetWorldTemplateBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeploymentJobsCommand}
   */
  listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentJobsCommandOutput>;
  listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    cb: (err: any, data?: ListDeploymentJobsCommandOutput) => void
  ): void;
  listDeploymentJobs(
    args: ListDeploymentJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRobotApplicationsCommand}
   */
  listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRobotApplicationsCommandOutput>;
  listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    cb: (err: any, data?: ListRobotApplicationsCommandOutput) => void
  ): void;
  listRobotApplications(
    args: ListRobotApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRobotApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRobotsCommand}
   */
  listRobots(args: ListRobotsCommandInput, options?: __HttpHandlerOptions): Promise<ListRobotsCommandOutput>;
  listRobots(args: ListRobotsCommandInput, cb: (err: any, data?: ListRobotsCommandOutput) => void): void;
  listRobots(
    args: ListRobotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRobotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSimulationApplicationsCommand}
   */
  listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationApplicationsCommandOutput>;
  listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    cb: (err: any, data?: ListSimulationApplicationsCommandOutput) => void
  ): void;
  listSimulationApplications(
    args: ListSimulationApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSimulationJobBatchesCommand}
   */
  listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationJobBatchesCommandOutput>;
  listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    cb: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void
  ): void;
  listSimulationJobBatches(
    args: ListSimulationJobBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSimulationJobsCommand}
   */
  listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationJobsCommandOutput>;
  listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    cb: (err: any, data?: ListSimulationJobsCommandOutput) => void
  ): void;
  listSimulationJobs(
    args: ListSimulationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorldExportJobsCommand}
   */
  listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorldExportJobsCommandOutput>;
  listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    cb: (err: any, data?: ListWorldExportJobsCommandOutput) => void
  ): void;
  listWorldExportJobs(
    args: ListWorldExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorldGenerationJobsCommand}
   */
  listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorldGenerationJobsCommandOutput>;
  listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    cb: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void
  ): void;
  listWorldGenerationJobs(
    args: ListWorldGenerationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorldsCommand}
   */
  listWorlds(args: ListWorldsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorldsCommandOutput>;
  listWorlds(args: ListWorldsCommandInput, cb: (err: any, data?: ListWorldsCommandOutput) => void): void;
  listWorlds(
    args: ListWorldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorldTemplatesCommand}
   */
  listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorldTemplatesCommandOutput>;
  listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    cb: (err: any, data?: ListWorldTemplatesCommandOutput) => void
  ): void;
  listWorldTemplates(
    args: ListWorldTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorldTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterRobotCommand}
   */
  registerRobot(args: RegisterRobotCommandInput, options?: __HttpHandlerOptions): Promise<RegisterRobotCommandOutput>;
  registerRobot(args: RegisterRobotCommandInput, cb: (err: any, data?: RegisterRobotCommandOutput) => void): void;
  registerRobot(
    args: RegisterRobotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterRobotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartSimulationJobCommand}
   */
  restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartSimulationJobCommandOutput>;
  restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    cb: (err: any, data?: RestartSimulationJobCommandOutput) => void
  ): void;
  restartSimulationJob(
    args: RestartSimulationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartSimulationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSimulationJobBatchCommand}
   */
  startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSimulationJobBatchCommandOutput>;
  startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    cb: (err: any, data?: StartSimulationJobBatchCommandOutput) => void
  ): void;
  startSimulationJobBatch(
    args: StartSimulationJobBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSimulationJobBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link SyncDeploymentJobCommand}
   */
  syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SyncDeploymentJobCommandOutput>;
  syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    cb: (err: any, data?: SyncDeploymentJobCommandOutput) => void
  ): void;
  syncDeploymentJob(
    args: SyncDeploymentJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SyncDeploymentJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRobotApplicationCommand}
   */
  updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRobotApplicationCommandOutput>;
  updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    cb: (err: any, data?: UpdateRobotApplicationCommandOutput) => void
  ): void;
  updateRobotApplication(
    args: UpdateRobotApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRobotApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSimulationApplicationCommand}
   */
  updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSimulationApplicationCommandOutput>;
  updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    cb: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void
  ): void;
  updateSimulationApplication(
    args: UpdateSimulationApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorldTemplateCommand}
   */
  updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorldTemplateCommandOutput>;
  updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    cb: (err: any, data?: UpdateWorldTemplateCommandOutput) => void
  ): void;
  updateWorldTemplate(
    args: UpdateWorldTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorldTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export class RoboMaker extends RoboMakerClient implements RoboMaker {}
createAggregatedClient(commands, RoboMaker);

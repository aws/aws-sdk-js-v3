// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockDataAutomationClient } from "./BedrockDataAutomationClient";
import {
  CopyBlueprintStageCommand,
  CopyBlueprintStageCommandInput,
  CopyBlueprintStageCommandOutput,
} from "./commands/CopyBlueprintStageCommand";
import {
  CreateBlueprintCommand,
  CreateBlueprintCommandInput,
  CreateBlueprintCommandOutput,
} from "./commands/CreateBlueprintCommand";
import {
  CreateBlueprintVersionCommand,
  CreateBlueprintVersionCommandInput,
  CreateBlueprintVersionCommandOutput,
} from "./commands/CreateBlueprintVersionCommand";
import {
  CreateDataAutomationProjectCommand,
  CreateDataAutomationProjectCommandInput,
  CreateDataAutomationProjectCommandOutput,
} from "./commands/CreateDataAutomationProjectCommand";
import {
  DeleteBlueprintCommand,
  DeleteBlueprintCommandInput,
  DeleteBlueprintCommandOutput,
} from "./commands/DeleteBlueprintCommand";
import {
  DeleteDataAutomationProjectCommand,
  DeleteDataAutomationProjectCommandInput,
  DeleteDataAutomationProjectCommandOutput,
} from "./commands/DeleteDataAutomationProjectCommand";
import {
  GetBlueprintCommand,
  GetBlueprintCommandInput,
  GetBlueprintCommandOutput,
} from "./commands/GetBlueprintCommand";
import {
  GetBlueprintOptimizationStatusCommand,
  GetBlueprintOptimizationStatusCommandInput,
  GetBlueprintOptimizationStatusCommandOutput,
} from "./commands/GetBlueprintOptimizationStatusCommand";
import {
  GetDataAutomationProjectCommand,
  GetDataAutomationProjectCommandInput,
  GetDataAutomationProjectCommandOutput,
} from "./commands/GetDataAutomationProjectCommand";
import {
  InvokeBlueprintOptimizationAsyncCommand,
  InvokeBlueprintOptimizationAsyncCommandInput,
  InvokeBlueprintOptimizationAsyncCommandOutput,
} from "./commands/InvokeBlueprintOptimizationAsyncCommand";
import {
  ListBlueprintsCommand,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput,
} from "./commands/ListBlueprintsCommand";
import {
  ListDataAutomationProjectsCommand,
  ListDataAutomationProjectsCommandInput,
  ListDataAutomationProjectsCommandOutput,
} from "./commands/ListDataAutomationProjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBlueprintCommand,
  UpdateBlueprintCommandInput,
  UpdateBlueprintCommandOutput,
} from "./commands/UpdateBlueprintCommand";
import {
  UpdateDataAutomationProjectCommand,
  UpdateDataAutomationProjectCommandInput,
  UpdateDataAutomationProjectCommandOutput,
} from "./commands/UpdateDataAutomationProjectCommand";

const commands = {
  CopyBlueprintStageCommand,
  CreateBlueprintCommand,
  CreateBlueprintVersionCommand,
  CreateDataAutomationProjectCommand,
  DeleteBlueprintCommand,
  DeleteDataAutomationProjectCommand,
  GetBlueprintCommand,
  GetBlueprintOptimizationStatusCommand,
  GetDataAutomationProjectCommand,
  InvokeBlueprintOptimizationAsyncCommand,
  ListBlueprintsCommand,
  ListDataAutomationProjectsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBlueprintCommand,
  UpdateDataAutomationProjectCommand,
};

export interface BedrockDataAutomation {
  /**
   * @see {@link CopyBlueprintStageCommand}
   */
  copyBlueprintStage(
    args: CopyBlueprintStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyBlueprintStageCommandOutput>;
  copyBlueprintStage(
    args: CopyBlueprintStageCommandInput,
    cb: (err: any, data?: CopyBlueprintStageCommandOutput) => void
  ): void;
  copyBlueprintStage(
    args: CopyBlueprintStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyBlueprintStageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBlueprintCommand}
   */
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBlueprintCommandOutput>;
  createBlueprint(args: CreateBlueprintCommandInput, cb: (err: any, data?: CreateBlueprintCommandOutput) => void): void;
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBlueprintVersionCommand}
   */
  createBlueprintVersion(
    args: CreateBlueprintVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBlueprintVersionCommandOutput>;
  createBlueprintVersion(
    args: CreateBlueprintVersionCommandInput,
    cb: (err: any, data?: CreateBlueprintVersionCommandOutput) => void
  ): void;
  createBlueprintVersion(
    args: CreateBlueprintVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBlueprintVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataAutomationProjectCommand}
   */
  createDataAutomationProject(
    args: CreateDataAutomationProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataAutomationProjectCommandOutput>;
  createDataAutomationProject(
    args: CreateDataAutomationProjectCommandInput,
    cb: (err: any, data?: CreateDataAutomationProjectCommandOutput) => void
  ): void;
  createDataAutomationProject(
    args: CreateDataAutomationProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataAutomationProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBlueprintCommand}
   */
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBlueprintCommandOutput>;
  deleteBlueprint(args: DeleteBlueprintCommandInput, cb: (err: any, data?: DeleteBlueprintCommandOutput) => void): void;
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataAutomationProjectCommand}
   */
  deleteDataAutomationProject(
    args: DeleteDataAutomationProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataAutomationProjectCommandOutput>;
  deleteDataAutomationProject(
    args: DeleteDataAutomationProjectCommandInput,
    cb: (err: any, data?: DeleteDataAutomationProjectCommandOutput) => void
  ): void;
  deleteDataAutomationProject(
    args: DeleteDataAutomationProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataAutomationProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintCommand}
   */
  getBlueprint(args: GetBlueprintCommandInput, options?: __HttpHandlerOptions): Promise<GetBlueprintCommandOutput>;
  getBlueprint(args: GetBlueprintCommandInput, cb: (err: any, data?: GetBlueprintCommandOutput) => void): void;
  getBlueprint(
    args: GetBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlueprintOptimizationStatusCommand}
   */
  getBlueprintOptimizationStatus(
    args: GetBlueprintOptimizationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintOptimizationStatusCommandOutput>;
  getBlueprintOptimizationStatus(
    args: GetBlueprintOptimizationStatusCommandInput,
    cb: (err: any, data?: GetBlueprintOptimizationStatusCommandOutput) => void
  ): void;
  getBlueprintOptimizationStatus(
    args: GetBlueprintOptimizationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintOptimizationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataAutomationProjectCommand}
   */
  getDataAutomationProject(
    args: GetDataAutomationProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataAutomationProjectCommandOutput>;
  getDataAutomationProject(
    args: GetDataAutomationProjectCommandInput,
    cb: (err: any, data?: GetDataAutomationProjectCommandOutput) => void
  ): void;
  getDataAutomationProject(
    args: GetDataAutomationProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataAutomationProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeBlueprintOptimizationAsyncCommand}
   */
  invokeBlueprintOptimizationAsync(
    args: InvokeBlueprintOptimizationAsyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeBlueprintOptimizationAsyncCommandOutput>;
  invokeBlueprintOptimizationAsync(
    args: InvokeBlueprintOptimizationAsyncCommandInput,
    cb: (err: any, data?: InvokeBlueprintOptimizationAsyncCommandOutput) => void
  ): void;
  invokeBlueprintOptimizationAsync(
    args: InvokeBlueprintOptimizationAsyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeBlueprintOptimizationAsyncCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBlueprintsCommand}
   */
  listBlueprints(): Promise<ListBlueprintsCommandOutput>;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBlueprintsCommandOutput>;
  listBlueprints(args: ListBlueprintsCommandInput, cb: (err: any, data?: ListBlueprintsCommandOutput) => void): void;
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataAutomationProjectsCommand}
   */
  listDataAutomationProjects(): Promise<ListDataAutomationProjectsCommandOutput>;
  listDataAutomationProjects(
    args: ListDataAutomationProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataAutomationProjectsCommandOutput>;
  listDataAutomationProjects(
    args: ListDataAutomationProjectsCommandInput,
    cb: (err: any, data?: ListDataAutomationProjectsCommandOutput) => void
  ): void;
  listDataAutomationProjects(
    args: ListDataAutomationProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataAutomationProjectsCommandOutput) => void
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
   * @see {@link UpdateBlueprintCommand}
   */
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBlueprintCommandOutput>;
  updateBlueprint(args: UpdateBlueprintCommandInput, cb: (err: any, data?: UpdateBlueprintCommandOutput) => void): void;
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataAutomationProjectCommand}
   */
  updateDataAutomationProject(
    args: UpdateDataAutomationProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataAutomationProjectCommandOutput>;
  updateDataAutomationProject(
    args: UpdateDataAutomationProjectCommandInput,
    cb: (err: any, data?: UpdateDataAutomationProjectCommandOutput) => void
  ): void;
  updateDataAutomationProject(
    args: UpdateDataAutomationProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataAutomationProjectCommandOutput) => void
  ): void;
}

/**
 * Amazon Bedrock Data Automation BuildTime
 * @public
 */
export class BedrockDataAutomation extends BedrockDataAutomationClient implements BedrockDataAutomation {}
createAggregatedClient(commands, BedrockDataAutomation);

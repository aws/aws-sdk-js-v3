// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BedrockDataAutomationClient } from "./BedrockDataAutomationClient";
import {
  type CopyBlueprintStageCommandInput,
  type CopyBlueprintStageCommandOutput,
  CopyBlueprintStageCommand,
} from "./commands/CopyBlueprintStageCommand";
import {
  type CreateBlueprintCommandInput,
  type CreateBlueprintCommandOutput,
  CreateBlueprintCommand,
} from "./commands/CreateBlueprintCommand";
import {
  type CreateBlueprintVersionCommandInput,
  type CreateBlueprintVersionCommandOutput,
  CreateBlueprintVersionCommand,
} from "./commands/CreateBlueprintVersionCommand";
import {
  type CreateDataAutomationProjectCommandInput,
  type CreateDataAutomationProjectCommandOutput,
  CreateDataAutomationProjectCommand,
} from "./commands/CreateDataAutomationProjectCommand";
import {
  type DeleteBlueprintCommandInput,
  type DeleteBlueprintCommandOutput,
  DeleteBlueprintCommand,
} from "./commands/DeleteBlueprintCommand";
import {
  type DeleteDataAutomationProjectCommandInput,
  type DeleteDataAutomationProjectCommandOutput,
  DeleteDataAutomationProjectCommand,
} from "./commands/DeleteDataAutomationProjectCommand";
import {
  type GetBlueprintCommandInput,
  type GetBlueprintCommandOutput,
  GetBlueprintCommand,
} from "./commands/GetBlueprintCommand";
import {
  type GetBlueprintOptimizationStatusCommandInput,
  type GetBlueprintOptimizationStatusCommandOutput,
  GetBlueprintOptimizationStatusCommand,
} from "./commands/GetBlueprintOptimizationStatusCommand";
import {
  type GetDataAutomationProjectCommandInput,
  type GetDataAutomationProjectCommandOutput,
  GetDataAutomationProjectCommand,
} from "./commands/GetDataAutomationProjectCommand";
import {
  type InvokeBlueprintOptimizationAsyncCommandInput,
  type InvokeBlueprintOptimizationAsyncCommandOutput,
  InvokeBlueprintOptimizationAsyncCommand,
} from "./commands/InvokeBlueprintOptimizationAsyncCommand";
import {
  type ListBlueprintsCommandInput,
  type ListBlueprintsCommandOutput,
  ListBlueprintsCommand,
} from "./commands/ListBlueprintsCommand";
import {
  type ListDataAutomationProjectsCommandInput,
  type ListDataAutomationProjectsCommandOutput,
  ListDataAutomationProjectsCommand,
} from "./commands/ListDataAutomationProjectsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBlueprintCommandInput,
  type UpdateBlueprintCommandOutput,
  UpdateBlueprintCommand,
} from "./commands/UpdateBlueprintCommand";
import {
  type UpdateDataAutomationProjectCommandInput,
  type UpdateDataAutomationProjectCommandOutput,
  UpdateDataAutomationProjectCommand,
} from "./commands/UpdateDataAutomationProjectCommand";
import { paginateListBlueprints } from "./pagination/ListBlueprintsPaginator";
import { paginateListDataAutomationProjects } from "./pagination/ListDataAutomationProjectsPaginator";

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
const paginators = {
  paginateListBlueprints,
  paginateListDataAutomationProjects,
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
  createBlueprint(
    args: CreateBlueprintCommandInput,
    cb: (err: any, data?: CreateBlueprintCommandOutput) => void
  ): void;
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
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    cb: (err: any, data?: DeleteBlueprintCommandOutput) => void
  ): void;
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
  getBlueprint(
    args: GetBlueprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintCommandOutput>;
  getBlueprint(
    args: GetBlueprintCommandInput,
    cb: (err: any, data?: GetBlueprintCommandOutput) => void
  ): void;
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
  listBlueprints(
    args: ListBlueprintsCommandInput,
    cb: (err: any, data?: ListBlueprintsCommandOutput) => void
  ): void;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    cb: (err: any, data?: UpdateBlueprintCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListBlueprintsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBlueprintsCommandOutput}.
   */
  paginateListBlueprints(
    args?: ListBlueprintsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBlueprintsCommandOutput>;

  /**
   * @see {@link ListDataAutomationProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataAutomationProjectsCommandOutput}.
   */
  paginateListDataAutomationProjects(
    args?: ListDataAutomationProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataAutomationProjectsCommandOutput>;
}

/**
 * Amazon Bedrock Data Automation BuildTime
 * @public
 */
export class BedrockDataAutomation extends BedrockDataAutomationClient implements BedrockDataAutomation {}
createAggregatedClient(commands, BedrockDataAutomation, { paginators });

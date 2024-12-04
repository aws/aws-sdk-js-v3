// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockDataAutomationClient, BedrockDataAutomationClientConfig } from "./BedrockDataAutomationClient";
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
  GetDataAutomationProjectCommand,
  GetDataAutomationProjectCommandInput,
  GetDataAutomationProjectCommandOutput,
} from "./commands/GetDataAutomationProjectCommand";
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
  CreateBlueprintCommand,
  CreateBlueprintVersionCommand,
  CreateDataAutomationProjectCommand,
  DeleteBlueprintCommand,
  DeleteDataAutomationProjectCommand,
  GetBlueprintCommand,
  GetDataAutomationProjectCommand,
  ListBlueprintsCommand,
  ListDataAutomationProjectsCommand,
  UpdateBlueprintCommand,
  UpdateDataAutomationProjectCommand,
};

export interface BedrockDataAutomation {
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
 * Amazon Bedrock Keystone Build
 * @public
 */
export class BedrockDataAutomation extends BedrockDataAutomationClient implements BedrockDataAutomation {}
createAggregatedClient(commands, BedrockDataAutomation);

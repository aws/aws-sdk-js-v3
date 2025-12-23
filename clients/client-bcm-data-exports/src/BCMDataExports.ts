// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BCMDataExportsClient } from "./BCMDataExportsClient";
import {
  CreateExportCommand,
  CreateExportCommandInput,
  CreateExportCommandOutput,
} from "./commands/CreateExportCommand";
import {
  DeleteExportCommand,
  DeleteExportCommandInput,
  DeleteExportCommandOutput,
} from "./commands/DeleteExportCommand";
import {
  GetExecutionCommand,
  GetExecutionCommandInput,
  GetExecutionCommandOutput,
} from "./commands/GetExecutionCommand";
import { GetExportCommand, GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { GetTableCommand, GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
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
  UpdateExportCommand,
  UpdateExportCommandInput,
  UpdateExportCommandOutput,
} from "./commands/UpdateExportCommand";

const commands = {
  CreateExportCommand,
  DeleteExportCommand,
  GetExecutionCommand,
  GetExportCommand,
  GetTableCommand,
  ListExecutionsCommand,
  ListExportsCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateExportCommand,
};

export interface BCMDataExports {
  /**
   * @see {@link CreateExportCommand}
   */
  createExport(
    args: CreateExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportCommandOutput>;
  createExport(
    args: CreateExportCommandInput,
    cb: (err: any, data?: CreateExportCommandOutput) => void
  ): void;
  createExport(
    args: CreateExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExportCommand}
   */
  deleteExport(
    args: DeleteExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExportCommandOutput>;
  deleteExport(
    args: DeleteExportCommandInput,
    cb: (err: any, data?: DeleteExportCommandOutput) => void
  ): void;
  deleteExport(
    args: DeleteExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExecutionCommand}
   */
  getExecution(
    args: GetExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExecutionCommandOutput>;
  getExecution(
    args: GetExecutionCommandInput,
    cb: (err: any, data?: GetExecutionCommandOutput) => void
  ): void;
  getExecution(
    args: GetExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportCommand}
   */
  getExport(
    args: GetExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExportCommandOutput>;
  getExport(
    args: GetExportCommandInput,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;
  getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(
    args: GetTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableCommandOutput>;
  getTable(
    args: GetTableCommandInput,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;
  getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(): Promise<ListTablesCommandOutput>;
  listTables(
    args: ListTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTablesCommandOutput>;
  listTables(
    args: ListTablesCommandInput,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;
  listTables(
    args: ListTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTablesCommandOutput) => void
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
   * @see {@link UpdateExportCommand}
   */
  updateExport(
    args: UpdateExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExportCommandOutput>;
  updateExport(
    args: UpdateExportCommandInput,
    cb: (err: any, data?: UpdateExportCommandOutput) => void
  ): void;
  updateExport(
    args: UpdateExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExportCommandOutput) => void
  ): void;
}

/**
 * <p>You can use the Data Exports API to create customized exports from multiple Amazon Web Services cost management and billing datasets, such as cost and usage data and cost
 *       optimization recommendations.</p>
 *          <p>The Data Exports API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>https://bcm-data-exports.us-east-1.api.aws</p>
 *             </li>
 *          </ul>
 * @public
 */
export class BCMDataExports extends BCMDataExportsClient implements BCMDataExports {}
createAggregatedClient(commands, BCMDataExports);

// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchCreateTableRowsCommand,
  BatchCreateTableRowsCommandInput,
  BatchCreateTableRowsCommandOutput,
} from "./commands/BatchCreateTableRowsCommand";
import {
  BatchDeleteTableRowsCommand,
  BatchDeleteTableRowsCommandInput,
  BatchDeleteTableRowsCommandOutput,
} from "./commands/BatchDeleteTableRowsCommand";
import {
  BatchUpdateTableRowsCommand,
  BatchUpdateTableRowsCommandInput,
  BatchUpdateTableRowsCommandOutput,
} from "./commands/BatchUpdateTableRowsCommand";
import {
  BatchUpsertTableRowsCommand,
  BatchUpsertTableRowsCommandInput,
  BatchUpsertTableRowsCommandOutput,
} from "./commands/BatchUpsertTableRowsCommand";
import {
  DescribeTableDataImportJobCommand,
  DescribeTableDataImportJobCommandInput,
  DescribeTableDataImportJobCommandOutput,
} from "./commands/DescribeTableDataImportJobCommand";
import {
  GetScreenDataCommand,
  GetScreenDataCommandInput,
  GetScreenDataCommandOutput,
} from "./commands/GetScreenDataCommand";
import {
  InvokeScreenAutomationCommand,
  InvokeScreenAutomationCommandInput,
  InvokeScreenAutomationCommandOutput,
} from "./commands/InvokeScreenAutomationCommand";
import {
  ListTableColumnsCommand,
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput,
} from "./commands/ListTableColumnsCommand";
import {
  ListTableRowsCommand,
  ListTableRowsCommandInput,
  ListTableRowsCommandOutput,
} from "./commands/ListTableRowsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  QueryTableRowsCommand,
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput,
} from "./commands/QueryTableRowsCommand";
import {
  StartTableDataImportJobCommand,
  StartTableDataImportJobCommandInput,
  StartTableDataImportJobCommandOutput,
} from "./commands/StartTableDataImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HoneycodeClient, HoneycodeClientConfig } from "./HoneycodeClient";

const commands = {
  BatchCreateTableRowsCommand,
  BatchDeleteTableRowsCommand,
  BatchUpdateTableRowsCommand,
  BatchUpsertTableRowsCommand,
  DescribeTableDataImportJobCommand,
  GetScreenDataCommand,
  InvokeScreenAutomationCommand,
  ListTableColumnsCommand,
  ListTableRowsCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  QueryTableRowsCommand,
  StartTableDataImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface Honeycode {
  /**
   * @see {@link BatchCreateTableRowsCommand}
   */
  batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateTableRowsCommandOutput>;
  batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    cb: (err: any, data?: BatchCreateTableRowsCommandOutput) => void
  ): void;
  batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateTableRowsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteTableRowsCommand}
   */
  batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableRowsCommandOutput>;
  batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    cb: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void
  ): void;
  batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateTableRowsCommand}
   */
  batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateTableRowsCommandOutput>;
  batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    cb: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void
  ): void;
  batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpsertTableRowsCommand}
   */
  batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpsertTableRowsCommandOutput>;
  batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    cb: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void
  ): void;
  batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableDataImportJobCommand}
   */
  describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableDataImportJobCommandOutput>;
  describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    cb: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void
  ): void;
  describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetScreenDataCommand}
   */
  getScreenData(args: GetScreenDataCommandInput, options?: __HttpHandlerOptions): Promise<GetScreenDataCommandOutput>;
  getScreenData(args: GetScreenDataCommandInput, cb: (err: any, data?: GetScreenDataCommandOutput) => void): void;
  getScreenData(
    args: GetScreenDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScreenDataCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeScreenAutomationCommand}
   */
  invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeScreenAutomationCommandOutput>;
  invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): void;
  invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableColumnsCommand}
   */
  listTableColumns(
    args: ListTableColumnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableColumnsCommandOutput>;
  listTableColumns(
    args: ListTableColumnsCommandInput,
    cb: (err: any, data?: ListTableColumnsCommandOutput) => void
  ): void;
  listTableColumns(
    args: ListTableColumnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableColumnsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableRowsCommand}
   */
  listTableRows(args: ListTableRowsCommandInput, options?: __HttpHandlerOptions): Promise<ListTableRowsCommandOutput>;
  listTableRows(args: ListTableRowsCommandInput, cb: (err: any, data?: ListTableRowsCommandOutput) => void): void;
  listTableRows(
    args: ListTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableRowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
  listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
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
   * @see {@link QueryTableRowsCommand}
   */
  queryTableRows(
    args: QueryTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryTableRowsCommandOutput>;
  queryTableRows(args: QueryTableRowsCommandInput, cb: (err: any, data?: QueryTableRowsCommandOutput) => void): void;
  queryTableRows(
    args: QueryTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryTableRowsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTableDataImportJobCommand}
   */
  startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTableDataImportJobCommandOutput>;
  startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    cb: (err: any, data?: StartTableDataImportJobCommandOutput) => void
  ): void;
  startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTableDataImportJobCommandOutput) => void
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
}

/**
 * @public
 * <p>
 *       Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without
 *       programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals,
 *       resources, and even your team.
 *     </p>
 */
export class Honeycode extends HoneycodeClient implements Honeycode {}
createAggregatedClient(commands, Honeycode);

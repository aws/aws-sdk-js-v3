// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import {
  CancelStatementCommand,
  CancelStatementCommandInput,
  CancelStatementCommandOutput,
} from "./commands/CancelStatementCommand";
import {
  DescribeStatementCommand,
  DescribeStatementCommandInput,
  DescribeStatementCommandOutput,
} from "./commands/DescribeStatementCommand";
import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "./commands/DescribeTableCommand";
import {
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
} from "./commands/ExecuteStatementCommand";
import {
  GetStatementResultCommand,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
} from "./commands/GetStatementResultCommand";
import {
  GetStatementResultV2Command,
  GetStatementResultV2CommandInput,
  GetStatementResultV2CommandOutput,
} from "./commands/GetStatementResultV2Command";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListStatementsCommand,
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
} from "./commands/ListStatementsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import { paginateDescribeTable } from "./pagination/DescribeTablePaginator";
import { paginateGetStatementResult } from "./pagination/GetStatementResultPaginator";
import { paginateGetStatementResultV2 } from "./pagination/GetStatementResultV2Paginator";
import { paginateListDatabases } from "./pagination/ListDatabasesPaginator";
import { paginateListSchemas } from "./pagination/ListSchemasPaginator";
import { paginateListStatements } from "./pagination/ListStatementsPaginator";
import { paginateListTables } from "./pagination/ListTablesPaginator";
import { RedshiftDataClient } from "./RedshiftDataClient";

const commands = {
  BatchExecuteStatementCommand,
  CancelStatementCommand,
  DescribeStatementCommand,
  DescribeTableCommand,
  ExecuteStatementCommand,
  GetStatementResultCommand,
  GetStatementResultV2Command,
  ListDatabasesCommand,
  ListSchemasCommand,
  ListStatementsCommand,
  ListTablesCommand,
};
const paginators = {
  paginateDescribeTable,
  paginateGetStatementResult,
  paginateGetStatementResultV2,
  paginateListDatabases,
  paginateListSchemas,
  paginateListStatements,
  paginateListTables,
};

export interface RedshiftData {
  /**
   * @see {@link BatchExecuteStatementCommand}
   */
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchExecuteStatementCommandOutput>;
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelStatementCommand}
   */
  cancelStatement(
    args: CancelStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelStatementCommandOutput>;
  cancelStatement(
    args: CancelStatementCommandInput,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;
  cancelStatement(
    args: CancelStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStatementCommand}
   */
  describeStatement(
    args: DescribeStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStatementCommandOutput>;
  describeStatement(
    args: DescribeStatementCommandInput,
    cb: (err: any, data?: DescribeStatementCommandOutput) => void
  ): void;
  describeStatement(
    args: DescribeStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTableCommand}
   */
  describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableCommandOutput>;
  describeTable(
    args: DescribeTableCommandInput,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;
  describeTable(
    args: DescribeTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteStatementCommand}
   */
  executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteStatementCommandOutput>;
  executeStatement(
    args: ExecuteStatementCommandInput,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  executeStatement(
    args: ExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStatementResultCommand}
   */
  getStatementResult(
    args: GetStatementResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStatementResultCommandOutput>;
  getStatementResult(
    args: GetStatementResultCommandInput,
    cb: (err: any, data?: GetStatementResultCommandOutput) => void
  ): void;
  getStatementResult(
    args: GetStatementResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatementResultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStatementResultV2Command}
   */
  getStatementResultV2(
    args: GetStatementResultV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStatementResultV2CommandOutput>;
  getStatementResultV2(
    args: GetStatementResultV2CommandInput,
    cb: (err: any, data?: GetStatementResultV2CommandOutput) => void
  ): void;
  getStatementResultV2(
    args: GetStatementResultV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatementResultV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatabasesCommand}
   */
  listDatabases(
    args: ListDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatabasesCommandOutput>;
  listDatabases(
    args: ListDatabasesCommandInput,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(
    args: ListSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStatementsCommand}
   */
  listStatements(): Promise<ListStatementsCommandOutput>;
  listStatements(
    args: ListStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStatementsCommandOutput>;
  listStatements(
    args: ListStatementsCommandInput,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;
  listStatements(
    args: ListStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
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
   * @see {@link DescribeTableCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTableCommandOutput}.
   */
  paginateDescribeTable(
    args: DescribeTableCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTableCommandOutput>;

  /**
   * @see {@link GetStatementResultCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetStatementResultCommandOutput}.
   */
  paginateGetStatementResult(
    args: GetStatementResultCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetStatementResultCommandOutput>;

  /**
   * @see {@link GetStatementResultV2Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetStatementResultV2CommandOutput}.
   */
  paginateGetStatementResultV2(
    args: GetStatementResultV2CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetStatementResultV2CommandOutput>;

  /**
   * @see {@link ListDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatabasesCommandOutput}.
   */
  paginateListDatabases(
    args: ListDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatabasesCommandOutput>;

  /**
   * @see {@link ListSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemasCommandOutput}.
   */
  paginateListSchemas(
    args: ListSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemasCommandOutput>;

  /**
   * @see {@link ListStatementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStatementsCommandOutput}.
   */
  paginateListStatements(
    args?: ListStatementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStatementsCommandOutput>;

  /**
   * @see {@link ListTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTablesCommandOutput}.
   */
  paginateListTables(
    args: ListTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTablesCommandOutput>;
}

/**
 * <p>You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You can run SQL statements, which are committed if the statement succeeds. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
 * @public
 */
export class RedshiftData extends RedshiftDataClient implements RedshiftData {}
createAggregatedClient(commands, RedshiftData, { paginators });

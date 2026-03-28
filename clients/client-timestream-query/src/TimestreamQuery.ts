// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CancelQueryCommandInput,
  type CancelQueryCommandOutput,
  CancelQueryCommand,
} from "./commands/CancelQueryCommand";
import {
  type CreateScheduledQueryCommandInput,
  type CreateScheduledQueryCommandOutput,
  CreateScheduledQueryCommand,
} from "./commands/CreateScheduledQueryCommand";
import {
  type DeleteScheduledQueryCommandInput,
  type DeleteScheduledQueryCommandOutput,
  DeleteScheduledQueryCommand,
} from "./commands/DeleteScheduledQueryCommand";
import {
  type DescribeAccountSettingsCommandInput,
  type DescribeAccountSettingsCommandOutput,
  DescribeAccountSettingsCommand,
} from "./commands/DescribeAccountSettingsCommand";
import {
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeEndpointsCommand,
} from "./commands/DescribeEndpointsCommand";
import {
  type DescribeScheduledQueryCommandInput,
  type DescribeScheduledQueryCommandOutput,
  DescribeScheduledQueryCommand,
} from "./commands/DescribeScheduledQueryCommand";
import {
  type ExecuteScheduledQueryCommandInput,
  type ExecuteScheduledQueryCommandOutput,
  ExecuteScheduledQueryCommand,
} from "./commands/ExecuteScheduledQueryCommand";
import {
  type ListScheduledQueriesCommandInput,
  type ListScheduledQueriesCommandOutput,
  ListScheduledQueriesCommand,
} from "./commands/ListScheduledQueriesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PrepareQueryCommandInput,
  type PrepareQueryCommandOutput,
  PrepareQueryCommand,
} from "./commands/PrepareQueryCommand";
import { type QueryCommandInput, type QueryCommandOutput, QueryCommand } from "./commands/QueryCommand";
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
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import {
  type UpdateScheduledQueryCommandInput,
  type UpdateScheduledQueryCommandOutput,
  UpdateScheduledQueryCommand,
} from "./commands/UpdateScheduledQueryCommand";
import { paginateListScheduledQueries } from "./pagination/ListScheduledQueriesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateQuery } from "./pagination/QueryPaginator";
import { TimestreamQueryClient } from "./TimestreamQueryClient";

const commands = {
  CancelQueryCommand,
  CreateScheduledQueryCommand,
  DeleteScheduledQueryCommand,
  DescribeAccountSettingsCommand,
  DescribeEndpointsCommand,
  DescribeScheduledQueryCommand,
  ExecuteScheduledQueryCommand,
  ListScheduledQueriesCommand,
  ListTagsForResourceCommand,
  PrepareQueryCommand,
  QueryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountSettingsCommand,
  UpdateScheduledQueryCommand,
};
const paginators = {
  paginateListScheduledQueries,
  paginateListTagsForResource,
  paginateQuery,
};

export interface TimestreamQuery {
  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(
    args: CancelQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelQueryCommandOutput>;
  cancelQuery(
    args: CancelQueryCommandInput,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;
  cancelQuery(
    args: CancelQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateScheduledQueryCommand}
   */
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledQueryCommandOutput>;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledQueryCommand}
   */
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledQueryCommandOutput>;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountSettingsCommand}
   */
  describeAccountSettings(): Promise<DescribeAccountSettingsCommandOutput>;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountSettingsCommandOutput>;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;
  describeAccountSettings(
    args: DescribeAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointsCommand}
   */
  describeEndpoints(): Promise<DescribeEndpointsCommandOutput>;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledQueryCommand}
   */
  describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledQueryCommandOutput>;
  describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    cb: (err: any, data?: DescribeScheduledQueryCommandOutput) => void
  ): void;
  describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteScheduledQueryCommand}
   */
  executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteScheduledQueryCommandOutput>;
  executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    cb: (err: any, data?: ExecuteScheduledQueryCommandOutput) => void
  ): void;
  executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledQueriesCommand}
   */
  listScheduledQueries(): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledQueriesCommandOutput>;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
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
   * @see {@link PrepareQueryCommand}
   */
  prepareQuery(
    args: PrepareQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PrepareQueryCommandOutput>;
  prepareQuery(
    args: PrepareQueryCommandInput,
    cb: (err: any, data?: PrepareQueryCommandOutput) => void
  ): void;
  prepareQuery(
    args: PrepareQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryCommand}
   */
  query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryCommandOutput>;
  query(
    args: QueryCommandInput,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
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
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScheduledQueryCommand}
   */
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledQueryCommandOutput>;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScheduledQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScheduledQueriesCommandOutput}.
   */
  paginateListScheduledQueries(
    args?: ListScheduledQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScheduledQueriesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link QueryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link QueryCommandOutput}.
   */
  paginateQuery(
    args: QueryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<QueryCommandOutput>;
}

/**
 * <fullname>Amazon Timestream Query
 *         </fullname>
 *          <p></p>
 * @public
 */
export class TimestreamQuery extends TimestreamQueryClient implements TimestreamQuery {}
createAggregatedClient(commands, TimestreamQuery, { paginators });

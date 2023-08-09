// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CancelQueryCommand, CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import {
  CreateScheduledQueryCommand,
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "./commands/CreateScheduledQueryCommand";
import {
  DeleteScheduledQueryCommand,
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "./commands/DeleteScheduledQueryCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeScheduledQueryCommand,
  DescribeScheduledQueryCommandInput,
  DescribeScheduledQueryCommandOutput,
} from "./commands/DescribeScheduledQueryCommand";
import {
  ExecuteScheduledQueryCommand,
  ExecuteScheduledQueryCommandInput,
  ExecuteScheduledQueryCommandOutput,
} from "./commands/ExecuteScheduledQueryCommand";
import {
  ListScheduledQueriesCommand,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "./commands/ListScheduledQueriesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PrepareQueryCommand,
  PrepareQueryCommandInput,
  PrepareQueryCommandOutput,
} from "./commands/PrepareQueryCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateScheduledQueryCommand,
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "./commands/UpdateScheduledQueryCommand";
import { TimestreamQueryClient, TimestreamQueryClientConfig } from "./TimestreamQueryClient";

const commands = {
  CancelQueryCommand,
  CreateScheduledQueryCommand,
  DeleteScheduledQueryCommand,
  DescribeEndpointsCommand,
  DescribeScheduledQueryCommand,
  ExecuteScheduledQueryCommand,
  ListScheduledQueriesCommand,
  ListTagsForResourceCommand,
  PrepareQueryCommand,
  QueryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateScheduledQueryCommand,
};

export interface TimestreamQuery {
  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(args: CancelQueryCommandInput, options?: __HttpHandlerOptions): Promise<CancelQueryCommandOutput>;
  cancelQuery(args: CancelQueryCommandInput, cb: (err: any, data?: CancelQueryCommandOutput) => void): void;
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
   * @see {@link DescribeEndpointsCommand}
   */
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
  prepareQuery(args: PrepareQueryCommandInput, options?: __HttpHandlerOptions): Promise<PrepareQueryCommandOutput>;
  prepareQuery(args: PrepareQueryCommandInput, cb: (err: any, data?: PrepareQueryCommandOutput) => void): void;
  prepareQuery(
    args: PrepareQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryCommand}
   */
  query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
  query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
  query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
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
}

/**
 * @public
 * <fullname>Amazon Timestream Query
 *         </fullname>
 *         <p></p>
 */
export class TimestreamQuery extends TimestreamQueryClient implements TimestreamQuery {}
createAggregatedClient(commands, TimestreamQuery);

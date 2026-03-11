// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import { GetExportCommand, GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import {
  StartDomainExportCommand,
  StartDomainExportCommandInput,
  StartDomainExportCommandOutput,
} from "./commands/StartDomainExportCommand";
import { paginateListExports } from "./pagination/ListExportsPaginator";
import { SimpleDBv2Client } from "./SimpleDBv2Client";
import { waitUntilExportSucceeded } from "./waiters/waitForExportSucceeded";

const commands = {
  GetExportCommand,
  ListExportsCommand,
  StartDomainExportCommand,
};
const paginators = {
  paginateListExports,
};
const waiters = {
  waitUntilExportSucceeded,
};

export interface SimpleDBv2 {
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
   * @see {@link StartDomainExportCommand}
   */
  startDomainExport(
    args: StartDomainExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDomainExportCommandOutput>;
  startDomainExport(
    args: StartDomainExportCommandInput,
    cb: (err: any, data?: StartDomainExportCommandOutput) => void
  ): void;
  startDomainExport(
    args: StartDomainExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDomainExportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExportsCommandOutput}.
   */
  paginateListExports(
    args?: ListExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExportsCommandOutput>;

  /**
   * @see {@link GetExportCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilExportSucceeded(
    args: GetExportCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<SimpleDBv2>, "client">
  ): Promise<WaiterResult>;
}

/**
 * Amazon SimpleDB is a web service providing the core database functions of data indexing and
 *      querying in the cloud. By offloading the time and effort associated with building and operating a web-scale
 *      database, SimpleDB provides developers the freedom to focus on application development.
 *
 *      A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design,
 *      and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler,
 *      requiring no schema, automatically indexing your data and providing a simple API for storage and access.
 *      This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning.
 *      Developers gain access to this functionality within Amazon's proven computing environment, are able to scale
 *      instantly, and pay only for what they use.
 * @public
 */
export class SimpleDBv2 extends SimpleDBv2Client implements SimpleDBv2 {}
createAggregatedClient(commands, SimpleDBv2, { paginators, waiters });

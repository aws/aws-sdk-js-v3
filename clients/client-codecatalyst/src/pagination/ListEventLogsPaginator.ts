// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListEventLogsCommand,
  ListEventLogsCommandInput,
  ListEventLogsCommandOutput,
} from "../commands/ListEventLogsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventLogs: (
  config: CodeCatalystPaginationConfiguration,
  input: ListEventLogsCommandInput,
  ...rest: any[]
) => Paginator<ListEventLogsCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListEventLogsCommandInput,
  ListEventLogsCommandOutput
>(CodeCatalystClient, ListEventLogsCommand, "nextToken", "nextToken", "maxResults");

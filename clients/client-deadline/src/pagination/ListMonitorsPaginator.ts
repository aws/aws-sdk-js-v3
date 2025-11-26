// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "../commands/ListMonitorsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitors: (
  config: DeadlinePaginationConfiguration,
  input: ListMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitorsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput
>(DeadlineClient, ListMonitorsCommand, "nextToken", "nextToken", "maxResults");

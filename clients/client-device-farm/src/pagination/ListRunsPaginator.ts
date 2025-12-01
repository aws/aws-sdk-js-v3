// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuns: (
  config: DeviceFarmPaginationConfiguration,
  input: ListRunsCommandInput,
  ...rest: any[]
) => Paginator<ListRunsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListRunsCommandInput,
  ListRunsCommandOutput
>(DeviceFarmClient, ListRunsCommand, "nextToken", "nextToken", "");

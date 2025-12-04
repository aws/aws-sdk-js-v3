// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUniqueProblemsCommand,
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
} from "../commands/ListUniqueProblemsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUniqueProblems: (
  config: DeviceFarmPaginationConfiguration,
  input: ListUniqueProblemsCommandInput,
  ...rest: any[]
) => Paginator<ListUniqueProblemsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput
>(DeviceFarmClient, ListUniqueProblemsCommand, "nextToken", "nextToken", "");

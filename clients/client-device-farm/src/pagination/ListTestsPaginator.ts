// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTests: (
  config: DeviceFarmPaginationConfiguration,
  input: ListTestsCommandInput,
  ...rest: any[]
) => Paginator<ListTestsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListTestsCommandInput,
  ListTestsCommandOutput
>(DeviceFarmClient, ListTestsCommand, "nextToken", "nextToken", "");

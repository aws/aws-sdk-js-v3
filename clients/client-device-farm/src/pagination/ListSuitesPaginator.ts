// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSuitesCommand, ListSuitesCommandInput, ListSuitesCommandOutput } from "../commands/ListSuitesCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSuites: (
  config: DeviceFarmPaginationConfiguration,
  input: ListSuitesCommandInput,
  ...rest: any[]
) => Paginator<ListSuitesCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListSuitesCommandInput,
  ListSuitesCommandOutput
>(DeviceFarmClient, ListSuitesCommand, "nextToken", "nextToken", "");

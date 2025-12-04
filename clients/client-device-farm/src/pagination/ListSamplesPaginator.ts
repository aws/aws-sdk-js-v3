// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSamplesCommand, ListSamplesCommandInput, ListSamplesCommandOutput } from "../commands/ListSamplesCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSamples: (
  config: DeviceFarmPaginationConfiguration,
  input: ListSamplesCommandInput,
  ...rest: any[]
) => Paginator<ListSamplesCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListSamplesCommandInput,
  ListSamplesCommandOutput
>(DeviceFarmClient, ListSamplesCommand, "nextToken", "nextToken", "");

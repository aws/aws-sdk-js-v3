// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLaunchesCommand,
  ListLaunchesCommandInput,
  ListLaunchesCommandOutput,
} from "../commands/ListLaunchesCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLaunches: (
  config: EvidentlyPaginationConfiguration,
  input: ListLaunchesCommandInput,
  ...rest: any[]
) => Paginator<ListLaunchesCommandOutput> = createPaginator<
  EvidentlyPaginationConfiguration,
  ListLaunchesCommandInput,
  ListLaunchesCommandOutput
>(EvidentlyClient, ListLaunchesCommand, "nextToken", "nextToken", "maxResults");

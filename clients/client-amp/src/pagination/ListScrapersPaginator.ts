// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmpClient } from "../AmpClient";
import {
  ListScrapersCommand,
  ListScrapersCommandInput,
  ListScrapersCommandOutput,
} from "../commands/ListScrapersCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScrapers: (
  config: AmpPaginationConfiguration,
  input: ListScrapersCommandInput,
  ...rest: any[]
) => Paginator<ListScrapersCommandOutput> = createPaginator<
  AmpPaginationConfiguration,
  ListScrapersCommandInput,
  ListScrapersCommandOutput
>(AmpClient, ListScrapersCommand, "nextToken", "nextToken", "maxResults");

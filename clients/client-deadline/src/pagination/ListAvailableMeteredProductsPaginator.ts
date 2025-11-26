// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailableMeteredProductsCommand,
  ListAvailableMeteredProductsCommandInput,
  ListAvailableMeteredProductsCommandOutput,
} from "../commands/ListAvailableMeteredProductsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailableMeteredProducts: (
  config: DeadlinePaginationConfiguration,
  input: ListAvailableMeteredProductsCommandInput,
  ...rest: any[]
) => Paginator<ListAvailableMeteredProductsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListAvailableMeteredProductsCommandInput,
  ListAvailableMeteredProductsCommandOutput
>(DeadlineClient, ListAvailableMeteredProductsCommand, "nextToken", "nextToken", "maxResults");

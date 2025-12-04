// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMeteredProductsCommand,
  ListMeteredProductsCommandInput,
  ListMeteredProductsCommandOutput,
} from "../commands/ListMeteredProductsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMeteredProducts: (
  config: DeadlinePaginationConfiguration,
  input: ListMeteredProductsCommandInput,
  ...rest: any[]
) => Paginator<ListMeteredProductsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListMeteredProductsCommandInput,
  ListMeteredProductsCommandOutput
>(DeadlineClient, ListMeteredProductsCommand, "nextToken", "nextToken", "maxResults");

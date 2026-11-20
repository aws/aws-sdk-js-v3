// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListProductsCommand,
  ListProductsCommandInput,
  ListProductsCommandOutput,
} from "../commands/ListProductsCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProducts: (
  config: APIPortalPaginationConfiguration,
  input: ListProductsCommandInput,
  ...rest: any[]
) => Paginator<ListProductsCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListProductsCommandInput,
  ListProductsCommandOutput
>(APIPortalClient, ListProductsCommand, "nextToken", "nextToken", "maxResults");

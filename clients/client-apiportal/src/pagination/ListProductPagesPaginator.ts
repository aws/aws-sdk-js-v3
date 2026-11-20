// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListProductPagesCommand,
  ListProductPagesCommandInput,
  ListProductPagesCommandOutput,
} from "../commands/ListProductPagesCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProductPages: (
  config: APIPortalPaginationConfiguration,
  input: ListProductPagesCommandInput,
  ...rest: any[]
) => Paginator<ListProductPagesCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListProductPagesCommandInput,
  ListProductPagesCommandOutput
>(APIPortalClient, ListProductPagesCommand, "nextToken", "nextToken", "maxResults");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListProductApiPagesCommand,
  ListProductApiPagesCommandInput,
  ListProductApiPagesCommandOutput,
} from "../commands/ListProductApiPagesCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProductApiPages: (
  config: APIPortalPaginationConfiguration,
  input: ListProductApiPagesCommandInput,
  ...rest: any[]
) => Paginator<ListProductApiPagesCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListProductApiPagesCommandInput,
  ListProductApiPagesCommandOutput
>(APIPortalClient, ListProductApiPagesCommand, "nextToken", "nextToken", "maxResults");

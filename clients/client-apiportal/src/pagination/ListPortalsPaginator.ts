// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPortals: (
  config: APIPortalPaginationConfiguration,
  input: ListPortalsCommandInput,
  ...rest: any[]
) => Paginator<ListPortalsCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListPortalsCommandInput,
  ListPortalsCommandOutput
>(APIPortalClient, ListPortalsCommand, "nextToken", "nextToken", "maxResults");

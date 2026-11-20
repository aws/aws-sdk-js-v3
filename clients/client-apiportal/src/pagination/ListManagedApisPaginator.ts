// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListManagedApisCommand,
  ListManagedApisCommandInput,
  ListManagedApisCommandOutput,
} from "../commands/ListManagedApisCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedApis: (
  config: APIPortalPaginationConfiguration,
  input: ListManagedApisCommandInput,
  ...rest: any[]
) => Paginator<ListManagedApisCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListManagedApisCommandInput,
  ListManagedApisCommandOutput
>(APIPortalClient, ListManagedApisCommand, "nextToken", "nextToken", "maxResults");

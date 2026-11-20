// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListManagedApiEventsCommand,
  ListManagedApiEventsCommandInput,
  ListManagedApiEventsCommandOutput,
} from "../commands/ListManagedApiEventsCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedApiEvents: (
  config: APIPortalPaginationConfiguration,
  input: ListManagedApiEventsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedApiEventsCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListManagedApiEventsCommandInput,
  ListManagedApiEventsCommandOutput
>(APIPortalClient, ListManagedApiEventsCommand, "nextToken", "nextToken", "maxResults");

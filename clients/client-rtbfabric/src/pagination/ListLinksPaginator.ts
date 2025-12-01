// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLinksCommand, ListLinksCommandInput, ListLinksCommandOutput } from "../commands/ListLinksCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLinks: (
  config: RTBFabricPaginationConfiguration,
  input: ListLinksCommandInput,
  ...rest: any[]
) => Paginator<ListLinksCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListLinksCommandInput,
  ListLinksCommandOutput
>(RTBFabricClient, ListLinksCommand, "nextToken", "nextToken", "maxResults");

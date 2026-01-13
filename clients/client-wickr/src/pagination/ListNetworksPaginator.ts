// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "../commands/ListNetworksCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworks: (
  config: WickrPaginationConfiguration,
  input: ListNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListNetworksCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListNetworksCommandInput,
  ListNetworksCommandOutput
>(WickrClient, ListNetworksCommand, "nextToken", "nextToken", "maxResults");

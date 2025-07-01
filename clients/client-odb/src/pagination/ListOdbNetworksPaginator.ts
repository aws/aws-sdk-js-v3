// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListOdbNetworksCommand,
  ListOdbNetworksCommandInput,
  ListOdbNetworksCommandOutput,
} from "../commands/ListOdbNetworksCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOdbNetworks: (
  config: OdbPaginationConfiguration,
  input: ListOdbNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListOdbNetworksCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListOdbNetworksCommandInput,
  ListOdbNetworksCommandOutput
>(OdbClient, ListOdbNetworksCommand, "nextToken", "nextToken", "maxResults");

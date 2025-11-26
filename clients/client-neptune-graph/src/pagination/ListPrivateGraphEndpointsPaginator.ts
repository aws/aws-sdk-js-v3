// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrivateGraphEndpointsCommand,
  ListPrivateGraphEndpointsCommandInput,
  ListPrivateGraphEndpointsCommandOutput,
} from "../commands/ListPrivateGraphEndpointsCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";
import { NeptuneGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrivateGraphEndpoints: (
  config: NeptuneGraphPaginationConfiguration,
  input: ListPrivateGraphEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListPrivateGraphEndpointsCommandOutput> = createPaginator<
  NeptuneGraphPaginationConfiguration,
  ListPrivateGraphEndpointsCommandInput,
  ListPrivateGraphEndpointsCommandOutput
>(NeptuneGraphClient, ListPrivateGraphEndpointsCommand, "nextToken", "nextToken", "maxResults");

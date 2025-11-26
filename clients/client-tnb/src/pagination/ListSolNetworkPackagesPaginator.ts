// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolNetworkPackagesCommand,
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
} from "../commands/ListSolNetworkPackagesCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolNetworkPackages: (
  config: TnbPaginationConfiguration,
  input: ListSolNetworkPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListSolNetworkPackagesCommandOutput> = createPaginator<
  TnbPaginationConfiguration,
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput
>(TnbClient, ListSolNetworkPackagesCommand, "nextToken", "nextToken", "maxResults");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolFunctionPackagesCommand,
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput,
} from "../commands/ListSolFunctionPackagesCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolFunctionPackages: (
  config: TnbPaginationConfiguration,
  input: ListSolFunctionPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListSolFunctionPackagesCommandOutput> = createPaginator<
  TnbPaginationConfiguration,
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput
>(TnbClient, ListSolFunctionPackagesCommand, "nextToken", "nextToken", "maxResults");

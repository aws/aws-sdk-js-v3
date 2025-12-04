// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListVaultsCommand, ListVaultsCommandInput, ListVaultsCommandOutput } from "../commands/ListVaultsCommand";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVaults: (
  config: GlacierPaginationConfiguration,
  input: ListVaultsCommandInput,
  ...rest: any[]
) => Paginator<ListVaultsCommandOutput> = createPaginator<
  GlacierPaginationConfiguration,
  ListVaultsCommandInput,
  ListVaultsCommandOutput
>(GlacierClient, ListVaultsCommand, "marker", "Marker", "limit");

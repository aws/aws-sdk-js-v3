// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListCrlsCommand, ListCrlsCommandInput, ListCrlsCommandOutput } from "../commands/ListCrlsCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCrls: (
  config: RolesAnywherePaginationConfiguration,
  input: ListCrlsCommandInput,
  ...rest: any[]
) => Paginator<ListCrlsCommandOutput> = createPaginator<
  RolesAnywherePaginationConfiguration,
  ListCrlsCommandInput,
  ListCrlsCommandOutput
>(RolesAnywhereClient, ListCrlsCommand, "nextToken", "nextToken", "");

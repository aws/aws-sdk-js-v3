// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccountClient } from "../AccountClient";
import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "../commands/ListRegionsCommand";
import { AccountPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegions: (
  config: AccountPaginationConfiguration,
  input: ListRegionsCommandInput,
  ...rest: any[]
) => Paginator<ListRegionsCommandOutput> = createPaginator<
  AccountPaginationConfiguration,
  ListRegionsCommandInput,
  ListRegionsCommandOutput
>(AccountClient, ListRegionsCommand, "NextToken", "NextToken", "MaxResults");

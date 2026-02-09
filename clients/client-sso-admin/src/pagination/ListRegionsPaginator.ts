// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "../commands/ListRegionsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegions: (
  config: SSOAdminPaginationConfiguration,
  input: ListRegionsCommandInput,
  ...rest: any[]
) => Paginator<ListRegionsCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListRegionsCommandInput,
  ListRegionsCommandOutput
>(SSOAdminClient, ListRegionsCommand, "NextToken", "NextToken", "MaxResults");

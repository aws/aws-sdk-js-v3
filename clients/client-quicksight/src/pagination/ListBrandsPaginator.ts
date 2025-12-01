// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBrandsCommand, ListBrandsCommandInput, ListBrandsCommandOutput } from "../commands/ListBrandsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrands: (
  config: QuickSightPaginationConfiguration,
  input: ListBrandsCommandInput,
  ...rest: any[]
) => Paginator<ListBrandsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListBrandsCommandInput,
  ListBrandsCommandOutput
>(QuickSightClient, ListBrandsCommand, "NextToken", "NextToken", "MaxResults");

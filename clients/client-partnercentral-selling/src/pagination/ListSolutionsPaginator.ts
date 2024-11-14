// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
} from "../commands/ListSolutionsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolutions: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListSolutionsCommandInput,
  ...rest: any[]
) => Paginator<ListSolutionsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput
>(PartnerCentralSellingClient, ListSolutionsCommand, "NextToken", "NextToken", "MaxResults");

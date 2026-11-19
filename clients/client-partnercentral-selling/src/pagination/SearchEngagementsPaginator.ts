// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchEngagementsCommand,
  SearchEngagementsCommandInput,
  SearchEngagementsCommandOutput,
} from "../commands/SearchEngagementsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchEngagements: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: SearchEngagementsCommandInput,
  ...rest: any[]
) => Paginator<SearchEngagementsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  SearchEngagementsCommandInput,
  SearchEngagementsCommandOutput
>(PartnerCentralSellingClient, SearchEngagementsCommand, "NextToken", "NextToken", "MaxResults");

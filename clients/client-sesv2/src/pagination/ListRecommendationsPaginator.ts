// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendations: (
  config: SESv2PaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput
>(SESv2Client, ListRecommendationsCommand, "NextToken", "NextToken", "PageSize");

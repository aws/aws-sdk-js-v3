// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationTemplatesCommand,
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "../commands/ListRecommendationTemplatesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendationTemplates: (
  config: ResiliencehubPaginationConfiguration,
  input: ListRecommendationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationTemplatesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput
>(ResiliencehubClient, ListRecommendationTemplatesCommand, "nextToken", "nextToken", "maxResults");

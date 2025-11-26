// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BCMRecommendedActionsClient } from "../BCMRecommendedActionsClient";
import {
  ListRecommendedActionsCommand,
  ListRecommendedActionsCommandInput,
  ListRecommendedActionsCommandOutput,
} from "../commands/ListRecommendedActionsCommand";
import { BCMRecommendedActionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendedActions: (
  config: BCMRecommendedActionsPaginationConfiguration,
  input: ListRecommendedActionsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendedActionsCommandOutput> = createPaginator<
  BCMRecommendedActionsPaginationConfiguration,
  ListRecommendedActionsCommandInput,
  ListRecommendedActionsCommandOutput
>(BCMRecommendedActionsClient, ListRecommendedActionsCommand, "nextToken", "nextToken", "maxResults");

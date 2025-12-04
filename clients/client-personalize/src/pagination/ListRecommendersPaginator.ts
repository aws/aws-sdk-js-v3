// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendersCommand,
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput,
} from "../commands/ListRecommendersCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommenders: (
  config: PersonalizePaginationConfiguration,
  input: ListRecommendersCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendersCommandOutput> = createPaginator<
  PersonalizePaginationConfiguration,
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput
>(PersonalizeClient, ListRecommendersCommand, "nextToken", "nextToken", "maxResults");

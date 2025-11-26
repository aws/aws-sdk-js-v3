// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLensReviewImprovementsCommand,
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "../commands/ListLensReviewImprovementsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLensReviewImprovements: (
  config: WellArchitectedPaginationConfiguration,
  input: ListLensReviewImprovementsCommandInput,
  ...rest: any[]
) => Paginator<ListLensReviewImprovementsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput
>(WellArchitectedClient, ListLensReviewImprovementsCommand, "NextToken", "NextToken", "MaxResults");

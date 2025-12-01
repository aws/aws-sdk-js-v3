// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLensReviewsCommand,
  ListLensReviewsCommandInput,
  ListLensReviewsCommandOutput,
} from "../commands/ListLensReviewsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLensReviews: (
  config: WellArchitectedPaginationConfiguration,
  input: ListLensReviewsCommandInput,
  ...rest: any[]
) => Paginator<ListLensReviewsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListLensReviewsCommandInput,
  ListLensReviewsCommandOutput
>(WellArchitectedClient, ListLensReviewsCommand, "NextToken", "NextToken", "MaxResults");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReviewTemplatesCommand,
  ListReviewTemplatesCommandInput,
  ListReviewTemplatesCommandOutput,
} from "../commands/ListReviewTemplatesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReviewTemplates: (
  config: WellArchitectedPaginationConfiguration,
  input: ListReviewTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListReviewTemplatesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListReviewTemplatesCommandInput,
  ListReviewTemplatesCommandOutput
>(WellArchitectedClient, ListReviewTemplatesCommand, "NextToken", "NextToken", "MaxResults");

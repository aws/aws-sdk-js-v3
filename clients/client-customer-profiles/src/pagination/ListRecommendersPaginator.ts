// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendersCommand,
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput,
} from "../commands/ListRecommendersCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommenders: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListRecommendersCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendersCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput
>(CustomerProfilesClient, ListRecommendersCommand, "NextToken", "NextToken", "MaxResults");

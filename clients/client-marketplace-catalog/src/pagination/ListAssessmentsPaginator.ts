// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentsCommand,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput,
} from "../commands/ListAssessmentsCommand";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import type { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessments: (
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentsCommandOutput> = createPaginator<
  MarketplaceCatalogPaginationConfiguration,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput
>(MarketplaceCatalogClient, ListAssessmentsCommand, "NextToken", "NextToken", "MaxResults");

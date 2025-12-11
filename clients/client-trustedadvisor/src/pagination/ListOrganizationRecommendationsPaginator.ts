// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationRecommendationsCommand,
  ListOrganizationRecommendationsCommandInput,
  ListOrganizationRecommendationsCommandOutput,
} from "../commands/ListOrganizationRecommendationsCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationRecommendations: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListOrganizationRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationRecommendationsCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListOrganizationRecommendationsCommandInput,
  ListOrganizationRecommendationsCommandOutput
>(TrustedAdvisorClient, ListOrganizationRecommendationsCommand, "nextToken", "nextToken", "maxResults");

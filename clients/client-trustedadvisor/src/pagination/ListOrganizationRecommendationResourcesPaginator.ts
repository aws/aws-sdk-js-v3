// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationRecommendationResourcesCommand,
  ListOrganizationRecommendationResourcesCommandInput,
  ListOrganizationRecommendationResourcesCommandOutput,
} from "../commands/ListOrganizationRecommendationResourcesCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationRecommendationResources: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListOrganizationRecommendationResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationRecommendationResourcesCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListOrganizationRecommendationResourcesCommandInput,
  ListOrganizationRecommendationResourcesCommandOutput
>(TrustedAdvisorClient, ListOrganizationRecommendationResourcesCommand, "nextToken", "nextToken", "maxResults");

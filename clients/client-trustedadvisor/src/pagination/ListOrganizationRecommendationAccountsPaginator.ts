// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationRecommendationAccountsCommand,
  ListOrganizationRecommendationAccountsCommandInput,
  ListOrganizationRecommendationAccountsCommandOutput,
} from "../commands/ListOrganizationRecommendationAccountsCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationRecommendationAccounts: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListOrganizationRecommendationAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationRecommendationAccountsCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListOrganizationRecommendationAccountsCommandInput,
  ListOrganizationRecommendationAccountsCommandOutput
>(TrustedAdvisorClient, ListOrganizationRecommendationAccountsCommand, "nextToken", "nextToken", "maxResults");

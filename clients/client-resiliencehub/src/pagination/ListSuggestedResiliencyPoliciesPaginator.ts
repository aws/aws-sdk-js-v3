// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSuggestedResiliencyPoliciesCommand,
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput,
} from "../commands/ListSuggestedResiliencyPoliciesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSuggestedResiliencyPolicies: (
  config: ResiliencehubPaginationConfiguration,
  input: ListSuggestedResiliencyPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListSuggestedResiliencyPoliciesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput
>(ResiliencehubClient, ListSuggestedResiliencyPoliciesCommand, "nextToken", "nextToken", "maxResults");

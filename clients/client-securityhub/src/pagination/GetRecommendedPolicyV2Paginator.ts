// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRecommendedPolicyV2Command,
  GetRecommendedPolicyV2CommandInput,
  GetRecommendedPolicyV2CommandOutput,
} from "../commands/GetRecommendedPolicyV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRecommendedPolicyV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetRecommendedPolicyV2CommandInput,
  ...rest: any[]
) => Paginator<GetRecommendedPolicyV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetRecommendedPolicyV2CommandInput,
  GetRecommendedPolicyV2CommandOutput
>(SecurityHubClient, GetRecommendedPolicyV2Command, "NextToken", "NextToken", "MaxResults");

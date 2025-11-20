// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetFindingsTrendsV2Command,
  GetFindingsTrendsV2CommandInput,
  GetFindingsTrendsV2CommandOutput,
} from "../commands/GetFindingsTrendsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindingsTrendsV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetFindingsTrendsV2CommandInput,
  ...rest: any[]
) => Paginator<GetFindingsTrendsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetFindingsTrendsV2CommandInput,
  GetFindingsTrendsV2CommandOutput
>(SecurityHubClient, GetFindingsTrendsV2Command, "NextToken", "NextToken", "MaxResults");

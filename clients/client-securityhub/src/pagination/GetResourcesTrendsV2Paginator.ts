// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourcesTrendsV2Command,
  GetResourcesTrendsV2CommandInput,
  GetResourcesTrendsV2CommandOutput,
} from "../commands/GetResourcesTrendsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourcesTrendsV2: (
  config: SecurityHubPaginationConfiguration,
  input: GetResourcesTrendsV2CommandInput,
  ...rest: any[]
) => Paginator<GetResourcesTrendsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetResourcesTrendsV2CommandInput,
  GetResourcesTrendsV2CommandOutput
>(SecurityHubClient, GetResourcesTrendsV2Command, "NextToken", "NextToken", "MaxResults");

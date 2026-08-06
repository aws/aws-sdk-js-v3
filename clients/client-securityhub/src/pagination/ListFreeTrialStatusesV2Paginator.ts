// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFreeTrialStatusesV2Command,
  ListFreeTrialStatusesV2CommandInput,
  ListFreeTrialStatusesV2CommandOutput,
} from "../commands/ListFreeTrialStatusesV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFreeTrialStatusesV2: (
  config: SecurityHubPaginationConfiguration,
  input: ListFreeTrialStatusesV2CommandInput,
  ...rest: any[]
) => Paginator<ListFreeTrialStatusesV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListFreeTrialStatusesV2CommandInput,
  ListFreeTrialStatusesV2CommandOutput
>(SecurityHubClient, ListFreeTrialStatusesV2Command, "NextToken", "NextToken", "MaxResults");

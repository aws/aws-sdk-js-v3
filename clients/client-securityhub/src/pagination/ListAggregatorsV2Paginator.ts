// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAggregatorsV2Command,
  ListAggregatorsV2CommandInput,
  ListAggregatorsV2CommandOutput,
} from "../commands/ListAggregatorsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAggregatorsV2: (
  config: SecurityHubPaginationConfiguration,
  input: ListAggregatorsV2CommandInput,
  ...rest: any[]
) => Paginator<ListAggregatorsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListAggregatorsV2CommandInput,
  ListAggregatorsV2CommandOutput
>(SecurityHubClient, ListAggregatorsV2Command, "NextToken", "NextToken", "MaxResults");

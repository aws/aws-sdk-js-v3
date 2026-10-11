// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExportJobsV2Command,
  ListExportJobsV2CommandInput,
  ListExportJobsV2CommandOutput,
} from "../commands/ListExportJobsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import type { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExportJobsV2: (
  config: SecurityHubPaginationConfiguration,
  input: ListExportJobsV2CommandInput,
  ...rest: any[]
) => Paginator<ListExportJobsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListExportJobsV2CommandInput,
  ListExportJobsV2CommandOutput
>(SecurityHubClient, ListExportJobsV2Command, "NextToken", "NextToken", "MaxResults");

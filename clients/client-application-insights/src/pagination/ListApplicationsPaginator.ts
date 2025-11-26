// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(ApplicationInsightsClient, ListApplicationsCommand, "NextToken", "NextToken", "MaxResults");

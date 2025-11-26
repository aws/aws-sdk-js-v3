// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListConfigurationHistoryCommand,
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
} from "../commands/ListConfigurationHistoryCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationHistory: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListConfigurationHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationHistoryCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput
>(ApplicationInsightsClient, ListConfigurationHistoryCommand, "NextToken", "NextToken", "MaxResults");

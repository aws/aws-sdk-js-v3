// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "../commands/ListWorkloadsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloads: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListWorkloadsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadsCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput
>(ApplicationInsightsClient, ListWorkloadsCommand, "NextToken", "NextToken", "MaxResults");

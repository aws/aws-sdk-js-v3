// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationCostProfilerClient } from "../ApplicationCostProfilerClient";
import {
  ListReportDefinitionsCommand,
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
} from "../commands/ListReportDefinitionsCommand";
import { ApplicationCostProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReportDefinitions: (
  config: ApplicationCostProfilerPaginationConfiguration,
  input: ListReportDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListReportDefinitionsCommandOutput> = createPaginator<
  ApplicationCostProfilerPaginationConfiguration,
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput
>(ApplicationCostProfilerClient, ListReportDefinitionsCommand, "nextToken", "nextToken", "maxResults");

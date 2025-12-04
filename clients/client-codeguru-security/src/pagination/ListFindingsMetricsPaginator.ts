// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruSecurityClient } from "../CodeGuruSecurityClient";
import {
  ListFindingsMetricsCommand,
  ListFindingsMetricsCommandInput,
  ListFindingsMetricsCommandOutput,
} from "../commands/ListFindingsMetricsCommand";
import { CodeGuruSecurityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindingsMetrics: (
  config: CodeGuruSecurityPaginationConfiguration,
  input: ListFindingsMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingsMetricsCommandOutput> = createPaginator<
  CodeGuruSecurityPaginationConfiguration,
  ListFindingsMetricsCommandInput,
  ListFindingsMetricsCommandOutput
>(CodeGuruSecurityClient, ListFindingsMetricsCommand, "nextToken", "nextToken", "maxResults");

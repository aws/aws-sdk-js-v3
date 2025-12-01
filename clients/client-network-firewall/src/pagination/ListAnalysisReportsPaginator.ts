// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnalysisReportsCommand,
  ListAnalysisReportsCommandInput,
  ListAnalysisReportsCommandOutput,
} from "../commands/ListAnalysisReportsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalysisReports: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListAnalysisReportsCommandInput,
  ...rest: any[]
) => Paginator<ListAnalysisReportsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListAnalysisReportsCommandInput,
  ListAnalysisReportsCommandOutput
>(NetworkFirewallClient, ListAnalysisReportsCommand, "NextToken", "NextToken", "MaxResults");

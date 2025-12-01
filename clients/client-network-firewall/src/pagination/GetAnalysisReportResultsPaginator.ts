// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAnalysisReportResultsCommand,
  GetAnalysisReportResultsCommandInput,
  GetAnalysisReportResultsCommandOutput,
} from "../commands/GetAnalysisReportResultsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAnalysisReportResults: (
  config: NetworkFirewallPaginationConfiguration,
  input: GetAnalysisReportResultsCommandInput,
  ...rest: any[]
) => Paginator<GetAnalysisReportResultsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  GetAnalysisReportResultsCommandInput,
  GetAnalysisReportResultsCommandOutput
>(NetworkFirewallClient, GetAnalysisReportResultsCommand, "NextToken", "NextToken", "MaxResults");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
} from "../commands/GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetNetworkInsightsAccessScopeAnalysisFindings: (
  config: EC2PaginationConfiguration,
  input: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  ...rest: any[]
) => Paginator<GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput
>(EC2Client, GetNetworkInsightsAccessScopeAnalysisFindingsCommand, "NextToken", "NextToken", "MaxResults");

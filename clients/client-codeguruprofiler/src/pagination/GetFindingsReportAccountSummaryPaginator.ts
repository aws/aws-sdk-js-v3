// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient";
import {
  GetFindingsReportAccountSummaryCommand,
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "../commands/GetFindingsReportAccountSummaryCommand";
import { CodeGuruProfilerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindingsReportAccountSummary: (
  config: CodeGuruProfilerPaginationConfiguration,
  input: GetFindingsReportAccountSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetFindingsReportAccountSummaryCommandOutput> = createPaginator<
  CodeGuruProfilerPaginationConfiguration,
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput
>(CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand, "nextToken", "nextToken", "maxResults");

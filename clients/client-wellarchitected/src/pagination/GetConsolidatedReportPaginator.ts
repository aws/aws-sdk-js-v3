// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetConsolidatedReportCommand,
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
} from "../commands/GetConsolidatedReportCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConsolidatedReport: (
  config: WellArchitectedPaginationConfiguration,
  input: GetConsolidatedReportCommandInput,
  ...rest: any[]
) => Paginator<GetConsolidatedReportCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput
>(WellArchitectedClient, GetConsolidatedReportCommand, "NextToken", "NextToken", "MaxResults");

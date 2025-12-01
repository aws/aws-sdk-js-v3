// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCellReadinessSummaryCommand,
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput,
} from "../commands/GetCellReadinessSummaryCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCellReadinessSummary: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: GetCellReadinessSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetCellReadinessSummaryCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput
>(Route53RecoveryReadinessClient, GetCellReadinessSummaryCommand, "NextToken", "NextToken", "MaxResults");

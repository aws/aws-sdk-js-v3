// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRecoveryGroupReadinessSummaryCommand,
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput,
} from "../commands/GetRecoveryGroupReadinessSummaryCommand";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRecoveryGroupReadinessSummary: (
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: GetRecoveryGroupReadinessSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetRecoveryGroupReadinessSummaryCommandOutput> = createPaginator<
  Route53RecoveryReadinessPaginationConfiguration,
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput
>(Route53RecoveryReadinessClient, GetRecoveryGroupReadinessSummaryCommand, "NextToken", "NextToken", "MaxResults");

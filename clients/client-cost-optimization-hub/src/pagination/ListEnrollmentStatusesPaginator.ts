// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnrollmentStatusesCommand,
  ListEnrollmentStatusesCommandInput,
  ListEnrollmentStatusesCommandOutput,
} from "../commands/ListEnrollmentStatusesCommand";
import { CostOptimizationHubClient } from "../CostOptimizationHubClient";
import { CostOptimizationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnrollmentStatuses: (
  config: CostOptimizationHubPaginationConfiguration,
  input: ListEnrollmentStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListEnrollmentStatusesCommandOutput> = createPaginator<
  CostOptimizationHubPaginationConfiguration,
  ListEnrollmentStatusesCommandInput,
  ListEnrollmentStatusesCommandOutput
>(CostOptimizationHubClient, ListEnrollmentStatusesCommand, "nextToken", "nextToken", "maxResults");

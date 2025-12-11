// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEnrollmentStatusesForOrganizationCommand,
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput,
} from "../commands/GetEnrollmentStatusesForOrganizationCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEnrollmentStatusesForOrganization: (
  config: ComputeOptimizerPaginationConfiguration,
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<GetEnrollmentStatusesForOrganizationCommandOutput> = createPaginator<
  ComputeOptimizerPaginationConfiguration,
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput
>(ComputeOptimizerClient, GetEnrollmentStatusesForOrganizationCommand, "nextToken", "nextToken", "maxResults");

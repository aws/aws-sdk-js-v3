// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "../commands/GetComplianceSummaryCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetComplianceSummary: (
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetComplianceSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetComplianceSummaryCommandOutput> = createPaginator<
  ResourceGroupsTaggingAPIPaginationConfiguration,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput
>(ResourceGroupsTaggingAPIClient, GetComplianceSummaryCommand, "PaginationToken", "PaginationToken", "MaxResults");

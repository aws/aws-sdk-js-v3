// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComplianceSummariesCommand,
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "../commands/ListComplianceSummariesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComplianceSummaries: (
  config: SSMPaginationConfiguration,
  input: ListComplianceSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListComplianceSummariesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput
>(SSMClient, ListComplianceSummariesCommand, "NextToken", "NextToken", "MaxResults");

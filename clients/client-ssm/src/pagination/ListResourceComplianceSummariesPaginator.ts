// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceComplianceSummariesCommand,
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "../commands/ListResourceComplianceSummariesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceComplianceSummaries: (
  config: SSMPaginationConfiguration,
  input: ListResourceComplianceSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceComplianceSummariesCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput
>(SSMClient, ListResourceComplianceSummariesCommand, "NextToken", "NextToken", "MaxResults");

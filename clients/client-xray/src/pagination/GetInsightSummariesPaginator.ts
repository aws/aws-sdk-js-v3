// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInsightSummariesCommand,
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "../commands/GetInsightSummariesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInsightSummaries: (
  config: XRayPaginationConfiguration,
  input: GetInsightSummariesCommandInput,
  ...rest: any[]
) => Paginator<GetInsightSummariesCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput
>(XRayClient, GetInsightSummariesCommand, "NextToken", "NextToken", "MaxResults");

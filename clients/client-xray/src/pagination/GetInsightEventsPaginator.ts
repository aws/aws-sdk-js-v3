// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInsightEventsCommand,
  GetInsightEventsCommandInput,
  GetInsightEventsCommandOutput,
} from "../commands/GetInsightEventsCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInsightEvents: (
  config: XRayPaginationConfiguration,
  input: GetInsightEventsCommandInput,
  ...rest: any[]
) => Paginator<GetInsightEventsCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetInsightEventsCommandInput,
  GetInsightEventsCommandOutput
>(XRayClient, GetInsightEventsCommand, "NextToken", "NextToken", "MaxResults");

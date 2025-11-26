// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSamplingStatisticSummariesCommand,
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
} from "../commands/GetSamplingStatisticSummariesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSamplingStatisticSummaries: (
  config: XRayPaginationConfiguration,
  input: GetSamplingStatisticSummariesCommandInput,
  ...rest: any[]
) => Paginator<GetSamplingStatisticSummariesCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput
>(XRayClient, GetSamplingStatisticSummariesCommand, "NextToken", "NextToken", "");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTraceSummariesCommand,
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
} from "../commands/GetTraceSummariesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTraceSummaries: (
  config: XRayPaginationConfiguration,
  input: GetTraceSummariesCommandInput,
  ...rest: any[]
) => Paginator<GetTraceSummariesCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput
>(XRayClient, GetTraceSummariesCommand, "NextToken", "NextToken", "");

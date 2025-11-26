// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTraceGraphCommand,
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput,
} from "../commands/GetTraceGraphCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTraceGraph: (
  config: XRayPaginationConfiguration,
  input: GetTraceGraphCommandInput,
  ...rest: any[]
) => Paginator<GetTraceGraphCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput
>(XRayClient, GetTraceGraphCommand, "NextToken", "NextToken", "");

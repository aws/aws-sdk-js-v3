// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  BatchGetTracesCommand,
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
} from "../commands/BatchGetTracesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateBatchGetTraces: (
  config: XRayPaginationConfiguration,
  input: BatchGetTracesCommandInput,
  ...rest: any[]
) => Paginator<BatchGetTracesCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput
>(XRayClient, BatchGetTracesCommand, "NextToken", "NextToken", "");

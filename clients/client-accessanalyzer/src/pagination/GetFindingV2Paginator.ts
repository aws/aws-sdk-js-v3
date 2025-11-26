// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  GetFindingV2Command,
  GetFindingV2CommandInput,
  GetFindingV2CommandOutput,
} from "../commands/GetFindingV2Command";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindingV2: (
  config: AccessAnalyzerPaginationConfiguration,
  input: GetFindingV2CommandInput,
  ...rest: any[]
) => Paginator<GetFindingV2CommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  GetFindingV2CommandInput,
  GetFindingV2CommandOutput
>(AccessAnalyzerClient, GetFindingV2Command, "nextToken", "nextToken", "maxResults");

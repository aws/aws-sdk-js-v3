// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSamplingRulesCommand,
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
} from "../commands/GetSamplingRulesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSamplingRules: (
  config: XRayPaginationConfiguration,
  input: GetSamplingRulesCommandInput,
  ...rest: any[]
) => Paginator<GetSamplingRulesCommandOutput> = createPaginator<
  XRayPaginationConfiguration,
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput
>(XRayClient, GetSamplingRulesCommand, "NextToken", "NextToken", "");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePullThroughCacheRulesCommand,
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
} from "../commands/DescribePullThroughCacheRulesCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePullThroughCacheRules: (
  config: ECRPaginationConfiguration,
  input: DescribePullThroughCacheRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribePullThroughCacheRulesCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput
>(ECRClient, DescribePullThroughCacheRulesCommand, "nextToken", "nextToken", "maxResults");

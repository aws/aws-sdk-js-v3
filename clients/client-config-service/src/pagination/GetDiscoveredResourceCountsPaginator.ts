// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDiscoveredResourceCountsCommand,
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "../commands/GetDiscoveredResourceCountsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDiscoveredResourceCounts: (
  config: ConfigServicePaginationConfiguration,
  input: GetDiscoveredResourceCountsCommandInput,
  ...rest: any[]
) => Paginator<GetDiscoveredResourceCountsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput
>(ConfigServiceClient, GetDiscoveredResourceCountsCommand, "nextToken", "nextToken", "limit");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetNetworkResourceCountsCommand,
  GetNetworkResourceCountsCommandInput,
  GetNetworkResourceCountsCommandOutput,
} from "../commands/GetNetworkResourceCountsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetNetworkResourceCounts: (
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkResourceCountsCommandInput,
  ...rest: any[]
) => Paginator<GetNetworkResourceCountsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetNetworkResourceCountsCommandInput,
  GetNetworkResourceCountsCommandOutput
>(NetworkManagerClient, GetNetworkResourceCountsCommand, "NextToken", "NextToken", "MaxResults");

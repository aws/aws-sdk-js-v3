// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetNetworkResourcesCommand,
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput,
} from "../commands/GetNetworkResourcesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetNetworkResources: (
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkResourcesCommandInput,
  ...rest: any[]
) => Paginator<GetNetworkResourcesCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput
>(NetworkManagerClient, GetNetworkResourcesCommand, "NextToken", "NextToken", "MaxResults");

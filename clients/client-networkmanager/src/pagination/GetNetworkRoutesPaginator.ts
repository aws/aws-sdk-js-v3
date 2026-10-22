// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetNetworkRoutesCommand,
  GetNetworkRoutesCommandInput,
  GetNetworkRoutesCommandOutput,
} from "../commands/GetNetworkRoutesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import type { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetNetworkRoutes: (
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkRoutesCommandInput,
  ...rest: any[]
) => Paginator<GetNetworkRoutesCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetNetworkRoutesCommandInput,
  GetNetworkRoutesCommandOutput
>(NetworkManagerClient, GetNetworkRoutesCommand, "NextToken", "NextToken", "MaxResults");

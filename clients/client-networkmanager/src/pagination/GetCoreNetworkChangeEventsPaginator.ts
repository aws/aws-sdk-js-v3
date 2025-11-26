// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCoreNetworkChangeEventsCommand,
  GetCoreNetworkChangeEventsCommandInput,
  GetCoreNetworkChangeEventsCommandOutput,
} from "../commands/GetCoreNetworkChangeEventsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCoreNetworkChangeEvents: (
  config: NetworkManagerPaginationConfiguration,
  input: GetCoreNetworkChangeEventsCommandInput,
  ...rest: any[]
) => Paginator<GetCoreNetworkChangeEventsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetCoreNetworkChangeEventsCommandInput,
  GetCoreNetworkChangeEventsCommandOutput
>(NetworkManagerClient, GetCoreNetworkChangeEventsCommand, "NextToken", "NextToken", "MaxResults");

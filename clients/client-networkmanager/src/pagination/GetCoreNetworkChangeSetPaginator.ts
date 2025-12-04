// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCoreNetworkChangeSetCommand,
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput,
} from "../commands/GetCoreNetworkChangeSetCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCoreNetworkChangeSet: (
  config: NetworkManagerPaginationConfiguration,
  input: GetCoreNetworkChangeSetCommandInput,
  ...rest: any[]
) => Paginator<GetCoreNetworkChangeSetCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput
>(NetworkManagerClient, GetCoreNetworkChangeSetCommand, "NextToken", "NextToken", "MaxResults");

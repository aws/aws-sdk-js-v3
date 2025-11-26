// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "../commands/GetConnectionsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConnections: (
  config: NetworkManagerPaginationConfiguration,
  input: GetConnectionsCommandInput,
  ...rest: any[]
) => Paginator<GetConnectionsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput
>(NetworkManagerClient, GetConnectionsCommand, "NextToken", "NextToken", "MaxResults");

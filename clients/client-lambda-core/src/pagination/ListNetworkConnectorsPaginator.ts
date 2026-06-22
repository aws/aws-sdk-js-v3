// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkConnectorsCommand,
  ListNetworkConnectorsCommandInput,
  ListNetworkConnectorsCommandOutput,
} from "../commands/ListNetworkConnectorsCommand";
import { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkConnectors: (
  config: LambdaCorePaginationConfiguration,
  input: ListNetworkConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkConnectorsCommandOutput> = createPaginator<
  LambdaCorePaginationConfiguration,
  ListNetworkConnectorsCommandInput,
  ListNetworkConnectorsCommandOutput
>(LambdaCoreClient, ListNetworkConnectorsCommand, "Marker", "NextMarker", "MaxItems");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResponderGatewaysCommand,
  ListResponderGatewaysCommandInput,
  ListResponderGatewaysCommandOutput,
} from "../commands/ListResponderGatewaysCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResponderGateways: (
  config: RTBFabricPaginationConfiguration,
  input: ListResponderGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListResponderGatewaysCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListResponderGatewaysCommandInput,
  ListResponderGatewaysCommandOutput
>(RTBFabricClient, ListResponderGatewaysCommand, "nextToken", "nextToken", "maxResults");

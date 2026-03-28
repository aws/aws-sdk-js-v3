// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRequesterGatewaysCommand,
  ListRequesterGatewaysCommandInput,
  ListRequesterGatewaysCommandOutput,
} from "../commands/ListRequesterGatewaysCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import type { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRequesterGateways: (
  config: RTBFabricPaginationConfiguration,
  input: ListRequesterGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListRequesterGatewaysCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListRequesterGatewaysCommandInput,
  ListRequesterGatewaysCommandOutput
>(RTBFabricClient, ListRequesterGatewaysCommand, "nextToken", "nextToken", "maxResults");

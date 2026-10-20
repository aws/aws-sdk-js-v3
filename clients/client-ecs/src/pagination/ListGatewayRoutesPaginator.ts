// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGatewayRoutesCommand,
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
} from "../commands/ListGatewayRoutesCommand";
import { ECSClient } from "../ECSClient";
import type { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayRoutes: (
  config: ECSPaginationConfiguration,
  input: ListGatewayRoutesCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayRoutesCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput
>(ECSClient, ListGatewayRoutesCommand, "nextToken", "nextToken", "maxResults");

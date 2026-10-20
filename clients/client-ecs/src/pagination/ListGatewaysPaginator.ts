// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { ECSClient } from "../ECSClient";
import type { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGateways: (
  config: ECSPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListGatewaysCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput
>(ECSClient, ListGatewaysCommand, "nextToken", "nextToken", "maxResults");

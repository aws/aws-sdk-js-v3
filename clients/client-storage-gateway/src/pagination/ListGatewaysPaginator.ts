// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGateways: (
  config: StorageGatewayPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...rest: any[]
) => Paginator<ListGatewaysCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput
>(StorageGatewayClient, ListGatewaysCommand, "Marker", "Marker", "Limit");

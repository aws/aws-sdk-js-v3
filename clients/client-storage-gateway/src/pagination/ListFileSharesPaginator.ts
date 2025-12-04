// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFileSharesCommand,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput,
} from "../commands/ListFileSharesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFileShares: (
  config: StorageGatewayPaginationConfiguration,
  input: ListFileSharesCommandInput,
  ...rest: any[]
) => Paginator<ListFileSharesCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListFileSharesCommandInput,
  ListFileSharesCommandOutput
>(StorageGatewayClient, ListFileSharesCommand, "Marker", "NextMarker", "Limit");

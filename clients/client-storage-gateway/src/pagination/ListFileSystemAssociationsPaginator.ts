// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFileSystemAssociationsCommand,
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
} from "../commands/ListFileSystemAssociationsCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFileSystemAssociations: (
  config: StorageGatewayPaginationConfiguration,
  input: ListFileSystemAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListFileSystemAssociationsCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput
>(StorageGatewayClient, ListFileSystemAssociationsCommand, "Marker", "NextMarker", "Limit");

// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExascaleDbStorageVaultsCommand,
  ListExascaleDbStorageVaultsCommandInput,
  ListExascaleDbStorageVaultsCommandOutput,
} from "../commands/ListExascaleDbStorageVaultsCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExascaleDbStorageVaults: (
  config: OdbPaginationConfiguration,
  input: ListExascaleDbStorageVaultsCommandInput,
  ...rest: any[]
) => Paginator<ListExascaleDbStorageVaultsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListExascaleDbStorageVaultsCommandInput,
  ListExascaleDbStorageVaultsCommandOutput
>(OdbClient, ListExascaleDbStorageVaultsCommand, "nextToken", "nextToken", "maxResults");

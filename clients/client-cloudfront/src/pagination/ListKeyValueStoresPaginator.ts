// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListKeyValueStoresCommand,
  ListKeyValueStoresCommandInput,
  ListKeyValueStoresCommandOutput,
} from "../commands/ListKeyValueStoresCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeyValueStores: (
  config: CloudFrontPaginationConfiguration,
  input: ListKeyValueStoresCommandInput,
  ...rest: any[]
) => Paginator<ListKeyValueStoresCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListKeyValueStoresCommandInput,
  ListKeyValueStoresCommandOutput
>(CloudFrontClient, ListKeyValueStoresCommand, "Marker", "KeyValueStoreList.NextMarker", "MaxItems");

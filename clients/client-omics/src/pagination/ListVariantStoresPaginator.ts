// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVariantStoresCommand,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "../commands/ListVariantStoresCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVariantStores: (
  config: OmicsPaginationConfiguration,
  input: ListVariantStoresCommandInput,
  ...rest: any[]
) => Paginator<ListVariantStoresCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput
>(OmicsClient, ListVariantStoresCommand, "nextToken", "nextToken", "maxResults");

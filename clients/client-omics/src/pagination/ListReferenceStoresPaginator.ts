// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReferenceStoresCommand,
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "../commands/ListReferenceStoresCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReferenceStores: (
  config: OmicsPaginationConfiguration,
  input: ListReferenceStoresCommandInput,
  ...rest: any[]
) => Paginator<ListReferenceStoresCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput
>(OmicsClient, ListReferenceStoresCommand, "nextToken", "nextToken", "maxResults");

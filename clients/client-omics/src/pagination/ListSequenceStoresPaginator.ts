// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSequenceStoresCommand,
  ListSequenceStoresCommandInput,
  ListSequenceStoresCommandOutput,
} from "../commands/ListSequenceStoresCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSequenceStores: (
  config: OmicsPaginationConfiguration,
  input: ListSequenceStoresCommandInput,
  ...rest: any[]
) => Paginator<ListSequenceStoresCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListSequenceStoresCommandInput,
  ListSequenceStoresCommandOutput
>(OmicsClient, ListSequenceStoresCommand, "nextToken", "nextToken", "maxResults");

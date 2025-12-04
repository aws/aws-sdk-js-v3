// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "../commands/ListPublicKeysCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublicKeys: (
  config: IVSRealTimePaginationConfiguration,
  input: ListPublicKeysCommandInput,
  ...rest: any[]
) => Paginator<ListPublicKeysCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
>(IVSRealTimeClient, ListPublicKeysCommand, "nextToken", "nextToken", "maxResults");

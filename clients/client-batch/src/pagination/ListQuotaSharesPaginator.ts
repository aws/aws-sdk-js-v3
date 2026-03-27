// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  ListQuotaSharesCommand,
  ListQuotaSharesCommandInput,
  ListQuotaSharesCommandOutput,
} from "../commands/ListQuotaSharesCommand";
import type { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuotaShares: (
  config: BatchPaginationConfiguration,
  input: ListQuotaSharesCommandInput,
  ...rest: any[]
) => Paginator<ListQuotaSharesCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  ListQuotaSharesCommandInput,
  ListQuotaSharesCommandOutput
>(BatchClient, ListQuotaSharesCommand, "nextToken", "nextToken", "maxResults");

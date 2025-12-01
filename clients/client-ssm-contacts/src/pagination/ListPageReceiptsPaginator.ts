// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPageReceiptsCommand,
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput,
} from "../commands/ListPageReceiptsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPageReceipts: (
  config: SSMContactsPaginationConfiguration,
  input: ListPageReceiptsCommandInput,
  ...rest: any[]
) => Paginator<ListPageReceiptsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput
>(SSMContactsClient, ListPageReceiptsCommand, "NextToken", "NextToken", "MaxResults");

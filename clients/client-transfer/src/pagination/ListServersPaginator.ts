// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServers: (
  config: TransferPaginationConfiguration,
  input: ListServersCommandInput,
  ...rest: any[]
) => Paginator<ListServersCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListServersCommandInput,
  ListServersCommandOutput
>(TransferClient, ListServersCommand, "NextToken", "NextToken", "MaxResults");

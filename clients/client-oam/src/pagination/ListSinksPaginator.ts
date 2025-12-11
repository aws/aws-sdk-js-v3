// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSinksCommand, ListSinksCommandInput, ListSinksCommandOutput } from "../commands/ListSinksCommand";
import { OAMClient } from "../OAMClient";
import { OAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSinks: (
  config: OAMPaginationConfiguration,
  input: ListSinksCommandInput,
  ...rest: any[]
) => Paginator<ListSinksCommandOutput> = createPaginator<
  OAMPaginationConfiguration,
  ListSinksCommandInput,
  ListSinksCommandOutput
>(OAMClient, ListSinksCommand, "NextToken", "NextToken", "MaxResults");

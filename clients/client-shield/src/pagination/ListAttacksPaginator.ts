// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAttacksCommand, ListAttacksCommandInput, ListAttacksCommandOutput } from "../commands/ListAttacksCommand";
import { ShieldClient } from "../ShieldClient";
import { ShieldPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttacks: (
  config: ShieldPaginationConfiguration,
  input: ListAttacksCommandInput,
  ...rest: any[]
) => Paginator<ListAttacksCommandOutput> = createPaginator<
  ShieldPaginationConfiguration,
  ListAttacksCommandInput,
  ListAttacksCommandOutput
>(ShieldClient, ListAttacksCommand, "NextToken", "NextToken", "MaxResults");

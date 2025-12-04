// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrders: (
  config: OutpostsPaginationConfiguration,
  input: ListOrdersCommandInput,
  ...rest: any[]
) => Paginator<ListOrdersCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListOrdersCommandInput,
  ListOrdersCommandOutput
>(OutpostsClient, ListOrdersCommand, "NextToken", "NextToken", "MaxResults");

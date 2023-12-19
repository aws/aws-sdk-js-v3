// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListLedgersCommand, ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLedgers: (
  config: QLDBPaginationConfiguration,
  input: ListLedgersCommandInput,
  ...rest: any[]
) => Paginator<ListLedgersCommandOutput> = createPaginator<
  QLDBPaginationConfiguration,
  ListLedgersCommandInput,
  ListLedgersCommandOutput
>(QLDBClient, ListLedgersCommand, "NextToken", "NextToken", "MaxResults");

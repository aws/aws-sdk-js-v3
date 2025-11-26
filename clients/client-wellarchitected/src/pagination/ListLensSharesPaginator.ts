// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLensSharesCommand,
  ListLensSharesCommandInput,
  ListLensSharesCommandOutput,
} from "../commands/ListLensSharesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLensShares: (
  config: WellArchitectedPaginationConfiguration,
  input: ListLensSharesCommandInput,
  ...rest: any[]
) => Paginator<ListLensSharesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListLensSharesCommandInput,
  ListLensSharesCommandOutput
>(WellArchitectedClient, ListLensSharesCommand, "NextToken", "NextToken", "MaxResults");

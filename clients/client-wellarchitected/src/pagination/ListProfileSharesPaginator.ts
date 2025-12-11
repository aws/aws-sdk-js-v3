// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfileSharesCommand,
  ListProfileSharesCommandInput,
  ListProfileSharesCommandOutput,
} from "../commands/ListProfileSharesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfileShares: (
  config: WellArchitectedPaginationConfiguration,
  input: ListProfileSharesCommandInput,
  ...rest: any[]
) => Paginator<ListProfileSharesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListProfileSharesCommandInput,
  ListProfileSharesCommandOutput
>(WellArchitectedClient, ListProfileSharesCommand, "NextToken", "NextToken", "MaxResults");

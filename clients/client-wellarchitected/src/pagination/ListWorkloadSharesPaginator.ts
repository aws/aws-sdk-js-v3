// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkloadSharesCommand,
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput,
} from "../commands/ListWorkloadSharesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloadShares: (
  config: WellArchitectedPaginationConfiguration,
  input: ListWorkloadSharesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadSharesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListWorkloadSharesCommandInput,
  ListWorkloadSharesCommandOutput
>(WellArchitectedClient, ListWorkloadSharesCommand, "NextToken", "NextToken", "MaxResults");

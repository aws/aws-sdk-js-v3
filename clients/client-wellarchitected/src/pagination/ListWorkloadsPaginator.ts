// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "../commands/ListWorkloadsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloads: (
  config: WellArchitectedPaginationConfiguration,
  input: ListWorkloadsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput
>(WellArchitectedClient, ListWorkloadsCommand, "NextToken", "NextToken", "MaxResults");

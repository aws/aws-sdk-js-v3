// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvents: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListEventsCommandInput,
  ...rest: any[]
) => Paginator<ListEventsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListEventsCommandInput,
  ListEventsCommandOutput
>(DevOpsGuruClient, ListEventsCommand, "NextToken", "NextToken", "MaxResults");
